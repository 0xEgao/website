import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'

const Home = lazy(() => import('./pages/Home'))
const Developers = lazy(() => import('./pages/Developers'))
const Apps = lazy(() => import('./pages/Apps'))
const Market = lazy(() => import('./pages/Market'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="developers" element={<Developers />} />
            <Route path="portal" element={<Apps />} />
            <Route path="market" element={<Market />} />

            <Route path="apps" element={<Navigate to="/portal" replace />} />
            <Route path="downloads" element={<Navigate to="/portal#downloads" replace />} />
            <Route path="how-it-works" element={<Navigate to="/developers" replace />} />
            <Route path="docs" element={<Navigate to="/developers" replace />} />
            <Route path="takers" element={<Navigate to="/portal#wallet" replace />} />
            <Route path="makers" element={<Navigate to="/portal#router" replace />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
