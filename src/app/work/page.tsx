import type { Metadata } from "next";
import WorkGrid from "@/components/WorkGrid";

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

      <WorkGrid />
    </div>
  );
}
