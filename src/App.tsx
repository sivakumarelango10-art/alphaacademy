import { useState } from "react";
import { ScrollProgress } from "./components/layout/ScrollProgress";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Founder } from "./components/sections/Founder";
import { Philosophy } from "./components/sections/Philosophy";
import { VisionMission } from "./components/sections/VisionMission";
import { WhyAlpha } from "./components/sections/WhyAlpha";
import { StudyMaterials } from "./components/sections/StudyMaterials";
import { MaterialFeedback } from "./components/sections/MaterialFeedback";
import { Testimonials } from "./components/sections/Testimonials";
import { ClassDetails } from "./components/sections/ClassDetails";
import { LearningJourney } from "./components/sections/LearningJourney";
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
    setTimeout(() => {
      setToastMessage(null);
    }, 6000);
  };

  return (
    <div className="min-h-screen bg-[#070A0F] text-slate-100 selection:bg-[#D4AF37]/30 selection:text-white">
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Main Sticky Navbar */}
      <Navbar onOpenEnquiryModal={() => handleOpenEnquiry("General Batch Enrolment")} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero onOpenEnquiryModal={handleOpenEnquiry} />

        {/* 2. About Alpha Academy */}
        <About />

        {/* 3. Meet the Founder (Sabarna Suresh) */}
        <Founder onOpenEnquiryModal={handleOpenEnquiry} />

        {/* 4. Core Philosophy / What We Believe */}
        <Philosophy />

        {/* 5 & 6. Vision & Mission */}
        <VisionMission />

        {/* 7. Why Alpha Academy? (6 Interactive Cards) */}
        <WhyAlpha onOpenEnquiryModal={handleOpenEnquiry} />

        {/* 8. Study Materials Catalog (7 Published Books) */}
        <StudyMaterials
          onSelectMaterial={(material) => setSelectedMaterial(material)}
          onEnquire={(subject) => handleOpenEnquiry(subject)}
        />

        {/* 9. Material Feedback Carousel */}
        <MaterialFeedback />

        {/* 10. Student Reviews / Testimonials */}
        <Testimonials />

        {/* 11. Class Details */}
        <ClassDetails onOpenEnquiryModal={handleOpenEnquiry} />

        {/* 12. Learning Journey (5-Step Animated Timeline) */}
        <LearningJourney />

        {/* 13. Subjects & Core Learning Areas */}
        <Subjects />

        {/* 14. Frequently Asked Questions */}
        <FAQ />

        {/* 15. Social Media & Community Hub */}
        <SocialMedia />

        {/* 16. Contact Us */}
        <Contact onSuccessToast={handleShowToast} />

        {/* 17. Final Closing CTA */}
        <CTA onOpenEnquiryModal={handleOpenEnquiry} />
      </main>

      {/* Footer */}
      <Footer onOpenEnquiryModal={() => handleOpenEnquiry("Footer Enrolment Request")} />

      {/* Modals & Overlays */}
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
