import { Blog, BlogSummary, Category, CategorySummary } from '@/types';

interface StructuredDataProps {
  data: Record<string, unknown>;
}

function StructuredDataScript({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, process.env.NODE_ENV === 'development' ? 2 : 0)
      }}
    />
  );
}

// Organization Schema Component
export function OrganizationSchema() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Aaitek Technology Specialists',
    url: 'https://aaitek.com',
    logo: 'https://aaitek.com/img/logo.png',
    description: 'Leading technology specialists with 20+ years of experience in digital transformation, headless CMS solutions, and innovative technology consulting.',
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
  };

  return <StructuredDataScript data={organizationData} />;
}

// Website Schema Component
export function WebsiteSchema() {
  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Aaitek Technology Specialists',
    url: 'https://aaitek.com',
    description: 'Leading technology specialists with 20+ years of experience in digital transformation, headless CMS solutions, and innovative technology consulting.',
    publisher: {
      '@type': 'Organization',
      name: 'Aaitek Technology Specialists',
      logo: 'https://aaitek.com/img/logo.png',
    },
  };

  return <StructuredDataScript data={websiteData} />;
}

// Breadcrumb Schema Component
interface BreadcrumbSchemaProps {
  items: Array<{ name: string; url: string }>;
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://aaitek.com${item.url}`,
    })),
  };

  return <StructuredDataScript data={breadcrumbData} />;
}

// Article Schema Component
interface ArticleSchemaProps {
  blog: Blog;
}

export function ArticleSchema({ blog }: ArticleSchemaProps) {
  const imageUrl = blog.Image?.[0]?.url ?
    (blog.Image[0].url.startsWith('http') ?
      blog.Image[0].url :
      `${process.env.NEXT_PUBLIC_STRAPI_URL || process.env.STRAPI_URL}${blog.Image[0].url}`
    ) : 'https://aaitek.com/img/aaitek-og-default.png';

  const articleData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.Title,
    description: blog.Description,
    image: imageUrl,
    author: {
      '@type': 'Person',
      name: blog.author?.name || 'Aaitek Technology Specialists',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Aaitek Technology Specialists',
      logo: {
        '@type': 'ImageObject',
        url: 'https://aaitek.com/img/logo.png',
      },
    },
    datePublished: blog.publishedAt,
    dateModified: blog.updatedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://aaitek.com/blogs/${blog.slug || blog.id}`,
    },
    articleSection: blog.category?.name || 'Technology',
    keywords: blog.tags?.map(tag => tag.name).join(', ') || '',
    wordCount: blog.Content ? blog.Content.replace(/<[^>]*>/g, '').split(/\s+/).length : 0,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
  };

  return <StructuredDataScript data={articleData} />;
}

// Blog Schema Component for listing pages
interface BlogSchemaProps {
  blogs: Blog[] | BlogSummary[];
  category?: Category | CategorySummary;
}

export function BlogSchema({ blogs, category }: BlogSchemaProps) {
  const blogData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: category
      ? `${category.name} Blog - Aaitek Technology Specialists`
      : 'Aaitek Technology Specialists Blog',
    description: category
      ? `${category.description || `Latest ${category.name.toLowerCase()} articles and insights.`}`
      : 'Expert insights on technology, digital transformation, headless CMS, and innovation.',
    url: `https://aaitek.com/blogs${category ? `?category=${category.slug}` : ''}`,
    publisher: {
      '@type': 'Organization',
      name: 'Aaitek Technology Specialists',
      logo: 'https://aaitek.com/img/logo.png',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://aaitek.com/blogs${category ? `?category=${category.slug}` : ''}`,
    },
    blogPost: blogs.map(blog => ({
      '@type': 'BlogPosting',
      headline: blog.Title,
      description: blog.Description,
      url: `https://aaitek.com/blogs/${blog.slug || blog.id}`,
      datePublished: blog.publishedAt,
      author: {
        '@type': 'Person',
        name: blog.author?.name || 'Aaitek Technology Specialists',
      },
    })),
    inLanguage: 'en-US',
  };

  return <StructuredDataScript data={blogData} />;
}