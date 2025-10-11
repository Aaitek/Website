import { useState, useEffect } from 'react'
import useSWR, { SWRConfiguration, SWRResponse } from 'swr'
import { strapiAPI } from './api'
import type {
  StrapiQuery,
  StrapiCollectionResponse,
  StrapiSingleResponse
} from './types'

/**
 * Custom React Hooks for Strapi Data Fetching
 * Using SWR for caching, revalidation, and optimistic updates
 */

// SWR configuration with reasonable defaults
const defaultSWRConfig: SWRConfiguration = {
  revalidateOnFocus: false,
  revalidateOnReconnect: true,
  dedupingInterval: 60000, // 1 minute
  errorRetryCount: 3,
  errorRetryInterval: 1000,
}

// Generic hook for collections
function useStrapiCollection<T>(
  key: string,
  fetcher: () => Promise<StrapiCollectionResponse<T>>,
  options: SWRConfiguration = {}
): SWRResponse<StrapiCollectionResponse<T>, Error> & {
  items: T[] | undefined
  isEmpty: boolean
  isLoading: boolean
  pagination: StrapiCollectionResponse<T>['meta']['pagination']
} {
  const swr = useSWR(key, fetcher, { ...defaultSWRConfig, ...options })

  return {
    ...swr,
    items: swr.data?.data,
    isEmpty: !swr.isLoading && (!swr.data?.data || swr.data.data.length === 0),
    isLoading: swr.isLoading,
    pagination: swr.data?.meta?.pagination
  }
}

// Generic hook for single entities
function useStrapiSingle<T>(
  key: string,
  fetcher: () => Promise<StrapiSingleResponse<T>>,
  options: SWRConfiguration = {}
): SWRResponse<StrapiSingleResponse<T>, Error> & {
  item: T | undefined
  isEmpty: boolean
  isLoading: boolean
} {
  const swr = useSWR(key, fetcher, { ...defaultSWRConfig, ...options })

  return {
    ...swr,
    item: swr.data?.data,
    isEmpty: !swr.isLoading && !swr.data?.data,
    isLoading: swr.isLoading
  }
}

// Services hooks
export function useServices(query: StrapiQuery = {}, options: SWRConfiguration = {}) {
  const cacheKey = `services-${JSON.stringify(query)}`

  return useStrapiCollection(
    cacheKey,
    () => strapiAPI.getServices(query),
    options
  )
}

export function useService(slug: string, query: StrapiQuery = {}, options: SWRConfiguration = {}) {
  const cacheKey = `service-${slug}-${JSON.stringify(query)}`

  return useStrapiSingle(
    slug ? cacheKey : null, // Don't fetch if no slug
    () => strapiAPI.getServiceBySlug(slug, query),
    options
  )
}

export function useFeaturedServices(query: StrapiQuery = {}, options: SWRConfiguration = {}) {
  const featuredQuery = {
    filters: {
      featured: { $eq: true }
    },
    ...query
  }

  return useServices(featuredQuery, options)
}

// Technologies hooks
export function useTechnologies(query: StrapiQuery = {}, options: SWRConfiguration = {}) {
  const cacheKey = `technologies-${JSON.stringify(query)}`

  return useStrapiCollection(
    cacheKey,
    () => strapiAPI.getTechnologies(query),
    options
  )
}

export function useFeaturedTechnologies(query: StrapiQuery = {}, options: SWRConfiguration = {}) {
  const cacheKey = `featured-technologies-${JSON.stringify(query)}`

  return useStrapiCollection(
    cacheKey,
    () => strapiAPI.getFeaturedTechnologies(query),
    options
  )
}

// Testimonials hooks
export function useTestimonials(query: StrapiQuery = {}, options: SWRConfiguration = {}) {
  const cacheKey = `testimonials-${JSON.stringify(query)}`

  return useStrapiCollection(
    cacheKey,
    () => strapiAPI.getTestimonials(query),
    options
  )
}

export function useFeaturedTestimonials(query: StrapiQuery = {}, options: SWRConfiguration = {}) {
  const cacheKey = `featured-testimonials-${JSON.stringify(query)}`

  return useStrapiCollection(
    cacheKey,
    () => strapiAPI.getFeaturedTestimonials(query),
    options
  )
}

// Team hooks
export function useTeamMembers(query: StrapiQuery = {}, options: SWRConfiguration = {}) {
  const cacheKey = `team-members-${JSON.stringify(query)}`

  return useStrapiCollection(
    cacheKey,
    () => strapiAPI.getTeamMembers(query),
    options
  )
}

// Projects hooks
export function useProjects(query: StrapiQuery = {}, options: SWRConfiguration = {}) {
  const cacheKey = `projects-${JSON.stringify(query)}`

  return useStrapiCollection(
    cacheKey,
    () => strapiAPI.getProjects(query),
    options
  )
}

export function useProject(slug: string, query: StrapiQuery = {}, options: SWRConfiguration = {}) {
  const cacheKey = `project-${slug}-${JSON.stringify(query)}`

  return useStrapiSingle(
    slug ? cacheKey : null,
    () => strapiAPI.getProjectBySlug(slug, query),
    options
  )
}

export function useFeaturedProjects(query: StrapiQuery = {}, options: SWRConfiguration = {}) {
  const cacheKey = `featured-projects-${JSON.stringify(query)}`

  return useStrapiCollection(
    cacheKey,
    () => strapiAPI.getFeaturedProjects(query),
    options
  )
}

// Pages hooks
export function usePage(slug: string, query: StrapiQuery = {}, options: SWRConfiguration = {}) {
  const cacheKey = `page-${slug}-${JSON.stringify(query)}`

  return useStrapiSingle(
    slug ? cacheKey : null,
    () => strapiAPI.getPageBySlug(slug, query),
    options
  )
}

// Global settings hook
export function useGlobalSettings(query: StrapiQuery = {}, options: SWRConfiguration = {}) {
  const cacheKey = `global-settings-${JSON.stringify(query)}`

  return useStrapiSingle(
    cacheKey,
    () => strapiAPI.getGlobal(query),
    options
  )
}

// Search hook
export function useSearch(
  searchQuery: string,
  contentTypes: string[] = ['services', 'projects', 'pages'],
  query: StrapiQuery = {},
  options: SWRConfiguration = {}
) {
  const cacheKey = `search-${searchQuery}-${JSON.stringify(contentTypes)}-${JSON.stringify(query)}`

  return useSWR(
    searchQuery ? cacheKey : null, // Don't search if no query
    () => strapiAPI.search(searchQuery, contentTypes, query),
    { ...defaultSWRConfig, ...options }
  )
}

// Custom hook for client-side filtering and pagination
export function useClientPagination<T>(
  items: T[] | undefined,
  itemsPerPage: number = 10
) {
  const [currentPage, setCurrentPage] = useState(1)

  const totalItems = items?.length || 0
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const currentItems = items?.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)))
  }

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  // Reset to page 1 when items change
  useEffect(() => {
    setCurrentPage(1)
  }, [items])

  return {
    currentItems,
    currentPage,
    totalPages,
    totalItems,
    hasNextPage: currentPage < totalPages,
    hasPreviousPage: currentPage > 1,
    goToPage,
    goToNextPage,
    goToPreviousPage,
    setCurrentPage
  }
}

// Custom hook for client-side filtering
export function useClientFilter<T>(
  items: T[] | undefined,
  filterFn: (item: T, query: string) => boolean,
  initialQuery: string = ''
) {
  const [filterQuery, setFilterQuery] = useState(initialQuery)

  const filteredItems = items?.filter(item =>
    filterQuery ? filterFn(item, filterQuery) : true
  )

  const clearFilter = () => setFilterQuery('')

  return {
    filteredItems,
    filterQuery,
    setFilterQuery,
    clearFilter,
    hasFilter: filterQuery.length > 0,
    resultCount: filteredItems?.length || 0
  }
}

// Custom hook for combining client-side filtering and pagination
export function useFilteredPagination<T>(
  items: T[] | undefined,
  filterFn: (item: T, query: string) => boolean,
  itemsPerPage: number = 10,
  initialFilterQuery: string = ''
) {
  const {
    filteredItems,
    filterQuery,
    setFilterQuery,
    clearFilter,
    hasFilter,
    resultCount
  } = useClientFilter(items, filterFn, initialFilterQuery)

  const pagination = useClientPagination(filteredItems, itemsPerPage)

  return {
    ...pagination,
    filterQuery,
    setFilterQuery,
    clearFilter,
    hasFilter,
    resultCount,
    filteredItems
  }
}