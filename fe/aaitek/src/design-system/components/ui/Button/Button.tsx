/**
 * Design System Button Component
 * Award-winning button with consistent styling and accessibility
 */

import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { variants } from '../../../utils/cn'
import { cn } from '../../../utils/cn'

// Button variant configuration
const buttonVariants = variants({
  base: [
    'btn-base',
    'inline-flex items-center justify-center gap-2',
    'font-semibold tracking-wide',
    'transition-all duration-200 ease-out',
    'focus-ring',
    'disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none',
    'select-none',
  ].join(' '),
  variants: {
    variant: {
      primary: [
        'bg-gradient-to-r from-brand-500 to-brand-600',
        'text-brand-950 hover:text-brand-950',
        'hover:from-brand-600 hover:to-brand-700',
        'active:from-brand-700 active:to-brand-800',
        'shadow-md hover:shadow-lg',
        'transform hover:scale-105 active:scale-95',
      ].join(' '),
      secondary: [
        'bg-neutral-50 hover:bg-neutral-100',
        'text-neutral-900 hover:text-neutral-950',
        'border border-neutral-200 hover:border-neutral-300',
        'shadow-sm hover:shadow-md',
        'transform hover:scale-105 active:scale-95',
      ].join(' '),
      outline: [
        'bg-transparent hover:bg-brand-50',
        'text-brand-700 hover:text-brand-800',
        'border-2 border-brand-500 hover:border-brand-600',
        'shadow-sm hover:shadow-md',
        'transform hover:scale-105 active:scale-95',
      ].join(' '),
      ghost: [
        'bg-transparent hover:bg-neutral-100',
        'text-neutral-700 hover:text-neutral-900',
        'border border-transparent hover:border-neutral-200',
        'shadow-none hover:shadow-sm',
        'transform hover:scale-105 active:scale-95',
      ].join(' '),
      link: [
        'bg-transparent hover:bg-transparent',
        'text-brand-600 hover:text-brand-700',
        'underline-offset-4 hover:underline',
        'shadow-none',
        'p-0 h-auto',
      ].join(' '),
      destructive: [
        'bg-gradient-to-r from-error-500 to-error-600',
        'text-white hover:text-white',
        'hover:from-error-600 hover:to-error-700',
        'active:from-error-700 active:to-error-800',
        'shadow-md hover:shadow-lg',
        'transform hover:scale-105 active:scale-95',
      ].join(' '),
    },
    size: {
      sm: 'h-9 px-3 text-sm',
      md: 'h-11 px-4 text-base',
      lg: 'h-12 px-6 text-lg',
      xl: 'h-14 px-8 text-xl',
      icon: 'h-11 w-11 p-0',
    },
    fullWidth: {
      true: 'w-full',
      false: 'w-auto',
    },
    loading: {
      true: 'cursor-wait',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    fullWidth: 'false',
    loading: 'false',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive'
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'icon'
  fullWidth?: boolean
  loading?: boolean
  asChild?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      loading,
      asChild = false,
      children,
      leftIcon,
      rightIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading

    if (asChild) {
      return (
        <Slot
          className={cn(
            buttonVariants({
              variant,
              size,
              fullWidth: fullWidth ? 'true' : 'false',
              loading: loading ? 'true' : 'false'
            }),
            className
          )}
          {...props}
        >
          {children}
        </Slot>
      )
    }

    return (
      <button
        className={cn(
          buttonVariants({
            variant,
            size,
            fullWidth: fullWidth ? 'true' : 'false',
            loading: loading ? 'true' : 'false'
          }),
          className
        )}
        ref={ref}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!loading && leftIcon && (
          <span className="inline-flex shrink-0" aria-hidden="true">
            {leftIcon}
          </span>
        )}
        <span className={loading ? 'opacity-70' : ''}>{children}</span>
        {!loading && rightIcon && (
          <span className="inline-flex shrink-0" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }