import Link from "next/link";
import { categories } from "@/data/guides";

export default function Header() {
  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-emerald-400">
            🎮 GameGuides
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="hover:text-emerald-400 transition-colors">
              Home
            </Link>
            {categories.slice(0, 4).map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className="hover:text-emerald-400 transition-colors"
              >
                {category.icon} {category.name}
              </Link>
            ))}
          </nav>
          <button className="md:hidden text-2xl">☰</button>
        </div>
      </div>
    </header>
  );
}
