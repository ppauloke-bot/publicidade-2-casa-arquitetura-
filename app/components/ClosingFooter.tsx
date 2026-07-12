"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

export default function ClosingFooter() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-[#0a0a0b]">
      {/* Closing statement. */}
      <div
        ref={ref}
        className="flex min-h-[80vh] w-full flex-col items-center justify-center px-8 py-28 text-center md:py-40"
      >
        <div
          className="transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.34em] text-[#C97A4A]">
            The portfolio
          </p>
          <h2 className="font-serif text-4xl leading-[1.08] text-white/95 md:text-7xl">
            Every project.
            <br />
            A piece worth showing.
          </h2>
          <div className="mt-12">
            <a
              href="#"
              className="group inline-flex items-center gap-3 rounded-full border border-white/25 px-9 py-4 text-sm uppercase tracking-[0.2em] text-white/85 transition-colors duration-300 hover:border-white/70 hover:bg-white/5 hover:text-white"
            >
              See more
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path
                  d="M4 10H16M16 10L10 4M16 10L10 16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer proper — same continuous block. */}
      <footer className="mx-auto w-full max-w-[1500px] px-8 md:px-16">
        <div className="h-px w-full bg-white/10" />

        {/* Top row: brand + CTA. */}
        <div className="flex flex-col gap-10 py-16 md:flex-row md:items-start md:justify-between md:py-20">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-6 text-sm leading-relaxed text-white/45">
              Outdoor living, engineered — pools, stone, and light for homes
              along the coast and beyond.
            </p>
          </div>

          <div className="flex flex-col gap-8 md:items-end">
            <a
              href="#"
              className="inline-flex w-fit items-center gap-3 rounded-full border border-white/25 px-8 py-3.5 text-sm uppercase tracking-[0.2em] text-white/85 transition-colors duration-300 hover:border-white/70 hover:bg-white/5 hover:text-white"
            >
              Get a quote
            </a>
            <div className="flex flex-col gap-2 md:items-end">
              <a
                href="#"
                className="text-lg text-white/80 transition-colors hover:text-white md:text-xl"
              >
                hello@solmarstudio.com
              </a>
              <p className="text-sm uppercase tracking-[0.16em] text-white/35">
                Costa del Sol · Lisbon
              </p>
            </div>
          </div>
        </div>

        {/* Oversized wordmark that bleeds off the edges. */}
        <div className="overflow-hidden">
          <div className="select-none whitespace-nowrap font-serif text-[22vw] leading-[0.8] tracking-tight text-white/[0.05] md:text-[19vw]">
            SOLMAR
          </div>
        </div>

        {/* Bottom bar. */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-xs uppercase tracking-[0.16em] text-white/35 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Solmar Studio. All rights reserved.</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 transition-colors hover:text-white/70"
          >
            Instagram
            <svg width="12" height="12" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path
                d="M6 14L14 6M14 6H7M14 6V13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </footer>
    </section>
  );
}
