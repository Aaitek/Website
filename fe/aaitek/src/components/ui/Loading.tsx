import React from 'react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'spinner' | 'dots' | 'pulse' | 'skeleton';
  text?: string;
  className?: string;
  fullScreen?: boolean;
}

/**
 * Versatile loading component with different variants and sizes
 */
export default function Loading({
  size = 'md',
  variant = 'spinner',
  text,
  className = '',
  fullScreen = false,
}: LoadingProps) {
  // Size configuration
  const sizeConfig = {
    sm: {
      spinner: 'w-4 h-4',
      dots: 'w-2 h-2',
      container: 'p-4',
      text: 'text-sm',
    },
    md: {
      spinner: 'w-6 h-6',
      dots: 'w-3 h-3',
      container: 'p-6',
      text: 'text-base',
    },
    lg: {
      spinner: 'w-8 h-8',
      dots: 'w-4 h-4',
      container: 'p-8',
      text: 'text-lg',
    },
    xl: {
      spinner: 'w-12 h-12',
      dots: 'w-6 h-6',
      container: 'p-12',
      text: 'text-xl',
    },
  };

  const config = sizeConfig[size];

  const renderSpinner = () => (
    <div
      className={`${config.spinner} border-2 border-gray-600 border-t-[#FBD506] rounded-full animate-spin`}
    />
  );

  const renderDots = () => (
    <div className="flex space-x-2">
      <div
        className={`${config.dots} bg-[#FBD506] rounded-full animate-pulse`}
        style={{ animationDelay: '0s' }}
      />
      <div
        className={`${config.dots} bg-[#FBD506] rounded-full animate-pulse`}
        style={{ animationDelay: '0.2s' }}
      />
      <div
        className={`${config.dots} bg-[#FBD506] rounded-full animate-pulse`}
        style={{ animationDelay: '0.4s' }}
      />
    </div>
  );

  const renderPulse = () => (
    <div className="flex items-center space-x-4">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-gray-600 h-12 w-12"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-600 rounded w-3/4"></div>
          <div className="h-4 bg-gray-600 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );

  const renderSkeleton = () => (
    <div className="animate-pulse space-y-4 w-full">
      <div className="h-4 bg-gray-600 rounded w-3/4"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-4 bg-gray-600 rounded col-span-2"></div>
          <div className="h-4 bg-gray-600 rounded col-span-1"></div>
        </div>
        <div className="h-4 bg-gray-600 rounded"></div>
        <div className="h-4 bg-gray-600 rounded w-5/6"></div>
      </div>
    </div>
  );

  const renderVariant = () => {
    switch (variant) {
      case 'dots':
        return renderDots();
      case 'pulse':
        return renderPulse();
      case 'skeleton':
        return renderSkeleton();
      case 'spinner':
      default:
        return renderSpinner();
    }
  };

  const containerClass = [
    'flex flex-col items-center justify-center',
    fullScreen ? 'min-h-screen fixed inset-0 bg-[#1C1C1C] z-50' : config.container,
    className,
  ].join(' ');

  return (
    <div className={containerClass}>
      {renderVariant()}
      {text && (
        <p className={`mt-4 text-gray-300 ${config.text} font-medium animate-pulse`}>
          {text}
        </p>
      )}
    </div>
  );
}

/**
 * Simple inline spinner component
 */
export const InlineSpinner = ({ className = '' }: { className?: string }) => (
  <div
    className={`inline-block w-4 h-4 border-2 border-gray-600 border-t-[#FBD506] rounded-full animate-spin ${className}`}
  />
);

/**
 * Loading overlay component for covering content
 */
export const LoadingOverlay = ({
  isLoading,
  children,
  text = 'Loading...',
}: {
  isLoading: boolean;
  children: React.ReactNode;
  text?: string;
}) => (
  <div className="relative">
    {children}
    {isLoading && (
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-10">
        <Loading variant="spinner" text={text} />
      </div>
    )}
  </div>
);

/**
 * Content placeholder for skeleton loading
 */
export const ContentPlaceholder = ({
  lines = 3,
  className = '',
}: {
  lines?: number;
  className?: string;
}) => (
  <div className={`animate-pulse space-y-4 ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <div
        key={i}
        className="h-4 bg-gray-600 rounded"
        style={{
          width: `${Math.random() * 40 + 60}%`,
        }}
      />
    ))}
  </div>
);