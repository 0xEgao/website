import { useLayoutEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  Cable,
  Database,
  ExternalLink,
  Monitor,
  Route,
  Server,
  ShieldCheck,
  WalletCards,
} from 'lucide-react'
import PageHero from '../components/layout/PageHero'
import PortalDownloads from '../components/portal/PortalDownloads'
import CodeBlock from '../components/ui/CodeBlock'
import { LINKS } from '../constants/links'
import connectScreenshot from '../assets/portal/desktop/connect.webp'
import chooseRoleScreenshot from '../assets/portal/desktop/choose-role.webp'
import createWalletScreenshot from '../assets/portal/desktop/create-wallet.webp'
import configureSwapScreenshot from '../assets/portal/desktop/configure-swap.webp'
import swapCompleteScreenshot from '../assets/portal/desktop/swap-complete.webp'
import reportScreenshot from '../assets/portal/desktop/report.webp'
import createRouterScreenshot from '../assets/portal/web/create-router.webp'
import startRouterScreenshot from '../assets/portal/web/start-router.webp'
import fundFidelityBondScreenshot from '../assets/portal/web/fund-fidelity-bond.webp'
import routerFleetScreenshot from '../assets/portal/web/router-fleet.webp'
import routerOverviewScreenshot from '../assets/portal/web/router-overview.webp'
import routerSettingsScreenshot from '../assets/portal/web/router-settings.webp'

const DESKTOP_COMMAND = `git clone https://github.com/citadel-foss/portal.git
cd portal
npm install
npm run tauri dev`

const SERVER_COMMAND = `git clone https://github.com/citadel-foss/portal.git
cd portal
npm install
npm run web:dev`

const WALLET_STEPS = [
  {
    src: connectScreenshot,
    width: 2227,
    height: 1816,
    title: 'Connect the backend',
    copy: 'Choose Electrum or Bitcoin Core for wallet sync and swap execution, then wait for the backend and bundled Tor process to become ready.',
  },
  {
    src: chooseRoleScreenshot,
    width: 1824,
    height: 1784,
    title: 'Choose a role',
    copy: 'Enter the Wallet for everyday Bitcoin and swaps, or the Router Console to operate liquidity services.',
  },
  {
    src: createWalletScreenshot,
    width: 1353,
    height: 1428,
    title: 'Create or open a wallet',
    copy: 'Create an encrypted wallet or unlock an existing Portal/OpenSwap wallet, then let it synchronize.',
  },
  {
    src: configureSwapScreenshot,
    width: 5959,
    height: 2658,
    title: 'Build the route',
    copy: 'Set the amount, contract protocol, router count, transaction splits, confirmations, and fee rate.',
  },
  {
    src: swapCompleteScreenshot,
    width: 2062,
    height: 3204,
    title: 'Swap complete',
    copy: 'Portal keeps the route and each stage visible until the final wallet output is confirmed.',
  },
  {
    src: reportScreenshot,
    width: 1888,
    height: 956,
    title: 'Review the swap report',
    copy: 'Review the received amount, fees, swap partners, UTXOs, and on-chain deniability proof.',
  },
]

const ROUTER_STEPS = [
  {
    src: createRouterScreenshot,
    width: 1708,
    height: 2186,
    title: 'Create a Router',
    copy: 'Choose its local identity and public market name, protect the Router wallet, and set the initial fidelity-bond parameters.',
  },
  {
    src: startRouterScreenshot,
    width: 1430,
    height: 1914,
    title: 'Unlock and start',
    copy: 'Enter the encrypted Router wallet password and follow each startup stage from one screen.',
  },
  {
    src: fundFidelityBondScreenshot,
    width: 1622,
    height: 2064,
    title: 'Fund the fidelity bond',
    copy: 'Send the requested amount to the generated deposit address while Portal watches for the transaction.',
  },
  {
    src: routerFleetScreenshot,
    width: 3110,
    height: 2218,
    title: 'Router fleet',
    copy: 'Manage multiple Routers from a single dashboard, with their status, wallet balances, and earnings at a glance.',
  },
  {
    src: routerOverviewScreenshot,
    width: 2938,
    height: 1750,
    title: 'Monitor operations',
    copy: 'Review liquidity, spendable funds, earnings, bonds, contract balance, runtime configuration, and swap reports.',
  },
  {
    src: routerSettingsScreenshot,
    width: 2670,
    height: 2228,
    title: 'Configure the Router',
    copy: 'Manage network ports, confirmations, public fee policy, and the defaults used for future fidelity bonds.',
  },
]

function FeatureList({ items }) {
  return (
    <ul className="product-features">
      {items.map(item => (
        <li key={item}>
          <span aria-hidden="true">›</span>
          {item}
        </li>
      ))}
    </ul>
  )
}

function ProductLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="portal-link">
      {children}
      <ExternalLink size={14} strokeWidth={1.8} aria-hidden="true" />
    </a>
  )
}

function Walkthrough({ steps, label, className = '' }) {
  return (
    <div className={`portal-walkthrough ${className}`} aria-label={label}>
      {steps.map(({ src, width, height, title, copy }, index) => (
        <WalkthroughCard
          key={title}
          src={src}
          width={width}
          height={height}
          title={title}
          copy={copy}
          number={index + 1}
        />
      ))}
    </div>
  )
}

function WalkthroughCard({ src, width, height, title, copy, number }) {
  const cardRef = useRef(null)
  const [rowSpan, setRowSpan] = useState(1)

  useLayoutEffect(() => {
    const card = cardRef.current
    if (!card) return undefined

    const updateSpan = () => {
      const rowHeight = 8
      const rowGap = 16
      const height = card.getBoundingClientRect().height
      setRowSpan(Math.ceil((height + rowGap) / (rowHeight + rowGap)))
    }

    updateSpan()
    const observer = new ResizeObserver(updateSpan)
    observer.observe(card)

    return () => observer.disconnect()
  }, [])

  return (
    <figure ref={cardRef} className="portal-step" style={{ gridRowEnd: `span ${rowSpan}` }}>
      <div className="portal-step__image">
        <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size screenshot: ${title}`}>
          <img
            src={src}
            width={width}
            height={height}
            alt={`${title} in Portal`}
            loading="lazy"
            decoding="async"
          />
        </a>
      </div>
      <figcaption>
        <span>0{number}</span>
        <div>
          <h3 className="font-display font-semibold text-cream">{title}</h3>
          <p className="text-cream/65">{copy}</p>
        </div>
      </figcaption>
    </figure>
  )
}

export default function Apps() {
  return (
    <div className="portal-page site-shell">
      <title>Portal — OpenSwap</title>
      <meta
        name="description"
        content="Use OpenSwap through Portal: one Wallet and Router interface for desktop or a self-hosted personal server."
      />

      <PageHero
        eyebrow="Portal"
        title="One App. Two Roles."
        description="The Portal App puts the OpenSwap Wallet and Router management in a single GUI. Send and receive Bitcoin, customize and perform swaps, run Routers, and earn fees from a native desktop app or a self-hosted personal server."
      >
        <a href="#downloads" className="portal-link portal-link--filled">
          Get Portal
          <ArrowRight size={15} aria-hidden="true" />
        </a>
        <ProductLink href={LINKS.portal_repo}>View Source</ProductLink>
      </PageHero>

      <section className="portal-section portal-intro">
        <div className="portal-section__heading">
          <div>
            <p className="section-label mb-3">// What Portal does</p>
            <h2 className="portal-section__title font-display font-semibold text-cream">
              One App to manage all OpenSwap operations.
            </h2>
          </div>
          <p className="portal-copy max-w-xl text-cream/65">
            Portal combines a self-custodial Bitcoin wallet with OpenSwap routing controls. Use the Wallet to transact or swap,
            then open the Router Console when you want to make liquidity available to the network.
          </p>
        </div>

        <div className="portal-capabilities">
          <article id="wallet" className="portal-role scroll-mt-28">
            <WalletCards aria-hidden="true" />
            <p className="portal-role__eyebrow">Initiate</p>
            <h3 className="font-display font-semibold text-cream">Wallet</h3>
            <p className="text-cream/68">
              The Wallet discovers the market, requests and performs swaps, handles regular Bitcoin operations, and maintains
              swap history and reports. Funds are atomically locked during swaps and automatically recovered if a swap fails.
            </p>
            <ul className="portal-role__points">
              <li>
                <strong>Shape the route</strong>
                <span>Choose the amount, Router count, transaction splits, confirmations, fees, and Legacy or Taproot contracts.</span>
              </li>
              <li>
                <strong>Limit what each Router learns</strong>
                <span>Messages are relayed over Tor; every Router sees only its adjacent part of the multi-hop route.</span>
              </li>
              <li>
                <strong>Keep a recovery path</strong>
                <span>Atomic contracts preserve control of the funds if a counterparty stalls or the cooperative path fails.</span>
              </li>
            </ul>
          </article>
          <article id="router" className="portal-role scroll-mt-28">
            <Route aria-hidden="true" />
            <p className="portal-role__eyebrow">Provide</p>
            <h3 className="font-display font-semibold text-cream">Router</h3>
            <p className="text-cream/68">
              A Router is a swap service provider. It advertises itself in the marketplace through fidelity bonds, provides
              liquidity for Wallet swaps, and earns fees. The best environment for a Router is a VPS or home-node setup.
            </p>
            <ul className="portal-role__points">
              <li>
                <strong>Provide liquidity, earn fees</strong>
                <span>Set the available balance, minimum swap size, and fee policy for the offers Wallets can discover.</span>
              </li>
              <li>
                <strong>Prove costly identity</strong>
                <span>A time-locked fidelity bond gives the Router a verifiable reputation and makes Sybil identities expensive.</span>
              </li>
              <li>
                <strong>Operate the whole fleet</strong>
                <span>Start or stop Routers and inspect balances, bonds, onion addresses, earnings, swap reports, and live logs.</span>
              </li>
            </ul>
          </article>
        </div>

        <aside className="portal-safety-note">
          <ShieldCheck size={20} aria-hidden="true" />
          <p><strong>Development status:</strong> Portal is under active development. Signet is the testing network; mainnet support is experimental.</p>
        </aside>
      </section>

      <section className="portal-section portal-backends" aria-labelledby="chain-backends-title">
        <div className="portal-section__heading">
          <div>
            <p className="section-label mb-3">// Chain backends</p>
            <h2 id="chain-backends-title" className="portal-section__title font-display font-semibold text-cream">
              Choose your own backend for all operations.
            </h2>
          </div>
          <p className="portal-copy max-w-xl text-cream/65">
            OpenSwap does not lock Portal to one Bitcoin backend. Choose a local Bitcoin Core node for direct validation, or an
            Electrum server when you want to start without running a full node. Both options provide the chain data Portal needs
            to synchronize the Wallet, prepare swaps, follow confirmations, and broadcast transactions.
          </p>
        </div>

        <div className="portal-backends__list">
          <article className="portal-backend">
            <div className="portal-backend__icon"><Database aria-hidden="true" /></div>
            <div>
              <p className="portal-role__eyebrow">Your node</p>
              <h3 className="font-display font-semibold text-cream">Bitcoin Core</h3>
            </div>
            <p className="text-cream/65">
              Connect Portal to a Bitcoin Core full or pruned node with <code className="inline-code">-txindex</code> and ZMQ
              available. This is the most sovereign setup: your own node validates the chain and supplies wallet and swap data.
              {' '}<a className="portal-backend__text-link" href={LINKS.bitcoin_conf_sample} target="_blank" rel="noopener noreferrer">
                View the sample bitcoin.conf <ExternalLink size={13} aria-hidden="true" />
              </a>
            </p>
          </article>

          <article className="portal-backend">
            <div className="portal-backend__icon"><Cable aria-hidden="true" /></div>
            <div>
              <p className="portal-role__eyebrow">Remote or self-hosted</p>
              <h3 className="font-display font-semibold text-cream">Electrum</h3>
            </div>
            <p className="text-cream/65">
              Connect to a third-party or self-hosted Electrum server. It removes the local full-node requirement while
              performing all required operations. A self-hosted Electrum server is recommended wherever possible.
            </p>
          </article>
        </div>

        <p className="portal-backends__note text-cream/60">
          Portal Desktop and Portal Server expose the same backend choice during setup. Swap communication with Routers still uses Tor.
        </p>
      </section>

      <section id="desktop" className="portal-host scroll-mt-28">
        <div className="portal-host__intro portal-host__intro--single">
          <div className="portal-host__icon"><Monitor aria-hidden="true" /></div>
          <div>
            <p className="section-label mb-3">// Portal Desktop</p>
            <h2 className="portal-section__title font-display font-semibold text-cream">Run Portal as a Native Desktop Wallet.</h2>
            <p className="portal-copy mt-4 text-cream/68">
              The desktop build packages the interface and Rust host as one Tauri application. Release builds start their own Tor
              process, and swaps can run through the preconfigured Electrum server or your Bitcoin Core RPC node.
            </p>
            <FeatureList items={[
              'Node.js 18+ and the stable Rust toolchain',
              'Platform build tools: Xcode CLI tools on macOS or Tauri system packages on Linux',
              'Run the development app with npm run tauri dev',
              'Build an installer with npm run tauri build',
            ]} />
            <div className="mt-6">
              <ProductLink href={LINKS.tauri_prerequisites}>Platform prerequisites</ProductLink>
            </div>
          </div>
        </div>
      </section>

      <section id="server" className="portal-host scroll-mt-28">
        <div className="portal-host__intro portal-host__intro--single">
          <div className="portal-host__icon"><Server aria-hidden="true" /></div>
          <div>
            <p className="section-label mb-3">// Portal Server</p>
            <h2 className="portal-section__title font-display font-semibold text-cream">Run Portal in a headless server.</h2>
            <p className="portal-copy mt-4 text-cream/68">
              Portal Server runs the same Wallet and Router Console from a self-hosted machine while keeping the shared Rust core
              and long-running operations on the server. The development command starts the backend on <code className="inline-code">127.0.0.1:3000</code> and the UI at <code className="inline-code">localhost:1430</code>.
            </p>
            <FeatureList items={[
              'Node.js 18+ and the stable Rust toolchain',
              'A supported system toolchain for the Rust host',
              'Run frontend and backend together with npm run web:dev',
              'Build Portal Server with npm run web:build',
            ]} />
          </div>
        </div>
      </section>

      <section id="walkthrough" className="portal-host portal-walkthrough-section scroll-mt-28">
        <div className="portal-section__heading">
          <div>
            <p className="section-label mb-3">// Portal</p>
            <h2 className="portal-section__title font-display font-semibold text-cream">
              Portal walkthrough
            </h2>
          </div>
          <p className="portal-copy max-w-xl text-cream/65">
            Portal keeps both roles in one interface. This walkthrough creates a Wallet first, but that order is optional—you can begin with a Router instead.
          </p>
        </div>

        <div className="portal-host__commands" aria-label="Portal development commands">
          <div>
            <p className="portal-command__label">Portal Desktop</p>
            <CodeBlock code={DESKTOP_COMMAND} language="bash" className="portal-code" />
          </div>
          <div>
            <p className="portal-command__label">Portal Server</p>
            <CodeBlock code={SERVER_COMMAND} language="bash" className="portal-code" />
          </div>
        </div>

        <div className="portal-walkthrough-group">
          <div className="portal-host__heading">
            <p className="section-label">// Wallet</p>
            <p className="text-cream/60">Connect a backend, open a Wallet, configure a route, and follow the swap to completion.</p>
          </div>
          <Walkthrough steps={WALLET_STEPS} label="Portal Wallet walkthrough" className="portal-walkthrough--wallet" />
        </div>

        <div className="portal-walkthrough-group">
          <div className="portal-host__heading">
            <p className="section-label">// Router</p>
            <p className="text-cream/60">Create a Router, establish its fidelity bond, then operate and configure the running service.</p>
          </div>
          <Walkthrough steps={ROUTER_STEPS} label="Portal Router walkthrough" />
        </div>
      </section>

      <PortalDownloads />
    </div>
  )
}
