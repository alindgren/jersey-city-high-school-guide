import Link from 'next/link';
import { VERIFIED_DATE } from '@/lib/content';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-title">Jersey City High School Guide</p>
        <p>Independent, parent-focused, and source-linked. Not affiliated with any school or district.</p>
      </div>
      <div className="footer-links">
        <Link href="/compare">Compare schools</Link>
        <Link href="/timeline">Admissions timeline</Link>
        <Link href="/sources">Sources</Link>
      </div>
      <p className="footer-date">Admissions facts last verified {VERIFIED_DATE}. Always confirm deadlines with the school before applying.</p>
    </footer>
  );
}
