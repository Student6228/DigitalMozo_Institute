export const navigationItems = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  { label: "News & Events", href: "/#news-events" },
  { label: "Academics", href: "/#academics" },
  { label: "Placement Record", href: "/#placement-record" },
  { label: "Gallery", href: "/gallery" },
  { label: "Admissions", href: "/#admissions" },
  { label: "Contact Us", href: "/#contact" },
];

export const compactNavigationItems = [
  { label: "Home", href: "/#home" },
  { label: "Academics", href: "/#academics" },
  { label: "Gallery", href: "/gallery" },
  { label: "Admissions", href: "/#admissions" },
  { label: "Contact Us", href: "/#contact" },
];

export const contactInfo = {
  instituteName: "DigitalMozo Institute",
  tagline: "Empowering Skills. Building Careers.",
  address:
    "Ground Floor, near Sanskrit College Gate, near Cambridge Public School, Jalukbari, Guwahati, Assam 781014",
  phone: "+91 86384 43812",
  email: "info@digitalmozoinstitute.in",
  workingHours: "Mon - Sat: 9:00 AM - 6:00 PM",
  establishedYear: "2022",
};

export const socialLinks = {
  facebook: "https://www.facebook.com/digitalmozoinstitute/",
  instagram: "https://www.instagram.com/digitalmozoinstitute",
  youtube: "https://www.youtube.com/@DigitalmozoInstitute",
  linkedin: "https://www.linkedin.com/company/digitalmozo-institute",
};

export interface SlideItem {
  id: number;
  image: string;
  alt: string;
  badge: string;
  title: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
}

export const sliderData: SlideItem[] = [
  {
    id: 1,
    image: "/assets/Slider/Slide1.jpeg.jpeg",
    alt: "100% Job Oriented Courses at DigitalMozo Institute",
    badge: "Government Certified Programs",
    title: "Empowering Skills. Building Careers.",
    subtitle:
      "Practical Training • Industry-Focused Programs • 100% Placement Support",
    primaryCtaText: "Explore Courses",
    primaryCtaHref: "/#academics",
    secondaryCtaText: "Apply Now",
    secondaryCtaHref: "/#admissions",
  },
  {
    id: 2,
    image: "/assets/Slider/Slide2.jpeg.jpeg",
    alt: "Certified Safety Officer and Technical Batches",
    badge: "Govt Certified Safety Officer",
    title: "Launch Your Career in Industrial Safety",
    subtitle:
      "Master IOSH, NEBOSH & OHSAS Safety Standards with hands-on lab sessions and industry certification.",
    primaryCtaText: "Safety Programs",
    primaryCtaHref: "/#academics",
    secondaryCtaText: "Get Certified",
    secondaryCtaHref: "/#admissions",
  },
  {
    id: 3,
    image: "/assets/Slider/Slide3.jpeg.jpeg",
    alt: "Practical Industrial On-Site Training",
    badge: "Practical On-Site Training",
    title: "Real-World Experience & Site Visits",
    subtitle:
      "Bridge the gap between theoretical knowledge and industry demands with live projects and site simulations.",
    primaryCtaText: "View Academics",
    primaryCtaHref: "/#academics",
    secondaryCtaText: "Apply Today",
    secondaryCtaHref: "/#admissions",
  },
  {
    id: 4,
    image: "/assets/Slider/Slide4.jpeg.jpeg",
    alt: "Industry Placement & Corporate Recognition",
    badge: "100% Placement Assistance",
    title: "Proven Placement Record in Top Companies",
    subtitle:
      "Connecting qualified learners directly with top employers in engineering, construction, and digital sectors.",
    primaryCtaText: "Placement Records",
    primaryCtaHref: "/#placement-record",
    secondaryCtaText: "Enroll Now",
    secondaryCtaHref: "/#admissions",
  },
  {
    id: 5,
    image: "/assets/Slider/Slide5.jpeg.jpeg",
    alt: "Business Excellence Award & Student Achievements",
    badge: "Award-Winning Institute",
    title: "Recognized Excellence in Vocational Training",
    subtitle:
      "Honored for delivering career-oriented training, professional discipline, and student success in Assam.",
    primaryCtaText: "About Institute",
    primaryCtaHref: "/#about",
    secondaryCtaText: "Join DigitalMozo",
    secondaryCtaHref: "/#admissions",
  },
];

export const instituteVideo = {
  heading: "Inside DigitalMozo Institute",
  subtitle:
    "Experience our practical training labs, interactive classroom sessions, and career-oriented learning environment in Guwahati.",
  embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
  watchUrl: "https://www.youtube.com/@DigitalmozoInstitute",
  poster: "/assets/Gallary/3.jpeg.jpeg",
  highlights: [
    { title: "Practical Safety Labs", desc: "Live simulations, PPE drills & industrial hazard management." },
    { title: "Modern Software Labs", desc: "Hands-on coding, web development & digital marketing tools." },
    { title: "Expert Mentorship", desc: "Learn directly from experienced industry practitioners." },
    { title: "100% Placement Cell", desc: "Dedicated interview preparation, resume building & hiring drives." },
  ],
};

export const directorInfo = {
  name: "Faizur Rahman",
  designation: "Director, DigitalMozo Institute",
  image: "/assets/Director.jpeg",
  alt: "Director Faizur Rahman - DigitalMozo Institute",
  quote:
    "At DigitalMozo Institute, our aim is to bridge the gap between academic learning and industry requirements. We focus on practical skills, discipline, professional development and career-oriented training so that every learner becomes confident and industry-ready.",
  highlights: [
    "Over a decade of dedicated vocational mentorship in North East India",
    "Recipient of the Business Excellence Award for Skill Development",
    "Committed to 100% practical, hands-on, job-oriented career training",
  ],
};

export interface GalleryItem {
  id: number;
  title: string;
  category: "Practical & Industrial Training" | "Classroom Training" | "Certifications & Placements" | "Campus Life & Events";
  image: string;
  caption: string;
}

export const galleryCategories = [
  "All",
  "Practical & Industrial Training",
  "Classroom Training",
  "Certifications & Placements",
  "Campus Life & Events",
] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Industrial Safety Drill & Site Inspection",
    category: "Practical & Industrial Training",
    image: "/assets/Slider/Slide3.jpeg.jpeg",
    caption: "Students participating in industrial site safety briefing and hazard identification training.",
  },
  {
    id: 2,
    title: "Construction Site Practical Session",
    category: "Practical & Industrial Training",
    image: "/assets/Gallary/7.jpeg.jpeg",
    caption: "On-site safety protocols and real-world construction field supervision practice.",
  },
  {
    id: 3,
    title: "Industrial Plant Safety Demonstration",
    category: "Practical & Industrial Training",
    image: "/assets/Gallary/3.jpeg.jpeg",
    caption: "Field tour and live demonstration of chemical and mechanical plant safety management.",
  },
  {
    id: 4,
    title: "Industrial PPE & Equipment Inspection",
    category: "Practical & Industrial Training",
    image: "/assets/Gallary/10.jpeg.jpeg",
    caption: "Hands-on instruction on personal protective equipment (PPE) standards and safety gear compliance.",
  },
  {
    id: 5,
    title: "Government Safety Certification Batch",
    category: "Certifications & Placements",
    image: "/assets/Gallary/1.jpeg.jpeg",
    caption: "Graduates proudly displaying their Government-Certified Safety Officer credentials.",
  },
  {
    id: 6,
    title: "Certification Distribution Ceremony",
    category: "Certifications & Placements",
    image: "/assets/Gallary/4.jpeg.jpeg",
    caption: "Recognizing academic milestones and practical competence of our enrolled students.",
  },
  {
    id: 7,
    title: "Certified Safety Officers Convocation",
    category: "Certifications & Placements",
    image: "/assets/Gallary/5.jpeg.jpeg",
    caption: "Batch of successful trainees ready for national and international placement drives.",
  },
  {
    id: 8,
    title: "Professional Diploma Awarding Ceremony",
    category: "Certifications & Placements",
    image: "/assets/Gallary/6.jpeg.jpeg",
    caption: "Celebrating successful completion of the intensive job-oriented technical syllabus.",
  },
  {
    id: 9,
    title: "Student Milestone & Credential Presentation",
    category: "Certifications & Placements",
    image: "/assets/Gallary/9.jpeg.jpeg",
    caption: "Trainees receiving their recognized certificates with institute faculty.",
  },
  {
    id: 10,
    title: "Corporate Safety Review with Tata Projects",
    category: "Certifications & Placements",
    image: "/assets/Gallary/8.jpeg.jpeg",
    caption: "Industry review meeting and student appreciation at Tata Projects Dahej Expansion Project.",
  },
  {
    id: 11,
    title: "Business Excellence Award 2024",
    category: "Certifications & Placements",
    image: "/assets/Slider/Slide5.jpeg.jpeg",
    caption: "DigitalMozo Institute honored with Business Excellence Award for Outstanding Skill Development.",
  },
  {
    id: 12,
    title: "Interactive Classroom Training Session",
    category: "Classroom Training",
    image: "/assets/Gallary/2.jpeg.jpeg",
    caption: "Engaging classroom instruction focusing on foundational theory and technical problem solving.",
  },
  {
    id: 13,
    title: "Safety Standards & Regulations Lecture",
    category: "Classroom Training",
    image: "/assets/Gallary/11.jpeg.jpeg",
    caption: "Students engaged in safety law modules, risk assessments, and emergency action protocols.",
  },
  {
    id: 14,
    title: "Annual Sports & Team Spirit Day",
    category: "Campus Life & Events",
    image: "/assets/sport-day.jpeg",
    caption: "Building team spirit, discipline, and well-rounded personality through institute sports events.",
  },
  {
    id: 15,
    title: "DigitalMozo Institute Main Facility",
    category: "Campus Life & Events",
    image: "/assets/building-image1.jpg",
    caption: "Our modern learning campus located in Jalukbari, Guwahati, Assam.",
  },
  {
    id: 16,
    title: "Student Innovation & Fair Showcase",
    category: "Campus Life & Events",
    image: "/assets/student-img1.jpeg",
    caption: "Showcasing student talent and technical project presentations.",
  },
];

export const features = [
  {
    title: "100% Practical Training",
    image: "/assets/practical.png",
    alt: "100% PRACTICAL Icon",
    description:
      "Hands-on safety labs, real machinery demonstrations, and live software project development for deep technical competence.",
  },
  {
    title: "Academic & Industry Excellence",
    image: "/assets/academic.png",
    alt: "Academic Excellence Icon",
    description:
      "Curriculum crafted according to modern industry standards and delivered by seasoned industry professionals.",
  },
  {
    title: "Dedicated Student Portal",
    image: "/assets/student portal.png",
    alt: "Student Portal Icon",
    description:
      "Access course materials, timetables, notifications, certifications, and learning resources seamlessly anytime.",
  },
];

export const newsItems = [
  {
    title: "Annual Science & Tech Fair Success",
    image: "/assets/student-img1.jpeg",
    alt: "News Image 1",
    description: "Our trainees showcased exceptional practical models and safety innovation at this year's technical exhibition.",
  },
  {
    title: "Sports Day & Team Building Celebrations",
    image: "/assets/sport-day.jpeg",
    alt: "News Image 2",
    description: "A dynamic day of athletic competition and team bonding concluded with awards ceremony and high energy.",
  },
  {
    title: "Admissions Open for 2025–2026 Batches",
    image: "/assets/addmission.jpeg",
    alt: "News Image 3",
    description: "Enrollment is now officially open for Govt-Certified Safety Officer, Software, and Digital Marketing programs.",
  },
];

export const courses = [
  {
    title: "Government Certified Safety Officer",
    image: "/assets/Gov-Safety.jpg",
    alt: "Safety Officer Training",
    badge: "High Demand",
    description:
      "Master essential workplace regulations, industrial hazard identification, and fire safety. Leading to a fully government-certified career in safety management.",
    topics: ["Industrial & Construction Safety", "Fire Safety & Risk Assessment", "IOSH / NEBOSH / OHSAS Standards"],
  },
  {
    title: "Digital Software Development",
    image: "/assets/Dig-Soft.jpeg",
    alt: "Software Development",
    badge: "Tech Career",
    description:
      "Learn to design, develop, and deploy robust software solutions using modern programming languages, database architectures, and scalable workflows.",
    topics: ["Full-Stack Programming", "Database Architecture & SQL", "API Design & Cloud Deployment"],
  },
  {
    title: "Professional Website Designing",
    image: "/assets/web-dig.jpeg",
    alt: "Website Designing",
    badge: "Creative & Coding",
    description:
      "Transform creative ideas into responsive, user-friendly websites. Gain deep expertise in HTML5, CSS3, modern UI/UX design, and interactive frontend frameworks.",
    topics: ["HTML5, CSS3 & JavaScript", "Responsive & Mobile-First Design", "Modern UI/UX Principles"],
  },
  {
    title: "Advanced Video Editing",
    image: "/assets/Video-Editing.jpg",
    alt: "Video Editing",
    badge: "Media & Film",
    description:
      "Bring cinematic visions to life. Master industry-standard editing suites for professional video production, color grading, motion graphics, and audio mastering.",
    topics: ["Premiere Pro & DaVinci Resolve", "Color Grading & Motion Graphics", "Sound Design & Audio Mastering"],
  },
  {
    title: "Expert Digital Marketing",
    image: "/assets/Digital_marketng_expert.webp",
    alt: "Digital Marketing",
    badge: "Growth & Business",
    description:
      "Navigate the modern digital marketing landscape. Develop data-driven campaigns across SEO, social media marketing, PPC advertising, and brand strategy.",
    topics: ["Search Engine Optimization (SEO)", "Social Media & Meta Ads", "Performance & Content Marketing"],
  },
];

export const placementStats = [
  { value: "100%", label: "Placement Assistance" },
  { value: "500+", label: "Graduates Placed" },
  { value: "100+", label: "Hiring Partners" },
  { value: "4.9/5", label: "Student Rating" },
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
    image: "/assets/STUDENT-1.jpeg",
  },
  {
    name: "Abdul Aziz",
    location: "Rampur, Goalpara, Assam",
    designation: "Occupational Health Safety Inspector-2",
    company: "Shree Bhawani Consultancy Services Pvt. Ltd.",
    ctc: "₹5.04 LPA",
    image: "/assets/Web-Dig-AA.jpeg",
  },
  {
    name: "Hirak Jyoti Gohain",
    location: "Tezpur, Assam",
    designation: "Safety Officer – HSE",
    company: "Esswin Electro Controls Pvt. Ltd.",
    ctc: "₹4.18 LPA",
    image: "/assets/Student-3.jpeg",
  },
];

export const studentFeedbacks: StudentFeedback[] = [
  {
    name: "Mantu Khakhlary",
    image: "/assets/STUDENT-1.jpeg",
    feedback:
      "The practical training and real-world case studies at Digital Mozo Institute gave me a strong foundation. The instructors were always approachable and patiently resolved all our doubts. Their career guidance and interview preparation sessions gave me the confidence to step into the professional world.",
  },
  {
    name: "Abdul Aziz",
    image: "/assets/Web-Dig-AA.jpeg",
    feedback:
      "Enrolling at Digital Mozo Institute was one of the best decisions for my career. The hands-on sessions and structured modules helped me master critical workplace safety practices. The dedicated faculty and mentorship throughout the program made all the difference.",
  },
  {
    name: "Hirak Jyoti Gohain",
    image: "/assets/Student-3.jpeg",
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
