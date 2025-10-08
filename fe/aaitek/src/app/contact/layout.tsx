import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Aaitek Technology Specialists',
  description: 'Get in touch with Aaitek Technology Specialists. Contact our expert team for digital transformation, headless CMS implementations, and technology consulting services. Located in Sydney, Australia.',
  keywords: 'contact aaitek, get in touch, technology consulting, digital transformation, headless cms, sydney australia, phone, email, consultation',
  openGraph: {
    title: 'Contact Us - Aaitek Technology Specialists',
    description: 'Get in touch with Aaitek Technology Specialists. Contact our expert team for digital transformation and headless CMS solutions.',
    type: 'website',
    images: [
      {
        url: '/img/aaitek_cover.png',
        width: 1200,
        height: 630,
        alt: 'Contact Aaitek Technology Specialists',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Aaitek Technology Specialists',
    description: 'Get in touch with our expert team for digital transformation and technology consulting services.',
    images: ['/img/aaitek_cover.png'],
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}