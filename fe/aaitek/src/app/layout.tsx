import './styles/globals.css';
import './styles/animations.css';
import { Navbar } from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import GoogleAnalytics from './components/analytics/GoogleAnalytics';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';
import { Suspense } from 'react';
import Loading from '@/components/ui/Loading';

export const metadata = {
  title: {
    default: "Aaitek Technology Specialists - Innovating Solutions for Tomorrow",
    template: "%s | Aaitek Technology Specialists"
  },
  description: "Aaitek Technology Specialists - 20+ years of experience in digital transformation, headless CMS solutions, and innovative technology consulting. Experts in Contentful, Umbraco, Contentstack, Kentico, Strapi, and Sitecore XM Cloud.",
  keywords: "technology specialists, digital transformation, headless cms, contentful, umbraco, contentstack, kentico, strapi, sitecore, web development, consulting",
  authors: [{ name: "Aaitek Technology Specialists" }],
  creator: "Aaitek Technology Specialists",
  publisher: "Aaitek Technology Specialists",
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
    icon: "/img/favicon.png",
    shortcut: "/img/favicon.png",
    apple: "/img/favicon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aaitek.com",
    siteName: "Aaitek Technology Specialists",
    title: "Aaitek Technology Specialists - Innovating Solutions for Tomorrow",
    description: "20+ years of experience in digital transformation, headless CMS solutions, and innovative technology consulting.",
    images: [
      {
        url: "/img/aaitek_cover.png",
        width: 1200,
        height: 630,
        alt: "Aaitek Technology Specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@aaitek",
    creator: "@aaitek",
    title: "Aaitek Technology Specialists - Innovating Solutions for Tomorrow",
    description: "20+ years of experience in digital transformation and headless CMS solutions.",
    images: ["/img/aaitek_cover.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GoogleAnalytics />
      </head>
      <body className="bg-white text-gray-900 font-sans antialiased">
        <ErrorBoundary>
          <div id="root" className="min-h-screen flex flex-col">
            <Suspense fallback={<Loading text="Loading navigation..." />}>
              <Navbar />
            </Suspense>

            <main className="flex-1">
              <Suspense fallback={<Loading size="lg" text="Loading page..." />}>
                {children}
              </Suspense>
            </main>

            <Suspense fallback={<Loading text="Loading footer..." />}>
              <Footer />
            </Suspense>
          </div>
        </ErrorBoundary>
      </body>
    </html>
  );
}
