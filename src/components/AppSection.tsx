import ThemedScreenshot from './ThemedScreenshot'
import type { ScreenshotId } from './screenshots'

type Slide = {
  id: ScreenshotId
  label: string
  title: string
  description: string
}

const slides: Slide[] = [
  {
    id: 'home',
    label: 'Dashboard',
    title: 'Everything ready before the first rep',
    description:
      'Your upcoming workout and recent session history are waiting the moment you open Bolic. No setup, no hunting around.',
  },
  {
    id: 'program',
    label: 'Programs',
    title: 'Programs built the way you actually train',
    description:
      'Design simple or periodized structures with flexible training days. Build the program once, follow it for months.',
  },
  {
    id: 'exercises',
    label: 'Exercise library',
    title: 'Every movement, fully detailed',
    description:
      'Browse your full exercise library with target sets, reps, RPE, RIR, and personal technique notes — all in one place per movement.',
  },
  {
    id: 'training-session',
    label: 'Live session',
    title: 'Log sets without breaking focus',
    description:
      'A clean view built for the gym floor. Tap to record each set, reorder exercises mid-session, and never lose your place in the workout.',
  },
  {
    id: 'exercise-history',
    label: 'History',
    title: 'The full picture, not just a trend line',
    description:
      'Every session is saved and tied to the exercise. Come back any time to see exactly how a movement has progressed across weeks and months.',
  },
  {
    id: 'stats',
    label: 'Stats',
    title: 'Honest numbers about your training',
    description:
      'Streaks, total volume, and weekly consistency — the metrics that tell you whether the work is actually adding up.',
  },
]

function PhoneFrame({ id, alt }: { id: ScreenshotId; alt: string }) {
  return (
    <div className="w-[min(220px,52vw)] shrink-0 rounded-[40px] bg-bolic-text p-[10px] shadow-bolic dark:shadow-bolic-dark lg:w-[min(260px,22vw)]">
      <div className="relative overflow-hidden rounded-[32px] bg-bolic-elevated dark:bg-bolic-elevated-dark">
        <div
          className="absolute left-1/2 top-3 z-10 h-[18px] w-[68px] -translate-x-1/2 rounded-full bg-bolic-text"
          aria-hidden="true"
        />
        <ThemedScreenshot id={id} alt={alt} loading="lazy" className="block w-full" />
      </div>
    </div>
  )
}

export default function AppSection() {
  return (
    <section id="app" className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-12">
        <div className="mb-12 lg:mb-16">
          <p className="mb-2 font-display text-sm font-semibold uppercase tracking-[0.18em] text-bolic-accent">
            The App
          </p>
          <h2 className="font-display text-4xl font-extrabold uppercase leading-none sm:text-5xl">
            Your gym session,
            <br />
            fully dialed in
          </h2>
        </div>

        <div className="flex flex-col gap-16 lg:gap-24">
          {slides.map((slide, i) => (
            <article
              key={slide.id}
              className={`mx-auto flex w-full max-w-3xl flex-col items-center gap-8 lg:justify-center lg:gap-10 ${
                i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              <PhoneFrame id={slide.id} alt={slide.title} />
              <div className="text-center lg:max-w-md lg:text-left">
                <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-bolic-accent/80">
                  {slide.label}
                </p>
                <h3 className="mb-4 font-display text-3xl font-extrabold uppercase leading-none sm:text-4xl">
                  {slide.title}
                </h3>
                <p className="max-w-md text-[1.05rem] leading-relaxed text-bolic-muted">{slide.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
