// app/blogs/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { strapiFetch } from "@/lib/strapi";
import { generateSEOMetadata, generateCategorySEO } from "@/lib/seo";
import { BlogSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { Calendar, User, Clock, Filter, Search, Sparkles } from "lucide-react";

export const revalidate = 60;

// Generate dynamic metadata for SEO
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; search?: string }>;
}): Promise<Metadata> {
  const params = await searchParams;

  // Get category info for better SEO
  if (params.category) {
    try {
      const categories = await getAllCategories();
      const selectedCategory = categories.find(cat => cat.slug === params.category);

      if (selectedCategory) {
        return generateCategorySEO(selectedCategory);
      }
    } catch (error) {
      console.error('Error fetching category for metadata:', error);
    }
  }

  if (params.search) {
    return generateSEOMetadata({
      title: `Search: "${params.search}" - Blog`,
      description: `Search results for "${params.search}" in our blog. Find articles on technology, digital transformation, and innovation.`,
      keywords: ['search', 'blog', params.search],
      url: `/blogs?search=${encodeURIComponent(params.search)}`,
    });
  }

  return generateSEOMetadata({
    title: "Blog",
    description: "Explore our latest blog posts and insights on technology, digital transformation, headless CMS, and innovation. Expert articles from Aaitek Technology Specialists.",
    keywords: ['blog', 'technology articles', 'insights', 'digital transformation'],
    url: "/blogs",
    image: "/img/aaitek-blog-og.png",
  });
}

type MediaFormat = { url: string; width: number; height: number };
type Media = { url: string; alternativeText?: string; formats?: Record<string, MediaFormat> };

type Category = {
  id: number;
  name: string;
  slug: string;
  description?: string;
  color?: string;
  icon?: string;
};

type Author = {
  id: number;
  name: string;
  slug: string;
};

type Blog = {
  id: number;
  Title: string;
  Description?: string;
  slug?: string;
  publishedAt?: string;
  Image?: Media[];
  category?: Category;
  author?: Author;
  tags?: { id: number; name: string; slug: string; color?: string }[];
};

async function getAllCategories() {
  try {
    const resp = await strapiFetch<{ data: Category[] }>("/api/categories", {
      "fields": "name,slug,description,color,icon",
      "sort": "name:asc",
    });
    return resp?.data ?? [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

// prefix /uploads/... with STRAPI_URL
function mediaUrl(path?: string) {
  if (!path) return "";
  return path.startsWith("http") ? path : `${process.env.STRAPI_URL}${path}`;
}

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; search?: string }>;
}) {
  const params = await searchParams;
  // Build query parameters for blog filtering
  const queryParams: Record<string, string> = {
    "fields": "Title,Description,slug,publishedAt",
    "populate[0]": "Image",
    "populate[1]": "category",
    "populate[2]": "author",
    "populate[3]": "tags",
    "sort": "publishedAt:desc",
    "pagination[pageSize]": "12",
  };

  // Add category filter if specified
  if (params.category) {
    queryParams["filters[category][slug][$eq]"] = params.category;
  }

  // Add search filter if specified
  if (params.search) {
    queryParams["filters[$or][0][Title][$containsi]"] = params.search;
    queryParams["filters[$or][1][Description][$containsi]"] = params.search;
  }

  // Fetch blogs and categories in parallel
  const [blogsData, categories] = await Promise.all([
    strapiFetch<{ data: Blog[] }>("/api/blogs", queryParams),
    getAllCategories(),
  ]);

  const blogs = blogsData?.data ?? [];
  const selectedCategory = categories.find(cat => cat.slug === params.category);

  // Breadcrumb data
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blogs' },
  ];

  if (selectedCategory) {
    breadcrumbs.push({ name: selectedCategory.name, url: `/blogs?category=${selectedCategory.slug}` });
  }

  return (
    <>
      {/* Structured Data */}
      <BlogSchema blogs={blogs} category={selectedCategory} />
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="min-h-screen bg-[#1C1C1C] text-white">
        <div className="max-w-full mx-auto px-6 lg:px-12 py-12">
        {/* Header Section with Enhanced Design */}
        <div className="text-center mb-20 relative">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FBD506]/5 rounded-full blur-3xl" />
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#F4A607]/10 rounded-full blur-2xl" />
            <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-[#FBD506]/8 rounded-full blur-xl" />
          </div>

          <div className="relative z-10">
            {/* Main Heading with Gradient */}
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold mb-8 tracking-tight">
              <span className="text-white">Our </span>
              <span className="bg-gradient-to-r from-[#FBD506] via-[#F4A607] to-[#FBD506] bg-clip-text text-transparent bg-300% animate-gradient">
                Blog
              </span>
            </h1>

            {/* Animated Subtitle */}
            <p className="text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light mb-8">
              Explore our latest insights on{" "}
              <span className="text-[#FBD506] font-medium">technology</span>,{" "}
              <span className="text-[#FBD506] font-medium">digital transformation</span>, and{" "}
              <span className="text-[#FBD506] font-medium">innovation</span>
            </p>

            {/* Stats Section */}
            <div className="flex flex-wrap justify-center gap-8 mb-12 text-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10">
                <div className="text-2xl font-bold text-[#FBD506] mb-1">{blogs.length}+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Articles</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10">
                <div className="text-2xl font-bold text-[#FBD506] mb-1">{categories.length}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Categories</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10">
                <div className="text-2xl font-bold text-[#FBD506] mb-1">Weekly</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Updates</div>
              </div>
            </div>

            {/* Search Results Indicator */}
            {params.search && (
              <div className="mt-6 inline-flex items-center gap-3 bg-[#FBD506]/10 border border-[#FBD506]/20 rounded-full px-6 py-3">
                <Search className="w-4 h-4 text-[#FBD506]" />
                <p className="text-gray-300" role="status" aria-live="polite">
                  Search results for: <strong className="text-[#FBD506]">&quot;{params.search}&quot;</strong>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Category Filter Bar */}
        <div className="mb-16 relative">
          {/* Background gradient */}
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#FBD506]/30 to-transparent transform -translate-y-1/2" />

          <div className="relative bg-[#1C1C1C] flex flex-wrap items-center justify-center gap-4 py-6">
            <Link
              href="/blogs"
              className={`group relative px-8 py-4 rounded-2xl text-base font-semibold transition-all duration-300 transform hover:scale-105 ${
                !params.category
                  ? "bg-gradient-to-r from-[#FBD506] to-[#F4A607] text-black shadow-xl shadow-[#FBD506]/25"
                  : "bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:bg-[#FBD506]/10 hover:text-[#FBD506] hover:border-[#FBD506]/30"
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                All Posts
              </span>
              {!params.category && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#FBD506] to-[#F4A607] rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
              )}
            </Link>

            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/blogs?category=${category.slug}`}
                className={`group relative px-8 py-4 rounded-2xl text-base font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-3 ${
                  params.category === category.slug
                    ? "text-black shadow-xl"
                    : "bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:bg-[#FBD506]/10 hover:text-[#FBD506] hover:border-[#FBD506]/30"
                }`}
                style={
                  params.category === category.slug
                    ? {
                        background: `linear-gradient(135deg, ${category.color || '#FBD506'}, ${category.color ? category.color + '80' : '#F4A607'})`,
                        boxShadow: `0 20px 40px ${category.color || '#FBD506'}25`
                      }
                    : {}
                }
              >
                <span className="relative z-10 flex items-center gap-2">
                  {category.icon && <span className="text-lg">{category.icon}</span>}
                  {category.name}
                </span>
                {params.category === category.slug && (
                  <div
                    className="absolute inset-0 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"
                    style={{ backgroundColor: category.color || '#FBD506' }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Current Filter Display */}
        {selectedCategory && (
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#252525] rounded-full">
              <Filter className="w-5 h-5 text-[#FBD506]" />
              <span className="text-gray-300 text-lg">Showing posts in:</span>
              <span
                className="font-bold text-lg"
                style={{ color: selectedCategory.color || '#FBD506' }}
              >
                {selectedCategory.name}
              </span>
            </div>
          </div>
        )}

        {/* Enhanced Blog Grid */}
        {blogs.length === 0 ? (
          <div className="text-center py-32 relative">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FBD506]/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <div className="text-8xl mb-8 opacity-50">📝</div>
              <h3 className="text-4xl font-bold text-white mb-6">
                {params.search ? "No search results" : "No blog posts found"}
              </h3>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                {params.search
                  ? `No posts found for "${params.search}". Try different keywords or browse all categories.`
                  : params.category
                  ? `No posts found in the "${selectedCategory?.name}" category.`
                  : "We haven't published any blog posts yet. Check back soon for exciting content!"
                }
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {params.category && (
                  <Link
                    href="/blogs"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FBD506] to-[#F4A607] text-black px-8 py-4 rounded-2xl font-bold hover:from-[#F4A607] hover:to-[#FBD506] transition-all duration-300 shadow-xl hover:shadow-2xl text-lg transform hover:scale-105"
                  >
                    <Sparkles className="w-5 h-5" />
                    View All Posts
                  </Link>
                )}
                {params.search && (
                  <Link
                    href="/blogs"
                    className="inline-flex items-center gap-3 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all duration-300 text-lg transform hover:scale-105"
                  >
                    Clear Search
                  </Link>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {blogs.map((blog, index) => {
              const img = blog.Image?.[0];
              const imageUrl =
                img?.formats?.medium?.url ||
                img?.formats?.small?.url ||
                img?.formats?.thumbnail?.url ||
                img?.url;

              const readingTime = blog.Description
                ? Math.ceil(blog.Description.split(' ').length / 200)
                : 2;

              return (
                <div
                  key={blog.id}
                  className="group relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Link
                    href={`/blogs/${blog.slug || blog.id}`}
                    className="block h-full"
                  >
                    <div className="relative bg-gradient-to-br from-[#1E1E1E] to-[#2A2A2A] rounded-3xl overflow-hidden border border-white/10 transition-all duration-500 group-hover:border-[#FBD506]/30 group-hover:shadow-2xl group-hover:shadow-[#FBD506]/10 h-full">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FBD506]/5 via-transparent to-[#F4A607]/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl" />

                      {/* Image with enhanced overlay */}
                      {imageUrl && (
                        <div className="relative aspect-[16/10] overflow-hidden rounded-t-3xl">
                          <Image
                            src={mediaUrl(imageUrl)}
                            alt={img?.alternativeText ?? blog.Title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            className="object-cover transition-all duration-700 group-hover:scale-110"
                          />

                          {/* Enhanced gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500" />

                          {/* Shimmer effect */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
                          </div>

                          {/* Enhanced Category Badge */}
                          {blog.category && (
                            <div className="absolute top-6 left-6 z-10">
                              <div
                                className="px-4 py-2 rounded-2xl text-sm font-bold shadow-2xl backdrop-blur-sm border border-white/20 transform group-hover:scale-105 transition-all duration-300"
                                style={{
                                  background: `linear-gradient(135deg, ${blog.category.color || '#FBD506'}, ${blog.category.color ? blog.category.color + '80' : '#F4A607'})`,
                                  color: '#000'
                                }}
                              >
                                {blog.category.name}
                              </div>
                            </div>
                          )}

                          {/* Reading time badge */}
                          <div className="absolute bottom-6 right-6 z-10">
                            <div className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {readingTime}min
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Enhanced Content */}
                      <div className="p-8 relative z-10">
                        {/* Meta Info with improved styling */}
                        <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                          {blog.publishedAt && (
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </div>
                          )}
                          {blog.author && (
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4" />
                              {blog.author.name}
                            </div>
                          )}
                        </div>

                        {/* Enhanced Title */}
                        <h3 className="text-2xl font-bold text-white mb-4 line-clamp-2 group-hover:text-[#FBD506] transition-colors leading-tight">
                          {blog.Title}
                        </h3>

                        {/* Enhanced Description */}
                        {blog.Description && (
                          <p className="text-gray-300 text-base leading-relaxed line-clamp-3 mb-6 group-hover:text-gray-200 transition-colors">
                            {blog.Description}
                          </p>
                        )}

                        {/* Enhanced Tags */}
                        {blog.tags && blog.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {blog.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag.id}
                                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-105"
                                style={{
                                  backgroundColor: `${tag.color || '#64748B'}15`,
                                  color: tag.color || '#64748B',
                                  borderColor: `${tag.color || '#64748B'}30`
                                }}
                              >
                                #{tag.name}
                              </span>
                            ))}
                            {blog.tags.length > 3 && (
                              <span className="text-xs text-gray-500 font-medium bg-white/5 px-3 py-1 rounded-full">
                                +{blog.tags.length - 3} more
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Read more indicator */}
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="w-8 h-8 bg-[#FBD506] text-black rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        )}

        {/* Pagination placeholder - can be implemented later */}
        {blogs.length > 0 && (
          <div className="mt-20 text-center">
            <p className="text-gray-400 text-lg">
              Showing {blogs.length} post{blogs.length !== 1 ? 's' : ''}
            </p>
          </div>
        )}
        </div>
      </div>
    </>
  );
}
