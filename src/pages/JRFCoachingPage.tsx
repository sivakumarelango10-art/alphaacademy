import { Link } from "react-router-dom";
import { SEOHead } from "../components/SEOHead";
import { Award, ArrowRight, CheckCircle2, HelpCircle, ChevronDown, Star } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What is UGC NET JRF and how is it different from NET qualification?",
    a: "UGC NET qualification (Assistant Professor eligibility) means you have cleared the minimum cutoff for your subject. JRF (Junior Research Fellowship) means you have scored in the top 6% of all NET qualifiers in your subject. JRF holders are eligible for a monthly fellowship for research purposes and for direct PhD admission in top universities."
  },
  {
    q: "How competitive is the UGC NET JRF for English Literature?",
    a: "JRF for English Literature is highly competitive but achievable with targeted preparation. The cutoff changes each session based on overall candidate performance. Candidates who thoroughly cover all 10 syllabus units, practise PYQs systematically, and achieve high accuracy in both Paper 1 and Paper 2 have a strong chance of JRF qualification."
  },
  {
    q: "Does Alpha Academy specifically prepare students for JRF?",
    a: "Yes. Alpha Academy's preparation methodology is designed to target both NET qualification and JRF. Advanced mock tests are calibrated to JRF-level difficulty, and PYQ sessions focus on the type of nuanced, high-difficulty questions that separate JRF candidates from general NET qualifiers."
  },
  {
    q: "Is Paper 1 important for JRF qualification?",
    a: "Absolutely. JRF is determined based on total marks across both papers. A strong Paper 1 performance can significantly boost your overall score and push you into the JRF percentile. Alpha Academy's integrated coaching ensures both papers are given serious attention."
  }
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      "name": "UGC NET JRF Coaching — English Literature",
      "description": "Targeted JRF preparation coaching for UGC NET English Literature by Alpha Academy. Advanced mock tests, PYQ analysis, and mentorship by Sabarna Suresh.",
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
        { "@type": "ListItem", "position": 2, "name": "UGC NET JRF Coaching", "item": "https://www.tnalphaacademy.in/ugc-net-jrf-coaching" }
      ]
    }
  ]
};

export const JRFCoachingPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="UGC NET JRF Coaching in Coimbatore | Alpha Academy"
        description="Prepare for UGC NET JRF (Junior Research Fellowship) with Alpha Academy. Advanced coaching for English Literature JRF qualification with expert mentorship by Sabarna Suresh in Coimbatore."
        canonical="https://www.tnalphaacademy.in/ugc-net-jrf-coaching"
        schema={schema}
      />

      <main className="min-h-screen bg-[#FAF8F5]">
        <section className="pt-28 pb-20 bg-gradient-to-br from-[#0d1a0d] via-[#121316] to-[#0f0f0d] text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-6">
              <Link to="/" className="hover:text-[#F3D068] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#F3D068]">UGC NET JRF Coaching</span>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F3D068]/10 border border-[#F3D068]/30 text-xs font-bold text-[#F3D068] uppercase tracking-wider mb-6">
              <Award className="w-3.5 h-3.5" />
              <span>Junior Research Fellowship Preparation</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              UGC NET JRF Coaching<br />
              <span className="text-[#F3D068]">English Literature</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mb-8">
              Alpha Academy's UGC NET English Literature coaching is designed to help aspirants achieve not just NET qualification but JRF — the top percentile recognition that opens doors to research fellowships and premier PhD programmes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/#contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-[#F3D068] text-black font-bold text-sm hover:bg-[#D4AF37] transition-colors">
                <span>Enquire for JRF Coaching</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/ugc-net-english-literature" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border border-white/20 text-white font-bold text-sm hover:border-[#F3D068] hover:text-[#F3D068] transition-colors">
                <span>English Literature Coaching Details</span>
              </Link>
            </div>
          </div>
        </section>

        {/* JRF vs NET */}
        <section className="py-20 bg-white border-t border-[#EAE5DC]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-[#121316] mb-4">UGC NET vs JRF — What Is the Difference?</h2>
            <p className="text-slate-600 mb-8">Both UGC NET and JRF are achieved through the same examination. The difference lies in your final score percentile.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC]">
                <h3 className="font-bold text-[#121316] text-base mb-3">UGC NET — Assistant Professor Eligibility</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#8C6418] shrink-0 mt-0.5" /><span>Qualifies you to apply for Assistant Professor positions at Indian universities and colleges</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#8C6418] shrink-0 mt-0.5" /><span>Awarded to all candidates who cross the NET minimum cutoff percentile</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#8C6418] shrink-0 mt-0.5" /><span>No fellowship or stipend attached</span></li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#8C6418]/40">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-4 h-4 text-[#8C6418]" />
                  <h3 className="font-bold text-[#121316] text-base">UGC NET JRF — Junior Research Fellowship</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#8C6418] shrink-0 mt-0.5" /><span>Awarded to top 6% of NET qualifiers in each subject</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#8C6418] shrink-0 mt-0.5" /><span>Eligible for a monthly research fellowship stipend</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#8C6418] shrink-0 mt-0.5" /><span>Eligible for direct PhD admission at premier Indian universities</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#8C6418] shrink-0 mt-0.5" /><span>Significantly enhances academic career credentials</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* JRF strategy */}
        <section className="py-20 bg-[#F5F2EB] border-t border-[#EAE5DC]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-[#121316] mb-4">Alpha Academy's JRF Preparation Strategy</h2>
            <p className="text-slate-600 mb-8">Our coaching includes specific elements calibrated for JRF-level preparation, beyond standard NET coaching.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Advanced Mock Tests", desc: "Full-length CBT mock tests calibrated to JRF difficulty — including high-discrimination questions that separate top performers" },
                { title: "Deep PYQ Analysis", desc: "10-year PYQ breakdown focusing on frequently repeated, high-difficulty questions and nuanced distractor patterns" },
                { title: "Theory & Criticism Mastery", desc: "Deep-dive into literary theory units which carry high question density in JRF-level scores" },
                { title: "Paper 1 High Scoring", desc: "Targeted Paper 1 coaching to maximise aptitude scores — often the differentiating factor between NET and JRF" },
                { title: "Accuracy Drills", desc: "Speed-accuracy practice drills to minimise errors under timed conditions" },
                { title: "Personalised Mentorship", desc: "One-on-one guidance from Sabarna Suresh on identifying individual weak points and closing knowledge gaps" }
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white border border-[#EAE5DC]">
                  <div className="font-bold text-[#8C6418] text-sm mb-1">{item.title}</div>
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
            <h2 className="font-serif text-3xl font-bold text-[#121316] mb-8">JRF Coaching Questions Answered</h2>
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
            <Award className="w-12 h-12 text-[#F3D068] mx-auto mb-4" />
            <h2 className="font-serif text-3xl font-bold mb-4">Aim for JRF with Alpha Academy</h2>
            <p className="text-slate-300 mb-8">Structured coaching for UGC NET JRF qualification in English Literature. Available online for students in Coimbatore and across India.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-[#F3D068] text-black font-bold hover:bg-[#D4AF37] transition-colors">
                <span>Enquire About JRF Coaching</span>
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
