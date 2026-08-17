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
    studentName: "Aspirant Feedback (Upcoming)",
    studentCategory: "UGC NET English Batch",
    courseOrMaterial: "UGC NET Master Programme",
    rating: 5,
    reviewText: "Student review will be added here once submitted by enrolled candidates. The academy structures conceptual lectures with high clarity and systematic doubt resolution.",
    isPlaceholder: true,
    avatarInitial: "A"
  },
  {
    id: "review-2",
    studentName: "Aspirant Feedback (Upcoming)",
    studentCategory: "Literature Scholar",
    courseOrMaterial: "Literary Theory & Criticism Module",
    rating: 5,
    reviewText: "Student review will be added here once submitted by enrolled candidates. Sabarna Suresh's mentorship simplifies dense critical paradigms into easy-to-recall frameworks.",
    isPlaceholder: true,
    avatarInitial: "S"
  },
  {
    id: "review-3",
    studentName: "Aspirant Feedback (Upcoming)",
    studentCategory: "Post-Graduate Scholar",
    courseOrMaterial: "PYQ Analysis & Mock Test Series",
    rating: 5,
    reviewText: "Student review will be added here once submitted by enrolled candidates. The focus on PYQ trends and exam-oriented problem-solving builds real exam confidence.",
    isPlaceholder: true,
    avatarInitial: "M"
  }
];

export const materialFeedbackData: MaterialFeedback[] = [
  {
    id: "mat-fb-1",
    studentName: "Reader Feedback (Upcoming)",
    studentCategory: "UGC NET Aspirant",
    materialName: "Study Material 01 — Core Literary Guide",
    rating: 5,
    feedbackText: "Student feedback on study materials will be added here. Structured point-wise summaries make revision fast and efficient.",
    isPlaceholder: true,
    avatarInitial: "R"
  },
  {
    id: "mat-fb-2",
    studentName: "Reader Feedback (Upcoming)",
    studentCategory: "English Literature Scholar",
    materialName: "Study Material 02 — Literary Theory & Criticism",
    rating: 5,
    feedbackText: "Student feedback on study materials will be added here. Theorist breakdowns and chronological charts provide great conceptual clarity.",
    isPlaceholder: true,
    avatarInitial: "E"
  },
  {
    id: "mat-fb-3",
    studentName: "Reader Feedback (Upcoming)",
    studentCategory: "Competitive Exam Candidate",
    materialName: "Study Material 06 — PYQ Analysis & Solutions",
    rating: 5,
    feedbackText: "Student feedback on study materials will be added here. In-depth distractor explanations help eliminate wrong choices quickly.",
    isPlaceholder: true,
    avatarInitial: "C"
  }
];
