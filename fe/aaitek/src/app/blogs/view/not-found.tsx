import Link from 'next/link';
import { FileX, ArrowLeft, Search } from 'lucide-react';

export default function BlogNotFound() {
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
                <p className="text-gray-400 text-sm">Browse our categories to find interesting content.</p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <div className="bg-[#2E2E2E] rounded-xl border border-[#FBD506]/20 p-8">
              <div className="text-center max-w-md mx-auto">
                <FileX className="w-20 h-20 text-[#FBD506] mx-auto mb-6" />

                <h1 className="text-3xl font-bold text-white mb-4">Blog Post Not Found</h1>

                <p className="text-gray-300 mb-8 leading-relaxed">
                  Sorry, we couldn't find the blog post you're looking for. It might have been moved, deleted, or the URL might be incorrect.
                </p>

                <div className="space-y-4">
                  <Link
                    href="/blogs"
                    className="inline-flex items-center gap-2 bg-[#FBD506] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#F4A607] transition-colors w-full justify-center"
                  >
                    <Search className="w-4 h-4" />
                    Browse all blog posts
                  </Link>

                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-[#3E3E3E] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#4E4E4E] transition-colors w-full justify-center border border-[#FBD506]/20"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Go to homepage
                  </Link>
                </div>

                <div className="mt-8 p-4 bg-[#1C1C1C] rounded-lg border border-[#FBD506]/10">
                  <h3 className="text-sm font-semibold text-[#FBD506] mb-2">What you can do:</h3>
                  <ul className="text-sm text-gray-400 space-y-1 text-left">
                    <li>• Check the URL for typos</li>
                    <li>• Browse our latest blog posts</li>
                    <li>• Use the search functionality</li>
                    <li>• Visit our homepage</li>
                  </ul>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}