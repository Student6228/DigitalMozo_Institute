export const navigationItems = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  { label: "News & Events", href: "/#news-events" },
  { label: "Academics", href: "/#academics" },
  { label: "Placement Record", href: "/#placement-record" },
  { label: "Admissions", href: "/#admissions" },
  { label: "Contact Us", href: "/#contact" },
];

export const compactNavigationItems = [
  { label: "Home", href: "/#home" },
  { label: "Academics", href: "/#academics" },
  { label: "Admissions", href: "/#admissions" },
  { label: "Contact Us", href: "/#contact" },
];

export const features = [
  {
    title: "100% Practical",
    image: "/assets/practical.png",
    alt: "100% PRACTICAL Icon",
    description:
      "DigitalMozo Institute provides 100% practical Safety labs and live projects for hands-on skill development.",
  },
  {
    title: "Academic Excellence",
    image: "/assets/academic.png",
    alt: "Academic Excellence Icon",
    description: "Industry-standard curriculum delivered by experienced professionals for holistic career growth.",
  },
  {
    title: "Student Portal",
    image: "/assets/student portal.png",
    alt: "Student Portal Icon",
    description: "Access course curriculum, schedules, updates, and learning resources seamlessly.",
  },
];

export const newsItems = [
  {
    title: "Annual Science Fair Success!",
    image: "/assets/student-img1.jpeg",
    alt: "News Image 1",
    description: "Our students showcased incredible innovation at this year's science fair...",
  },
  {
    title: "Sports Day Celebrations",
    image: "/assets/sport-day.jpeg",
    alt: "News Image 2",
    description: "A day of athleticism and team spirit concluded with great success...",
  },
  {
    title: "Admission Open for New Session",
    image: "/assets/addmission.jpeg",
    alt: "News Image 3",
    description: "Applications are now being accepted for the upcoming academic year...",
  },
];

export const courses = [
  {
    title: "Government Certified Safety Officer",
    image: "/assets/Gov-Safety.jpg",
    alt: "Safety Officer Training",
    description:
      "Master essential safety protocols and workplace regulations. Our comprehensive training ensures you meet industry standards, leading to a fully government-certified career in safety management.",
    topics: ["Industrial Safety", "Fire Safety & Management", "Risk Assessment"],
  },
  {
    title: "Digital Software Development",
    image: "/assets/Dig-Soft.jpeg",
    alt: "Software Development",
    description:
      "Unlock the world of coding and application building. Learn to design, develop, and deploy robust software solutions using modern programming languages and frameworks.",
    topics: ["Programming Fundamentals", "Web Application Development", "Database Management"],
  },
  {
    title: "Professional Website Designing",
    image: "/assets/web-dig.jpeg",
    alt: "Website Designing",
    description:
      "Transform ideas into stunning, user-friendly websites. Gain expertise in responsive design, UI/UX principles, and front-end technologies to create captivating online experiences.",
    topics: ["HTML5 & CSS3 Mastery", "Responsive Web Design", "UI/UX Principles"],
  },
  {
    title: "Advanced Video Editing",
    image: "/assets/Video-Editing.jpg",
    alt: "Video Editing",
    description:
      "Bring your cinematic visions to life. Learn industry-standard software and techniques for professional video production, color grading, motion graphics, and sound design.",
    topics: ["Adobe Premiere Pro/DaVinci Resolve", "Motion Graphics Basics", "Audio Mastering"],
  },
  {
    title: "Expert Digital Marketing",
    image: "/assets/Digital_marketng_expert.webp",
    alt: "Digital Marketing",
    description:
      "Navigate the digital landscape with confidence. Develop strategies for online presence, lead generation, and brand promotion through SEO, social media, content marketing, and more.",
    topics: ["Search Engine Optimization (SEO)", "Social Media Marketing", "Content Marketing"],
  },
];

export const placementStats = [
  { value: "100%", label: "Placement Assistance" },
  { value: "500+", label: "Students Placed" },
  { value: "100+", label: "Hiring Partners" },
  { value: "Top Rated", label: "Industry Recognition" },
];

export interface PlacementRecord {
  name: string;
  location: string;
  designation: string;
  company: string;
  ctc?: string;
  image: string;
}

export interface StudentFeedback {
  name: string;
  image: string;
  feedback: string;
}

export const placementRecords: PlacementRecord[] = [
  {
    name: "Mantu Khakhlary",
    location: "Rajabari, Assam",
    designation: "Social Development Inspector-I",
    company: "Shree Bhawani Consultancy Services Pvt. Ltd.",
    ctc: "₹3.60 LPA",
    image: "/assets/STUDENT-1.jpg",
  },
  {
    name: "Abdul Aziz",
    location: "Rampur, Goalpara, Assam",
    designation: "Occupational Health Safety Inspector-2",
    company: "Shree Bhawani Consultancy Services Pvt. Ltd.",
    ctc: "₹5.04 LPA",
    image: "/assets/Web-Dig-AA.JPG",
  },
  {
    name: "Hirak Jyoti Gohain",
    location: "Tezpur, Assam",
    designation: "Safety Officer – HSE",
    company: "Esswin Electro Controls Pvt. Ltd.",
    ctc: "₹4.18 LPA",
    image: "/assets/Student-3.jpg",
  },
];

export const studentFeedbacks: StudentFeedback[] = [
  {
    name: "Mantu Khakhlary",
    image: "/assets/STUDENT-1.jpg",
    feedback:
      "The practical training and real-world case studies at Digital Mozo Institute gave me a strong foundation. The instructors were always approachable and patiently resolved all our doubts. Their career guidance and interview preparation sessions gave me the confidence to step into the professional world.",
  },
  {
    name: "Abdul Aziz",
    image: "/assets/Web-Dig-AA.JPG",
    feedback:
      "Enrolling at Digital Mozo Institute was one of the best decisions for my career. The hands-on sessions and structured modules helped me master critical workplace safety practices. The dedicated faculty and mentorship throughout the program made all the difference.",
  },
  {
    name: "Hirak Jyoti Gohain",
    image: "/assets/Student-3.jpg",
    feedback:
      "Digital Mozo Institute provides a supportive learning environment with experienced mentors who focus on practical application. The mock interviews and personality development guidance prepared me thoroughly for industry demands and boosted my confidence.",
  },
];

export const testimonials = placementRecords.map((record) => ({
  name: record.name,
  role: record.designation,
  company: record.company,
  image: record.image,
  quote:
    studentFeedbacks.find((f) => f.name === record.name)?.feedback ||
    "Exceptional learning experience and career support.",
}));

export const courseOptions = courses.map((course) => course.title);


