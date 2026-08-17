export interface FounderProfile {
  name: string;
  designation: string;
  titles: string[];
  bio: string[];
  credentials: string[];
  pillars: Array<{
    number: string;
    title: string;
    description: string;
    icon: string;
  }>;
  timeline: Array<{
    step: string;
    title: string;
    description: string;
    yearOrTag?: string;
  }>;
  keyHighlight: string;
}

export const founderData: FounderProfile = {
  name: "Sabarna Suresh",
  designation: "Founder & CEO | Educator | Academic Trainer | Mentor",
  titles: [
    "Educator & Academic Trainer",
    "UGC NET English Literature Specialist",
    "Author of 7 Published Study Materials",
    "Founder & CEO, Alpha Academy"
  ],
  bio: [
    "Sabarna Suresh is an educator, academic trainer and mentor specialising in English Literature and UGC NET preparation.",
    "She has successfully cleared the UGC NET examination several times, giving her extensive first-hand experience of the examination pattern, syllabus, question trends and preparation strategies.",
    "She has also published 7 study materials specifically designed for UGC NET English Literature aspirants.",
    "Her unique teaching methodology moves students beyond stressful rote memorisation by building deep conceptual clarity and disciplined, strategic revision."
  ],
  credentials: [
    "Repeatedly Qualified UGC NET (English Literature)",
    "5+ Years Academic Training Experience",
    "Author of 7 Specialised UGC NET Reference Materials",
    "Mentored hundreds of literary aspirants across India"
  ],
  pillars: [
    {
      number: "01",
      title: "Conceptual Clarity",
      description: "Mastering the root theories, philosophical debates, and critical movements to build an intuitive grasp of literary history.",
      icon: "Lightbulb"
    },
    {
      number: "02",
      title: "Exam-Oriented Preparation",
      description: "Analyzing question weightage, examiner psychology, and deceptive options in UGC NET question papers.",
      icon: "Crosshair"
    },
    {
      number: "03",
      title: "Regular Practice",
      description: "Consistent problem-solving through chapter-wise quizzes, mock test series, and past 10-year question breakdowns.",
      icon: "FileCheck2"
    },
    {
      number: "04",
      title: "Strategic Revision",
      description: "High-yield summary mind maps, chronological timelines, and targeted recaps designed to maximize recall speed.",
      icon: "RotateCw"
    }
  ],
  timeline: [
    {
      step: "01",
      title: "Teaching Experience",
      description: "5+ years of dedicated academic instruction in higher education and English Literature coaching.",
      yearOrTag: "Foundation"
    },
    {
      step: "02",
      title: "UGC NET Success",
      description: "Clearing the UGC NET examination repeatedly, decoding its nuanced question patterns and evolution.",
      yearOrTag: "Mastery"
    },
    {
      step: "03",
      title: "7 Study Materials",
      description: "Authoring and publishing 7 dedicated, comprehensive study volumes tailored for literary aspirants.",
      yearOrTag: "Publication"
    },
    {
      step: "04",
      title: "Alpha Academy",
      description: "Founding Alpha Academy in 2023 to provide high-quality, structured, and confident mentorship.",
      yearOrTag: "2023 – Present"
    }
  ],
  keyHighlight: "Teaching approach combines conceptual clarity, exam-oriented preparation, regular practice, and strategic revision."
};
