import type { Metadata } from 'next';
import { FullPageLink as Link } from '@/components/full-page-link';
import { ArrowRight, ArrowUpRight, CheckCircle2, CircleAlert, MapPin } from 'lucide-react';
import { districtwidePathways, getSources, jcpsPathways, VERIFIED_DATE } from '@/lib/content';

export const metadata: Metadata = {
  title: 'JCPS academies and pathways',
  description: 'Compare the Jersey City Public Schools HIP academies, districtwide arts and media programs, Innovation, and Liberty.',
  openGraph: { images: [] },
  twitter: { images: [] },
};

export default function JcpsPathwaysPage() {
  const pageSources = getSources(['jcps-hip', 'jcps-high-schools', 'jcps-cte']);

  return (
    <main className="page-main">
      <section className="page-hero pathway-hero">
        <p className="kicker">Jersey City Public Schools</p>
        <h1>One application. Many public-school pathways.</h1>
        <p>The JCPS High School Initiative Program application connects students with four comprehensive-school academies, two small high schools, and districtwide arts and media programs.</p>
        <span className="verified-line"><CheckCircle2 /> Last verified {VERIFIED_DATE}</span>
      </section>

      <section className="hip-process" aria-label="How the HIP application works">
        <article><span>01</span><h2>Use one HIP application</h2><p>The latest process covered Dickinson, Ferris, Lincoln, Snyder, Innovation, Liberty, JC Arts, and B.E.S.T.</p></article>
        <article><span>02</span><h2>Choose three pathways</h2><p>Students selected three small learning communities, with one choice connected to their assigned home school.</p></article>
        <article><span>03</span><h2>Know the special rules</h2><p>Innovation used a first-choice lottery. Liberty required a first-choice ranking and interview. Arts pathways used auditions or portfolios.</p></article>
      </section>

      <section className="pathways-section">
        <div className="section-heading compact">
          <div><p className="kicker">Four comprehensive schools</p><h2>Choose a pathway, not just a building.</h2></div>
          <p>Programs and seats can change. Use these summaries to shortlist, then verify the class-of-2031 offerings.</p>
        </div>
        <div className="academy-grid">
          {jcpsPathways.map((pathway, index) => (
            <article key={pathway.school}>
              <div className="academy-heading">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><h2>{pathway.school}</h2><p>{pathway.academy}</p></div>
              </div>
              <p className="academy-location"><MapPin /> {pathway.location}</p>
              <p className="academy-fit">{pathway.bestFor}</p>
              <div className="pathway-tags">{pathway.programs.map((program) => <span key={program}>{program}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="districtwide-section">
        <div>
          <p className="kicker">Across schools</p>
          <h2>Districtwide programs widen the choice.</h2>
          <p>Some opportunities involve instruction outside the student’s home high school or additional selection materials.</p>
        </div>
        <div className="districtwide-list">
          {districtwidePathways.map((pathway) => <article key={pathway.name}><h3>{pathway.name}</h3><p>{pathway.detail}</p></article>)}
        </div>
      </section>

      <section className="small-school-band">
        <div><p className="kicker">Prefer a smaller setting?</p><h2>Compare Innovation and Liberty.</h2></div>
        <div className="small-school-links">
          <Link href="/schools/innovation-high"><span>Project-based STEAM + lottery</span>Innovation High <ArrowRight /></Link>
          <Link href="/schools/liberty-high"><span>Small community + interview</span>Liberty High <ArrowRight /></Link>
        </div>
      </section>

      <section className="pathway-status">
        <CircleAlert />
        <div><h2>The 2027–28 HIP calendar is not posted yet.</h2><p>The previous fair was January 31, 2026, and the application ran February 2–27. Those are preparation clues, not current deadlines.</p></div>
        <Link href="/timeline">Open the timeline <ArrowRight /></Link>
      </section>

      <section className="profile-sources pathway-sources">
        <div><p className="kicker">Official references</p><h2>Check the district pages.</h2></div>
        <div>
          {pageSources.map((source) => <a href={source.url} target="_blank" rel="noreferrer" key={source.id}><span>{source.publisher}</span>{source.title}<ArrowUpRight /></a>)}
        </div>
      </section>
    </main>
  );
}
