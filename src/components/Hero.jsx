import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import { IconCrown, IconDice } from './Icons'

const ROOBET_URL = 'https://roobet.com/?ref=oeg'

const CARDS = [
  { rank: 'A',  suit: '♠', red: false },
  { rank: 'K',  suit: '♥', red: true  },
  { rank: 'Q',  suit: '♦', red: true  },
  { rank: 'J',  suit: '♣', red: false },
  { rank: '10', suit: '♠', red: false },
]

/* all cards start in a tight scrambled pile */
const PILE = [
  { x:  12, y:  16, r:  26 },
  { x: -14, y:  -8, r: -22 },
  { x:   8, y: -18, r:  40 },
  { x: -20, y:  10, r: -32 },
  { x:   4, y:   4, r:  12 },
]

/* final fanned hand — spread fits neatly inside the column */
const FAN = [
  { x: -175, y: 52, r: -30 },
  { x:  -88, y: 20, r: -15 },
  { x:    0, y:  0, r:   0 },
  { x:   88, y: 20, r:  15 },
  { x:  175, y: 52, r:  30 },
]

/* each card drives its own x/y/rotate directly from scroll */
function AnimatedCard({ card, idx, fanProgress }) {
  const x      = useTransform(fanProgress, [0, 1], [PILE[idx].x, FAN[idx].x])
  const y      = useTransform(fanProgress, [0, 1], [PILE[idx].y, FAN[idx].y])
  const rotate = useTransform(fanProgress, [0, 1], [PILE[idx].r, FAN[idx].r])

  return (
    <motion.div
      className={`rcard${card.red ? ' red' : ''}`}
      style={{ zIndex: idx + 1, x, y, rotate }}
    >
      <div className="rcard-tl">
        <span className="rcard-rank">{card.rank}</span>
        <span className="rcard-suit">{card.suit}</span>
      </div>
      <span className="rcard-mid">{card.suit}</span>
      <div className="rcard-br">
        <span className="rcard-rank">{card.rank}</span>
        <span className="rcard-suit">{card.suit}</span>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  /* fan completes by 28% of hero scroll — well before stats row is visible */
  const fanProgress = useTransform(scrollYProgress, [0, 0.28], [0, 1], { clamp: true })
  const rotateX     = useTransform(scrollYProgress, [0, 0.35], [22, 0])
  const scaleAnim   = useTransform(scrollYProgress, [0, 0.35], [0.84, 1.06])

  return (
    <section className="hero" id="home" ref={sectionRef}>
      <div className="shell">
        <div className="hero-grid">

          <div className="hero-copy">
            <div className="hero-pill">
              <span className="pill-tag">Live</span>
              <span>blackjackandslots.com · Updated daily</span>
            </div>
            <h1>
              Master <span className="neon" data-text="Blackjack.">Blackjack.</span><br/>
              Hunt the best <span className="neon" data-text="Slots.">Slots.</span>
            </h1>
            <p className="hero-sub">
              A free interactive <strong>blackjack cheat sheet</strong>, the <strong>10 hottest slots</strong> right now,
              and honest RTP data — play smart, play on Roobet.
            </p>
            <div className="hero-ctas">
              <a href="#cheatsheet" className="btn btn-primary btn-lg">
                <IconCrown size={16}/> Open cheat sheet
              </a>
              <a href={ROOBET_URL} target="_blank" rel="noopener noreferrer sponsored" className="btn btn-secondary btn-lg">
                <IconDice size={16}/> Play on Roobet
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat"><div className="num">280+</div><div className="lbl">Hands Charted</div></div>
              <div className="hero-stat"><div className="num">10</div><div className="lbl">Hot Slots</div></div>
              <div className="hero-stat"><div className="num">97.8%</div><div className="lbl">Top RTP</div></div>
            </div>
          </div>

          {/* right column — cards fill this space */}
          <div className="hero-visual">
            <div className="glow-ring"/>
            {/* perspective wrapper — only the cards tilt/scale on scroll */}
            <motion.div
              className="rcard-perspective"
              style={{ rotateX, scale: scaleAnim }}
            >
              <div className="rcard-scene">
                {CARDS.map((card, i) => (
                  <AnimatedCard
                    key={card.rank + card.suit}
                    card={card}
                    idx={i}
                    fanProgress={fanProgress}
                  />
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
