import { useEffect } from "react";
import { AdmissionsSection } from "../components/home/AdmissionsSection";
import { AboutSection } from "../components/home/AboutSection";
import { ContactSection } from "../components/home/ContactSection";
import { CoursesSection } from "../components/home/CoursesSection";
import { FeaturesSection } from "../components/home/FeaturesSection";
import { HeroSection } from "../components/home/HeroSection";
import { NewsEventsSection } from "../components/home/NewsEventsSection";
import { PlacementSection } from "../components/home/PlacementSection";
import { StudentFeedbackSection } from "../components/home/StudentFeedbackSection";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";

export function HomePage() {
  useEffect(() => {
    document.title =
      "DigitalMozo Institute | Government Certified Safety, Software & Digital Courses – Guwahati";
  }, []);


  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <NewsEventsSection />
        <CoursesSection />
        <PlacementSection />
        <StudentFeedbackSection />
        <AdmissionsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
