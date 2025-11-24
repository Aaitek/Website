/**
 * Comprehensive error handling utilities for the Aaitek website
 * Includes network error handling, user-friendly error messages, and error reporting
 */

import React from 'react';

// Error types
export type ErrorSeverity = 'low' | 'medium' | 'high' | 'critical';
export type ErrorCategory = 'network' | 'validation' | 'permission' | 'system' | 'user' | 'unknown';

export interface AppError extends Error {
  code?: string;
  statusCode?: number;
  severity?: ErrorSeverity;
  category?: ErrorCategory;
  context?: Record<string, unknown>;
  timestamp?: Date;
  userId?: string;
  sessionId?: string;
  userAgent?: string;
  url?: string;
}

// Error factory
export function createAppError(
  message: string,
  options: {
    code?: string;
    statusCode?: number;
    severity?: ErrorSeverity;
    category?: ErrorCategory;
    context?: Record<string, unknown>;
    originalError?: Error;
  } = {}
): AppError {
  const error = new Error(message) as AppError;

  error.code = options.code;
  error.statusCode = options.statusCode;
  error.severity = options.severity || 'medium';
  error.category = options.category || 'unknown';
  error.context = options.context;
  error.timestamp = new Date();

  if (typeof window !== 'undefined') {
    error.userAgent = navigator.userAgent;
    error.url = window.location.href;
  }

  // Include original error stack if available
  if (options.originalError) {
    error.stack = options.originalError.stack;
  }

  return error;
}

// Network error handling
export class NetworkErrorHandler {
  private retryCount: Map<string, number> = new Map();
  private maxRetries: number = 3;
  private retryDelay: number = 1000;

  async handleRequest<T>(
    request: () => Promise<T>,
    options: {
      retries?: number;
      retryDelay?: number;
      timeout?: number;
      context?: Record<string, unknown>;
    } = {}
  ): Promise<T> {
    const { retries = this.maxRetries, retryDelay = this.retryDelay, timeout, context } = options;
    let lastError: Error | null = null;

    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        let requestPromise = request();

        // Add timeout if specified
        if (timeout) {
          requestPromise = Promise.race([
            requestPromise,
            this.createTimeoutPromise(timeout),
          ]);
        }

        const result = await requestPromise;

        // Reset retry count on success
        if (context?.requestKey) {
          this.retryCount.delete(context.requestKey);
        }

        return result;
      } catch (error) {
        lastError = error as Error;

        // Don't retry on certain error types
        if (this.shouldNotRetry(error as AppError)) {
          throw this.enhanceError(error as Error, { attempt, context });
        }

        // Don't retry if we've reached max attempts
        if (attempt >= retries) {
          break;
        }

        // Wait before retrying with exponential backoff
        await this.delay(retryDelay * Math.pow(2, attempt));
      }
    }

    throw this.enhanceError(lastError!, { attempt: retries + 1, context });
  }

  private shouldNotRetry(error: AppError): boolean {
    // Don't retry on client errors (4xx)
    if (error.statusCode && error.statusCode >= 400 && error.statusCode < 500) {
      return true;
    }

    // Don't retry on validation errors
    if (error.category === 'validation' || error.category === 'permission') {
      return true;
    }

    return false;
  }

  private createTimeoutPromise<T>(timeout: number): Promise<T> {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(createAppError('Request timeout', {
          code: 'TIMEOUT',
          statusCode: 408,
          severity: 'medium',
          category: 'network',
        }));
      }, timeout);
    });
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private enhanceError(error: Error, context: { attempt: number; context?: Record<string, unknown> }): AppError {
    const appError = error as AppError;

    appError.context = {
      ...appError.context,
      ...context.context,
      retryAttempt: context.attempt,
    };

    return appError;
  }
}

// Global error handler instance
export const networkErrorHandler = new NetworkErrorHandler();

// User-friendly error messages
export function getUserFriendlyErrorMessage(error: AppError): string {
  if (error.statusCode) {
    switch (error.statusCode) {
      case 400:
        return 'The request was invalid. Please check your input and try again.';
      case 401:
        return 'You need to be logged in to access this resource.';
      case 403:
        return 'You don\'t have permission to access this resource.';
      case 404:
        return 'The requested resource was not found.';
      case 408:
        return 'The request took too long to complete. Please try again.';
      case 429:
        return 'Too many requests. Please wait a moment and try again.';
      case 500:
        return 'Something went wrong on our end. We\'ve been notified and are working on it.';
      case 502:
      case 503:
      case 504:
        return 'Our service is temporarily unavailable. Please try again in a few minutes.';
    }
  }

  switch (error.category) {
    case 'network':
      return 'Network connection failed. Please check your internet connection and try again.';
    case 'validation':
      return error.message || 'Please check your input and try again.';
    case 'permission':
      return 'You don\'t have permission to perform this action.';
    default:
      return 'An unexpected error occurred. Please try again or contact support if the problem persists.';
  }
}

// Error reporting
export class ErrorReporter {
  private errorQueue: AppError[] = [];
  private reportingEndpoint = '/api/errors';
  private batchSize = 10;
  private reportInterval = 30000; // 30 seconds

  constructor() {
    if (typeof window !== 'undefined') {
      this.startBatchReporting();
      this.setupGlobalErrorHandlers();
    }
  }

  report(error: AppError): void {
    // Add error to queue
    this.errorQueue.push(error);

    // Immediate report for critical errors
    if (error.severity === 'critical') {
      this.sendErrorReport([error]);
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error reported:', error);
    }
  }

  private startBatchReporting(): void {
    setInterval(() => {
      if (this.errorQueue.length > 0) {
        const batch = this.errorQueue.splice(0, this.batchSize);
        this.sendErrorReport(batch);
      }
    }, this.reportInterval);
  }

  private async sendErrorReport(errors: AppError[]): Promise<void> {
    try {
      const payload = {
        errors: errors.map(error => ({
          message: error.message,
          stack: error.stack,
          code: error.code,
          statusCode: error.statusCode,
          severity: error.severity,
          category: error.category,
          context: error.context,
          timestamp: error.timestamp,
          url: error.url,
          userAgent: error.userAgent,
        })),
        session: {
          id: this.getSessionId(),
          timestamp: new Date().toISOString(),
        },
      };

      // Use sendBeacon for better reliability
      if (navigator.sendBeacon) {
        navigator.sendBeacon(this.reportingEndpoint, JSON.stringify(payload));
      } else {
        await fetch(this.reportingEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true,
        });
      }
    } catch (reportingError) {
      console.error('Failed to report errors:', reportingError);
    }
  }

  private setupGlobalErrorHandlers(): void {
    // Handle unhandled Promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      const error = createAppError(
        `Unhandled Promise rejection: ${event.reason}`,
        {
          code: 'UNHANDLED_PROMISE_REJECTION',
          severity: 'high',
          category: 'system',
          context: { reason: event.reason },
        }
      );
      this.report(error);
    });

    // Handle JavaScript errors
    window.addEventListener('error', (event) => {
      const error = createAppError(
        event.message,
        {
          code: 'JAVASCRIPT_ERROR',
          severity: 'high',
          category: 'system',
          context: {
            filename: event.filename,
            lineno: event.lineno,
            colno: event.colno,
          },
          originalError: event.error,
        }
      );
      this.report(error);
    });

    // Handle resource loading errors
    window.addEventListener('error', (event) => {
      if (event.target !== window) {
        const target = event.target as HTMLElement;
        const error = createAppError(
          `Resource loading error: ${target.tagName}`,
          {
            code: 'RESOURCE_LOADING_ERROR',
            severity: 'medium',
            category: 'network',
            context: {
              tagName: target.tagName,
              src: 'src' in target ? target.src : 'href' in target ? target.href : undefined,
            },
          }
        );
        this.report(error);
      }
    }, true);
  }

  private getSessionId(): string {
    let sessionId = sessionStorage.getItem('error-session-id');
    if (!sessionId) {
      sessionId = Math.random().toString(36).substring(2, 15);
      sessionStorage.setItem('error-session-id', sessionId);
    }
    return sessionId;
  }
}

// Global error reporter instance
export const errorReporter = typeof window !== 'undefined' ? new ErrorReporter() : null;

// Utility functions
export function reportError(error: Error | AppError, context?: Record<string, unknown>): void {
  const appError = error instanceof Error && !(error as AppError).severity
    ? createAppError(error.message, { originalError: error, context })
    : error as AppError;

  if (context) {
    appError.context = { ...appError.context, ...context };
  }

  errorReporter?.report(appError);
}

export function withErrorHandling<T extends (...args: unknown[]) => unknown>(
  fn: T,
  context?: Record<string, unknown>
): T {
  return ((...args: Parameters<T>) => {
    try {
      const result = fn(...args);

      // Handle promise rejections
      if (result instanceof Promise) {
        return result.catch((error) => {
          reportError(error, context);
          throw error;
        });
      }

      return result;
    } catch (error) {
      reportError(error as Error, context);
      throw error;
    }
  }) as T;
}

// React error boundary utility
export function createErrorBoundary(
  fallbackComponent: React.ComponentType<{ error: Error; reset: () => void }>,
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void
) {
  return class ErrorBoundary extends React.Component<
    { children: React.ReactNode },
    { error: Error | null }
  > {
    constructor(props: { children: React.ReactNode }) {
      super(props);
      this.state = { error: null };
    }

    static getDerivedStateFromError(error: Error) {
      return { error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
      reportError(error, { errorInfo });
      onError?.(error, errorInfo);
    }

    render() {
      if (this.state.error) {
        const FallbackComponent = fallbackComponent;
        return (
          <FallbackComponent
            error={this.state.error}
            reset={() => this.setState({ error: null })}
          />
        );
      }

      return this.props.children;
    }
  };
}