"use client";

import { useState } from "react";

type ParallaxPhotoSectionProps = {
  imageUrl: string;
  eyebrow: string;
  heading: string;
  body?: string;
  /** Foreground content that scrolls up and curtains over the pinned image. */
  children?: React.ReactNode;
};

/**
 * Curtain / reveal parallax:
 * The image is pinned to the viewport (position: sticky) while the foreground —
 * the caption first, then whatever `children` are passed — scrolls up and over
 * it. The previous section lifts away to reveal the pinned image; the children
 * (a solid section) then slide over it to draw the curtain closed.
 */
export default function ParallaxPhotoSection({
  imageUrl,
  eyebrow,
  heading,
  body,
  children,
}: ParallaxPhotoSectionProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <section className="relative w-full">
      {/* Pinned background layer. */}
      <div className="sticky top-0 z-0 h-screen w-full overflow-hidden">
        {/* Warm Mediterranean-dusk fallback (also shows if no photo present). */}
        <div className="absolute inset-0 bg-[#120d0a]" aria-hidden>
          <svg
            className="h-full w-full"
            viewBox="0 0 1440 900"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden
          >
            <defs>
              <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1a2233" />
                <stop offset="42%" stopColor="#4a3324" />
                <stop offset="70%" stopColor="#9a5a34" />
                <stop offset="100%" stopColor="#c97a4a" />
              </linearGradient>
              <radialGradient id="sun" cx="50%" cy="70%" r="55%">
                <stop offset="0%" stopColor="#ffd9a0" stopOpacity="0.85" />
                <stop offset="35%" stopColor="#f0a85e" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#f0a85e" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="1440" height="900" fill="url(#sky)" />
            <circle cx="720" cy="600" r="520" fill="url(#sun)" />
            <circle
              cx="720"
              cy="600"
              r="120"
              fill="#ffe6bd"
              fillOpacity="0.55"
            />
            {/* horizon + still-water reflection */}
            <rect x="0" y="600" width="1440" height="300" fill="#0d0a08" fillOpacity="0.55" />
            <rect x="0" y="600" width="1440" height="2" fill="#ffce9a" fillOpacity="0.4" />
            {/* minimal house silhouette */}
            <g fill="#0a0705" fillOpacity="0.9">
              <rect x="470" y="470" width="230" height="132" />
              <rect x="700" y="512" width="150" height="90" />
              <rect x="360" y="520" width="110" height="82" />
            </g>
            <rect x="360" y="470" width="490" height="4" fill="#0a0705" fillOpacity="0.9" />
          </svg>
        </div>

        {/* Real photo (drop one at the given path); covers the fallback. */}
        {!hasError && (
          <img
            src={imageUrl}
            alt=""
            onError={() => setHasError(true)}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}

        {/* Legibility wash toward the bottom, where the caption sits. */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0) 80%)",
          }}
          aria-hidden
        />
      </div>

      {/* Foreground — pulled up to sit over the pinned image, then scrolls. */}
      <div className="relative z-10 -mt-[100vh]">
        {/* Reveal caption window (transparent — the pinned image shows through). */}
        <div className="flex h-screen w-full items-end">
          <div className="mx-auto w-full max-w-[1500px] px-8 pb-20 md:px-16 md:pb-28">
            <div className="max-w-[640px]">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-white/70">
                {eyebrow}
              </p>
              <h2
                className="font-serif text-4xl leading-[1.05] text-white md:text-7xl"
                style={{ textShadow: "0 2px 40px rgba(0,0,0,0.6)" }}
              >
                {heading}
              </h2>
              {body && (
                <p
                  className="mt-6 max-w-[440px] text-base leading-relaxed text-white/75"
                  style={{ textShadow: "0 1px 20px rgba(0,0,0,0.6)" }}
                >
                  {body}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Whatever is passed here (a solid section) curtains over the image. */}
        {children}
      </div>
    </section>
  );
}
