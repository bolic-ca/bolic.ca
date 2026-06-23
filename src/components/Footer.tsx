export default function Footer() {
  return (
    <footer className="border-t border-bolic-border px-5 py-8 dark:border-bolic-border-dark sm:px-12">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <a href="/" className="inline-flex items-center gap-2.5">
          <img src="/logo-b.svg" alt="" width={28} height={28} className="rounded-lg" />
          <span className="font-display text-lg font-extrabold uppercase tracking-wide">Bolic</span>
        </a>
        <p className="text-sm text-bolic-muted">&copy; {new Date().getFullYear()} Bolic. All rights reserved.</p>
      </div>
    </footer>
  )
}
