import React from "react";

const QuotesSection: React.FC = () => {
  return (
    <section id="quotes" className="relative w-full bg-black py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Left panel with concept */}
        <div className="relative p-8 flex items-center">
          <div className="max-w-md mx-auto">
            <h2 className="text-4xl font-cormorant font-light text-gold mb-6">
              интроверсия —<br />
              это о чём?...
            </h2>
          </div>
        </div>

        {/* Right panel with workspace image and quotes */}
        <div className="relative p-4">
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop"
            alt="Рабочее пространство"
            className="w-full h-full object-cover opacity-70 sepia-image"
          />

          <div className="absolute top-12 left-0 w-full p-4">
            <p className="quote-italic text-xl md:text-2xl mb-6 max-w-md text-gold">
              "красота скрывается в повседневных мелочах, в привычных ритуалах,
              которые мы часто не замечаем„
            </p>
          </div>

          <div className="absolute bottom-12 right-0 w-full p-4 text-right">
            <p className="quote-italic text-xl md:text-2xl max-w-md ml-auto text-gold">
              "обыденность — это холст, на котором мы рисуем истинную красоту
              своей жизни„
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 mx-auto max-w-4xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left panel with practices list */}
          <div
            id="practices"
            className="relative bg-charcoal p-8 min-h-[400px] animate-slideUp"
          >
            <img
              src="https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=1974&auto=format&fit=crop"
              alt="Абстрактный фон"
              className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
            />

            <div className="relative z-10">
              <h3 className="text-sm text-gray-400 uppercase mb-6 tracking-wider lowercase">
                практики внутреннего внимания
              </h3>

              <ul className="space-y-4 text-sm text-gray-300">
                <li className="pb-2 border-b border-gray-800">
                  написание утренних страниц
                </li>
                <li className="pb-2 border-b border-gray-800">
                  общение с людьми из разных сфер
                </li>
                <li className="pb-2 border-b border-gray-800">
                  обращение к роду — разговоры с бабушкой
                </li>
                <li className="pb-2 border-b border-gray-800">
                  посещение храмов и церквей одной
                </li>
                <li className="pb-2 border-b border-gray-800">
                  чайные церемонии в одиночестве
                </li>
                <li className="pb-2 border-b border-gray-800">
                  просмотр кино и описание впечатлений после
                </li>
                <li className="pb-2 border-b border-gray-800">
                  создание дизайн-работ для себя
                </li>
                <li className="pb-2 border-b border-gray-800">
                  проба различных несвойственных мне хобби
                </li>
              </ul>
            </div>
          </div>

          {/* Right panel with coffee cup */}
          <div className="relative bg-[#1A1A18] p-8 min-h-[400px] flex items-center justify-center animate-slideUp delay-200">
            <img
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1956&auto=format&fit=crop"
              alt="Чашка кофе"
              className="w-[300px] h-[300px] object-cover rounded-full sepia-image"
            />

            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center max-w-xs">
                <p className="quote-italic text-2xl mb-3">
                  что мне
                  <br />
                  помогает
                  <br />
                  лучше себя
                  <br />
                  понять
                </p>
                <p className="text-xs text-gold">*через 4 часа</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
