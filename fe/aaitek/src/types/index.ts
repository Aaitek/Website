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