"use client";

const CHECKS = [
  "On-site evaluation & soil check",
  "3D design with a fixed, itemized quote",
  "Financing options available",
];

const inputClass =
  "w-full rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-[#f4efe7] placeholder-white/35 outline-none transition-colors focus:border-[#c97a4a]";
const labelClass =
  "mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-white/45";

export default function ContactCTA() {
  return (
    <section id="quote" className="w-full bg-[#17120e] px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Pitch */}
        <div className="flex flex-col justify-center">
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.34em] text-[#c97a4a]">
            Free design consult
          </p>
          <h2 className="font-serif text-4xl leading-[1.05] text-[#f4efe7] md:text-6xl">
            Let&apos;s design your backyard.
          </h2>
          <p className="mt-6 max-w-[440px] text-base leading-relaxed text-white/55">
            Tell us a little about your space. We&apos;ll follow up to schedule
            an on-site visit and a 3D concept — no pressure, no obligation.
          </p>
          <ul className="mt-9 space-y-3">
            {CHECKS.map((c) => (
              <li key={c} className="flex items-center gap-3 text-sm text-white/75">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
                  <path
                    d="M4 10.5L8 14.5L16 6"
                    stroke="#c97a4a"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 md:p-9"
        >
          <div className="mb-5">
            <label className={labelClass} htmlFor="name">Name</label>
            <input id="name" className={inputClass} placeholder="Your name" />
          </div>

          <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="email">Email</label>
              <input id="email" type="email" className={inputClass} placeholder="you@email.com" />
            </div>
            <div>
              <label className={labelClass} htmlFor="phone">Phone</label>
              <input id="phone" className={inputClass} placeholder="+351 000 000 000" />
            </div>
          </div>

          <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="project">Project</label>
              <select id="project" className={`${inputClass} appearance-none`}>
                <option>New inground pool</option>
                <option>Renovation & remodel</option>
                <option>Spa & hot tub</option>
                <option>Outdoor living</option>
                <option>Service & maintenance</option>
              </select>
            </div>
            <div>
              <label className={labelClass} htmlFor="budget">Budget</label>
              <select id="budget" className={`${inputClass} appearance-none`}>
                <option>Prefer not to say</option>
                <option>€25k – €50k</option>
                <option>€50k – €100k</option>
                <option>€100k+</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className={labelClass} htmlFor="yard">Tell us about your yard</label>
            <textarea
              id="yard"
              rows={3}
              className={`${inputClass} resize-none`}
              placeholder="Lot size, slope, must-haves, timeline…"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-[#c97a4a] py-3.5 text-sm font-medium uppercase tracking-[0.18em] text-[#17120e] transition-colors duration-300 hover:bg-[#d98a58]"
          >
            Request my design consult
          </button>
        </form>
      </div>
    </section>
  );
}
