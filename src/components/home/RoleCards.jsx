import { Link } from 'react-router-dom'
import Button from '../ui/Button'

const CARDS = [
  {
    role: 'Wallet',
    prompt: 'Portal / Wallet',
    description:
      'Use Portal as a self-custodial Bitcoin wallet, then create private swap routes when you need them. Choose a protocol, select Routers, manage UTXOs, and follow every swap from one interface.',
    highlights: [
      'Choose Legacy or Taproot',
      'Tor required — .onion routing',
      'Desktop or self-hosted server',
    ],
    cta: { label: 'Explore Wallet', to: '/portal#wallet' },
    borderClass: 'border-white/10 hover:border-white/25',
    promptColor: 'text-cream/70',
    tagColor: 'text-cream/70 border-white/20',
  },
  {
    role: 'Router',
    prompt: 'Portal / Router',
    description:
      'Use Portal to provide swap liquidity, keep a bonded service online, and earn fees when Wallet routes use it. Manage the fleet, balances, reports, and logs together.',
    highlights: [
      'Fidelity bond = reputation',
      'Auto-renewing bond lifecycle',
      'Manage one or many routers',
    ],
    cta: { label: 'Explore Router', to: '/portal#router' },
    borderClass: 'border-white/10 hover:border-white/25',
    promptColor: 'text-cream/70',
    tagColor: 'text-cream/70 border-white/20',
  },
]

export default function RoleCards() {
  return (
    <section className="home-section home-roles">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="section-label mb-2">// Inside Portal</p>
          <h2 className="type-section-title font-display font-semibold tracking-[0.04em] text-cream">
            Two Roles, One App.
          </h2>
        </div>
      </div>

      <div className="home-roles__grid grid gap-8 sm:grid-cols-2">
        {CARDS.map(({ role, prompt, description, highlights, cta, borderClass, promptColor }) => (
          <div
            key={role}
            className={`home-role-card section-rule flex flex-col ${borderClass}`}
          >
            <div className="mb-3 flex items-center gap-2 pb-1">
              <span className={`type-meta ml-2 font-mono uppercase tracking-[0.14em] ${promptColor}`}>{prompt}</span>
            </div>

            <div className="mb-3 flex items-center gap-3">
              <div>
                <h3 className="type-section-title font-display font-semibold tracking-[0.04em] text-cream">{role}</h3>
              </div>
            </div>

            <p className="type-body mb-4 text-cream/70 font-body">{description}</p>

            <ul className="mb-5 flex-1 space-y-1.5">
              {highlights.map(h => (
                <li key={h} className="type-small flex items-center gap-2 font-mono text-cream/65">
                  <span className="shrink-0 text-cream">&gt;</span>
                  {h}
                </li>
              ))}
            </ul>

            <Button
              as={Link}
              to={cta.to}
              variant="outline"
              size="lg"
              className="self-start w-fit hover:shadow-[0_16px_34px_rgba(247,147,26,0.34),0_0_26px_rgba(247,147,26,0.2)] hover:-translate-y-0.5"
            >
              {cta.label}
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}
