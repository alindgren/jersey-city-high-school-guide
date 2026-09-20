import { FullPageLink as Link } from '@/components/full-page-link';
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
        <Link href="/open-houses">Open houses</Link>
        <Link href="/timeline">Admissions timeline</Link>
        <Link href="/sources">Sources</Link>
      </div>
      <p className="footer-date">Admissions facts last verified {VERIFIED_DATE}. Always confirm deadlines with the school before applying.</p>
      <p className="ai-disclosure"><strong>AI disclosure:</strong> This site was researched, written, and built with assistance from AI. Information was checked against the linked primary sources, but errors are possible.</p>
    </footer>
  );
}
