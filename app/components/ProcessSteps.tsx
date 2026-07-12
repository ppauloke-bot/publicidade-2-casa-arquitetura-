const STEPS = [
  {
    index: "01",
    title: "Design & 3D concept",
    description:
      "We walk the site, read the light, and hand you a photoreal 3D concept before a single line is dug.",
  },
  {
    index: "02",
    title: "Fixed, itemized quote",
    description:
      "One clear price, line by line. What you approve is what you pay — permits and engineering included.",
  },
  {
    index: "03",
    title: "Excavation & structure",
    description:
      "Gunite shell, steel, and plumbing set and inspected to code at every stage of the build.",
  },
  {
    index: "04",
    title: "Tile, stone & finishes",
    description:
      "Hand-set tile, natural stone coping, and the surfaces you chose — laid by the same crew throughout.",
  },
  {
    index: "05",
    title: "Fill, balance & handover",
    description:
      "We fill it, balance the water, and walk you through every button before we ever leave.",
  },
];

export default function ProcessSteps() {
  return (
    <section id="process" className="w-full bg-[#f4efe7] px-6 py-24 md:px-16 md:py-36">
      <div className="mx-auto max-w-[1300px]">
        <div className="mb-16 text-center md:mb-20">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.34em] text-[#c97a4a]">
            The process
          </p>
          <h2 className="font-serif text-4xl leading-[1.05] text-[#1b1510] md:text-6xl">
            Five steps. Zero guesswork.
          </h2>
          <p className="mx-auto mt-6 max-w-[520px] text-base leading-relaxed text-[#6f6355]">
            You watched it happen up top. Here&apos;s what&apos;s actually going
            on under the surface.
          </p>
        </div>

        <div className="border-t border-black/10">
          {STEPS.map((step) => (
            <div
              key={step.index}
              className="grid grid-cols-1 gap-2 border-b border-black/10 py-8 md:grid-cols-[auto_1fr_2fr] md:items-baseline md:gap-10 md:py-10"
            >
              <span className="font-mono text-sm text-[#c97a4a]">{step.index}</span>
              <h3 className="font-serif text-2xl text-[#1b1510] md:text-3xl">
                {step.title}
              </h3>
              <p className="max-w-[52ch] text-[15px] leading-relaxed text-[#6f6355]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
