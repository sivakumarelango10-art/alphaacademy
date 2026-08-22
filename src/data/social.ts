export interface SocialPlatform {
  id: string;
  name: string;
  handle: string;
  url: string;
  description: string;
  followersHint: string;
  colorScheme: {
    badge: string;
    border: string;
    glow: string;
    button: string;
    iconColor: string;
  };
  highlights: string[];
}

export const socialLinksData: SocialPlatform[] = [
  {
    id: "instagram",
    name: "Instagram",
    handle: "@tnalphaacademy",
    url: "https://www.instagram.com/tnalphaacademy/",
    description: "Daily literary quizzes, high-yield revision reels, concept bites, and real-time academy updates.",
    followersHint: "Active Literary Community",
    colorScheme: {
      badge: "bg-pink-500/10 text-pink-300 border-pink-500/30",
      border: "border-pink-500/20 hover:border-pink-500/50",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.3)]",
      button: "bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white",
      iconColor: "text-pink-400"
    },
    highlights: ["Daily Literature Quizzes", "Micro-Lectures & Reels", "Student Announcements"]
  },
  {
    id: "youtube",
    name: "YouTube",
    handle: "Alpha Academy Official",
    url: "https://www.youtube.com/channel/UCozOxc41PO7OX5e8kwIE3lQ",
    description: "In-depth video lectures, UGC NET PYQ strategy breakdowns, masterclasses, and exam analysis sessions.",
    followersHint: "Video Masterclasses & Lectures",
    colorScheme: {
      badge: "bg-red-500/10 text-red-300 border-red-500/30",
      border: "border-red-500/20 hover:border-red-500/50",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.3)]",
      button: "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white",
      iconColor: "text-red-400"
    },
    highlights: ["Free Video Masterclasses", "PYQ Live Breakdowns", "Exam Strategy Guides"]
  },
  {
    id: "facebook",
    name: "Facebook",
    handle: "TN Alpha Academy",
    url: "https://www.facebook.com/p/TN-Alpha-Academy-61579489112658/",
    description: "Academic discussions, batch schedules, literary notes, and community updates for competitive exams.",
    followersHint: "Academic Network & Updates",
    colorScheme: {
      badge: "bg-blue-500/10 text-blue-300 border-blue-500/30",
      border: "border-blue-500/20 hover:border-blue-500/50",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]",
      button: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white",
      iconColor: "text-blue-400"
    },
    highlights: ["Discussion Forums", "Batch Schedules", "Study Material Updates"]
  }
];

export const contactInfoData = {
  title: "Start Your Learning Journey",
  subtitle: "Have questions about classes, study materials or UGC NET preparation? Get in touch with Alpha Academy.",
  phonePlaceholder: "Contact numbers provided upon enquiry",
  email: "Contact@tnalphaacademy.in",
  emailPlaceholder: "Contact@tnalphaacademy.in",
  locationPlaceholder: "Academic Centre / Online Headquarters",
  socialHandles: "@tnalphaacademy",
  operatingHours: "Monday – Saturday | 9:00 AM – 7:00 PM IST"
};
