/**
 * Design System Tokens
 * Central export for all design tokens
 */

export * from './colors';
export * from './typography';
export * from './spacing';
export * from './shadows';

// Breakpoints for responsive design
export const breakpoints = {
  xs: '320px',   // Small phones
  sm: '640px',   // Large phones
  md: '768px',   // Tablets
  lg: '1024px',  // Small laptops
  xl: '1280px',  // Large laptops
  '2xl': '1536px', // Desktop
  '3xl': '1920px', // Large desktop
} as const;

// Border radius tokens
export const borderRadius = {
  none: '0',
  xs: '0.125rem',    // 2px
  sm: '0.25rem',     // 4px
  md: '0.375rem',    // 6px
  lg: '0.5rem',      // 8px
  xl: '0.75rem',     // 12px
  '2xl': '1rem',     // 16px
  '3xl': '1.5rem',   // 24px
  full: '9999px',    // Fully rounded
} as const;

// Z-index scale for layering
export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
} as const;

// Animation timing and easing
export const animation = {
  // Duration tokens
  duration: {
    instant: '0ms',
    fast: '150ms',
    normal: '250ms',
    slow: '350ms',
    slower: '500ms',
    slowest: '750ms',
  },

  // Easing functions
  ease: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },

  // Common animation patterns
  fadeIn: {
    keyframes: {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    duration: '250ms',
    easing: 'cubic-bezier(0, 0, 0.2, 1)',
  },

  slideUp: {
    keyframes: {
      from: { transform: 'translateY(10px)', opacity: 0 },
      to: { transform: 'translateY(0)', opacity: 1 },
    },
    duration: '250ms',
    easing: 'cubic-bezier(0, 0, 0.2, 1)',
  },

  scale: {
    keyframes: {
      from: { transform: 'scale(0.95)', opacity: 0 },
      to: { transform: 'scale(1)', opacity: 1 },
    },
    duration: '200ms',
    easing: 'cubic-bezier(0, 0, 0.2, 1)',
  },
} as const;

// Common design patterns
export const patterns = {
  // Container constraints
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1400px',
    '3xl': '1600px',
  },

  // Aspect ratios
  aspectRatio: {
    square: '1/1',
    video: '16/9',
    photo: '4/3',
    wide: '21/9',
    ultrawide: '32/9',
  },

  // Common sizes for interactive elements
  touchTarget: {
    small: '32px',
    medium: '44px',    // WCAG recommended minimum
    large: '56px',
  },
} as const;

export type BreakpointToken = keyof typeof breakpoints;
export type BorderRadiusToken = keyof typeof borderRadius;
export type ZIndexToken = keyof typeof zIndex;