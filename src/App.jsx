import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'

const Home = lazy(() => import('./pages/Home'))
const Developers = lazy(() => import('./pages/Developers'))
const Apps = lazy(() => import('./pages/Apps'))
const Downloads = lazy(() => import('./pages/Downloads'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="developers" element={<Developers />} />
            <Route path="apps" element={<Apps />} />
            <Route path="downloads" element={<Downloads />} />

            <Route path="how-it-works" element={<Navigate to="/developers" replace />} />
            <Route path="docs" element={<Navigate to="/developers" replace />} />
            <Route path="takers" element={<Navigate to="/apps#wallet" replace />} />
            <Route path="makers" element={<Navigate to="/apps#router" replace />} />
            <Route path="market" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
