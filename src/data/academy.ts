export interface AcademyInfo {
  name: string;
  tagline: string;
  motto: string;
  foundedYear: number;
  founder: string;
  specialisation: string;
  heroHeadline: string;
  heroSupportingText: string;
  aboutTitle: string;
  aboutContent: string[];
  stats: Array<{
    value: number;
    suffix?: string;
    prefix?: string;
    label: string;
    sublabel: string;
  }>;
  vision: {
    title: string;
    lead: string;
    paragraphs: string[];
  };
  mission: {
    title: string;
    subtitle: string;
    items: Array<{
      id: string;
      title: string;
      description: string;
      iconName: string;
    }>;
  };
  whyUs: Array<{
    id: string;
    title: string;
    description: string;
    iconName: string;
    highlight: string;
  }>;
  trustIndicator: string;
}

export const academyData: AcademyInfo = {
  name: "Alpha Academy",
  tagline: "Specialised UGC NET – English Literature Coaching",
  motto: "Learn Simply. Prepare Smartly. Succeed Confidently.",
  foundedYear: 2023,
  founder: "Sabarna Suresh",
  specialisation: "UGC NET – English Literature",
  trustIndicator: "Founded in 2023 • UGC NET English Literature • Experienced Mentorship",
  
  heroHeadline: "Empowering Aspirants to Learn Better, Prepare Smarter and Succeed",
  heroSupportingText: "Alpha Academy helps UGC NET English Literature aspirants build conceptual clarity, prepare strategically and approach examinations with confidence.",

  aboutTitle: "About Alpha Academy",
  aboutContent: [
    "Alpha Academy, founded in 2023 by Sabarna Suresh, is an academic coaching platform dedicated to helping students prepare for competitive examinations, with a special focus on UGC NET – English Literature.",
    "With 5 years of experience in teaching and academic training, Sabarna Suresh, Founder & CEO of Alpha Academy, has built the academy with a simple vision: to make exam preparation easier, clearer and more effective for every learner."
  ],

  stats: [
    {
      value: 2023,
      label: "Founded",
      sublabel: "Dedicated to Academic Excellence"
    },
    {
      value: 5,
      suffix: "+",
      label: "Years Experience",
      sublabel: "In Teaching & Academic Mentoring"
    },
    {
      value: 8,
      label: "Published Materials",
      sublabel: "Specialised UGC NET Study Books"
    },
    {
      value: 100,
      suffix: "%",
      label: "Core Specialisation",
      sublabel: "UGC NET – English Literature"
    }
  ],

  vision: {
    title: "Our Vision",
    lead: "To create a learning environment where students can understand concepts easily, prepare systematically and approach competitive examinations with confidence.",
    paragraphs: [
      "We believe that quality education does not have to be complicated. The right guidance, the right resources and the right strategy can make even difficult subjects easier to understand and master."
    ]
  },

  mission: {
    title: "Our Mission",
    subtitle: "Making preparation simpler, smarter and more effective.",
    items: [
      {
        id: "simplify-concepts",
        title: "Simplify Complex Concepts",
        description: "Deconstructing intricate literary theories, philosophies, and critical movements into accessible, retainable ideas.",
        iconName: "BrainCircuit"
      },
      {
        id: "structured-learning",
        title: "Structured Exam-Oriented Learning",
        description: "Curated syllabi aligned rigorously with modern UGC NET examination trends and weightage.",
        iconName: "Compass"
      },
      {
        id: "identify-topics",
        title: "Identify Important Topics",
        description: "Zeroing in on high-yield themes, recurrent author canons, and pivotal texts.",
        iconName: "Target"
      },
      {
        id: "conceptual-foundations",
        title: "Build Conceptual Foundations",
        description: "Moving students beyond passive rote memorisation towards genuine critical understanding.",
        iconName: "Layers"
      },
      {
        id: "quality-materials",
        title: "Provide Quality Study Materials",
        description: "Offering 8 dedicated, student-reviewed study volumes designed specifically for English Literature.",
        iconName: "BookOpenCheck"
      },
      {
        id: "regular-revision",
        title: "Encourage Regular Revision",
        description: "Structured periodic recap modules to reinforce memory and prevent knowledge decay.",
        iconName: "RefreshCw"
      },
      {
        id: "quizzes-mock-tests",
        title: "Conduct Quizzes & Mock Tests",
        description: "Simulated exam scenarios and unit-wise assessments to develop real examination speed and precision.",
        iconName: "GraduationCap"
      },
      {
        id: "pyq-analysis",
        title: "Analyse Previous-Year Questions",
        description: "Deep-dive analysis of historical UGC NET questions to decode examiner patterns and options.",
        iconName: "SearchCheck"
      },
      {
        id: "student-confidence",
        title: "Build Student Confidence",
        description: "Fostering an encouraging mentor-led atmosphere that replaces exam anxiety with self-assurance.",
        iconName: "Sparkles"
      },
      {
        id: "career-support",
        title: "Support Academic & Career Goals",
        description: "Guiding aspirants towards successful careers in academia, research, and professorships.",
        iconName: "TrendingUp"
      }
    ]
  },

  whyUs: [
    {
      id: "experienced-mentorship",
      title: "Experienced Mentorship",
      description: "Learn under the guidance of an educator with years of teaching experience and repeated success in UGC NET examinations.",
      iconName: "Award",
      highlight: "Repeated UGC NET Success"
    },
    {
      id: "exam-oriented",
      title: "Exam-Oriented Learning",
      description: "Focus not only on subject knowledge but also on understanding how concepts are tested in competitive examinations.",
      iconName: "Crosshair",
      highlight: "Strategic Pattern Analysis"
    },
    {
      id: "quality-materials",
      title: "Quality Study Materials",
      description: "Specially designed materials help students learn important concepts in a structured and systematic manner.",
      iconName: "BookMarked",
      highlight: "8 Comprehensive Volumes"
    },
    {
      id: "conceptual-clarity",
      title: "Conceptual Clarity",
      description: "Difficult topics are simplified so students can understand, remember and apply them effectively.",
      iconName: "Lightbulb",
      highlight: "Understand Before Memorising"
    },
    {
      id: "regular-practice",
      title: "Regular Practice & Revision",
      description: "Quizzes, mock tests, PYQs and revision sessions help students continuously evaluate and improve.",
      iconName: "FileCheck2",
      highlight: "Continuous Assessment"
    },
    {
      id: "student-centred",
      title: "Student-Centred Learning",
      description: "Every learner has a different pace and learning style. Alpha Academy aims to provide guidance that makes students feel supported throughout their preparation journey.",
      iconName: "HeartHandshake",
      highlight: "Personalised Guidance"
    }
  ]
};
