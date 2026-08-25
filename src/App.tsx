import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ScrollProgress } from "./components/layout/ScrollProgress";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Founder } from "./components/sections/Founder";
import { WhyAlpha } from "./components/sections/WhyAlpha";
import { StudyMaterials } from "./components/sections/StudyMaterials";
import { MaterialFeedback } from "./components/sections/MaterialFeedback";
import { Testimonials } from "./components/sections/Testimonials";
import { ClassDetails } from "./components/sections/ClassDetails";
import { Subjects } from "./components/sections/Subjects";
import { FAQ } from "./components/sections/FAQ";
import { SocialMedia } from "./components/sections/SocialMedia";
import { Contact } from "./components/sections/Contact";
import { CTA } from "./components/sections/CTA";
import { Footer } from "./components/layout/Footer";
import { MaterialModal } from "./components/sections/MaterialModal";
import { EnquiryModal } from "./components/sections/EnquiryModal";
import { Toast } from "./components/ui/Toast";
import type { StudyMaterial } from "./data/materials";

// Dedicated SEO pages
import { UGCNETCoachingPage } from "./pages/UGCNETCoachingPage";
import { EnglishLiteraturePage } from "./pages/EnglishLiteraturePage";
import { Paper1Paper2Page } from "./pages/Paper1Paper2Page";
import { JRFCoachingPage } from "./pages/JRFCoachingPage";
import { TeachingEligibilityPage } from "./pages/TeachingEligibilityPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { NotFoundPage } from "./pages/NotFoundPage";

// ── Homepage assembled from all sections ──────────────────────────────────────
function HomePage({
  onOpenEnquiry,
  onSelectMaterial,
  onSuccessToast,
}: {
  onOpenEnquiry: (subject?: string) => void;
  onSelectMaterial: (m: StudyMaterial) => void;
  onSuccessToast: (msg: string) => void;
}) {
  return (
    <main id="main-content">
      {/* 1. Hero Section */}
      <Hero onOpenEnquiryModal={onOpenEnquiry} />

      {/* 2. About Alpha Academy */}
      <About />

      {/* 3. Meet the Founder (Sabarna Suresh) */}
      <Founder onOpenEnquiryModal={onOpenEnquiry} />

      {/* 4. Why Alpha Academy? */}
      <WhyAlpha onOpenEnquiryModal={onOpenEnquiry} />

      {/* 5. Study Materials Catalog */}
      <StudyMaterials
        onSelectMaterial={onSelectMaterial}
        onEnquire={onOpenEnquiry}
      />

      {/* 6. Material Feedback Carousel */}
      <MaterialFeedback />

      {/* 7. Student Reviews / Testimonials */}
      <Testimonials />

      {/* 8. Class Details */}
      <ClassDetails onOpenEnquiryModal={onOpenEnquiry} />

      {/* 9. Subjects & Core Learning Areas */}
      <Subjects />

      {/* 10. Frequently Asked Questions */}
      <FAQ />

      {/* 11. Social Media & Community Hub */}
      <SocialMedia />

      {/* 12. Contact Us */}
      <Contact onSuccessToast={onSuccessToast} />

      {/* 13. Final Closing CTA */}
      <CTA onOpenEnquiryModal={onOpenEnquiry} />
    </main>
  );
}

// ── Root App ─────────────────────────────────────────────────────────────────
export function App() {
  const [selectedMaterial, setSelectedMaterial] = useState<StudyMaterial | null>(null);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquirySubject, setEnquirySubject] = useState("UGC NET English Coaching 2026 Batch");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenEnquiry = (subject?: string) => {
    if (subject) setEnquirySubject(subject);
    setIsEnquiryModalOpen(true);
  };

  const handleShowToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 6000);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E293B] selection:bg-[#B8860B]/20 selection:text-black">
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Main Sticky Navbar */}
      <Navbar onOpenEnquiryModal={() => handleOpenEnquiry("General Batch Enrolment")} />

      {/* Page Routes */}
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <HomePage
              onOpenEnquiry={handleOpenEnquiry}
              onSelectMaterial={(m) => setSelectedMaterial(m)}
              onSuccessToast={handleShowToast}
            />
          }
        />

        {/* Dedicated SEO pages */}
        <Route path="/ugc-net-coaching-coimbatore" element={<UGCNETCoachingPage />} />
        <Route path="/ugc-net-english-literature" element={<EnglishLiteraturePage />} />
        <Route path="/ugc-net-paper-1-paper-2" element={<Paper1Paper2Page />} />
        <Route path="/ugc-net-jrf-coaching" element={<JRFCoachingPage />} />
        <Route path="/teaching-eligibility-exam-coaching" element={<TeachingEligibilityPage />} />

        {/* Blog */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />

        {/* 404 fallback */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* Footer (shown on all pages) */}
      <Footer onOpenEnquiryModal={() => handleOpenEnquiry("Footer Enrolment Request")} />

      {/* Modals & Overlays (available on all pages) */}
      <MaterialModal
        material={selectedMaterial}
        onClose={() => setSelectedMaterial(null)}
        onEnquire={(title) => {
          setSelectedMaterial(null);
          handleOpenEnquiry(`Enquiry for Study Material: ${title}`);
        }}
      />

      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        defaultSubject={enquirySubject}
        onSuccessToast={handleShowToast}
      />

      <Toast
        isOpen={!!toastMessage}
        message={toastMessage || ""}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}

export default App;
