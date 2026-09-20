import type { Metadata } from 'next';
import { FullPageLink as Link } from '@/components/full-page-link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { openHouses, schoolsWithoutPublishedOpenHouse, sources, VERIFIED_DATE } from '@/lib/content';

export const metadata: Metadata = {
  title: 'High school open houses',
  description: 'Confirmed fall 2026 open houses for Jersey City high school families applying for fall 2027, with links to each official source.',
  openGraph: { images: [] },
  twitter: { images: [] },
};

export default function OpenHousesPage() {
  return (
    <main className="page-main">
      <section className="page-hero timeline-hero">
        <p className="kicker">Fall 2026 visits</p>
        <h1>High school open houses.</h1>
        <p>Every open house below is confirmed against the school or county’s own page. Dates and times change—use the linked official source and confirm before you travel.</p>
        <span className="verified-line"><CheckCircle2 /> Last verified {VERIFIED_DATE}</span>
        <div className="legend" aria-label="Status legend">
          <span className="status status-confirmed">Confirmed</span><span>Published date and time</span>
          <span className="status status-expected">Expected</span><span>Planning estimate, not a published date</span>
        </div>
      </section>

      <section className="timeline-list" aria-label="Open houses">
        {openHouses.map((openHouse, index) => {
          const source = sources.find((entry) => entry.id === openHouse.sourceId);
          return (
            <article className="timeline-row" key={openHouse.school}>
              <div className="timeline-index">{String(index + 1).padStart(2, '0')}</div>
              <div className="timeline-date">
                <p>{openHouse.date}</p>
                <span className="open-house-time">{openHouse.time}</span>
                <span className={`status status-${openHouse.status.toLowerCase()}`}>{openHouse.status}</span>
              </div>
              <div className="timeline-body">
                <div className="school-tags"><span>{openHouse.location}</span></div>
                <h2>{openHouse.school}</h2>
                <p>{openHouse.note}</p>
                <div className="open-house-links">
                  {openHouse.slug && <Link href={`/schools/${openHouse.slug}`}>School profile <ArrowUpRight /></Link>}
                  {source && <a href={source.url} target="_blank" rel="noreferrer">Official source <ArrowUpRight /></a>}
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="pending-section">
        <p className="kicker">Still to come</p>
        <h2>Schools without a published open house yet.</h2>
        <p>These schools in the guide have not published a fall open house we could confirm. Some hold information sessions or tours by request—check the school profile and the timeline, and ask admissions directly.</p>
        <div className="pending-chips">
          {schoolsWithoutPublishedOpenHouse.map((school) => <span key={school}>{school}</span>)}
        </div>
      </section>

      <section className="callout-panel">
        <div><p className="kicker">Before you go</p><h2>Confirm every visit against the official page.</h2></div>
        <div><p>A visit is the best way to test fit—commute, culture, workload, and cost. Bring the class-of-2031 questions from each school profile and ask what is still unconfirmed.</p><Link className="primary-action" href="/timeline">See the full timeline</Link></div>
      </section>
    </main>
  );
}
