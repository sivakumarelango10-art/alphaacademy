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
    fullDescription: "A thoroughly researched reference book designed specifically for UGC NET aspirants. Focuses on high-yield literary concepts from Old & Middle English to the Renaissance and Neoclassical eras with structured chapter outlines, critical summaries, author chronologies, and concept-check revision points.",
    keyTopics: [
      "Old & Middle English to Renaissance",
      "Neoclassical & Augustan Literature",
      "Major Elizabethan & Jacobean Dramatists",
      "Metaphysical & Cavalier Poetry",
      "Concept-Check Revision Points"
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
    title: "A Complete Guidance to British Literature",
    subtitle: "Volume II",
    category: "British Literature",
    author: "Sabarna Suresh",
    image: "/books/british-literature-vol2.jpg",
    shortDescription: "Advanced guide covering Romantic, Victorian, Modernist, and Postmodern British poetry, prose, and theatre.",
    fullDescription: "Extends British literature mastery into the 19th and 20th centuries, covering Romantic poetry, Victorian novelistic traditions, Modernism, Postmodern experimentation, Theatre of the Absurd, and contemporary British authors.",
    keyTopics: [
      "Romantic Movement & Major Poets",
      "Victorian Novels, Prose & Industrial Themes",
      "Modernist Experimentation & Bloomsbury Group",
      "Postmodern British Drama & Theatre of Absurd",
      "Contemporary British Fiction & Poetry"
    ],
    targetExam: "UGC NET / JRF English Literature",
    features: [
      "Thematic author comparative matrices",
      "Century-wise timeline summaries",
      "Pivotal text excerpts & critiques",
      "High-yield repeat topics"
    ],
    pricePlaceholder: "Pricing details available on enquiry",
    coverAccent: {
      gradient: "from-yellow-600/30 via-slate-900 to-black",
      border: "border-yellow-500/40",
      badgeBg: "bg-yellow-500/20",
      badgeText: "text-yellow-700"
    }
  },
  {
    id: "material-03",
    volumeNumber: 3,
    title: "Theories",
    subtitle: "Literary Theory & Criticism",
    category: "Literary Theory & Criticism",
    author: "Sabarna Suresh",
    image: "/books/theories.jpg",
    shortDescription: "In-depth breakdown of classical to contemporary literary theories, critical schools, seminal essays, and theorists.",
    fullDescription: "Demystifies intricate theoretical paradigms from Structuralism, Post-structuralism, Psychoanalysis, to Ecocriticism, Reader-Response, Postmodern Theory, and Cultural Materialism with simplified explanations, theorist charts, and exam-oriented focus.",
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
    id: "material-04",
    volumeNumber: 4,
    title: "Non-British Writers",
    subtitle: "World & Postcolonial Literature",
    category: "World Literature",
    author: "Sabarna Suresh",
    image: "/books/non-british-writers.jpg",
    shortDescription: "Comprehensive compendium of American, European, Commonwealth, Postcolonial, African, and Caribbean writers in English.",
    fullDescription: "Detailed study notes covering global anglophone literatures, American classics, African, Canadian, Australian, and Caribbean canons, alongside major translated European and world masterpieces for UGC NET Paper II.",
    keyTopics: [
      "American & European Literary Traditions",
      "Postcolonial & Commonwealth Canons",
      "African, Caribbean & Canadian Authors",
      "Latin American & European Classics in Translation",
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
    id: "material-05",
    volumeNumber: 5,
    title: "A Complete Guidance to Indian Literature",
    subtitle: "Indian Writing in English & Translations",
    category: "Indian Literature",
    author: "Sabarna Suresh",
    image: "/books/indian-literature.jpg",
    shortDescription: "Exhaustive compendium of Indian English writers, poets, dramatists, Dalit literature, and translated regional classics.",
    fullDescription: "Comprehensive coverage of Indian English literature from the 19th-century renaissance to contemporary Booker winners. Features in-depth analyses of Indian poetry, drama, post-independence fiction, Dalit narratives, and regional masterpieces translated into English.",
    keyTopics: [
      "Pre & Post-Independence Indian English Writers",
      "Major Indian Poets, Novelists & Dramatists",
      "Dalit Literature & Subaltern Perspectives",
      "Sahitya Akademi & International Award Winners",
      "Regional Indian Literatures in Translation"
    ],
    targetExam: "UGC NET / JRF English Literature",
    features: [
      "Exhaustive Indian author index",
      "Thematic summaries of canonical works",
      "Award highlights & publication timelines",
      "Quick memory matrices"
    ],
    pricePlaceholder: "Pricing details available on enquiry",
    coverAccent: {
      gradient: "from-rose-600/30 via-slate-900 to-black",
      border: "border-rose-500/40",
      badgeBg: "bg-rose-500/20",
      badgeText: "text-rose-700"
    }
  },
  {
    id: "material-06",
    volumeNumber: 6,
    title: "Success Manual for UGC NET Paper - 1",
    subtitle: "Volume 1",
    category: "General Paper 1",
    author: "Sabarna Suresh",
    image: "/books/ugc-net-paper-1-vol1.jpg",
    shortDescription: "Master manual for General Paper 1 covering Teaching Aptitude, Research Methodology, Higher Education, and ICT.",
    fullDescription: "All-in-one preparation guide for UGC NET General Paper 1 (Volume 1). Covers core foundational units including Teaching Aptitude, Research Methodology & Ethics, ICT in Education, Higher Education System policies, and Communication.",
    keyTopics: [
      "Teaching Aptitude & Learner Characteristics",
      "Research Types, Methods & Steps",
      "Research Ethics & Thesis Writing",
      "Information & Communication Technology (ICT)",
      "Higher Education Governance & Policies"
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
    id: "material-07",
    volumeNumber: 7,
    title: "Success Manual for UGC NET Paper - 1",
    subtitle: "Volume 2",
    category: "General Paper 1",
    author: "Sabarna Suresh",
    image: "/books/ugc-net-paper-1-vol2.jpg",
    shortDescription: "Advanced manual for General Paper 1 covering People & Environment, Mathematical Reasoning, Logical Reasoning, and Data Interpretation.",
    fullDescription: "Comprehensive Paper 1 companion (Volume 2) focusing on scoring units: People, Development & Environment (SDGs, MDGs, environmental protocols), Logical Reasoning (Pramanas, Indian Logic), Mathematical Aptitude, and Data Interpretation shortcuts.",
    keyTopics: [
      "People, Development & Environment Protocols",
      "SDGs, MDGs & Climate Agreements",
      "Indian Logic, Pramanas & Fallacies",
      "Mathematical & Logical Reasoning Techniques",
      "Data Interpretation Speed Shortcuts"
    ],
    targetExam: "UGC NET General Paper 1 (All Subjects)",
    features: [
      "Pramanas & Indian logic simplified",
      "Environmental policy reference charts",
      "Mathematical shortcuts & solved sets",
      "High-frequency exam concepts"
    ],
    pricePlaceholder: "Pricing details available on enquiry",
    coverAccent: {
      gradient: "from-teal-600/30 via-slate-900 to-black",
      border: "border-teal-500/40",
      badgeBg: "bg-teal-500/20",
      badgeText: "text-teal-700"
    }
  },
  {
    id: "material-08",
    volumeNumber: 8,
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
