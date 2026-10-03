import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout/Layout'

// Lazy-loaded pages for code splitting
const Landing = lazy(() => import('@/pages/Landing/Landing'))
const Capabilities = lazy(() => import('@/pages/Capabilities/Capabilities'))
const Partners = lazy(() => import('@/pages/Partners/Partners'))
const Difference = lazy(() => import('@/pages/Difference/Difference'))
const Clients = lazy(() => import('@/pages/Clients/Clients'))
const ClientDetail = lazy(() => import('@/pages/Clients/ClientDetail'))
const Team = lazy(() => import('@/pages/Team/Team'))
const Blogs = lazy(() => import('@/pages/Blogs/Blogs'))
const BlogDetail = lazy(() => import('@/pages/Blogs/BlogDetail'))
const Careers = lazy(() => import('@/pages/Careers/Careers'))
const AllJobs = lazy(() => import('@/pages/Careers/AllJobs'))
const JobDetail = lazy(() => import('@/pages/Careers/JobDetail'))
const Accelerators = lazy(() => import('@/pages/Accelerators/Accelerators'))
const Contact = lazy(() => import('@/pages/Contact/Contact'))
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'capabilities', element: <Capabilities /> },
      { path: 'partners', element: <Partners /> },
      { path: 'difference', element: <Difference /> },
      { path: 'clients', element: <Clients /> },
      { path: 'clients/:slug', element: <ClientDetail /> },
      { path: 'team', element: <Team /> },
      { path: 'blogs', element: <Blogs /> },
      { path: 'blogs/:slug', element: <BlogDetail /> },
      { path: 'careers', element: <Careers /> },
      { path: 'careers/jobs', element: <AllJobs /> },
      { path: 'careers/jobs/:slug', element: <JobDetail /> },
      { path: 'accelerators', element: <Accelerators /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default function App() {
  return (
    <Suspense fallback={null}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
