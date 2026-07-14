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
          Keep the focus on training 
          <br />
        </h1>
        <p className="mb-8 max-w-lg text-lg text-bolic-muted">
          Hypertrophy focused workout tracking app. Helps you keep track of your progress, following the most optimal methods. Completely open source.
          </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#app"
            className="inline-flex items-center justify-center rounded-[10px] bg-gradient-to-br from-bolic-accent to-bolic-accent-hover px-7 py-3.5 text-[0.95rem] font-semibold text-white shadow-[0_8px_24px_rgba(220,38,38,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(220,38,38,0.28)]"
          >
            See the app
          </a>
          <a
            href="https://apps.apple.com/app/bolic/id6755925763"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-bolic-border bg-bolic-elevated px-3.5 py-2 text-sm font-medium text-bolic-muted transition-colors hover:border-bolic-accent hover:text-bolic-accent dark:border-bolic-border-dark dark:bg-bolic-elevated-dark"
          >
            <svg viewBox="0 0 448 512" fill="currentColor" className="h-4 w-4" aria-hidden="true">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-77.7-19.7C63.3 141.2 4 183.5 4 269.9 4 321 22.7 374.5 45.8 411.6c19.8 31.8 46 67.5 78.9 66.2 31.3-1.2 43.1-20.4 80.9-20.4 36.6 0 47 20.4 80 20.4 33.3-.5 61-39 80-70.9 38.5-58.1 54.4-114.4 55-117.2-2.1-.7-101.7-38.1-101.9-151zM263.7 102.5c26.3-31.2 23.9-59.6 23.1-69.8-23.2 1.3-50 15.8-65.3 33.6-16.8 19-26.6 42.5-24.5 68.5 25.1 1.9 48-11 67.7-32.3z" />
            </svg>
            Download on the App Store
          </a>
        </div>
      </div>

      <div className="relative mx-auto min-h-[340px] w-full max-w-md lg:min-h-[420px]">
        <div
          className="absolute inset-[10%_5%] blur-[40px]"
          style={{ background: 'radial-gradient(ellipse at center, rgba(220,38,38,0.22) 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <StatCard
          label="Current Streak"
          value="12"
          unit="days"
          colorClass="text-bolic-accent"
          className="left-0 top-[8%]"
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
          label="Workouts Logged"
          value="21"
          unit="sessions"
          colorClass="text-bolic-gold"
          className="bottom-[8%] left-[12%]"
          delay="-4s"
        />
      </div>
    </section>
  )
}
