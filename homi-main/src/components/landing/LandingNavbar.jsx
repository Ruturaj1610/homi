import { useState } from 'react'
import { landingNavLinks } from './landingData'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import { cn } from '../../utils/cn'

export default function LandingNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="homi-nav-header">
      <nav className="homi-container flex items-center justify-between py-4">
        <Logo to="/" className="group [&_span:first-child]:transition [&_span:first-child]:duration-300 group-hover:[&_span:first-child]:scale-105" />

        <ul className="hidden items-center gap-8 lg:flex">
          {landingNavLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-slate-600 transition duration-200 hover:text-slate-900">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Button to="/login" variant="ghost" className="px-4 py-2.5">
            Login
          </Button>
          <Button to="/signup" variant="primary" className="px-5 py-2.5">
            Sign Up
          </Button>
        </div>

        <button
          type="button"
          className="homi-btn-secondary px-3 py-2 lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>
      </nav>

      <div className={cn('border-t border-slate-200/80 bg-surface px-6 py-4 lg:hidden', isMenuOpen ? 'block' : 'hidden')}>
        <ul className="space-y-1">
          {landingNavLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-col gap-2">
          <Button to="/login" variant="secondary" className="w-full">
            Login
          </Button>
          <Button to="/signup" variant="primary" className="w-full">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  )
}
