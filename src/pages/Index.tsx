import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import QuotesSection from "../components/QuotesSection";
import SmallThingsSection from "../components/SmallThingsSection";
import Footer from "../components/Footer";

const Index: React.FC = () => {
  // Effect for smooth scroll behavior
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Optional: add scroll reveal effect for elements with data-animate attribute
    const animateOnScroll = () => {
      const elements = document.querySelectorAll("[data-animate]");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
          element.classList.add("animate-slideUp");
        }
      });
    };

    window.addEventListener("scroll", animateOnScroll);
    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <HeroSection />
        <QuotesSection />
        <SmallThingsSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
