import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StatsStrip from "@/components/StatsStrip";
import SystemsSection from "@/components/SystemsSection";
import ApproachSection from "@/components/ApproachSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      {/*<p className="bg-blue-400">testststs</p>*/}
      <Navigation />
      <main>
        <HeroSection />
        <StatsStrip />
        <ExperienceSection />
        <SystemsSection />
        <SkillsSection />
        <ProjectsSection />
        <ApproachSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
