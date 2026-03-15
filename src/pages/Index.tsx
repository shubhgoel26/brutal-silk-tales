import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import ArtifactsSection from "@/components/ArtifactsSection";
import VoiceSection from "@/components/VoiceSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="bg-background">
      <Navbar />
      <HeroSection />
      <PhilosophySection />
      <ArtifactsSection />
      <VoiceSection />
      <FooterSection />
    </main>
  );
};

export default Index;
