import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />
      {/* Radial fade to black */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,transparent_30%,#050505_100%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24">
        {/* Credibility badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-white/40 text-xs mb-10 tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          VP Engineering · JPMorgan · Full Stack · London
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6">
          Your business deserves
          <br />
          <span className="text-white/25">a website that works.</span>
        </h1>

        <p className="text-lg text-white/45 max-w-xl mx-auto mb-10 leading-relaxed">
          Professional, fast websites built by a senior engineer — not a
          template. For small businesses, freelancers, and personal brands.
          From&nbsp;£799.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/contact"
            className="px-7 py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-colors"
          >
            Start your project
          </Link>
          <Link
            href="/work"
            className="px-7 py-3.5 border border-white/15 text-white/60 text-sm font-medium rounded-full hover:text-white hover:border-white/30 transition-all"
          >
            See the work
          </Link>
        </div>

        <div className="mt-20 flex items-center justify-center gap-6 text-white/20 text-sm">
          <span>Small businesses</span>
          <span className="text-white/10">·</span>
          <span>Freelancers</span>
          <span className="text-white/10">·</span>
          <span>Personal brands</span>
        </div>
      </div>
    </section>
  );
}
