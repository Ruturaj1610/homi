import { cn } from '../../utils/cn'

export default function PageHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}) {
  return (
    <header className={cn(align === 'center' && 'text-center', className)}>
      {eyebrow && <p className="homi-eyebrow">{eyebrow}</p>}
      <h1 className={cn('homi-title-page', eyebrow ? 'mt-3' : '')}>{title}</h1>
      {description && <p className={cn('homi-subtitle mt-2', align === 'center' && 'mx-auto max-w-xl')}>{description}</p>}
    </header>
  )
}
