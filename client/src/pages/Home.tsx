import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StartupSection from "@/components/StartupSection";
import CoFoundersSection from "@/components/CoFoundersSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import EntrepreneurialSection from "@/components/EntrepreneurialSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <StartupSection />
      <CoFoundersSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <EntrepreneurialSection />
      <ContactSection />
    </main>
  );
}
