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
  tagline: "Comprehensive, structured coaching designed for conceptual mastery and high-percentile success.",
  overview: "Our flagship training programme blends deep literary insights with examination-proven problem-solving techniques under direct mentorship from Sabarna Suresh.",
  
  modes: [
    {
      name: "Online Interactive",
      description: "Live interactive sessions with recording access, doubt resolutions, and digital resources.",
      badge: "Most Popular",
      isAvailable: true
    },
    {
      name: "Offline Classroom",
      description: "Immersive in-person mentoring with direct faculty interaction and peer discussion groups.",
      badge: "In-Person",
      isAvailable: true
    },
    {
      name: "Hybrid Learning",
      description: "Flexible blend of physical classroom workshops and live digital sessions for distant learners.",
      badge: "Flexible",
      isAvailable: true
    }
  ],

  parameters: [
    {
      label: "Course Fee",
      value: "Fee details provided on enquiry",
      isPlaceholder: true,
      helperText: "Flexible installment & batch-specific options available",
      icon: "BadgeIndianRupee"
    },
    {
      label: "Course Duration",
      value: "Duration details provided upon batch selection",
      isPlaceholder: true,
      helperText: "Structured to cover syllabus plus intensive revision",
      icon: "Calendar"
    },
    {
      label: "Class Schedule & Timings",
      value: "Class timing provided upon enrollment",
      isPlaceholder: true,
      helperText: "Morning & Evening batch slots designed for students & working scholars",
      icon: "Clock"
    },
    {
      label: "Classes Per Week",
      value: "Weekly schedule provided in batch planner",
      isPlaceholder: true,
      helperText: "Dedicated days for syllabus lectures + separate weekend tests",
      icon: "CalendarDays"
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
      title: "7 Published Study Materials",
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
