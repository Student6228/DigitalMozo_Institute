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

export const testimonials = [
  {
    name: "Rohan Sharma",
    role: "Safety Officer",
    company: "ABC Construction Pvt. Ltd.",
    image: "/assets/STUDENT-1.jpg",
    quote:
      "Digital Mozo Institute provided me with the practical skills and confidence I needed. The 100% placement assistance truly works! I landed a great job as a Safety Officer right after graduation.",
  },
  {
    name: "Atowar Rahman",
    role: "Web Designer",
    company: "XYZ Digital Agency",
    image: "/assets/Web-Dig-AA.JPG",
    quote:
      "The Web Designing course was incredibly hands-on. Thanks to the dedicated faculty and placement team, I'm now building amazing websites professionally.",
  },
  {
    name: "Shitesh Kumar",
    role: "Digital Marketing Specialist",
    company: "Global Reach Solutions",
    image: "/assets/Student-3.jpg",
    quote:
      "My experience with the Digital Marketing program was transformative. The practical sessions and career guidance helped me secure a role in a leading marketing firm.",
  },
];

export const courseOptions = courses.map((course) => course.title);

