import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { SOCIAL_PAGES, socialPageFor } from '../src/constants/socialPages.js'

const dist = new URL('../dist/', import.meta.url)
const start = '<!-- social-meta:start -->'
const end = '<!-- social-meta:end -->'
const template = await readFile(new URL('index.html', dist), 'utf8')
const before = template.indexOf(start)
const after = template.indexOf(end)

if (before < 0 || after < before) {
  throw new Error('Social metadata markers are missing from dist/index.html')
}

function escapeHtml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;')
}

function tags(path) {
  const { title, description, image, imageAlt, url } = socialPageFor(path)
  const property = (name, value) => `    <meta property="${name}" content="${escapeHtml(value)}" />`
  const named = (name, value) => `    <meta name="${name}" content="${escapeHtml(value)}" />`

  return [
    start,
    `    <title>${escapeHtml(title)}</title>`,
    named('description', description),
    `    <link rel="canonical" href="${url}" />`,
    property('og:type', 'website'),
    property('og:site_name', 'OpenSwap'),
    property('og:title', title),
    property('og:description', description),
    property('og:url', url),
    property('og:image', image),
    property('og:image:type', 'image/png'),
    property('og:image:width', '1200'),
    property('og:image:height', '630'),
    property('og:image:alt', imageAlt),
    named('twitter:card', 'summary_large_image'),
    named('twitter:title', title),
    named('twitter:description', description),
    named('twitter:image', image),
    named('twitter:image:alt', imageAlt),
    end,
  ].join('\n')
}

for (const path of Object.keys(SOCIAL_PAGES)) {
  const destination = path === '/' ? new URL('index.html', dist) : new URL(`${path.slice(1)}/index.html`, dist)
  const html = template.slice(0, before) + tags(path) + template.slice(after + end.length)
  if (path !== '/') await mkdir(new URL(`${path.slice(1)}/`, dist), { recursive: true })
  await writeFile(destination, html)
  console.log(`Social metadata: ${join('dist', path === '/' ? 'index.html' : `${path.slice(1)}/index.html`)}`)
}
