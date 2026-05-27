import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-3">GameGuides</h3>
            <p className="text-sm">
              Your ultimate source for game walkthroughs, tips, and secrets.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/category/main-story" className="hover:text-emerald-400 transition-colors">
                  Main Story
                </Link>
              </li>
              <li>
                <Link href="/category/boss-guides" className="hover:text-emerald-400 transition-colors">
                  Boss Guides
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="hover:text-emerald-400 transition-colors cursor-pointer">
                  Terms of Service
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-6 pt-6 text-center text-sm">
          <p>© 2024 GameGuides. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
