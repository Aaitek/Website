/**
 * Design System - Color Tokens
 * Award-winning color palette with HSL values for better manipulation
 */

export const colors = {
  // Brand colors
  brand: {
    50: 'hsl(52, 96%, 95%)',   // #fefdf4
    100: 'hsl(52, 96%, 89%)',  // #fcf9e3
    200: 'hsl(52, 96%, 78%)',  // #f9f2c1
    300: 'hsl(52, 96%, 67%)',  // #f5e99f
    400: 'hsl(52, 96%, 56%)',  // #f1e07d
    500: 'hsl(52, 96%, 51%)',  // #FBD506 - Primary brand
    600: 'hsl(52, 96%, 45%)',  // #d4b505
    700: 'hsl(52, 96%, 35%)',  // #a38904
    800: 'hsl(52, 96%, 28%)',  // #7d6b03
    900: 'hsl(52, 96%, 20%)',  // #564902
    950: 'hsl(52, 96%, 12%)',  // #2f2701
  },

  // Neutral colors (grayscale)
  neutral: {
    0: 'hsl(0, 0%, 100%)',     // #ffffff - Pure white
    50: 'hsl(0, 0%, 96%)',     // #f5f5f5 - Light gray
    100: 'hsl(0, 0%, 92%)',    // #ebebeb
    200: 'hsl(0, 0%, 86%)',    // #dbdbdb
    300: 'hsl(0, 0%, 78%)',    // #c7c7c7
    400: 'hsl(0, 0%, 64%)',    // #a3a3a3
    500: 'hsl(0, 0%, 45%)',    // #737373
    600: 'hsl(0, 0%, 32%)',    // #525252
    700: 'hsl(0, 0%, 23%)',    // #3a3a3a
    800: 'hsl(0, 0%, 18%)',    // #2e2e2e
    900: 'hsl(0, 0%, 11%)',    // #1c1c1c - Primary dark
    950: 'hsl(0, 0%, 7%)',     // #121212 - Extra dark
  },

  // Semantic colors
  success: {
    50: 'hsl(142, 76%, 95%)',
    100: 'hsl(142, 76%, 89%)',
    200: 'hsl(142, 76%, 78%)',
    300: 'hsl(142, 76%, 67%)',
    400: 'hsl(142, 76%, 56%)',
    500: 'hsl(142, 71%, 45%)',  // #16a34a
    600: 'hsl(142, 76%, 36%)',
    700: 'hsl(142, 76%, 27%)',
    800: 'hsl(142, 76%, 18%)',
    900: 'hsl(142, 76%, 9%)',
  },

  error: {
    50: 'hsl(0, 86%, 97%)',
    100: 'hsl(0, 93%, 94%)',
    200: 'hsl(0, 96%, 89%)',
    300: 'hsl(0, 94%, 82%)',
    400: 'hsl(0, 91%, 71%)',
    500: 'hsl(0, 84%, 60%)',   // #ef4444
    600: 'hsl(0, 72%, 51%)',
    700: 'hsl(0, 74%, 42%)',
    800: 'hsl(0, 70%, 35%)',
    900: 'hsl(0, 63%, 31%)',
  },

  warning: {
    50: 'hsl(38, 92%, 95%)',
    100: 'hsl(38, 92%, 89%)',
    200: 'hsl(38, 92%, 78%)',
    300: 'hsl(38, 92%, 67%)',
    400: 'hsl(38, 92%, 56%)',
    500: 'hsl(38, 92%, 50%)',   // #f59e0b
    600: 'hsl(38, 92%, 45%)',
    700: 'hsl(38, 92%, 35%)',
    800: 'hsl(38, 92%, 28%)',
    900: 'hsl(38, 92%, 20%)',
  },

  info: {
    50: 'hsl(204, 100%, 97%)',
    100: 'hsl(204, 94%, 94%)',
    200: 'hsl(204, 100%, 87%)',
    300: 'hsl(204, 96%, 75%)',
    400: 'hsl(204, 93%, 62%)',
    500: 'hsl(204, 96%, 53%)',  // #3b82f6
    600: 'hsl(204, 94%, 44%)',
    700: 'hsl(204, 88%, 37%)',
    800: 'hsl(204, 80%, 32%)',
    900: 'hsl(204, 69%, 30%)',
  },
} as const;

// Semantic color mappings for easy usage
export const semanticColors = {
  // Primary brand color
  primary: colors.brand[500],
  primaryForeground: colors.neutral[900],

  // Secondary/muted colors
  secondary: colors.neutral[50],
  secondaryForeground: colors.neutral[900],

  // Background colors
  background: colors.neutral[0],
  backgroundMuted: colors.neutral[50],

  // Foreground/text colors
  foreground: colors.neutral[900],
  foregroundMuted: colors.neutral[600],

  // Border colors
  border: colors.neutral[200],
  borderMuted: colors.neutral[100],

  // State colors
  success: colors.success[500],
  error: colors.error[500],
  warning: colors.warning[500],
  info: colors.info[500],

  // Interactive states
  hover: colors.neutral[50],
  focus: colors.brand[500],
  disabled: colors.neutral[300],
} as const;

// Dark mode color overrides
export const darkColors = {
  background: colors.neutral[900],
  backgroundMuted: colors.neutral[800],
  foreground: colors.neutral[0],
  foregroundMuted: colors.neutral[400],
  border: colors.neutral[700],
  borderMuted: colors.neutral[800],
  hover: colors.neutral[800],
  secondary: colors.neutral[800],
  secondaryForeground: colors.neutral[0],
} as const;

export type ColorToken = keyof typeof colors;
export type SemanticColorToken = keyof typeof semanticColors;