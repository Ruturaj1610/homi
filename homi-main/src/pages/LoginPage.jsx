import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthPageLayout from '../components/forms/AuthPageLayout'
import FormDivider from '../components/forms/FormDivider'
import FormField from '../components/forms/FormField'
import GoogleAuthButton from '../components/forms/GoogleAuthButton'
import PrimaryButton from '../components/forms/PrimaryButton'
import Alert from '../components/ui/Alert'
import TextLink from '../components/ui/TextLink'
import { getAuth, getProfile, hasCompletedProfile, saveAuth } from '../utils/authStorage'

function decodeGoogleToken(token) {
  try {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join(''),
    )
    return JSON.parse(jsonPayload)
  } catch (error) {
    console.error('Error decoding Google ID token:', error)
    return null
  }
}

export default function LoginPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setError('')
  }

  const completeLogin = (email) => {
    const existingAuth = getAuth()
    saveAuth({
      ...existingAuth,
      email,
      loggedIn: true,
      provider: existingAuth?.provider || 'email',
    })

    if (hasCompletedProfile()) {
      navigate('/dashboard')
    } else {
      navigate('/profile-setup')
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!form.email.trim() || !form.password.trim()) {
      setError('Please enter your email and password.')
      return
    }

    completeLogin(form.email.trim())
  }

  const handleGoogleLogin = () => {
    // Simulated Google login for testing when Client ID is not provided
    const email = 'google.user@example.com'
    const fullName = 'Google User'
    const profilePictureUrl = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80'
    
    saveAuth({
      email,
      fullName,
      profilePictureUrl,
      loggedIn: true,
      provider: 'google-mock',
    })

    if (hasCompletedProfile()) {
      navigate('/dashboard')
    } else {
      navigate('/profile-setup')
    }
  }

  const handleGoogleSuccess = (credentialResponse) => {
    const token = credentialResponse.credential
    const decoded = decodeGoogleToken(token)

    if (decoded) {
      const email = decoded.email
      const fullName = decoded.name
      const profilePictureUrl = decoded.picture

      saveAuth({
        email,
        fullName,
        profilePictureUrl,
        loggedIn: true,
        provider: 'google',
      })

      if (hasCompletedProfile()) {
        navigate('/dashboard')
      } else {
        navigate('/profile-setup')
      }
    } else {
      setError('Failed to sign in with Google: invalid token payload.')
    }
  }

  const handleGoogleError = () => {
    setError('Google Sign-In was unsuccessful. Please try again.')
  }

  return (
    <AuthPageLayout
      title="Welcome back"
      subtitle="Sign in to continue finding familiar faces in your new city."
      footer={
        <>
          Don&apos;t have an account?{' '}
          <Link to="/signup" className="homi-link">
            Create Account
          </Link>
        </>
      }
    >
      <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
        <FormField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
          autoComplete="email"
        />
        <FormField
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
          autoComplete="current-password"
        />

        <div className="flex justify-end">
          <TextLink href="#">Forgot Password</TextLink>
        </div>

        {error && <Alert>{error}</Alert>}

        <PrimaryButton type="submit">Login</PrimaryButton>
      </form>

      <FormDivider />

      <GoogleAuthButton
        clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
        onSuccess={handleGoogleSuccess}
        onError={handleGoogleError}
        onClick={handleGoogleLogin}
      />

      {getProfile() && (
        <p className="mt-6 text-center text-xs text-slate-500">
          Your saved profile for {getProfile()?.fullName || 'your account'} is stored locally on this device.
        </p>
      )}
    </AuthPageLayout>
  )
}
