import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WhyDifferent from "@/components/WhyDifferent";
import TechStack from "@/components/TechStack";
import Market from "@/components/Market";
import Acquisition from "@/components/Acquisition";
import Founder from "@/components/Founder";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Features />
      <WhyDifferent />
      <TechStack />
      <Market />
      <Acquisition />
      <Founder />
      <Contact />
      <Footer />
    </main>
  );
}
