import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'

export default function TextLink({ to, href, className, children, ...props }) {
  const classes = cn('homi-link-muted', className)

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  )
}
