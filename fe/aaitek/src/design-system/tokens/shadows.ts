/**
 * Design System - Shadow Tokens
 * Elevation-based shadow system for depth and hierarchy
 */

export const shadows = {
  // No shadow
  none: 'none',

  // Subtle shadows for cards and components
  xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',

  // Colored shadows for brand elements
  brand: {
    sm: '0 1px 3px 0 rgb(251 213 6 / 0.2), 0 1px 2px -1px rgb(251 213 6 / 0.2)',
    md: '0 4px 6px -1px rgb(251 213 6 / 0.2), 0 2px 4px -2px rgb(251 213 6 / 0.2)',
    lg: '0 10px 15px -3px rgb(251 213 6 / 0.3), 0 4px 6px -4px rgb(251 213 6 / 0.3)',
    xl: '0 20px 25px -5px rgb(251 213 6 / 0.3), 0 8px 10px -6px rgb(251 213 6 / 0.3)',
  },

  // Inner shadows
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  innerLg: 'inset 0 4px 8px 0 rgb(0 0 0 / 0.1)',

  // Focus ring shadows
  focus: {
    default: '0 0 0 3px rgb(251 213 6 / 0.3)',
    error: '0 0 0 3px rgb(239 68 68 / 0.3)',
    success: '0 0 0 3px rgb(22 163 74 / 0.3)',
  },
} as const;

// Elevation system for consistent layering
export const elevation = {
  // Surface levels
  surface: shadows.none,        // Base surface (cards, panels)
  raised: shadows.sm,           // Slightly raised elements
  overlay: shadows.md,          // Dropdowns, popovers
  modal: shadows.xl,            // Modals, dialogs
  popup: shadows['2xl'],        // Tooltips, notifications

  // Interactive states
  hover: shadows.lg,            // Hover state elevation
  active: shadows.sm,           // Active/pressed state

  // Floating elements
  fab: shadows.lg,              // Floating action buttons
  navigation: shadows.md,       // Navigation bars

  // Brand elements
  brandCard: shadows.brand.md,  // Brand-colored cards
  brandHover: shadows.brand.lg, // Brand hover states
} as const;

// Drop shadow utilities for images and graphics
export const dropShadow = {
  sm: 'drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))',
  md: 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))',
  lg: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))',
  xl: 'drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))',
  '2xl': 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))',
  none: 'drop-shadow(0 0 #0000)',
} as const;

export type ShadowToken = keyof typeof shadows;
export type ElevationToken = keyof typeof elevation;
export type DropShadowToken = keyof typeof dropShadow;