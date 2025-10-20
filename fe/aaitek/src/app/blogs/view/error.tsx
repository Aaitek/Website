'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, ArrowLeft } from 'lucide-react';

export default function BlogViewError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Blog view page error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8">
              <Link href="/blogs" className="inline-flex items-center gap-2 text-[#FBD506] hover:text-[#F4A607] transition-colors mb-6">
                <ArrowLeft className="w-4 h-4" />
                Back to blogs
              </Link>

              <div className="bg-[#2E2E2E] rounded-xl p-6 border border-[#FBD506]/20">
                <h3 className="text-lg font-semibold text-[#FBD506] mb-4">Categories</h3>
                <div className="space-y-2">
                  <div className="h-8 bg-[#3E3E3E] rounded animate-pulse"></div>
                  <div className="h-8 bg-[#3E3E3E] rounded animate-pulse"></div>
                  <div className="h-8 bg-[#3E3E3E] rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <div className="bg-[#2E2E2E] rounded-xl border border-[#FBD506]/20 p-8">
              <div className="text-center">
                <AlertTriangle className="w-16 h-16 text-[#FBD506] mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-white mb-2">Failed to load blog post</h1>
                <p className="text-gray-300 mb-6">
                  We encountered an error while loading this blog post. This might be because the post doesn't exist or there's a temporary issue.
                </p>

                <div className="space-y-4 max-w-sm mx-auto">
                  <button
                    onClick={reset}
                    className="inline-flex items-center gap-2 bg-[#FBD506] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#F4A607] transition-colors w-full justify-center"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Try again
                  </button>

                  <Link
                    href="/blogs"
                    className="inline-flex items-center gap-2 bg-[#3E3E3E] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#4E4E4E] transition-colors w-full justify-center border border-[#FBD506]/20"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to all blogs
                  </Link>
                </div>

                {process.env.NODE_ENV === 'development' && (
                  <details className="mt-6 text-left max-w-md mx-auto">
                    <summary className="text-[#FBD506] cursor-pointer mb-2">Error details (dev mode)</summary>
                    <pre className="text-xs bg-[#1C1C1C] p-3 rounded border border-[#FBD506]/20 overflow-auto text-red-400">
                      {error.message}
                      {error.stack && '\n\n' + error.stack}
                    </pre>
                  </details>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}