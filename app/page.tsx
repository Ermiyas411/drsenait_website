import Hero from "@/components/Hero";
import About from "@/components/About";

import Services from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQs";
import WhyChooseUs from "@/components/WhyChooseUs";
import JourneySection from "@/components/JourneySection";
import DentalPainSection from "@/components/DentalPainSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <JourneySection />
        <DentalPainSection />
        <About />
        <Services />
        <Testimonials />
        <WhyChooseUs />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}
