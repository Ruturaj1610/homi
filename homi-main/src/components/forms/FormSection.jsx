import { cn } from '../../utils/cn'

export default function FormSection({ title, description, children, className }) {
  return (
    <section className={cn('space-y-5', className)}>
      <div>
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        {description && <p className="mt-1 text-sm text-slate-600">{description}</p>}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">{children}</div>
    </section>
  )
}
