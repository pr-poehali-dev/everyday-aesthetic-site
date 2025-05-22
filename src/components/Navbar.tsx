
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="/" className="text-xl font-cormorant text-gold">
            Эстетика повседневности
          </a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-400 hover:text-gold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 'Закрыть' : 'Меню'}
          </button>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-300 hover:text-gold transition-colors">
              Главная
            </a>
            <a href="#" className="text-gray-300 hover:text-gold transition-colors">
              О проекте
            </a>
            <a href="#" className="text-gray-300 hover:text-gold transition-colors">
              Практики
            </a>
            <a href="#" className="text-gray-300 hover:text-gold transition-colors">
              Встречи
            </a>
            <a href="#" className="text-gray-300 hover:text-gold transition-colors">
              Контакты
            </a>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4 pb-4">
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                Главная
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                О проекте
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                Практики
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                Встречи
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                Контакты
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
