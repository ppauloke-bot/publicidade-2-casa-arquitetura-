export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0b] px-8 py-28 md:py-36">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center text-center">
        <p className="font-serif text-2xl tracking-wide text-white/95 md:text-3xl">
          Orvika
        </p>

        <p className="mt-10 max-w-[520px] font-serif text-xl leading-snug text-white/80 md:text-2xl">
          Ready to build something worth showing?
        </p>

        <a
          href="#"
          className="mt-10 inline-block rounded-full border border-white/30 px-8 py-3 text-sm uppercase tracking-[0.2em] text-white/85 transition-colors duration-300 hover:border-white/70 hover:bg-white/5 hover:text-white"
        >
          Get a quote
        </a>

        <p className="mt-20 text-xs uppercase tracking-[0.2em] text-white/35">
          © 2026 Orvika. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
