import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://tech-blog-devrgd.vercel.app'),
  title: 'TechBlog | Latest Insights in Technology',
  description: 'A fast, SEO-optimized tech blog featuring the latest in software development and hardware.',
  keywords: ['Tech', 'Blog', 'Next.js', 'TypeScript', 'Frontend'],
  openGraph: {
    title: 'TechBlog | Latest Insights in Technology',
    description: 'Insights and tutorials on modern technology.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'TechBlog',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TechBlog Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechBlog',
    description: 'Insights and tutorials on modern technology.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
