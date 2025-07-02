import Clients from "./components/Clients";
import Community from "./components/Community";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Clients />
      <Community />
    </main>
  );
}
