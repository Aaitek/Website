// app/blogs/view/page.tsx
import Image from "next/image";
import Link from "next/link";
import { strapiFetch } from "@/lib/strapi";

type MediaFormat = { url: string; width: number; height: number };
type Media = { url: string; alternativeText?: string; formats?: Record<string, MediaFormat> };

type Blog = {
  id: number;
  Title: string;
  Description?: string;     // short summary (exists)
  // Content?: string;      // ❌ remove unless you actually create this field in Strapi
  publishedAt?: string;
  Image?: Media[];          // multiple media
};

export const revalidate = 60;

// prefix /uploads/... with STRAPI_URL
function mediaUrl(path?: string) {
  if (!path) return "";
  return path.startsWith("http") ? path : `${process.env.STRAPI_URL}${path}`;
}

export default async function BlogViewPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string; slug?: string }>;
}) {
  const resolvedSearchParams = await searchParams;

  // Build query parameters for blog fetching
  const queryParams: Record<string, string> = {
    "fields[0]": "Title",
    "fields[1]": "Description",
    "fields[2]": "publishedAt",
    "pagination[pageSize]": "1",
    "populate[Image][fields][0]": "url",
    "populate[Image][fields][1]": "alternativeText",
    "populate[Image][fields][2]": "formats",
  };

  // Add filter based on slug or id
  if (resolvedSearchParams?.slug) {
    queryParams["filters[slug][$eq]"] = String(resolvedSearchParams.slug);
  } else if (resolvedSearchParams?.id) {
    queryParams["filters[id][$eq]"] = String(resolvedSearchParams.id);
  }

  // ✅ Request only fields that exist (Title, Description, publishedAt)
  //    and populate Image. Remove "Content" to avoid the 400 error.
  const resp = await strapiFetch<{ data: Blog[] }>("/api/blogs", queryParams);

  const blog = resp?.data?.[0];
  if (!blog) {
    return (
      <main className="mx-auto max-w-3xl p-6">
        <p className="mb-6">Post not found.</p>
        <Link href="/blogs" className="underline">← Back to blogs</Link>
      </main>
    );
  }

  const img = blog.Image?.[0];
  const candidate =
    img?.formats?.medium?.url ||
    img?.formats?.small?.url ||
    img?.formats?.thumbnail?.url ||
    img?.url;

  return (
    <main className="mx-auto max-w-3xl p-6">
      <Link href="/blogs" className="text-sm underline opacity-70">← Back to blogs</Link>

      <h1 className="text-3xl font-bold mt-4">{blog.Title}</h1>

      {blog.publishedAt && (
        <p className="text-xs opacity-60 mt-2">
          {new Date(blog.publishedAt).toLocaleDateString()}
        </p>
      )}

      {candidate && (
        <div className="relative aspect-[16/9] my-6">
          <Image
            src={mediaUrl(candidate)}
            alt={img?.alternativeText ?? blog.Title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-lg"
          />
        </div>
      )}

      {blog.Description && (
        <p className="opacity-90 leading-relaxed">{blog.Description}</p>
      )}

      {/* If you later add a long HTML field (e.g., Body or Content), 
          - add it in Strapi
          - include it in fields
          - and render it here (sanitize before using dangerouslySetInnerHTML). */}
    </main>
  );
}
