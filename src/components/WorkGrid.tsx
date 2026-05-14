const projects = [
  {
    name: "Momiji Charity",
    type: "Charity",
    desc: "Website for a UK-based charity. Clean, accessible site with mission, events, and a donation-focused contact page.",
    tags: ["Charity", "Accessible", "Mobile-first"],
    url: "https://momijicharity.com/",
  },
  {
    name: "Fen.Elektra",
    type: "Creative Portfolio",
    desc: "Portfolio site for a floral and visual designer. Full-page gallery, about section, and enquiry form.",
    tags: ["Portfolio", "Gallery", "Creative"],
    url: "https://fen-elektra.vercel.app/",
  },
];

export default function WorkGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {projects.map((p) => (
        <a
          key={p.name}
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block p-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.11] transition-all"
        >
          <div className="flex items-start justify-between mb-5">
            <div>
              <p className="text-white/25 text-xs uppercase tracking-widest mb-1">
                {p.type}
              </p>
              <h3 className="text-white font-semibold text-xl flex items-center gap-2">
                {p.name}
                <svg
                  className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </h3>
            </div>
            <span className="flex items-center gap-1.5 text-xs text-emerald-400/80 bg-emerald-400/[0.07] px-2.5 py-1 rounded-full border border-emerald-400/20 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Live
            </span>
          </div>

          <p className="text-white/40 text-sm leading-relaxed mb-6">{p.desc}</p>

          <div className="flex items-center gap-2 flex-wrap">
            {p.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-white/30 bg-white/[0.04] border border-white/[0.07] px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>
  );
}
