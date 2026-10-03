import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { useScrollToTop } from '@/hooks/useScrollToTop'

function PageLoader() {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#525252',
        fontSize: '0.875rem',
      }}
    >
      Loading…
    </div>
  )
}

export function Layout() {
  useScrollToTop()

  return (
    <>
      <Header />
      <div className="page-wrapper">
        <main id="main-content">
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  )
}
