/**
 * Accessibility utilities and helpers for the Aaitek website
 * Following WCAG 2.1 AA guidelines
 */

// Keyboard navigation utilities
export const KEYBOARD_KEYS = {
  ENTER: 'Enter',
  SPACE: ' ',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_RIGHT: 'ArrowRight',
  ESCAPE: 'Escape',
  TAB: 'Tab',
  HOME: 'Home',
  END: 'End',
  PAGE_UP: 'PageUp',
  PAGE_DOWN: 'PageDown',
} as const;

// ARIA attributes helpers
export function generateAriaId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

// Focus management
export function focusElement(selector: string | HTMLElement): void {
  const element = typeof selector === 'string'
    ? document.querySelector(selector) as HTMLElement
    : selector;

  if (element) {
    element.focus();
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

// Trap focus within a container
export function trapFocus(container: HTMLElement, firstElement?: HTMLElement, lastElement?: HTMLElement): void {
  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  ) as NodeListOf<HTMLElement>;

  const firstFocusable = firstElement || focusableElements[0];
  const lastFocusable = lastElement || focusableElements[focusableElements.length - 1];

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === KEYBOARD_KEYS.TAB) {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          e.preventDefault();
        }
      }
    }
  };

  container.addEventListener('keydown', handleKeyDown);

  // Return cleanup function
  return () => {
    container.removeEventListener('keydown', handleKeyDown);
  };
}

// Announce content to screen readers
export function announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;

  document.body.appendChild(announcement);

  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

// Color contrast utilities
export function getContrastRatio(foreground: string, background: string): number {
  const getLuminance = (color: string): number => {
    const rgb = hexToRgb(color);
    if (!rgb) return 0;

    const { r, g, b } = rgb;
    const rsRGB = r / 255;
    const gsRGB = g / 255;
    const bsRGB = b / 255;

    const rLin = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4);
    const gLin = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4);
    const bLin = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4);

    return 0.2126 * rLin + 0.7152 * gLin + 0.0722 * bLin;
  };

  const l1 = getLuminance(foreground);
  const l2 = getLuminance(background);

  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

export function isContrastCompliant(foreground: string, background: string, level: 'AA' | 'AAA' = 'AA'): boolean {
  const ratio = getContrastRatio(foreground, background);
  return level === 'AA' ? ratio >= 4.5 : ratio >= 7;
}

// Reduced motion detection
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// High contrast detection
export function prefersHighContrast(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-contrast: high)').matches;
}

// Text size utilities
export function getOptimalTextSize(baseSize: number, containerWidth: number): number {
  // Responsive text scaling based on container width
  const minSize = baseSize * 0.875; // 14px if base is 16px
  const maxSize = baseSize * 1.25;  // 20px if base is 16px
  const scaleFactor = Math.min(Math.max(containerWidth / 1200, 0.875), 1.25);

  return Math.max(minSize, Math.min(maxSize, baseSize * scaleFactor));
}

// Form accessibility helpers
export function getFormErrorId(fieldId: string): string {
  return `${fieldId}-error`;
}

export function getFormHelpId(fieldId: string): string {
  return `${fieldId}-help`;
}

export function generateAriaDescribedBy(fieldId: string, hasError?: boolean, hasHelp?: boolean): string {
  const ids: string[] = [];

  if (hasError) {
    ids.push(getFormErrorId(fieldId));
  }

  if (hasHelp) {
    ids.push(getFormHelpId(fieldId));
  }

  return ids.length > 0 ? ids.join(' ') : '';
}

// Navigation helpers
export function isCurrentPage(href: string, currentPath: string): boolean {
  if (href === '/' && currentPath === '/') return true;
  if (href !== '/' && currentPath.startsWith(href)) return true;
  return false;
}

// Image accessibility
export function generateImageAlt(title: string, context?: string): string {
  if (!title) return '';

  let alt = title.trim();

  // Add context if provided
  if (context) {
    alt = `${context}: ${alt}`;
  }

  // Remove redundant words
  alt = alt
    .replace(/^(image|picture|photo|graphic)\s*(of|showing)?\s*/i, '')
    .replace(/\s+/g, ' ')
    .trim();

  return alt;
}

// Reading time estimation (accessibility feature)
export function estimateReadingTime(text: string, wordsPerMinute: number = 200): number {
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// Link accessibility
export function shouldOpenInNewTab(href: string, currentDomain: string): boolean {
  try {
    const url = new URL(href, window.location.origin);
    return url.hostname !== currentDomain;
  } catch {
    return false;
  }
}

export function generateExternalLinkProps(href: string, currentDomain: string = 'aaitek.com') {
  const isExternal = shouldOpenInNewTab(href, currentDomain);

  return isExternal ? {
    target: '_blank',
    rel: 'noopener noreferrer',
    'aria-describedby': 'external-link-description',
  } : {};
}

// Keyboard event handlers
export function createKeyboardHandler(handlers: Record<string, () => void>) {
  return (event: KeyboardEvent) => {
    const handler = handlers[event.key];
    if (handler) {
      event.preventDefault();
      handler();
    }
  };
}

// Error message utilities
export function formatErrorMessage(error: string, field?: string): string {
  if (field) {
    return `Error in ${field}: ${error}`;
  }
  return `Error: ${error}`;
}

// Live region utilities
export function createLiveRegion(id: string, level: 'polite' | 'assertive' = 'polite'): HTMLElement {
  let region = document.getElementById(id);

  if (!region) {
    region = document.createElement('div');
    region.id = id;
    region.setAttribute('aria-live', level);
    region.setAttribute('aria-atomic', 'true');
    region.className = 'sr-only';
    document.body.appendChild(region);
  }

  return region;
}

export function updateLiveRegion(id: string, message: string): void {
  const region = createLiveRegion(id);
  region.textContent = message;
}

// Accessible tooltip utilities
export function generateTooltipProps(content: string, id?: string) {
  const tooltipId = id || generateAriaId('tooltip');

  return {
    'aria-describedby': tooltipId,
    tooltipProps: {
      id: tooltipId,
      role: 'tooltip',
      'aria-hidden': 'false',
    }
  };
}

// Page title management
export function setPageTitle(title: string, siteName: string = 'Aaitek Technology Specialists'): void {
  document.title = title.includes(siteName) ? title : `${title} | ${siteName}`;

  // Update meta description if needed
  const metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
  if (metaDescription && !metaDescription.content) {
    metaDescription.content = `${title} - ${siteName}`;
  }
}