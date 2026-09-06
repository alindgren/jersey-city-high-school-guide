import type { Metadata } from 'next';
import { FullPageLink as Link } from '@/components/full-page-link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  CircleAlert,
  CircleCheckBig,
  MapPin,
} from 'lucide-react';
import { getSchool, getSources, schools, VERIFIED_DATE } from '@/lib/content';

export function generateStaticParams() {
  return schools.map((school) => ({ slug: school.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const school = getSchool(slug);
  if (!school) return {};
  return {
    title: school.shortName,
    description: school.summary,
    openGraph: { title: school.shortName, description: school.summary, images: [] },
    twitter: { title: school.shortName, description: school.summary, images: [] },
  };
}

export default async function SchoolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const school = getSchool(slug);
  if (!school) notFound();
  const schoolSources = getSources(school.sourceIds);
  const currentIndex = schools.findIndex((entry) => entry.slug === school.slug);
  const nextSchool = schools[(currentIndex + 1) % schools.length];

  return (
    <main className={`page-main school-page accent-${school.accent}`}>
      <section className="school-hero">
        <Link className="back-link" href="/compare"><ArrowLeft /> All schools</Link>
        <div className="school-hero-grid">
          <div>
            <p className="kicker">{school.type}</p>
            <h1>{school.name}</h1>
            <p className="school-summary">{school.summary}</p>
            <span className="verified-line"><CheckCircle2 /> Last verified {VERIFIED_DATE}</span>
          </div>
          <aside className="school-fact-card">
            <p><MapPin /> {school.location}</p>
            <dl>
              <div><dt>System</dt><dd>{school.system}</dd></div>
              <div><dt>Cost</dt><dd>{school.cost}</dd></div>
              <div><dt>Test</dt><dd>{school.test}</dd></div>
              <div><dt>Eligibility</dt><dd>{school.eligibility}</dd></div>
            </dl>
          </aside>
        </div>
        <div className="stat-row">
          {school.facts.map((fact) => <div key={fact.label}><span>{fact.label}</span><strong>{fact.value}</strong></div>)}
        </div>
      </section>

      <section className="admissions-panel">
        <div className="status-heading"><span>2027–28 admissions status</span><CircleAlert /></div>
        <p>{school.admissionsStatus}</p>
        <Link href="/timeline">See the complete timeline <ArrowRight /></Link>
      </section>

      <section className="profile-grid">
        <div className="profile-main">
          <article>
            <p className="kicker">How admission works</p>
            <h2>What families should know</h2>
            <ul className="detail-list">{school.admissions.map((item) => <li key={item}><CircleCheckBig /> <span>{item}</span></li>)}</ul>
          </article>
          <article>
            <p className="kicker">Academic experience</p>
            <h2>What shapes the school day</h2>
            <ul className="detail-list">{school.academics.map((item) => <li key={item}><CircleCheckBig /> <span>{item}</span></li>)}</ul>
          </article>
          <article>
            <p className="kicker">Distinctive programs</p>
            <h2>What stands out</h2>
            <div className="program-grid">{school.programs.map((program) => <span key={program}>{program}</span>)}</div>
          </article>
        </div>
        <aside className="profile-aside">
          <div className="fit-card good"><span>Strong fit when…</span><p>{school.bestFor}</p></div>
          <div className="fit-card tradeoff"><span>Think carefully about…</span><p>{school.tradeoff}</p></div>
          <div className="visit-card">
            <p className="kicker">Ask on a visit</p>
            <ol>{school.questions.map((question, index) => <li key={question}><span>0{index + 1}</span>{question}</li>)}</ol>
          </div>
        </aside>
      </section>

      <section className="profile-sources">
        <div><p className="kicker">Source links</p><h2>Verify before you apply.</h2></div>
        <div>
          {schoolSources.map((source) => (
            <a href={source.url} target="_blank" rel="noreferrer" key={source.id}><span>{source.publisher}</span>{source.title}<ArrowUpRight /></a>
          ))}
        </div>
      </section>

      <section className="next-school">
        <span>Next profile</span>
        <Link href={`/schools/${nextSchool.slug}`}>{nextSchool.shortName} <ArrowRight /></Link>
      </section>
    </main>
  );
}
