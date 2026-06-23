function StatCard({
  label,
  value,
  unit,
  colorClass,
  className,
  delay,
}: {
  label: string
  value: string
  unit: string
  colorClass: string
  className: string
  delay?: string
}) {
  return (
    <div
      className={`absolute z-10 flex flex-col rounded-2xl border border-bolic-border bg-bolic-elevated p-5 shadow-md animate-float dark:border-bolic-border-dark dark:bg-bolic-elevated-dark dark:shadow-bolic-dark ${className}`}
      style={delay ? { animationDelay: delay } : undefined}
    >
      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-bolic-muted">{label}</span>
      <span className={`mt-1 font-display text-[2.75rem] font-extrabold leading-none ${colorClass}`}>{value}</span>
      <span className="mt-0.5 text-sm text-bolic-muted">{unit}</span>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-72px)] max-w-6xl items-center gap-8 px-5 py-12 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">
      <div>
        <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.18em] text-bolic-accent">
          Science Based Workout Tracking App
        </p>
        <h1 className="mb-5 font-display text-5xl font-extrabold uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
          Train smarter.
          <br />
          <span className="text-bolic-accent">Track harder.</span>
        </h1>
        <p className="mb-8 max-w-lg text-lg text-bolic-muted">
          Hypertrophy focused workout tracking app. Helps you keep track of your progress, following the most optimal methods. 
          </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#app"
            className="inline-flex items-center justify-center rounded-[10px] bg-gradient-to-br from-bolic-accent to-bolic-accent-hover px-7 py-3.5 text-[0.95rem] font-semibold text-white shadow-[0_8px_24px_rgba(249,115,22,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(249,115,22,0.28)]"
          >
            See the app
          </a>
          <span className="rounded-full border border-bolic-border bg-bolic-elevated px-3.5 py-2 text-sm font-medium text-bolic-muted dark:border-bolic-border-dark dark:bg-bolic-elevated-dark">
            iOS · Coming soon
          </span>
        </div>
      </div>

      <div className="relative min-h-[340px] lg:min-h-[420px]">
        <div
          className="absolute inset-[10%_5%] blur-[40px]"
          style={{ background: 'radial-gradient(ellipse at center, rgba(249,115,22,0.22) 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <StatCard
          label="Current Streak"
          value="12"
          unit="days"
          colorClass="text-bolic-coral"
          className="left-[5%] top-[8%]"
        />
        <StatCard
          label="Total Volume"
          value="24.8k"
          unit="lbs"
          colorClass="text-bolic-teal"
          className="right-0 top-[38%]"
          delay="-2s"
        />
        <StatCard
          label="Personal Record"
          value="315"
          unit="lbs × 5"
          colorClass="text-bolic-gold"
          className="bottom-[8%] left-[18%]"
          delay="-4s"
        />
      </div>
    </section>
  )
}
