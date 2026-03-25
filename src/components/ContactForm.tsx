"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          business: formData.get("business"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) throw new Error();
      setState("success");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="py-16 text-center">
        <div className="w-12 h-12 rounded-full bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-5 h-5 text-emerald-400"
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
        </div>
        <h3 className="text-white font-semibold text-xl mb-2">Message sent</h3>
        <p className="text-white/40 text-sm">
          I&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-white/[0.04] border border-white/[0.09] rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs text-white/35 uppercase tracking-widest mb-2">
            Name
          </label>
          <input
            name="name"
            required
            className={inputClass}
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label className="block text-xs text-white/35 uppercase tracking-widest mb-2">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs text-white/35 uppercase tracking-widest mb-2">
          Business name
        </label>
        <input
          name="business"
          className={inputClass}
          placeholder="Optional"
        />
      </div>

      <div>
        <label className="block text-xs text-white/35 uppercase tracking-widest mb-2">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Tell me about your business and what you're looking for..."
        />
      </div>

      {state === "error" && (
        <p className="text-red-400/70 text-sm">
          Something went wrong. Please try again or email hello@swiftsite.co.uk
          directly.
        </p>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 disabled:opacity-50 transition-all cursor-pointer"
      >
        {state === "loading" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
