import { IconKick } from './Icons'
import imgOneEyedGreg from '../assets/oneeyedgreg.jpg'
import imgRuiners from '../assets/ruiners.jpg'

const ROOBET_URL = 'https://roobet.com/?ref=oeg'

const CREATORS = [
  {
    name: 'OneEyedGregg',
    handle: '@oneeyedgregg',
    img: imgOneEyedGreg,
    href: 'https://kick.com/oneeyedgregg',
    description: "High-energy slots streamer with epic bonus hunts and record-breaking sessions. Roobet's most entertaining affiliate.",
    stats: [
      { v: '5K+', l: 'Viewers' },
      { v: '200+', l: 'Hours Live' },
      { v: '#1', l: 'Slots Pick' },
    ],
  },
  {
    name: 'Ruiners',
    handle: '@ruiners',
    img: imgRuiners,
    href: 'https://kick.com/ruiners',
    description: 'Strategy-focused streams covering blackjack, slots, and live casino. Breaks down every hand with sharp commentary.',
    stats: [
      { v: '3K+', l: 'Viewers' },
      { v: '150+', l: 'Hours Live' },
      { v: 'TOP 5', l: 'BJ Player' },
    ],
  },
]

export default function CreatorsSection() {
  return (
    <section id="creators">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">AFFILIATED STREAMERS</span>
          <h2>Watch our creators.</h2>
          <p>Follow them live on Kick for strategy breakdowns, bonus hunts, and exclusive promo codes.</p>
        </div>
        <div className="creators-grid">
          {CREATORS.map(c => (
            <div key={c.name} className="creator-card">
              <div className="creator-avatar">
                <div className="inner">
                  <img
                    src={c.img}
                    alt={c.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                  />
                </div>
              </div>
              <div className="creator-body">
                <h3>{c.name}</h3>
                <div className="creator-handle">{c.handle}</div>
                <p>{c.description}</p>
                <div className="creator-actions">
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="btn btn-kick btn-sm">
                    <IconKick size={14}/> Watch on Kick
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
