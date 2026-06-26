import Button from '../ui/Button'

const highlights = [
  'Shared colleges & hometowns',
  'Compatible flatmate discovery',
  'Warm introductions, not cold DMs',
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(224,122,95,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.06),transparent_32%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="homi-container grid gap-12 pb-20 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:pb-28 lg:pt-24">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-homi-100 bg-white/80 px-4 py-2 text-sm font-medium text-homi-700 shadow-sm shadow-homi-100/40 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-homi-500" />
            Find familiar faces in unfamiliar cities.
          </div>

          <div className="space-y-5">
            <h1 className="homi-title-display max-w-3xl">
              Move to a New City with Familiar Faces Around You
            </h1>
            <p className="homi-body max-w-2xl sm:text-lg">
              Discover compatible flatmates and meaningful local connections through shared
              colleges, hometowns, workplaces, and communities.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button to="/signup" variant="primary">
              Find Your People
            </Button>
            <Button href="#how-it-works" variant="secondary">
              Learn More
            </Button>
          </div>

          <ul className="flex flex-wrap gap-3 pt-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="rounded-full border border-slate-200/80 bg-white/70 px-4 py-2 text-sm text-slate-600 shadow-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-8 h-40 w-40 rounded-full bg-homi-200/30 blur-3xl" />
          <div className="absolute -right-4 bottom-0 h-48 w-48 rounded-full bg-slate-300/20 blur-3xl" />

          <div className="homi-card relative backdrop-blur-sm transition duration-500 hover:shadow-[0_32px_90px_-24px_rgba(15,23,42,0.22)] sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Your matches in</p>
                <p className="text-2xl font-semibold text-slate-900">Berlin</p>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                12 new matches
              </span>
            </div>

            <div className="space-y-4">
              {[
                {
                  name: 'Meera K.',
                  detail: 'Same college · Moving in 2 weeks',
                  badge: '94% match',
                },
                {
                  name: 'Arjun P.',
                  detail: 'Same hometown · Looking for flatmate',
                  badge: '91% match',
                },
                {
                  name: 'Sofia L.',
                  detail: 'Same workplace alumni · New to city',
                  badge: '88% match',
                },
              ].map((person) => (
                <article
                  key={person.name}
                  className="flex items-center justify-between rounded-2xl border border-slate-100 bg-surface p-4 transition duration-300 hover:-translate-y-0.5 hover:border-slate-200 hover:bg-white hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-homi-100 to-white text-sm font-semibold text-homi-700">
                      {person.name
                        .split(' ')
                        .map((part) => part[0])
                        .join('')}
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{person.name}</p>
                      <p className="text-sm text-slate-500">{person.detail}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                    {person.badge}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
