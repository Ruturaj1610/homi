import { Link } from 'react-router-dom'

const stats = [
  { label: 'Connections', value: '12' },
  { label: 'Unread messages', value: '3' },
  { label: 'Profile completion', value: '60%' },
]

export default function DashboardPage() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p className="mt-2 text-slate-600">
          Your overview at a glance. Replace these cards with real metrics as your MVP evolves.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm font-medium text-slate-500">{stat.label}</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">{stat.value}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Quick actions</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              to="/connections"
              className="rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
            >
              View connections
            </Link>
            <Link
              to="/chat"
              className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Open chat
            </Link>
          </div>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Recent activity</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>New connection request from Alex.</li>
            <li>You updated your profile bio.</li>
            <li>2 new messages waiting in chat.</li>
          </ul>
        </article>
      </div>
    </section>
  )
}
