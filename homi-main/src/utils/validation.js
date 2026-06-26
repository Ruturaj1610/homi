export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateRequired(value, message = 'This field is required.') {
  if (!String(value ?? '').trim()) return message
  return ''
}

export function validateEmail(value) {
  const trimmed = String(value ?? '').trim()
  if (!trimmed) return 'Email is required.'
  if (!EMAIL_REGEX.test(trimmed)) return 'Enter a valid email address (e.g. you@example.com).'
  return ''
}

export function validatePassword(value) {
  const password = String(value ?? '')
  if (!password) return 'Password is required.'
  if (password.length < 8) return 'Password must be at least 8 characters.'
  return ''
}

export function validateConfirmPassword(password, confirmPassword) {
  const confirmed = String(confirmPassword ?? '')
  if (!confirmed) return 'Please confirm your password.'
  if (password !== confirmed) return 'Passwords do not match.'
  return ''
}

export const profileRequiredFields = {
  fullName: 'Full name is required.',
  college: 'College is required.',
  hometown: 'Hometown is required.',
  destinationCity: 'Destination city is required.',
}

export function validateProfileFields(form, fields = Object.keys(profileRequiredFields)) {
  const errors = {}

  fields.forEach((field) => {
    const message = profileRequiredFields[field]
    if (!message) return
    const error = validateRequired(form[field], message)
    if (error) errors[field] = error
  })

  return errors
}

export function validateProfileStep(step, form) {
  switch (step) {
    case 0:
      return validateProfileFields(form, ['fullName'])
    case 1:
      return validateProfileFields(form, ['college', 'hometown'])
    case 2:
      return validateProfileFields(form, ['destinationCity'])
    default:
      return {}
  }
}

export function validateProfileForm(form) {
  return validateProfileFields(form)
}
