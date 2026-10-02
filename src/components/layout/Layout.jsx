import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import MotionBackground from './MotionBackground'
import { socialPageFor } from '../../constants/socialPages'

export default function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const page = socialPageFor(pathname)
    const setMeta = (selector, value) => {
      const tag = document.head.querySelector(selector)
      if (tag) tag.setAttribute('content', value)
    }

    if (pathname.replace(/\/$/, '') !== '/developers') document.title = page.title
    setMeta('meta[name="description"]', page.description)
    setMeta('meta[property="og:title"]', page.title)
    setMeta('meta[property="og:description"]', page.description)
    setMeta('meta[property="og:url"]', page.url)
    setMeta('meta[property="og:image"]', page.image)
    setMeta('meta[property="og:image:alt"]', page.imageAlt)
    setMeta('meta[name="twitter:title"]', page.title)
    setMeta('meta[name="twitter:description"]', page.description)
    setMeta('meta[name="twitter:image"]', page.image)
    setMeta('meta[name="twitter:image:alt"]', page.imageAlt)

    const canonical = document.head.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', page.url)
  }, [pathname])

  useEffect(() => {
    if (hash) {
      let frame = 0
      let attempts = 0

      const scrollToTarget = () => {
        const target = document.getElementById(hash.slice(1))

        if (target) {
          target.scrollIntoView({ behavior: 'auto', block: 'start' })
          return
        }

        if (attempts < 12) {
          attempts += 1
          frame = window.requestAnimationFrame(scrollToTarget)
        }
      }

      frame = window.requestAnimationFrame(scrollToTarget)
      return () => window.cancelAnimationFrame(frame)
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return (
    <div className="relative isolate flex min-h-screen flex-col bg-navy text-black">
      <MotionBackground />
      <Header />
      <main className="relative z-10 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
