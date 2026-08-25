import { Link } from "react-router-dom";
import { SEOHead } from "../components/SEOHead";
import { GraduationCap, ArrowRight, CheckCircle2, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What teaching eligibility exams does Alpha Academy help with?",
    a: "Alpha Academy specialises in UGC NET (National Eligibility Test), the primary teaching eligibility examination for Assistant Professor and Junior Research Fellowship positions at Indian universities. The UGC NET English Literature coaching at Alpha Academy is structured to meet and exceed the eligibility standard."
  },
  {
    q: "Is UGC NET the main teaching eligibility exam for college lecturers?",
    a: "Yes. UGC NET is the nationally recognised teaching eligibility examination for Assistant Professor positions at colleges and universities across India. Clearing UGC NET is mandatory for most faculty recruitment processes in Indian higher education institutions."
  },
  {
    q: "Can students from Coimbatore attend teaching eligibility coaching online?",
    a: "Yes. Alpha Academy's online coaching programme is fully accessible from Coimbatore, Tamil Nadu, and throughout India. Live sessions are conducted Monday–Saturday (6:00–9:00 PM IST) with recorded video backup available."
  },
  {
    q: "Does Alpha Academy also cover SLET (State Level Eligibility Test)?",
    a: "Alpha Academy's primary focus is UGC NET English Literature, which also serves as a strong foundation for SLET preparation, as both examinations share significant syllabus overlap. Students preparing for UGC NET with Alpha Academy will find themselves well-positioned for SLET as well."
  }
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "Teaching Eligibility Exam Coaching — UGC NET English Literature",
      "description": "Alpha Academy's coaching for teaching eligibility examinations including UGC NET (Paper 1 and Paper 2) and JRF for English Literature aspirants in Coimbatore and across India.",
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
        { "@type": "ListItem", "position": 2, "name": "Teaching Eligibility Exam Coaching", "item": "https://www.tnalphaacademy.in/teaching-eligibility-exam-coaching" }
      ]
    }
  ]
};

export const TeachingEligibilityPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Teaching Eligibility Exam Coaching in Coimbatore | Alpha Academy"
        description="Prepare for teaching eligibility exams including UGC NET with Alpha Academy in Coimbatore. Expert coaching for Paper 1, Paper 2 and JRF by Sabarna Suresh. Online coaching available."
        canonical="https://www.tnalphaacademy.in/teaching-eligibility-exam-coaching"
        schema={schema}
      />

      <main className="min-h-screen bg-[#FAF8F5]">
        <section className="pt-28 pb-20 bg-[#121316] text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-6">
              <Link to="/" className="hover:text-[#F3D068] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#F3D068]">Teaching Eligibility Exam Coaching</span>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F3D068]/10 border border-[#F3D068]/30 text-xs font-bold text-[#F3D068] uppercase tracking-wider mb-6">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Teaching Career Preparation</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Teaching Eligibility Exam<br />
              <span className="text-[#F3D068]">Coaching in Coimbatore</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mb-8">
              Alpha Academy helps English Literature graduates from Coimbatore and across India prepare for UGC NET — the national teaching eligibility examination required for Assistant Professor positions and Junior Research Fellowships in India.
            </p>
            <Link to="/#contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-[#F3D068] text-black font-bold text-sm hover:bg-[#D4AF37] transition-colors">
              <span>Enquire About Next Batch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Teaching exams explained */}
        <section className="py-20 bg-white border-t border-[#EAE5DC]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-[#121316] mb-4">Teaching Eligibility Examinations in India</h2>
            <p className="text-slate-600 mb-8">India has several teaching eligibility examinations for different levels of education. For English Literature graduates aspiring to teach in colleges and universities, UGC NET is the key exam to clear.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              {[
                {
                  exam: "UGC NET",
                  level: "College & University",
                  focus: "General aptitude (Paper 1) + English Literature (Paper 2)",
                  highlight: "Alpha Academy Specialisation",
                  isMain: true
                },
                {
                  exam: "SLET",
                  level: "State-Level Colleges",
                  focus: "State-specific eligibility test (syllabus similar to NET)",
                  highlight: "UGC NET preparation overlaps significantly",
                  isMain: false
                },
                {
                  exam: "TET",
                  level: "School Level (Classes I–VIII)",
                  focus: "Child development, pedagogy, school-level subjects",
                  highlight: "Different exam; separate preparation required",
                  isMain: false
                }
              ].map((exam, i) => (
                <div key={i} className={`p-5 rounded-2xl border ${exam.isMain ? "border-[#8C6418] bg-[#FBF7EE]" : "border-[#EAE5DC] bg-[#FAF8F5]"}`}>
                  <div className="text-lg font-bold text-[#121316] mb-1">{exam.exam}</div>
                  <div className="text-xs text-[#8C6418] font-bold mb-2">{exam.level}</div>
                  <p className="text-xs text-slate-600 mb-3">{exam.focus}</p>
                  <div className="text-xs font-semibold text-slate-700 bg-white rounded-lg px-2 py-1 border border-[#EAE5DC]">{exam.highlight}</div>
                </div>
              ))}
            </div>
            <p className="text-slate-600 text-sm">For English Literature graduates with a goal of teaching at the college or university level in India, <strong className="text-[#121316]">UGC NET is the primary and most important teaching eligibility examination</strong>. Alpha Academy is entirely focused on helping aspirants clear UGC NET English Literature.</p>
          </div>
        </section>

        {/* What Alpha Academy offers */}
        <section className="py-20 bg-[#F5F2EB] border-t border-[#EAE5DC]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-[#121316] mb-8">How Alpha Academy Prepares You for Teaching Eligibility</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Comprehensive coaching for UGC NET Paper 1 (Teaching Aptitude & Research Aptitude)",
                "Deep coverage of all 10 units of UGC NET English Literature Paper 2",
                "JRF-targeted preparation for aspirants aiming for research fellowships",
                "10-year PYQ analysis with option elimination strategies",
                "Weekly assessments and full-length mock tests in CBT format",
                "8 published study materials specifically designed for UGC NET English Literature",
                "Personalised mentorship by Sabarna Suresh — a repeated UGC NET qualifier",
                "Online live classes accessible from Coimbatore and across India"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#EAE5DC]">
                  <CheckCircle2 className="w-5 h-5 text-[#8C6418] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{item}</span>
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
            <h2 className="font-serif text-3xl font-bold text-[#121316] mb-8">Teaching Eligibility Coaching — Common Questions</h2>
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
            <h2 className="font-serif text-3xl font-bold mb-4">Begin Your Teaching Career with Alpha Academy</h2>
            <p className="text-slate-300 mb-8">Get structured coaching for UGC NET — the gateway to a teaching career in Indian universities. Available online from Coimbatore and across India.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-[#F3D068] text-black font-bold hover:bg-[#D4AF37] transition-colors">
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/ugc-net-coaching-coimbatore" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md border border-white/20 text-white font-bold hover:border-[#F3D068] transition-colors">
                <span>UGC NET Coaching in Coimbatore</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
