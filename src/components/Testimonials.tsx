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
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border border-dashed border-white/[0.07] bg-white/[0.01]"
            >
              {/* Star row */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, s) => (
                  <svg
                    key={s}
                    className="w-4 h-4 text-white/10"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote placeholder */}
              <div className="space-y-2 mb-6">
                <div className="h-3 bg-white/[0.05] rounded-full w-full" />
                <div className="h-3 bg-white/[0.05] rounded-full w-5/6" />
                <div className="h-3 bg-white/[0.05] rounded-full w-4/6" />
              </div>

              {/* Author placeholder */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.07]" />
                <div className="space-y-1.5">
                  <div className="h-2.5 bg-white/[0.07] rounded-full w-20" />
                  <div className="h-2 bg-white/[0.04] rounded-full w-28" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-white/20 text-xs mt-8">
          Testimonials from real clients — coming soon.
        </p>
      </div>
    </section>
  );
}
