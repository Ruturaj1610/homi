import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
  const { pathname } = useLocation()
  const isLandingPage = pathname === '/'

  if (isLandingPage) {
    return <Outlet />
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-10 lg:px-8">
        <Outlet />
      </main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-sm text-slate-500 lg:px-8">
          <p>&copy; {new Date().getFullYear()} Homi. All rights reserved.</p>
          <p>MVP preview</p>
        </div>
      </footer>
    </div>
  )
}
