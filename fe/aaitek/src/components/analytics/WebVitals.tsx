'use client';

import { useEffect } from 'react';

// Simplified Web Vitals component
export default function WebVitals() {
  useEffect(() => {
    // Load web-vitals dynamically to avoid build issues
    const loadWebVitals = async () => {
      try {
        const { onCLS, onFCP, onFID, onLCP, onTTFB } = await import('web-vitals');

        const sendToAnalytics = (metric: any) => {
          // Send to Google Analytics if available
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', metric.name, {
              event_category: 'Web Vitals',
              event_label: metric.id,
              value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            });
          }

          // Log in development
          if (process.env.NODE_ENV === 'development') {
            console.log('Web Vitals:', metric);
          }
        };

        // Set up web vitals tracking
        onCLS(sendToAnalytics);
        onFCP(sendToAnalytics);
        onFID(sendToAnalytics);
        onLCP(sendToAnalytics);
        onTTFB(sendToAnalytics);
      } catch (error) {
        console.warn('Web Vitals not available:', error);
      }
    };

    loadWebVitals();
  }, []);

  return null;
}

// Hook for getting current web vitals
export function useWebVitals() {
  const getWebVitals = async () => {
    try {
      // Return empty object if web-vitals is not available
      return {};
    } catch (error) {
      return {};
    }
  };

  return { getWebVitals };
}