import Link from 'next/link';
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  GraduationCap,
  MapPin,
  Scale,
} from 'lucide-react';
import { schools, timeline, upcomingSchools, VERIFIED_DATE } from '@/lib/content';

export default function Home() {
  return (
    <main>
      <section className="hero-shell">
        <div className="eyebrow"><CheckCircle2 /> Admissions facts checked {VERIFIED_DATE}</div>
        <div className="hero-grid">
          <div>
            <p className="kicker">For Jersey City families</p>
            <h1>Find the high school that fits the student.</h1>
            <p className="hero-copy">
              A practical, source-linked guide to selective public magnets, county
              technical schools, and a leading private option—built for families
              applying for fall 2027.
            </p>
            <div className="hero-actions">
              <Link className="primary-action" href="/compare">Compare all five <ArrowRight /></Link>
              <Link className="text-action" href="/timeline">See the 8th-grade timeline</Link>
            </div>
          </div>
          <aside className="now-card" aria-label="What to do now">
            <span className="now-label"><CalendarDays /> September priority</span>
            <h2>Get ready before applications open.</h2>
            <p>Confirm PSAT 8/9 plans with your school, attend fall open houses, and shortlist HCST majors.</p>
            <p className="pending-note">HCST’s 2027–28 dates are expected at the end of September.</p>
          </aside>
        </div>
      </section>

      <section className="visual-strip" aria-label="About this guide">
        <div className="visual-copy">
          <p className="kicker">A clearer way through</p>
          <h2>Five schools. One decision that starts with fit.</h2>
          <p>Academic breadth, small-school support, career depth, commute, culture, and cost all matter.</p>
        </div>
        <img src="/og.png" alt="Illustrated Jersey City waterfront and map for the high school guide" />
      </section>

      <section className="section-shell" id="schools">
        <div className="section-heading">
          <div>
            <p className="kicker">Five distinct choices</p>
            <h2>Start with the kind of experience your child wants.</h2>
          </div>
          <p>These schools are better compared by fit than by a single ranking.</p>
        </div>
        <div className="school-grid">
          {schools.map((school, index) => (
            <Link className="school-card" href={`/schools/${school.slug}`} key={school.slug}>
              <span className="school-number">0{index + 1}</span>
              <p>{school.type}</p>
              <h3>{school.shortName}</h3>
              <strong>{school.facts[2].value}</strong>
              <span className="card-link">View profile <ArrowRight /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="decision-section">
        <div className="decision-intro">
          <p className="kicker">Decision shortcuts</p>
          <h2>Different strengths, not one ladder.</h2>
          <p>Use these as starting hypotheses, then test them through visits and conversations with current families.</p>
          <Link className="text-action" href="/compare">Open the full comparison</Link>
        </div>
        <div className="decision-list">
          <article><GraduationCap /><div><span>Broad academic depth</span><strong>Start with McNair</strong></div></article>
          <article><Scale /><div><span>Small academic community</span><strong>Look closely at Infinity</strong></div></article>
          <article><MapPin /><div><span>Deep specialty or career major</span><strong>Compare High Tech + County Prep</strong></div></article>
          <article><CircleDollarSign /><div><span>All-girls, small, private</span><strong>Visit Saint Dominic</strong></div></article>
        </div>
      </section>

      <section className="timeline-preview">
        <div className="section-heading compact">
          <div>
            <p className="kicker">Application year</p>
            <h2>What to do next.</h2>
          </div>
          <Link className="text-action" href="/timeline">View the full timeline</Link>
        </div>
        <div className="preview-steps">
          {timeline.slice(0, 4).map((item, index) => (
            <article key={item.title}>
              <span className="step-dot">{index + 1}</span>
              <p>{item.date}</p>
              <h3>{item.title}</h3>
              <span className={`status status-${item.status.toLowerCase()}`}>{item.status}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="method-section">
        <div>
          <p className="kicker">Freshness is a feature</p>
          <h2>Verified facts are dated. Unknowns stay visible.</h2>
        </div>
        <div>
          <p>Admissions pages change every year. This guide separates confirmed 2027–28 facts from prior-cycle planning references and labels every source with its review date.</p>
          <Link className="primary-action light" href="/sources">See sources and methodology <ArrowRight /></Link>
        </div>
      </section>

      <section className="coming-section">
        <p className="kicker">Built to grow</p>
        <h2>More schools are next.</h2>
        <div className="coming-grid">
          {upcomingSchools.map((school) => (
            <article key={school.name}><span>Planned profile</span><h3>{school.name}</h3><p>{school.note}</p></article>
          ))}
        </div>
      </section>
    </main>
  );
}
