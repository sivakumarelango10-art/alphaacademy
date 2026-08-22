export interface StudyMaterial {
  id: string;
  volumeNumber: number;
  title: string;
  subtitle?: string;
  category: string;
  author: string;
  image: string;
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
    title: "A Complete Guidance to British Literature",
    subtitle: "Volume I",
    category: "British Literature",
    author: "Sabarna Suresh",
    image: "/books/british-literature-vol1.jpg",
    shortDescription: "Comprehensive structured guidance covering foundational British literature, historical eras, canonical writers, and major movements.",
    fullDescription: "A thoroughly researched reference book designed specifically for UGC NET aspirants. Focuses on high-yield literary concepts with structured chapter outlines, critical summaries, major British authors, timeline chronologies, and concept-check revision points.",
    keyTopics: [
      "Old & Middle English to Renaissance Era",
      "Neoclassical, Romantic & Victorian Periods",
      "20th Century & Modern British Canon",
      "Major Poets, Dramatists & Novelists",
      "High-Yield Concept Check Revision Points"
    ],
    targetExam: "UGC NET / JRF English Literature",
    features: [
      "Chronological author master index",
      "High-yield point format",
      "Exam-tested canonical summaries",
      "Quick chapter recaps"
    ],
    pricePlaceholder: "Pricing details available on enquiry",
    coverAccent: {
      gradient: "from-amber-600/30 via-slate-900 to-black",
      border: "border-amber-500/40",
      badgeBg: "bg-amber-500/20",
      badgeText: "text-amber-700"
    }
  },
  {
    id: "material-02",
    volumeNumber: 2,
    title: "Theories",
    subtitle: "Literary Theory & Criticism",
    category: "Literary Theory & Criticism",
    author: "Sabarna Suresh",
    image: "/books/theories.jpg",
    shortDescription: "In-depth breakdown of classical to contemporary literary theories, critical schools, seminal essays, and theorists.",
    fullDescription: "Demystifies intricate theoretical paradigms from Structuralism, Post-structuralism, Psychoanalysis, to Ecocriticism, Reader-Response, and Postmodern Theory, with simplified explanations, theorist charts, and exam-oriented focus.",
    keyTopics: [
      "Classical & Neoclassical Criticism",
      "Structuralism & Post-Structuralism",
      "Feminism, Psychoanalysis & Ecocriticism",
      "Key Theorists, Seminal Texts & Concepts",
      "Comparative Critical Frameworks"
    ],
    targetExam: "UGC NET / JRF English Literature",
    features: [
      "Simplified theoretical frameworks",
      "Chronological theorist charts",
      "Comparative critical matrices",
      "PYQ-aligned theoretical focus"
    ],
    pricePlaceholder: "Pricing details available on enquiry",
    coverAccent: {
      gradient: "from-indigo-600/30 via-slate-900 to-black",
      border: "border-indigo-500/40",
      badgeBg: "bg-indigo-500/20",
      badgeText: "text-indigo-700"
    }
  },
  {
    id: "material-03",
    volumeNumber: 3,
    title: "Non-British Writers",
    subtitle: "World & Postcolonial Literature",
    category: "World Literature",
    author: "Sabarna Suresh",
    image: "/books/non-british-writers.jpg",
    shortDescription: "Comprehensive compendium of American, European, Commonwealth, Postcolonial, and Indian writers in English.",
    fullDescription: "Detailed study notes covering global anglophone literatures, American classics, African, Canadian, Australian, and Caribbean canons, along with Indian English writers and translated world masterpieces.",
    keyTopics: [
      "American & European Literary Traditions",
      "Postcolonial & Commonwealth Canons",
      "Indian Writing in English & Translations",
      "African, Caribbean & Canadian Authors",
      "Major Award-Winning Texts & Themes"
    ],
    targetExam: "UGC NET / JRF English Literature",
    features: [
      "Global literature canonical overview",
      "Author-by-author essential summaries",
      "Subaltern & diasporic voices",
      "Unit-specific high-yield notes"
    ],
    pricePlaceholder: "Pricing details available on enquiry",
    coverAccent: {
      gradient: "from-emerald-600/30 via-slate-900 to-black",
      border: "border-emerald-500/40",
      badgeBg: "bg-emerald-500/20",
      badgeText: "text-emerald-700"
    }
  },
  {
    id: "material-04",
    volumeNumber: 4,
    title: "Success Manual for UGC NET Paper - 1",
    subtitle: "Volume 1",
    category: "General Paper 1",
    author: "Sabarna Suresh",
    image: "/books/ugc-net-paper-1.jpg",
    shortDescription: "Master manual for UGC NET General Paper 1 covering Teaching Aptitude, Research Methodology, Higher Education, and ICT.",
    fullDescription: "All-in-one preparation guide covering core Paper 1 units: Teaching Aptitude, Research Methodology & Ethics, ICT, Higher Education System, and Communication. Features simplified explanations, charts, and proven scoring tactics.",
    keyTopics: [
      "Teaching & Research Aptitude Fundamentals",
      "Research Ethics, Methods & Steps",
      "Information & Communication Technology (ICT)",
      "Higher Education System in India & Policies",
      "People, Development & Environment Basics"
    ],
    targetExam: "UGC NET General Paper 1 (All Subjects)",
    features: [
      "Unit-wise breakdown & summary notes",
      "Research methodology simplified",
      "Scoring tactics & shortcut methods",
      "Exam-oriented practice concepts"
    ],
    pricePlaceholder: "Pricing details available on enquiry",
    coverAccent: {
      gradient: "from-cyan-600/30 via-slate-900 to-black",
      border: "border-cyan-500/40",
      badgeBg: "bg-cyan-500/20",
      badgeText: "text-cyan-700"
    }
  },
  {
    id: "material-05",
    volumeNumber: 5,
    title: "NET Navigator (PYQ Mastery)",
    subtitle: "Previous Year Questions & Analysis",
    category: "PYQ Mastery",
    author: "Sabarna Suresh",
    image: "/books/net-navigator-pyq.jpg",
    shortDescription: "Strategic question bank with unit-wise solved questions, detailed option rationales, and examiner trend breakdowns.",
    fullDescription: "The ultimate previous-year question navigator. Organised unit-wise with comprehensive rationales explaining why the right option is correct and how distractors are constructed, giving aspirants an unfair advantage in the exam hall.",
    keyTopics: [
      "Unit-Wise Solved PYQ Master Sets",
      "Detailed Distractor & Option Analysis",
      "Examiner Traps & Trend Deconstructions",
      "Year-Wise High-Yield Repeat Topics",
      "Elimination Techniques & Speed Tactics"
    ],
    targetExam: "UGC NET / JRF English Literature & Paper 1",
    features: [
      "Comprehensive answer explanations",
      "Distractor elimination techniques",
      "Trend frequency & weightage maps",
      "High-yield repeat topics marked"
    ],
    pricePlaceholder: "Pricing details available on enquiry",
    coverAccent: {
      gradient: "from-purple-600/30 via-slate-900 to-black",
      border: "border-purple-500/40",
      badgeBg: "bg-purple-500/20",
      badgeText: "text-purple-700"
    }
  }
];
