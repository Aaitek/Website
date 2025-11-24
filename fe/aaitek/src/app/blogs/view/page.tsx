import { redirect } from 'next/navigation';
import { strapiFetchOne } from '@/lib/strapi';
import { Blog, PageProps } from '@/types';

// This page exists for backward compatibility and redirects to the new slug-based URLs
export default async function BlogViewRedirect({ searchParams }: PageProps) {
  const params = await searchParams;
  const identifier = params?.slug || params?.id;

  if (!identifier) {
    redirect('/blogs');
  }

  try {
    // Try to get the blog to find its slug
    const blog = await strapiFetchOne<Blog>('blogs', String(identifier), []);

    if (blog?.slug) {
      // Redirect to the new slug-based URL
      redirect(`/blogs/${blog.slug}`);
    } else if (blog) {
      // If no slug, redirect to ID-based URL (fallback)
      redirect(`/blogs/${blog.id}`);
    }
  } catch (error) {
    console.error('Error fetching blog for redirect:', error);
  }

  // If we can't find the blog, redirect to blogs listing
  redirect('/blogs');
}