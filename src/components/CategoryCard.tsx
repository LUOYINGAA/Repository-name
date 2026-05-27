import Link from "next/link";
import { Category } from "@/data/guides";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/category/${category.slug}`} className="group">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:border-emerald-300 transition-all">
        <div className="text-4xl mb-3">{category.icon}</div>
        <h3 className="font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors">
          {category.name}
        </h3>
        <p className="text-sm text-slate-600 mt-1">
          {category.description}
        </p>
      </div>
    </Link>
  );
}
