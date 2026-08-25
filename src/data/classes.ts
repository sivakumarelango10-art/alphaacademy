export interface ClassDetailInfo {
  courseName: string;
  targetExam: string;
  tagline: string;
  overview: string;
  modes: Array<{
    name: string;
    description: string;
    badge: string;
    isAvailable: boolean;
  }>;
  parameters: Array<{
    label: string;
    value: string;
    originalPrice?: string;
    offerPrice?: string;
    discountBadge?: string;
    isPlaceholder: boolean;
    helperText?: string;
    icon: string;
  }>;
  curriculumHighlights: Array<{
    moduleNumber: string;
    title: string;
    topics: string;
  }>;
  inclusions: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

export const classData: ClassDetailInfo = {
  courseName: "UGC NET English Literature Master Programme",
  targetExam: "UGC NET / JRF English Literature",
  tagline: "Comprehensive UGC NET Paper 1 & Paper 2 coaching designed for conceptual mastery, JRF target scores, and teaching eligibility success.",
  overview: "Our flagship training programme blends deep literary insights with examination-proven problem-solving techniques under direct mentorship from Sabarna Suresh.",
  
  modes: [
    {
      name: "Online Interactive Coaching",
      description: "Live interactive classes with full recorded video backup, doubt-clearing sessions, and integrated digital study materials — accessible from Coimbatore and across India.",
      badge: "Online Interactive",
      isAvailable: true
    }
  ],

  parameters: [
    {
      label: "Course Duration",
      value: "6 Months",
      isPlaceholder: false,
      helperText: "Structured 6-month comprehensive syllabus coverage & intensive revision",
      icon: "Calendar"
    },
    {
      label: "Class Schedule & Timings",
      value: "Monday – Saturday | 6:00 PM – 9:00 PM",
      isPlaceholder: false,
      helperText: "Every Saturday mathematics session will be conducted.",
      icon: "Clock"
    },
    {
      label: "Classes Per Week",
      value: "6 Days",
      isPlaceholder: false,
      helperText: "Dedicated live subject lectures + Saturday special mathematics sessions",
      icon: "CalendarDays"
    },
    {
      label: "Course Fee",
      value: "₹27,000",
      originalPrice: "₹33,000",
      offerPrice: "₹27,000",
      discountBadge: "18% Offer",
      isPlaceholder: false,
      helperText: "Special admission offer with full study material package included",
      icon: "BadgeIndianRupee"
    }
  ],

  curriculumHighlights: [
    {
      moduleNumber: "Unit 01 – 04",
      title: "Chaucer to Contemporary World Literature",
      topics: "British Poetry, Drama, Prose, Fiction, European & American Canons"
    },
    {
      moduleNumber: "Unit 05 – 08",
      title: "Language, Pedagogy & Indian Writings",
      topics: "Language History, ELT in India, Indian English Literature & Translation"
    },
    {
      moduleNumber: "Unit 09 – 10",
      title: "Literary Theory, Criticism & Cultural Studies",
      topics: "Classical to Contemporary Criticism, Postcolonialism, Research Methods"
    }
  ],

  inclusions: [
    {
      title: "8 Published Study Materials",
      description: "Direct access to our published study volumes curated specifically for UGC NET English.",
      icon: "BookOpen"
    },
    {
      title: "Quizzes & Mock Test Series",
      description: "Weekly unit tests, sectional assessments, and timed full-length CBT-style mock tests.",
      icon: "CheckCircle2"
    },
    {
      title: "10-Year PYQ Breakdown",
      description: "Systematic dissection of previous year questions with option elimination strategies.",
      icon: "History"
    },
    {
      title: "Personal Doubt Clearing",
      description: "Direct mentorship sessions with Sabarna Suresh to address individual preparation hurdles.",
      icon: "MessagesSquare"
    }
  ]
};
