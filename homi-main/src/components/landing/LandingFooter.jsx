import { footerLinks } from './landingData'
import Logo from '../ui/Logo'
import Button from '../ui/Button'

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-slate-300 transition duration-200 hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function LandingFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="homi-container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div className="max-w-sm">
            <Logo to="/" variant="inverted" theme="dark" />
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              Find familiar faces in unfamiliar cities. Homi helps relocating students and young
              professionals discover compatible flatmates and meaningful local connections.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/signup" variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100">
                Get Started
              </Button>
              <Button
                to="/login"
                variant="secondary"
                className="border-white/15 bg-transparent text-white hover:border-white/30 hover:bg-white/5"
              >
                Login
              </Button>
            </div>
          </div>

          <FooterColumn title="Product" links={footerLinks.product} />
          <FooterColumn title="Company" links={footerLinks.company} />
          <FooterColumn title="Legal" links={footerLinks.legal} />
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Homi. All rights reserved.</p>
          <p>Built for people starting fresh in new cities.</p>
        </div>
      </div>
    </footer>
  )
}
