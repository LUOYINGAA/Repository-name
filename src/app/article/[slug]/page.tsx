import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getArticleBySlug, articles, categories } from "@/data/guides";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: `${article.title} | GameGuides`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const category = categories.find((c) => c.slug === article.category);
  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  const contentLines = article.content.trim().split("\n");
  const processedContent = contentLines.map((line, index) => {
    if (line.startsWith("# ")) {
      return <h1 key={index} className="text-3xl font-bold text-slate-900 mt-8 mb-4">{line.slice(2)}</h1>;
    }
    if (line.startsWith("## ")) {
      return <h2 key={index} className="text-2xl font-bold text-slate-800 mt-6 mb-3">{line.slice(3)}</h2>;
    }
    if (line.startsWith("### ")) {
      return <h3 key={index} className="text-xl font-semibold text-slate-700 mt-4 mb-2">{line.slice(4)}</h3>;
    }
    if (line.startsWith("- **")) {
      const match = line.match(/^- \*\*([^*]+)\*\* - (.+)$/);
      if (match) {
        return (
          <li key={index} className="ml-4 mb-2">
            <strong>{match[1]}</strong>: {match[2]}
          </li>
        );
      }
    }
    if (line.startsWith("- ")) {
      return <li key={index} className="ml-4 mb-1 list-disc">{line.slice(2)}</li>;
    }
    if (line.startsWith("1. ")) {
      return <li key={index} className="ml-4 mb-1 list-decimal">{line.slice(3)}</li>;
    }
    if (line.startsWith("![") && line.endsWith(")")) {
      const match = line.match(/!\[([^\]]*)\]\(([^)]+)\)/);
      if (match) {
        return (
          <div key={index} className="relative w-full h-64 my-6">
            <Image
              src={match[2]}
              alt={match[1]}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        );
      }
    }
    if (line.trim() === "") {
      return <br key={index} />;
    }
    return <p key={index} className="text-slate-700 my-3 leading-relaxed">{line}</p>;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <article className="max-w-4xl mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6"
        >
          ← Back to Home
        </Link>

        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
            <Link
              href={`/category/${article.category}`}
              className="text-emerald-600 hover:text-emerald-700"
            >
              {category?.icon} {category?.name}
            </Link>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime} read</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {article.title}
          </h1>
          <p className="text-lg text-slate-600">{article.excerpt}</p>
        </header>

        <div className="relative w-full h-80 mb-8 rounded-xl overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-slate-200">
          {processedContent}
        </div>

        {relatedArticles.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedArticles.map((related) => (
                <Link
                  key={related.id}
                  href={`/article/${related.slug}`}
                  className="block bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                >
                  <div className="relative h-32 w-full">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-slate-900 text-sm line-clamp-2">
                      {related.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}
