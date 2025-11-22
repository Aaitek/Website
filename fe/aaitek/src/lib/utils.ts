import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Media } from '@/types';

/**
 * Utility function to merge Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Get media URL with Strapi URL prefix
 */
export function getMediaUrl(path?: string): string {
  if (!path) return '';
  if (path.startsWith('http')) return path;

  const strapiUrl = process.env.STRAPI_URL || process.env.NEXT_PUBLIC_STRAPI_URL || '';
  return `${strapiUrl}${path}`;
}

/**
 * Get optimized image URL from media object
 */
export function getOptimizedImageUrl(media?: Media, preferredSize: 'thumbnail' | 'small' | 'medium' | 'large' = 'medium'): string {
  if (!media) return '';

  const formats = media.formats;
  if (!formats) return getMediaUrl(media.url);

  // Try to get the preferred size, fallback to other sizes
  const sizeOrder: (keyof typeof formats)[] = [
    preferredSize,
    'medium',
    'small',
    'large',
    'thumbnail'
  ];

  for (const size of sizeOrder) {
    const format = formats[size];
    if (format?.url) {
      return getMediaUrl(format.url);
    }
  }

  // Fallback to original URL
  return getMediaUrl(media.url);
}

/**
 * Format date to readable string
 */
export function formatDate(dateString: string, locale: string = 'en-US'): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString;
  }
}

/**
 * Calculate reading time for content
 */
export function calculateReadingTime(content: string): number {
  if (!content) return 0;

  // Remove HTML tags and calculate word count
  const plainText = content.replace(/<[^>]*>/g, '');
  const wordCount = plainText.trim().split(/\s+/).length;

  // Average reading speed is 200 words per minute
  return Math.ceil(wordCount / 200);
}

/**
 * Truncate text to specified length
 */
export function truncateText(text: string, maxLength: number = 150, suffix: string = '...'): string {
  if (text.length <= maxLength) return text;

  const truncated = text.substring(0, maxLength).trim();
  const lastSpaceIndex = truncated.lastIndexOf(' ');

  if (lastSpaceIndex > 0) {
    return truncated.substring(0, lastSpaceIndex) + suffix;
  }

  return truncated + suffix;
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

/**
 * Check if we're in browser environment
 */
export function isBrowser(): boolean {
  return typeof window !== 'undefined';
}
