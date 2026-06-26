const AUTH_KEY = 'homi_auth'
const PROFILE_KEY = 'homi_profile'

function readStorage(key) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function getAuth() {
  return readStorage(AUTH_KEY)
}

export function saveAuth(auth) {
  writeStorage(AUTH_KEY, {
    ...auth,
    updatedAt: new Date().toISOString(),
  })
}

export function clearAuth() {
  localStorage.removeItem(AUTH_KEY)
}

export function getProfile() {
  return readStorage(PROFILE_KEY)
}

export function saveProfile(profile) {
  writeStorage(PROFILE_KEY, {
    ...profile,
    updatedAt: new Date().toISOString(),
  })
}

export function clearProfile() {
  localStorage.removeItem(PROFILE_KEY)
}

export function hasCompletedProfile() {
  const profile = getProfile()
  return Boolean(profile?.fullName && profile?.destinationCity)
}
