import { useState } from 'react'
import { IconPlay } from './Icons'

const ROOBET_URL = 'https://roobet.com/?ref=oeg'
const DEALER_UPS = ['2','3','4','5','6','7','8','9','10','A']

const HARD_ROWS = [
  { label: '8',  row: ['H', 'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H',  'H'  ] },
  { label: '9',  row: ['H', 'D',  'D',  'D',  'D',  'H',  'H',  'H',  'H',  'H'  ] },
  { label: '10', row: ['D', 'D',  'D',  'D',  'D',  'D',  'D',  'D',  'H',  'H'  ] },
  { label: '11', row: ['D', 'D',  'D',  'D',  'D',  'D',  'D',  'D',  'D',  'H'  ] },
  { label: '12', row: ['H', 'H',  'S',  'S',  'S',  'H',  'H',  'H',  'H',  'H'  ] },
  { label: '13', row: ['S', 'S',  'S',  'S',  'S',  'H',  'H',  'H',  'H',  'H'  ] },
  { label: '14', row: ['S', 'S',  'S',  'S',  'S',  'H',  'H',  'H',  'H',  'H'  ] },
  { label: '15', row: ['S', 'S',  'S',  'S',  'S',  'H',  'H',  'H',  'Rh', 'H'  ] },
  { label: '16', row: ['S', 'S',  'S',  'S',  'S',  'H',  'H',  'Rh', 'Rh', 'Rh' ] },
  { label: '17', row: ['S', 'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S'  ] },
]

const SOFT_ROWS = [
  { label: 'A,2', row: ['H',  'H',  'H',  'D',  'D',  'H',  'H',  'H',  'H',  'H' ] },
  { label: 'A,3', row: ['H',  'H',  'H',  'D',  'D',  'H',  'H',  'H',  'H',  'H' ] },
  { label: 'A,4', row: ['H',  'H',  'D',  'D',  'D',  'H',  'H',  'H',  'H',  'H' ] },
  { label: 'A,5', row: ['H',  'H',  'D',  'D',  'D',  'H',  'H',  'H',  'H',  'H' ] },
  { label: 'A,6', row: ['H',  'D',  'D',  'D',  'D',  'H',  'H',  'H',  'H',  'H' ] },
  { label: 'A,7', row: ['S',  'Ds', 'Ds', 'Ds', 'Ds', 'S',  'S',  'H',  'H',  'H' ] },
  { label: 'A,8', row: ['S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S' ] },
  { label: 'A,9', row: ['S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S' ] },
]

const PAIR_ROWS = [
  { label: '2,2',   row: ['Ph', 'Ph', 'P',  'P',  'P',  'P',  'H',  'H',  'H',  'H'  ] },
  { label: '3,3',   row: ['Ph', 'Ph', 'P',  'P',  'P',  'P',  'H',  'H',  'H',  'H'  ] },
  { label: '4,4',   row: ['H',  'H',  'H',  'Ph', 'Ph', 'H',  'H',  'H',  'H',  'H'  ] },
  { label: '5,5',   row: ['D',  'D',  'D',  'D',  'D',  'D',  'D',  'D',  'H',  'H'  ] },
  { label: '6,6',   row: ['Ph', 'P',  'P',  'P',  'P',  'H',  'H',  'H',  'H',  'H'  ] },
  { label: '7,7',   row: ['P',  'P',  'P',  'P',  'P',  'P',  'H',  'H',  'H',  'H'  ] },
  { label: '8,8',   row: ['P',  'P',  'P',  'P',  'P',  'P',  'P',  'P',  'P',  'P'  ] },
  { label: '9,9',   row: ['P',  'P',  'P',  'P',  'P',  'S',  'P',  'P',  'S',  'S'  ] },
  { label: '10,10', row: ['S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S',  'S'  ] },
  { label: 'A,A',   row: ['P',  'P',  'P',  'P',  'P',  'P',  'P',  'P',  'P',  'P'  ] },
]

const ACTION_META = {
  H:  { label: 'Hit',                       cls: 'act-h',  display: 'H'   },
  S:  { label: 'Stand',                     cls: 'act-s',  display: 'S'   },
  D:  { label: 'Double Down',               cls: 'act-d',  display: 'DD'  },
  Ds: { label: 'Double Down',               cls: 'act-d',  display: 'DD'  },
  P:  { label: 'Split',                     cls: 'act-p',  display: 'P'   },
  Ph: { label: 'Split if DAS, else Hit',    cls: 'act-ph', display: 'H/P' },
  Rh: { label: 'Surrender if allowed, else Hit', cls: 'act-r', display: 'H/R' },
}

const SECTIONS = [
  { title: 'HARD TOTALS',        rows: HARD_ROWS  },
  { title: 'SOFT TOTALS (ACE)',  rows: SOFT_ROWS  },
  { title: 'PAIRS',              rows: PAIR_ROWS  },
]

export default function CheatSheet() {
  const [hover, setHover] = useState(null)

  return (
    <section id="cheatsheet">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">FREE TOOL // INTERACTIVE</span>
          <h2>Blackjack cheat sheet.</h2>
          <p>Math-perfect basic strategy. 4–8 decks · dealer stands soft 17 · double after split allowed. Hover any cell to see the move.</p>
        </div>

        <div className="cheat-shell">
          <div className="cheat-toolbar">
            <span className="cheat-toolbar-label">DEALER'S CARD →</span>
            <a href={ROOBET_URL} target="_blank" rel="noopener noreferrer sponsored" className="btn btn-primary btn-sm">
              <IconPlay size={12}/> Play on Roobet
            </a>
          </div>

          <div className="cheat-table-wrap">
            <table className="cheat-table">
              <thead>
                <tr>
                  <th className="corner">
                    <span className="corner-your">YOUR HAND</span>
                    <span className="corner-dealer">DEALER'S CARD ↓</span>
                  </th>
                  {DEALER_UPS.map(u => <th key={u}>{u}</th>)}
                </tr>
              </thead>
              <tbody>
                {SECTIONS.map(section => (
                  <>
                    <tr key={section.title} className="cheat-section-row">
                      <td colSpan={11}>{section.title}</td>
                    </tr>
                    {section.rows.map(r => (
                      <tr key={r.label}>
                        <th className="row-head">{r.label}</th>
                        {r.row.map((a, i) => (
                          <td
                            key={i}
                            className={`cell ${ACTION_META[a].cls}${hover && hover.r === r.label && hover.c === i ? ' hot' : ''}`}
                            onMouseEnter={() => setHover({ r: r.label, c: i, a })}
                            onMouseLeave={() => setHover(null)}
                          >
                            {ACTION_META[a].display}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>

          <div className="cheat-legend">
            <div className="legend-item"><span className="legend-chip act-d">DD</span><span>Double Down</span></div>
            <div className="legend-item"><span className="legend-chip act-h">H</span><span>Hit</span></div>
            <div className="legend-item"><span className="legend-chip act-ph">H/P</span><span>Split if DAS, else Hit</span></div>
            <div className="legend-item"><span className="legend-chip act-s">S</span><span>Stand</span></div>
            <div className="legend-item"><span className="legend-chip act-p">P</span><span>Split</span></div>
            <div className="legend-item"><span className="legend-chip act-r">H/R</span><span>Surrender if allowed, else Hit</span></div>
          </div>

          <div className="cheat-readout">
            {hover ? (
              <>
                <div className="readout-left">
                  <span className="eyebrow" style={{ color: 'var(--neon-200)' }}>YOUR MOVE</span>
                  <div className="readout-hand">
                    Player <strong>{hover.r}</strong> vs dealer <strong>{DEALER_UPS[hover.c]}</strong>
                  </div>
                </div>
                <div className={`readout-action ${ACTION_META[hover.a].cls}`}>
                  {ACTION_META[hover.a].label.toUpperCase()}
                </div>
              </>
            ) : (
              <div className="readout-hint">Hover any cell for the recommended play · memorize the chart for a ~0.5% house edge.</div>
            )}
          </div>
        </div>

        <div className="cheat-tips">
          <div className="tip-card">
            <span className="tip-num">01</span>
            <h4>Always split A,A and 8,8</h4>
            <p>No exceptions. Aces give two shots at 21. Eights escape a hard 16 — the worst hand in the game.</p>
          </div>
          <div className="tip-card">
            <span className="tip-num">02</span>
            <h4>Double down on 10 &amp; 11</h4>
            <p>Double on 10 vs dealer 2–9, and on 11 vs dealer 2–10. You're likely to hit a face card and win big.</p>
          </div>
          <div className="tip-card">
            <span className="tip-num">03</span>
            <h4>Dealer 4–6? Never bust yourself.</h4>
            <p>Stand on any stiff hand (12–16). The dealer must hit on 16 or less and busts over 40% of the time.</p>
          </div>
          <div className="tip-card">
            <span className="tip-num">04</span>
            <h4>Surrender 15 or 16 vs 9/10/A</h4>
            <p>If surrender is available, use it on hard 15 vs dealer 10, and hard 16 vs dealer 9, 10, or Ace.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
