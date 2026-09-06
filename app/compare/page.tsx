import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { schools, VERIFIED_DATE } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Compare schools',
  description: 'Compare five Jersey City and Hudson County high school options by admissions, focus, cost, and student fit.',
  openGraph: { images: [] },
  twitter: { images: [] },
};

export default function ComparePage() {
  return (
    <main className="page-main">
      <section className="page-hero">
        <p className="kicker">School comparison</p>
        <h1>Compare the experience, not just the name.</h1>
        <p>Every option here can be excellent for the right student. The useful question is what each school asks a student to commit to—and what it gives back.</p>
        <span className="verified-line"><CheckCircle2 /> Last verified {VERIFIED_DATE}</span>
      </section>

      <section className="table-section">
        <div className="comparison-scroll">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>School</th>
                <th>Model</th>
                <th>Who can apply</th>
                <th>Test</th>
                <th>Cost</th>
                <th>Best reason to choose it</th>
                <th>Watch-out</th>
              </tr>
            </thead>
            <tbody>
              {schools.map((school) => (
                <tr key={school.slug}>
                  <th><Link href={`/schools/${school.slug}`}>{school.shortName}<ArrowRight /></Link></th>
                  <td>{school.type}</td>
                  <td>{school.eligibility}</td>
                  <td>{school.test}</td>
                  <td>{school.cost}</td>
                  <td>{school.bestFor}</td>
                  <td>{school.tradeoff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="table-note">“No tuition” does not mean zero family cost; transportation, meals, supplies, activities, testing, and program materials may still matter.</p>
      </section>

      <section className="matrix-section">
        <div className="section-heading compact">
          <div><p className="kicker">A two-axis view</p><h2>Broad or specialized? Larger or smaller?</h2></div>
          <p>This is a thinking tool, not an official classification.</p>
        </div>
        <div className="fit-matrix">
          <div className="axis-label axis-top">More specialized →</div>
          <div className="axis-label axis-side">Smaller setting →</div>
          <Link className="matrix-card mcnair" href="/schools/mcnair-academic"><strong>McNair</strong><span>Broad · larger</span></Link>
          <Link className="matrix-card infinity" href="/schools/infinity-institute"><strong>Infinity</strong><span>Broad · smaller</span></Link>
          <Link className="matrix-card hightech" href="/schools/high-tech-high"><strong>High Tech</strong><span>Specialized · larger</span></Link>
          <Link className="matrix-card county" href="/schools/county-prep"><strong>County Prep</strong><span>Career-focused · larger</span></Link>
          <Link className="matrix-card sda" href="/schools/saint-dominic-academy"><strong>Saint Dominic</strong><span>Small · selective programs</span></Link>
        </div>
      </section>

      <section className="questions-band">
        <div><p className="kicker">Before deciding</p><h2>Four questions worth answering together.</h2></div>
        <ol>
          <li><span>01</span>Does the student want broad exploration or a four-year specialty?</li>
          <li><span>02</span>Do they recharge in a small community or want a wider activity ecosystem?</li>
          <li><span>03</span>What would the real morning and afternoon commute feel like?</li>
          <li><span>04</span>For private school, what is the net cost after aid—and is the mission a fit?</li>
        </ol>
      </section>
    </main>
  );
}
