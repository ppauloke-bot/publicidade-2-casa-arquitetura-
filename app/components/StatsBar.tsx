"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  target: number;
  decimals?: number;
  suffix?: string;
  label: string;
};

const STATS: Stat[] = [
  { target: 18, label: "years designing & building" },
  { target: 600, suffix: "+", label: "pools delivered" },
  { target: 25, suffix: "yr", label: "structural warranty" },
  { target: 4.9, decimals: 1, suffix: "★", label: "across 400+ reviews" },
];

const DURATION = 1600;

function CountUp({ stat, start }: { stat: Stat; start: boolean }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / DURATION);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(stat.target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, stat.target]);
  return (
    <span>
      {value.toFixed(stat.decimals ?? 0)}
      {stat.suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setStart(true);
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
    <section className="w-full bg-[#17120e] px-6 py-20 md:px-16 md:py-24">
      <div
        ref={ref}
        className="mx-auto grid max-w-[1300px] grid-cols-2 gap-y-12 gap-x-6 md:grid-cols-4 md:gap-x-10"
      >
        {STATS.map((stat, i) => (
          <div key={i} className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="font-serif text-5xl leading-none text-[#f4efe7] md:text-[64px]">
              <CountUp stat={stat} start={start} />
            </div>
            <div className="mt-4 h-px w-8 bg-[#c97a4a]" />
            <div className="mt-4 max-w-[180px] text-[11px] uppercase tracking-[0.18em] text-white/45 md:text-xs">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
