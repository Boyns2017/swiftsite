import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — SwiftSite",
  description:
    "Get in touch to start your website project. Harrison Boyns, SwiftSite, London.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left: info */}
        <div>
          <p className="text-white/25 text-xs uppercase tracking-widest mb-3">
            Get in touch
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Let&apos;s build
            <br />
            <span className="text-white/25">something great.</span>
          </h1>
          <p className="text-white/40 text-lg leading-relaxed mb-12">
            Tell me about your business and what you&apos;re looking for.
            I&apos;ll get back to you within 24 hours.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/30 text-sm shrink-0">
                ✉
              </div>
              <span className="text-white/45 text-sm">
                hello@swiftsite.co.uk
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/30 text-sm shrink-0">
                📍
              </div>
              <span className="text-white/45 text-sm">London, UK</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/30 text-sm shrink-0">
                ⏱
              </div>
              <span className="text-white/45 text-sm">
                Response within 24 hours
              </span>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
