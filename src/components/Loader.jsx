import { useState, useEffect } from 'react'

function MonsterMascot({ size = 220, blinking = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" style={{ display: 'block' }}>
      <defs>
        <radialGradient id="mBody" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#a584ff"/>
          <stop offset="55%" stopColor="#6a3cd8"/>
          <stop offset="100%" stopColor="#3f1a8c"/>
        </radialGradient>
        <radialGradient id="mEye" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="80%" stopColor="#f0e8ff"/>
          <stop offset="100%" stopColor="#c9b0ff"/>
        </radialGradient>
        <filter id="mGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <circle cx="100" cy="100" r="92" fill="url(#mBody)" opacity="0.35" filter="url(#mGlow)"/>
      <path d="M 30 62 Q 30 24 70 22 L 130 22 Q 170 24 170 62 L 170 140 Q 170 178 130 180 L 70 180 Q 30 178 30 140 Z" fill="url(#mBody)" stroke="#2a0f5e" strokeWidth="2"/>
      <path d="M 48 50 Q 60 36 82 34 Q 70 46 62 60 Q 52 60 48 50 Z" fill="rgba(255,255,255,0.18)"/>
      <path d="M 58 28 L 66 16 L 74 28 Z" fill="#3f1a8c"/>
      <path d="M 126 28 L 134 16 L 142 28 Z" fill="#3f1a8c"/>
      <g>
        {!blinking ? (
          <>
            <ellipse cx="100" cy="84" rx="32" ry="34" fill="url(#mEye)" stroke="#2a0f5e" strokeWidth="2.5"/>
            <circle cx="100" cy="86" r="13" fill="#2a0f5e"/>
            <circle cx="100" cy="86" r="10" fill="#0a0420"/>
            <circle cx="94" cy="80" r="4.5" fill="#ffffff"/>
            <circle cx="106" cy="92" r="1.8" fill="rgba(255,255,255,0.7)"/>
          </>
        ) : (
          <path d="M 68 86 Q 100 98 132 86" stroke="#2a0f5e" strokeWidth="4" strokeLinecap="round" fill="none"/>
        )}
      </g>
      <path d="M 70 130 Q 100 156 130 130 Q 128 128 100 128 Q 72 128 70 130 Z" fill="#1a0830" stroke="#2a0f5e" strokeWidth="2"/>
      <path d="M 80 130 L 84 142 L 88 130 Z" fill="#ffffff"/>
      <path d="M 112 130 L 116 142 L 120 130 Z" fill="#ffffff"/>
      <path d="M 92 148 Q 100 156 108 148 Q 108 144 100 144 Q 92 144 92 148 Z" fill="#ff6bd6" opacity="0.7"/>
      <circle cx="56" cy="118" r="6" fill="#ff6bd6" opacity="0.35"/>
      <circle cx="144" cy="118" r="6" fill="#ff6bd6" opacity="0.35"/>
    </svg>
  )
}

const TIPS = [
  'SHUFFLING THE DECK...',
  'POLISHING THE CHIPS...',
  'WAKING THE DEALER...',
  'CALIBRATING RTP...',
  'FEEDING THE MONSTER...',
]

export default function Loader({ onDone }) {
  const [blink, setBlink] = useState(false)
  const [progress, setProgress] = useState(0)
  const [tip, setTip] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    let t
    const blinkLoop = () => {
      setBlink(true)
      setTimeout(() => setBlink(false), 140)
      setTimeout(() => setBlink(true), 260)
      setTimeout(() => setBlink(false), 400)
      t = setTimeout(blinkLoop, 2400)
    }
    t = setTimeout(blinkLoop, 800)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(id)
          setTimeout(() => handleDone(), 400)
          return 100
        }
        return Math.min(100, p + Math.random() * 6 + 2)
      })
    }, 180)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setTip(t => (t + 1) % TIPS.length), 1600)
    return () => clearInterval(id)
  }, [])

  const handleDone = () => {
    setLeaving(true)
    setTimeout(() => onDone(), 600)
  }

  return (
    <div className={`loader-root${leaving ? ' out' : ''}`}>
      <div className="loader-stars"/>
      <div className="loader-grid"/>
      <div className="loader-content">
        <div className="loader-mascot">
          <div className="mascot-ring"/>
          <div className="mascot-ring r2"/>
          <div className="mascot-float">
            <MonsterMascot size={220} blinking={blink}/>
          </div>
          <div className="mascot-shadow"/>
        </div>
        <div className="loader-brand">
          <span className="brand-mark">B</span>
          <span>slots <em>and</em> blackjack</span>
        </div>
        <div className="loader-bar-wrap">
          <div className="loader-bar">
            <div className="loader-bar-fill" style={{ width: `${progress}%` }}>
              <div className="loader-bar-shine"/>
            </div>
          </div>
          <div className="loader-bar-meta">
            <span>{TIPS[tip]}</span>
            <span className="mono">{Math.floor(progress).toString().padStart(3, '0')}%</span>
          </div>
        </div>
        <button className="loader-skip" onClick={handleDone}>SKIP →</button>
      </div>
    </div>
  )
}
