'use client';

import { useEffect, useRef } from 'react';

interface SkipLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Skip link component for keyboard navigation accessibility
 */
export default function SkipLink({ href, children, className = '' }: SkipLinkProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleFocus = (e: FocusEvent) => {
      if (e.target === linkRef.current) {
        linkRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    const link = linkRef.current;
    if (link) {
      link.addEventListener('focus', handleFocus);
      return () => link.removeEventListener('focus', handleFocus);
    }
  }, []);

  return (
    <a
      ref={linkRef}
      href={href}
      className={`fixed -top-96 left-6 z-50 bg-[#FBD506] text-black px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 focus:top-6 ${className}`}
    >
      {children}
    </a>
  );
}

/**
 * Multiple skip links component
 */
interface SkipLinksProps {
  links: Array<{
    href: string;
    label: string;
  }>;
}

export function SkipLinks({ links }: SkipLinksProps) {
  return (
    <nav aria-label="Skip links">
      {links.map(({ href, label }) => (
        <SkipLink key={href} href={href}>
          {label}
        </SkipLink>
      ))}
    </nav>
  );
}

/**
 * Screen reader only text component
 */
interface ScreenReaderOnlyProps {
  children: React.ReactNode;
  className?: string;
}

export function ScreenReaderOnly({ children, className = '' }: ScreenReaderOnlyProps) {
  return (
    <span
      className={`sr-only ${className}`}
      style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: '0',
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        border: '0',
      }}
    >
      {children}
    </span>
  );
}