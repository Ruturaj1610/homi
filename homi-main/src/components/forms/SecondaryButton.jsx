import Button from '../ui/Button'

export default function SecondaryButton({ children, className, ...props }) {
  return (
    <Button variant="secondary" fullWidth className={className} {...props}>
      {children}
    </Button>
  )
}
