import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="py-32 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Ready to get started?
        </h2>
        <p className="text-white/40 text-lg mb-10 max-w-sm mx-auto leading-relaxed">
          Tell me about your business and I&apos;ll get back to you within 24
          hours.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-colors"
        >
          Get in touch
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
