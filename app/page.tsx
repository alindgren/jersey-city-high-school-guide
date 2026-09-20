import { FullPageLink as Link } from '@/components/full-page-link';
import {
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  Church,
  GraduationCap,
  MapPin,
  Scale,
} from 'lucide-react';
import { schools, timeline, VERIFIED_DATE } from '@/lib/content';

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
              A practical, source-linked guide to Jersey City public, charter,
              county technical, and Catholic high schools—built for families
              applying for fall 2027.
            </p>
            <div className="hero-actions">
              <Link className="primary-action" href="/compare">Compare all 11 <ArrowRight /></Link>
              <Link className="text-action" href="/timeline">See the 8th-grade timeline</Link>
            </div>
          </div>
          <aside className="now-card" aria-label="What to do now">
            <span className="now-label"><CalendarDays /> September priority</span>
            <h2>Get ready before applications open.</h2>
            <p>Confirm PSAT 8/9 plans with your school, attend fall open houses, and shortlist HCST majors.</p>
            <p className="pending-note">HCST’s 2027–28 application opens October 5 and is due November 13.</p>
          </aside>
        </div>
      </section>

      <section className="visual-strip" aria-label="About this guide">
        <div className="visual-copy">
          <p className="kicker">A clearer way through</p>
          <h2>Eleven profiles. One decision that starts with fit.</h2>
          <p>Academic breadth, small-school support, career depth, commute, culture, and cost all matter.</p>
        </div>
        <img src="/og-eleven.png" alt="Illustrated Jersey City waterfront and map for the high school guide" />
      </section>

      <section className="section-shell" id="schools">
        <div className="section-heading">
          <div>
            <p className="kicker">Eleven school profiles</p>
            <h2>Start with the kind of experience your child wants.</h2>
          </div>
          <p>Compare school model, admissions route, daily experience, mission, cost, and program fit—not a single ranking.</p>
        </div>
        <div className="school-grid">
          {schools.map((school, index) => (
            <Link className="school-card" href={`/schools/${school.slug}`} key={school.slug}>
              <span className="school-number">{String(index + 1).padStart(2, '0')}</span>
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
          <article><GraduationCap /><div><span>Selective academic depth</span><strong>McNair + Infinity</strong></div></article>
          <article><Scale /><div><span>Small JCPS environment</span><strong>Innovation + Liberty</strong></div></article>
          <article><MapPin /><div><span>Career or academy pathway</span><strong>HCST + JCPS pathways</strong></div></article>
          <article><Building2 /><div><span>Public charter setting</span><strong>University Academy + BelovED</strong></div></article>
          <article><Church /><div><span>Catholic education</span><strong>Compare all three missions</strong></div></article>
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
        <p className="kicker">Defined coverage</p>
        <h2>The guide now follows three local routes.</h2>
        <div className="coming-grid">
          <article><span>Public systems</span><h3>JCPS + HCST</h3><p>Selective magnets, small schools, county CTE programs, and a dedicated guide to the district’s academies.</p></article>
          <article><span>Public charters</span><h3>Two local choices</h3><p>University Academy and BelovED add tuition-free lottery and open-enrollment paths.</p></article>
          <article><span>Private scope</span><h3>Catholic schools only</h3><p>Saint Dominic, Hudson Catholic, and Saint Peter’s Prep—each with distinct community, cost, and mission considerations.</p></article>
        </div>
        <p className="coverage-note">Hoboken schools and non-Catholic private schools are outside this edition’s scope.</p>
      </section>
    </main>
  );
}
