import type { Metadata } from 'next';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { sources, VERIFIED_DATE } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Sources and methodology',
  description: 'Official admissions and school sources behind the Jersey City High School Guide.',
  openGraph: { images: [] },
  twitter: { images: [] },
};

export default function SourcesPage() {
  return (
    <main className="page-main">
      <section className="page-hero">
        <p className="kicker">Trust, with receipts</p>
        <h1>Sources and methodology.</h1>
        <p>We prioritize school, district, College Board, and New Jersey Department of Education sources. Every admissions claim is dated so families can see where uncertainty remains.</p>
        <span className="verified-line"><CheckCircle2 /> Full source pass completed {VERIFIED_DATE}</span>
      </section>

      <section className="method-cards">
        <article><span>01</span><h2>Official first</h2><p>Dates, eligibility, selection factors, tuition, and programs come from the organization responsible for them whenever possible.</p></article>
        <article><span>02</span><h2>Cycles stay separate</h2><p>We do not present a prior application date as a current deadline. Older dates are labeled as planning references.</p></article>
        <article><span>03</span><h2>Fit is interpretation</h2><p>“Best for” and trade-off notes synthesize program structure. Families should test them through visits and current-student conversations.</p></article>
      </section>

      <section className="sources-section">
        <div className="section-heading compact">
          <div><p className="kicker">Primary source library</p><h2>Check the originals.</h2></div>
          <p>External links open the current publisher page.</p>
        </div>
        <div className="source-list">
          {sources.map((source) => (
            <a href={source.url} target="_blank" rel="noreferrer" key={source.id}>
              <div><span>{source.publisher}</span><h3>{source.title}</h3><p>{source.note}</p></div>
              <div className="source-meta"><span>Reviewed {source.reviewed}</span><ArrowUpRight /></div>
            </a>
          ))}
        </div>
      </section>

      <section className="disclaimer">
        <h2>Important</h2>
        <div>
          <p>This is an independent family guide, not an official admissions publication. Schools can change dates, criteria, offerings, tuition, or policies after verification. Always use the linked official source and contact the school before making a time-sensitive decision.</p>
          <p className="ai-note"><strong>AI disclosure:</strong> This site was researched, written, and built with assistance from AI. Its information was checked against the linked primary sources, but errors are possible.</p>
        </div>
      </section>
    </main>
  );
}
