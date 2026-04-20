import { useState, useEffect } from 'react'
import { IconBolt } from './Icons'

const ROOBET_URL = 'https://roobet.com/?ref=oeg'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="shell">
        <div className="nav">
          <a href="#home" className="brand" onClick={close}>
            <span className="brand-mark">B</span>
            slots <em>and</em> blackjack
          </a>

          <ul className="nav-links">
            <li><a href="#cheatsheet">Cheat Sheet</a></li>
            <li><a href="#slots" className="live">Popular Slots</a></li>
            <li><a href="#creators">Creators</a></li>
            <li><a href="#help">Help</a></li>
          </ul>

          <div className="nav-right">
            <a href={ROOBET_URL} target="_blank" rel="noopener noreferrer sponsored" className="btn btn-primary btn-sm nav-cta">
              <IconBolt size={14}/> Play on Roobet
            </a>
            <button
              className={`nav-hamburger${menuOpen ? ' is-open' : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
            >
              <span/><span/><span/>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <ul>
          <li><a href="#cheatsheet" onClick={close}>Cheat Sheet</a></li>
          <li><a href="#slots"      onClick={close}>Popular Slots</a></li>
          <li><a href="#creators"   onClick={close}>Creators</a></li>
          <li><a href="#help"       onClick={close}>Help</a></li>
        </ul>
        <a
          href={ROOBET_URL}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="btn btn-primary"
          style={{ width: '100%', justifyContent: 'center' }}
          onClick={close}
        >
          <IconBolt size={14}/> Play on Roobet
        </a>
      </div>
    </header>
  )
}
