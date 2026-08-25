import { Link } from "react-router-dom";
import { SEOHead } from "../components/SEOHead";
import { FileText, ArrowRight, CheckCircle2, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What is the difference between UGC NET Paper 1 and Paper 2?",
    a: "UGC NET Paper 1 is common for all subjects and tests general academic aptitude — teaching methods, research aptitude, logical reasoning, reading comprehension, and ICT awareness. Paper 2 is subject-specific; for English Literature aspirants, it covers all 10 units of the English Literature syllabus. Paper 1 has 50 questions and Paper 2 has 100 questions, both carrying 2 marks each."
  },
  {
    q: "Does Alpha Academy cover both Paper 1 and Paper 2?",
    a: "Yes. Alpha Academy's 6-month UGC NET programme covers both papers. Paper 2 (English Literature) is the primary focus with daily live sessions. Paper 1 aptitude practice is integrated into Saturday sessions, ensuring students are well-prepared for both components of the examination."
  },
  {
    q: "How much time should I spend on Paper 1 vs Paper 2?",
    a: "A recommended split is approximately 25–30% of your preparation time on Paper 1 and 70–75% on Paper 2. Practice Paper 1 MCQs daily as a warm-up (15–20 minutes) and reserve deep study blocks for Paper 2 syllabus units. Integrate both in full mock tests to build overall examination readiness."
  },
  {
    q: "Can I qualify UGC NET by focusing only on Paper 2?",
    a: "While Paper 2 carries more questions, Paper 1 performance contributes significantly to your overall score and percentile. Neglecting Paper 1 is a common mistake that limits NET qualification chances. Alpha Academy's coaching ensures both papers receive adequate attention."
  }
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "UGC NET Paper 1 & Paper 2 Coaching — English Literature",
      "description": "Comprehensive coaching for UGC NET Paper 1 (General Teaching & Research Aptitude) and Paper 2 (English Literature) by Alpha Academy.",
      "provider": { "@type": "EducationalOrganization", "name": "Alpha Academy" },
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
        { "@type": "ListItem", "position": 2, "name": "UGC NET Paper 1 & Paper 2 Coaching", "item": "https://www.tnalphaacademy.in/ugc-net-paper-1-paper-2" }
      ]
    }
  ]
};

export const Paper1Paper2Page = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const paper1Topics = [
    "Teaching Aptitude — methods, characteristics, principles of effective teaching",
    "Research Aptitude — types of research, research process, research ethics",
    "Reading Comprehension — passage-based analysis and inference",
    "Communication — types, barriers, effective communication skills",
    "Logical Reasoning — analytical ability, data interpretation",
    "Mathematical Reasoning and Aptitude",
    "ICT — Information and Communication Technology basics",
    "People and Environment — environmental awareness",
    "Higher Education — institutional structure, policies, governance"
  ];

  const paper2Topics = [
    "British Poetry (Chaucer to Contemporary)",
    "British Drama (Medieval to Modern)",
    "British Fiction and the Novel",
    "American Literature",
    "World Literature and Postcolonial Writing",
    "Indian Writing in English",
    "History of the English Language and Linguistics",
    "English Language Teaching (ELT) in India",
    "Literary Theory and Criticism",
    "Research Methods and Cultural Studies"
  ];

  return (
    <>
      <SEOHead
        title="UGC NET Paper 1 & Paper 2 Coaching | Alpha Academy Coimbatore"
        description="Alpha Academy provides comprehensive UGC NET Paper 1 and Paper 2 coaching for English Literature. Understand both papers, their syllabus, and how to prepare effectively with expert guidance."
        canonical="https://www.tnalphaacademy.in/ugc-net-paper-1-paper-2"
        schema={schema}
      />

      <main className="min-h-screen bg-[#FAF8F5]">
        <section className="pt-28 pb-20 bg-[#121316] text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-6">
              <Link to="/" className="hover:text-[#F3D068] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#F3D068]">UGC NET Paper 1 & Paper 2</span>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F3D068]/10 border border-[#F3D068]/30 text-xs font-bold text-[#F3D068] uppercase tracking-wider mb-6">
              <FileText className="w-3.5 h-3.5" />
              <span>Two Papers. One Structured Programme.</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              UGC NET Paper 1 &<br />
              <span className="text-[#F3D068]">Paper 2 Coaching</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mb-8">
              Alpha Academy's UGC NET programme integrates both Paper 1 (General Teaching & Research Aptitude) and Paper 2 (English Literature) coaching into a single structured 6-month course — so you are fully prepared for the complete examination.
            </p>
            <Link to="/#contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-[#F3D068] text-black font-bold text-sm hover:bg-[#D4AF37] transition-colors">
              <span>Enquire About Batch Enrollment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Paper comparison */}
        <section className="py-20 bg-white border-t border-[#EAE5DC]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-[#121316] mb-4">Understanding UGC NET Paper 1 and Paper 2</h2>
            <p className="text-slate-600 mb-10">The UGC NET examination consists of two papers conducted on the same day in a Computer-Based Test (CBT) format. Both papers must be attempted, and marks from both contribute to your final score.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Paper 1 */}
              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC]">
                <div className="text-xs font-bold uppercase tracking-wider text-[#8C6418] mb-3">Paper 1</div>
                <h3 className="font-serif text-xl font-bold text-[#121316] mb-2">General Teaching & Research Aptitude</h3>
                <div className="flex gap-4 text-xs text-slate-600 mb-4">
                  <span><strong className="text-[#121316]">50</strong> Questions</span>
                  <span><strong className="text-[#121316]">100</strong> Marks</span>
                  <span><strong className="text-[#121316]">1 Hour</strong></span>
                </div>
                <p className="text-xs text-slate-600 mb-4">Common for all subjects. Tests general academic aptitude, not subject-specific knowledge.</p>
                <ul className="space-y-1.5">
                  {paper1Topics.map((t, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6418] shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Paper 2 */}
              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#8C6418]/40">
                <div className="text-xs font-bold uppercase tracking-wider text-[#8C6418] mb-3">Paper 2 — English Literature</div>
                <h3 className="font-serif text-xl font-bold text-[#121316] mb-2">English Literature (All 10 Units)</h3>
                <div className="flex gap-4 text-xs text-slate-600 mb-4">
                  <span><strong className="text-[#121316]">100</strong> Questions</span>
                  <span><strong className="text-[#121316]">200</strong> Marks</span>
                  <span><strong className="text-[#121316]">2 Hours</strong></span>
                </div>
                <p className="text-xs text-slate-600 mb-4">Subject-specific paper covering the complete English Literature syllabus across 10 units.</p>
                <ul className="space-y-1.5">
                  {paper2Topics.map((t, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6418] shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How Alpha Academy covers both */}
        <section className="py-20 bg-[#F5F2EB] border-t border-[#EAE5DC]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-[#121316] mb-4">How Alpha Academy Covers Both Papers</h2>
            <p className="text-slate-600 mb-8">Our structured 6-month programme is designed so that no student enters the examination underprepared for either paper.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Monday–Friday Sessions", desc: "In-depth Paper 2 subject coaching — literary periods, authors, theory, and criticism" },
                { label: "Saturday Sessions", desc: "Dedicated Paper 1 practice — reasoning, aptitude, ICT, comprehension MCQs" },
                { label: "Weekly Quizzes", desc: "Unit-wise assessments covering both Paper 1 aptitude types and Paper 2 content" },
                { label: "Full Mock Tests", desc: "Combined Paper 1 + Paper 2 timed mock examinations in CBT format" }
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white border border-[#EAE5DC]">
                  <div className="font-bold text-[#8C6418] text-sm mb-1">{item.label}</div>
                  <div className="text-xs text-slate-600">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white border-t border-[#EAE5DC]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-[#8C6418] mb-4">
              <HelpCircle className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">FAQs</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-[#121316] mb-8">Questions About UGC NET Paper 1 & Paper 2</h2>
            <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  itemScope itemProp="mainEntity" itemType="https://schema.org/Question"
                  className={`rounded-2xl border overflow-hidden ${openFaq === i ? "border-[#8C6418]" : "border-[#EAE5DC]"}`}
                >
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full p-5 text-left flex items-center justify-between gap-4" aria-expanded={openFaq === i}>
                    <h3 itemProp="name" className="font-bold text-[#121316] text-sm">{faq.q}</h3>
                    <ChevronDown className={`w-4 h-4 text-[#8C6418] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" className="px-5 pb-5 text-sm text-slate-600 border-t border-[#EAE5DC] pt-4">
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
            <h2 className="font-serif text-3xl font-bold mb-4">Prepare for Both Papers with Alpha Academy</h2>
            <p className="text-slate-300 mb-8">One programme, both papers, complete coverage. Join our UGC NET coaching from Coimbatore or anywhere in India.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-[#F3D068] text-black font-bold hover:bg-[#D4AF37] transition-colors">
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/ugc-net-jrf-coaching" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md border border-white/20 text-white font-bold hover:border-[#F3D068] transition-colors">
                <span>UGC NET JRF Coaching</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
