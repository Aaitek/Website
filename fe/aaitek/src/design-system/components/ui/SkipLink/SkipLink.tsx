/**
 * Skip Link Component
 * Accessibility navigation for keyboard users
 */

import React from 'react'
import { cn } from '../../../utils/cn'

interface SkipLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export const SkipLink: React.FC<SkipLinkProps> = ({
  href,
  children,
  className,
}) => {
  return (
    <a
      href={href}
      className={cn(
        // Hidden by default, visible on focus
        'absolute left-0 top-0 z-[9999]',
        'bg-brand-500 text-neutral-900',
        'px-4 py-2 font-semibold',
        'transform -translate-y-full',
        'focus:translate-y-0',
        'transition-transform duration-200 ease-out',
        'focus:outline-none focus-ring',
        'rounded-br-md',
        className
      )}
      onFocus={(e) => {
        // Ensure the link is visible when focused
        e.currentTarget.style.transform = 'translateY(0)'
      }}
      onBlur={(e) => {
        // Hide the link when focus is lost
        e.currentTarget.style.transform = 'translateY(-100%)'
      }}
    >
      {children}
    </a>
  )
}