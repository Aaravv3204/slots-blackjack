import { IconDice, IconArrow } from './Icons'

import imgGatesOfOlympus from '../assets/slots/gates-of-olympus-1000.jpg'
import imgSweetBonanza   from '../assets/slots/sweet-bonanza.jpg'
import imgSugarRush      from '../assets/slots/sugar-rush-1000.jpg'
import imgRooBonanza     from '../assets/slots/roo-bonanza.jpg'
import imgWanted         from '../assets/slots/wanted-dead-or-a-wild.jpg'
import imgLeBandit       from '../assets/slots/le-bandit.jpg'
import imgOutsourced     from '../assets/slots/outsourced.jpg'
import imgDuckHunters    from '../assets/slots/duck-hunters-16k.jpg'
import imgMoneyTrain     from '../assets/slots/money-train-4-new.jpg'
import imgDensho         from '../assets/slots/densho.jpg'

const ROOBET_URL = 'https://roobet.com/?ref=oeg'

const SLOTS = [
  { name: 'Gates of Olympus 1000', studio: 'Pragmatic Play',  rtp: 96.50, vol: 'High',      tag: '#1 THIS WEEK',  hot: true, color: '#55e6ff', img: imgGatesOfOlympus },
  { name: 'Sweet Bonanza',         studio: 'Pragmatic Play',  rtp: 96.51, vol: 'High',      tag: 'HOT',           hot: true, color: '#ff6bd6', img: imgSweetBonanza   },
  { name: 'Sugar Rush 1000',       studio: 'Pragmatic Play',  rtp: 97.08, vol: 'High',      tag: 'HOT',                      color: '#ffd36b', img: imgSugarRush      },
  { name: 'Roo Bonanza',           studio: 'Pragmatic Play',  rtp: 96.53, vol: 'High',      tag: 'ROOBET EXCLUSIVE',          color: '#ff6bd6', img: imgRooBonanza,    imgContain: true },
  { name: 'Wanted Dead or a Wild', studio: 'Hacksaw Gaming',  rtp: 96.38, vol: 'Very High', tag: 'STREAMER PICK',             color: '#ff4b4b', img: imgWanted         },
  { name: 'Le Bandit',             studio: 'Hacksaw Gaming',  rtp: 96.22, vol: 'Very High', tag: 'MAX 31,000x',               color: '#a8ff4b', img: imgLeBandit,      imgContain: true },
  { name: 'Outsourced',            studio: 'NoLimit City',    rtp: 96.08, vol: 'Very High', tag: 'TRENDING',                  color: '#ffa54b', img: imgOutsourced     },
  { name: 'Duck Hunters 16K',      studio: 'NoLimit City',    rtp: 96.10, vol: 'Very High', tag: 'NEW',                       color: '#a8ff4b', img: imgDuckHunters    },
  { name: 'Money Train 4',         studio: 'Relax Gaming',    rtp: 96.30, vol: 'High',      tag: 'CLASSIC',                   color: '#ffd36b', img: imgMoneyTrain     },
  { name: 'Densho',                studio: 'Hacksaw Gaming',  rtp: 96.20, vol: 'Very High', tag: 'UNDERRATED',                color: '#55e6ff', img: imgDensho         },
]

function SlotCard({ slot, rank }) {
  return (
    <a
      href={ROOBET_URL}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`slot-card${slot.hot ? ' hot' : ''}`}
      style={{ '--accent': slot.color }}
    >
      <div className="slot-rank">#{String(rank).padStart(2,'0')}</div>
      <div className="slot-thumb">
        <img
          src={slot.img}
          alt={slot.name}
          className={`slot-img${slot.imgContain ? ' slot-img-contain' : ''}`}
        />
        <div className="slot-img-overlay"/>
        <div className="slot-tag">{slot.tag}</div>
      </div>
      <div className="slot-body">
        <div className="slot-title-row"><h4>{slot.name}</h4></div>
        <div className="slot-meta">
          <span>{slot.studio}</span>
          <span className="dot-sep">·</span>
          <span>{slot.vol} volatility</span>
        </div>
        <div className="slot-foot">
          <div className="slot-rtp">
            <span className="rtp-val">{slot.rtp.toFixed(2)}%</span>
            <span className="rtp-lbl">RTP</span>
          </div>
          <span className="slot-play">Play on Roobet <IconArrow size={14}/></span>
        </div>
      </div>
    </a>
  )
}

export default function PopularSlots() {
  return (
    <section id="slots">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">TRENDING NOW // APRIL 2026</span>
          <h2>The 10 hottest slots this week.</h2>
          <p>Ranked by plays, wins tracked on stream, and straight-up community love. Every game plays on Roobet.</p>
        </div>

        <div className="slots-grid">
          {SLOTS.map((s, i) => <SlotCard key={s.name} slot={s} rank={i+1}/>)}
        </div>

        <div className="slots-cta">
          <div>
            <h3>Ready to spin?</h3>
            <p>Sign up on Roobet through our link — you'll get a deposit bonus and a $20,000 Wager Leaderboard.</p>
          </div>
          <a href={ROOBET_URL} target="_blank" rel="noopener noreferrer sponsored" className="btn btn-primary btn-lg">
            <IconDice size={16}/> Play on Roobet
          </a>
        </div>
      </div>
    </section>
  )
}
