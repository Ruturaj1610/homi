const messages = [
  { id: 1, sender: 'Alex Rivera', preview: 'Hey! Are you free to chat this week?', time: '2m ago' },
  { id: 2, sender: 'Sam Chen', preview: 'Thanks for connecting on Homi.', time: '1h ago' },
  { id: 3, sender: 'Jordan Lee', preview: 'Let me know when you want to sync.', time: 'Yesterday' },
]

export default function ChatPage() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Chat</h1>
        <p className="mt-2 text-slate-600">
          Your conversations live here. This is placeholder UI for the messaging experience.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <aside className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-4 py-4">
            <h2 className="font-semibold text-slate-900">Inbox</h2>
          </div>
          <ul className="divide-y divide-slate-200">
            {messages.map((message, index) => (
              <li
                key={message.id}
                className={`cursor-pointer px-4 py-4 ${index === 0 ? 'bg-brand-50' : 'hover:bg-slate-50'}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="font-medium text-slate-900">{message.sender}</p>
                  <span className="text-xs text-slate-500">{message.time}</span>
                </div>
                <p className="mt-1 truncate text-sm text-slate-600">{message.preview}</p>
              </li>
            ))}
          </ul>
        </aside>

        <div className="flex min-h-[420px] flex-col rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-4">
            <h2 className="font-semibold text-slate-900">Alex Rivera</h2>
            <p className="text-sm text-slate-500">Active now</p>
          </div>
          <div className="flex-1 space-y-4 px-6 py-6">
            <div className="max-w-md rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-700">
              Hey! Are you free to chat this week?
            </div>
            <div className="ml-auto max-w-md rounded-2xl bg-brand-600 px-4 py-3 text-sm text-white">
              Absolutely — let&apos;s find a time that works.
            </div>
          </div>
          <div className="border-t border-slate-200 px-6 py-4">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
