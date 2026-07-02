import { useState } from 'react'
import ThemedScreenshot from './ThemedScreenshot'
import { screenshots } from './screenshots'

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
    title: 'Stats & Progress',
    description: 'Streaks, volume, and weekly completion at a glance.',
  },
]

function screenshotIndexForCapability(num: string) {
  return screenshots.findIndex((shot) => shot.capability === num)
}

export default function AppSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = screenshots[activeIndex]

  return (
    <section id="app" className="py-16 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
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
              {capabilities.map((item) => {
                const shotIndex = screenshotIndexForCapability(item.num)
                const isActive = shotIndex === activeIndex

                return (
                  <li key={item.num}>
                    <button
                      type="button"
                      onClick={() => shotIndex >= 0 && setActiveIndex(shotIndex)}
                      className={`flex w-full gap-4 rounded-xl border px-4 py-3 text-left transition ${
                        isActive
                          ? 'border-bolic-accent/40 bg-bolic-accent/10'
                          : 'border-transparent hover:border-bolic-border hover:bg-bolic-subtle dark:hover:border-bolic-border-dark dark:hover:bg-bolic-subtle-dark'
                      }`}
                    >
                      <span className="shrink-0 font-display text-lg font-bold text-bolic-accent/70">{item.num}</span>
                      <div>
                        <strong className="mb-0.5 block font-semibold">{item.title}</strong>
                        <span className="text-sm text-bolic-muted">{item.description}</span>
                      </div>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="order-1 flex flex-col items-center gap-5 lg:order-2">
            <div className="w-[min(300px,82vw)] rounded-[40px] bg-bolic-text p-3 shadow-bolic dark:shadow-bolic-dark">
              <div className="relative overflow-hidden rounded-[32px] bg-bolic-elevated dark:bg-bolic-elevated-dark">
                <div className="absolute left-1/2 top-3 z-10 h-5 w-[72px] -translate-x-1/2 rounded-full bg-bolic-text" aria-hidden="true" />
                <ThemedScreenshot
                  id={active.id}
                  alt={active.alt}
                  loading="eager"
                  className="block w-full"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="App screenshots">
              {screenshots.map((shot, index) => (
                <button
                  key={shot.id}
                  type="button"
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-label={shot.label}
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition ${
                    index === activeIndex
                      ? 'bg-bolic-accent text-white'
                      : 'bg-bolic-subtle text-bolic-muted hover:text-bolic-text dark:bg-bolic-subtle-dark dark:hover:text-bolic-text-dark'
                  }`}
                >
                  {shot.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
