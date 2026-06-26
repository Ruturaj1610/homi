import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'

const variants = {
  primary: 'homi-btn-primary',
  secondary: 'homi-btn-secondary',
  ghost: 'homi-btn-ghost',
}

export default function Button({
  variant = 'primary',
  to,
  href,
  className,
  children,
  fullWidth = false,
  ...props
}) {
  const classes = cn(variants[variant], fullWidth && 'w-full', className)

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
