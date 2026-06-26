import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormField from '../components/forms/FormField'
import FormSection from '../components/forms/FormSection'
import FormSelect from '../components/forms/FormSelect'
import FormTextarea from '../components/forms/FormTextarea'
import PrimaryButton from '../components/forms/PrimaryButton'
import ProgressSteps from '../components/forms/ProgressSteps'
import SecondaryButton from '../components/forms/SecondaryButton'
import Logo from '../components/ui/Logo'
import PageHeader from '../components/ui/PageHeader'
import { lifestyleOptions, profileFromStorage, profileSteps } from '../data/profileForm'
import { getAuth, getProfile, saveProfile } from '../utils/authStorage'
import { validateProfileForm, validateProfileStep } from '../utils/validation'
import { cn } from '../utils/cn'

export default function ProfileSetupPage() {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(0)
  const [form, setForm] = useState(() => profileFromStorage(getProfile(), getAuth()))
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    const updatedForm = { ...form, [name]: value }
    setForm(updatedForm)

    if (!errors[name]) return

    const stepErrors = validateProfileStep(currentStep, updatedForm)
    setErrors((current) => {
      const next = { ...current }
      if (stepErrors[name]) next[name] = stepErrors[name]
      else delete next[name]
      return next
    })
  }

  const applyStepValidation = (step) => {
    const stepErrors = validateProfileStep(step, form)
    setErrors((current) => {
      const next = { ...current }
      Object.entries(stepErrors).forEach(([field, message]) => {
        next[field] = message
      })
      Object.keys(profileStepForField).forEach((field) => {
        if (profileStepForField[field] === step && !stepErrors[field]) {
          delete next[field]
        }
      })
      return next
    })
    return stepErrors
  }

  const handleNext = () => {
    const stepErrors = applyStepValidation(currentStep)
    if (Object.keys(stepErrors).length > 0) return
    setCurrentStep((step) => Math.min(step + 1, profileSteps.length - 1))
  }

  const handleBack = () => {
    setCurrentStep((step) => Math.max(step - 1, 0))
  }

  const handleSave = (event) => {
    event.preventDefault()

    const formErrors = validateProfileForm(form)
    setErrors(formErrors)

    if (Object.keys(formErrors).length > 0) {
      const firstInvalidStep = findFirstInvalidStep(formErrors)
      if (firstInvalidStep !== currentStep) {
        setCurrentStep(firstInvalidStep)
      }
      return
    }

    saveProfile(form)
    navigate('/dashboard')
  }

  return (
    <section className="mx-auto w-full max-w-3xl py-4">
      <Logo to="/" className="mb-8" />

      <div className="homi-card">
        <PageHeader
          eyebrow="Onboarding"
          title="Set up your profile"
          description="Help Homi match you with compatible flatmates and familiar connections in your destination city."
          align="left"
        />

        <div className="mt-8">
          <ProgressSteps steps={profileSteps} currentStep={currentStep} />
        </div>

        <form className="mt-10 space-y-8" noValidate onSubmit={handleSave}>
          {currentStep === 0 && (
            <FormSection
              title="Personal Information"
              description="Tell people who you are and how you'd like to appear on Homi."
            >
              <FormField
                label="Full Name"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Jane Doe"
                required
                error={errors.fullName}
                hint="This is shown on your public profile."
                className="sm:col-span-2"
              />
              <FormField
                label="Profile Picture URL"
                name="profilePictureUrl"
                type="url"
                value={form.profilePictureUrl}
                onChange={handleChange}
                placeholder="https://example.com/photo.jpg"
                hint="Optional. Paste a link to your profile photo."
                className="sm:col-span-2"
              />
              <FormTextarea
                label="Short Bio"
                name="shortBio"
                value={form.shortBio}
                onChange={handleChange}
                placeholder="Share a little about yourself, your move, and what kind of connections you're looking for."
                hint="Optional. A few sentences help others understand your context."
                className="sm:col-span-2"
              />
            </FormSection>
          )}

          {currentStep === 1 && (
            <FormSection
              title="Background"
              description="Shared roots help Homi surface the most meaningful matches."
            >
              <FormField
                label="College"
                name="college"
                value={form.college}
                onChange={handleChange}
                placeholder="University or college name"
                required
                error={errors.college}
                hint="Where you studied or are currently enrolled."
              />
              <FormField
                label="School"
                name="school"
                value={form.school}
                onChange={handleChange}
                placeholder="School name"
                hint="Optional. Earlier education or school name."
              />
              <FormField
                label="Hometown"
                name="hometown"
                value={form.hometown}
                onChange={handleChange}
                placeholder="City you grew up in"
                required
                error={errors.hometown}
                hint="Helps match you with people from the same roots."
              />
              <FormField
                label="Company"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Current or previous workplace"
                hint="Optional. Useful for professional connections."
              />
            </FormSection>
          )}

          {currentStep === 2 && (
            <FormSection
              title="Relocation Information"
              description="Where you're headed and what kind of living setup you're looking for."
            >
              <FormField
                label="Destination City"
                name="destinationCity"
                value={form.destinationCity}
                onChange={handleChange}
                placeholder="Berlin, Bangalore, London..."
                required
                error={errors.destinationCity}
                hint="The city you're moving to or exploring."
              />
              <FormField
                label="Preferred Area"
                name="preferredArea"
                value={form.preferredArea}
                onChange={handleChange}
                placeholder="Neighbourhood or district"
                hint="Optional. Narrow matches to a specific area."
              />
              <FormField
                label="Monthly Budget"
                name="monthlyBudget"
                value={form.monthlyBudget}
                onChange={handleChange}
                placeholder="e.g. ₹25,000 or €800"
                hint="Optional. Helps find flatmates in your price range."
                className="sm:col-span-2"
              />
            </FormSection>
          )}

          {currentStep === 3 && (
            <FormSection
              title="Lifestyle Preferences"
              description="These details help you find flatmates and connections who fit your daily rhythm."
            >
              <FormSelect
                label="Smoking Preference"
                name="smokingPreference"
                value={form.smokingPreference}
                onChange={handleChange}
                options={lifestyleOptions.smoking}
                hint="Optional. Choose what best describes you."
              />
              <FormSelect
                label="Food Preference"
                name="foodPreference"
                value={form.foodPreference}
                onChange={handleChange}
                options={lifestyleOptions.food}
                hint="Optional. Helps with shared kitchen planning."
              />
              <FormSelect
                label="Sleep Schedule"
                name="sleepSchedule"
                value={form.sleepSchedule}
                onChange={handleChange}
                options={lifestyleOptions.sleep}
                hint="Optional. Useful for compatible flatmate matching."
                className="sm:col-span-2"
              />
            </FormSection>
          )}

          <div
            className={cn(
              'flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-between',
              currentStep === 0 && 'sm:justify-end',
            )}
          >
            {currentStep > 0 && (
              <SecondaryButton type="button" onClick={handleBack} className="sm:w-auto sm:min-w-[140px]">
                Back
              </SecondaryButton>
            )}

            {currentStep < profileSteps.length - 1 ? (
              <PrimaryButton type="button" onClick={handleNext} className="sm:ml-auto sm:w-auto sm:min-w-[140px]">
                Continue
              </PrimaryButton>
            ) : (
              <PrimaryButton type="submit" className="sm:ml-auto sm:w-auto sm:min-w-[180px]">
                Save Profile
              </PrimaryButton>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

const profileStepForField = {
  fullName: 0,
  college: 1,
  hometown: 1,
  destinationCity: 2,
}

function findFirstInvalidStep(formErrors) {
  const orderedFields = ['fullName', 'college', 'hometown', 'destinationCity']
  const firstInvalidField = orderedFields.find((field) => formErrors[field])
  return firstInvalidField ? profileStepForField[firstInvalidField] : 0
}
