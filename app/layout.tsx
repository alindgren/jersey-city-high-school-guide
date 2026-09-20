import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import './globals.css';

const siteDescription =
  'A source-linked guide to Jersey City public, charter, county technical, and Catholic high school options for families applying for fall 2027.';
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  'https://jersey-city-high-school-guide.alexlindgren.workers.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Jersey City High School Guide',
    template: '%s · Jersey City High School Guide',
  },
  description: siteDescription,
  openGraph: {
    title: 'Jersey City High School Guide',
    description: 'Eleven school profiles. One clearer decision.',
    images: [{ url: '/og-eleven.png', width: 1200, height: 630, alt: 'Jersey City High School Guide' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jersey City High School Guide',
    description: 'Eleven school profiles. One clearer decision.',
    images: ['/og-eleven.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
