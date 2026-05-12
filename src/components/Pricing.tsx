import Link from "next/link";

const tiers = [
  {
    name: "Static Site",
    tagline: "Simple info site, no moving parts",
    build: "£800",
    hosting: "£25",
    hostingSuffix: "/mo",
    featured: true,
    features: [
      "Custom design — no templates",
      "Up to 5 pages included",
      "Mobile-first and fully responsive",
      "SEO fundamentals built in",
      "Contact form",
      "3 meetings included",
      "Deployed and live on fast hosting",
    ],
  },
  {
    name: "Dynamic Site",
    tagline: "Blog or content you can update yourself",
    build: "£2,500",
    hosting: "£50",
    hostingSuffix: "/mo",
    features: [
      "Custom design — no templates",
      "Blog or news section",
      "Content you can edit yourself",
      "Mobile-first and fully responsive",
      "SEO fundamentals built in",
      "Contact form",
      "1 round of revisions",
    ],
  },
  {
    name: "E-commerce",
    tagline: "Online shop or anything more complex",
    build: "£3,500+",
    hosting: "£75–100",
    hostingSuffix: "/mo",
    features: [
      "Online shop & product pages",
      "Payment integration",
      "Order management",
      "Mobile-first and fully responsive",
      "SEO fundamentals built in",
      "Scoped to your requirements",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-32 max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-white/25 text-xs uppercase tracking-widest mb-3">
          Pricing
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Simple pricing.
          <br />
          <span className="text-white/25">No surprises.</span>
        </h2>
        <p className="text-white/35 text-sm mt-4 max-w-sm mx-auto">
          Agencies charge £4,500+ for this. You won&apos;t.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-3xl border p-8 flex flex-col ${
              tier.featured
                ? "border-white/20 bg-white/[0.05]"
                : "border-white/10 bg-white/[0.025]"
            }`}
          >
            <div className="mb-8">
              {tier.featured && (
                <p className="text-white/30 text-xs uppercase tracking-widest mb-3">
                  Most popular
                </p>
              )}
              <h3 className="text-white font-bold text-xl mb-1">{tier.name}</h3>
              <p className="text-white/35 text-sm mb-5">{tier.tagline}</p>
              <div className="text-white font-bold text-4xl tracking-tight">
                {tier.build}
              </div>
              <div className="text-white/30 text-sm">one-off build</div>
              <div className="mt-2 text-white/40 text-sm">
                + {tier.hosting}
                {tier.hostingSuffix} hosting
              </div>
            </div>

            <ul className="space-y-3 mb-10 flex-1">
              {tier.features.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-white/55"
                >
                  <svg
                    className="w-4 h-4 text-white/25 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className={`block w-full text-center px-6 py-4 text-sm font-semibold rounded-full transition-all ${
                tier.featured
                  ? "bg-white text-black hover:bg-white/90"
                  : "border border-white/15 text-white/70 hover:text-white hover:border-white/30"
              }`}
            >
              Start your project
            </Link>
          </div>
        ))}
      </div>

      <p className="text-center text-white/25 text-sm mt-8">
        Monthly hosting covers everything — keeping it live, fast and maintained.{" "}
        <Link
          href="/contact"
          className="text-white/45 hover:text-white transition-colors underline underline-offset-2"
        >
          Not sure what you need? Let&apos;s talk.
        </Link>
      </p>
    </section>
  );
}
