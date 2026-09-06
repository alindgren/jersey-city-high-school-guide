import type { Metadata } from 'next';
import { FullPageLink as Link } from '@/components/full-page-link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { sources, timeline, VERIFIED_DATE } from '@/lib/content';

export const metadata: Metadata = {
  title: '8th-grade admissions timeline',
  description: 'The current 2026–27 application-year timeline for Jersey City families applying to high school for fall 2027.',
  openGraph: { images: [] },
  twitter: { images: [] },
};

export default function TimelinePage() {
  return (
    <main className="page-main">
      <section className="page-hero timeline-hero">
        <p className="kicker">Entry in September 2027</p>
        <h1>Your 8th-grade admissions timeline.</h1>
        <p>What is confirmed, what is still expected, and what your family can do now. Exact school deadlines take priority over this guide.</p>
        <span className="verified-line"><CheckCircle2 /> Last verified {VERIFIED_DATE}</span>
        <div className="legend" aria-label="Status legend">
          <span className="status status-confirmed">Confirmed</span><span>Published date or rule</span>
          <span className="status status-expected">Expected</span><span>Planning estimate, not a deadline</span>
          <span className="status status-action">Action</span><span>A useful step to take now</span>
        </div>
      </section>

      <section className="timeline-list" aria-label="Admissions steps">
        {timeline.map((item, index) => {
          const source = sources.find((entry) => entry.id === item.sourceId);
          return (
            <article className="timeline-row" key={item.title}>
              <div className="timeline-index">{String(index + 1).padStart(2, '0')}</div>
              <div className="timeline-date"><p>{item.date}</p><span className={`status status-${item.status.toLowerCase()}`}>{item.status}</span></div>
              <div className="timeline-body">
                <div className="school-tags">{item.schools.map((school) => <span key={school}>{school}</span>)}</div>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
                {source && <a href={source.url} target="_blank" rel="noreferrer">Official source <ArrowUpRight /></a>}
              </div>
            </article>
          );
        })}
      </section>

      <section className="callout-panel">
        <div><p className="kicker">The safest calendar rule</p><h2>Be ready early. Submit only against published dates.</h2></div>
        <div><p>Prior cycles are useful for preparation, but they are not promises. Bookmark the official pages and confirm dates with your counselor or admissions office.</p><Link className="primary-action" href="/sources">Open source library</Link></div>
      </section>
    </main>
  );
}
