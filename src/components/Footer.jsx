const ROOBET_URL = 'https://roobet.com/?ref=oeg'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="brand">
              <span className="brand-mark">B</span>
              blackjack<em>&amp;</em>slots
            </a>
            <p>blackjackandslots.com — free tools and honest picks for blackjack players and slot hunters. Independent affiliate; not a gambling operator.</p>
          </div>
          <div className="footer-col">
            <h5>Tools</h5>
            <ul>
              <li><a href="#cheatsheet">Cheat sheet</a></li>
              <li><a href="#slots">Popular slots</a></li>
              <li><a href="#learn">Strategy guides</a></li>
              <li><a href={ROOBET_URL} target="_blank" rel="noopener noreferrer sponsored">Play on Roobet</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Learn</h5>
            <ul>
              <li><a href="#cheatsheet">Basic strategy</a></li>
              <li><a href="#cheatsheet">Soft totals</a></li>
              <li><a href="#cheatsheet">Pair splitting</a></li>
              <li><a href="#slots">Slot RTP</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Legal</h5>
            <ul>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Affiliate disclosure</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="disclaimer">
          <strong>Play responsibly. 18+ (21+ in some regions).</strong> Gambling can be addictive.
          blackjackandslots.com is an independent affiliate — we are not a casino operator. Outbound links to Roobet
          are sponsored; we earn a commission when players sign up through our links. All bonuses are subject to Roobet's
          terms. If you or someone you know needs help, visit{' '}
          <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--neon-200)' }}>begambleaware.org</a>{' '}
          or call 1-800-GAMBLER.
        </div>
        <div className="footer-base">
          <span>© 2026 BLACKJACKANDSLOTS.COM · ALL RIGHTS RESERVED</span>
          <span>BUILT FOR PLAYERS, BY PLAYERS</span>
        </div>
      </div>
    </footer>
  )
}
