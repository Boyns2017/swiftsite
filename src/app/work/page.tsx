import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work — SwiftSite",
  description:
    "Websites built by SwiftSite for small businesses, freelancers, and personal brands across London.",
};

export default function WorkPage() {
  return (
    <div className="pt-32 pb-24 max-w-6xl mx-auto px-6">
      <div className="mb-16">
        <p className="text-white/25 text-xs uppercase tracking-widest mb-3">
          Portfolio
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
          The work
        </h1>
        <p className="text-white/40 text-lg max-w-lg leading-relaxed">
          Sites built for small businesses, freelancers, and personal brands
          across London.
        </p>
      </div>

      {/* Empty state */}
      <div className="rounded-3xl border border-dashed border-white/10 bg-white/[0.01] py-32 flex flex-col items-center justify-center text-center px-6">
        <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-2xl mb-6">
          🚀
        </div>
        <h2 className="text-white font-semibold text-xl mb-2">
          Projects coming soon
        </h2>
        <p className="text-white/35 text-sm max-w-xs leading-relaxed mb-8">
          Be one of the first. Every site built gets featured here.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-colors"
        >
          Start your project
        </Link>
      </div>
    </div>
  );
}
