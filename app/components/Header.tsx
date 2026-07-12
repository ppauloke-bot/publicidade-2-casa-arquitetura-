"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Gain the blurred backdrop once scrolled past the hero viewport.
      setScrolled(window.scrollY > window.innerHeight * 0.9);
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
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1500px] items-center justify-between px-6 py-5 sm:px-10 md:px-16 md:py-6">
        <a href="#" aria-label="Solmar Studio — home" className="flex items-center">
          <Logo />
        </a>

        <a
          href="#"
          className="rounded-full border border-white/25 px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-white/85 transition-colors duration-300 hover:border-white/70 hover:bg-white/5 hover:text-white md:px-6 md:text-[13px]"
        >
          Get a quote
        </a>
      </div>
    </header>
  );
}
