import { ArrowUpRight } from 'lucide-react'
import { LINKS } from '../../constants/links'

const MODES = [
  {
    number: '01',
    name: 'Legacy',
    tag: 'P2WSH',
    description:
      'Locks each hop in a 2-of-2 P2WSH output and uses a separate HTLC contract transaction. The hashlock completes the swap; the timelock provides recovery.',
    href: LINKS.protocol_legacy_contract,
  },
  {
    number: '02',
    name: 'Taproot',
    tag: 'P2TR + MuSig2',
    description:
      'Uses one Taproot contract output per hop. Cooperative swaps use the key path, while hashlock and timelock scripts remain available for recovery.',
    href: LINKS.protocol_taproot_contract,
  },
  {
    number: '03',
    name: 'PaySwap',
    tag: 'Exact payment',
    description:
      'Sends the final swap output directly to a third-party Bitcoin address. It works with Legacy or Taproot and accounts for fees so the receiver gets the exact amount.',
    href: LINKS.protocol_payswap,
  },
]

export default function ProtocolModes() {
  return (
    <section className="home-section home-protocols">
      <div className="home-protocols__heading">
        <div>
          <p className="section-label mb-2">// supported modes</p>
          <h2 className="type-section-title font-display font-semibold tracking-[0.04em] text-cream">
            Choose the contract for the job
          </h2>
        </div>
        <p className="type-body max-w-xl text-cream/65">
          Two atomic-swap contract families, plus an exact-payment mode that works with either one.
        </p>
      </div>

      <div className="home-protocols__grid">
        {MODES.map(({ number, name, tag, description, href }) => (
          <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="protocol-mode">
            <div className="protocol-mode__meta">
              <span>{number}</span>
              <span>{tag}</span>
            </div>
            <h3 className="font-display font-semibold text-cream">{name}</h3>
            <p className="text-cream/68">{description}</p>
            <span className="protocol-mode__link">
              Read specification <ArrowUpRight size={15} aria-hidden="true" />
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
