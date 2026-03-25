import Link from "next/link";

const included = [
  "Custom design — no templates",
  "Up to 5 pages included",
  "Mobile-first and fully responsive",
  "SEO fundamentals built in",
  "Contact form",
  "1 round of revisions",
  "Deployed and live on fast hosting",
];

const retainerIncluded = [
  "Content updates on request",
  "Performance monitoring",
  "Security & dependency updates",
  "Priority support",
  "Monthly check-in",
];

const addons = [
  { label: "Extra pages", price: "£75 / page" },
  { label: "Google Business setup", price: "£99 one-off" },
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {/* Build card */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-10 flex flex-col">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h3 className="text-white font-bold text-2xl mb-1">
                Website Build
              </h3>
              <p className="text-white/35 text-sm">
                Everything you need to launch
              </p>
            </div>
            <div className="text-right shrink-0 ml-4">
              <div className="text-white font-bold text-4xl tracking-tight">
                £799
              </div>
              <div className="text-white/30 text-sm">one-off</div>
            </div>
          </div>

          <ul className="space-y-3 mb-10 flex-1">
            {included.map((item) => (
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
            className="block w-full text-center px-6 py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-colors"
          >
            Start your project
          </Link>

          <div className="mt-8 pt-8 border-t border-white/[0.07]">
            <p className="text-white/25 text-xs uppercase tracking-widest mb-4">
              Add-ons
            </p>
            <div className="space-y-2.5">
              {addons.map((addon) => (
                <div key={addon.label} className="flex justify-between text-sm">
                  <span className="text-white/45">{addon.label}</span>
                  <span className="text-white/35">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Retainer card */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-10 flex flex-col">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h3 className="text-white font-bold text-2xl mb-1">
                Maintenance
              </h3>
              <p className="text-white/35 text-sm">
                Keep your site fresh & secure
              </p>
            </div>
            <div className="text-right shrink-0 ml-4">
              <div className="text-white font-bold text-4xl tracking-tight">
                £49
              </div>
              <div className="text-white/30 text-sm">/ month</div>
            </div>
          </div>

          <ul className="space-y-3 mb-10 flex-1">
            {retainerIncluded.map((item) => (
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
            className="block w-full text-center px-6 py-4 border border-white/15 text-white/70 text-sm font-semibold rounded-full hover:text-white hover:border-white/30 transition-all"
          >
            Add to your project
          </Link>

          <div className="mt-8 pt-8 border-t border-white/[0.07]">
            <p className="text-white/25 text-xs leading-relaxed">
              Available as an add-on after your site is built. Cancel anytime.
            </p>
          </div>
        </div>
      </div>

      <p className="text-center text-white/25 text-sm mt-8">
        Need something custom?{" "}
        <Link
          href="/contact"
          className="text-white/45 hover:text-white transition-colors underline underline-offset-2"
        >
          Let&apos;s talk.
        </Link>
      </p>
    </section>
  );
}
