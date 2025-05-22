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
              присоединяйтесь к нам
            </h2>
            <p className="text-gray-300 mb-8">
              наши встречи — это уникальная возможность погрузиться в
              исследование собственного внутреннего мира через призму эстетики
              повседневности. мы создаем пространство, где интроверсия
              становится не просто чертой характера, а творческим ресурсом.
            </p>

            <div className="inline-block">
              <a
                href="#"
                className="inline-block border border-gold text-gold px-6 py-3 hover:bg-gold/10 transition-colors"
              >
                зарегистрироваться на встречу
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
