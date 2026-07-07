import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { AboutIntro } from "@/components/sections/AboutIntro";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { VisionMission } from "@/components/sections/VisionMission";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutIntro />
      <ServicesGrid />
      <VisionMission />
      <ProjectsShowcase />
      <Testimonials />
      <BlogPreview />
      <CtaBanner />
      <ContactSection />
    </>
  );
}
