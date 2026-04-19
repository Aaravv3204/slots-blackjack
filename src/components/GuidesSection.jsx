import { IconBook, IconChart, IconArrow } from './Icons'

export default function GuidesSection() {
  return (
    <section id="learn">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">THE EDGE // STUDY DECK</span>
          <h2>Play smarter, not harder.</h2>
          <p>Honest guides, no bro-science. The math behind every hand, spin, and decision.</p>
        </div>
        <div className="learn-grid">
          <a href="#cheatsheet" className="learn-card">
            <div>
              <span className="learn-badge"><IconBook size={12}/> 01 · STRATEGY</span>
              <h3>The only blackjack chart you need.</h3>
              <p>Basic strategy, soft totals, pair splitting, and when to surrender — in one interactive grid.</p>
            </div>
            <div className="learn-foot">
              <span>14 MIN · UPDATED APR 2026</span>
              <span className="arrow"><IconArrow/></span>
            </div>
          </a>
          <a href="#slots" className="learn-card">
            <div>
              <span className="learn-badge"><IconChart size={12}/> 02 · DATA</span>
              <h3>Slot RTP explained, with real numbers.</h3>
              <p>Why 96% RTP isn't what you think. Volatility tiers, hit frequency, and the 10 hottest games right now.</p>
            </div>
            <div className="learn-foot">
              <span>9 MIN · UPDATED APR 2026</span>
              <span className="arrow"><IconArrow/></span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
