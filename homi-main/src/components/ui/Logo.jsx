import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'

const logoMarkStyles = {
  default: 'bg-slate-900 text-white shadow-lg shadow-slate-900/10',
  inverted: 'bg-white text-slate-900',
}

export default function Logo({
  to = '/',
  className,
  variant = 'default',
  theme = 'light',
  showWordmark = true,
}) {
  const content = (
    <>
      <span
        className={cn(
          'flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-bold transition duration-300',
          logoMarkStyles[variant],
        )}
      >
        H
      </span>
      {showWordmark && (
        <span
          className={cn(
            'text-xl font-semibold tracking-tight',
            theme === 'dark' ? 'text-white' : 'text-slate-900',
          )}
        >
          Homi
        </span>
      )}
    </>
  )

  const classes = cn('inline-flex items-center gap-3', className)

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    )
  }

  return <div className={classes}>{content}</div>
}
