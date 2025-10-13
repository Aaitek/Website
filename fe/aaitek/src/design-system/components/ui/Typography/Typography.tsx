/**
 * Design System Typography Component
 * Semantic typography with consistent styling
 */

import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { variants } from '../../../utils/cn'
import { cn } from '../../../utils/cn'

// Typography variant configuration
const typographyVariants = variants({
  base: 'text-balance',
  variants: {
    variant: {
      display: [
        'text-6xl md:text-8xl font-bold',
        'leading-tight tracking-tight',
        'text-neutral-900',
      ].join(' '),
      h1: [
        'text-4xl md:text-6xl font-bold',
        'leading-tight tracking-tight',
        'text-neutral-900',
      ].join(' '),
      h2: [
        'text-3xl md:text-5xl font-bold',
        'leading-snug tracking-tight',
        'text-neutral-900',
      ].join(' '),
      h3: [
        'text-2xl md:text-4xl font-semibold',
        'leading-snug',
        'text-neutral-900',
      ].join(' '),
      h4: [
        'text-xl md:text-3xl font-semibold',
        'leading-normal',
        'text-neutral-900',
      ].join(' '),
      h5: [
        'text-lg md:text-2xl font-medium',
        'leading-normal',
        'text-neutral-900',
      ].join(' '),
      h6: [
        'text-base md:text-xl font-medium',
        'leading-normal',
        'text-neutral-900',
      ].join(' '),
      bodyLarge: [
        'text-lg md:text-xl',
        'leading-relaxed',
        'text-neutral-700',
      ].join(' '),
      body: [
        'text-base md:text-lg',
        'leading-normal',
        'text-neutral-700',
      ].join(' '),
      bodySmall: [
        'text-sm md:text-base',
        'leading-normal',
        'text-neutral-600',
      ].join(' '),
      caption: [
        'text-xs md:text-sm font-medium',
        'leading-normal tracking-wide uppercase',
        'text-neutral-500',
      ].join(' '),
      label: [
        'text-sm font-medium',
        'leading-normal',
        'text-neutral-700',
      ].join(' '),
      code: [
        'text-sm font-mono',
        'leading-normal',
        'bg-neutral-100 px-1.5 py-0.5 rounded',
        'text-neutral-800',
      ].join(' '),
      link: [
        'text-brand-600 hover:text-brand-700',
        'underline-offset-4 hover:underline',
        'transition-colors duration-200',
        'cursor-pointer',
      ].join(' '),
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    },
    color: {
      default: '',
      muted: 'text-neutral-600',
      subtle: 'text-neutral-500',
      primary: 'text-brand-600',
      success: 'text-success-600',
      warning: 'text-warning-600',
      error: 'text-error-600',
      white: 'text-white',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    variant: 'body',
    align: 'left',
    color: 'default',
    weight: 'normal',
  },
})

type TypographyVariant = 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'bodyLarge' | 'body' | 'bodySmall' | 'caption' | 'label' | 'code' | 'link'
type TypographyAlign = 'left' | 'center' | 'right' | 'justify'
type TypographyColor = 'default' | 'muted' | 'subtle' | 'primary' | 'success' | 'warning' | 'error' | 'white'
type TypographyWeight = 'normal' | 'medium' | 'semibold' | 'bold'

// Element mapping for semantic HTML
const elementMap: Record<TypographyVariant, string> = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  bodyLarge: 'p',
  body: 'p',
  bodySmall: 'p',
  caption: 'span',
  label: 'label',
  code: 'code',
  link: 'a',
}

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  variant?: TypographyVariant
  align?: TypographyAlign
  color?: TypographyColor
  weight?: TypographyWeight
  asChild?: boolean
  as?: string
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      className,
      variant = 'body',
      align,
      color,
      weight,
      asChild = false,
      as,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild
      ? Slot
      : (as || elementMap[variant]) as React.ElementType

    return (
      <Comp
        className={cn(
          typographyVariants({ variant, align, color, weight }),
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)

Typography.displayName = 'Typography'

export { Typography, typographyVariants }