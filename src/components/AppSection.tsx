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
      'Quick views of previous sessions. Look back at the last completed session and previous same session.',
  },
  {
    id: 'program',
    label: 'Programs',
    title: 'Programs built the way you actually train',
    description:
      'Design simple tructures with flexible training days, with periodized program support in the future. Build the program once, follow it for months.',
  },
  {
    id: 'exercises',
    label: 'Exercise library',
    title: 'Every movement, fully detailed',
    description:
      'Browse your full exercise library with target sets, reps, RPE, RIR, quality, and personal technique notes',
  },
  {
    id: 'training-session',
    label: 'Live session',
    title: 'Log sets without breaking focus',
    description:
      'Tap to record each set, track the metrics that matter to you.',
  },
  {
    id: 'training-session-differs',
    label: 'Swap Exercises',
    title: 'Keep a record of swaps',
    description:
      'Someone using the machine? Swap it out with a similar exercise. Do the original day, the same session, or the same session and updated it.',
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
    title: 'numbers about your training',
    description:
      'Streaks, total volume, and weekly consistency — the metrics that tell you whether the work is actually adding up.',
  },
  {
    id: 'create-exercise',
    label: 'Exercise Data',
    title: 'In-depth exercise data',
    description:
      'Categorize the details of your exercises. Included target reps, RIR, and target position.',
  },
]

function PhoneFrame({ id, alt }: { id: ScreenshotId; alt: string }) {
  return (
    <div className="relative shrink-0">
      <div
        className="pointer-events-none absolute inset-4 rounded-[40px] blur-[45px] opacity-30"
        style={{ background: 'radial-gradient(ellipse at 50% 35%, rgba(220,38,38,0.35) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div className="relative w-[min(230px,54vw)] rounded-[40px] border border-bolic-line bg-black p-[9px] shadow-bolic lg:w-[min(250px,22vw)]">
        <div className="relative overflow-hidden rounded-[32px] bg-bolic-surface">
          <div
            className="absolute left-1/2 top-2.5 z-10 h-[18px] w-[74px] -translate-x-1/2 rounded-full bg-black"
            aria-hidden="true"
          />
          <img src={`/screenshots/${id}-dark.PNG`} alt={alt} loading="lazy" className="block w-full" />
        </div>
      </div>
    </div>
  )
}

export default function AppSection() {
  return (
    <section id="app" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-12">
        <div className="mb-16 max-w-3xl lg:mb-24">
          <p className="eyebrow mb-4">The App</p>
          <h2 className="font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
            Your gym session,
            <br />
            fully dialed in
          </h2>
        </div>

        <div className="flex flex-col gap-20 lg:gap-28">
          {slides.map((slide, i) => (
            <article
              key={slide.id}
              className={`mx-auto flex w-full max-w-3xl flex-col items-center gap-10 lg:justify-center lg:gap-14 ${
                i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              <PhoneFrame id={slide.id} alt={slide.title} />
              <div className="text-center lg:max-w-md lg:text-left">
                <p className="eyebrow mb-4">{slide.label}</p>
                <h3 className="mb-4 font-display text-3xl font-extrabold leading-[0.98] tracking-tight sm:text-4xl">
                  {slide.title}
                </h3>
                <p className="text-[1.05rem] leading-relaxed text-bolic-muted">{slide.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
