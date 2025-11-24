'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { Media, MediaFormat } from '@/types';

interface OptimizedImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  media?: Media;
  alt: string;
  preferredSize?: 'thumbnail' | 'small' | 'medium' | 'large';
  fallbackUrl?: string;
}

/**
 * Optimized image component that works with Strapi media
 * Automatically selects the best image format and provides fallbacks
 */
export default function OptimizedImage({
  media,
  alt,
  preferredSize = 'medium',
  fallbackUrl = '/img/placeholder.jpg',
  className,
  onError,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Get the best image URL based on available formats and preferred size
  const getOptimizedImageUrl = (media: Media | undefined): string => {
    if (!media?.url) return fallbackUrl;

    // If no formats are available, use the original URL
    if (!media.formats) {
      return getFullUrl(media.url);
    }

    // Try to get the preferred size format
    const preferredFormat = media.formats[preferredSize];
    if (preferredFormat?.url) {
      return getFullUrl(preferredFormat.url);
    }

    // Fallback order: medium -> small -> thumbnail -> original
    const fallbackOrder: (keyof MediaFormat)[] = ['medium', 'small', 'thumbnail'];

    for (const size of fallbackOrder) {
      const format = media.formats[size as string];
      if (format?.url) {
        return getFullUrl(format.url);
      }
    }

    // Use original if no formats are available
    return getFullUrl(media.url);
  };

  // Ensure URL is absolute
  const getFullUrl = (url: string): string => {
    if (!url) return fallbackUrl;

    if (url.startsWith('http') || url.startsWith('//')) {
      return url;
    }

    // Prepend Strapi URL for relative paths
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || process.env.STRAPI_URL || '';
    return `${strapiUrl}${url}`;
  };

  const imageUrl = getOptimizedImageUrl(media);

  const handleLoadStart = () => {
    setIsLoading(true);
    setHasError(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoading(false);
    setHasError(true);
    onError?.(e);
  };

  const combinedClassName = [
    className,
    isLoading ? 'animate-pulse bg-gray-800' : '',
    hasError ? 'bg-gray-800' : '',
    'transition-opacity duration-300',
    isLoading ? 'opacity-70' : 'opacity-100'
  ].filter(Boolean).join(' ');

  return (
    <div className="relative overflow-hidden">
      <Image
        src={imageUrl}
        alt={alt}
        className={combinedClassName}
        onLoadStart={handleLoadStart}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />

      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#FBD506] border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          <div className="text-center text-gray-400">
            <svg
              className="w-12 h-12 mx-auto mb-2 opacity-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-xs">Image not available</p>
          </div>
        </div>
      )}
    </div>
  );
}