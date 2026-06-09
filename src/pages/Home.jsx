import { ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import StatusBanner from '../components/home/StatusBanner'
import Hero from '../components/home/Hero'
import SwapMarket from '../components/home/SwapMarket'
import SwapFlowDiagram from '../components/home/SwapFlowDiagram'
import RoleCards from '../components/home/RoleCards'
import QuickLinks from '../components/home/QuickLinks'
import { LINKS } from '../constants/links'
import { useLatestRelease } from '../hooks/useLatestRelease'

const OG_IMAGE = 'https://coinswap.network/og.png' // placeholder — replace when asset exists

export default function Home() {
  const { tag, url } = useLatestRelease()

  return (
    <>
      {/* SEO */}
      <title>CoinSwap</title>
      <meta name="description" content="CoinSwap is a non-custodial, atomic, multi-hop Bitcoin swap protocol. Break the transaction graph over Tor — no trust, no custodian, no shared history." />

      {/* Open Graph */}
      <meta property="og:type"        content="website" />
      <meta property="og:title"       content="An Actually Decentralized Atomic-Swap Marketplace" />
      <meta property="og:description" content="Non-custodial, atomic, multi-hop Bitcoin swaps over Tor. Break the transaction graph at the protocol level." />
      <meta property="og:image"       content={OG_IMAGE} />
      <meta property="og:site_name"   content="CoinSwap" />
      <meta name="twitter:card"       content="summary_large_image" />
      <meta name="twitter:title"      content="An Actually Decentralized Atomic-Swap Marketplace" />
      <meta name="twitter:description" content="Non-custodial, atomic, multi-hop Bitcoin swaps over Tor." />
      <meta name="twitter:image"      content={OG_IMAGE} />

      <StatusBanner releaseTag={tag} releaseUrl={url} />

      <section className="border-b border-dotted border-black/15 bg-linear-to-r from-[#0a1020]/8 via-[#f7931a]/8 to-[#0a1020]/8">
        <div className="site-shell flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="type-caption font-mono uppercase tracking-[0.14em] text-cream/65">Demo doc</p>
            <p className="type-small text-cream/75">
              Go to the demo doc!!!.
            </p>
          </div>
          <Link
            to={`/docs?doc=${encodeURIComponent('manuals/demo')}`}
            className="inline-flex items-center gap-1.5 border border-[#f7931a]/25 bg-[#f7931a]/10 px-4 py-2 font-mono text-sm uppercase tracking-[0.14em] text-cream transition-colors hover:bg-[#f7931a]/16"
          >
            Go to demo doc
            <ExternalLink size={13} strokeWidth={1.8} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <div className="relative overflow-hidden">
        <div className="site-shell relative space-y-7 pb-16">
          <Hero />
          <SwapFlowDiagram />
          <SwapMarket />
          <RoleCards />
          <QuickLinks />
        </div>
      </div>
    </>
  )
}
