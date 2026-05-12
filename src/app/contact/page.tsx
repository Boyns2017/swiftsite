import type { Metadata } from "next";
import Image from "next/image";
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
        {/* Left: photo + info stacked */}
        <div>
          {/* Photo */}
          <a
            href="https://www.linkedin.com/in/harrison-boyns/"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.07] mb-8 group"
          >
            <Image
              src="/headshot.jpg"
              alt="Harrison Boyns"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[center_25%] group-hover:scale-[1.02] transition-transform duration-300"
            />
          </a>

          <p className="text-white/25 text-xs uppercase tracking-widest mb-3">
            Get in touch
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Let&apos;s build
            <br />
            <span className="text-white/25">something great.</span>
          </h1>
          <p className="text-white/40 text-lg leading-relaxed mb-10">
            Tell me about your business and what you&apos;re looking for.
            I&apos;ll get back to you within 24 hours.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/30 text-sm shrink-0">
                ✉
              </div>
              <a
                href="mailto:hello@swiftsite.tech"
                className="text-white/45 text-sm hover:text-white/70 transition-colors"
              >
                hello@swiftsite.tech
              </a>
            </div>
            <a
              href="https://wa.me/4407821281610"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/30 text-sm shrink-0">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <span className="text-white/45 text-sm group-hover:text-white/70 transition-colors">
                WhatsApp
              </span>
            </a>
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
