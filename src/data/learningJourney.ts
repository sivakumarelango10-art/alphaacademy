export interface JourneyStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
  icon: string;
  badge: string;
}

export const journeyStepsData: JourneyStep[] = [
  {
    stepNumber: "01",
    title: "Understand",
    subtitle: "Build Conceptual Clarity",
    description: "Begin with fundamental ideas, literary terminology, historical context, and core theoretical principles rather than blind memorisation.",
    outcomes: ["Grasp fundamental principles", "Understand literary context", "Demystify core terms"],
    icon: "Compass",
    badge: "Foundations First"
  },
  {
    stepNumber: "02",
    title: "Learn",
    subtitle: "Study Structured Topics",
    description: "Navigate through unit-by-unit syllabus modules using our 8 published reference materials and strategic lectures.",
    outcomes: ["Exhaustive unit coverage", "High-yield author canons", "Structured note-taking"],
    icon: "BookOpen",
    badge: "Systematic Syllabus"
  },
  {
    stepNumber: "03",
    title: "Practice",
    subtitle: "Solve Questions & Quizzes",
    description: "Apply concepts through regular chapter quizzes, previous-year question deconstructions, and timed mock tests.",
    outcomes: ["Option elimination skills", "Exam pacing and speed", "PYQ trend mastery"],
    icon: "CheckSquare",
    badge: "Active Application"
  },
  {
    stepNumber: "04",
    title: "Revise",
    subtitle: "Strengthen Important Concepts",
    description: "Reinforce high-frequency topics, chronological timelines, and critical summaries using rapid revision digests.",
    outcomes: ["Active recall practice", "Consolidated mind maps", "Zero memory fade"],
    icon: "RefreshCw",
    badge: "Strategic Retention"
  },
  {
    stepNumber: "05",
    title: "Succeed",
    subtitle: "Approach Examination with Confidence",
    description: "Walk into the examination hall with calm composure, crystal-clear conceptual clarity, and high-percentile readiness.",
    outcomes: ["Calm examination mindset", "High accuracy rates", "UGC NET & JRF Success"],
    icon: "Trophy",
    badge: "Ultimate Goal"
  }
];
