'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ModernButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  glow?: boolean;
  children: React.ReactNode;
}

const ModernButton = forwardRef<HTMLButtonElement, ModernButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      icon: Icon,
      iconPosition = 'left',
      loading = false,
      glow = false,
      className = '',
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses = `
      relative inline-flex items-center justify-center gap-2 font-semibold rounded-xl
      transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1C1C1C]
      disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group
    `;

    const variants = {
      primary: `
        bg-[#FBD506] text-black hover:bg-[#F4A607] focus:ring-[#FBD506]
        shadow-lg shadow-[#FBD506]/25 hover:shadow-xl hover:shadow-[#FBD506]/40
      `,
      secondary: `
        bg-[#2A2A2A] text-white hover:bg-[#333] focus:ring-gray-500
        border border-gray-700 hover:border-gray-600
      `,
      ghost: `
        bg-transparent text-gray-300 hover:text-white hover:bg-white/5
        focus:ring-gray-500
      `,
      outline: `
        bg-transparent text-[#FBD506] border border-[#FBD506] hover:bg-[#FBD506]/10
        focus:ring-[#FBD506]
      `,
      gradient: `
        bg-gradient-to-r from-[#FBD506] to-[#F4A607] text-black
        hover:from-[#F4A607] hover:to-[#FBD506] focus:ring-[#FBD506]
        shadow-lg shadow-[#FBD506]/25 hover:shadow-xl hover:shadow-[#FBD506]/40
      `
    };

    const sizes = {
      sm: 'px-3 py-2 text-sm min-h-[2.25rem]',
      md: 'px-4 py-3 text-base min-h-[2.75rem]',
      lg: 'px-6 py-4 text-lg min-h-[3.25rem]',
      xl: 'px-8 py-5 text-xl min-h-[3.75rem]'
    };

    const iconSizes = {
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24
    };

    const buttonVariants = {
      initial: { scale: 1 },
      hover: { scale: 1.02 },
      tap: { scale: 0.98 }
    };

    const shimmerVariants = {
      initial: { x: '-100%', opacity: 0 },
      hover: {
        x: '100%',
        opacity: [0, 1, 0],
        transition: { duration: 0.6, ease: 'easeInOut' }
      }
    };

    return (
      <motion.button
        ref={ref}
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        disabled={disabled || loading}
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {/* Shimmer effect */}
        <motion.div
          variants={shimmerVariants}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />

        {/* Glow effect */}
        {glow && variant === 'primary' && (
          <div className="absolute inset-0 bg-[#FBD506] blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10" />
        )}

        {/* Content */}
        <div className="relative flex items-center justify-center gap-2">
          {loading ? (
            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              {Icon && iconPosition === 'left' && (
                <Icon size={iconSizes[size]} />
              )}
              <span>{children}</span>
              {Icon && iconPosition === 'right' && (
                <Icon size={iconSizes[size]} />
              )}
            </>
          )}
        </div>
      </motion.button>
    );
  }
);

ModernButton.displayName = 'ModernButton';

export default ModernButton;

// Preset button variants
export function PrimaryButton(props: Omit<ModernButtonProps, 'variant'>) {
  return <ModernButton variant="primary" glow {...props} />;
}

export function SecondaryButton(props: Omit<ModernButtonProps, 'variant'>) {
  return <ModernButton variant="secondary" {...props} />;
}

export function GhostButton(props: Omit<ModernButtonProps, 'variant'>) {
  return <ModernButton variant="ghost" {...props} />;
}

export function OutlineButton(props: Omit<ModernButtonProps, 'variant'>) {
  return <ModernButton variant="outline" {...props} />;
}

export function GradientButton(props: Omit<ModernButtonProps, 'variant'>) {
  return <ModernButton variant="gradient" glow {...props} />;
}