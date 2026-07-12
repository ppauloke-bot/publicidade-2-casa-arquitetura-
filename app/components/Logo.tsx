type LogoProps = {
  size?: "sm" | "md";
  className?: string;
};

// Brand mark: a thin architectural arch (the sun / an arch) with a fine
// horizon line crossing its lower third. Single warm terracotta stroke, no
// fill — deliberately minimal.
export default function Logo({ size = "md", className = "" }: LogoProps) {
  const mark = size === "sm" ? 22 : 28;
  const wordClass =
    size === "sm"
      ? "text-sm tracking-[0.34em]"
      : "text-base tracking-[0.36em] md:text-lg";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width={mark}
        height={(mark * 26) / 40}
        viewBox="0 0 40 26"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        {/* Arch / sun */}
        <path
          d="M6 22 A14 14 0 0 1 34 22"
          stroke="#C97A4A"
          strokeWidth={1.7}
          strokeLinecap="round"
        />
        {/* Horizon line through the lower third */}
        <line
          x1="2.5"
          y1="17.5"
          x2="37.5"
          y2="17.5"
          stroke="#C97A4A"
          strokeWidth={1.7}
          strokeLinecap="round"
        />
      </svg>
      <span
        className={`font-serif font-medium uppercase text-white/95 ${wordClass}`}
      >
        Solmar
      </span>
    </span>
  );
}
