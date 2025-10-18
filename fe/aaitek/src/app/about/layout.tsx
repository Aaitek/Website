import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Aaitek Technology Specialists',
  description: 'Learn about Aaitek Technology Specialists - 20+ years of experience in digital transformation, headless CMS solutions, and innovative technology consulting. Meet our team and discover our mission.',
  keywords: 'about aaitek, technology specialists, digital transformation, headless cms, team, company history, mission, vision, values',
  openGraph: {
    title: 'About Us - Aaitek Technology Specialists',
    description: 'Learn about Aaitek Technology Specialists - 20+ years of experience in digital transformation, headless CMS solutions, and innovative technology consulting.',
    type: 'website',
    images: [
      {
        url: '/img/aaitek_cover.png',
        width: 1200,
        height: 630,
        alt: 'Aaitek Technology Specialists - About Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Aaitek Technology Specialists',
    description: 'Learn about Aaitek Technology Specialists - 20+ years of experience in digital transformation and headless CMS solutions.',
    images: ['/img/aaitek_cover.png'],
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}