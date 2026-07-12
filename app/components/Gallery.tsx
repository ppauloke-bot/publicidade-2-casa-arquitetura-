"use client";

import { useState } from "react";

type Project = { src: string; caption: string; location: string };

const PROJECTS: Project[] = [
  { src: "/gallery-1.jpg", caption: "Family pool", location: "Cascais" },
  { src: "/gallery-2.jpg", caption: "Infinity edge", location: "Comporta" },
  { src: "/gallery-3.jpg", caption: "Courtyard spa", location: "Sintra" },
  { src: "/gallery-4.jpg", caption: "Garden & pool", location: "Estoril" },
];

function ProjectCard({ project }: { project: Project }) {
  const [hasError, setHasError] = useState(false);
  return (
    <figure className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-[#2b211a]">
      {/* Warm fallback so a missing photo still reads as a project card. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #3a2c20 0%, #6a4a30 55%, #23190f 100%)",
        }}
        aria-hidden
      />
      {!hasError && (
        <img
          src={project.src}
          alt={`${project.caption} — ${project.location}`}
          onError={() => setHasError(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      )}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 55%)",
        }}
        aria-hidden
      />
      <figcaption className="absolute bottom-0 left-0 flex w-full items-baseline gap-2 p-6">
        <span className="font-serif text-lg text-white md:text-xl">
          {project.caption}
        </span>
        <span className="text-sm text-white/60">· {project.location}</span>
      </figcaption>
    </figure>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="w-full bg-[#f4efe7] px-6 py-24 md:px-16 md:py-36">
      <div className="mx-auto max-w-[1300px]">
        <div className="mb-14 text-center md:mb-20">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.34em] text-[#c97a4a]">
            Selected work
          </p>
          <h2 className="font-serif text-4xl leading-[1.05] text-[#1b1510] md:text-6xl">
            A few we&apos;re proud of.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.src} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
