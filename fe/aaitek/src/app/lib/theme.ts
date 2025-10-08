// Theme configuration utility
export type ThemeType = 'yellow' | 'blue';

export const getTheme = (): ThemeType => {
  const theme = process.env.NEXT_PUBLIC_THEME as ThemeType;
  return theme === 'blue' ? 'blue' : 'yellow'; // Default to yellow
};

export const getThemeClass = (): string => {
  const theme = getTheme();
  return theme === 'blue' ? 'theme-blue' : '';
};

// Theme configurations
export const themes = {
  yellow: {
    name: 'Yellow/Gray Theme',
    primary: '#FBD506',
    primaryDark: '#F4A607',
    secondary: '#FBBF24',
    accent: '#FDE047',
    dark: '#1C1C1C',
    light: '#F4F4F4',
  },
  blue: {
    name: 'Blue/White Theme',
    primary: '#2563EB',
    primaryDark: '#1D4ED8',
    secondary: '#3B82F6',
    accent: '#60A5FA',
    dark: '#0F172A',
    light: '#F8FAFC',
  },
} as const;