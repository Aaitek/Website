/**
 * Strapi API Configuration
 * Centralized configuration for Strapi integration
 */

export const strapiConfig = {
  // Base API URL - remove trailing slash
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337',

  // API endpoints
  endpoints: {
    api: '/api',
    auth: '/api/auth',
    upload: '/api/upload',
    users: '/api/users',
  },

  // Authentication
  auth: {
    token: process.env.STRAPI_API_TOKEN,
    adminJWT: process.env.STRAPI_ADMIN_JWT_SECRET,
  },

  // Request configuration
  timeout: 10000, // 10 seconds
  retries: 3,

  // Content types - update these based on your Strapi content types
  contentTypes: {
    // Pages and content
    pages: 'pages',
    posts: 'posts',
    categories: 'categories',

    // Aaitek specific content types
    services: 'services',
    technologies: 'technologies',
    testimonials: 'testimonials',
    team: 'team-members',
    projects: 'projects',
    casestudies: 'case-studies',

    // Global content
    global: 'global',
    navigation: 'navigation',
    footer: 'footer',
    seo: 'seo-settings',

    // Media and assets
    media: 'media',
    files: 'upload/files',
  },

  // Populate configurations for common relations
  populate: {
    // Basic populate for SEO and media
    basic: ['seo', 'media', 'image', 'images'],

    // Deep populate for complex content
    deep: {
      populate: {
        seo: {
          populate: '*'
        },
        media: {
          populate: '*'
        },
        image: {
          populate: '*'
        },
        images: {
          populate: '*'
        },
        category: {
          populate: '*'
        },
        author: {
          populate: ['avatar']
        }
      }
    },

    // Specific populates for different content types
    services: {
      populate: {
        icon: true,
        image: true,
        features: true,
        technologies: true,
        seo: {
          populate: '*'
        }
      }
    },

    testimonials: {
      populate: {
        avatar: true,
        company_logo: true
      }
    },

    team: {
      populate: {
        avatar: true,
        social_links: true
      }
    },

    projects: {
      populate: {
        featured_image: true,
        gallery: true,
        technologies: true,
        client_logo: true,
        seo: {
          populate: '*'
        }
      }
    }
  },

  // Default query parameters
  defaultParams: {
    sort: ['createdAt:desc'],
    pagination: {
      pageSize: 10,
      page: 1
    },
    publicationState: 'live'
  },

  // Image optimization settings
  imageSettings: {
    formats: ['thumbnail', 'small', 'medium', 'large'],
    defaultFormat: 'medium',
    quality: 85,
    progressive: true,
    stripMetadata: true
  }
} as const

// Helper function to build API URLs
export const buildStrapiURL = (path: string): string => {
  const baseURL = strapiConfig.baseURL.replace(/\/$/, '') // Remove trailing slash
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${baseURL}${cleanPath}`
}

// Helper function to build media URLs
export const buildMediaURL = (url: string | null | undefined): string | null => {
  if (!url) return null

  // If it's already a full URL, return as is
  if (url.startsWith('http')) return url

  // Build full URL from relative path
  return buildStrapiURL(url)
}

// Environment validation
export const validateStrapiConfig = (): boolean => {
  const requiredEnvVars = ['NEXT_PUBLIC_STRAPI_URL']

  const missing = requiredEnvVars.filter(envVar => !process.env[envVar])

  if (missing.length > 0) {
    console.error('Missing required environment variables for Strapi:', missing)
    return false
  }

  return true
}

// Types for configuration
export type StrapiContentType = keyof typeof strapiConfig.contentTypes
export type StrapiEndpoint = keyof typeof strapiConfig.endpoints