const capabilities = [
  {
    num: '01',
    title: 'Programs & Training Days',
    description: 'Simple and periodized structures with flexible day templates.',
  },
  {
    num: '02',
    title: 'Exercise Library',
    description: 'Custom exercises with sets, reps, RPE, RIR, and notes.',
  },
  {
    num: '03',
    title: 'Live Workout Tracking',
    description: 'Log sets in real time with reorder, swap, and session history.',
  },
  {
    num: '04',
    title: 'Stats & Personal Records',
    description: 'Streaks, volume, weekly completion, and PR tracking at a glance.',
  },
]

export default function AppSection() {
  return (
    <section id="app" className="py-16 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <div className="order-2 lg:order-1">
          <p className="mb-2 font-display text-sm font-semibold uppercase tracking-[0.18em] text-bolic-accent">
            The App
          </p>
          <h2 className="mb-4 font-display text-4xl font-extrabold uppercase leading-none sm:text-5xl">
            Your gym session,
            <br />
            fully dialed in
          </h2>
          <p className="mb-8 max-w-md text-bolic-muted">
            From program design to the last rep, Bolic keeps your training organized so you can focus on lifting.
          </p>

          <ul className="flex flex-col gap-5">
            {capabilities.map((item) => (
              <li key={item.num} className="flex gap-4">
                <span className="shrink-0 font-display text-lg font-bold text-bolic-accent/70">{item.num}</span>
                <div>
                  <strong className="mb-0.5 block font-semibold">{item.title}</strong>
                  <span className="text-sm text-bolic-muted">{item.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 flex justify-center lg:order-2" aria-hidden="true">
          <div className="w-[min(280px,80vw)] rounded-[36px] bg-bolic-text p-3 shadow-bolic dark:shadow-bolic-dark">
            <div className="relative rounded-[28px] bg-bolic-elevated px-5 pb-6 pt-10 dark:bg-bolic-elevated-dark">
              <div className="absolute left-1/2 top-[18px] z-10 h-[22px] w-20 -translate-x-1/2 rounded-b-[14px] bg-bolic-text" />
              <div className="mb-6">
                <span className="block font-display text-[0.65rem] font-semibold tracking-[0.15em] text-bolic-muted">
                  TODAY
                </span>
                <span className="block font-display text-2xl font-extrabold uppercase">Push Day</span>
              </div>
              {[
                { name: 'Bench Press', sets: '4 × 8', active: false },
                { name: 'Overhead Press', sets: '3 × 10', active: true },
                { name: 'Incline DB Press', sets: '3 × 12', active: false },
              ].map((exercise) => (
                <div
                  key={exercise.name}
                  className={`mb-2 flex items-center justify-between rounded-[10px] border px-4 py-3.5 text-sm font-medium ${
                    exercise.active
                      ? 'border-bolic-accent/40 bg-bolic-accent/10'
                      : 'border-bolic-border bg-bolic-subtle dark:border-bolic-border-dark dark:bg-bolic-subtle-dark'
                  }`}
                >
                  <span>{exercise.name}</span>
                  <span className="text-xs text-bolic-muted">{exercise.sets}</span>
                </div>
              ))}
              <div className="mt-6 grid grid-cols-3 gap-2 border-t border-bolic-border pt-5 dark:border-bolic-border-dark">
                {[
                  { val: '7', lbl: 'Workouts', color: 'text-bolic-teal' },
                  { val: '5', lbl: 'Streak', color: 'text-bolic-coral' },
                  { val: '18k', lbl: 'Volume', color: 'text-bolic-gold' },
                ].map((stat) => (
                  <div key={stat.lbl} className="text-center">
                    <span className={`block font-display text-xl font-extrabold ${stat.color}`}>{stat.val}</span>
                    <span className="text-[0.65rem] uppercase tracking-wide text-bolic-muted">{stat.lbl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
