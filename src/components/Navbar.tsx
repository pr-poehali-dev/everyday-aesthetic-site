import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="/" className="text-xl font-cormorant text-gold lowercase">
            повседневность
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-400 hover:text-gold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "закрыть" : "меню"}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#hero"
              className="text-base hover:text-gold transition-colors"
            >
              главная
            </a>
            <a
              href="#quotes"
              className="text-base hover:text-gold transition-colors"
            >
              о проекте
            </a>
            <a
              href="#practices"
              className="text-base hover:text-gold transition-colors"
            >
              практики
            </a>
            <a
              href="#small-things"
              className="text-base hover:text-gold transition-colors"
            >
              маленькие вещи
            </a>
            <a
              href="#contact"
              className="text-base hover:text-gold transition-colors"
            >
              контакты
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4 pb-4">
              <a
                href="#hero"
                className="text-base hover:text-gold transition-colors"
              >
                главная
              </a>
              <a
                href="#quotes"
                className="text-base hover:text-gold transition-colors"
              >
                о проекте
              </a>
              <a
                href="#practices"
                className="text-base hover:text-gold transition-colors"
              >
                практики
              </a>
              <a
                href="#small-things"
                className="text-base hover:text-gold transition-colors"
              >
                маленькие вещи
              </a>
              <a
                href="#contact"
                className="text-base hover:text-gold transition-colors"
              >
                контакты
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
