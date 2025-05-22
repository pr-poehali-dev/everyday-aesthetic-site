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
        <section className="py-16 px-6" data-animate>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-cormorant text-gold mb-8">
              найди вдохновение в обыденном
            </h2>
            <p className="text-gray-300 mb-8">
              повседневность — это не просто набор рутинных действий, а богатое
              полотно моментов, наполненных глубоким смыслом. когда мы
              замедляемся и внимательно присматриваемся к тому, что происходит
              вокруг нас каждый день, мы обнаруживаем источники настоящей
              красоты и вдохновения. это приглашение остановиться и заметить то,
              что всегда было рядом.
            </p>

            <div className="inline-block">
              <a
                href="#small-things"
                className="inline-block border border-gold text-gold px-6 py-3 hover:bg-gold/10 transition-colors"
              >
                открыть для себя маленькие радости
              </a>
            </div>
          </div>
        </section>
        <SmallThingsSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
