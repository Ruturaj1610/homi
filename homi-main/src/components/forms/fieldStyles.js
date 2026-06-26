export function getInvalidProps(error) {
  return error ? { 'aria-invalid': true } : {}
}

export const invalidInputClassName =
  'border-red-300 focus:border-red-400 focus:ring-red-100 aria-invalid:border-red-300'
