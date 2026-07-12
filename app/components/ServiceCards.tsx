const SERVICES = [
  {
    index: "01",
    title: "Custom inground pools",
    description:
      "Infinity edges, plunge pools, and lap lanes shaped to the site and its sightlines.",
  },
  {
    index: "02",
    title: "Spas & hot tubs",
    description:
      "Integrated spas that flow straight from the pool — warm and ready in any season.",
  },
  {
    index: "03",
    title: "Outdoor kitchens & living",
    description:
      "Stone counters, shaded lounges, and dining built for long Mediterranean evenings.",
  },
  {
    index: "04",
    title: "Lighting & automation",
    description:
      "Water, light, and heat tuned to the hour — controlled from a single tap.",
  },
  {
    index: "05",
    title: "Renovations & remodels",
    description:
      "Tired backyards reimagined into the quiet centrepiece of the whole home.",
  },
  {
    index: "06",
    title: "Service & maintenance",
    description:
      "Year-round care that keeps water, stone, and machinery running flawlessly.",
  },
];

function Arrow() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="translate-y-0 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#C97A4A]"
      aria-hidden
    >
      <path
        d="M5 15L15 5M15 5H7M15 5V13"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServiceCards() {
  return (
    <section className="w-full bg-[#0a0a0b] px-6 py-28 md:px-16 md:py-40">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.34em] text-[#C97A4A]">
              What we build
            </p>
            <h2 className="max-w-[15ch] font-serif text-4xl leading-[1.05] text-white/95 md:text-6xl">
              Everything beyond the back door.
            </h2>
          </div>
          <p className="max-w-[34ch] text-sm leading-relaxed text-white/45 md:text-base">
            One studio, from the first excavation line to the last evening the
            lights come on.
          </p>
        </div>

        {/* Editorial hairline grid — no floating cards. */}
        <div className="grid grid-cols-1 border-l border-t border-white/10 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.index}
              className="group relative flex min-h-[260px] flex-col justify-between border-b border-r border-white/10 p-8 transition-colors duration-300 hover:bg-white/[0.025] md:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs tracking-widest text-white/30 transition-colors duration-300 group-hover:text-[#C97A4A]">
                  {service.index}
                </span>
                <Arrow />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-white/95 md:text-[26px]">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-[38ch] text-sm leading-relaxed text-white/50 md:text-[15px]">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
