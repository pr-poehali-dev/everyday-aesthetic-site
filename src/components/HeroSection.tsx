import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute top-6 left-6 text-base font-light text-gray-300 animate-fadeIn">
        21 марта
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 h-screen">
        {/* Left panel with black circle */}
        <div className="relative flex items-center justify-center bg-black p-6 animate-fadeIn">
          <div className="absolute w-40 h-40 bg-black rounded-full border border-gray-800 shadow-2xl"></div>
          <img
            src="https://cdn.poehali.dev/files/96cfe66b-0fef-4da6-b1ef-8b5ea35150b5.png"
            alt="Текстура"
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute bottom-8 left-8 text-base text-gray-300 max-w-xs">
            <p className="italic">или как создавать по-настоящему свое</p>
          </div>
        </div>

        {/* Right panel with trees and person */}
        <div className="relative bg-charcoal flex items-center justify-center p-6 animate-fadeIn delay-200">
          <img
            src="https://images.unsplash.com/photo-1476820865390-c52aeebb9891?q=80&w=2070&auto=format&fit=crop"
            alt="силуэт в лесу"
            className="absolute inset-0 w-full h-full object-cover opacity-40 sepia-image"
          />
          <div className="relative z-10 text-right max-w-lg p-6">
            <h1 className="text-4xl md:text-6xl font-cormorant font-light text-offwhite mb-3 text-right">
              интроверсия —
            </h1>
            <h2 className="text-2xl md:text-3xl font-cormorant font-light text-offwhite mb-6 text-right italic">
              творчество как отклик
              <br />
              изнутри
            </h2>
            <div className="flex justify-end items-center gap-3">
              <span className="thin-line"></span>
              <span className="text-base text-gray-300">арт-встреча</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
