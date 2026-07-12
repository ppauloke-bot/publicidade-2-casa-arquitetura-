"use client";

import { useEffect, useRef, useState } from "react";

export type Chapter = {
  startProgress: number;
  endProgress: number;
  number: string;
  label: string;
  caption: string;
};

type ScrollVideoSectionProps = {
  videoSrc: string;
  containerHeightVh: number;
  chapters: Chapter[];
};

const SMOOTHING = 0.22;

export default function ScrollVideoSection({
  videoSrc,
  containerHeightVh,
  chapters,
}: ScrollVideoSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // Mutable values read inside the rAF loop without triggering re-renders.
  const durationRef = useRef<number>(NaN);
  const progressRef = useRef<number>(0);
  const rafRef = useRef<number>(0);

  const [ready, setReady] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Determine which chapter a given overall progress falls into. When the
  // progress sits in a gap between chapters we keep the previously active one
  // so the caption never flickers to empty.
  const resolveChapterIndex = (progress: number, current: number) => {
    for (let i = 0; i < chapters.length; i += 1) {
      const c = chapters[i];
      if (progress >= c.startProgress && progress <= c.endProgress) {
        return i;
      }
    }
    // Before the first chapter → show the first; otherwise keep current.
    if (progress < chapters[0].startProgress) return 0;
    return current;
  };

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    let mounted = true;

    const onLoadedMetadata = () => {
      durationRef.current = video.duration;
      setReady(true);
    };
    video.addEventListener("loadedmetadata", onLoadedMetadata);
    // Metadata may already be available (cached / fast load).
    if (video.readyState >= 1 && !Number.isNaN(video.duration)) {
      onLoadedMetadata();
    }

    const computeProgress = () => {
      const rect = container.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return 0;
      const raw = -rect.top / scrollable;
      return Math.min(1, Math.max(0, raw));
    };

    const onScrollOrResize = () => {
      progressRef.current = computeProgress();
    };

    // Prime once on mount.
    progressRef.current = computeProgress();

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });

    let lastIndex = -1;

    const tick = () => {
      if (!mounted) return;
      rafRef.current = requestAnimationFrame(tick);

      const progress = progressRef.current;

      // Progress bar reflects overall progress through the whole section.
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${(progress * 100).toFixed(2)}%`;
      }

      // Update the active chapter only when it actually changes.
      const nextIndex = resolveChapterIndex(progress, lastIndex < 0 ? 0 : lastIndex);
      if (nextIndex !== lastIndex) {
        lastIndex = nextIndex;
        setActiveIndex(nextIndex);
      }

      // Skip video scrubbing when we can't scrub meaningfully.
      const duration = durationRef.current;
      if (Number.isNaN(duration) || duration <= 0) return;
      if (typeof document !== "undefined" && document.hidden) return;

      const target = progress * duration;
      const currentTime = video.currentTime;
      const next = currentTime + (target - currentTime) * SMOOTHING;
      // Avoid churning currentTime on imperceptible deltas.
      if (Math.abs(target - currentTime) > 0.001) {
        try {
          video.currentTime = next;
        } catch {
          /* ignore transient seek errors */
        }
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      mounted = false;
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapters.length]);

  const active = chapters[activeIndex] ?? chapters[0];

  return (
    <section
      ref={containerRef}
      style={{ height: `${containerHeightVh}vh` }}
      className="relative w-full"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Fallback dark background — always present, sits behind the video. */}
        <div className="absolute inset-0 bg-[#0a0a0b]" aria-hidden />

        {!hasError && (
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            playsInline
            preload="auto"
            onError={() => setHasError(true)}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-200 ease-out"
            style={{ opacity: ready ? 1 : 0 }}
          />
        )}

        {/* Subtle bottom gradient to keep captions legible over bright frames. */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[45vh]"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0) 100%)",
          }}
          aria-hidden
        />

        {/* Chapter + progress overlay: bottom-left. */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full">
          <div className="mx-8 mb-10 max-w-[500px] md:mx-14 md:mb-14">
            <div key={activeIndex} className="chapter-fade">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-white/55">
                {active.number} — {active.label}
              </p>
              <p
                className="font-serif text-xl leading-snug text-white/95 md:text-2xl"
                style={{ textShadow: "0 1px 20px rgba(0,0,0,0.55)" }}
              >
                {active.caption}
              </p>
            </div>

            {/* Single continuous progress bar for the entire section. */}
            <div className="mt-6 h-px w-full max-w-[500px] bg-white/20">
              <div
                ref={progressBarRef}
                className="h-full bg-white/90"
                style={{ width: "0%" }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .chapter-fade {
          animation: chapterFade 300ms ease-out;
        }
        @keyframes chapterFade {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
