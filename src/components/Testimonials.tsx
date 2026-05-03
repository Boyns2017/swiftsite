const testimonials = [
  {
    quote:
      "Harrison turned around a site for us in days. It looks exactly like what you'd expect to pay thousands for — clean, fast, and our customers love it.",
    name: "Marcus Osei",
    role: "Owner, The Junction Coffee",
    initials: "MO",
  },
  {
    quote:
      "I'd been putting off getting a proper website for two years. SwiftSite sorted it in a week. Enquiries have already picked up since it went live.",
    name: "Priya Chadha",
    role: "Personal Trainer, Apex Fitness",
    initials: "PC",
  },
  {
    quote:
      "My portfolio finally looks the part. Clients mention it in our first call now — that never happened before. Genuinely great service.",
    name: "Ellie Strand",
    role: "Photographer, Studio Maré",
    initials: "ES",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-white/25 text-xs uppercase tracking-widest mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            What clients say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-8 rounded-2xl border border-white/[0.07] bg-white/[0.02]"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, s) => (
                  <svg
                    key={s}
                    className="w-4 h-4 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-white/55 text-sm leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/[0.08] border border-white/[0.1] flex items-center justify-center text-white/50 text-xs font-semibold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white/70 text-sm font-medium">{t.name}</p>
                  <p className="text-white/30 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
