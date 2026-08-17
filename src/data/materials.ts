export interface StudyMaterial {
  id: string;
  volumeNumber: number;
  title: string;
  category: string;
  author: string;
  shortDescription: string;
  fullDescription: string;
  keyTopics: string[];
  targetExam: string;
  features: string[];
  pricePlaceholder?: string;
  coverAccent: {
    gradient: string;
    border: string;
    badgeBg: string;
    badgeText: string;
  };
}

export const studyMaterialsData: StudyMaterial[] = [
  {
    id: "material-01",
    volumeNumber: 1,
    title: "Study Material 01",
    category: "UGC NET English Literature",
    author: "Sabarna Suresh",
    shortDescription: "Comprehensive structured guide covering foundational concepts, key authors, and core literary eras.",
    fullDescription: "A thoroughly researched reference book designed specifically for UGC NET aspirants. Focuses on high-yield literary concepts with structured chapter outlines, critical summaries, and quick-reference author chronologies.",
    keyTopics: [
      "Core Periodical Overview",
      "Essential British & World Literature Texts",
      "Key Themes & Literary Terminology",
      "Concept-Check Revision Points"
    ],
    targetExam: "UGC NET / JRF English Literature",
    features: [
      "Clear conceptual summaries",
      "High-yield point format",
      "Exam-tested key points",
      "Quick chapter recaps"
    ],
    pricePlaceholder: "Pricing details available on enquiry",
    coverAccent: {
      gradient: "from-amber-600/30 via-slate-900 to-black",
      border: "border-amber-500/40",
      badgeBg: "bg-amber-500/20",
      badgeText: "text-amber-300"
    }
  },
  {
    id: "material-02",
    volumeNumber: 2,
    title: "Study Material 02",
    category: "Literary Theory & Criticism",
    author: "Sabarna Suresh",
    shortDescription: "In-depth breakdown of classical to contemporary literary theories, critical schools, and theorists.",
    fullDescription: "Demystifies intricate theoretical paradigms from Structuralism, Post-structuralism, Psychoanalysis, to Ecocriticism and Postcolonial Theory, with simplified explanations and exam-oriented focus.",
    keyTopics: [
      "Classical & Neoclassical Criticism",
      "20th Century Critical Movements",
      "Key Theorists & Seminal Essays",
      "Theoretical Terminology & Application"
    ],
    targetExam: "UGC NET / JRF English Literature",
    features: [
      "Simplified theoretical frameworks",
      "Chronological theorist charts",
      "Comparative critical charts",
      "PYQ-aligned focus areas"
    ],
    pricePlaceholder: "Pricing details available on enquiry",
    coverAccent: {
      gradient: "from-indigo-600/30 via-slate-900 to-black",
      border: "border-indigo-500/40",
      badgeBg: "bg-indigo-500/20",
      badgeText: "text-indigo-300"
    }
  },
  {
    id: "material-03",
    volumeNumber: 3,
    title: "Study Material 03",
    category: "Cultural Studies & Postcolonialism",
    author: "Sabarna Suresh",
    shortDescription: "Specialised analysis of Cultural Studies, postcolonial writings, diasporic texts, and modern perspectives.",
    fullDescription: "Tailored to address modern UGC NET question trends that emphasize Cultural Studies, subaltern voices, media culture, and global anglophone literatures.",
    keyTopics: [
      "Birmingham Centre & Cultural Thinkers",
      "Subaltern & Postcolonial Discourses",
      "Diaspora, Migration & Identity Texts",
      "Recent Trends in Cultural Critique"
    ],
    targetExam: "UGC NET / JRF English Literature",
    features: [
      "Focused modern syllabus coverage",
      "Theorist cross-reference tables",
      "Essential essay breakdowns",
      "Exam trend analysis"
    ],
    pricePlaceholder: "Pricing details available on enquiry",
    coverAccent: {
      gradient: "from-emerald-600/30 via-slate-900 to-black",
      border: "border-emerald-500/40",
      badgeBg: "bg-emerald-500/20",
      badgeText: "text-emerald-300"
    }
  },
  {
    id: "material-04",
    volumeNumber: 4,
    title: "Study Material 04",
    category: "Indian Writing in English & Translation",
    author: "Sabarna Suresh",
    shortDescription: "Comprehensive compendium of Indian English writers, poets, dramatists, and translated literary classics.",
    fullDescription: "Detailed study notes on Indian English literature from the pre-independence renaissance to 21st-century Booker winners, including regional masterpieces translated into English.",
    keyTopics: [
      "Pre & Post-Independence Indian Writers",
      "Major Indian Poets & Dramatists",
      "Dalit & Regional Translated Literature",
      "Sahitya Akademi & Award-winning Texts"
    ],
    targetExam: "UGC NET / JRF English Literature",
    features: [
      "Exhaustive author & work indices",
      "Thematic summaries of canonical works",
      "Award highlights & publication years",
      "Quick memory matrices"
    ],
    pricePlaceholder: "Pricing details available on enquiry",
    coverAccent: {
      gradient: "from-rose-600/30 via-slate-900 to-black",
      border: "border-rose-500/40",
      badgeBg: "bg-rose-500/20",
      badgeText: "text-rose-300"
    }
  },
  {
    id: "material-05",
    volumeNumber: 5,
    title: "Study Material 05",
    category: "Language, Linguistics & ELT",
    author: "Sabarna Suresh",
    shortDescription: "Systematic modules covering English Language Teaching (ELT), pedagogy, linguistics, and language history.",
    fullDescription: "Clear, diagrammatic presentations of phonetics, morphology, syntax, second language acquisition theories, and pedagogical milestones in India.",
    keyTopics: [
      "History of English Language in India",
      "Phonetics, Morphology & Syntax Basics",
      "ELT Methodologies & Teaching Principles",
      "Commissions & Language Policies"
    ],
    targetExam: "UGC NET / JRF English Literature",
    features: [
      "Flowcharts & phonetic representations",
      "Pedagogy comparison matrices",
      "Policy timelines in India",
      "Quick-practice questions"
    ],
    pricePlaceholder: "Pricing details available on enquiry",
    coverAccent: {
      gradient: "from-cyan-600/30 via-slate-900 to-black",
      border: "border-cyan-500/40",
      badgeBg: "bg-cyan-500/20",
      badgeText: "text-cyan-300"
    }
  },
  {
    id: "material-06",
    volumeNumber: 6,
    title: "Study Material 06",
    category: "Previous Year Questions & Detailed Analysis",
    author: "Sabarna Suresh",
    shortDescription: "Strategic question bank with detailed rationales, distractor explanations, and trend breakdowns.",
    fullDescription: "Organized unit-wise with thorough explanations for correct options as well as why distractors are incorrect, providing an examiner's perspective on question formulation.",
    keyTopics: [
      "Unit-Wise Solved Question Sets",
      "Option Deconstruction & Rationales",
      "Frequent Examiner Traps & Patterns",
      "Year-Wise Question Trend Maps"
    ],
    targetExam: "UGC NET / JRF English Literature",
    features: [
      "Comprehensive answer explanations",
      "Distractor elimination techniques",
      "Trend frequency charts",
      "High-yield repeat topics marked"
    ],
    pricePlaceholder: "Pricing details available on enquiry",
    coverAccent: {
      gradient: "from-purple-600/30 via-slate-900 to-black",
      border: "border-purple-500/40",
      badgeBg: "bg-purple-500/20",
      badgeText: "text-purple-300"
    }
  },
  {
    id: "material-07",
    volumeNumber: 7,
    title: "Study Material 07",
    category: "Rapid Revision & Key Points Digest",
    author: "Sabarna Suresh",
    shortDescription: "High-yield rapid review compendium, chronological tables, character charts, and memory triggers.",
    fullDescription: "The ultimate last-mile preparation asset. Condenses the entire UGC NET English syllabus into rapid memory tables, character charts, publication timelines, and quote indices.",
    keyTopics: [
      "Chronological Master Timelines",
      "Famous Characters, Plots & Subplots",
      "Seminal Literary Quotations & Sources",
      "High-Yield One-Liner Digests"
    ],
    targetExam: "UGC NET / JRF English Literature",
    features: [
      "Ideal for last 30-day revision",
      "High-density memory charts",
      "Quick quotation cross-referencer",
      "Pocket-ready structured format"
    ],
    pricePlaceholder: "Pricing details available on enquiry",
    coverAccent: {
      gradient: "from-yellow-600/30 via-slate-900 to-black",
      border: "border-yellow-500/40",
      badgeBg: "bg-yellow-500/20",
      badgeText: "text-yellow-300"
    }
  }
];
