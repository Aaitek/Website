/**
 * Design System - Spacing Tokens
 * Consistent 8px grid system with responsive scaling
 */

// Base spacing scale (8px grid system)
export const spacing = {
  0: '0',
  px: '1px',
  0.5: '0.125rem',    // 2px
  1: '0.25rem',       // 4px
  1.5: '0.375rem',    // 6px
  2: '0.5rem',        // 8px
  2.5: '0.625rem',    // 10px
  3: '0.75rem',       // 12px
  3.5: '0.875rem',    // 14px
  4: '1rem',          // 16px
  5: '1.25rem',       // 20px
  6: '1.5rem',        // 24px
  7: '1.75rem',       // 28px
  8: '2rem',          // 32px
  9: '2.25rem',       // 36px
  10: '2.5rem',       // 40px
  11: '2.75rem',      // 44px
  12: '3rem',         // 48px
  14: '3.5rem',       // 56px
  16: '4rem',         // 64px
  20: '5rem',         // 80px
  24: '6rem',         // 96px
  28: '7rem',         // 112px
  32: '8rem',         // 128px
  36: '9rem',         // 144px
  40: '10rem',        // 160px
  44: '11rem',        // 176px
  48: '12rem',        // 192px
  52: '13rem',        // 208px
  56: '14rem',        // 224px
  60: '15rem',        // 240px
  64: '16rem',        // 256px
  72: '18rem',        // 288px
  80: '20rem',        // 320px
  96: '24rem',        // 384px
} as const;

// Responsive spacing with fluid scaling
export const fluidSpacing = {
  // Extra small responsive spacing
  'xs': 'clamp(0.5rem, 0.4rem + 0.5vw, 0.75rem)',     // 8px -> 12px
  'sm': 'clamp(0.75rem, 0.6rem + 0.75vw, 1.125rem)',   // 12px -> 18px
  'md': 'clamp(1rem, 0.8rem + 1vw, 1.5rem)',           // 16px -> 24px
  'lg': 'clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem)',      // 24px -> 36px
  'xl': 'clamp(2rem, 1.6rem + 2vw, 3rem)',             // 32px -> 48px
  '2xl': 'clamp(2.5rem, 2rem + 2.5vw, 3.75rem)',       // 40px -> 60px
  '3xl': 'clamp(3rem, 2.4rem + 3vw, 4.5rem)',          // 48px -> 72px
  '4xl': 'clamp(4rem, 3.2rem + 4vw, 6rem)',            // 64px -> 96px
  '5xl': 'clamp(5rem, 4rem + 5vw, 7.5rem)',            // 80px -> 120px
  '6xl': 'clamp(6rem, 4.8rem + 6vw, 9rem)',            // 96px -> 144px
} as const;

// Container and layout spacing
export const containerSpacing = {
  // Container max widths
  maxWidth: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1400px',
    '3xl': '1600px',
    full: '100%',
  },

  // Container padding (responsive)
  padding: {
    mobile: spacing[4],      // 16px on mobile
    tablet: spacing[6],      // 24px on tablet
    desktop: spacing[8],     // 32px on desktop
    wide: spacing[12],       // 48px on wide screens
  },

  // Section spacing (between major page sections)
  section: {
    mobile: spacing[16],     // 64px on mobile
    tablet: spacing[20],     // 80px on tablet
    desktop: spacing[24],    // 96px on desktop
    wide: spacing[32],       // 128px on wide screens
  },
} as const;

// Component-specific spacing
export const componentSpacing = {
  // Button padding
  button: {
    sm: { x: spacing[3], y: spacing[1.5] },    // 12px x 6px
    md: { x: spacing[4], y: spacing[2] },      // 16px x 8px
    lg: { x: spacing[6], y: spacing[3] },      // 24px x 12px
    xl: { x: spacing[8], y: spacing[4] },      // 32px x 16px
  },

  // Card padding
  card: {
    sm: spacing[4],          // 16px
    md: spacing[6],          // 24px
    lg: spacing[8],          // 32px
    xl: spacing[10],         // 40px
  },

  // Form spacing
  form: {
    fieldSpacing: spacing[4],      // 16px between form fields
    labelSpacing: spacing[2],      // 8px between label and input
    groupSpacing: spacing[6],      // 24px between form groups
  },

  // Navigation spacing
  nav: {
    itemSpacing: spacing[6],       // 24px between nav items
    dropdownSpacing: spacing[2],   // 8px in dropdown menus
    mobileSpacing: spacing[4],     // 16px in mobile nav
  },

  // Grid and layout gaps
  grid: {
    sm: spacing[4],          // 16px
    md: spacing[6],          // 24px
    lg: spacing[8],          // 32px
    xl: spacing[12],         // 48px
  },
} as const;

export type SpacingToken = keyof typeof spacing;
export type FluidSpacingToken = keyof typeof fluidSpacing;
export type ContainerSpacingToken = keyof typeof containerSpacing;
export type ComponentSpacingToken = keyof typeof componentSpacing;