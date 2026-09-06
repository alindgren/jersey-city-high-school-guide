import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import './globals.css';

const siteDescription =
  'A source-linked guide to selective high school options for Jersey City families applying for fall 2027.';

export const metadata: Metadata = {
  metadataBase: new URL('https://jersey-city-high-school-guide.jocund-wolf-4960.chatgpt.site'),
  title: {
    default: 'Jersey City High School Guide',
    template: '%s · Jersey City High School Guide',
  },
  description: siteDescription,
  openGraph: {
    title: 'Jersey City High School Guide',
    description: 'Five schools. One clearer decision.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Jersey City High School Guide' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jersey City High School Guide',
    description: 'Five schools. One clearer decision.',
    images: ['/og.png'],
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
