export interface SubjectDomain {
  id: string;
  name: string;
  category: string;
  description: string;
  keyTopics: string[];
  icon: string;
}

export const subjectDomainsData: SubjectDomain[] = [
  {
    id: "english-lit",
    name: "English Literature",
    category: "Core Syllabus",
    description: "British literature from Old English, Chaucer, Elizabethan, Victorian, Modern to Postmodern eras, plus Commonwealth & American canons.",
    keyTopics: ["Chaucer to Shakespeare", "Romantic & Victorian Poetry", "Modernist & Postmodernist Fiction", "World Literatures"],
    icon: "Book"
  },
  {
    id: "literary-theory",
    name: "Literary Theory",
    category: "Critical Focus",
    description: "Deconstruction of major 20th and 21st-century theoretical frameworks, terminology, and seminal essays.",
    keyTopics: ["Structuralism & Post-Structuralism", "Psychoanalysis & Marxism", "Feminism & Gender Studies", "Ecocriticism & Spatial Theory"],
    icon: "Brain"
  },
  {
    id: "authors-texts",
    name: "Authors & Canonical Texts",
    category: "Literary Canons",
    description: "In-depth study of seminal authors, major works, publication chronologies, characters, and memorable lines.",
    keyTopics: ["Major British & World Authors", "Canonical Indian Writers", "Nobel & Booker Laureates", "Textual Analysis"],
    icon: "Feather"
  },
  {
    id: "literary-movements",
    name: "Literary Movements",
    category: "Historical Framework",
    description: "Chronological exploration of movements from Renaissance Humanism and Neoclassicism to the Theatre of the Absurd and Harlem Renaissance.",
    keyTopics: ["Renaissance to Enlightenment", "Romanticism & Realism", "Modernist Avant-Garde", "Postmodern Movements"],
    icon: "Hourglass"
  },
  {
    id: "critical-concepts",
    name: "Critical Concepts & Terms",
    category: "Vocabulary & Metrics",
    description: "Detailed glossary of rhetorical tropes, literary devices, prosody, aesthetic concepts, and critical vocabulary.",
    keyTopics: ["Aesthetic & Critical Terms", "Figures of Speech & Metrics", "Dramatic & Narrative Devices", "Glossary of Major Terms"],
    icon: "Key"
  },
  {
    id: "ugc-net-prep",
    name: "UGC NET Preparation",
    category: "Strategy & Focus",
    description: "Specialized exam orientation mapping all 10 syllabus units to the latest National Testing Agency (NTA) question patterns.",
    keyTopics: ["10-Unit Syllabus Mapping", "High-Weightage Topic Matrix", "Time Management Tactics", "Mock Test Benchmarking"],
    icon: "GraduationCap"
  },
  {
    id: "pyq-breakdown",
    name: "Previous Year Questions (PYQs)",
    category: "Analysis & Precision",
    description: "Dissecting past UGC NET question papers with option-by-option analysis, pattern recognition, and examiner traps.",
    keyTopics: ["Past 10 Years Question Sets", "Distractor Analysis", "Assertion-Reason Practice", "Chronological Matching Quizzes"],
    icon: "FileQuestion"
  },
  {
    id: "exam-strategy",
    name: "Exam Strategy & Speed",
    category: "Execution",
    description: "Cognitive techniques for rapid elimination, paper pacing, stress management, and high-accuracy CBT test execution.",
    keyTopics: ["CBT Interface Navigation", "Elimination Heuristics", "Accuracy Optimization", "Negative Trap Avoidance"],
    icon: "Zap"
  }
];
