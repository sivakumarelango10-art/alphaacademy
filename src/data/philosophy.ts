export interface PhilosophyQuote {
  id: string;
  quote: string;
  author: string;
  context: string;
  isMain?: boolean;
  theme: string;
}

export const philosophyData = {
  title: "What We Believe",
  subtitle: "Our Core Teaching Philosophy",
  description: "At Alpha Academy, exam preparation is not about endless rote learning; it is about building deep conceptual foundations, razor-sharp focus, and unwavering confidence.",
  mainMotto: {
    quote: "Learn Simply. Prepare Smartly. Succeed Confidently.",
    attribution: "Alpha Academy Motto",
    theme: "Core Principle"
  },
  quotes: [
    {
      id: "quote-1",
      quote: "Understand before you memorise.",
      author: "Sabarna Suresh",
      context: "Foundational Thinking",
      theme: "Conceptual Depth"
    },
    {
      id: "quote-2",
      quote: "Study what matters. Revise what counts.",
      author: "Alpha Academy Principle",
      context: "Strategic Efficiency",
      theme: "Focused Preparation"
    },
    {
      id: "quote-3",
      quote: "Complex concepts can become simple with the right guidance.",
      author: "Sabarna Suresh",
      context: "Pedagogical Clarity",
      theme: "Simplification"
    },
    {
      id: "quote-4",
      quote: "Confidence comes from clarity and consistent preparation.",
      author: "Alpha Academy Principle",
      context: "Student Mindset",
      theme: "Self-Assurance"
    },
    {
      id: "quote-5",
      quote: "Successful preparation is not about studying everything — it is about understanding what matters.",
      author: "Sabarna Suresh",
      context: "Examination Strategy",
      theme: "Targeted Mastery"
    }
  ]
};
