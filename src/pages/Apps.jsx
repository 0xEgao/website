import {
  ArrowRight,
  ExternalLink,
  Globe2,
  Monitor,
  Route,
  ShieldCheck,
  WalletCards,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/layout/PageHero'
import CodeBlock from '../components/ui/CodeBlock'
import { LINKS } from '../constants/links'

const DESKTOP_COMMAND = `git clone https://github.com/citadel-foss/portal.git
cd portal
npm install
npm run tauri dev`

const WEB_COMMAND = `git clone https://github.com/citadel-foss/portal.git
cd portal
npm install
npm run web:dev`

const DESKTOP_STEPS = [
  {
    src: `${import.meta.env.BASE_URL}portal/desktop/connect.png`,
    title: 'Connect the backend',
    copy: 'Choose Electrum or Bitcoin Core for wallet sync and swap execution, then wait for the backend and bundled Tor process to become ready.',
  },
  {
    src: `${import.meta.env.BASE_URL}portal/desktop/choose-role.png`,
    title: 'Choose a role',
    copy: 'Enter the Wallet for everyday Bitcoin and swaps, or the Router Console to operate liquidity services.',
  },
  {
    src: `${import.meta.env.BASE_URL}portal/desktop/create-wallet.png`,
    title: 'Create or open a wallet',
    copy: 'Create an encrypted wallet or unlock an existing Portal/OpenSwap wallet, then let it synchronize.',
  },
  {
    src: `${import.meta.env.BASE_URL}portal/desktop/configure-swap.png`,
    title: 'Build the route',
    copy: 'Set the amount, contract protocol, router count, transaction splits, confirmations, and fee rate.',
  },
  {
    src: `${import.meta.env.BASE_URL}portal/desktop/swap-complete.png`,
    title: 'Follow the swap',
    copy: 'Portal keeps the route and each stage visible until the final wallet output is confirmed.',
  },
  {
    src: `${import.meta.env.BASE_URL}portal/desktop/router-fleet.png`,
    title: 'Operate router fleets',
    copy: 'Start, stop, and inspect multiple Routers with their liquidity, bonds, earnings, and onion addresses in one console.',
  },
]

const WEB_STEPS = [
  {
    src: `${import.meta.env.BASE_URL}portal/web/wallet.png`,
    title: 'Wallet overview',
    copy: 'Review regular and swap balances, UTXOs, transactions, and encrypted backup controls.',
  },
  {
    src: `${import.meta.env.BASE_URL}portal/web/market.png`,
    title: 'Inspect the Router market',
    copy: 'See available liquidity, fidelity bonds, limits, responsiveness, and the onion address behind each offer.',
  },
  {
    src: `${import.meta.env.BASE_URL}portal/web/send-receive.png`,
    title: 'Send and receive',
    copy: 'Use the same wallet for regular Bitcoin payments, address generation, fee selection, and coin control.',
  },
  {
    src: `${import.meta.env.BASE_URL}portal/web/router-fleet.png`,
    title: 'Run Routers',
    copy: 'Open the Router Console to manage several services from the browser-hosted Portal.',
  },
  {
    src: `${import.meta.env.BASE_URL}portal/web/router-logs.png`,
    title: 'Trace operations',
    copy: 'Filter live Router logs when you need to understand negotiation, confirmation, or recovery activity.',
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

function Walkthrough({ steps, label }) {
  return (
    <div className="portal-walkthrough" aria-label={label}>
      {steps.map(({ src, title, copy }, index) => (
        <figure key={title} className="portal-step">
          <div className="portal-step__image">
            <img src={src} alt={`${title} in Portal`} loading="lazy" />
          </div>
          <figcaption>
            <span>0{index + 1}</span>
            <div>
              <h3 className="font-display font-semibold text-cream">{title}</h3>
              <p className="text-cream/65">{copy}</p>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

export default function Apps() {
  return (
    <div className="portal-page site-shell">
      <title>Portal — OpenSwap</title>
      <meta
        name="description"
        content="Use OpenSwap through Portal: one wallet and router interface for desktop or a self-hosted web browser."
      />

      <PageHero
        eyebrow="Applications"
        title="One Portal. Two roles."
        description="Portal puts the OpenSwap Wallet and Router Console in one application. Send and receive Bitcoin, build private swap routes, or provide liquidity from a Tauri desktop app or a self-hosted browser interface."
      >
        <ProductLink href={LINKS.portal_repo}>Open Portal repository</ProductLink>
        <Link to="/downloads#portal" className="portal-link portal-link--filled">
          View downloads
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </PageHero>

      <section className="portal-section portal-intro">
        <div className="portal-section__heading">
          <div>
            <p className="section-label mb-3">// What Portal does</p>
            <h2 className="portal-section__title font-display font-semibold text-cream">
              Control your funds and your role in the network
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
              The Wallet requests a swap. You keep custody of the keys, choose how the route is built, and receive a different
              set of UTXOs with no shared on-chain history to the coins you sent.
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
              A Router is an always-available swap service. It commits its own liquidity, forwards one hop of a route, and earns
              the fee configured by its operator without taking custody of another user&apos;s wallet.
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

      <section id="desktop" className="portal-host scroll-mt-28">
        <div className="portal-host__intro">
          <div className="portal-host__icon"><Monitor aria-hidden="true" /></div>
          <div>
            <p className="section-label mb-3">// Portal Desktop · Tauri</p>
            <h2 className="portal-section__title font-display font-semibold text-cream">A native Portal with Tor included</h2>
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
          <CodeBlock code={DESKTOP_COMMAND} language="bash" className="portal-code" />
        </div>

        <div className="portal-host__heading">
          <p className="section-label">// Desktop walkthrough</p>
          <p className="text-cream/60">Connect once, then move between Wallet and Router Console without changing applications.</p>
        </div>
        <Walkthrough steps={DESKTOP_STEPS} label="Portal Desktop walkthrough" />
      </section>

      <section id="web" className="portal-host scroll-mt-28">
        <div className="portal-host__intro">
          <div className="portal-host__icon"><Globe2 aria-hidden="true" /></div>
          <div>
            <p className="section-label mb-3">// Portal Web · Browser</p>
            <h2 className="portal-section__title font-display font-semibold text-cream">Host the same Wallet and Router Console</h2>
            <p className="portal-copy mt-4 text-cream/68">
              Portal Web replaces the Tauri shell with a local web host while keeping the same interface and shared Rust core. The
              development command starts the backend on <code className="inline-code">127.0.0.1:3000</code> and the UI at <code className="inline-code">localhost:1430</code>.
            </p>
            <FeatureList items={[
              'Node.js 18+ and the stable Rust toolchain',
              'A supported system toolchain for the Rust host',
              'Run frontend and backend together with npm run web:dev',
              'Build the browser frontend with npm run web:build',
            ]} />
          </div>
          <CodeBlock code={WEB_COMMAND} language="bash" className="portal-code" />
        </div>

        <div className="portal-host__heading">
          <p className="section-label">// Web walkthrough</p>
          <p className="text-cream/60">Wallet and Router workflows stay together in the browser-hosted interface.</p>
        </div>
        <Walkthrough steps={WEB_STEPS} label="Portal Web walkthrough" />
      </section>

      <section className="portal-endcap">
        <div className="portal-section__heading">
          <div>
            <p className="section-label mb-3">// Designed for real operations</p>
            <h2 className="portal-section__title font-display font-semibold text-cream">
              The interface can close. The work keeps going.
            </h2>
          </div>
          <div className="portal-endcap__summary">
            <p className="portal-copy text-cream/65">
              Swaps spend most of their time waiting for confirmations. Portal keeps long-running work safe without tying it to an open window.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/downloads#portal" className="portal-link portal-link--filled">
                Download Portal <ArrowRight size={14} aria-hidden="true" />
              </Link>
              <ProductLink href={LINKS.portal_repo}>Inspect the source</ProductLink>
            </div>
          </div>
        </div>

        <div className="portal-endcap__grid">
          <article>
            <span>01</span>
            <h3 className="font-display font-semibold text-cream">Keep swaps and Routers alive</h3>
            <p className="text-cream/65">Closing the desktop window hides Portal to the tray. An explicit quit warns you when a swap or Router is still running.</p>
          </article>
          <article>
            <span>02</span>
            <h3 className="font-display font-semibold text-cream">Move between interfaces</h3>
            <p className="text-cream/65">Portal wallet data is interchangeable with the OpenSwap command-line tools, and encrypted backups support recovery or migration.</p>
          </article>
          <article>
            <span>03</span>
            <h3 className="font-display font-semibold text-cream">Keep connection details local</h3>
            <p className="text-cream/65">Portal starts Tor fresh for each session, and chain-backend connection settings are not written to disk.</p>
          </article>
        </div>
      </section>
    </div>
  )
}
