'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Blog page error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <AlertTriangle className="w-16 h-16 text-[#FBD506] mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Something went wrong!</h1>
          <p className="text-gray-300 mb-6">
            We encountered an error while loading the blog content. This might be a temporary issue.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 bg-[#FBD506] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#F4A607] transition-colors w-full justify-center"
          >
            <RefreshCw className="w-4 h-4" />
            Try again
          </button>

          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 bg-[#2E2E2E] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#3E3E3E] transition-colors w-full justify-center border border-[#FBD506]/20"
          >
            <Home className="w-4 h-4" />
            Back to blogs
          </Link>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <details className="mt-6 text-left">
            <summary className="text-[#FBD506] cursor-pointer mb-2">Error details (dev mode)</summary>
            <pre className="text-xs bg-[#2E2E2E] p-3 rounded border border-[#FBD506]/20 overflow-auto text-red-400">
              {error.message}
              {error.stack && '\n\n' + error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}