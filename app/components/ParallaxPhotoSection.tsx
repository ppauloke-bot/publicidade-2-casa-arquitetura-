"use client";

import { useEffect, useRef, useState } from "react";

type ParallaxPhotoSectionProps = {
  imageUrl: string;
  eyebrow: string;
  heading: string;
  align?: "left" | "center" | "right";
};

// How much slower the image moves than the page (fraction of scroll offset).
// The image is rendered 130% tall so this movement never reveals its edges.
const PARALLAX_FACTOR = 0.18;

export default function ParallaxPhotoSection({
  imageUrl,
  eyebrow,
  heading,
  align = "left",
}: ParallaxPhotoSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    if (!section || !image) return;

    let raf = 0;
    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = section.getBoundingClientRect();
      // Only animate while the section is anywhere near the viewport.
      if (rect.bottom < -100 || rect.top > window.innerHeight + 100) return;
      // rect.top goes from +vh (entering) → -vh (leaving); scale it down so the
      // image drifts slower than the foreground.
      const offset = rect.top * PARALLAX_FACTOR;
      image.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        raf = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const alignment =
    align === "center"
      ? "items-center text-center"
      : align === "right"
      ? "items-end text-right"
      : "items-start text-left";

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-[#1a1410]"
    >
      {/* Warm stone-toned gradient base — always present, and the graceful
          fallback if the photo fails to load. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #2b211a 0%, #47372a 45%, #1c1510 100%)",
        }}
        aria-hidden
      />

      {!hasError && (
        <img
          ref={imageRef}
          src={imageUrl}
          alt=""
          onError={() => setHasError(true)}
          className="absolute left-0 top-[-15%] h-[130%] w-full object-cover will-change-transform"
          style={{ transform: "translate3d(0,0,0)" }}
        />
      )}

      {/* Legibility overlay — darkened toward the side the text sits on. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0.35) 100%)",
        }}
        aria-hidden
      />

      {/* Foreground content. */}
      <div className="relative z-10 flex h-full w-full items-center">
        <div className="mx-auto w-full max-w-[1400px] px-8 md:px-14">
          <div className={`flex w-full flex-col ${alignment}`}>
            <div className="max-w-[560px]">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-white/60">
                {eyebrow}
              </p>
              <h2
                className="font-serif text-3xl leading-tight text-white/95 md:text-5xl"
                style={{ textShadow: "0 2px 30px rgba(0,0,0,0.5)" }}
              >
                {heading}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
