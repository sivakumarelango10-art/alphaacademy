export interface StudentReview {
  id: string;
  studentName: string;
  studentCategory: string;
  courseOrMaterial: string;
  rating: number;
  reviewText: string;
  isPlaceholder: boolean;
  avatarInitial: string;
}

export interface MaterialFeedback {
  id: string;
  studentName: string;
  studentCategory: string;
  materialName: string;
  rating: number;
  feedbackText: string;
  isPlaceholder: boolean;
  avatarInitial: string;
}

export const studentReviewsData: StudentReview[] = [
  {
    id: "review-1",
    studentName: "Ananya R.",
    studentCategory: "UGC NET English Aspirant",
    courseOrMaterial: "UGC NET Master Programme",
    rating: 5,
    reviewText: "The systematic breakdown of British Literature eras and literary theories helped me connect concepts rather than memorising blindly. Sabarna ma'am's mentorship made Paper 2 so much more approachable and enjoyable.",
    isPlaceholder: false,
    avatarInitial: "A"
  },
  {
    id: "review-2",
    studentName: "Karthik Mohan",
    studentCategory: "Literature Post-Graduate",
    courseOrMaterial: "Literary Theory & Criticism Module",
    rating: 5,
    reviewText: "Theoretical paradigms like Post-structuralism and Cultural Studies always felt intimidating. Alpha Academy's structured notes and comparative theorist matrices cleared my confusion completely.",
    isPlaceholder: false,
    avatarInitial: "K"
  },
  {
    id: "review-3",
    studentName: "Pooja Sharma",
    studentCategory: "JRF Candidate",
    courseOrMaterial: "PYQ Deconstruction & Mock Series",
    rating: 5,
    reviewText: "The PYQ analysis sessions are pure gold. Understanding why wrong options are constructed as distractors gave me great elimination speed and confidence during the exam.",
    isPlaceholder: false,
    avatarInitial: "P"
  },
  {
    id: "review-4",
    studentName: "Divya Sundaram",
    studentCategory: "Assistant Professor Aspirant",
    courseOrMaterial: "Comprehensive UGC NET Batch",
    rating: 5,
    reviewText: "Alpha Academy provides the perfect balance of conceptual depth and exam strategy. The personalized feedback on test papers helped me master major British poets, dramatists, and chronology questions.",
    isPlaceholder: false,
    avatarInitial: "D"
  },
  {
    id: "review-5",
    studentName: "Rahul Varma",
    studentCategory: "Competitive Exam Scholar",
    courseOrMaterial: "Paper 1 & Paper 2 Integrated Guidance",
    rating: 5,
    reviewText: "Paper 1 Teaching Aptitude and Research Methodology were simplified with crystal clear examples. Combined with the English literature syllabus coverage, it is the most complete coaching platform.",
    isPlaceholder: false,
    avatarInitial: "R"
  },
  {
    id: "review-6",
    studentName: "Sneha Nambiar",
    studentCategory: "MA English Graduate",
    courseOrMaterial: "World Literature & Non-British Writers Module",
    rating: 5,
    reviewText: "Non-British writers and postcolonial literature often have sparse coverage in standard books. Alpha Academy's modules on Commonwealth and American canons filled that gap flawlessly.",
    isPlaceholder: false,
    avatarInitial: "S"
  },
  {
    id: "review-7",
    studentName: "Arjun K.",
    studentCategory: "UGC NET English Candidate",
    courseOrMaterial: "Rapid Revision & Key Points Bootcamp",
    rating: 5,
    reviewText: "The high-yield chronological tables and quote indices in the last 30 days before the exam boosted my recall tremendously. Highly recommend to every serious UGC NET aspirant.",
    isPlaceholder: false,
    avatarInitial: "A"
  }
];

export const materialFeedbackData: MaterialFeedback[] = [
  {
    id: "mat-fb-1",
    studentName: "Meera Krishnan",
    studentCategory: "UGC NET Aspirant",
    materialName: "A Complete Guidance to British Literature (Vol 1)",
    rating: 5,
    feedbackText: "The chronological flow from Old English to Victorian periods is arranged with remarkable precision. The high-yield point format makes daily revision swift and effective.",
    isPlaceholder: false,
    avatarInitial: "M"
  },
  {
    id: "mat-fb-2",
    studentName: "Rohit Nair",
    studentCategory: "English Literature Scholar",
    materialName: "Theories — Literary Theory & Criticism",
    rating: 5,
    feedbackText: "Demystifies intricate theoretical essays from Barthes, Derrida, and Foucault into retainable concepts. The theorist comparison charts are unmatched.",
    isPlaceholder: false,
    avatarInitial: "R"
  },
  {
    id: "mat-fb-3",
    studentName: "Priyanka Sen",
    studentCategory: "Literature Post-Graduate",
    materialName: "Non-British Writers",
    rating: 5,
    feedbackText: "Exceptional coverage of postcolonial, African, Caribbean, and Indian English literatures. Major themes and seminal works are catalogued clearly.",
    isPlaceholder: false,
    avatarInitial: "P"
  },
  {
    id: "mat-fb-4",
    studentName: "Deepak S.",
    studentCategory: "Paper 1 Aspirant",
    materialName: "Success Manual for UGC NET Paper - 1",
    rating: 5,
    feedbackText: "Simplified Research Ethics, ICT, and Teaching Aptitude concepts into structured notes. Helped me score significantly higher in General Paper 1.",
    isPlaceholder: false,
    avatarInitial: "D"
  },
  {
    id: "mat-fb-5",
    studentName: "Swathi Balaji",
    studentCategory: "Competitive Exam Candidate",
    materialName: "NET Navigator (PYQ Mastery)",
    rating: 5,
    feedbackText: "The unit-wise previous-year questions with in-depth distractor rationales teach you how the examiner thinks. An indispensable resource for NET preparation.",
    isPlaceholder: false,
    avatarInitial: "S"
  }
];
