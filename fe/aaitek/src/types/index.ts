// Shared type definitions for the Aaitek application

/**
 * Media format from Strapi
 */
export interface MediaFormat {
  url: string;
  width: number;
  height: number;
  size?: number;
  name?: string;
}

/**
 * Media object from Strapi
 */
export interface Media {
  id?: number;
  url: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: Record<string, MediaFormat>;
}

/**
 * Base content type from Strapi
 */
export interface BaseContent {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  locale?: string;
}

/**
 * Event content type
 */
export interface Event extends BaseContent {
  Title: string;
  Description?: string;
  Content?: string;
  slug?: string;
  Image?: Media[];
  featured?: boolean;
  startDate?: string;
  endDate?: string;
  location?: string;
}

/**
 * Category content type
 */
export interface Category extends BaseContent {
  name: string;
  slug: string;
  description?: string;
  color?: string;
  icon?: string;
}

/**
 * Partial category for API responses that don't include all fields
 */
export interface CategorySummary {
  id?: number;
  name: string;
  slug: string;
  description?: string;
  color?: string;
  icon?: string;
  createdAt?: string;
  updatedAt?: string;
}

/**
 * Author content type
 */
export interface Author extends BaseContent {
  name: string;
  slug: string;
  bio?: string;
  avatar?: Media[];
}

/**
 * Tag content type
 */
export interface Tag extends BaseContent {
  name: string;
  slug: string;
  color?: string;
}

/**
 * Blog content type
 */
export interface Blog extends BaseContent {
  Title: string;
  Description?: string;
  Content?: string;
  slug?: string;
  Image?: Media[];
  featured?: boolean;
  category?: Category;
  author?: Author;
  tags?: Tag[];
  readTime?: number;
}

/**
 * Partial blog for API responses that don't include all fields
 */
export interface BlogSummary {
  id?: number;
  Title: string;
  Description?: string;
  Content?: string;
  slug?: string;
  Image?: Media[];
  featured?: boolean;
  category?: CategorySummary;
  author?: {
    id?: number;
    name: string;
    slug: string;
    bio?: string;
    avatar?: Media[];
  };
  tags?: {
    id?: number;
    name: string;
    slug: string;
    color?: string;
  }[];
  readTime?: number;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

/**
 * API Response wrapper from Strapi
 */
export interface APIResponse<T> {
  data: T[];
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

/**
 * Page props for Next.js pages
 */
export interface PageProps {
  params: Promise<{ [key: string]: string | string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

/**
 * Navigation link interface
 */
export interface NavLink {
  href: string;
  label: string;
  isActive?: boolean;
  external?: boolean;
}

/**
 * SEO metadata interface
 */
export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

/**
 * Contact form data interface
 */
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  subject?: string;
}

/**
 * Generic error interface
  width: number;
  height: number;
  size?: number;
  name?: string;
}

/**
 * Media object from Strapi
 */
export interface Media {
  id?: number;
  url: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: Record<string, MediaFormat>;
}

/**
 * Base content type from Strapi
 */
export interface BaseContent {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  locale?: string;
}

/**
 * Event content type
 */
export interface Event extends BaseContent {
  Title: string;
  Description?: string;
  Content?: string;
  slug?: string;
  Image?: Media[];
  featured?: boolean;
  startDate?: string;
  endDate?: string;
  location?: string;
}

/**
 * Category content type
 */
export interface Category extends BaseContent {
  name: string;
  slug: string;
  description?: string;
  color?: string;
  icon?: string;
}

/**
 * Partial category for API responses that don't include all fields
 */
export interface CategorySummary {
  id?: number;
  name: string;
  slug: string;
  description?: string;
  color?: string;
  icon?: string;
  createdAt?: string;
  updatedAt?: string;
}

/**
 * Author content type
 */
export interface Author extends BaseContent {
  name: string;
  slug: string;
  bio?: string;
  avatar?: Media[];
}

/**
 * Tag content type
 */
export interface Tag extends BaseContent {
  name: string;
  slug: string;
  color?: string;
}

/**
 * Blog content type
 */
export interface Blog extends BaseContent {
  Title: string;
  Description?: string;
  Content?: string;
  slug?: string;
  Image?: Media[];
  featured?: boolean;
  category?: Category;
  author?: Author;
  tags?: Tag[];
  readTime?: number;
}

/**
 * Partial blog for API responses that don't include all fields
 */
export interface BlogSummary {
  id?: number;
  Title: string;
  Description?: string;
  Content?: string;
  slug?: string;
  Image?: Media[];
  featured?: boolean;
  category?: CategorySummary;
  author?: {
    id?: number;
    name: string;
    slug: string;
    bio?: string;
    avatar?: Media[];
  };
  tags?: {
    id?: number;
    name: string;
    slug: string;
    color?: string;
  }[];
  readTime?: number;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

/**
 * API Response wrapper from Strapi
 */
export interface APIResponse<T> {
  data: T[];
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

/**
 * Page props for Next.js pages
 */
export interface PageProps {
  params: Promise<{ [key: string]: string | string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

/**
 * Navigation link interface
 */
export interface NavLink {
  href: string;
  label: string;
  isActive?: boolean;
  external?: boolean;
}

/**
 * SEO metadata interface
 */
export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

/**
 * Contact form data interface
 */
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  subject?: string;
}

/**
 * Generic error interface
 */
export interface AppError {
  message: string;
  code?: string;
  statusCode?: number;
  details?: Record<string, unknown>;
}

/**
 * WordPress Post Types
 */
export interface WordPressPost {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
      media_details?: {
        sizes?: Record<string, {
          source_url: string;
          width: number;
          height: number;
        }>;
      };
    }>;
    author?: Array<{
      id: number;
      name: string;
      description: string;
      avatar_urls?: Record<string, string>;
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
      taxonomy: string;
    }>>;
  };
}