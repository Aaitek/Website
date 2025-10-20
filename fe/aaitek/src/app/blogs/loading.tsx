import { Loader2 } from 'lucide-react';

export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Skeleton */}
        <div className="text-center mb-12">
          <div className="h-12 bg-[#2E2E2E] rounded-lg mb-4 max-w-md mx-auto animate-pulse"></div>
          <div className="h-6 bg-[#2E2E2E] rounded-lg max-w-2xl mx-auto animate-pulse"></div>
        </div>

        {/* Category Filter Skeleton */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-10 w-24 bg-[#2E2E2E] rounded-full animate-pulse"
              ></div>
            ))}
          </div>
        </div>

        {/* Blog Grid Skeleton */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-[#2E2E2E] rounded-xl overflow-hidden border border-[#FBD506]/20"
            >
              {/* Image Skeleton */}
              <div className="aspect-[16/9] bg-[#3E3E3E] animate-pulse"></div>

              {/* Content Skeleton */}
              <div className="p-6">
                {/* Meta info skeleton */}
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-3 w-16 bg-[#3E3E3E] rounded animate-pulse"></div>
                  <div className="h-3 w-20 bg-[#3E3E3E] rounded animate-pulse"></div>
                  <div className="h-3 w-14 bg-[#3E3E3E] rounded animate-pulse"></div>
                </div>

                {/* Title skeleton */}
                <div className="h-6 bg-[#3E3E3E] rounded mb-3 animate-pulse"></div>

                {/* Description skeleton */}
                <div className="space-y-2 mb-4">
                  <div className="h-4 bg-[#3E3E3E] rounded animate-pulse"></div>
                  <div className="h-4 bg-[#3E3E3E] rounded w-3/4 animate-pulse"></div>
                </div>

                {/* Tags skeleton */}
                <div className="flex gap-2">
                  <div className="h-6 w-16 bg-[#3E3E3E] rounded-full animate-pulse"></div>
                  <div className="h-6 w-20 bg-[#3E3E3E] rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Loading indicator */}
        <div className="flex items-center justify-center mt-12">
          <div className="flex items-center gap-3 text-[#FBD506]">
            <Loader2 className="w-6 h-6 animate-spin" />
            <span className="text-lg font-medium">Loading blog posts...</span>
          </div>
        </div>
      </div>
    </div>
  );
}