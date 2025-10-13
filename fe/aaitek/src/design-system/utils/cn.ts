/**
 * Class name utility for conditional and merged class names
 * Based on clsx and tailwind-merge for optimal performance
 */

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utility function to merge class names with Tailwind CSS classes
 * Handles conditional classes and merges conflicting Tailwind classes
 *
 * @param inputs - Class values (strings, objects, arrays)
 * @returns Merged class name string
 *
 * @example
 * cn('px-4', 'py-2', condition && 'bg-blue-500')
 * cn('text-sm', { 'font-bold': isActive }, 'hover:text-blue-500')
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

/**
 * Variant utility for creating component variants with base classes
 *
 * @param base - Base classes applied to all variants
 * @param variants - Object of variant classes
 * @param defaultVariant - Default variant key
 *
 * @example
 * const buttonVariants = variants({
 *   base: 'px-4 py-2 rounded font-medium',
 *   variants: {
 *     variant: {
 *       primary: 'bg-blue-500 text-white',
 *       secondary: 'bg-gray-200 text-gray-900'
 *     },
 *     size: {
 *       sm: 'text-sm px-3 py-1',
 *       lg: 'text-lg px-6 py-3'
 *     }
 *   },
 *   defaultVariants: {
 *     variant: 'primary',
 *     size: 'sm'
 *   }
 * })
 */
export function variants<T extends Record<string, Record<string, string>>>(config: {
  base?: string
  variants?: T
  defaultVariants?: {
    [K in keyof T]?: keyof T[K]
  }
}) {
  return function(props?: {
    [K in keyof T]?: keyof T[K]
  } & { className?: string }) {
    const { className, ...variantProps } = props || {}

    const variantClasses = Object.entries(config.variants || {}).map(([key, variants]) => {
      const variantKey = variantProps[key as keyof typeof variantProps] ||
                        config.defaultVariants?.[key as keyof typeof config.defaultVariants]
      return variantKey ? variants[variantKey as string] : ''
    })

    return cn(config.base, ...variantClasses, className)
  }
}