import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthPageLayout from '../components/forms/AuthPageLayout'
import FormField from '../components/forms/FormField'
import PrimaryButton from '../components/forms/PrimaryButton'
import {
  validateConfirmPassword,
  validateEmail,
  validatePassword,
  validateRequired,
} from '../utils/validation'
import { saveAuth } from '../utils/authStorage'

const initialForm = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export default function SignupPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    const updatedForm = { ...form, [name]: value }
    setForm(updatedForm)

    if (submitted) {
      setErrors((current) => {
        const next = {
          ...current,
          [name]: validateSignupField(name, value, updatedForm),
        }

        if (name === 'password' && updatedForm.confirmPassword) {
          next.confirmPassword = validateConfirmPassword(value, updatedForm.confirmPassword)
        }

        return next
      })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)

    const nextErrors = validateSignupForm(form)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) return

    saveAuth({
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      loggedIn: true,
      provider: 'email',
    })

    navigate('/profile-setup')
  }

  return (
    <AuthPageLayout
      title="Create your account"
      subtitle="Join Homi and start building your circle before you arrive in a new city."
      footer={
        <>
          Already have an account?{' '}
          <Link to="/login" className="homi-link">
            Login
          </Link>
        </>
      }
    >
      <form className="mt-8 space-y-4" noValidate onSubmit={handleSubmit}>
        <FormField
          label="Full Name"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder="Jane Doe"
          required
          autoComplete="name"
          error={errors.fullName}
          hint="Use the name you'd like others to see on Homi."
        />
        <FormField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
          autoComplete="email"
          error={errors.email}
          hint="We'll use this for login and account recovery."
        />
        <FormField
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Create a password"
          required
          autoComplete="new-password"
          error={errors.password}
          hint="Minimum 8 characters."
        />
        <FormField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={form.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
          required
          autoComplete="new-password"
          error={errors.confirmPassword}
          hint="Must match the password above."
        />

        <PrimaryButton type="submit">Create Account</PrimaryButton>
      </form>
    </AuthPageLayout>
  )
}

function validateSignupField(name, value, form) {
  switch (name) {
    case 'fullName':
      return validateRequired(value, 'Full name is required.')
    case 'email':
      return validateEmail(value)
    case 'password':
      return validatePassword(value)
    case 'confirmPassword':
      return validateConfirmPassword(form.password, value)
    default:
      return ''
  }
}

function validateSignupForm(form) {
  const nextErrors = {}

  const fullNameError = validateRequired(form.fullName, 'Full name is required.')
  if (fullNameError) nextErrors.fullName = fullNameError

  const emailError = validateEmail(form.email)
  if (emailError) nextErrors.email = emailError

  const passwordError = validatePassword(form.password)
  if (passwordError) nextErrors.password = passwordError

  const confirmPasswordError = validateConfirmPassword(form.password, form.confirmPassword)
  if (confirmPasswordError) nextErrors.confirmPassword = confirmPasswordError

  return nextErrors
}
