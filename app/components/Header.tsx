"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Gain the blurred backdrop once past the first viewport height.
      setScrolled(window.scrollY > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "border-b border-white/5 bg-black/40 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-4 md:px-10 md:py-5">
        <a
          href="#"
          className="font-serif text-xl tracking-wide text-white/95 md:text-2xl"
        >
          Orvika
        </a>

        <a
          href="#"
          className="rounded-full border border-white/25 px-5 py-2 text-xs uppercase tracking-[0.18em] text-white/85 transition-colors duration-300 hover:border-white/70 hover:bg-white/5 hover:text-white md:text-[13px]"
        >
          Get a quote
        </a>
      </div>
    </header>
  );
}
