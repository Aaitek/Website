import { Metadata } from 'next';
import { Blog, Category, Event } from '@/types';

// SEO Configuration Constants
export const SEO_CONFIG = {
  siteName: 'Aaitek Technology Specialists',
  siteUrl: 'https://aaitek.com',
  defaultTitle: 'Aaitek Technology Specialists - Innovating Solutions for Tomorrow',
  defaultDescription: 'Leading technology specialists with 20+ years of experience in digital transformation, headless CMS solutions, and innovative technology consulting. Experts in Contentful, Umbraco, Contentstack, Kentico, Strapi, and Sitecore XM Cloud.',
  defaultImage: '/img/aaitek-og-default.png',
  twitterHandle: '@aaitek',
  locale: 'en_US',
  themeColor: '#FBD506',
  backgroundColor: '#1C1C1C',
} as const;

// Enhanced metadata generation function
interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
  tags?: string[];
  noindex?: boolean;
  canonical?: string;
}

export function generateSEOMetadata({
  title,
  description = SEO_CONFIG.defaultDescription,
  keywords = [],
  image = SEO_CONFIG.defaultImage,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors = [SEO_CONFIG.siteName],
  section,
  tags = [],
  noindex = false,
  canonical,
}: SEOProps = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${SEO_CONFIG.siteName}`
    : SEO_CONFIG.defaultTitle;

  const fullUrl = url ? `${SEO_CONFIG.siteUrl}${url}` : SEO_CONFIG.siteUrl;
  const fullImage = image.startsWith('http') ? image : `${SEO_CONFIG.siteUrl}${image}`;

  // Default keywords based on site focus
  const defaultKeywords = [
    'Aaitek',
    'technology specialists',
    'digital transformation',
    'headless CMS',
    'Contentful',
    'Umbraco',
    'Contentstack',
    'Kentico',
    'Strapi',
    'Sitecore',
    'web development',
    'consulting',
    'innovation',
    'technology solutions'
  ];

  const allKeywords = [...new Set([...defaultKeywords, ...keywords])];

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: allKeywords.join(', '),
    authors: authors.map(name => ({ name })),
    creator: SEO_CONFIG.siteName,
    publisher: SEO_CONFIG.siteName,
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type,
      locale: SEO_CONFIG.locale,
      url: fullUrl,
      siteName: SEO_CONFIG.siteName,
      title: fullTitle,
      description,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title || SEO_CONFIG.defaultTitle,
          type: 'image/png',
        },
      ],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors,
        section,
        tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      site: SEO_CONFIG.twitterHandle,
      creator: SEO_CONFIG.twitterHandle,
      title: fullTitle,
      description,
      images: [fullImage],
    },
    alternates: {
      canonical: canonical || fullUrl,
      types: {
        'application/rss+xml': `${SEO_CONFIG.siteUrl}/feed.xml`,
      },
    },
    other: {
      'theme-color': SEO_CONFIG.themeColor,
      'msapplication-TileColor': SEO_CONFIG.themeColor,
      'msapplication-config': '/browserconfig.xml',
    },
  };

  // Add article-specific metadata
  if (type === 'article') {
    metadata.other = {
      ...metadata.other,
      'article:author': authors.join(','),
      'article:published_time': publishedTime || '',
      'article:modified_time': modifiedTime || '',
      'article:section': section || 'Technology',
      'article:tag': tags.join(','),
    };
  }

  return metadata;
}

// Blog-specific SEO metadata
export function generateBlogSEO(blog: Blog, relatedPosts?: Blog[]): Metadata {
  const keywords = [
    blog.category?.name,
    ...(blog.tags?.map(tag => tag.name) || []),
    'blog',
    'insights',
    'technology articles'
  ].filter(Boolean);

  return generateSEOMetadata({
    title: blog.Title,
    description: blog.Description,
    keywords,
    image: blog.Image?.[0]?.url ?
      (blog.Image[0].url.startsWith('http') ?
        blog.Image[0].url :
        `${process.env.NEXT_PUBLIC_STRAPI_URL || process.env.STRAPI_URL}${blog.Image[0].url}`
      ) : undefined,
    url: `/blogs/${blog.slug || blog.id}`,
    type: 'article',
    publishedTime: blog.publishedAt,
    modifiedTime: blog.updatedAt,
    authors: blog.author ? [blog.author.name] : undefined,
    section: blog.category?.name,
    tags: blog.tags?.map(tag => tag.name),
  });
}

// Category page SEO
export function generateCategorySEO(category: Category, blogCount?: number): Metadata {
  return generateSEOMetadata({
    title: `${category.name} Blog Posts`,
    description: category.description ||
      `Explore our ${category.name.toLowerCase()} blog posts and insights. ${blogCount ? `${blogCount} articles` : 'Latest articles'} on ${category.name.toLowerCase()} technology and innovation.`,
    keywords: [category.name, 'blog', 'articles', 'insights'],
    url: `/blogs?category=${category.slug}`,
  });
}

// Event SEO
export function generateEventSEO(event: Event): Metadata {
  const keywords = [
    'events',
    'technology events',
    'conferences',
    'workshops',
    'webinars'
  ];

  return generateSEOMetadata({
    title: event.Title,
    description: event.Description,
    keywords,
    image: event.Image?.[0]?.url,
    url: `/events/${event.slug || event.id}`,
    type: 'article',
    publishedTime: event.publishedAt,
    modifiedTime: event.updatedAt,
  });
}

// Structured Data Generators
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SEO_CONFIG.siteName,
    url: SEO_CONFIG.siteUrl,
    logo: `${SEO_CONFIG.siteUrl}/img/logo.png`,
    description: SEO_CONFIG.defaultDescription,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'info@aaitek.com',
    },
    sameAs: [
      'https://twitter.com/aaitek',
      'https://linkedin.com/company/aaitek',
      'https://github.com/aaitek',
    ],
    founder: {
      '@type': 'Person',
      name: 'Aaitek Technology Specialists',
    },
    foundingDate: '2004',
    industry: 'Technology Consulting',
    numberOfEmployees: '50-100',
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SEO_CONFIG.siteName,
    url: SEO_CONFIG.siteUrl,
    description: SEO_CONFIG.defaultDescription,
    publisher: {
      '@type': 'Organization',
      name: SEO_CONFIG.siteName,
      logo: `${SEO_CONFIG.siteUrl}/img/logo.png`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SEO_CONFIG.siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SEO_CONFIG.siteUrl}${item.url}`,
    })),
  };
}

export function generateArticleSchema(blog: Blog) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.Title,
    description: blog.Description,
    image: blog.Image?.[0]?.url ?
      (blog.Image[0].url.startsWith('http') ?
        blog.Image[0].url :
        `${process.env.NEXT_PUBLIC_STRAPI_URL || process.env.STRAPI_URL}${blog.Image[0].url}`
      ) : `${SEO_CONFIG.siteUrl}${SEO_CONFIG.defaultImage}`,
    author: {
      '@type': 'Person',
      name: blog.author?.name || SEO_CONFIG.siteName,
    },
    publisher: {
      '@type': 'Organization',
      name: SEO_CONFIG.siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${SEO_CONFIG.siteUrl}/img/logo.png`,
      },
    },
    datePublished: blog.publishedAt,
    dateModified: blog.updatedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SEO_CONFIG.siteUrl}/blogs/${blog.slug || blog.id}`,
    },
    articleSection: blog.category?.name || 'Technology',
    keywords: blog.tags?.map(tag => tag.name).join(', ') || '',
    wordCount: blog.Content ? blog.Content.replace(/<[^>]*>/g, '').split(/\s+/).length : 0,
    timeRequired: blog.readTime ? `PT${blog.readTime}M` : 'PT5M',
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    copyrightHolder: {
      '@type': 'Organization',
      name: SEO_CONFIG.siteName,
    },
    copyrightYear: new Date(blog.publishedAt || blog.createdAt).getFullYear(),
  };
}

// URL utilities
export function generateCanonicalUrl(path: string): string {
  return `${SEO_CONFIG.siteUrl}${path}`;
}

export function generateImageUrl(imagePath?: string): string {
  if (!imagePath) return `${SEO_CONFIG.siteUrl}${SEO_CONFIG.defaultImage}`;
  if (imagePath.startsWith('http')) return imagePath;
  return `${SEO_CONFIG.siteUrl}${imagePath}`;
}