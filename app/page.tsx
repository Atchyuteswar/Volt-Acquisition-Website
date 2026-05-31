import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import ProductDemo from "@/components/ProductDemo";
import Features from "@/components/Features";
import WhyDifferent from "@/components/WhyDifferent";
import TechStack from "@/components/TechStack";
import DevelopmentStatus from "@/components/DevelopmentStatus";
import Market from "@/components/Market";
import Acquisition from "@/components/Acquisition";
import Founder from "@/components/Founder";
import DataRoom from "@/components/DataRoom";
import FAQ from "@/components/FAQ";
import AcquisitionCTA from "@/components/AcquisitionCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Experience />
      <ProductDemo />
      <Features />
      <WhyDifferent />
      <TechStack />
      <DevelopmentStatus />
      <Market />
      <Acquisition />
      <Founder />
      <DataRoom />
      <FAQ />
      <AcquisitionCTA />
      <Contact />
      <Footer />
    </main>
  );
}
