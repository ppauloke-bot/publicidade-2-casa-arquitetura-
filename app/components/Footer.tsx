import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="w-full bg-[#100d0b] px-6 md:px-16">
      <div className="mx-auto max-w-[1500px]">
        {/* Oversized wordmark that bleeds off the edges. */}
        <div className="overflow-hidden pt-16 md:pt-20">
          <div className="select-none whitespace-nowrap font-serif text-[23vw] leading-[0.8] tracking-tight text-white/[0.045] md:text-[20vw]">
            SOLMAR
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-white/10 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
            <Logo size="sm" />
            <a
              href="mailto:hello@solmarstudio.com"
              className="text-sm text-white/60 transition-colors hover:text-white/90"
            >
              hello@solmarstudio.com
            </a>
            <span className="text-sm uppercase tracking-[0.16em] text-white/35">
              Costa · Lisbon
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs uppercase tracking-[0.16em] text-white/35">
            <a href="#" className="inline-flex items-center gap-2 transition-colors hover:text-white/70">
              Instagram
              <svg width="12" height="12" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path d="M6 14L14 6M14 6H7M14 6V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <span>© 2026 Solmar Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
