const REVIEWS = [
  {
    quote:
      "Solmar turned an empty side yard into the best room in our house — and they hit every single date.",
    name: "Marta R.",
    location: "Cascais",
  },
  {
    quote:
      "Three bids, one clear choice. The 3D design was exactly what we got — down to the tile.",
    name: "Tiago & Inês",
    location: "Estoril",
  },
  {
    quote:
      "They handled the slope, the permits, all of it. We just picked finishes and watched it happen.",
    name: "P. Nunes",
    location: "Sintra",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-sm text-[#c97a4a]" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="w-full bg-[#f4efe7] px-6 py-24 md:px-16 md:py-36">
      <div className="mx-auto max-w-[1300px]">
        <div className="mb-14 text-center md:mb-20">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.34em] text-[#c97a4a]">
            Homeowners
          </p>
          <h2 className="font-serif text-4xl leading-[1.05] text-[#1b1510] md:text-6xl">
            Word travels in the cul-de-sac.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col justify-between rounded-xl border border-black/[0.07] bg-[#faf7f1] p-8 md:p-9"
            >
              <blockquote className="font-serif text-lg leading-relaxed text-[#1b1510]">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-8">
                <Stars />
                <p className="mt-3 text-sm text-[#6f6355]">
                  {review.name} · {review.location}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
