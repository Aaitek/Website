'use client';

import Image from 'next/image';
import { useState, memo } from 'react';
import { getOptimizedImageUrl } from '@/lib/utils';
import { Media } from '@/types';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  media?: Media;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fallbackSrc?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  style?: React.CSSProperties;
  preferredSize?: 'thumbnail' | 'small' | 'medium' | 'large';
}

/**
 * Optimized image component with error handling and fallback support
 */
function OptimizedImage({
  media,
  alt,
  width = 800,
  height = 600,
  className,
  fallbackSrc = '/img/placeholder.svg',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  fill = false,
  style,
  preferredSize = 'medium',
}: OptimizedImageProps) {
  const [hasError, setHasError] = useState(false);
  const [useNextImage, setUseNextImage] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Get the optimized image URL
  const imageUrl = getOptimizedImageUrl(media, preferredSize);

  // Use fallback if no URL or error occurred
  const finalSrc = hasError || !imageUrl ? fallbackSrc : imageUrl;
  const finalAlt = media?.alternativeText || alt;

  const handleError = () => {
    console.warn(`Failed to load image: ${imageUrl}, falling back to: ${fallbackSrc}`);
    setHasError(true);
    setIsLoading(false);
  };

  const handleNextImageError = () => {
    console.warn(`Next.js Image component failed, switching to standard img for: ${imageUrl}`);
    setUseNextImage(false);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const baseImageProps = {
    src: finalSrc,
    alt: finalAlt,
    onLoad: handleLoad,
    className: cn(
      'transition-opacity duration-300',
      isLoading ? 'opacity-0' : 'opacity-100',
      className
    ),
    style,
  };

  const nextImageProps = {
    ...baseImageProps,
    onError: handleNextImageError,
    priority,
    sizes,
  };

  const standardImageProps = {
    ...baseImageProps,
    onError: handleError,
  };

  if (fill) {
    return (
      <div className="relative overflow-hidden">
        {useNextImage ? (
          <Image
            {...nextImageProps}
            alt={finalAlt}
            fill
            style={{
              objectFit: 'cover',
              ...style,
            }}
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            {...standardImageProps}
            alt={finalAlt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
              ...style,
            }}
          />
        )}
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="text-gray-400 text-sm">Loading...</div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative">
      {useNextImage ? (
        <Image
          {...nextImageProps}
          alt={finalAlt}
          width={width}
          height={height}
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          {...standardImageProps}
          alt={finalAlt}
          width={width}
          height={height}
        />
      )}
      {isLoading && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"
          style={{ width, height }}
        >
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}
    </div>
  );
}

export default memo(OptimizedImage);

/**
 * Simple image wrapper for cases where you just need a basic optimized image
 */
export function SimpleOptimizedImage({
  src,
  alt,
  width = 800,
  height = 600,
  className,
  fallbackSrc = '/img/placeholder.svg',
  ...props
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fallbackSrc?: string;
  [key: string]: unknown;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <Image
      src={hasError ? fallbackSrc : src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setHasError(true)}
      {...props}
    />
  );
}