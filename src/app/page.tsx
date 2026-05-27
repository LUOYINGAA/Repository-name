import { categories, getLatestArticles } from "@/data/guides";
import ArticleCard from "@/components/ArticleCard";
import CategoryCard from "@/components/CategoryCard";

export default function Home() {
  const latestArticles = getLatestArticles(5);

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🎮 GameGuides
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Your ultimate source for complete walkthroughs, boss strategies, and hidden secrets
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Guide Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Latest Articles</h2>
          <span className="text-emerald-600 font-medium">Updated daily</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      <section className="bg-emerald-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Master the Game?</h2>
          <p className="text-emerald-100 max-w-xl mx-auto mb-6">
            Browse our complete collection of guides and become the ultimate player
          </p>
          <a
            href="#"
            className="inline-block bg-white text-emerald-600 font-semibold px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors"
          >
            View All Guides
          </a>
        </div>
      </section>
    </div>
  );
}
