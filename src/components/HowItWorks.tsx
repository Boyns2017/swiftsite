const steps = [
  {
    number: "01",
    title: "Discovery",
    desc: "We start with a short call to understand your business, your goals, and what you need from your website.",
  },
  {
    number: "02",
    title: "Design & Build",
    desc: "I design and build your site from scratch — mobile-first, fast, and built to convert visitors into customers.",
  },
  {
    number: "03",
    title: "Launch",
    desc: "Your site goes live on a fast, reliable host. I walk you through everything and hand it over cleanly.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-32 border-y border-white/[0.06] bg-white/[0.01]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-white/25 text-xs uppercase tracking-widest mb-3">
            The process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Simple. Fast. Done.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-full w-full h-px bg-gradient-to-r from-white/10 to-transparent -translate-x-8" />
              )}
              <div className="text-white/[0.07] text-7xl font-bold mb-5 leading-none select-none">
                {step.number}
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">
                {step.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
