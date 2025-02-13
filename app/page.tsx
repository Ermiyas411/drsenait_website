import Hero from "@/components/Hero";
import About from "@/components/About";

import Features from "@/components/Features";
import Navbar from "@/components/Navbar";
import Services from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQs";
import WhyChooseUs from "@/components/WhyChooseUs";
import JourneySection from "@/components/JourneySection";
import DentalPainSection from "@/components/DentalPainSection";

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
      <Footer />
    </>
  );
}
