export default function Cta() {
  return (
    <section className="px-5 pb-24 pt-4 lg:px-12">
      <div className="relative mx-auto max-w-2xl overflow-hidden rounded-[28px] border border-bolic-line bg-bolic-surface px-8 py-14 text-center lg:px-16 lg:py-20">
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-[90px]"
          style={{ background: 'radial-gradient(circle, rgba(220,38,38,0.35) 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="relative">
          <img src="/logo-b.svg" alt="" width={60} height={60} className="mx-auto mb-6 rounded-2xl" />
          <h2 className="mb-8 font-display text-3xl font-extrabold leading-[0.98] tracking-tight sm:text-[2.75rem]">
            Ready to get anabolic with Bolic?
          </h2>
          <a
            href="https://apps.apple.com/app/bolic/id6755925763"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-b from-bolic-red to-bolic-red-deep px-7 py-3.5 text-[0.95rem] font-semibold text-white shadow-[0_10px_30px_rgba(220,38,38,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(220,38,38,0.45)]"
          >
            <svg viewBox="0 0 448 512" fill="currentColor" className="h-5 w-5" aria-hidden="true">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-77.7-19.7C63.3 141.2 4 183.5 4 269.9 4 321 22.7 374.5 45.8 411.6c19.8 31.8 46 67.5 78.9 66.2 31.3-1.2 43.1-20.4 80.9-20.4 36.6 0 47 20.4 80 20.4 33.3-.5 61-39 80-70.9 38.5-58.1 54.4-114.4 55-117.2-2.1-.7-101.7-38.1-101.9-151zM263.7 102.5c26.3-31.2 23.9-59.6 23.1-69.8-23.2 1.3-50 15.8-65.3 33.6-16.8 19-26.6 42.5-24.5 68.5 25.1 1.9 48-11 67.7-32.3z" />
            </svg>
            Download on the App Store
          </a>
        </div>
      </div>
    </section>
  )
}
