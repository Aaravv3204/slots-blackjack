import { IconBook, IconChart, IconShield, IconBolt } from './Icons'

export default function Trust() {
  return (
    <div className="trust">
      <div className="shell">
        <div className="trust-row">
          <div className="trust-item">
            <div className="trust-icon"><IconBook size={22}/></div>
            <div><div className="t">Verified strategy</div><div className="s">MATH_BACKED_CHART</div></div>
          </div>
          <div className="trust-item">
            <div className="trust-icon"><IconChart size={22}/></div>
            <div><div className="t">Live RTP data</div><div className="s">REFRESHED_DAILY</div></div>
          </div>
          <div className="trust-item">
            <div className="trust-icon"><IconShield size={22}/></div>
            <div><div className="t">No pay-to-win</div><div className="s">ZERO_UPSELLS</div></div>
          </div>
          <div className="trust-item">
            <div className="trust-icon"><IconBolt size={22}/></div>
            <div><div className="t">Instant payouts</div><div className="s">ROOBET_CRYPTO</div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
