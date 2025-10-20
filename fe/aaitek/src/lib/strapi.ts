export async function strapiFetch<T>(path: string, query?: Record<string, string>) {
  const base = process.env.STRAPI_URL?.trim();
  const token = process.env.STRAPI_API_TOKEN?.trim();

  if (!base) {
    throw new Error('STRAPI_URL environment variable is not set');
  }

  if (!token) {
    throw new Error('STRAPI_API_TOKEN environment variable is not set');
  }

  const url = new URL(`${base}${path}`);
  if (query) Object.entries(query).forEach(([k, v]) => url.searchParams.set(k, v));

  try {
    const res = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Strapi API error (${res.status}): ${errorText}`);
    }

    return (await res.json()) as T;
  } catch (error) {
    console.error('Strapi fetch error:', error);
    if (error instanceof Error && error.message.includes('fetch failed')) {
      throw new Error(`Failed to connect to Strapi at ${base}. Make sure Strapi is running on port 1337.`);
    }
    throw error;
  }
}

// helper: prefix relative URLs like /uploads/...
export function mediaUrl(path?: string) {
if (!path) return "";
return path.startsWith("http") ? path : `${process.env.STRAPI_URL}${path}`;
}
