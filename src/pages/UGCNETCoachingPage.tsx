import { Link } from "react-router-dom";
import { SEOHead } from "../components/SEOHead";
import { GraduationCap, MapPin, Phone, CheckCircle2, ArrowRight, BookOpen, Star, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Is Alpha Academy based in Coimbatore?",
    a: "Alpha Academy was founded in Coimbatore, Tamil Nadu, and serves students across Coimbatore and throughout India through online interactive coaching. The programme is fully accessible regardless of your location."
  },
  {
    q: "Can I attend UGC NET coaching online from Coimbatore?",
    a: "Yes. Alpha Academy offers live online coaching (Monday–Saturday, 6:00 PM–9:00 PM IST) with recorded video backup. Students in Coimbatore and other cities across India can join seamlessly through the online platform."
  },
  {
    q: "What UGC NET coaching programmes does Alpha Academy offer in Coimbatore?",
    a: "Alpha Academy offers a comprehensive 6-month UGC NET English Literature programme covering Paper 1 (General Teaching & Research Aptitude), Paper 2 (English Literature), and JRF-level preparation. The programme includes 8 published study materials, mock tests, and personal mentorship."
  },
  {
    q: "How do I enroll in Alpha Academy's UGC NET coaching from Coimbatore?",
    a: "You can enroll by submitting an enquiry through the Contact section on this website or by WhatsApp at +91 90255 67624. The admissions team will guide you through batch enrollment, scheduling, and payment."
  },
  {
    q: "What makes Alpha Academy one of the best UGC NET coaching centres in Coimbatore?",
    a: "Alpha Academy stands out through its 100% specialisation in UGC NET English Literature, 8 published study materials curated by Sabarna Suresh, structured 6-month curriculum, regular mock tests, 10-year PYQ analysis, and personalised mentorship — all delivered at an affordable fee."
  }
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "name": "Alpha Academy",
      "url": "https://www.tnalphaacademy.in/ugc-net-coaching-coimbatore",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Coimbatore",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      },
      "telephone": "+919025567624",
      "description": "Best UGC NET English Literature coaching in Coimbatore. Alpha Academy offers structured Paper 1, Paper 2, and JRF coaching by Sabarna Suresh.",
      "areaServed": { "@type": "City", "name": "Coimbatore" }
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
        { "@type": "ListItem", "position": 2, "name": "UGC NET Coaching in Coimbatore", "item": "https://www.tnalphaacademy.in/ugc-net-coaching-coimbatore" }
      ]
    }
  ]
};

export const UGCNETCoachingPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Best UGC NET Coaching in Coimbatore | Alpha Academy"
        description="Looking for the best UGC NET coaching in Coimbatore? Alpha Academy offers UGC NET English Literature, Paper 1 & Paper 2, and JRF coaching with expert mentorship by Sabarna Suresh."
        canonical="https://www.tnalphaacademy.in/ugc-net-coaching-coimbatore"
        schema={schema}
      />

      <main className="min-h-screen bg-[#FAF8F5]">
        {/* Hero */}
        <section className="pt-28 pb-20 bg-[#121316] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#121316] via-[#1a1a1f] to-[#0d0d0f]" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-6">
              <Link to="/" className="hover:text-[#F3D068] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#F3D068]">UGC NET Coaching in Coimbatore</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F3D068]/10 border border-[#F3D068]/30 text-xs font-bold text-[#F3D068] uppercase tracking-wider mb-6">
              <MapPin className="w-3.5 h-3.5" />
              <span>Coimbatore, Tamil Nadu</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Best UGC NET Coaching<br />
              <span className="text-[#F3D068]">in Coimbatore</span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              Alpha Academy offers specialised UGC NET English Literature coaching — covering Paper 1, Paper 2, and JRF preparation — with personalised mentorship by Sabarna Suresh. Serving students in Coimbatore and across India through structured online classes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/#contact"
                className="btn-premium-gold inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-[#F3D068] text-black font-bold text-sm hover:bg-[#D4AF37] cursor-pointer"
              >
                <span>Enquire About Next Batch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+919025567624"
                className="btn-premium-secondary inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md border border-white/20 text-white font-bold text-sm hover:border-[#F3D068] hover:text-[#F3D068] cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>+91 90255 67624</span>
              </a>
            </div>
          </div>
        </section>

        {/* Why Alpha Academy */}
        <section className="py-20 bg-white border-t border-[#EAE5DC]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#121316] mb-4">
              Why Choose Alpha Academy for UGC NET Coaching in Coimbatore?
            </h2>
            <p className="text-slate-600 text-base mb-10 max-w-2xl">
              Alpha Academy is one of the most focused UGC NET English Literature coaching platforms available to students in Coimbatore and throughout Tamil Nadu. Here is what sets us apart.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { icon: <Star className="w-5 h-5 text-[#8C6418]" />, title: "100% UGC NET Specialisation", desc: "Every aspect of our curriculum — notes, tests, PYQ sessions — is aligned exclusively with the UGC NET English Literature syllabus and examination pattern." },
                { icon: <BookOpen className="w-5 h-5 text-[#8C6418]" />, title: "8 Published Study Materials", desc: "Our mentor Sabarna Suresh has authored 8 dedicated study volumes for UGC NET English Literature, making our material one of the most comprehensive available." },
                { icon: <GraduationCap className="w-5 h-5 text-[#8C6418]" />, title: "Expert Mentorship by Sabarna Suresh", desc: "With repeated UGC NET qualifications and 5+ years of teaching experience, Sabarna Suresh brings both subject mastery and examination insight to every session." },
                { icon: <CheckCircle2 className="w-5 h-5 text-[#8C6418]" />, title: "Structured Online Coaching", desc: "Live classes Monday–Saturday (6–9 PM IST), recorded video backup, weekly quizzes, and full-length mock tests — accessible from Coimbatore and any city across India." },
                { icon: <CheckCircle2 className="w-5 h-5 text-[#8C6418]" />, title: "Paper 1 & Paper 2 Coverage", desc: "Comprehensive coaching for both UGC NET Paper 1 (Teaching & Research Aptitude) and Paper 2 (English Literature) within a single integrated programme." },
                { icon: <CheckCircle2 className="w-5 h-5 text-[#8C6418]" />, title: "JRF-Level Preparation", desc: "For aspirants aiming beyond basic qualification, our programme targets the accuracy and depth required to achieve Junior Research Fellowship scores." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] card-hover-premium">
                  <div className="p-2.5 rounded-xl bg-[#F3EEDF] h-fit">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-[#121316] text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Details */}
        <section className="py-20 bg-[#F5F2EB] border-t border-[#EAE5DC]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-[#121316] mb-8">UGC NET Coaching Programme Details</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { label: "Duration", value: "6 Months" },
                { label: "Mode", value: "Online Live" },
                { label: "Schedule", value: "Mon–Sat, 6–9 PM" },
                { label: "Study Materials", value: "8 Published Books" }
              ].map((d, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white border border-[#EAE5DC] text-center">
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">{d.label}</div>
                  <div className="font-bold text-[#121316] text-sm">{d.value}</div>
                </div>
              ))}
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#8C6418]/30">
              <h3 className="font-bold text-[#121316] mb-3">What the Programme Covers</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                {[
                  "UGC NET Paper 1 — Teaching & Research Aptitude (dedicated Saturday sessions)",
                  "UGC NET Paper 2 — All 10 English Literature syllabus units",
                  "10-year previous year question (PYQ) analysis with elimination strategies",
                  "Weekly unit-wise quizzes and full-length CBT mock tests",
                  "Personal doubt-clearing sessions with Sabarna Suresh",
                  "8 comprehensive published study volumes included"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8C6418] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white border-t border-[#EAE5DC]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-[#8C6418] mb-4">
              <HelpCircle className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Frequently Asked Questions</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-[#121316] mb-8">
              Common Questions About UGC NET Coaching in Coimbatore
            </h2>
            <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                  className={`rounded-2xl border overflow-hidden transition-all ${openFaq === i ? "border-[#8C6418] bg-[#FAF8F5]" : "border-[#EAE5DC] bg-white"}`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4"
                    aria-expanded={openFaq === i}
                  >
                    <h3 itemProp="name" className="font-bold text-[#121316] text-sm">{faq.q}</h3>
                    <ChevronDown className={`w-4 h-4 text-[#8C6418] shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                      className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-[#EAE5DC] pt-4"
                    >
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
            <h2 className="font-serif text-3xl font-bold mb-4">Start Your UGC NET Preparation in Coimbatore</h2>
            <p className="text-slate-300 text-base mb-8">
              Join Alpha Academy's structured UGC NET coaching programme. Available online for students in Coimbatore and across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-[#F3D068] text-black font-bold hover:bg-[#D4AF37] transition-colors"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/ugc-net-english-literature"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md border border-white/20 text-white font-bold hover:border-[#F3D068] transition-colors"
              >
                <span>UGC NET English Literature Coaching</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
