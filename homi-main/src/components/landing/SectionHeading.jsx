import { cn } from '../../utils/cn'

export default function SectionHeading({ eyebrow, title, description, align = 'center', className }) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && <p className="homi-eyebrow">{eyebrow}</p>}
      <h2 className={cn('homi-title-section', eyebrow ? 'mt-3' : '')}>{title}</h2>
      {description && <p className="homi-subtitle mt-4 sm:text-lg">{description}</p>}
    </div>
  )
}
