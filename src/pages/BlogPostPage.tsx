import { useParams, Link, Navigate } from "react-router-dom";
import { SEOHead } from "../components/SEOHead";
import { getBlogPostBySlug, type BlogSection } from "../data/blog";
import { Clock, ArrowLeft, ArrowRight, BookOpen, Tag } from "lucide-react";

const renderSection = (section: BlogSection, index: number) => {
  switch (section.type) {
    case "h2":
      return <h2 key={index} className="font-serif text-2xl font-bold text-[#121316] mt-10 mb-4">{section.content}</h2>;
    case "h3":
      return <h3 key={index} className="font-serif text-xl font-bold text-[#121316] mt-7 mb-3">{section.content}</h3>;
    case "p":
      return <p key={index} className="text-slate-700 leading-relaxed mb-4 text-base">{section.content}</p>;
    case "ul":
      return (
        <ul key={index} className="space-y-2 mb-5 pl-1">
          {section.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-slate-700 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C6418] shrink-0 mt-2" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={index} className="space-y-2 mb-5 pl-1">
          {section.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-slate-700 text-sm">
              <span className="font-mono text-xs font-bold text-[#8C6418] shrink-0 w-5 mt-1">{i + 1}.</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <div key={index} className="my-8 p-6 rounded-2xl bg-[#FBF7EE] border-l-4 border-[#8C6418] border border-[#E2D6BE]">
          <div className="text-xs font-bold uppercase tracking-wider text-[#8C6418] mb-2 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            Alpha Academy
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">{section.content}</p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-1.5 mt-4 text-xs font-bold text-[#8C6418] hover:text-[#6B4C10] transition-colors"
          >
            Enquire Now <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      );
    default:
      return null;
  }
};

export const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": post.title,
        "description": post.metaDescription,
        "datePublished": post.publishDate,
        "dateModified": post.lastModified,
        "author": {
          "@type": "Person",
          "name": "Sabarna Suresh"
        },
        "publisher": {
          "@type": "EducationalOrganization",
          "name": "Alpha Academy",
          "url": "https://www.tnalphaacademy.in/"
        },
        "url": `https://www.tnalphaacademy.in/blog/${post.slug}`,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://www.tnalphaacademy.in/blog/${post.slug}`
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tnalphaacademy.in/" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.tnalphaacademy.in/blog" },
          { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://www.tnalphaacademy.in/blog/${post.slug}` }
        ]
      }
    ]
  };

  return (
    <>
      <SEOHead
        title={post.metaTitle}
        description={post.metaDescription}
        canonical={`https://www.tnalphaacademy.in/blog/${post.slug}`}
        schema={schema}
      />

      <main className="min-h-screen bg-[#FAF8F5]">
        {/* Article header */}
        <header className="pt-28 pb-12 bg-[#121316] text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-6 flex-wrap">
              <Link to="/" className="hover:text-[#F3D068] transition-colors">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-[#F3D068] transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-[#F3D068]">{post.category}</span>
            </nav>
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#F3D068]/10 border border-[#F3D068]/30 text-[#F3D068]">
                {post.category}
              </span>
              <div className="flex items-center gap-1 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTimeMinutes} min read</span>
              </div>
              <span className="text-xs text-slate-400">{new Date(post.publishDate).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              {post.excerpt}
            </p>
            <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-[#D4AF37]">
                <img
                  src="/founder.jpg"
                  alt="Sabarna Suresh — Alpha Academy"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Sabarna Suresh</div>
                <div className="text-xs text-[#F3D068]">Founder & CEO, Alpha Academy</div>
              </div>
            </div>
          </div>
        </header>

        {/* Article body */}
        <article className="py-12" itemScope itemType="https://schema.org/Article">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <meta itemProp="headline" content={post.title} />
            <meta itemProp="datePublished" content={post.publishDate} />
            <meta itemProp="dateModified" content={post.lastModified} />
            <div itemProp="articleBody">
              {post.content.map((section, i) => renderSection(section, i))}
            </div>

            {/* Tags */}
            <div className="mt-10 pt-6 border-t border-[#EAE5DC] flex items-start gap-3 flex-wrap">
              <Tag className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              {post.tags.map(tag => (
                <span key={tag} className="text-xs text-slate-600 bg-white border border-[#EAE5DC] rounded-lg px-2.5 py-1">
                  {tag}
                </span>
              ))}
            </div>

            {/* Related links */}
            {post.relatedLinks.length > 0 && (
              <div className="mt-10 p-6 rounded-2xl bg-[#F5F2EB] border border-[#EAE5DC]">
                <h2 className="font-bold text-[#121316] text-sm mb-4">Related Resources from Alpha Academy</h2>
                <ul className="space-y-2">
                  {post.relatedLinks.map(link => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="inline-flex items-center gap-1.5 text-sm text-[#8C6418] font-semibold hover:text-[#6B4C10] transition-colors"
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </article>

        {/* Bottom nav */}
        <div className="border-t border-[#EAE5DC] py-8">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-[#8C6418] transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <Link to="/#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#121316] text-white font-bold text-xs hover:bg-black transition-colors">
              <span>Enquire About Coaching</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};
