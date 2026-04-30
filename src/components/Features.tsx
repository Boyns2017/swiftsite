const features = [
  {
    title: "Engineered for speed",
    desc: "Performance-first from day one. Your site loads in under a second — because your customers won't wait.",
  },
  {
    title: "Custom, not cookie-cutter",
    desc: "No drag-and-drop builders. Every site is handcrafted to match your brand and your business goals.",
  },
  {
    title: "Mobile-first",
    desc: "Over half your visitors are on mobile. Every layout is designed for the small screen first.",
  },
  {
    title: "SEO ready",
    desc: "Clean HTML, fast load times, and correct metadata so Google can find and rank your site.",
  },
  {
    title: "Secure by default",
    desc: "HTTPS, modern hosting, and secure form handling. Built by someone who takes security seriously.",
  },
  {
    title: "Ongoing support",
    desc: "Need updates down the line? Monthly retainers keep your site fresh and you in control.",
  },
];

export default function Features() {
  return (
    <section className="py-32 max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-white/25 text-xs uppercase tracking-widest mb-3">
          Why SwiftSite
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Built differently.
          <br />
          <span className="text-white/25">On purpose.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.11] transition-all"
          >
            <h3 className="text-white font-semibold text-base mb-2">
              {f.title}
            </h3>
            <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
