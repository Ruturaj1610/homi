import { cn } from '../../utils/cn'

export default function Alert({ variant = 'error', className, children }) {
  const variants = {
    error: 'homi-alert-error',
  }

  return <p className={cn(variants[variant], className)}>{children}</p>
}
