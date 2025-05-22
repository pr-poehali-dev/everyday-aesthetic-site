
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-cormorant text-gold mb-4">О проекте</h3>
            <p className="text-gray-400 text-sm">
              «Эстетика повседневности» — это исследование моментов тишины и внутренних диалогов. 
              Проект о том, как найти красоту в обыденном и ценность в моментах наедине с собой.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-cormorant text-gold mb-4">Предстоящие встречи</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">
                <span className="text-offwhite">21 марта</span> — Интроверсия и творчество
              </li>
              <li className="text-gray-400">
                <span className="text-offwhite">14 апреля</span> — Ритуалы повседневности
              </li>
              <li className="text-gray-400">
                <span className="text-offwhite">2 мая</span> — Красота в простых вещах
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-cormorant text-gold mb-4">Контакты</h3>
            <p className="text-gray-400 text-sm mb-4">
              Чтобы узнать больше о проекте или зарегистрироваться на предстоящие встречи, 
              свяжитесь с нами:
            </p>
            <p className="text-offwhite text-sm">
              art@aesthetics.ru
            </p>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 mb-4 md:mb-0">
            © 2025 Эстетика повседневности. Все права защищены.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gold transition-colors">
              Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors">
              Telegram
            </a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors">
              VK
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
