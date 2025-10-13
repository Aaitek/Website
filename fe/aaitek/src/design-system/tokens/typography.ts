/**
 * Design System - Typography Tokens
 * Fluid typography system with responsive scaling
 */

export const fontFamily = {
  sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  mono: ['Roboto Mono', 'Consolas', 'Monaco', 'Liberation Mono', 'Lucida Console', 'monospace'],
  display: ['Inter', 'system-ui', 'sans-serif'], // For headings and hero text
} as const;

export const fontWeight = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const;

// Fluid typography using clamp() for responsive scaling
export const fontSize = {
  // Base text sizes
  xs: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',     // 12px -> 14px
  sm: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',       // 14px -> 16px
  base: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',       // 16px -> 18px
  lg: 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',      // 18px -> 20px
  xl: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',       // 20px -> 24px

  // Display sizes for headings
  '2xl': 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',          // 24px -> 32px
  '3xl': 'clamp(1.875rem, 1.6rem + 1.375vw, 2.5rem)',  // 30px -> 40px
  '4xl': 'clamp(2.25rem, 1.9rem + 1.75vw, 3rem)',      // 36px -> 48px
  '5xl': 'clamp(3rem, 2.5rem + 2.5vw, 4rem)',          // 48px -> 64px
  '6xl': 'clamp(3.75rem, 3rem + 3.75vw, 5rem)',        // 60px -> 80px
  '7xl': 'clamp(4.5rem, 3.5rem + 5vw, 6rem)',          // 72px -> 96px
  '8xl': 'clamp(6rem, 4.5rem + 7.5vw, 8rem)',          // 96px -> 128px
  '9xl': 'clamp(8rem, 6rem + 10vw, 10rem)',            // 128px -> 160px
} as const;

export const lineHeight = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
} as const;

export const letterSpacing = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
} as const;

// Typography scale presets for consistent usage
export const typographyScale = {
  // Display text (hero sections, large headings)
  display: {
    fontSize: fontSize['8xl'],
    fontFamily: fontFamily.display,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  },

  // Large headings (h1)
  h1: {
    fontSize: fontSize['6xl'],
    fontFamily: fontFamily.display,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  },

  // Section headings (h2)
  h2: {
    fontSize: fontSize['5xl'],
    fontFamily: fontFamily.display,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.snug,
    letterSpacing: letterSpacing.tight,
  },

  // Subsection headings (h3)
  h3: {
    fontSize: fontSize['4xl'],
    fontFamily: fontFamily.display,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.snug,
    letterSpacing: letterSpacing.normal,
  },

  // Component headings (h4)
  h4: {
    fontSize: fontSize['3xl'],
    fontFamily: fontFamily.display,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },

  // Card/widget headings (h5)
  h5: {
    fontSize: fontSize['2xl'],
    fontFamily: fontFamily.display,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },

  // Small headings (h6)
  h6: {
    fontSize: fontSize.xl,
    fontFamily: fontFamily.display,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },

  // Body text variants
  bodyLarge: {
    fontSize: fontSize.lg,
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.relaxed,
    letterSpacing: letterSpacing.normal,
  },

  body: {
    fontSize: fontSize.base,
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },

  bodySmall: {
    fontSize: fontSize.sm,
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },

  // UI text
  caption: {
    fontSize: fontSize.xs,
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.wide,
  },

  label: {
    fontSize: fontSize.sm,
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },

  button: {
    fontSize: fontSize.base,
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.none,
    letterSpacing: letterSpacing.normal,
  },

  // Code text
  code: {
    fontSize: fontSize.sm,
    fontFamily: fontFamily.mono,
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },
} as const;

export type FontFamilyToken = keyof typeof fontFamily;
export type FontWeightToken = keyof typeof fontWeight;
export type FontSizeToken = keyof typeof fontSize;
export type LineHeightToken = keyof typeof lineHeight;
export type LetterSpacingToken = keyof typeof letterSpacing;
export type TypographyScaleToken = keyof typeof typographyScale;