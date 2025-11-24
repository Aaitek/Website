import './styles/globals.css';
import './styles/animations.css';
import { Navbar } from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import GoogleAnalytics from './components/analytics/GoogleAnalytics';
import WebVitals from '@/components/analytics/WebVitals';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';
import SkipLink from '@/components/ui/SkipLink';
import { OrganizationSchema, WebsiteSchema } from '@/components/seo/StructuredData';
import { Suspense } from 'react';
import Loading from '@/components/ui/Loading';

export const metadata = {
  metadataBase: new URL('https://aaitek.com'),
  title: {
    default: "Aaitek Technology Specialists - Innovating Solutions for Tomorrow",
    template: "%s | Aaitek Technology Specialists"
  },
  description: "Leading technology specialists with 20+ years of experience in digital transformation, headless CMS solutions, and innovative technology consulting. Experts in Contentful, Umbraco, Contentstack, Kentico, Strapi, and Sitecore XM Cloud.",
  keywords: "technology specialists, digital transformation, headless cms, contentful, umbraco, contentstack, kentico, strapi, sitecore, web development, consulting, innovation, technology solutions",
  authors: [{ name: "Aaitek Technology Specialists" }],
  creator: "Aaitek Technology Specialists",
  publisher: "Aaitek Technology Specialists",
  applicationName: "Aaitek Technology Specialists",
  category: "Technology",
  classification: "Business",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/img/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/img/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/img/favicon.png",
    apple: [
      { url: "/img/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/img/favicon.svg", color: "#FBD506" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aaitek.com",
    siteName: "Aaitek Technology Specialists",
    title: "Aaitek Technology Specialists - Innovating Solutions for Tomorrow",
    description: "Leading technology specialists with 20+ years of experience in digital transformation, headless CMS solutions, and innovative technology consulting.",
    images: [
      {
        url: "/img/aaitek-og-default.png",
        width: 1200,
        height: 630,
        alt: "Aaitek Technology Specialists - Digital Transformation Experts",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@aaitek",
    creator: "@aaitek",
    title: "Aaitek Technology Specialists - Innovating Solutions for Tomorrow",
    description: "Leading technology specialists with 20+ years of experience in digital transformation and headless CMS solutions.",
    images: ["/img/aaitek-og-default.png"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBD506" },
    { media: "(prefers-color-scheme: dark)", color: "#1C1C1C" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Aaitek" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://balanced-heart-29014e60ac.strapiapp.com" />
        <link rel="preload" as="style" href="/css/critical.css" />
        <GoogleAnalytics />
        <OrganizationSchema />
        <WebsiteSchema />
      </head>
      <body className="bg-white text-gray-900 font-sans antialiased">
        {/* Skip Links for Accessibility */}
        <SkipLink href="#main-content">Skip to main content</SkipLink>
        <SkipLink href="#navigation">Skip to navigation</SkipLink>

        {/* Screen Reader Announcements */}
        <div id="sr-announcements" aria-live="polite" aria-atomic="true" className="sr-only" />
        <div id="sr-announcements-assertive" aria-live="assertive" aria-atomic="true" className="sr-only" />

        {/* External Link Description */}
        <div id="external-link-description" className="sr-only">
          (opens in a new tab)
        </div>

        <ErrorBoundary>
          <div id="root" className="min-h-screen flex flex-col">
            <Suspense fallback={<Loading text="Loading navigation..." />}>
              <header id="navigation" role="banner">
                <Navbar />
              </header>
            </Suspense>

            <main id="main-content" className="flex-1" role="main" tabIndex={-1}>
              <Suspense fallback={<Loading size="lg" text="Loading page..." />}>
                {children}
              </Suspense>
            </main>

            <Suspense fallback={<Loading text="Loading footer..." />}>
              <footer role="contentinfo">
                <Footer />
              </footer>
            </Suspense>
          </div>
        </ErrorBoundary>

        {/* Web Vitals Tracking */}
        <WebVitals />

        {/* Polyfills for older browsers */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (!window.IntersectionObserver) {
                var script = document.createElement('script');
                script.src = 'https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver';
                document.head.appendChild(script);
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
