const SERVICES = [
  {
    title: "Custom inground pools",
    description:
      "Gunite pools designed around your yard, your stone, and the way you actually live outside.",
  },
  {
    title: "Spas & hot tubs",
    description:
      "Spillover spas and standalone hot tubs, tuned for year-round evenings by the water.",
  },
  {
    title: "Outdoor kitchens & living",
    description:
      "Built-in grills, bars, pergolas, and fire features — one cohesive design, one crew.",
  },
  {
    title: "Lighting & automation",
    description:
      "Colour LED, app control, and energy-smart pumps so the pool quietly runs itself.",
  },
  {
    title: "Renovations & remodels",
    description:
      "Replaster, retile, and modernize a tired pool into something that feels brand new.",
  },
  {
    title: "Service & maintenance",
    description:
      "Cleaning, balancing, and equipment care plans — long after the build is done.",
  },
];

export default function ServiceCards() {
  return (
    <section id="services" className="w-full bg-[#efe8dc] px-6 py-24 md:px-16 md:py-36">
      <div className="mx-auto max-w-[1300px]">
        <div className="mb-14 text-center md:mb-20">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.34em] text-[#c97a4a]">
            What we build
          </p>
          <h2 className="font-serif text-4xl leading-[1.05] text-[#1b1510] md:text-6xl">
            Everything beyond the back door.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="rounded-xl border border-black/[0.07] bg-[#faf7f1] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-black/10 hover:shadow-[0_24px_50px_-28px_rgba(27,21,16,0.4)] md:p-10"
            >
              <h3 className="font-serif text-xl text-[#1b1510] md:text-[22px]">
                {service.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[#6f6355]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
