import { cn } from '../../utils/cn'

export default function ProgressSteps({ steps, currentStep }) {
  const progress = ((currentStep + 1) / steps.length) * 100

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-slate-700">
          Step {currentStep + 1} of {steps.length}
        </span>
        <span className="text-slate-500">{steps[currentStep]}</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-homi-400 to-homi-600 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <ol className="hidden gap-2 sm:grid sm:grid-cols-4">
        {steps.map((step, index) => (
          <li
            key={step}
            className={cn(
              'rounded-xl px-3 py-2 text-center text-xs font-medium transition duration-300',
              index <= currentStep
                ? 'bg-homi-50 text-homi-700 ring-1 ring-homi-100'
                : 'bg-slate-50 text-slate-400',
            )}
          >
            {step}
          </li>
        ))}
      </ol>
    </div>
  )
}
