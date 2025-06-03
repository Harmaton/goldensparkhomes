import Image from "next/image";
import Navigation from "./components/navigation";
import Hero from "./components/hero-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
     </div>
  );
}
