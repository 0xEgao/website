const CARDS = [
  {
    label: 'Sybil resistance',
    value: 'Fidelity Bonds',
    description:
      'Routers post fidelity bonds before they can register, which helps keep the market harder to game and easier to trust at a protocol level.',
  },
  {
    label: 'Discovery',
    value: 'Market Hosted on Bitcoin + Nostr',
    description:
      'The market is hosted on the Bitcoin blockchain with a minimal footprint. It is also discoverable via Nostr, removing reliance on any central server.',
  },
  {
    label: 'Settlement',
    value: 'HTLC With Recovery',
    description:
      'Efficient atomic swaps with Taproot HTLCs and MuSig2, ensuring atomicity at the lowest possible cost. Recovery triggers automatically to prevent fund loss.',
  },
  {
    label: 'Router fees',
    value: 'Competitive pricing',
    description:
      'Routers compete for order flow, which helps keep market fees low while still rewarding operators for providing liquidity.',
  },
  {
    label: 'Chain backend',
    value: 'Bitcoin Core or Electrum',
    description:
      'Run the same OpenSwap routes through your own Bitcoin Core RPC node or an Electrum server. Portal supports both backends for wallet sync and swap execution.',
  },
  {
    label: 'Cross-chain swaps',
    value: 'Hop Across Layers',
    description:
      'The market can support hops away from or into Bitcoin across layers and protocols such as Lightning, eCash, Liquid, and Ark.',
  },
]

export default function SwapMarket() {
  return (
    <section className="home-section home-market">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="section-label mb-2">// market layer</p>
          <h2 className="type-section-title font-display font-semibold tracking-[0.04em] text-cream">
            Swap Market
          </h2>
        </div>
      </div>

      <div className="home-market__grid grid gap-4 lg:grid-cols-3">
        {CARDS.map(({ label, value, description }) => (
          <article
            key={`${label}-${value}`}
            className="home-market__card section-rule flex h-full flex-col rounded-2xl border border-black/10 bg-white/15 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-sm"
          >
            <p className="type-meta mb-3 font-mono uppercase tracking-[0.16em] text-cream/65">
              {label}
            </p>
            <h3 className="type-section-title mb-3 font-display font-semibold tracking-[0.03em] text-cream">
              {value}
            </h3>
            <p className="type-body text-cream/75 font-body">{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
