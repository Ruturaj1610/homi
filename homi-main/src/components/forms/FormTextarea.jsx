import { cn } from '../../utils/cn'
import FieldFeedback from './FieldFeedback'
import { getInvalidProps, invalidInputClassName } from './fieldStyles'
import { inputClassName } from './FormField'

export default function FormTextarea({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  rows = 4,
  error,
  hint,
  className,
}) {
  return (
    <label className={cn('block space-y-2', className)}>
      <span className="text-sm font-medium text-slate-700">
        {label}
        {required && <span className="text-homi-600"> *</span>}
      </span>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={cn(inputClassName, 'min-h-[112px] resize-y', error && invalidInputClassName)}
        {...getInvalidProps(error)}
      />
      <FieldFeedback error={error} hint={hint} />
    </label>
  )
}
