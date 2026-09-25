import { Download, ExternalLink, FileArchive, MonitorDown } from 'lucide-react'
import PageHero from '../components/layout/PageHero'
import { LINKS } from '../constants/links'

const DOWNLOAD_GROUPS = [
  {
    id: 'portal',
    label: 'Portal Desktop',
    description: 'The unified Wallet and Router application, packaged as a native desktop build.',
    icon: 'monitor',
    files: [
      { name: 'macOS · Apple Silicon', detail: 'M-series native installer', format: '.dmg', href: '#portal-macos-arm64' },
      { name: 'macOS · Intel', detail: 'x86_64 native installer', format: '.dmg', href: '#portal-macos-x64' },
      { name: 'Linux · Intel/AMD', detail: 'Ubuntu / Debian package', format: '.deb', href: '#portal-linux-x64-deb' },
      { name: 'Linux · Intel/AMD', detail: 'Fedora / RHEL package', format: '.rpm', href: '#portal-linux-x64-rpm' },
      { name: 'Linux · Intel/AMD', detail: 'Portable standalone build', format: '.AppImage', href: '#portal-linux-x64-appimage' },
      { name: 'Linux · ARM64', detail: 'Ubuntu / Debian package', format: '.deb', href: '#portal-linux-arm64-deb' },
      { name: 'Linux · ARM64', detail: 'Fedora / RHEL package', format: '.rpm', href: '#portal-linux-arm64-rpm' },
      { name: 'Linux · ARM64', detail: 'Portable standalone build', format: '.AppImage', href: '#portal-linux-arm64-appimage' },
    ],
  },
  {
    id: 'portal-server',
    label: 'Portal Server',
    description: 'Run the same Wallet and Router interface from a self-hosted headless server.',
    icon: 'archive',
    files: [
      { name: 'Linux x86_64', detail: 'Headless server release bundle', format: '.tar.gz', href: '#portal-server-linux-x64' },
      { name: 'Linux ARM64', detail: 'Headless server release bundle', format: '.tar.gz', href: '#portal-server-linux-arm64' },
      { name: 'Source archive', detail: 'Build Portal Server locally', format: '.tar.gz', href: '#portal-server-source' },
    ],
  },
]

function PlaceholderDownload({ file }) {
  return (
    <a
      href={file.href}
      onClick={event => event.preventDefault()}
      className="download-row"
      aria-label={`${file.name} download link pending`}
      title="Download link will be added before release"
    >
      <div>
        <p className="download-row__name">{file.name}</p>
        <p className="download-row__detail">{file.detail}</p>
      </div>
      <span className="download-row__format">{file.format}</span>
      <span className="download-row__action">
        Link pending
        <Download size={15} aria-hidden="true" />
      </span>
    </a>
  )
}

export default function Downloads() {
  return (
    <div className="portal-page site-shell">
      <title>Downloads — OpenSwap</title>
      <meta name="description" content="Download Portal Desktop or the self-hosted Portal Server release." />

      <PageHero
        eyebrow="Downloads"
        title="Choose your Portal build"
        description="Install the native desktop app or run Portal from a headless server. Release URLs remain placeholders until the signed artifacts are published."
      >
        <a href={LINKS.portal_releases} target="_blank" rel="noopener noreferrer" className="portal-link">
          Portal releases
          <ExternalLink size={14} strokeWidth={1.8} aria-hidden="true" />
        </a>
      </PageHero>

      <div className="download-catalog">
        {DOWNLOAD_GROUPS.map(({ id, label, description, icon, files }, index) => (
          <section key={id} id={id} className="download-group scroll-mt-28">
            <div className="download-group__intro">
              <span className="download-group__index">0{index + 1}</span>
              {icon === 'archive'
                ? <FileArchive size={24} strokeWidth={1.6} aria-hidden="true" />
                : <MonitorDown size={24} strokeWidth={1.6} aria-hidden="true" />}
              <h2 className="font-display font-semibold text-cream">{label}</h2>
              <p className="text-cream/65">{description}</p>
            </div>
            <div className="download-group__files">
              {files.map(file => <PlaceholderDownload key={file.href} file={file} />)}
            </div>
          </section>
        ))}
      </div>

      <aside className="download-note">
        <div>
          <p className="download-note__label">Release integrity</p>
          <h2 className="font-display font-semibold text-cream">Checksums and signatures belong beside every binary.</h2>
        </div>
        <p className="text-cream/65">
          When the artifact URLs are connected, publish the matching checksum and signature files in the same release.
        </p>
      </aside>
    </div>
  )
}
