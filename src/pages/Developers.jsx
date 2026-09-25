import { ArrowRight, BookOpen, ExternalLink, Terminal } from 'lucide-react'
import PageHero from '../components/layout/PageHero'
import CodeBlock from '../components/ui/CodeBlock'
import { LINKS } from '../constants/links'

const BUILD_COMMAND = `git clone https://github.com/citadel-foss/openswap
cd openswap
cargo build --release`

const FFI_LINKS = [
  {
    name: 'JavaScript',
    support: 'Node.js + Electron',
    description: 'NAPI bindings for Node.js and Electron, with pre-built native modules for desktop environments.',
    href: LINKS.ffi_js_repo,
  },
  {
    name: 'Kotlin',
    support: 'Android + JVM',
    description: 'UniFFI bindings for Android and JVM applications.',
    href: LINKS.ffi_kotlin_repo,
  },
  {
    name: 'React Native',
    support: 'Android + iOS',
    description: 'JSI and TurboModule bindings for mobile applications.',
    href: LINKS.ffi_react_native_repo,
  },
  {
    name: 'Swift',
    support: 'iOS + macOS',
    description: 'UniFFI bindings and an xcframework for Apple platforms.',
    href: LINKS.ffi_swift_repo,
  },
  {
    name: 'Python',
    support: 'Python 3.8+',
    description: 'Cross-platform bindings for scripts, services, and desktop tools.',
    href: LINKS.ffi_python_repo,
  },
  {
    name: 'Ruby',
    support: 'Ruby 2.7+',
    description: 'FFI-based bindings for standalone Ruby and Rails applications.',
    href: LINKS.ffi_ruby_repo,
  },
  {
    name: 'C#',
    support: '.NET 8+',
    description: 'UniFFI-generated .NET bindings exposed through a stable managed wrapper.',
    href: LINKS.ffi_csharp_repo,
  },
]

const DOC_GROUPS = [
  {
    label: 'Build and operate',
    links: [
      { label: 'Wallet CLI (taker)', href: LINKS.taker_docs },
      { label: 'Router daemon (makerd)', href: LINKS.makerd_docs },
      { label: 'Router CLI (maker-cli)', href: LINKS.maker_cli_docs },
      { label: 'Docker deployment', href: LINKS.maker_docker_docs },
      { label: 'Tor setup', href: LINKS.tor_docs },
    ],
  },
  {
    label: 'Understand the protocol',
    links: [
      { label: 'Protocol specification', href: LINKS.protocol_spec },
      { label: 'V1 protocol flow', href: LINKS.protocol_flow },
      { label: 'V2 protocol', href: LINKS.protocol_v2 },
      { label: 'OpenSwap core', href: LINKS.openswap_repo },
    ],
  },
  {
    label: 'Contribute',
    links: [
      { label: 'Portal repository', href: LINKS.portal_repo },
      { label: 'FFI repository', href: LINKS.openswap_ffi },
      { label: 'Contributing guide', href: LINKS.contributing },
      { label: 'Issue tracker', href: LINKS.issues },
      { label: 'Community chat', href: LINKS.matrix },
    ],
  },
]

function ExternalTextLink({ href, children, className = '' }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`portal-link ${className}`}>
      {children}
      <ExternalLink size={14} strokeWidth={1.8} aria-hidden="true" />
    </a>
  )
}

export default function Developers() {
  return (
    <div className="portal-page site-shell">
      <title>Developers — OpenSwap</title>
      <meta
        name="description"
        content="Build with OpenSwap core, use its language bindings, and find the protocol and operator documentation."
      />

      <PageHero
        eyebrow="Developers"
        title="Build with OpenSwap"
        description="Use the Rust core directly or bring the Wallet workflow into an existing desktop, mobile, or server application through maintained language bindings."
      >
        <ExternalTextLink href={LINKS.openswap_repo}>Open core repository</ExternalTextLink>
        <ExternalTextLink href={LINKS.openswap_ffi}>Explore the FFIs</ExternalTextLink>
      </PageHero>

      <section className="portal-section portal-section--split">
        <div>
          <p className="section-label mb-3">// Start from source</p>
          <h2 className="portal-section__title font-display font-semibold text-cream">The protocol, without a wrapper</h2>
          <p className="portal-copy mt-4 text-cream/68">
            The OpenSwap repository contains the Wallet client, Router daemon, Router CLI, and the shared Rust implementation.
            Build it directly when you need the complete command-line workflow or want to contribute to the protocol.
          </p>
          <div className="portal-requirements mt-7">
            <span>Rust ≥ 1.75</span>
            <span>Bitcoin Core: synced, non-pruned, txindex</span>
            <span>Tor daemon</span>
          </div>
        </div>
        <CodeBlock code={BUILD_COMMAND} language="bash" className="portal-code" />
      </section>

      <section className="portal-section">
        <div className="portal-section__heading">
          <div>
            <p className="section-label mb-3">// Language bindings</p>
            <h2 className="portal-section__title font-display font-semibold text-cream">Use OpenSwap where your users already are</h2>
          </div>
          <p className="portal-copy max-w-xl text-cream/65">
            <code className="inline-code">openswap-ffi</code> exposes the Wallet workflow across desktop, mobile, and server-side environments.
          </p>
        </div>

        <div className="ffi-grid mt-8">
          {FFI_LINKS.map(({ name, support, description, href }, index) => (
            <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="ffi-card group">
              <span className="ffi-card__index">0{index + 1}</span>
              <div>
                <p className="ffi-card__support">{support}</p>
                <h3 className="ffi-card__title font-display font-semibold text-cream">{name}</h3>
                <p className="ffi-card__copy text-cream/65">{description}</p>
              </div>
              <ArrowRight className="ffi-card__arrow" size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <section id="documentation" className="portal-section scroll-mt-28">
        <div className="portal-section__heading">
          <div>
            <p className="section-label mb-3">// Documentation</p>
            <h2 className="portal-section__title font-display font-semibold text-cream">Go straight to the source</h2>
          </div>
          <p className="portal-copy max-w-xl text-cream/65">
            These guides live with the repositories they describe, so implementation details and documentation stay together.
          </p>
        </div>

        <div className="docs-directory mt-8">
          {DOC_GROUPS.map(({ label, links }, index) => (
            <div key={label} className="docs-directory__group">
              <div className="docs-directory__heading">
                {index === 0 ? <Terminal size={18} /> : index === 1 ? <BookOpen size={18} /> : <ExternalLink size={18} />}
                <h3>{label}</h3>
              </div>
              <ul>
                {links.map(link => (
                  <li key={link.label}>
                    <ExternalTextLink href={link.href}>{link.label}</ExternalTextLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
