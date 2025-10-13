/**
 * Design System Card Component
 * Flexible card component with consistent styling and accessibility
 */

import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { variants } from '../../../utils/cn'
import { cn } from '../../../utils/cn'

// Card variant configuration
const cardVariants = variants({
  base: [
    'card-base',
    'bg-background border border-border',
    'transition-all duration-200 ease-out',
  ].join(' '),
  variants: {
    variant: {
      default: 'shadow-raised hover:shadow-hover',
      elevated: 'shadow-overlay hover:shadow-modal',
      outline: 'border-2 shadow-none hover:shadow-sm',
      ghost: 'border-transparent shadow-none hover:border-border hover:shadow-sm',
      brand: 'border-brand-200 bg-brand-50 shadow-brand-card hover:shadow-brand-hover',
    },
    size: {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-10',
    },
    interactive: {
      true: 'cursor-pointer hover:scale-[1.02] active:scale-[0.98] focus-ring',
      false: '',
    },
    fullWidth: {
      true: 'w-full',
      false: 'w-auto',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    interactive: 'false',
    fullWidth: 'false',
  },
})

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outline' | 'ghost' | 'brand'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  interactive?: boolean
  fullWidth?: boolean
  asChild?: boolean
  href?: string
}

const Card: React.FC<CardProps> = ({
  className,
  variant,
  size,
  interactive,
  fullWidth,
  asChild = false,
  href,
  children,
  onClick,
  ...props
}) => {
    const isInteractive = interactive || !!onClick || !!href
    const Comp = asChild ? Slot : href ? 'a' : 'div'

    const cardProps: React.HTMLAttributes<HTMLElement> = {
      className: cn(
        cardVariants({
          variant,
          size,
          interactive: isInteractive ? 'true' : 'false',
          fullWidth: fullWidth ? 'true' : 'false'
        }),
        className
      ),
      ...(href && { href }),
      ...(onClick && { onClick }),
      ...(isInteractive && {
        role: href ? 'link' : 'button',
        tabIndex: 0,
        onKeyDown: (e: React.KeyboardEvent) => {
          if ((e.key === 'Enter' || e.key === ' ') && onClick) {
            e.preventDefault()
            onClick(e as unknown as React.MouseEvent<HTMLDivElement>)
          }
        },
      }),
      ...props,
    }

    return <Comp {...cardProps}>{children}</Comp>
}

Card.displayName = 'Card'

// Card sub-components
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 pb-4', className)}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-xl font-semibold leading-tight tracking-tight text-neutral-900',
      className
    )}
    {...props}
  >
    {children}
  </h3>
))
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-neutral-600 leading-relaxed', className)}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('pt-0', className)} {...props} />
))
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center pt-4', className)}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  cardVariants,
}