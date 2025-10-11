import { z } from 'zod'

/**
 * Strapi Types and Schemas
 * Type definitions for Strapi API responses and content
 */

// Base Strapi types
export interface StrapiResponse<T> {
  data: T
  meta: StrapiMeta
}

export interface StrapiMeta {
  pagination?: StrapiPagination
}

export interface StrapiPagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export interface StrapiAttributes {
  createdAt: string
  updatedAt: string
  publishedAt?: string
  locale?: string
}

export interface StrapiEntity<T = Record<string, unknown>> {
  id: number
  attributes: T & StrapiAttributes
}

export interface StrapiMediaFormat {
  name: string
  hash: string
  ext: string
  mime: string
  path?: string
  width: number
  height: number
  size: number
  url: string
}

export interface StrapiMedia {
  id: number
  attributes: {
    name: string
    alternativeText?: string
    caption?: string
    width: number
    height: number
    formats?: {
      thumbnail?: StrapiMediaFormat
      small?: StrapiMediaFormat
      medium?: StrapiMediaFormat
      large?: StrapiMediaFormat
    }
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl?: string
    provider: string
    provider_metadata?: Record<string, unknown>
  } & StrapiAttributes
}

// SEO Component Schema
export const SeoSchema = z.object({
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  keywords: z.string().optional(),
  metaRobots: z.string().optional(),
  structuredData: z.any().optional(),
  metaViewport: z.string().optional(),
  canonicalURL: z.string().optional(),
  metaImage: z.any().optional(), // StrapiMedia
  metaSocial: z.array(z.object({
    socialNetwork: z.enum(['Facebook', 'Twitter', 'LinkedIn']),
    title: z.string(),
    description: z.string(),
    image: z.any().optional() // StrapiMedia
  })).optional()
})

export type SeoAttributes = z.infer<typeof SeoSchema>

// Service Content Type
export const ServiceSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  shortDescription: z.string().optional(),
  icon: z.any().optional(), // StrapiMedia
  image: z.any().optional(), // StrapiMedia
  content: z.string().optional(),
  features: z.array(z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional()
  })).optional(),
  technologies: z.array(z.object({
    name: z.string(),
    description: z.string().optional(),
    logo: z.any().optional() // StrapiMedia
  })).optional(),
  pricing: z.object({
    startingPrice: z.number().optional(),
    currency: z.string().default('USD'),
    priceType: z.enum(['fixed', 'hourly', 'project']).optional()
  }).optional(),
  seo: SeoSchema.optional(),
  featured: z.boolean().default(false),
  order: z.number().optional()
})

export type ServiceAttributes = z.infer<typeof ServiceSchema>
export type Service = StrapiEntity<ServiceAttributes>

// Technology Content Type
export const TechnologySchema = z.object({
  name: z.string(),
  slug: z.string(),
  description: z.string(),
  logo: z.any().optional(), // StrapiMedia
  website: z.string().url().optional(),
  category: z.enum(['CMS', 'Framework', 'Database', 'Cloud', 'DevOps', 'Analytics']),
  expertise_level: z.enum(['Beginner', 'Intermediate', 'Advanced', 'Expert']),
  years_experience: z.number().optional(),
  projects_count: z.number().optional(),
  featured: z.boolean().default(false),
  order: z.number().optional()
})

export type TechnologyAttributes = z.infer<typeof TechnologySchema>
export type Technology = StrapiEntity<TechnologyAttributes>

// Testimonial Content Type
export const TestimonialSchema = z.object({
  name: z.string(),
  position: z.string(),
  company: z.string(),
  content: z.string(),
  rating: z.number().min(1).max(5),
  avatar: z.any().optional(), // StrapiMedia
  company_logo: z.any().optional(), // StrapiMedia
  project_link: z.string().url().optional(),
  featured: z.boolean().default(false),
  order: z.number().optional()
})

export type TestimonialAttributes = z.infer<typeof TestimonialSchema>
export type Testimonial = StrapiEntity<TestimonialAttributes>

// Team Member Content Type
export const TeamMemberSchema = z.object({
  name: z.string(),
  position: z.string(),
  bio: z.string(),
  avatar: z.any().optional(), // StrapiMedia
  email: z.string().email().optional(),
  social_links: z.object({
    linkedin: z.string().url().optional(),
    twitter: z.string().url().optional(),
    github: z.string().url().optional(),
    website: z.string().url().optional()
  }).optional(),
  skills: z.array(z.string()).optional(),
  years_experience: z.number().optional(),
  featured: z.boolean().default(false),
  order: z.number().optional()
})

export type TeamMemberAttributes = z.infer<typeof TeamMemberSchema>
export type TeamMember = StrapiEntity<TeamMemberAttributes>

// Project/Case Study Content Type
export const ProjectSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  content: z.string(),
  featured_image: z.any().optional(), // StrapiMedia
  gallery: z.array(z.any()).optional(), // Array of StrapiMedia
  client: z.string(),
  client_logo: z.any().optional(), // StrapiMedia
  project_url: z.string().url().optional(),
  github_url: z.string().url().optional(),
  technologies: z.array(z.object({
    name: z.string(),
    logo: z.any().optional() // StrapiMedia
  })).optional(),
  duration: z.string().optional(),
  team_size: z.number().optional(),
  project_type: z.enum(['Web Development', 'Mobile App', 'CMS Implementation', 'E-commerce', 'Custom Software']),
  results: z.object({
    performance_improvement: z.string().optional(),
    user_growth: z.string().optional(),
    conversion_increase: z.string().optional(),
    other_metrics: z.string().optional()
  }).optional(),
  seo: SeoSchema.optional(),
  featured: z.boolean().default(false),
  order: z.number().optional()
})

export type ProjectAttributes = z.infer<typeof ProjectSchema>
export type Project = StrapiEntity<ProjectAttributes>

// Page Content Type
export const PageSchema = z.object({
  title: z.string(),
  slug: z.string(),
  content: z.string(),
  template: z.enum(['default', 'landing', 'service', 'about', 'contact']).optional(),
  seo: SeoSchema.optional(),
  published: z.boolean().default(true)
})

export type PageAttributes = z.infer<typeof PageSchema>
export type Page = StrapiEntity<PageAttributes>

// Global Settings Content Type
export const GlobalSchema = z.object({
  site_name: z.string(),
  site_description: z.string(),
  logo: z.any().optional(), // StrapiMedia
  favicon: z.any().optional(), // StrapiMedia
  default_seo: SeoSchema.optional(),
  contact_info: z.object({
    email: z.string().email(),
    phone: z.string(),
    address: z.string(),
    business_hours: z.string().optional()
  }),
  social_links: z.object({
    linkedin: z.string().url().optional(),
    twitter: z.string().url().optional(),
    facebook: z.string().url().optional(),
    instagram: z.string().url().optional(),
    youtube: z.string().url().optional(),
    github: z.string().url().optional()
  }).optional(),
  analytics: z.object({
    google_analytics_id: z.string().optional(),
    google_tag_manager_id: z.string().optional(),
    facebook_pixel_id: z.string().optional()
  }).optional()
})

export type GlobalAttributes = z.infer<typeof GlobalSchema>
export type Global = StrapiEntity<GlobalAttributes>

// API Query Types
export interface StrapiQuery {
  sort?: string | string[]
  filters?: Record<string, unknown>
  populate?: string | string[] | Record<string, unknown>
  fields?: string[]
  pagination?: {
    page?: number
    pageSize?: number
    start?: number
    limit?: number
  }
  publicationState?: 'live' | 'preview'
  locale?: string
}

export interface StrapiErrorDetail {
  path: string[]
  message: string
  name: string
}

export interface StrapiError {
  status: number
  name: string
  message: string
  details?: {
    errors?: StrapiErrorDetail[]
  }
}

// Utility types
export type StrapiContentTypes =
  | Service
  | Technology
  | Testimonial
  | TeamMember
  | Project
  | Page
  | Global

export type StrapiCollectionResponse<T> = StrapiResponse<T[]>
export type StrapiSingleResponse<T> = StrapiResponse<T>