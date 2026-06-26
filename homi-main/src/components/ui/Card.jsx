import { cn } from '../../utils/cn'

const variants = {
  default: 'homi-card',
  muted: 'homi-card-muted',
  interactive: 'homi-card homi-card-interactive',
}

export default function Card({ as: Component = 'div', variant = 'default', className, children, ...props }) {
  return (
    <Component className={cn(variants[variant], className)} {...props}>
      {children}
    </Component>
  )
}
