"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#050505]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-white font-semibold text-lg tracking-tight"
        >
          Swift<span className="text-white/30">site</span>
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            href="/work"
            className={`text-sm transition-colors ${
              pathname === "/work"
                ? "text-white"
                : "text-white/50 hover:text-white"
            }`}
          >
            Work
          </Link>
          <Link
            href="/contact"
            className={`text-sm transition-colors ${
              pathname === "/contact"
                ? "text-white"
                : "text-white/50 hover:text-white"
            }`}
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="text-sm px-4 py-2 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-all"
          >
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
