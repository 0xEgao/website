import { Download, FileArchive, MonitorDown } from 'lucide-react'
import { LINKS } from '../../constants/links'

const DOWNLOAD_GROUPS = [
  {
    id: 'portal-desktop',
    label: 'Portal Desktop',
    description: 'Install the native Wallet and Router application on macOS or Linux.',
    icon: 'monitor',
    files: [
      { name: 'portal-linux-amd64-appimage', href: LINKS.portal_linux_amd64_appimage },
      { name: 'portal-linux-amd64-deb', href: LINKS.portal_linux_amd64_deb },
      { name: 'portal-linux-x86_64-rpm', href: LINKS.portal_linux_x86_64_rpm },
      { name: 'portal-mac-universal-app', href: LINKS.portal_mac_universal_app },
      { name: 'portal-mac-universal-dmg', href: LINKS.portal_mac_universal_dmg },
    ],
  },
  {
    id: 'portal-server-downloads',
    label: 'Portal Server',
    description: 'Run the same Wallet and Router console from a self-hosted headless server.',
    icon: 'archive',
    files: [
      { name: 'portal-server-linux-arm64', href: LINKS.portal_server_linux_arm64 },
      { name: 'portal-server-linux-x86_64', href: LINKS.portal_server_linux_x86_64 },
      { name: 'portal-server-mac-universal', href: LINKS.portal_server_mac_universal },
    ],
  },
]

function DownloadRow({ file }) {
  return (
    <a
      href={file.href}
      target="_blank"
      rel="noopener noreferrer"
      className="download-row"
      aria-label={`Download ${file.name}`}
    >
      <p className="download-row__name">{file.name}</p>
      <span className="download-row__action">
        Download
        <Download size={15} aria-hidden="true" />
      </span>
    </a>
  )
}

export default function PortalDownloads() {
  return (
    <section id="downloads" className="portal-section portal-downloads scroll-mt-28" aria-labelledby="portal-downloads-title">
      <div className="portal-section__heading">
        <div>
          <p className="section-label mb-3">// Get Portal</p>
          <h2 id="portal-downloads-title" className="portal-section__title font-display font-semibold text-cream">
            Choose your Portal build.
          </h2>
        </div>
        <p className="portal-copy max-w-xl text-cream/65">
          Install Portal Desktop for a native experience, or run Portal Server on a self-hosted machine.
        </p>
      </div>

      <div className="download-catalog">
        {DOWNLOAD_GROUPS.map(({ id, label, description, icon, files }, index) => (
          <section key={id} id={id} className="download-group scroll-mt-28">
            <div className="download-group__intro">
              <span className="download-group__index">0{index + 1}</span>
              {icon === 'archive'
                ? <FileArchive size={24} strokeWidth={1.6} aria-hidden="true" />
                : <MonitorDown size={24} strokeWidth={1.6} aria-hidden="true" />}
              <h3 className="font-display font-semibold text-cream">{label}</h3>
              <p className="text-cream/65">{description}</p>
            </div>
            <div className="download-group__files">
              {files.map(file => <DownloadRow key={file.href} file={file} />)}
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}
