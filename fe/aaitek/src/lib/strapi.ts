import { APIResponse } from '@/types';

/**
 * Configuration for Strapi API requests
 */
interface StrapiConfig {
  baseUrl: string;
  apiToken?: string;
  timeout?: number;
  revalidate?: number;
}

/**
 * Get Strapi configuration from environment variables
 */
function getStrapiConfig(): StrapiConfig {
  const baseUrl = process.env.STRAPI_URL?.trim();
  const apiToken = process.env.STRAPI_API_TOKEN?.trim();

  if (!baseUrl) {
    throw new Error('STRAPI_URL environment variable is not set');
  }

  return {
    baseUrl,
    apiToken,
    timeout: 10000, // 10 seconds
    revalidate: 60,  // 1 minute
  };
}

/**
 * Enhanced Strapi fetch function with better error handling and type safety
 */
export async function strapiFetch<T>(
  path: string,
  query?: Record<string, string>,
  options?: {
    revalidate?: number;
    cache?: RequestCache;
    timeout?: number;
  }
): Promise<T> {
  const config = getStrapiConfig();
  const { revalidate = config.revalidate, cache = 'force-cache', timeout = config.timeout } = options || {};

  // Construct URL with query parameters
  const url = new URL(`${config.baseUrl}${path}`);
  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.set(key, value);
      }
    });
  }

  // Set up request headers
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (config.apiToken) {
    headers.Authorization = `Bearer ${config.apiToken}`;
  }

  // Create abort controller for timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url.toString(), {
      headers,
      signal: controller.signal,
      next: { revalidate },
      cache,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      let errorMessage = `HTTP ${response.status}: ${response.statusText}`;

      try {
        const errorData = await response.json();
        if (errorData.error?.message) {
          errorMessage = errorData.error.message;
        }
      } catch {
        // If JSON parsing fails, use the default error message
        const errorText = await response.text().catch(() => 'Unknown error');
        errorMessage = errorText || errorMessage;
      }

      throw new Error(`Strapi API error: ${errorMessage}`);
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    clearTimeout(timeoutId);

    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new Error(`Request timeout after ${timeout}ms`);
      }

      if (error.message.includes('fetch failed') || error.message.includes('ECONNREFUSED')) {
        throw new Error(`Failed to connect to Strapi at ${config.baseUrl}. Ensure Strapi is running.`);
      }
    }

    console.error('Strapi fetch error:', {
      path,
      query,
      error: error instanceof Error ? error.message : error,
    });

    throw error;
  }
}

/**
 * Fetch a single content item by ID or slug
 */
export async function strapiFetchOne<T>(
  contentType: string,
  identifier: string | number,
  populate?: string[],
  options?: { revalidate?: number }
): Promise<T | null> {
  const query: Record<string, string> = {};

  // Add populate parameters
  if (populate && populate.length > 0) {
    populate.forEach((field, index) => {
      if (field === 'Image') {
        // For Image fields, populate the necessary sub-fields
        query[`populate[${index}]`] = field;
      } else {
        // For other relations, populate all fields
        query[`populate[${index}]`] = field;
      }
    });
  }

  // Add filter based on identifier type
  if (typeof identifier === 'string' && isNaN(Number(identifier))) {
    query['filters[slug][$eq]'] = identifier;
  } else {
    query['filters[id][$eq]'] = String(identifier);
  }

  query['pagination[pageSize]'] = '1';

  try {
    const response = await strapiFetch<APIResponse<T>>(
      `/api/${contentType}`,
      query,
      options
    );

    return response.data?.[0] || null;
  } catch (error) {
    console.error(`Error fetching ${contentType}:`, error);
    return null;
  }
}

/**
 * Fetch multiple content items with pagination
 */
export async function strapiFetchMany<T>(
  contentType: string,
  options?: {
    page?: number;
    pageSize?: number;
    populate?: string[];
    filters?: Record<string, string | number | boolean>;
    sort?: string;
    revalidate?: number;
  }
): Promise<APIResponse<T>> {
  const {
    page = 1,
    pageSize = 10,
    populate = [],
    filters = {},
    sort,
    revalidate,
  } = options || {};

  const query: Record<string, string> = {
    'pagination[page]': String(page),
    'pagination[pageSize]': String(pageSize),
  };

  // Add populate parameters
  populate.forEach((field, index) => {
    if (field === 'Image') {
      // For Image fields, populate the necessary sub-fields
      query[`populate[${index}]`] = field;
    } else {
      // For other relations, populate all fields
      query[`populate[${index}]`] = field;
    }
  });

  // Add filters
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      if (typeof value === 'object' && !Array.isArray(value)) {
        // Handle filter operators like $ne, $eq, etc.
        Object.entries(value).forEach(([operator, operatorValue]) => {
          query[`filters[${key}][${operator}]`] = String(operatorValue);
        });
      } else {
        // Simple filter
        query[`filters[${key}][$eq]`] = String(value);
      }
    }
  });

  // Add sorting
  if (sort) {
    query['sort'] = sort;
  }

  try {
    return await strapiFetch<APIResponse<T>>(
      `/api/${contentType}`,
      query,
      { revalidate }
    );
  } catch (error) {
    console.error(`Error fetching ${contentType} list:`, error);
    return { data: [] };
  }
}
