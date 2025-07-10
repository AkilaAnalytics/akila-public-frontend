import { useState, useMemo } from "react";
import { ArticleCard } from "~/view/components";

export default function ArticleByCategory({ res }) {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  // Group articles by category
  const articlesByCategory = useMemo(() => {
    if (!res?.articles) return {};
    return res.articles.reduce((acc, article) => {
      // Handle undefined categories
      const category = article.category || "Uncategorized";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(article);
      return acc;
    }, {});
  }, [res?.articles]);

  // Get unique categories sorted by article count
  const sortedCategories = useMemo(() => {
    const categories = Object.keys(articlesByCategory);
    return categories.sort((a, b) => {
      // Always put 'Uncategorized' last
      if (a === "Uncategorized") return 1;
      if (b === "Uncategorized") return -1;

      // Sort by number of articles (descending)
      const countA = articlesByCategory[a].length;
      const countB = articlesByCategory[b].length;

      if (countA !== countB) {
        return countB - countA; // Higher count first
      }

      // If same count, sort alphabetically as tiebreaker
      return a.localeCompare(b);
    });
  }, [articlesByCategory]);

  // Filter categories based on selection
  const filteredCategories = useMemo(() => {
    if (selectedCategory === "All Categories") {
      return sortedCategories;
    }
    return sortedCategories.filter((category) => category === selectedCategory);
  }, [selectedCategory, sortedCategories]);

  // Get total article count for selected filter
  const totalArticles = useMemo(() => {
    if (selectedCategory === "All Categories") {
      return res?.articles?.length || 0;
    }
    return articlesByCategory[selectedCategory]?.length || 0;
  }, [selectedCategory, articlesByCategory, res?.articles]);

  if (!res?.articles || sortedCategories.length === 0) {
    return <div className="px-[5vw]">No articles found.</div>;
  }

  return (
    <div className="px-[5vw]">
      {/* Filter Header */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">
              Browse Articles
            </h2>
            <p className="text-gray-400">
              {totalArticles} article{totalArticles !== 1 ? "s" : ""}
              {selectedCategory !== "All Categories" && (
                <span>
                  {" "}
                  in{" "}
                  {selectedCategory === "Uncategorized"
                    ? "Other Articles"
                    : selectedCategory}
                </span>
              )}
            </p>
          </div>

          {/* Category Filter Dropdown */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none bg-gray-800 border border-gray-700 text-white px-6 py-3 pr-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-600 transition-colors min-w-[200px]"
            >
              <option value="All Categories">All Categories</option>
              {sortedCategories.map((category) => (
                <option key={category} value={category}>
                  {category === "Uncategorized" ? "Other Articles" : category} (
                  {articlesByCategory[category].length})
                </option>
              ))}
            </select>

            {/* Custom dropdown arrow */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Active filter indicator */}
        {selectedCategory !== "All Categories" && (
          <div className="mt-4 flex items-center gap-2">
            <span className="text-sm text-gray-400">Filtered by:</span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-400 border border-blue-500/30">
              {selectedCategory === "Uncategorized"
                ? "Other Articles"
                : selectedCategory}
              <button
                onClick={() => setSelectedCategory("All Categories")}
                className="ml-2 hover:text-blue-300 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </span>
          </div>
        )}
      </div>

      {/* Articles Display */}
      {filteredCategories.map((category) => (
        <div key={category} className="mb-16">
          {/* Category Header - only show if "All Categories" is selected */}
          {selectedCategory === "All Categories" && (
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-700">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {category === "Uncategorized" ? "Other Articles" : category}
                </h3>
                <p className="text-gray-400">
                  {articlesByCategory[category].length} article
                  {articlesByCategory[category].length !== 1 ? "s" : ""}
                </p>
              </div>

              {/* Quick filter button */}
              <button
                onClick={() => setSelectedCategory(category)}
                className="cursor-pointer text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                View only{" "}
                {category === "Uncategorized"
                  ? "other articles"
                  : category.toLowerCase()}{" "}
                →
              </button>
            </div>
          )}

          {/* Articles Grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {articlesByCategory[category].map((article) => (
              <ArticleCard
                isPdf={false}
                key={article.title}
                title={article.title}
                link={article.slug}
                image_link={article.cover}
                category={article.category}
                preview={article.summary?.[0] || article.description}
              />
            ))}
          </div>
        </div>
      ))}

      {/* No results message */}
      {filteredCategories.length === 0 && (
        <div className="text-center py-16">
          <h3 className="text-2xl font-bold text-white mb-4">
            No articles found
          </h3>
          <p className="text-gray-400 mb-6">
            No articles match the selected category filter.
          </p>
          <button
            onClick={() => setSelectedCategory("All Categories")}
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
          >
            Show all articles
          </button>
        </div>
      )}
    </div>
  );
}
