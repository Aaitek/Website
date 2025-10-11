import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios'
import qs from 'qs'
import { strapiConfig, buildStrapiURL, buildMediaURL } from './config'
import type {
  StrapiQuery,
  StrapiCollectionResponse,
  StrapiSingleResponse,
  StrapiError,
  StrapiEntity,
  Service,
  Technology,
  Testimonial,
  TeamMember,
  Project,
  Page,
  Global,
  StrapiMedia
} from './types'

/**
 * Strapi API Client
 * Centralized API client for all Strapi operations
 */

class StrapiAPI {
  private client: AxiosInstance

  constructor() {
    this.client = axios.create({
      baseURL: buildStrapiURL('/api'),
      timeout: strapiConfig.timeout,
      headers: {
        'Content-Type': 'application/json',
      },
      paramsSerializer: (params) => {
        return qs.stringify(params, { encodeValuesOnly: true })
      }
    })

    // Add auth token if available
    if (strapiConfig.auth.token) {
      this.client.defaults.headers.common['Authorization'] = `Bearer ${strapiConfig.auth.token}`
    }

    // Add request interceptor for logging
    this.client.interceptors.request.use(
      (config) => {
        if (process.env.NODE_ENV === 'development') {
          console.log(`🚀 Strapi API Request: ${config.method?.toUpperCase()} ${config.url}`)
        }
        return config
      },
      (error) => {
        console.error('❌ Strapi API Request Error:', error)
        return Promise.reject(error)
      }
    )

    // Add response interceptor for error handling
    this.client.interceptors.response.use(
      (response) => {
        if (process.env.NODE_ENV === 'development') {
          console.log(`✅ Strapi API Response: ${response.status} ${response.config.url}`)
        }
        return response
      },
      (error: AxiosError<StrapiError>) => {
        console.error('❌ Strapi API Error:', {
          status: error.response?.status,
          message: error.response?.data?.message || error.message,
          url: error.config?.url
        })
        return Promise.reject(this.handleError(error))
      }
    )
  }

  private handleError(error: AxiosError<StrapiError>): Error {
    if (error.response?.data) {
      const strapiError = error.response.data
      return new Error(`Strapi API Error (${strapiError.status}): ${strapiError.message}`)
    }
    return new Error(`Network Error: ${error.message}`)
  }

  /**
   * Generic method to fetch collection data
   */
  async getCollection<T>(
    contentType: string,
    query: StrapiQuery = {}
  ): Promise<StrapiCollectionResponse<StrapiEntity<T>>> {
    const params = {
      ...strapiConfig.defaultParams,
      ...query
    }

    const response: AxiosResponse<StrapiCollectionResponse<StrapiEntity<T>>> =
      await this.client.get(`/${contentType}`, { params })

    return response.data
  }

  /**
   * Generic method to fetch single entity data
   */
  async getSingle<T>(
    contentType: string,
    id: string | number,
    query: StrapiQuery = {}
  ): Promise<StrapiSingleResponse<StrapiEntity<T>>> {
    const params = query

    const response: AxiosResponse<StrapiSingleResponse<StrapiEntity<T>>> =
      await this.client.get(`/${contentType}/${id}`, { params })

    return response.data
  }

  /**
   * Method to fetch single entity by slug
   */
  async getBySlug<T>(
    contentType: string,
    slug: string,
    query: StrapiQuery = {}
  ): Promise<StrapiSingleResponse<StrapiEntity<T>>> {
    const params = {
      filters: {
        slug: {
          $eq: slug
        }
      },
      ...query
    }

    const response: AxiosResponse<StrapiCollectionResponse<StrapiEntity<T>>> =
      await this.client.get(`/${contentType}`, { params })

    if (!response.data.data || response.data.data.length === 0) {
      throw new Error(`No ${contentType} found with slug: ${slug}`)
    }

    return {
      data: response.data.data[0],
      meta: response.data.meta
    }
  }

  // Content-specific methods

  /**
   * Get all services
   */
  async getServices(query: StrapiQuery = {}): Promise<StrapiCollectionResponse<Service>> {
    return this.getCollection<Service>(strapiConfig.contentTypes.services, {
      populate: strapiConfig.populate.services,
      ...query
    })
  }

  /**
   * Get service by slug
   */
  async getServiceBySlug(slug: string, query: StrapiQuery = {}): Promise<StrapiSingleResponse<Service>> {
    return this.getBySlug<Service>(strapiConfig.contentTypes.services, slug, {
      populate: strapiConfig.populate.services,
      ...query
    })
  }

  /**
   * Get all technologies
   */
  async getTechnologies(query: StrapiQuery = {}): Promise<StrapiCollectionResponse<Technology>> {
    return this.getCollection<Technology>(strapiConfig.contentTypes.technologies, query)
  }

  /**
   * Get featured technologies
   */
  async getFeaturedTechnologies(query: StrapiQuery = {}): Promise<StrapiCollectionResponse<Technology>> {
    return this.getCollection<Technology>(strapiConfig.contentTypes.technologies, {
      filters: {
        featured: {
          $eq: true
        }
      },
      ...query
    })
  }

  /**
   * Get all testimonials
   */
  async getTestimonials(query: StrapiQuery = {}): Promise<StrapiCollectionResponse<Testimonial>> {
    return this.getCollection<Testimonial>(strapiConfig.contentTypes.testimonials, {
      populate: strapiConfig.populate.testimonials,
      ...query
    })
  }

  /**
   * Get featured testimonials
   */
  async getFeaturedTestimonials(query: StrapiQuery = {}): Promise<StrapiCollectionResponse<Testimonial>> {
    return this.getCollection<Testimonial>(strapiConfig.contentTypes.testimonials, {
      filters: {
        featured: {
          $eq: true
        }
      },
      populate: strapiConfig.populate.testimonials,
      ...query
    })
  }

  /**
   * Get all team members
   */
  async getTeamMembers(query: StrapiQuery = {}): Promise<StrapiCollectionResponse<TeamMember>> {
    return this.getCollection<TeamMember>(strapiConfig.contentTypes.team, {
      populate: strapiConfig.populate.team,
      ...query
    })
  }

  /**
   * Get all projects
   */
  async getProjects(query: StrapiQuery = {}): Promise<StrapiCollectionResponse<Project>> {
    return this.getCollection<Project>(strapiConfig.contentTypes.projects, {
      populate: strapiConfig.populate.projects,
      ...query
    })
  }

  /**
   * Get project by slug
   */
  async getProjectBySlug(slug: string, query: StrapiQuery = {}): Promise<StrapiSingleResponse<Project>> {
    return this.getBySlug<Project>(strapiConfig.contentTypes.projects, slug, {
      populate: strapiConfig.populate.projects,
      ...query
    })
  }

  /**
   * Get featured projects
   */
  async getFeaturedProjects(query: StrapiQuery = {}): Promise<StrapiCollectionResponse<Project>> {
    return this.getCollection<Project>(strapiConfig.contentTypes.projects, {
      filters: {
        featured: {
          $eq: true
        }
      },
      populate: strapiConfig.populate.projects,
      ...query
    })
  }

  /**
   * Get page by slug
   */
  async getPageBySlug(slug: string, query: StrapiQuery = {}): Promise<StrapiSingleResponse<Page>> {
    return this.getBySlug<Page>(strapiConfig.contentTypes.pages, slug, {
      populate: strapiConfig.populate.deep,
      ...query
    })
  }

  /**
   * Get global settings
   */
  async getGlobal(query: StrapiQuery = {}): Promise<StrapiSingleResponse<Global>> {
    const response = await this.getCollection<Global>(strapiConfig.contentTypes.global, {
      populate: strapiConfig.populate.deep,
      ...query
    })

    if (!response.data || response.data.length === 0) {
      throw new Error('Global settings not found')
    }

    return {
      data: response.data[0],
      meta: response.meta
    }
  }

  /**
   * Upload file to Strapi
   */
  async uploadFile(file: File, folder?: string): Promise<StrapiMedia[]> {
    const formData = new FormData()
    formData.append('files', file)

    if (folder) {
      formData.append('path', folder)
    }

    const response: AxiosResponse<StrapiMedia[]> = await this.client.post(
      '/upload',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )

    return response.data
  }

  /**
   * Search across content types
   */
  async search(
    query: string,
    contentTypes: string[] = ['services', 'projects', 'pages'],
    options: StrapiQuery = {}
  ): Promise<{
    services: StrapiCollectionResponse<Service>
    projects: StrapiCollectionResponse<Project>
    pages: StrapiCollectionResponse<Page>
  }> {
    const searchPromises = contentTypes.map(async (contentType) => {
      const searchQuery: StrapiQuery = {
        filters: {
          $or: [
            {
              title: {
                $containsi: query
              }
            },
            {
              description: {
                $containsi: query
              }
            },
            {
              content: {
                $containsi: query
              }
            }
          ]
        },
        ...options
      }

      const result = await this.getCollection(contentType, searchQuery)
      return { [contentType]: result }
    })

    const results = await Promise.all(searchPromises)
    return results.reduce((acc, result) => ({ ...acc, ...result }), {} as Record<string, StrapiCollectionResponse<StrapiEntity>>)
  }
}

// Create and export singleton instance
export const strapiAPI = new StrapiAPI()

// Export utility functions
export { buildMediaURL, buildStrapiURL } from './config'

// Export helper functions
export const getStrapiMedia = (media: StrapiMedia | null | undefined, format: 'thumbnail' | 'small' | 'medium' | 'large' = 'medium'): string | null => {
  if (!media) return null

  const { attributes } = media

  if (attributes.formats && attributes.formats[format]) {
    return buildMediaURL(attributes.formats[format].url)
  }

  return buildMediaURL(attributes.url)
}

export const getStrapiMediaAlt = (media: StrapiMedia | null | undefined): string => {
  if (!media) return ''
  return media.attributes.alternativeText || media.attributes.name || ''
}