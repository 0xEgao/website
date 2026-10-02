import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import MotionBackground from './MotionBackground'

export default function Layout() {
  const { pathname, hash } = useLocation()

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
