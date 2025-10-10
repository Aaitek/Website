/**
 * Web Vitals Monitoring
 * Performance metrics collection and reporting
 */

import { onCLS, onINP, onFCP, onLCP, onTTFB, Metric } from 'web-vitals'

// TypeScript interfaces for performance APIs
interface LayoutShiftAttribution {
  node?: Node
  currentRect: DOMRectReadOnly
  previousRect: DOMRectReadOnly
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number
  hadRecentInput: boolean
  sources?: LayoutShiftAttribution[]
}

interface LargestContentfulPaintEntry extends PerformanceEntry {
  element?: Element
  loadTime: number
  renderTime: number
  size: number
}

// Type for analytics function
type AnalyticsFunction = (metric: Metric) => void

// Default analytics function (console logging for development)
const defaultAnalytics: AnalyticsFunction = (metric) => {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vital:', {
      name: metric.name,
      value: metric.value,
      id: metric.id,
      delta: metric.delta,
      rating: getMetricRating(metric),
    })
  }

  // In production, send to your analytics service
  if (process.env.NODE_ENV === 'production') {
    // Example: Send to Google Analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as typeof window & { gtag: (...args: unknown[]) => void }).gtag
      gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true,
      })
    }

    // Example: Send to custom analytics endpoint
    fetch('/api/analytics/web-vitals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: metric.name,
        value: metric.value,
        id: metric.id,
        delta: metric.delta,
        rating: getMetricRating(metric),
        url: window.location.href,
        timestamp: Date.now(),
      }),
    }).catch((error) => {
      console.error('Failed to send web vital:', error)
    })
  }
}

// Rating function for metrics
function getMetricRating(metric: Metric): 'good' | 'needs-improvement' | 'poor' {
  const { name, value } = metric

  switch (name) {
    case 'CLS':
      return value <= 0.1 ? 'good' : value <= 0.25 ? 'needs-improvement' : 'poor'
    case 'INP':
      return value <= 200 ? 'good' : value <= 500 ? 'needs-improvement' : 'poor'
    case 'FCP':
      return value <= 1800 ? 'good' : value <= 3000 ? 'needs-improvement' : 'poor'
    case 'LCP':
      return value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor'
    case 'TTFB':
      return value <= 800 ? 'good' : value <= 1800 ? 'needs-improvement' : 'poor'
    default:
      return 'good'
  }
}

// Main function to report web vitals
export function reportWebVitals(onPerfEntry?: AnalyticsFunction) {
  const analyticsFunction = onPerfEntry || defaultAnalytics

  onCLS(analyticsFunction)
  onINP(analyticsFunction)
  onFCP(analyticsFunction)
  onLCP(analyticsFunction)
  onTTFB(analyticsFunction)
}

// Performance observer for custom metrics
export function observeCustomMetrics() {
  // Observe Long Tasks
  if ('PerformanceObserver' in window) {
    try {
      const longTaskObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) {
            console.warn('Long Task detected:', {
              duration: entry.duration,
              startTime: entry.startTime,
              name: entry.name,
            })
          }
        }
      })
      longTaskObserver.observe({ entryTypes: ['longtask'] })
    } catch {
      // Long task observer not supported
    }

    // Observe Largest Contentful Paint elements
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries() as LargestContentfulPaintEntry[]
        const lastEntry = entries[entries.length - 1]

        if (lastEntry) {
          console.log('LCP Element:', {
            element: lastEntry.element,
            loadTime: lastEntry.loadTime,
            renderTime: lastEntry.renderTime,
            size: lastEntry.size,
          })
        }
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
    } catch {
      // LCP observer not supported
    }

    // Observe Layout Shifts
    try {
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as LayoutShiftEntry[]) {
          if (!entry.hadRecentInput) {
            console.log('Layout Shift:', {
              value: entry.value,
              sources: entry.sources?.map((source: LayoutShiftAttribution) => ({
                node: source.node,
                currentRect: source.currentRect,
                previousRect: source.previousRect,
              })),
            })
          }
        }
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })
    } catch {
      // Layout shift observer not supported
    }
  }
}

// Resource timing analysis
export function analyzeResourceTiming() {
  if ('performance' in window && 'getEntriesByType' in performance) {
    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[]

    const analysis = {
      totalResources: resources.length,
      images: resources.filter(r => r.initiatorType === 'img').length,
      scripts: resources.filter(r => r.initiatorType === 'script').length,
      stylesheets: resources.filter(r => r.initiatorType === 'link').length,
      largestResource: resources.reduce((max, r) =>
        r.transferSize > (max?.transferSize || 0) ? r : max, null as PerformanceResourceTiming | null
      ),
      slowestResource: resources.reduce((max, r) =>
        r.duration > (max?.duration || 0) ? r : max, null as PerformanceResourceTiming | null
      ),
    }

    console.log('Resource Analysis:', analysis)
    return analysis
  }
}

// Bundle size analysis (for development)
export function analyzeBundleSize() {
  if (process.env.NODE_ENV === 'development') {
    const scripts = document.querySelectorAll('script[src]')
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]')

    console.log('Bundle Analysis:', {
      scripts: scripts.length,
      stylesheets: stylesheets.length,
      scriptSources: Array.from(scripts).map(s => s.getAttribute('src')),
      stylesheetSources: Array.from(stylesheets).map(s => s.getAttribute('href')),
    })
  }
}

// Initialize performance monitoring
export function initPerformanceMonitoring() {
  // Report web vitals
  reportWebVitals()

  // Observe custom metrics
  observeCustomMetrics()

  // Analyze resources after load
  window.addEventListener('load', () => {
    setTimeout(() => {
      analyzeResourceTiming()
      analyzeBundleSize()
    }, 1000)
  })
}