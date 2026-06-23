const features = [
  {
    title: 'Works Offline',
    description:
      'Track workouts without internet. Your session data stays on your device until you choose to sync.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-6 w-6">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12" y2="18.01" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Track Progress',
    description:
      'Monitor your PRs, volume, streaks, and weekly consistency with clear analytics built for strength training.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-6 w-6">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: 'Smart Training',
    description:
      'Build and follow science-based programs with structured training days, exercise libraries, and set tracking.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-6 w-6">
        <path d="M6.5 6.5h11M4 10h16M6.5 13.5h11M4 17h16" />
        <circle cx="4" cy="10" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="20" cy="10" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="4" cy="17" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="20" cy="17" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section id="features" className="border-y border-bolic-border bg-bolic-subtle py-16 dark:border-bolic-border-dark dark:bg-bolic-subtle-dark lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-12">
        <div className="mb-10">
          <p className="mb-2 font-display text-sm font-semibold uppercase tracking-[0.18em] text-bolic-accent">
            Built for lifters
          </p>
          <h2 className="font-display text-4xl font-extrabold uppercase leading-none sm:text-5xl">
            Everything you need at the rack
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-bolic-border bg-bolic-elevated p-7 transition hover:-translate-y-1 hover:border-bolic-accent/35 hover:shadow-md dark:border-bolic-border-dark dark:bg-bolic-elevated-dark"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-bolic-accent/10 text-bolic-accent">
                {feature.icon}
              </div>
              <h3 className="mb-2 font-display text-xl font-bold uppercase tracking-wide">{feature.title}</h3>
              <p className="text-[0.95rem] text-bolic-muted">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
