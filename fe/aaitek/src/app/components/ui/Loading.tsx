import { memo } from 'react';
import { cn } from '@/lib/utils';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
  variant?: 'spinner' | 'dots' | 'pulse';
}

/**
 * Loading component with multiple variants and sizes
 */
function Loading({ size = 'md', text, className, variant = 'spinner' }: LoadingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  if (variant === 'dots') {
    return (
      <div className={cn('flex items-center justify-center space-x-1', className)}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={cn(
              'bg-current rounded-full animate-pulse',
              size === 'sm' ? 'w-1 h-1' : size === 'md' ? 'w-2 h-2' : 'w-3 h-3'
            )}
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
        {text && <span className="ml-2 text-sm text-gray-600">{text}</span>}
      </div>
    );
  }

  if (variant === 'pulse') {
    return (
      <div className={cn('flex items-center justify-center', className)}>
        <div className={cn('bg-gray-300 rounded-full animate-pulse', sizeClasses[size])} />
        {text && <span className="ml-2 text-sm text-gray-600">{text}</span>}
      </div>
    );
  }

  return (
    <div className={cn('flex items-center justify-center', className)}>
      <div
        className={cn(
          'animate-spin rounded-full border-2 border-gray-300 border-t-blue-600',
          sizeClasses[size]
        )}
      />
      {text && <span className="ml-3 text-sm text-gray-600">{text}</span>}
    </div>
  );
}

export default memo(Loading);