import { Loader2, ArrowLeft } from 'lucide-react';

export default function BlogViewLoading() {
  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar Skeleton */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Back button skeleton */}
              <div className="flex items-center gap-2 mb-6">
                <ArrowLeft className="w-4 h-4 text-[#FBD506]" />
                <span className="text-[#FBD506]">Back to blogs</span>
              </div>

              {/* Categories skeleton */}
              <div className="bg-[#2E2E2E] rounded-xl p-6 border border-[#FBD506]/20">
                <h3 className="text-lg font-semibold text-[#FBD506] mb-4">Categories</h3>
                <div className="space-y-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="h-8 bg-[#3E3E3E] rounded-lg animate-pulse"
                    ></div>
                  ))}
                </div>
              </div>

              {/* Current category skeleton */}
              <div className="bg-[#2E2E2E] rounded-xl p-6 border border-[#FBD506]/20">
                <h3 className="text-lg font-semibold text-[#FBD506] mb-3">Current Category</h3>
                <div className="h-8 w-24 bg-[#3E3E3E] rounded-full animate-pulse"></div>
              </div>

              {/* Tags skeleton */}
              <div className="bg-[#2E2E2E] rounded-xl p-6 border border-[#FBD506]/20">
                <h3 className="text-lg font-semibold text-[#FBD506] mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="h-6 w-16 bg-[#3E3E3E] rounded-full animate-pulse"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Skeleton */}
          <main className="lg:col-span-3">
            <article className="bg-[#2E2E2E] rounded-xl overflow-hidden border border-[#FBD506]/20">
              {/* Hero Image Skeleton */}
              <div className="relative aspect-[16/9] w-full bg-[#3E3E3E] animate-pulse"></div>

              {/* Article Content Skeleton */}
              <div className="p-8">
                {/* Meta Info Skeleton */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="h-4 w-24 bg-[#3E3E3E] rounded animate-pulse"></div>
                  <div className="h-4 w-20 bg-[#3E3E3E] rounded animate-pulse"></div>
                  <div className="h-4 w-16 bg-[#3E3E3E] rounded animate-pulse"></div>
                </div>

                {/* Title Skeleton */}
                <div className="space-y-3 mb-6">
                  <div className="h-8 bg-[#3E3E3E] rounded animate-pulse"></div>
                  <div className="h-8 bg-[#3E3E3E] rounded w-3/4 animate-pulse"></div>
                </div>

                {/* Description Skeleton */}
                <div className="space-y-3 mb-8">
                  <div className="h-6 bg-[#3E3E3E] rounded animate-pulse"></div>
                  <div className="h-6 bg-[#3E3E3E] rounded w-5/6 animate-pulse"></div>
                </div>

                {/* Content Skeleton */}
                <div className="space-y-4">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="space-y-2">
                      <div className="h-4 bg-[#3E3E3E] rounded animate-pulse"></div>
                      <div className="h-4 bg-[#3E3E3E] rounded w-4/5 animate-pulse"></div>
                      <div className="h-4 bg-[#3E3E3E] rounded w-3/4 animate-pulse"></div>
                    </div>
                  ))}
                </div>

                {/* Author Bio Skeleton */}
                <div className="mt-12 pt-8 border-t border-[#FBD506]/20">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-[#3E3E3E] rounded-full animate-pulse flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="h-5 bg-[#3E3E3E] rounded mb-2 w-32 animate-pulse"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-[#3E3E3E] rounded animate-pulse"></div>
                        <div className="h-4 bg-[#3E3E3E] rounded w-2/3 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </main>
        </div>

        {/* Loading indicator */}
        <div className="flex items-center justify-center mt-8">
          <div className="flex items-center gap-3 text-[#FBD506]">
            <Loader2 className="w-6 h-6 animate-spin" />
            <span className="text-lg font-medium">Loading blog post...</span>
          </div>
        </div>
      </div>
    </div>
  );
}