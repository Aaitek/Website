# 🎨 Aaitek Theme Configuration Guide

This guide explains how to switch between different color themes for the Aaitek website using environment variables.

## 🚀 Quick Start

### Switching Themes

1. **Yellow/Gray Theme (Default)**:
   ```bash
   # In .env.local
   NEXT_PUBLIC_THEME=yellow
   ```

2. **Blue/White Theme**:
   ```bash
   # In .env.local
   NEXT_PUBLIC_THEME=blue
   ```

3. **Restart the development server** after changing the theme:
   ```bash
   npm run dev
   ```

## 🎯 Available Themes

### 1. Yellow/Gray Theme (Default)
- **Primary**: `#FBD506` (Bright Yellow)
- **Primary Dark**: `#F4A607` (Orange Yellow)
- **Secondary**: `#FBBF24` (Medium Yellow)
- **Accent**: `#FDE047` (Light Yellow)
- **Dark**: `#1C1C1C` (Charcoal)
- **Light**: `#F4F4F4` (Light Gray)

**Best for**: Creative agencies, energetic brands, attention-grabbing designs

### 2. Blue/White Theme
- **Primary**: `#2563EB` (Professional Blue)
- **Primary Dark**: `#1D4ED8` (Dark Blue)
- **Secondary**: `#3B82F6` (Medium Blue)
- **Accent**: `#60A5FA` (Light Blue)
- **Dark**: `#0F172A` (Dark Navy)
- **Light**: `#F8FAFC` (Off White)

**Best for**: Technology companies, professional services, trustworthy brands

## 🛠️ How It Works

### Environment Configuration
The theme system uses Next.js environment variables:

```typescript
// lib/theme.ts
export const getTheme = (): ThemeType => {
  const theme = process.env.NEXT_PUBLIC_THEME as ThemeType;
  return theme === 'blue' ? 'blue' : 'yellow'; // Default to yellow
};
```

### CSS Variables
Themes are implemented using CSS custom properties:

```css
/* Default Theme (Yellow/Gray) */
:root {
  --color-primary: #FBD506;
  --color-primary-dark: #F4A607;
  /* ... other variables */
}

/* Blue Theme Override */
.theme-blue {
  --color-primary: #2563EB;
  --color-primary-dark: #1D4ED8;
  /* ... other variables */
}
```

### Theme Application
The theme class is applied to the body element:

```tsx
// layout.tsx
const themeClass = getThemeClass();
return (
  <body className={`bg-white text-gray-900 font-sans ${themeClass}`}>
    {/* ... */}
  </body>
);
```

## 📁 File Structure

```
src/
├── app/
│   ├── lib/
│   │   └── theme.ts           # Theme configuration logic
│   ├── layout.tsx             # Theme class application
│   └── styles/
│       └── animations.css     # CSS variables and theme definitions
├── .env.local                 # Environment variables
└── THEME_GUIDE.md            # This documentation
```

## 🎨 Component Usage

Components automatically inherit theme colors through CSS variables:

```tsx
// Using theme variables in components
<div style={{ background: 'var(--color-primary)' }}>
  Theme-aware element
</div>

// Or with Tailwind utilities that map to variables
<div className="bg-[#FBD506] hover:bg-[#F4A607]">
  Direct color usage (still theme-aware if using variables)
</div>
```

## 🔧 Adding New Themes

1. **Add theme to CSS variables**:
   ```css
   /* In animations.css */
   .theme-green {
     --color-primary: #10B981;
     --color-primary-dark: #059669;
     /* ... other variables */
   }
   ```

2. **Update theme configuration**:
   ```typescript
   // In lib/theme.ts
   export type ThemeType = 'yellow' | 'blue' | 'green';

   export const themes = {
     // ... existing themes
     green: {
       name: 'Green/Nature Theme',
       primary: '#10B981',
       // ... other colors
     },
   };
   ```

3. **Update environment handling**:
   ```typescript
   export const getTheme = (): ThemeType => {
     const theme = process.env.NEXT_PUBLIC_THEME as ThemeType;
     if (theme === 'blue') return 'blue';
     if (theme === 'green') return 'green';
     return 'yellow'; // Default
   };
   ```

## 🌟 Best Practices

### Do's
- ✅ Use CSS variables for theme-aware components
- ✅ Test both themes before deployment
- ✅ Ensure good contrast ratios for accessibility
- ✅ Document any custom theme additions

### Don'ts
- ❌ Don't hardcode colors that should be theme-aware
- ❌ Don't forget to restart the dev server after theme changes
- ❌ Don't mix theme systems (stick to variables)

## 🚀 Deployment

### Production Environment
Set the theme in your production environment:

```bash
# Vercel
NEXT_PUBLIC_THEME=blue

# Netlify
NEXT_PUBLIC_THEME=yellow
```

### Build Time
The theme is determined at build time, so rebuilds are required for theme changes in production.

## 🔍 Troubleshooting

### Theme Not Changing
1. Check `.env.local` file exists and has correct variable
2. Restart development server (`npm run dev`)
3. Clear browser cache
4. Verify environment variable name: `NEXT_PUBLIC_THEME`

### Colors Not Updating
1. Ensure components use CSS variables or theme-aware classes
2. Check CSS variable definitions in `animations.css`
3. Verify theme class is applied to body element

### Build Issues
1. Ensure all theme values are properly escaped in CSS
2. Check TypeScript types match available themes
3. Verify environment variables are available at build time

## 🎯 Performance

- **CSS Variables**: Minimal performance impact
- **Theme Switching**: Happens at build/runtime, no client-side switching
- **Bundle Size**: No additional JavaScript for theming

---

**Need help?** Check the implementation in `src/app/lib/theme.ts` and `src/app/styles/animations.css`