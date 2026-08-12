export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* ambient red glow, echoes the app's Start Workout button */}
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(220,38,38,0.28) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12 lg:py-28">
        <div className="animate-rise-in">
          <p className="eyebrow mb-5">Science Based Workout Tracking App</p>
          <h1 className="mb-6 font-display text-[3.25rem] font-extrabold leading-[0.92] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Keep the focus
            <br />
            on <span className="text-bolic-red">training</span>
          </h1>
          <p className="mb-9 max-w-lg text-lg leading-relaxed text-bolic-muted">
            Hypertrophy focused workout tracking app. Helps you keep track of your progress, following the most optimal
            methods. Completely open source.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#app"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-b from-bolic-red to-bolic-red-deep px-7 py-3.5 text-[0.95rem] font-semibold text-white shadow-[0_10px_30px_rgba(220,38,38,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(220,38,38,0.45)]"
            >
              See the app
            </a>
            <a
              href="https://apps.apple.com/app/bolic/id6755925763"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-bolic-line bg-bolic-surface px-5 py-3 text-sm font-medium text-bolic-muted transition-colors hover:border-bolic-muted-2 hover:text-bolic-text"
            >
              <svg viewBox="0 0 448 512" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-77.7-19.7C63.3 141.2 4 183.5 4 269.9 4 321 22.7 374.5 45.8 411.6c19.8 31.8 46 67.5 78.9 66.2 31.3-1.2 43.1-20.4 80.9-20.4 36.6 0 47 20.4 80 20.4 33.3-.5 61-39 80-70.9 38.5-58.1 54.4-114.4 55-117.2-2.1-.7-101.7-38.1-101.9-151zM263.7 102.5c26.3-31.2 23.9-59.6 23.1-69.8-23.2 1.3-50 15.8-65.3 33.6-16.8 19-26.6 42.5-24.5 68.5 25.1 1.9 48-11 67.7-32.3z" />
              </svg>
              Download on the App Store
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-sm justify-center">
          <div
            className="pointer-events-none absolute inset-x-6 bottom-0 top-6 rounded-[48px] blur-[50px]"
            style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(220,38,38,0.30) 0%, transparent 70%)' }}
            aria-hidden="true"
          />
          <div className="relative w-[min(280px,72vw)] animate-float rounded-[44px] border border-bolic-line bg-black p-[10px] shadow-bolic">
            <div className="relative overflow-hidden rounded-[36px] bg-bolic-surface">
              <div
                className="absolute left-1/2 top-3 z-10 h-[22px] w-[92px] -translate-x-1/2 rounded-full bg-black"
                aria-hidden="true"
              />
              <img
                src="/screenshots/home-dark.PNG"
                alt="The Bolic dashboard showing today's workout and training stats"
                className="block w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
