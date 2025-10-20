// app/blogs/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { strapiFetch } from "@/lib/strapi";
import { Calendar, User, Tag, Clock, Search, Filter } from "lucide-react";

export const revalidate = 60;

// ✅ metadata must be top-level, before the function
export const metadata: Metadata = {
  title: "Blog - Aaitek Technology Specialists",
  description:
    "Explore our latest blog posts and stay connected with the latest in technology and innovation.",
};

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
  publishedAt?: string;
  Image?: Media[];
  category?: Category;
  author?: Author;
  tags?: { id: number; name: string; slug: string; color?: string }[];
};

async function getAllCategories() {
  try {
    const resp = await strapiFetch<{ data: Category[] }>("/api/categories", {
      "fields[0]": "name",
      "fields[1]": "slug",
      "fields[2]": "description",
      "fields[3]": "color",
      "fields[4]": "icon",
      "sort[0]": "name:asc",
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
    "fields[0]": "Title",
    "fields[1]": "Description",
    "fields[2]": "publishedAt",
    "populate[Image][fields][0]": "url",
    "populate[Image][fields][1]": "alternativeText",
    "populate[Image][fields][2]": "formats",
    "populate[category][fields][0]": "name",
    "populate[category][fields][1]": "slug",
    "populate[category][fields][2]": "color",
    "populate[author][fields][0]": "name",
    "populate[author][fields][1]": "slug",
    "populate[tags][fields][0]": "name",
    "populate[tags][fields][1]": "slug",
    "populate[tags][fields][2]": "color",
    "sort[0]": "publishedAt:desc",
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

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white">
      <div className="max-w-full mx-auto px-6 lg:px-12 py-12">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 tracking-tight">
            Our <span className="text-[#FBD506]">Blog</span>
          </h1>
          <p className="text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Explore our latest insights on technology, digital transformation, and innovation
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/blogs"
              className={`px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 ${
                !params.category
                  ? "bg-[#FBD506] text-black shadow-lg shadow-[#FBD506]/25"
                  : "bg-[#252525] text-gray-300 hover:bg-[#FBD506]/20 hover:text-[#FBD506] hover:shadow-lg"
              }`}
            >
              All Posts
            </Link>
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/blogs?category=${category.slug}`}
                className={`px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 flex items-center gap-3 ${
                  params.category === category.slug
                    ? "text-black shadow-lg"
                    : "bg-[#252525] text-gray-300 hover:bg-[#FBD506]/20 hover:text-[#FBD506] hover:shadow-lg"
                }`}
                style={
                  params.category === category.slug
                    ? { backgroundColor: category.color || '#FBD506', boxShadow: `0 10px 25px ${category.color || '#FBD506'}25` }
                    : {}
                }
              >
                {category.icon && <span className="text-lg">{category.icon}</span>}
                {category.name}
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

        {/* Blog Grid */}
        {blogs.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-8xl mb-8">📝</div>
            <h3 className="text-4xl font-bold text-white mb-6">No blog posts found</h3>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              {params.category
                ? `No posts found in the "${selectedCategory?.name}" category.`
                : "We haven't published any blog posts yet."
              }
            </p>
            {params.category && (
              <Link
                href="/blogs"
                className="inline-flex items-center gap-3 bg-[#FBD506] text-black px-8 py-4 rounded-full font-bold hover:bg-[#F4A607] transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                View All Posts
              </Link>
            )}
          </div>
        ) : (
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {blogs.map((blog) => {
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
                <Link
                  key={blog.id}
                  href={`/blogs/view?id=${blog.id}`}
                  className="group bg-[#1E1E1E] rounded-2xl overflow-hidden hover:bg-[#252525] transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl"
                >
                  {/* Image */}
                  {imageUrl && (
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={mediaUrl(imageUrl)}
                        alt={img?.alternativeText ?? blog.Title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Category Badge */}
                      {blog.category && (
                        <div className="absolute top-6 left-6">
                          <div
                            className="px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                            style={{
                              backgroundColor: blog.category.color || '#FBD506',
                              color: '#000'
                            }}
                          >
                            {blog.category.name}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-8">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      {blog.publishedAt && (
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </div>
                      )}
                      {blog.author && (
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {blog.author.name}
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {readingTime} min read
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 line-clamp-2 group-hover:text-[#FBD506] transition-colors leading-tight">
                      {blog.Title}
                    </h3>

                    {/* Description */}
                    {blog.Description && (
                      <p className="text-gray-300 text-base leading-relaxed line-clamp-3 mb-6">
                        {blog.Description}
                      </p>
                    )}

                    {/* Tags */}
                    {blog.tags && blog.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {blog.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag.id}
                            className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium"
                            style={{
                              backgroundColor: `${tag.color || '#64748B'}20`,
                              color: tag.color || '#64748B'
                            }}
                          >
                            #{tag.name}
                          </span>
                        ))}
                        {blog.tags.length > 3 && (
                          <span className="text-sm text-gray-400 font-medium">
                            +{blog.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </Link>
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
  );
}
