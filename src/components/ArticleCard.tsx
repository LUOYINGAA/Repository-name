import Link from "next/link";
import Image from "next/image";
import { Article } from "@/data/guides";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/article/${article.slug}`} className="group">
      <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow border border-slate-200">
        <div className="relative h-48 w-full">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime} read</span>
          </div>
          <h3 className="font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-sm text-slate-600 mt-2 line-clamp-2">
            {article.excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}
