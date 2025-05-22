
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-10 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-cormorant text-gold mb-4">Эстетика повседневности</h3>
          <p className="text-sm text-gray-400">
            Проект исследующий внутренний мир через призму повседневных практик, направленных на самопознание и творческое развитие.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-cormorant text-gray-300 mb-4">Контакты</h3>
          <p className="text-sm text-gray-400 mb-2">info@aesthetics-everyday.ru</p>
          <p className="text-sm text-gray-400 mb-2">+7 (XXX) XXX-XX-XX</p>
          <p className="text-sm text-gray-400">Москва, Россия</p>
        </div>
        
        <div>
          <h3 className="text-lg font-cormorant text-gray-300 mb-4">Следующая встреча</h3>
          <p className="text-sm text-gray-400 mb-2">21 марта, 19:00</p>
          <p className="text-sm text-gray-400 mb-4">Культурный центр "Название"</p>
          <div className="inline-block">
            <a 
              href="#" 
              className="text-xs text-gold border-b border-gold pb-1 hover:text-white transition-colors"
            >
              Записаться на встречу
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-800 text-center">
        <p className="text-xs text-gray-600">
          © 2025 Эстетика повседневности. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
