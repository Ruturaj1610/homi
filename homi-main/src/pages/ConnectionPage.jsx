import { Link } from 'react-router-dom'

const connections = [
  { id: 1, name: 'Alex Rivera', role: 'Product Designer', status: 'Connected' },
  { id: 2, name: 'Sam Chen', role: 'Software Engineer', status: 'Pending' },
  { id: 3, name: 'Jordan Lee', role: 'Founder', status: 'Connected' },
]

export default function ConnectionPage() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Connections</h1>
        <p className="mt-2 text-slate-600">
          Manage your network. This page uses placeholder data until backend integration is added.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <ul className="divide-y divide-slate-200">
          {connections.map((connection) => (
            <li
              key={connection.id}
              className="flex flex-col gap-4 px-6 py-5 lg:flex-row lg:items-center lg:justify-between"
            >
              <div>
                <p className="font-semibold text-slate-900">{connection.name}</p>
                <p className="text-sm text-slate-600">{connection.role}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  {connection.status}
                </span>
                <Link
                  to="/chat"
                  className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Message
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
