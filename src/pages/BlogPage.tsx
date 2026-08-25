import { useState } from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "../components/SEOHead";
import { BookOpen, Clock, ArrowRight, Search } from "lucide-react";
import { blogCategories, getBlogPostsByCategory } from "../data/blog";

const schema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Alpha Academy Blog — UGC NET English Literature",
  "description": "Expert articles on UGC NET English Literature preparation, strategy, syllabus, JRF coaching, and teaching eligibility exams by Alpha Academy, Coimbatore.",
  "url": "https://www.tnalphaacademy.in/blog",
  "publisher": {
    "@type": "EducationalOrganization",
    "name": "Alpha Academy",
    "url": "https://www.tnalphaacademy.in/"
  }
};

export const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = getBlogPostsByCategory(selectedCategory).filter(post =>
    searchQuery === "" ||
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      <SEOHead
        title="UGC NET English Literature Blog | Alpha Academy Coimbatore"
        description="Read expert articles on UGC NET English Literature preparation, syllabus breakdown, JRF coaching strategy, and teaching eligibility exams from Alpha Academy, Coimbatore."
        canonical="https://www.tnalphaacademy.in/blog"
        schema={schema}
      />

      <main className="min-h-screen bg-[#FAF8F5]">
        {/* Header */}
        <section className="pt-28 pb-16 bg-[#121316] text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-6">
              <Link to="/" className="hover:text-[#F3D068] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#F3D068]">Blog</span>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F3D068]/10 border border-[#F3D068]/30 text-xs font-bold text-[#F3D068] uppercase tracking-wider mb-6">
              <BookOpen className="w-3.5 h-3.5" />
              <span>UGC NET English Literature Resources</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
              Alpha Academy Blog
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl">
              Expert articles on UGC NET English Literature preparation, strategy, syllabus breakdowns, JRF coaching, and teaching eligibility exams.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-white border-b border-[#EAE5DC] sticky top-0 z-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              {/* Category filters */}
              <div className="flex flex-wrap gap-2">
                {blogCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                      selectedCategory === cat
                        ? "bg-[#121316] text-white"
                        : "bg-[#FAF8F5] text-slate-700 border border-[#EAE5DC] hover:border-[#8C6418]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              {/* Search */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="search"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="pl-9 pr-4 py-2 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] focus:border-[#8C6418] focus:outline-none text-sm text-[#121316] placeholder-slate-400 w-56"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Blog grid */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {filtered.length === 0 ? (
              <div className="text-center py-16 text-slate-500">
                <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-30" />
                <p>No articles found matching your search.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filtered.map(post => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="group p-6 rounded-2xl bg-white border border-[#EAE5DC] hover:border-[#8C6418] hover:shadow-md transition-all flex flex-col"
                    aria-label={`Read article: ${post.title}`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#F3EEDF] text-[#8C6418] border border-[#E2D6BE]">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTimeMinutes} min read</span>
                      </div>
                    </div>
                    <h2 className="font-serif text-lg font-bold text-[#121316] mb-2 leading-snug group-hover:text-[#8C6418] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-xs text-slate-600 leading-relaxed flex-1 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-[#EAE5DC]">
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="text-[10px] text-slate-500 bg-[#FAF8F5] border border-[#EAE5DC] rounded px-1.5 py-0.5">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs font-bold text-[#8C6418] flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read Article <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-[#F5F2EB] border-t border-[#EAE5DC]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-2xl font-bold text-[#121316] mb-3">Ready to Start Your UGC NET Journey?</h2>
            <p className="text-slate-600 text-sm mb-6">Join Alpha Academy's structured UGC NET English Literature coaching programme in Coimbatore or online.</p>
            <Link to="/#contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-[#121316] text-white font-bold text-sm hover:bg-black transition-colors">
              <span>Enquire About Next Batch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};
