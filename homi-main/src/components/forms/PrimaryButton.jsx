import Button from '../ui/Button'

export default function PrimaryButton({ children, className, ...props }) {
  return (
    <Button variant="primary" fullWidth className={className} {...props}>
      {children}
    </Button>
  )
}
