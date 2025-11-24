// app/events/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { strapiFetch } from "@/lib/strapi";

export const revalidate = 60;

// ✅ metadata must be top-level, before the function
export const metadata: Metadata = {
  title: "Events - Aaitek Technology Specialists",
  description:
    "Explore our latest events and stay connected with the latest in technology and innovation.",
};

type Event = {
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

export default async function EventsPage() {
  let events: Event[] = [];

  try {
    const data = await strapiFetch<{ data: Event[] }>("/api/events", {
      "fields": "Title,Description,publishedAt",
      "populate[0]": "Image",
      "sort": "publishedAt:desc",
      "pagination[pageSize]": "12",
    });
    events = data?.data ?? [];
  } catch (error) {
    console.error("Events API not available:", error);
    // Fallback to empty array if events API doesn't exist
    events = [];
  }

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="sr-only">Events</h1>

      {events.length === 0 && (
        <p className="text-sm opacity-70">No events found.</p>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => {
          const img = event.Image?.[0];
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
              key={event.id}
              href={`/events/view?id=${event.id}`}
              className="border border-[#FBD506]/20 rounded-xl overflow-hidden hover:shadow-xl transition"
            >
              {url && (
                <div className="relative aspect-[16/9]">
                  <Image
                    src={full}
                    alt={img?.alternativeText ?? event.Title}
                    fill
                    sizes="(max-width:768px) 100vw,33vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-4">
                <h2 className="text-lg font-semibold">{event.Title}</h2>
                {event.Description && (
                  <p className="text-sm opacity-80 mt-2 line-clamp-3">
                    {event.Description}
                  </p>
                )}
                {event.publishedAt && (
                  <p className="text-xs opacity-60 mt-3">
                    {new Date(event.publishedAt).toLocaleDateString()}
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
