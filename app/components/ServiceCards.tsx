const SERVICES = [
  {
    title: "Custom inground pools",
    description:
      "Infinity edges, plunge pools, and lap lanes shaped to your site and its sightlines.",
  },
  {
    title: "Spas & hot tubs",
    description:
      "Integrated spas that flow straight from the pool — warm and ready in every season.",
  },
  {
    title: "Outdoor kitchens & living",
    description:
      "Stone counters, shaded lounges, and dining built for long Mediterranean evenings.",
  },
  {
    title: "Lighting & automation",
    description:
      "Set the mood from your phone — water, light, and heat tuned to the hour.",
  },
  {
    title: "Renovations & remodels",
    description:
      "Tired backyards reimagined into the quiet centerpiece of the whole home.",
  },
  {
    title: "Service & maintenance",
    description:
      "Year-round care that keeps water, stone, and machinery running flawlessly.",
  },
];

export default function ServiceCards() {
  return (
    <section className="w-full bg-[#0a0a0b] px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto max-w-[1300px]">
        <div className="mb-14 md:mb-20">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[#C97A4A]">
            What we build
          </p>
          <h2 className="font-serif text-3xl leading-tight text-white/95 md:text-5xl">
            Everything beyond the back door.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04] hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] md:p-10"
            >
              <div className="mb-5 h-px w-10 bg-[#C97A4A] transition-all duration-300 group-hover:w-16" />
              <h3 className="font-serif text-xl text-white/95 md:text-2xl">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/55 md:text-[15px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
