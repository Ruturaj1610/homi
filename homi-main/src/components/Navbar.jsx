import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../data/navigation'
import { cn } from '../utils/cn'

const linkClassName = ({ isActive }) =>
  cn(
    'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
    isActive
      ? 'bg-brand-600 text-white'
      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
  )

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-sm font-bold text-white">
            H
          </span>
          <span className="text-xl font-semibold tracking-tight text-slate-900">Homi</span>
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>

        <ul
          className={cn(
            'absolute left-0 right-0 top-full flex flex-col gap-1 border-b border-slate-200 bg-white px-6 py-4 lg:static lg:flex lg:flex-row lg:items-center lg:gap-1 lg:border-0 lg:bg-transparent lg:p-0',
            isMenuOpen ? 'block' : 'hidden lg:flex',
          )}
        >
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} className={linkClassName} end={link.path === '/'}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
