import { FullPageLink as Link } from '@/components/full-page-link';

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Jersey City High School Guide home">
        <span className="brand-mark">JC</span>
        <span>High School Guide</span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/#schools">Schools</Link>
        <Link href="/jcps-pathways">JCPS paths</Link>
        <Link href="/compare">Compare</Link>
        <Link href="/open-houses">Open houses</Link>
        <Link href="/timeline">Timeline</Link>
        <Link href="/sources">Sources</Link>
      </nav>
    </header>
  );
}
