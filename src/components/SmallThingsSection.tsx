
import React from 'react';

const SmallThingsSection: React.FC = () => {
  // Массив с данными о маленьких удовольствиях повседневности
  const smallThings = [
    {
      id: 1,
      title: "тыквенный латте с пряностями",
      image: "https://cdn.poehali.dev/files/cd648294-1b95-40ad-9289-bbd46d85ff2e.png",
      description: "теплый напиток, полный тепла и уютной атмосферы осеннего дня с нотками корицы, мускатного ореха и имбиря",
    },
    {
      id: 2,
      title: "лепка из глины",
      image: "https://cdn.poehali.dev/files/fbe3773e-de00-4b5d-9766-6622ec9b1cba.png",
      description: "волшебный процесс, который погружает в мир созидания и самовыражения, когда берешь в руки глину и ощущение тактильного контакта становится источником бесконечных возможностей",
    },
    {
      id: 3,
      title: "утренний кофе",
      image: "https://cdn.poehali.dev/files/820089a7-d3eb-4006-9bea-4c7e4b4fd4a4.png",
      description: "ритуал, который пробуждает чувства и настраивает на новый день, превращая обыденное действие в момент медитации и осознанности",
    }
  ];

  return (
    <section className="py-16 px-6 bg-black" data-animate>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-cormorant text-gold mb-12 text-center">
          маленькие вещи, которые делают повседневность приятнее
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {smallThings.map((thing) => (
            <div 
              key={thing.id} 
              className="flex flex-col bg-charcoal/30 relative overflow-hidden group animate-slideUp"
              style={{ animationDelay: `${thing.id * 150}ms` }}
            >
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-black/30 z-10"></div>
                <img 
                  src={thing.image} 
                  alt={thing.title} 
                  className="w-full h-full object-cover sepia-image opacity-80 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 p-4 z-20">
                  <span className="text-xs text-gray-400">{thing.id.toString().padStart(2, '0')}</span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-cormorant text-gold mb-4">{thing.title}</h3>
                <p className="text-sm text-gray-400 italic">{thing.description}</p>
                
                <div className="mt-auto pt-4 flex justify-end">
                  <div className="thin-line w-16 bg-gold/30"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmallThingsSection;
