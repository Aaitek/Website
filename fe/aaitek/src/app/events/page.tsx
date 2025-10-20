// app/events/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { strapiFetch } from "@/lib/strapi";

export const revalidate = 60;

// ✅ metadata must be top-level, before the function
export const metadata: Metadata = {
  title: "Blog - Aaitek Technology Specialists",
  description:
    "Explore our latest blog posts and stay connected with the latest in technology and innovation.",
};

type Blog = {
  id: number;
  Title: string;
  Description?: string;
  publishedAt?: string;
  Image?: Array<{
    url: string;
    alternativeText?: string;
    formats?: Record<string, { url: string; width: number; height: number }>;
  }>;
};

export default async function BlogsPage() {
  const data = await strapiFetch<{ data: Blog[] }>("/api/blogs", {
    "fields": "Title,Description,publishedAt",
    "populate[Image][fields][0]": "url",
    "populate[Image][fields][1]": "alternativeText",
    "populate[Image][fields][2]": "formats",
    "sort[0]": "publishedAt:desc",
    "pagination[pageSize]": "12",
  });

  const blogs = data?.data ?? [];

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="sr-only">Blog</h1>

      {blogs.length === 0 && (
        <p className="text-sm opacity-70">No blog posts found.</p>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((b) => {
          const img = b.Image?.[0];
          const url =
            img?.formats?.medium?.url ||
            img?.formats?.small?.url ||
            img?.formats?.thumbnail?.url ||
            img?.url;
          const full = url?.startsWith("http")
            ? url
            : `${process.env.STRAPI_URL}${url}`;

          return (
            <Link
              key={b.id}
              href={`/blogs/view?id=${b.id}`}
              className="border border-[#FBD506]/20 rounded-xl overflow-hidden hover:shadow-xl transition"
            >
              {url && (
                <div className="relative aspect-[16/9]">
                  <Image
                    src={full}
                    alt={img?.alternativeText ?? b.Title}
                    fill
                    sizes="(max-width:768px) 100vw,33vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-4">
                <h2 className="text-lg font-semibold">{b.Title}</h2>
                {b.Description && (
                  <p className="text-sm opacity-80 mt-2 line-clamp-3">
                    {b.Description}
                  </p>
                )}
                {b.publishedAt && (
                  <p className="text-xs opacity-60 mt-3">
                    {new Date(b.publishedAt).toLocaleDateString()}
                  </p>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
