import React from "react";

const SmallThingsSection: React.FC = () => {
  // Массив с данными о маленьких удовольствиях повседневности
  const smallThings = [
    {
      id: 1,
      title: "лепка из глины",
      image:
        "https://cdn.poehali.dev/files/fbe3773e-de00-4b5d-9766-6622ec9b1cba.png",
      description:
        "волшебный процесс, который погружает в мир созидания и самовыражения, когда берешь в руки глину и ощущение тактильного контакта становится источником бесконечных возможностей",
    },
    {
      id: 2,
      title: "утренний кофе",
      image:
        "https://cdn.poehali.dev/files/820089a7-d3eb-4006-9bea-4c7e4b4fd4a4.png",
      description:
        "ритуал, который пробуждает чувства и настраивает на новый день, превращая обыденное действие в момент медитации и осознанности",
    },
    {
      id: 3,
      title: "чтение",
      image:
        "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80",
      description:
        "погружение в другие миры и истории, когда каждая страница открывает новые горизонты мысли и воображения, позволяя на время забыть о повседневных заботах",
    },
    {
      id: 4,
      title: "прогулка в тишине",
      image:
        "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "моменты наедине с собой и окружающим миром, когда шаг за шагом обретаешь внутреннее равновесие и ясность мысли, освобождаясь от шума повседневности",
    },
    {
      id: 5,
      title: "время на природе",
      image:
        "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "возвращение к истокам, где шелест листьев и пение птиц напоминают о простых радостях бытия, а каждый вдох наполняет тело и разум новой энергией",
    },
    {
      id: 6,
      title: "свежее постельное бельё",
      image:
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "особое чувство комфорта и обновления, когда прикосновение хрустящей ткани к коже становится маленьким праздником чистоты и уюта в конце дня",
    },
  ];

  return (
    <section id="small-things" className="py-16 px-6 bg-black" data-animate>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-cormorant text-gold mb-12 text-center">
          маленькие вещи, которые делают повседневность приятнее
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {smallThings.map((thing) => (
            <div
              key={thing.id}
              className="flex flex-col bg-charcoal/30 relative overflow-hidden group animate-slideUp"
              style={{ animationDelay: `${thing.id * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <img
                  src={thing.image}
                  alt={thing.title}
                  className="w-full h-full object-cover sepia-image opacity-80 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 p-4 z-20">
                  <span className="text-base text-gray-300">
                    {thing.id.toString().padStart(2, "0")}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-cormorant text-gold mb-4">
                  {thing.title}
                </h3>
                <p className="text-base text-gray-300 italic">
                  {thing.description}
                </p>

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
