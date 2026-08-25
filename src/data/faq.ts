export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Materials" | "Classes" | "Contact" | "SEO";
}

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is Alpha Academy?",
    answer: "Alpha Academy is an academic coaching platform founded in 2023 by Sabarna Suresh, dedicated to empowering students preparing for competitive examinations with conceptual clarity, strategic study materials, and confidence.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "Who is Sabarna Suresh?",
    answer: "Sabarna Suresh is the Founder & CEO of Alpha Academy, an educator, academic trainer, and mentor with 5 years of teaching experience. She has cleared the UGC NET examination repeatedly and authored 8 dedicated study materials for UGC NET English Literature aspirants.",
    category: "General"
  },
  {
    id: "faq-3",
    question: "What does Alpha Academy specialise in?",
    answer: "Alpha Academy specialises strictly in UGC NET – English Literature preparation, providing targeted guidance across all 10 core syllabus units, literary theory, criticism, cultural studies, and PYQ analysis.",
    category: "General"
  },
  {
    id: "faq-4",
    question: "Is Alpha Academy focused specifically on UGC NET English Literature?",
    answer: "Yes. Our curriculum, 8 published study materials, practice tests, and mentorship strategies are 100% focused on and aligned with the UGC NET English Literature syllabus and examination patterns.",
    category: "General"
  },
  {
    id: "faq-5",
    question: "Are study materials available for purchase separately?",
    answer: "Yes, Alpha Academy has published 8 specialised study materials covering all vital domains of UGC NET English Literature. You can enquire about and explore these materials directly through the Study Materials section on this website.",
    category: "Materials"
  },
  {
    id: "faq-6",
    question: "How can I join the classes at Alpha Academy?",
    answer: "You can easily submit an enquiry using the Contact Form or reach out via our official social channels (Instagram, YouTube, Facebook). Our academic team will assist you with batch enrollment details.",
    category: "Classes"
  },
  {
    id: "faq-7",
    question: "What is the class fee?",
    answer: "The course fee is currently available at a special offer price of ₹27,000 (standard fee: ₹33,000 with 18% offer), which covers 6 months of live lectures, 8 published study materials, Saturday mathematics sessions, and test series.",
    category: "Classes"
  },
  {
    id: "faq-8",
    question: "What is the duration of the course?",
    answer: "The comprehensive course duration is 6 months, structured to cover the complete UGC NET syllabus along with regular chapter tests, mock exams, and intensive revision.",
    category: "Classes"
  },
  {
    id: "faq-9",
    question: "Are mock tests and chapter quizzes included?",
    answer: "Yes, structured unit-wise quizzes and full-length CBT mock tests are an integral part of Alpha Academy's preparation methodology to build speed, accuracy, and examination temperament.",
    category: "Classes"
  },
  {
    id: "faq-10",
    question: "Are previous-year questions (PYQs) discussed in detail?",
    answer: "Yes. Detailed deconstruction of past UGC NET question papers, option rationales, distractor elimination methods, and recurring trend maps are extensively covered in both the classes and study materials.",
    category: "Classes"
  },
  {
    id: "faq-11",
    question: "How can I contact Alpha Academy?",
    answer: "You can reach us through our Contact section enquiry form or connect via our official social handles on Instagram (@tnalphaacademy), YouTube, and Facebook. Direct contact details will also be provided upon enquiry.",
    category: "Contact"
  },
  // SEO-targeted FAQs
  {
    id: "faq-12",
    question: "What is the best UGC NET English Literature coaching in Coimbatore?",
    answer: "Alpha Academy, founded by Sabarna Suresh in 2023, is a highly regarded UGC NET English Literature coaching institute serving students in Coimbatore and across India. It offers a structured 6-month programme covering Paper 1, Paper 2, and JRF preparation, backed by 8 published study materials and personalised mentorship.",
    category: "SEO"
  },
  {
    id: "faq-13",
    question: "Does Alpha Academy provide UGC NET Paper 1 and Paper 2 coaching?",
    answer: "Yes. Alpha Academy provides comprehensive coaching for both UGC NET Paper 1 (General Teaching and Research Aptitude) and Paper 2 (English Literature). The curriculum covers all 10 syllabus units, teaching aptitude, research methods, and the complete English Literature canon, ensuring students are well-prepared for both papers.",
    category: "SEO"
  },
  {
    id: "faq-14",
    question: "How can I prepare for UGC NET English Literature?",
    answer: "Effective UGC NET English Literature preparation involves: (1) thorough understanding of all 10 syllabus units, (2) systematic study of literary movements, key authors, and critical theory, (3) regular PYQ analysis to understand question patterns, (4) mock tests to build speed and accuracy, and (5) consistent revision. Alpha Academy's structured 6-month programme is designed to guide you through each of these steps with expert mentorship.",
    category: "SEO"
  },
  {
    id: "faq-15",
    question: "Does Alpha Academy provide UGC NET JRF coaching?",
    answer: "Yes. Alpha Academy's preparation methodology is designed to help aspirants qualify for both UGC NET Assistant Professor eligibility and the Junior Research Fellowship (JRF). The coaching includes advanced PYQ analysis, high-difficulty mock tests targeting JRF-level accuracy, and mentorship strategies specific to achieving a top percentile.",
    category: "SEO"
  },
  {
    id: "faq-16",
    question: "Is UGC NET coaching available online?",
    answer: "Yes. Alpha Academy offers fully online interactive coaching with live classes held Monday through Saturday from 6:00 PM to 9:00 PM IST. All classes are also available as recorded video backups. Students from Coimbatore, Tamil Nadu, and across India can join the programme seamlessly from wherever they are.",
    category: "SEO"
  },
  {
    id: "faq-17",
    question: "Which teaching eligibility exams can students prepare for at Alpha Academy?",
    answer: "Alpha Academy primarily focuses on UGC NET (National Eligibility Test), which is the central teaching eligibility examination for Assistant Professor and Junior Research Fellowship positions in Indian universities and colleges. The UGC NET English Literature preparation at Alpha Academy covers the foundational skills that also benefit aspirants of related academic competitive examinations.",
    category: "SEO"
  },
  {
    id: "faq-18",
    question: "How does online UGC NET coaching at Alpha Academy work?",
    answer: "Alpha Academy's online coaching follows a structured live-class format: students attend interactive sessions Monday–Saturday (6:00 PM–9:00 PM IST) with Sabarna Suresh. Each session covers syllabus content, concept discussions, and question practice. Students also receive recorded class access, digital study materials, weekly quizzes, and periodic mock tests. Doubt-clearing sessions are conducted regularly to ensure every student stays on track.",
    category: "SEO"
  },
  {
    id: "faq-19",
    question: "How can I join Alpha Academy's UGC NET coaching program in Coimbatore?",
    answer: "To join Alpha Academy's UGC NET coaching, simply fill out the enquiry form on the Contact section of this website or WhatsApp us at +91 90255 67624. Our admissions team will share batch details, fee structure, and enrollment process. The programme is available online, making it accessible to students in Coimbatore and throughout India.",
    category: "SEO"
  }
];
