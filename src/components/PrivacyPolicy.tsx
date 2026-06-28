import Header from './Header'
import Footer from './Footer'

const sections = [
  {
    heading: 'Data We Collect',
    body: 'None. Bolic does not collect any personal data. The app has no user accounts, no login, and no analytics or tracking SDKs.',
  },
  {
    heading: 'Data You Create',
    body: 'Workout programs, exercises, training sessions, statistics, personal records, and app preferences that you create are stored locally on your device only, using the device\'s standard on-device storage. This data never leaves your device unless you explicitly export it.',
  },
  {
    heading: 'Anonymous Identifier',
    body: 'To keep your locally stored data organized, the app generates a random anonymous identifier on first launch. This identifier stays on your device, is not tied to your identity, and is never sent anywhere.',
  },
  {
    heading: 'Import and Export',
    body: 'Bolic lets you export your data to a file and import it back. These files are created and read on your device, under your control, through the system file picker / share sheet. Where you choose to save or send an exported file is entirely up to you.',
  },
  {
    heading: 'Network and Third Parties',
    body: 'The app does not make network requests to send your data, and does not integrate any third-party advertising, analytics, or tracking services.',
  },
  {
    heading: "Children's Privacy",
    body: 'Bolic does not knowingly collect any data from anyone, including children.',
  },
  {
    heading: 'Changes to This Policy',
    body: 'If this policy changes, the updated version will be posted at this page with a new "Last updated" date.',
  },
]

export default function PrivacyPolicy() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-[1000] opacity-[0.035] grain" aria-hidden="true" />
      <Header />
      <main className="mx-auto max-w-2xl px-5 py-16 sm:px-12 sm:py-24">
        <h1 className="font-display text-3xl font-extrabold uppercase tracking-wide sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-bolic-muted dark:text-bolic-muted">Last updated: June 27, 2026</p>

        <p className="mt-8 leading-relaxed text-bolic-text dark:text-bolic-text-dark">
          Bolic ("the app") is a workout tracking application. This Privacy Policy explains how the app handles your
          information. In short: Bolic is an offline-first app that stores all of your data on your own device. We do
          not collect, transmit, sell, or share your personal data.
        </p>

        {sections.map(({ heading, body }) => (
          <section key={heading} className="mt-10">
            <h2 className="font-display text-lg font-bold uppercase tracking-wide">{heading}</h2>
            <p className="mt-2 leading-relaxed text-bolic-text dark:text-bolic-text-dark">{body}</p>
          </section>
        ))}

        <section className="mt-10">
          <h2 className="font-display text-lg font-bold uppercase tracking-wide">Contact</h2>
          <p className="mt-2 leading-relaxed text-bolic-text dark:text-bolic-text-dark">
            For questions about this Privacy Policy, contact:{' '}
            <a href="mailto:support@bolic.ca" className="text-bolic-accent hover:underline">
              support@bolic.ca
            </a>
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
