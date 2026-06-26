import { cn } from '../../utils/cn'
import FieldFeedback from './FieldFeedback'
import { getInvalidProps, invalidInputClassName } from './fieldStyles'

export const inputClassName = 'homi-input'

export default function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  error,
  hint,
  className,
  ...props
}) {
  return (
    <label className={cn('block space-y-2', className)}>
      <span className="text-sm font-medium text-slate-700">
        {label}
        {required && <span className="text-homi-600"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(inputClassName, error && invalidInputClassName)}
        {...getInvalidProps(error)}
        {...props}
      />
      <FieldFeedback error={error} hint={hint} />
    </label>
  )
}
