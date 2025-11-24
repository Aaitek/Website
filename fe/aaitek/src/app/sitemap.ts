import { MetadataRoute } from 'next'
import { strapiFetch } from '@/lib/strapi'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://aaitek.com'

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
  ]

  // Fetch blogs for dynamic sitemap entries
  let blogPages: MetadataRoute.Sitemap = []
  try {
    const blogsResponse = await strapiFetch<{ data: any[] }>('/api/blogs', {
      fields: 'slug,publishedAt,updatedAt',
      'pagination[pageSize]': '100',
      sort: 'publishedAt:desc',
    })

    blogPages = blogsResponse.data?.map((blog) => ({
      url: `${baseUrl}/blogs/${blog.slug || blog.id}`,
      lastModified: new Date(blog.updatedAt || blog.publishedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })) || []
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error)
  }

  // Fetch categories for blog category pages
  let categoryPages: MetadataRoute.Sitemap = []
  try {
    const categoriesResponse = await strapiFetch<{ data: any[] }>('/api/categories', {
      fields: 'slug,updatedAt',
      'pagination[pageSize]': '50',
    })

    categoryPages = categoriesResponse.data?.map((category) => ({
      url: `${baseUrl}/blogs?category=${category.slug}`,
      lastModified: new Date(category.updatedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })) || []
  } catch (error) {
    console.error('Error fetching categories for sitemap:', error)
  }

  return [...staticPages, ...blogPages, ...categoryPages]
}