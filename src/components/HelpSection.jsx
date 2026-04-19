import { IconDiscord, IconArrow } from './Icons'

const ROOBET_URL = 'https://roobet.com/?ref=oeg'

export default function HelpSection() {
  return (
    <section id="help">
      <div className="shell">
        <div className="help-block">
          <div>
            <span className="eyebrow">NEED A HAND?</span>
            <h2 style={{ marginTop: 10 }}>Stuck on signup? We'll walk you through it.</h2>
            <p>Join our Discord — a real human will answer in under three minutes. No bots, no canned replies, no upsells.</p>
          </div>
          <div className="help-actions">
            <a href="https://discord.gg/YOURSERVER" target="_blank" rel="noopener noreferrer" className="btn btn-discord btn-lg">
              <IconDiscord/> Join Discord
            </a>
            <a href={ROOBET_URL} target="_blank" rel="noopener noreferrer sponsored" className="btn btn-ghost btn-lg">
              Go to Roobet <IconArrow/>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
