"use client";

import { useEffect, useRef, useState } from "react";

export default function ClosingSection() {
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
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="flex h-screen w-full flex-col items-center justify-center bg-[#0a0a0b] px-8 text-center"
    >
      <div
        className="transition-all duration-700 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <h2 className="font-serif text-3xl leading-tight text-white/95 md:text-5xl">
          Every project.
          <br />
          A piece worth showing.
        </h2>

        <div className="mt-10">
          <a
            href="#"
            className="inline-block rounded-full border border-white/30 px-8 py-3 text-sm uppercase tracking-[0.2em] text-white/80 transition-colors duration-300 hover:border-white/70 hover:text-white"
          >
            See more
          </a>
        </div>
      </div>
    </section>
  );
}
