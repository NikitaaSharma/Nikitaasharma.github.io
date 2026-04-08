import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import PhilosophySection from "@/components/PhilosophySection";
import ContactSection from "@/components/ContactSection";
import FlashlightOverlay from "@/components/FlashlightOverlay";

const Index = () => {
  const [lightsOn, setLightsOn] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {!lightsOn && <FlashlightOverlay onReveal={() => setLightsOn(true)} />}
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <PhilosophySection />
      <ContactSection />
    </div>
  );
};

export default Index;
