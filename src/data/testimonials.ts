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
    studentName: "Lisha Thangam",
    studentCategory: "NET Aspirant",
    courseOrMaterial: "Comprehensive NET Guidance",
    rating: 5,
    reviewText: "I recently joined this Academy and had a great experience. The faculty is knowledgeable and supportive, providing excellent guidance and mentorship. The study materials are comprehensive and well-structured, helping me prepare effectively for my NET exam. Overall, I'd recommend Alpha Academy to anyone looking for quality coaching.",
    isPlaceholder: false,
    avatarInitial: "L"
  },
  {
    id: "review-2",
    studentName: "Shalini Palanivel",
    studentCategory: "UGC NET Candidate",
    courseOrMaterial: "Exam-Oriented Master Batch",
    rating: 5,
    reviewText: "I am really happy to say that I attended TN Alpha Academy. The classes were well-planned and completely exam-oriented. Concepts were explained clearly with smart techniques that made difficult topics easy to understand. The study materials were updated and very useful for UGC NET preparation. Overall, it is a reliable platform for serious aspirants, and I would strongly recommend it. Thank you Mam",
    isPlaceholder: false,
    avatarInitial: "S"
  },
  {
    id: "review-3",
    studentName: "Rithveek Bhama",
    studentCategory: "Crash Course Scholar",
    courseOrMaterial: "Intensive Crash Course",
    rating: 5,
    reviewText: "Hii people.. Had a blast with the crash course at TN Alpha Academy. Sabarna mam's classes are on fire - her knowledge is on point, and her energy's motivating. She teaches what's crucial for NET, makes learning easy, and boosts our confidence tremendously. If you're hunting for solid NET coaching, TN Alpha's the way to go guys",
    isPlaceholder: false,
    avatarInitial: "R"
  },
  {
    id: "review-4",
    studentName: "Aswini",
    studentCategory: "NET & SET Aspirant",
    courseOrMaterial: "Literature & Concept Mastery",
    rating: 5,
    reviewText: "One of the best academies I've ever seen. If you're looking for NET and SET preparation, this academy is a great choice, where you learn to love literature rather than just prepare for exams. Special thanks to Sabarna ma'am for making each concept easy to understand.",
    isPlaceholder: false,
    avatarInitial: "A"
  },
  {
    id: "review-5",
    studentName: "Silvia",
    studentCategory: "Competitive Exam Aspirant",
    courseOrMaterial: "Interactive Coaching & Tests",
    rating: 5,
    reviewText: "Woah what a coaching!!! I haven't know that a person can have this much of info in a finger tip. Class timings are flexible. Revisions are done simultaneously during class. I know the online tests in which learners will get the question and time allotment. But here the staff is so dedicated to her job sharing each questions one by one throughout the test. I think her patience, perseverance, dedication, energetic performance, all these sets a epitome for another persons succeeding life. I am at right place",
    isPlaceholder: false,
    avatarInitial: "S"
  },
  {
    id: "review-6",
    studentName: "Mangayarkarasi",
    studentCategory: "UGC NET Aspirant",
    courseOrMaterial: "Conceptual Clarity Programme",
    rating: 5,
    reviewText: "TN Alpha Academy's UGC NET classes are extremely learner-friendly. Concepts are delivered in a very simple and structured manner, making even difficult topics easy to understand. The mentor is highly supportive, patient, and always motivates students to give their best. Each session is well-planned and focused, helping students gain strong conceptual clarity without confusion...it is truly worth the investment for UGC NET Aspirants....",
    isPlaceholder: false,
    avatarInitial: "M"
  },
  {
    id: "review-7",
    studentName: "Priya Sangar",
    studentCategory: "UGC NET Candidate",
    courseOrMaterial: "Exam Pattern & Precision Notes",
    rating: 5,
    reviewText: "She explains every concept very clearly and makes even the most difficult topics easy to understand. Her teaching approach is highly student-friendly. She coaches us specifically for the NET exam with a clear focus on the syllabus and exam pattern. Her notes are very precise, well-organized, and pinpointed, which are extremely helpful for NET preparation and quick revision. She explains topics and supports them with relevant examples, making complex concepts easy to grasp and remember. She is very patient in clearing doubts and always encourages students to ask questions. Her guidance helps us understand how to approach NET questions confidently and effectively.",
    isPlaceholder: false,
    avatarInitial: "P"
  },
  {
    id: "review-8",
    studentName: "Husmitha",
    studentCategory: "Paper 1 & Paper 2 Aspirant",
    courseOrMaterial: "Complete Guidance & Book Series",
    rating: 5,
    reviewText: "I recently came across Alpha Academy through an Instagram reel that shared a wonderful mnemonic- based chronology of Shakespeare. It caught my attention immediately, and I joined the class. The 2-hour session was truly useful concepts were explained clearly and engagingly. The study materials provided were absolutely amazing short, crisp, and easy to revise anytime. They make even complex topics feel simple and memorable. Akka is very patient and friendly throughout the sessions. She clears every doubt with care, making learning comfortable and enjoyable and also she will follows through phone call and message. She will keep on checking us. Thank you so much and means a lot akka. I truly appreciate her dedication and the effort she puts into helping students succeed. I Highly recommend this course for NET aspirants! For both Paper 1 and Paper 2 Thank you, akka, for the extraordinary books and your valuable guidance. I'm really happy to be part of this learning journey!",
    isPlaceholder: false,
    avatarInitial: "H"
  },
  {
    id: "review-9",
    studentName: "Muthu Maheshwari",
    studentCategory: "Crash Course Aspirant",
    courseOrMaterial: "UGC NET Crash Course",
    rating: 5,
    reviewText: "Ma'am, I just wanted to express my heartfelt gratitude and appreciation for the UGC NET crash course. The way you've structured the course and delivered the content has been incredibly helpful in clarifying my concepts and boosting my confidence. Your teaching style and expertise are truly commendable. I'm grateful for the opportunity to learn from you and I'm looking forward to the rest of the course. Thank you for your dedication and hard work ma'am",
    isPlaceholder: false,
    avatarInitial: "M"
  },
  {
    id: "review-10",
    studentName: "Gowtham",
    studentCategory: "Academic Scholar & Learner",
    courseOrMaterial: "Mentorship & Comprehensive Materials",
    rating: 5,
    reviewText: "Excellent Learning Experience at TN Alpha Academy. Guys I've been a part of Alpha Academy as a learner, and it has been a truly rewarding experience to me. Here the faculty was highly knowledgeable, supportive, and dedicated to helping learners succeed. The teaching methods are clear and engaging, also making even complex topics are further easy to understand. This academy provides me a great learning environment with well-structured classes, regular assessments. I've noticed a significant improvement in my understanding and confidence level since joining. Here the Book contents are easy to understandable and I'm not finding any difficulties and faculty's guidance and teaching, mentoring are as friendly manner. videos and quizzes are perfect. I highly recommend this TN Alpha Academy to learners looking for quality education, professional guidance, and consistent motivation. Really It's one of the best decisions that I've made for my academic growth.",
    isPlaceholder: false,
    avatarInitial: "G"
  }
];

export const materialFeedbackData: MaterialFeedback[] = [
  {
    id: "mat-fb-1",
    studentName: "Malanika",
    studentCategory: "UGC NET Aspirant",
    materialName: "Quick Revision Handbook",
    rating: 5,
    feedbackText: "This book cover wide syllabus in concise and clear manner. It Helps to recall key points quickly, making it highly ( Exam - Friendly). Especially beneficial for learner's who already attending classes, it serves as an excellent quick - revision handbook. Overall it is a useful and exam focused guide that supports effective and efficient preparation. Thank you mam",
    isPlaceholder: false,
    avatarInitial: "M"
  },
  {
    id: "mat-fb-2",
    studentName: "Lisha",
    studentCategory: "NET Aspirant",
    materialName: "UGC NET Prep Resource",
    rating: 5,
    feedbackText: "This book is a total game-changer for NET exam prep! The content is well- structured, and the explanations are easy to understand, making key concepts a breeze to grasp. A must-have study resource for NET aspirants! Thanks for the amazing work, Ma'am!",
    isPlaceholder: false,
    avatarInitial: "L"
  },
  {
    id: "mat-fb-3",
    studentName: "Anirut Senthilnathan",
    studentCategory: "UGC NET Candidate",
    materialName: "Focus & Core Materials",
    rating: 5,
    feedbackText: "I would Highly Recommend!. I'm loving how these books cut through the noise and focus on what matters for UGC NET.",
    isPlaceholder: false,
    avatarInitial: "A"
  },
  {
    id: "mat-fb-4",
    studentName: "Vismitha",
    studentCategory: "UGC NET Aspirant",
    materialName: "Structured Concept Notes",
    rating: 5,
    feedbackText: "The study materials are clear, precise, and organized, which helps a smooth and thorough understanding of the concepts. Each section thoughtfully structured, making it easy to understand. This systematic arrangement makes revision highly efficient + Useful study materials for UGC NET aspirants. Great job Akka",
    isPlaceholder: false,
    avatarInitial: "V"
  },
  {
    id: "mat-fb-5",
    studentName: "Yashas",
    studentCategory: "NET Beginner & Student",
    materialName: "Bilingual Notes & Test Series",
    rating: 5,
    feedbackText: "As a student & a beginner of NET, your books were really clear, simple, student friendly. The sessions are bilingual which is useful to capture & remember the points. Your motivations, preparation strategies, daily mock & weekly tests, and the recent crash course sessions are really useful for quick preparations So far TN ALPHA ACADEMY is the best one to suggest for others",
    isPlaceholder: false,
    avatarInitial: "Y"
  },
  {
    id: "mat-fb-6",
    studentName: "Geetha Duraisamy",
    studentCategory: "Course & Material Scholar",
    materialName: "Comprehensive Material & Coaching",
    rating: 5,
    feedbackText: "I am thoroughly impressed with the book material I purchased from TNAlpha Academy and the course I joined. The content is exceptionally well-structured, with clear explanations of complex topics, comprehensive coverage of key exam areas, and abundant practice questions that align perfectly with the syllabus. The faculty delivers systematic classes, patiently clearing doubts and emphasizing fundamentals to build strong confidence, while regular tests and personalized guidance help track progress and strengthen weak spots. Overall, this academy offers top-notch study resources and supportive coaching, making it an outstanding choice for effective exam preparation",
    isPlaceholder: false,
    avatarInitial: "G"
  }
];
