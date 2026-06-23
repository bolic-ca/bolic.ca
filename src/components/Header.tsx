function Brand({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img src="/logo-b.svg" alt="" width={36} height={36} className="rounded-lg" />
      <span className="font-display text-xl font-extrabold uppercase tracking-wide">Bolic</span>
    </span>
  )
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-[72px] items-center justify-between border-b border-bolic-border bg-bolic-bg/80 px-5 backdrop-blur-xl dark:border-bolic-border-dark dark:bg-bolic-bg-dark/80 sm:px-12">
      <a href="/" aria-label="Bolic home">
        <Brand />
      </a>
      <nav className="flex gap-7" aria-label="Primary">
        <a href="#features" className="text-sm font-medium text-bolic-muted transition-colors hover:text-bolic-accent">
          Features
        </a>
        <a href="#app" className="text-sm font-medium text-bolic-muted transition-colors hover:text-bolic-accent">
          The App
        </a>
      </nav>
    </header>
  )
}
