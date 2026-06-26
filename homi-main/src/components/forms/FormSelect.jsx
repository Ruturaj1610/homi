import { cn } from '../../utils/cn'
import FieldFeedback from './FieldFeedback'
import { getInvalidProps, invalidInputClassName } from './fieldStyles'
import { inputClassName } from './FormField'

export default function FormSelect({
  label,
  name,
  value,
  onChange,
  options,
  placeholder = 'Select an option',
  required = false,
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
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={cn(
          inputClassName,
          'appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 24 24%27 stroke=%27%2364748b%27%3E%3Cpath stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m19 9-7 7-7-7%27/%3E%3C/svg%3E")] bg-size-[1rem] bg-position-[right_0.75rem_center] bg-no-repeat pr-10',
          error && invalidInputClassName,
        )}
        {...getInvalidProps(error)}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <FieldFeedback error={error} hint={hint} />
    </label>
  )
}
