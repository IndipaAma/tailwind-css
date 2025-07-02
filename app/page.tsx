import AchivementSection from "./components/AchivementSection";
import Clients from "./components/Clients";
import Community from "./components/Community";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import UnlockSection from "./components/UnlockSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Clients />
      <Community />
      <UnlockSection />
      <AchivementSection />
    </main>
  );
}
