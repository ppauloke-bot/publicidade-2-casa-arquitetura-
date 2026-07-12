"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const NAV = [
  { label: "Process", href: "#process" },
  { label: "Gallery", href: "#gallery" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
];

export default function Header() {
  const [onLight, setOnLight] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Past the hero video → header sits over light editorial content.
      setOnLight(window.scrollY > window.innerHeight * 0.85);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        onLight
          ? "border-b border-black/[0.06] bg-[#f4efe7]/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1500px] items-center justify-between px-6 py-4 sm:px-10 md:px-14 md:py-5">
        <a href="#top" aria-label="Solmar Studio — home" className="flex items-center">
          <Logo tone={onLight ? "dark" : "light"} />
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[13px] tracking-wide transition-colors duration-300 ${
                onLight
                  ? "text-[#1b1510]/70 hover:text-[#1b1510]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#quote"
          className={`rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.18em] transition-colors duration-300 md:px-6 md:text-[13px] ${
            onLight
              ? "bg-[#1b1510] text-[#f4efe7] hover:bg-[#c97a4a]"
              : "border border-white/30 text-white/90 hover:border-white/70 hover:bg-white/5"
          }`}
        >
          Get a quote
        </a>
      </div>
    </header>
  );
}
