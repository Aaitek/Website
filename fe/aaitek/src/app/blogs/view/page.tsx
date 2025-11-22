import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { strapiFetch, strapiFetchOne, strapiFetchMany } from "@/lib/strapi";
import { processContent, calculateReadingTime } from "@/lib/content";
import { Blog, Category, Tag as BlogTag, PageProps } from "@/types";
import { Calendar, User, ArrowLeft, Tag, Clock } from "lucide-react";
import OptimizedImage from "@/components/ui/OptimizedImage";
import Loading from "@/components/ui/Loading";
import { ErrorBoundary, SimpleErrorFallback } from "@/components/ui/ErrorBoundary";

export const revalidate = 60;
export const dynamic = 'force-dynamic';

async function getAllCategories() {
  try {
    const resp = await strapiFetchMany<Category>('categories', {
      pageSize: 50,
      sort: 'name:asc',
    });
    return resp?.data ?? [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

async function getRelatedPosts(currentBlogId: number, categorySlug?: string) {
  if (!categorySlug) return [];

  try {
    // Use the direct strapiFetch with simplified parameters
    const resp = await strapiFetch<{ data: Blog[] }>("/api/blogs", {
      "fields": "Title,publishedAt",
      "populate": "Image,category",
      "filters[category][slug][$eq]": categorySlug,
      "filters[id][$ne]": currentBlogId.toString(),
      "pagination[pageSize]": "3",
      "sort": "publishedAt:desc",
    });
    return resp?.data ?? [];
  } catch (error) {
    console.error("Error fetching related posts:", error);
    return [];
  }
}

export default async function BlogViewPage({ searchParams }: PageProps) {
  // Handle the case when searchParams is not available (e.g., during static generation)
  let params;
  try {
    params = await searchParams;
  } catch (error) {
    // During static generation, searchParams might not be available
    console.warn('SearchParams not available during static generation:', error);
    notFound();
  }

  const identifier = params?.slug || params?.id;

  if (!identifier) {
    notFound();
  }

  // Fetch both blog data and categories in parallel with error handling
  let blog, categories, relatedPosts;

  try {
    [blog, categories] = await Promise.all([
      strapiFetchOne<Blog>('blogs', String(identifier), ['Image', 'category', 'author', 'tags']),
      getAllCategories(),
    ]);

    if (!blog) {
      notFound();
    }

    // Fetch related posts after we have the blog
    relatedPosts = await getRelatedPosts(blog.id, blog.category?.slug);
  } catch (error) {
    console.error('Error fetching blog data during build:', error);
    notFound();
  }

  const readingTime = blog.Content ? calculateReadingTime(blog.Content) : 0;
  const processedContent = blog.Content ? processContent(blog.Content) : '';

  return (
    <ErrorBoundary fallback={(error) => <SimpleErrorFallback error={error} />}>
      <div className="min-h-screen bg-[#1C1C1C] text-white">
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
          {/* Left Sidebar */}
          <aside className="lg:col-span-1 bg-[#1A1A1A] p-6 lg:p-8">
            <div className="sticky top-8 space-y-8">
              {/* Back to blogs */}
              <Link
                href="/blogs"
                className="inline-flex items-center gap-3 text-[#FBD506] hover:text-[#F4A607] transition-all duration-300 mb-8 p-4 rounded-xl hover:bg-[#FBD506]/10 group"
              >
                <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                <span className="font-semibold text-base">Back to all blogs</span>
              </Link>

              {/* Categories */}
              <div className="bg-[#252525] rounded-2xl p-6">
                <h3 className="text-xl font-bold text-[#FBD506] mb-6">Categories</h3>
                <div className="space-y-3">
                  <Link
                    href="/blogs"
                    className="block px-4 py-3 text-gray-300 hover:text-[#FBD506] hover:bg-[#FBD506]/10 rounded-xl transition-all duration-300 font-medium"
                  >
                    All Posts
                  </Link>
                  {categories.map((category: Category) => (
                    <Link
                      key={category.id}
                      href={`/blogs?category=${category.slug}`}
                      className="block px-4 py-3 text-gray-300 hover:text-[#FBD506] hover:bg-[#FBD506]/10 rounded-xl transition-all duration-300 font-medium"
                    >
                      <span className="flex items-center gap-3">
                        {category.icon && <span className="text-lg">{category.icon}</span>}
                        {category.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Current Category (if exists) */}
              {blog.category && (
                <div className="bg-[#252525] rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-[#FBD506] mb-4">Current Category</h3>
                  <div
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: `${blog.category.color || '#FBD506'}20`,
                      color: blog.category.color || '#FBD506'
                    }}
                  >
                    <Tag className="w-4 h-4" />
                    {blog.category.name}
                  </div>
                </div>
              )}

              {/* Tags (if exists) */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="bg-[#252525] rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-[#FBD506] mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag: BlogTag) => (
                      <span
                        key={tag.id}
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: `${tag.color || '#64748B'}20`,
                          color: tag.color || '#64748B'
                        }}
                      >
                        #{tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-[#252525] rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-[#FBD506] mb-6">Related Posts</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((post: Blog) => {
                      return (
                        <Link
                          key={post.id}
                          href={`/blogs/view?id=${post.id}`}
                          className="block group hover:bg-[#FBD506]/5 p-3 rounded-lg transition-all duration-200"
                        >
                          <div className="flex gap-3">
                            {post.Image?.[0] && (
                              <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                                <OptimizedImage
                                  media={post.Image?.[0]}
                                  alt={post.Title}
                                  fill
                                  sizes="64px"
                                  className="object-cover"
                                  preferredSize="thumbnail"
                                />
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <h4 className="text-white text-sm font-medium line-clamp-2 group-hover:text-[#FBD506] transition-colors">
                                {post.Title}
                              </h4>
                              {post.publishedAt && (
                                <p className="text-gray-400 text-xs mt-1">
                                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric'
                                  })}
                                </p>
                              )}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mt-6 pt-6 border-t border-[#FBD506]/20">
                    <Link
                      href={`/blogs?category=${blog.category?.slug}`}
                      className="text-base text-[#FBD506] hover:text-[#F4A607] transition-colors font-semibold"
                    >
                      View all posts in {blog.category?.name} →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <article className="bg-[#1C1C1C] overflow-hidden">
              {/* Hero Image */}
              <Suspense fallback={<Loading size="lg" text="Loading image..." />}>
                <div className="relative aspect-[16/9] w-full">
                  <OptimizedImage
                    media={blog.Image?.[0]}
                    alt={blog.Title}
                    fill
                    sizes="(max-width: 768px) 100vw, 75vw"
                    className="object-cover"
                    priority
                    preferredSize="large"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </Suspense>

              {/* Article Content */}
              <div className="px-8 lg:px-16 py-12">
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 mb-10 text-base text-gray-400">
                  {blog.publishedAt && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  )}
                  {blog.author && (
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {blog.author.name}
                    </div>
                  )}
                  {readingTime > 0 && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {readingTime} min read
                    </div>
                  )}
                </div>

                {/* Title */}
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
                  {blog.Title}
                </h1>

                {/* Description */}
                {blog.Description && (
                  <p className="text-2xl lg:text-3xl text-gray-300 leading-relaxed mb-12 font-light max-w-4xl">
                    {blog.Description}
                  </p>
                )}

                {/* Content */}
                {processedContent && (
                  <div
                    className="prose prose-xl prose-invert max-w-none
                      prose-headings:text-white prose-headings:font-bold prose-headings:mb-8 prose-headings:mt-16 prose-headings:tracking-tight
                      prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg
                      prose-p:text-gray-300 prose-p:leading-loose prose-p:mb-8 prose-p:text-lg
                      prose-a:text-[#FBD506] prose-a:no-underline hover:prose-a:text-[#F4A607] prose-a:transition-colors prose-a:font-medium
                      prose-strong:text-white prose-strong:font-bold
                      prose-em:text-gray-200 prose-em:italic
                      prose-ul:text-gray-300 prose-ol:text-gray-300 prose-ul:mb-8 prose-ol:mb-8
                      prose-li:text-gray-300 prose-li:leading-loose prose-li:mb-3 prose-li:text-lg
                      prose-blockquote:text-gray-300 prose-blockquote:border-l-4 prose-blockquote:border-[#FBD506]
                      prose-blockquote:pl-8 prose-blockquote:italic prose-blockquote:bg-[#252525] prose-blockquote:py-6 prose-blockquote:rounded-r-2xl prose-blockquote:my-8 prose-blockquote:text-xl
                      prose-code:text-[#FBD506] prose-code:bg-[#252525] prose-code:px-3 prose-code:py-1 prose-code:rounded-lg prose-code:text-base prose-code:font-medium
                      prose-pre:bg-[#252525] prose-pre:border prose-pre:border-[#FBD506]/20 prose-pre:rounded-2xl prose-pre:p-6 prose-pre:overflow-x-auto prose-pre:my-8
                      prose-table:border-collapse prose-table:border prose-table:border-[#FBD506]/20 prose-table:my-8 prose-table:rounded-lg
                      prose-th:border prose-th:border-[#FBD506]/20 prose-th:bg-[#252525] prose-th:p-4 prose-th:text-[#FBD506] prose-th:font-bold prose-th:text-lg
                      prose-td:border prose-td:border-[#FBD506]/20 prose-td:p-4 prose-td:text-gray-300 prose-td:text-lg
                      prose-hr:border-[#FBD506]/30 prose-hr:my-16
                      prose-img:rounded-2xl prose-img:shadow-2xl prose-img:my-8"
                    dangerouslySetInnerHTML={{ __html: processedContent }}
                  />
                )}

                {/* Author Bio (if exists) */}
                {blog.author && blog.author.bio && (
                  <div className="mt-20 pt-12 border-t border-[#FBD506]/20">
                    <div className="flex items-start gap-6">
                      {blog.author.avatar?.[0] && (
                        <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                          <OptimizedImage
                            media={blog.author.avatar[0]}
                            alt={blog.author.name}
                            fill
                            className="object-cover"
                            preferredSize="thumbnail"
                          />
                        </div>
                      )}
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-4">About {blog.author.name}</h4>
                        <p className="text-gray-300 leading-loose text-lg">{blog.author.bio}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </article>
          </main>
        </div>
      </div>
      </div>
    </ErrorBoundary>
  );
}
