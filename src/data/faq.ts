export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Materials" | "Classes" | "Contact";
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
  }
];
