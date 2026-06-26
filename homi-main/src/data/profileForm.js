export const lifestyleOptions = {
  smoking: [
    { value: 'non-smoker', label: 'Non-smoker' },
    { value: 'occasional', label: 'Occasional smoker' },
    { value: 'smoker', label: 'Smoker' },
    { value: 'no-preference', label: 'No preference' },
  ],
  food: [
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'non-vegetarian', label: 'Non-vegetarian' },
    { value: 'vegan', label: 'Vegan' },
    { value: 'eggetarian', label: 'Eggetarian' },
    { value: 'no-preference', label: 'No preference' },
  ],
  sleep: [
    { value: 'early-bird', label: 'Early bird (before 11 PM)' },
    { value: 'night-owl', label: 'Night owl (after 11 PM)' },
    { value: 'flexible', label: 'Flexible' },
    { value: 'no-preference', label: 'No preference' },
  ],
}

export const profileSteps = [
  'Personal',
  'Background',
  'Relocation',
  'Lifestyle',
]

export const initialProfileForm = {
  fullName: '',
  profilePictureUrl: '',
  shortBio: '',
  college: '',
  school: '',
  hometown: '',
  company: '',
  destinationCity: '',
  preferredArea: '',
  monthlyBudget: '',
  smokingPreference: '',
  foodPreference: '',
  sleepSchedule: '',
}

export function profileFromStorage(stored, auth) {
  return {
    ...initialProfileForm,
    fullName: stored?.fullName || auth?.fullName || '',
    profilePictureUrl: stored?.profilePictureUrl || auth?.profilePictureUrl || '',
    ...stored,
  }
}
