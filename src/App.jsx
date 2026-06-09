import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'

const Home = lazy(() => import('./pages/Home'))
const HowItWorks = lazy(() => import('./pages/HowItWorks'))
const Takers = lazy(() => import('./pages/Takers'))
const Makers = lazy(() => import('./pages/Makers'))
const Market = lazy(() => import('./pages/Market'))
const Docs = lazy(() => import('./pages/Docs'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="how-it-works" element={<HowItWorks />} />
            <Route path="takers" element={<Takers />} />
            <Route path="makers" element={<Makers />} />
            <Route path="market" element={<Market />} />
            <Route path="docs" element={<Docs />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
