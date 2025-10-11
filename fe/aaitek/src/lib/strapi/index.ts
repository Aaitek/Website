/**
 * Strapi Integration - Main Export File
 * Centralized exports for all Strapi functionality
 */

// API Client
export { strapiAPI, buildMediaURL, buildStrapiURL, getStrapiMedia, getStrapiMediaAlt } from './api'

// Configuration
export { strapiConfig, validateStrapiConfig } from './config'
export type { StrapiContentType, StrapiEndpoint } from './config'

// Types and Schemas
export type {
  // Base types
  StrapiResponse,
  StrapiMeta,
  StrapiPagination,
  StrapiAttributes,
  StrapiEntity,
  StrapiMedia,
  StrapiMediaFormat,
  StrapiQuery,
  StrapiError,
  StrapiErrorDetail,
  StrapiCollectionResponse,
  StrapiSingleResponse,
  StrapiContentTypes,

  // Content types
  Service,
  ServiceAttributes,
  Technology,
  TechnologyAttributes,
  Testimonial,
  TestimonialAttributes,
  TeamMember,
  TeamMemberAttributes,
  Project,
  ProjectAttributes,
  Page,
  PageAttributes,
  Global,
  GlobalAttributes,
  SeoAttributes
} from './types'

export {
  // Zod schemas
  SeoSchema,
  ServiceSchema,
  TechnologySchema,
  TestimonialSchema,
  TeamMemberSchema,
  ProjectSchema,
  PageSchema,
  GlobalSchema
} from './types'

// Hooks
export {
  // Services
  useServices,
  useService,
  useFeaturedServices,

  // Technologies
  useTechnologies,
  useFeaturedTechnologies,

  // Testimonials
  useTestimonials,
  useFeaturedTestimonials,

  // Team
  useTeamMembers,

  // Projects
  useProjects,
  useProject,
  useFeaturedProjects,

  // Pages
  usePage,

  // Global
  useGlobalSettings,

  // Search
  useSearch,

  // Utility hooks
  useClientPagination,
  useClientFilter,
  useFilteredPagination
} from './hooks'

// Utility functions
export const formatStrapiDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export const formatStrapiDateTime = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

export const extractStrapiText = (richText: string): string => {
  // Simple function to extract plain text from Strapi rich text
  // You might want to use a more sophisticated markdown parser
  return richText
    .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Convert links to text
    .replace(/[#*_`~]/g, '') // Remove markdown symbols
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim()
}

export const truncateText = (text: string, length: number = 150): string => {
  if (text.length <= length) return text
  return text.substring(0, length).trim() + '...'
}

export const generateSEOMetadata = (seo?: SeoAttributes, defaults?: Partial<SeoAttributes>) => {
  const metadata = {
    title: seo?.metaTitle || defaults?.metaTitle || 'Aaitek Technology Specialists',
    description: seo?.metaDescription || defaults?.metaDescription || 'Leading technology solutions and digital transformation experts',
    keywords: seo?.keywords || defaults?.keywords,
    robots: seo?.metaRobots || 'index, follow',
    openGraph: {
      title: seo?.metaTitle || defaults?.metaTitle || 'Aaitek Technology Specialists',
      description: seo?.metaDescription || defaults?.metaDescription || 'Leading technology solutions and digital transformation experts',
      images: seo?.metaImage ? [getStrapiMedia(seo.metaImage, 'large')] : undefined
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: seo?.metaTitle || defaults?.metaTitle || 'Aaitek Technology Specialists',
      description: seo?.metaDescription || defaults?.metaDescription || 'Leading technology solutions and digital transformation experts',
      images: seo?.metaImage ? [getStrapiMedia(seo.metaImage, 'large')] : undefined
    }
  }

  // Remove undefined values
  return Object.fromEntries(
    Object.entries(metadata).filter(([, value]) => value !== undefined)
  )
}