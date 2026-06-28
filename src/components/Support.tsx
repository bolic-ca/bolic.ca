import Header from './Header'
import Footer from './Footer'

export default function Support() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-[1000] opacity-[0.035] grain" aria-hidden="true" />
      <Header />
      <main className="mx-auto max-w-lg px-5 py-16 sm:py-24">
        <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.18em] text-bolic-accent">
          Get in touch
        </p>
        <h1 className="font-display text-4xl font-extrabold uppercase leading-none sm:text-5xl">Support</h1>
        <p className="mt-4 text-[0.95rem] text-bolic-muted">
          Need help or found a bug? Pick whichever works best for you.
        </p>

        <div className="mt-10 flex flex-col gap-4">
          <a
            href="mailto:support@bolic.ca"
            className="group flex items-center gap-5 rounded-2xl border border-bolic-border bg-bolic-elevated p-6 transition hover:-translate-y-0.5 hover:border-bolic-accent/40 hover:shadow-md dark:border-bolic-border-dark dark:bg-bolic-elevated-dark"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-bolic-accent/10 text-bolic-accent">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-6 w-6" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 7 10 7 10-7" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-display text-base font-bold uppercase tracking-wide">Email</p>
              <p className="mt-0.5 truncate text-sm text-bolic-muted">support@bolic.ca</p>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 shrink-0 text-bolic-muted transition-transform group-hover:translate-x-0.5 group-hover:text-bolic-accent" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>

          <a
            href="https://github.com/bolic-ca/Bolic.App/issues/new"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 rounded-2xl border border-bolic-border bg-bolic-elevated p-6 transition hover:-translate-y-0.5 hover:border-bolic-accent/40 hover:shadow-md dark:border-bolic-border-dark dark:bg-bolic-elevated-dark"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-bolic-accent/10 text-bolic-accent">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-display text-base font-bold uppercase tracking-wide">GitHub Issue</p>
              <p className="mt-0.5 truncate text-sm text-bolic-muted">github.com/bolic-ca/Bolic.App</p>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 shrink-0 text-bolic-muted transition-transform group-hover:translate-x-0.5 group-hover:text-bolic-accent" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </main>
      <Footer />
    </>
  )
}
