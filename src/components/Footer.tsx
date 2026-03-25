import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <Link
            href="/"
            className="text-white font-semibold text-lg tracking-tight"
          >
            Swift<span className="text-white/30">site</span>
          </Link>
          <p className="text-white/30 text-sm mt-1">Harrison Boyns · London</p>
          <p className="text-white/30 text-sm">hello@swiftsite.co.uk</p>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/work"
            className="text-sm text-white/40 hover:text-white transition-colors"
          >
            Work
          </Link>
          <Link
            href="/contact"
            className="text-sm text-white/40 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>

        <p className="text-white/20 text-xs">
          © {new Date().getFullYear()} SwiftSite
        </p>
      </div>
    </footer>
  );
}
