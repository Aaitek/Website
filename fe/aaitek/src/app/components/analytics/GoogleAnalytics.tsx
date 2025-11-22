'use client';

import Script from 'next/script';
import { memo } from 'react';

// Environment-based GA tracking ID
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-YMPRK2VMWV';

// Type definitions for Google Analytics
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag: (...args: unknown[]) => void;
  }
}

/**
 * Google Analytics component for tracking page views and events
 * Optimized for performance with proper loading strategies
 */
function GoogleAnalytics() {
  // Only load GA in production or when explicitly enabled
  const isEnabled = process.env.NODE_ENV === 'production' || process.env.NEXT_PUBLIC_GA_ENABLED === 'true';

  if (!isEnabled || !GA_TRACKING_ID) {
    return null;
  }

  return (
    <>
      {/* Load Google Analytics script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
        async
      />

      {/* Initialize Google Analytics */}
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  );
}

// Memoize component to prevent unnecessary re-renders
export default memo(GoogleAnalytics);