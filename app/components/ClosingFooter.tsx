"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

export default function ClosingFooter() {
  const ref = useRef<HTMLElement>(null);
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
    <section ref={ref} className="w-full bg-[#0a0a0b]">
      {/* Closing statement — large, centered, generous breathing room. */}
      <div className="flex min-h-[85vh] w-full flex-col items-center justify-center px-8 py-28 text-center md:py-40">
        <div
          className="transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <h2 className="font-serif text-4xl leading-tight text-white/95 md:text-6xl">
            Every project.
            <br />
            A piece worth showing.
          </h2>

          <div className="mt-12">
            <a
              href="#"
              className="inline-block rounded-full border border-white/30 px-9 py-3.5 text-sm uppercase tracking-[0.2em] text-white/85 transition-colors duration-300 hover:border-white/70 hover:bg-white/5 hover:text-white"
            >
              See more
            </a>
          </div>
        </div>
      </div>

      {/* Divider — soft, keeping the block continuous rather than a hard break. */}
      <div className="mx-auto h-px w-full max-w-[1300px] bg-white/10" />

      {/* Footer content — same background, part of the same block. */}
      <div className="mx-auto flex max-w-[1300px] flex-col items-center px-8 py-20 text-center md:py-24">
        <Logo size="sm" />

        <p className="mt-10 max-w-[520px] font-serif text-xl leading-snug text-white/80 md:text-2xl">
          Ready to build something worth showing?
        </p>

        <a
          href="#"
          className="mt-9 inline-block rounded-full border border-white/30 px-8 py-3 text-sm uppercase tracking-[0.2em] text-white/85 transition-colors duration-300 hover:border-white/70 hover:bg-white/5 hover:text-white"
        >
          Get a quote
        </a>

        <p className="mt-16 text-xs uppercase tracking-[0.2em] text-white/35">
          © 2026 Solmar Studio. All rights reserved.
        </p>
      </div>
    </section>
  );
}
