import { useState, useEffect } from 'react'
import { IconBolt } from './Icons'

const ROOBET_URL = 'https://roobet.com/?ref=oeg'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="shell">
        <div className="nav">
          <a href="#home" className="brand">
            <span className="brand-mark">B</span>
            blackjack<em>&amp;</em>slots
          </a>
          <ul className="nav-links">
            <li><a href="#cheatsheet">Cheat Sheet</a></li>
            <li><a href="#slots" className="live">Popular Slots</a></li>
            <li><a href="#learn">Strategy</a></li>
            <li><a href="#help">Help</a></li>
          </ul>
          <div className="nav-right">
            <a href={ROOBET_URL} target="_blank" rel="noopener noreferrer sponsored" className="btn btn-primary btn-sm">
              <IconBolt size={14}/> Play on Roobet
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
