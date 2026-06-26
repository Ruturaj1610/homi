export default function FieldFeedback({ error, hint }) {
  if (error) {
    return <span className="text-xs text-red-600">{error}</span>
  }

  if (hint) {
    return <span className="text-xs text-slate-500">{hint}</span>
  }

  return null
}
