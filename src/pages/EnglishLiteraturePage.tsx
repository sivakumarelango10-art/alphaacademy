import { Link } from "react-router-dom";
import { SEOHead } from "../components/SEOHead";
import { BookOpen, GraduationCap, ArrowRight, CheckCircle2, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What is UGC NET English Literature (Paper 2)?",
    a: "UGC NET Paper 2 for English Literature tests your knowledge across all 10 units of the syllabus — including British literature (poetry, drama, fiction), American and World literature, Indian Writing in English, language studies, ELT, and literary theory. It consists of 100 questions and is answered in 2 hours."
  },
  {
    q: "How difficult is UGC NET English Literature?",
    a: "UGC NET English Literature has a competitive but manageable difficulty level. The syllabus is broad, but questions are drawn from well-defined units. Candidates who follow a structured study plan, practise PYQs regularly, and understand key concepts — rather than trying to memorise everything — have a strong chance of qualifying."
  },
  {
    q: "Which topics are most important in UGC NET English Literature?",
    a: "Based on PYQ patterns, the highest-weightage topics include: British Romantic and Victorian poetry, Elizabethan and Modern drama, Victorian and 20th-century fiction, major Indian English literary figures, foundational literary theory (Structuralism, Poststructuralism, Postcolonialism, Feminism), and classical literary criticism."
  },
  {
    q: "Does Alpha Academy cover all 10 units of the UGC NET English Literature syllabus?",
    a: "Yes. Alpha Academy's 6-month programme covers all 10 syllabus units comprehensively, with 8 published study materials aligned to each unit's content and examination requirements."
  }
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "UGC NET English Literature Coaching — Paper 2",
      "description": "Comprehensive UGC NET English Literature Paper 2 coaching by Alpha Academy covering all 10 syllabus units, literary theory, PYQ analysis and mock tests.",
      "provider": { "@type": "EducationalOrganization", "name": "Alpha Academy", "url": "https://www.tnalphaacademy.in/" },
      "educationalLevel": "PostGraduate",
      "courseMode": "online"
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.tnalphaacademy.in/" },
        { "@type": "ListItem", "position": 2, "name": "UGC NET English Literature Coaching", "item": "https://www.tnalphaacademy.in/ugc-net-english-literature" }
      ]
    }
  ]
};

export const EnglishLiteraturePage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="UGC NET English Literature Coaching | Alpha Academy Coimbatore"
        description="Prepare for UGC NET English Literature with Alpha Academy. Expert coaching for all 10 syllabus units, literary theory, PYQ analysis, and 8 published study materials by Sabarna Suresh."
        canonical="https://www.tnalphaacademy.in/ugc-net-english-literature"
        schema={schema}
      />

      <main className="min-h-screen bg-[#FAF8F5]">
        {/* Hero */}
        <section className="pt-28 pb-20 bg-gradient-to-br from-[#1a1409] via-[#121316] to-[#0f0d06] text-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-6">
              <Link to="/" className="hover:text-[#F3D068] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#F3D068]">UGC NET English Literature</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F3D068]/10 border border-[#F3D068]/30 text-xs font-bold text-[#F3D068] uppercase tracking-wider mb-6">
              <BookOpen className="w-3.5 h-3.5" />
              <span>English Literature — Paper 2</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              UGC NET English Literature<br />
              <span className="text-[#F3D068]">Coaching & Preparation</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed">
              Alpha Academy offers expert-led UGC NET English Literature coaching covering all 10 syllabus units — from British literary history to contemporary theory — with 8 published study materials, PYQ analysis, and personalised mentorship by Sabarna Suresh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/#contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-[#F3D068] text-black font-bold text-sm hover:bg-[#D4AF37] transition-colors">
                <span>Enroll in Next Batch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/ugc-net-paper-1-paper-2" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border border-white/20 text-white font-bold text-sm hover:border-[#F3D068] hover:text-[#F3D068] transition-colors">
                <span>Paper 1 & Paper 2 Details</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Syllabus units */}
        <section className="py-20 bg-white border-t border-[#EAE5DC]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-[#121316] mb-4">What Alpha Academy Covers in UGC NET English Literature</h2>
            <p className="text-slate-600 mb-8">Our programme is structured around all 10 syllabus units, ensuring complete coverage with exam-relevant depth.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { num: "01–02", title: "British Literary History", topics: "Poetry, Drama, Fiction — from Chaucer to Contemporary" },
                { num: "03–04", title: "American & World Literature", topics: "American canon, Commonwealth and postcolonial literatures" },
                { num: "05–06", title: "Language & ELT", topics: "History of English, Applied Linguistics, English Language Teaching in India" },
                { num: "07–08", title: "Indian Writing in English", topics: "Major Indian authors, Translation Studies, Indian regional literatures" },
                { num: "09", title: "Literary Theory & Criticism", topics: "Classical to Contemporary — Aristotle, New Criticism, Structuralism, Poststructuralism, Feminism, Postcolonialism" },
                { num: "10", title: "Research & Cultural Studies", topics: "Research methodology, Academic writing, Cultural theory, Performance studies" }
              ].map((unit, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] flex gap-4">
                  <span className="font-mono text-sm font-bold text-[#8C6418] shrink-0">Unit {unit.num}</span>
                  <div>
                    <div className="font-bold text-[#121316] text-sm mb-1">{unit.title}</div>
                    <div className="text-xs text-slate-600">{unit.topics}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-20 bg-[#F5F2EB] border-t border-[#EAE5DC]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-[#121316] mb-8">What You Get with Alpha Academy's English Literature Coaching</h2>
            <ul className="space-y-3 text-sm text-slate-700">
              {[
                "6-month structured programme with live online classes (Mon–Sat, 6–9 PM IST)",
                "8 comprehensive published study materials covering all syllabus units",
                "10-year UGC NET English Literature PYQ analysis with option elimination strategies",
                "Weekly unit-wise quizzes and full-length CBT mock tests",
                "Dedicated Paper 1 aptitude sessions every Saturday",
                "Personal doubt-clearing mentorship with Sabarna Suresh",
                "Recorded video backup for all live sessions",
                "Special guidance for JRF-level score targeting"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#EAE5DC]">
                  <CheckCircle2 className="w-5 h-5 text-[#8C6418] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white border-t border-[#EAE5DC]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-[#8C6418] mb-4">
              <HelpCircle className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">FAQs</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-[#121316] mb-8">Common Questions About UGC NET English Literature</h2>
            <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  itemScope itemProp="mainEntity" itemType="https://schema.org/Question"
                  className={`rounded-2xl border overflow-hidden transition-all ${openFaq === i ? "border-[#8C6418]" : "border-[#EAE5DC]"}`}
                >
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full p-5 text-left flex items-center justify-between gap-4" aria-expanded={openFaq === i}>
                    <h3 itemProp="name" className="font-bold text-[#121316] text-sm">{faq.q}</h3>
                    <ChevronDown className={`w-4 h-4 text-[#8C6418] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-[#EAE5DC] pt-4">
                      <p itemProp="text">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#121316] text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <GraduationCap className="w-12 h-12 text-[#F3D068] mx-auto mb-4" />
            <h2 className="font-serif text-3xl font-bold mb-4">Begin Your UGC NET English Literature Preparation</h2>
            <p className="text-slate-300 mb-8">Alpha Academy's specialised coaching is available online for students across India including Coimbatore. Enquire about the next batch today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-[#F3D068] text-black font-bold hover:bg-[#D4AF37] transition-colors">
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/#materials" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md border border-white/20 text-white font-bold hover:border-[#F3D068] transition-colors">
                <span>Explore Study Materials</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
