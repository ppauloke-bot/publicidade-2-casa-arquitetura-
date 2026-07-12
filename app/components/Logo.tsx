type LogoProps = {
  size?: "sm" | "md";
  className?: string;
  tone?: "light" | "muted";
};

// Brand mark: a fine terracotta sun resting above two horizon/water lines —
// a quiet nod to Mediterranean light on still pool water. Stroke only, no fill.
export default function Logo({
  size = "md",
  className = "",
  tone = "light",
}: LogoProps) {
  const mark = size === "sm" ? 26 : 30;
  const wordClass =
    size === "sm"
      ? "text-[13px] tracking-[0.42em]"
      : "text-[15px] tracking-[0.44em] md:text-base";
  const wordColor = tone === "muted" ? "text-white/70" : "text-white/95";

  return (
    <span className={`inline-flex items-center gap-3.5 ${className}`}>
      <svg
        width={mark}
        height={mark}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        {/* sun */}
        <circle cx="16" cy="13" r="7.5" stroke="#C97A4A" strokeWidth="1.4" />
        {/* horizon */}
        <line
          x1="4"
          y1="24"
          x2="28"
          y2="24"
          stroke="#C97A4A"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        {/* water ripple */}
        <line
          x1="11"
          y1="28"
          x2="21"
          y2="28"
          stroke="#C97A4A"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
      <span className={`font-serif uppercase ${wordColor} ${wordClass}`}>
        Solmar
      </span>
    </span>
  );
}
