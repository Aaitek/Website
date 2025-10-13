import type { Config } from 'tailwindcss'
import { colors, semanticColors } from './src/design-system/tokens/colors'
import { fontSize, fontFamily, fontWeight, lineHeight, letterSpacing } from './src/design-system/tokens/typography'
import { spacing, fluidSpacing } from './src/design-system/tokens/spacing'
import { shadows, elevation } from './src/design-system/tokens/shadows'
import { breakpoints, borderRadius, zIndex, animation } from './src/design-system/tokens'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/design-system/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Colors from our design system
      colors: {
        ...colors,
        // Semantic colors for easy usage
        primary: semanticColors.primary,
        'primary-foreground': semanticColors.primaryForeground,
        secondary: semanticColors.secondary,
        'secondary-foreground': semanticColors.secondaryForeground,
        background: semanticColors.background,
        'background-muted': semanticColors.backgroundMuted,
        foreground: semanticColors.foreground,
        'foreground-muted': semanticColors.foregroundMuted,
        border: semanticColors.border,
        'border-muted': semanticColors.borderMuted,
        // State colors
        success: semanticColors.success,
        error: semanticColors.error,
        warning: semanticColors.warning,
        info: semanticColors.info,
      },

      // Typography
      fontFamily,
      fontSize,
      fontWeight,
      lineHeight,
      letterSpacing,

      // Spacing with both fixed and fluid options
      spacing: {
        ...spacing,
        // Fluid spacing for responsive design
        'fluid-xs': fluidSpacing.xs,
        'fluid-sm': fluidSpacing.sm,
        'fluid-md': fluidSpacing.md,
        'fluid-lg': fluidSpacing.lg,
        'fluid-xl': fluidSpacing.xl,
        'fluid-2xl': fluidSpacing['2xl'],
        'fluid-3xl': fluidSpacing['3xl'],
        'fluid-4xl': fluidSpacing['4xl'],
        'fluid-5xl': fluidSpacing['5xl'],
        'fluid-6xl': fluidSpacing['6xl'],
      },

      // Responsive breakpoints
      screens: breakpoints,

      // Border radius
      borderRadius,

      // Box shadows
      boxShadow: {
        ...shadows,
        // Elevation shortcuts
        'surface': elevation.surface,
        'raised': elevation.raised,
        'overlay': elevation.overlay,
        'modal': elevation.modal,
        'popup': elevation.popup,
        'hover': elevation.hover,
        'active': elevation.active,
        'fab': elevation.fab,
        'navigation': elevation.navigation,
        'brand-card': elevation.brandCard,
        'brand-hover': elevation.brandHover,
      },

      // Z-index
      zIndex,

      // Animation utilities
      transitionDuration: animation.duration,
      transitionTimingFunction: animation.ease,

      // Container settings
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2.5rem',
          '2xl': '3rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },

      // Custom utilities
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      // Animation keyframes
      keyframes: {
        'fade-in': animation.fadeIn.keyframes,
        'slide-up': animation.slideUp.keyframes,
        'scale-in': animation.scale.keyframes,
        // Custom animations
        'pulse-brand': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(251, 213, 6, 0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(251, 213, 6, 0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'shimmer': {
          '100%': { transform: 'translateX(100%)' },
        },
      },

      // Animation classes
      animation: {
        'fade-in': 'fade-in 250ms ease-out',
        'slide-up': 'slide-up 250ms ease-out',
        'scale-in': 'scale-in 200ms ease-out',
        'pulse-brand': 'pulse-brand 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
      },

      // Backdrop blur
      backdropBlur: {
        xs: '2px',
      },

      // Custom aspect ratios
      aspectRatio: {
        '4/3': '4 / 3',
        '21/9': '21 / 9',
        '32/9': '32 / 9',
      },
    },
  },
  plugins: [
    // Custom plugin for design system utilities
    function({ addUtilities, addComponents, theme }: any) {
      // Add custom utilities
      addUtilities({
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.text-pretty': {
          'text-wrap': 'pretty',
        },
        // Focus ring utilities
        '.focus-ring': {
          '&:focus': {
            outline: 'none',
            boxShadow: '0 0 0 3px rgba(251, 213, 6, 0.3)',
          },
        },
        '.focus-ring-error': {
          '&:focus': {
            outline: 'none',
            boxShadow: '0 0 0 3px rgba(239, 68, 68, 0.3)',
          },
        },
        // Scrollbar styling
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
          '&::-webkit-scrollbar': {
            width: '4px',
            height: '4px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme('colors.neutral.300'),
            borderRadius: theme('borderRadius.full'),
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: theme('colors.neutral.400'),
          },
        },
      })

      // Add component classes
      addComponents({
        // Button base styles
        '.btn-base': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: theme('borderRadius.lg'),
          fontWeight: theme('fontWeight.semibold'),
          transition: 'all 0.2s ease-in-out',
          cursor: 'pointer',
          border: 'none',
          textDecoration: 'none',
          '&:focus': {
            outline: 'none',
            boxShadow: '0 0 0 3px rgba(251, 213, 6, 0.3)',
          },
          '&:disabled': {
            opacity: '0.6',
            cursor: 'not-allowed',
          },
        },

        // Card base styles
        '.card-base': {
          backgroundColor: theme('colors.neutral.0'),
          borderRadius: theme('borderRadius.xl'),
          boxShadow: theme('boxShadow.raised'),
          border: `1px solid ${theme('colors.border.DEFAULT')}`,
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            boxShadow: theme('boxShadow.hover'),
          },
        },

        // Section base styles
        '.section-base': {
          paddingTop: theme('spacing.fluid-4xl'),
          paddingBottom: theme('spacing.fluid-4xl'),
        },
      })
    },

    // Plugin for reduced motion support
    function({ addVariant }: any) {
      addVariant('motion-safe', '@media (prefers-reduced-motion: no-preference)')
      addVariant('motion-reduce', '@media (prefers-reduced-motion: reduce)')
    },
  ],
}

export default config