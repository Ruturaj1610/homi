import Logo from '../ui/Logo'
import PageHeader from '../ui/PageHeader'

export default function AuthPageLayout({ title, subtitle, children, footer }) {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-12rem)] w-full max-w-md flex-col justify-center py-4 lg:max-w-lg">
      <Logo to="/" className="mb-8 self-center" />

      <div className="homi-card">
        <PageHeader title={title} description={subtitle} />
        {children}
      </div>

      {footer && <div className="mt-6 text-center text-sm text-slate-600">{footer}</div>}
    </section>
  )
}
