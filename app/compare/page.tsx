import type { Metadata } from 'next';
import { FullPageLink as Link } from '@/components/full-page-link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { schools, VERIFIED_DATE } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Compare schools',
  description: 'Compare 11 Jersey City public, charter, county technical, and Catholic high school options by admissions, focus, cost, and student fit.',
  openGraph: { images: [] },
  twitter: { images: [] },
};

const routeGroups = [
  { label: 'Selective academic', schools: 'McNair + Infinity', note: 'Grades, PSAT 8/9, recommendations, attendance, and activities shape admission.', href: '/schools/mcnair-academic' },
  { label: 'Small JCPS', schools: 'Innovation + Liberty', note: 'The HIP application uses a first-choice lottery for Innovation and an interview for Liberty.', href: '/schools/innovation-high' },
  { label: 'Career and academy pathways', schools: 'High Tech + County Prep + JCPS academies', note: 'Choose a specialty or CTE pathway that the student genuinely wants to study.', href: '/jcps-pathways' },
  { label: 'Public charter', schools: 'University Academy + BelovED', note: 'Tuition-free schools with separate applications and lotteries when demand exceeds seats.', href: '/schools/university-academy-charter' },
  { label: 'Catholic', schools: 'Saint Dominic + Hudson Catholic + Saint Peter’s Prep', note: 'Compare mission, gender model, total cost after aid, scale, and student culture.', href: '/schools/saint-dominic-academy' },
];

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

      <section className="matrix-section route-section">
        <div className="section-heading compact">
          <div><p className="kicker">Five application routes</p><h2>Start by choosing the right lane.</h2></div>
          <p>Families often manage several of these routes at once because the calendars and selection rules are different.</p>
        </div>
        <div className="route-grid">
          {routeGroups.map((route, index) => (
            <Link href={route.href} key={route.label}>
              <span>{String(index + 1).padStart(2, '0')} · {route.label}</span>
              <h3>{route.schools}</h3>
              <p>{route.note}</p>
              <strong>Explore this route <ArrowRight /></strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="questions-band">
        <div><p className="kicker">Before deciding</p><h2>Four questions worth answering together.</h2></div>
        <ol>
          <li><span>01</span>Does the student want broad exploration or a four-year specialty?</li>
          <li><span>02</span>Do they recharge in a small community or want a wider activity ecosystem?</li>
          <li><span>03</span>What would the real morning and afternoon commute feel like?</li>
          <li><span>04</span>For a Catholic school, what is the net cost after aid—and is its mission a fit?</li>
        </ol>
      </section>
    </main>
  );
}
