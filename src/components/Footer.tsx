import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="bg-black py-10 px-6 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-cormorant text-gold mb-4">
            повседневность
          </h3>
          <p className="text-base text-gray-300">
            проект исследующий внутренний мир через призму повседневных практик,
            направленных на самопознание и творческое развитие.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-cormorant text-gray-300 mb-4">
            контакты
          </h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <a
                href="https://www.youtube.com/@azaluk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-gray-300 hover:text-gold transition-colors flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.499 6.203C23.217 5.102 22.294 4.25 21.2 4.008C19.307 3.5 12 3.5 12 3.5C12 3.5 4.69297 3.5 2.79997 4.008C1.70597 4.25 0.782971 5.102 0.500971 6.203C-0.000358582 8.082 -0.000358582 12 -0.000358582 12C-0.000358582 12 -0.000358582 15.918 0.500971 17.797C0.782971 18.898 1.70597 19.75 2.79997 19.992C4.69297 20.5 12 20.5 12 20.5C12 20.5 19.307 20.5 21.2 19.992C22.294 19.75 23.217 18.898 23.499 17.797C24.0003 15.918 24.0003 12 24.0003 12C24.0003 12 24.0003 8.082 23.499 6.203Z"
                    fill="currentColor"
                  />
                  <path
                    d="M9.77583 15.5008L15.8138 12.0008L9.77583 8.50082V15.5008Z"
                    fill="#000"
                  />
                </svg>
                youtube-канал @azaluk
              </a>
            </div>

            <div className="flex items-center">
              <a
                href="https://t.me/azalukk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-gray-300 hover:text-gold transition-colors flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z"
                    fill="currentColor"
                  />
                  <path
                    d="M5.89658 11.9214L17.6008 7.24177C18.0585 7.07617 18.4523 7.34507 18.3057 8.04577L18.3066 8.04487L16.2991 17.1938C16.1784 17.7587 15.8523 17.892 15.3875 17.6395L12.2914 15.3591L10.8056 16.7784C10.6734 16.9106 10.5619 17.022 10.3066 17.022L10.4796 13.8843L16.0458 8.88037C16.2457 8.70617 16.0026 8.60737 15.7408 8.78067L8.99168 12.8868L5.9653 11.9552C5.41538 11.7804 5.40448 11.4145 5.89658 11.9214Z"
                    fill="#000"
                  />
                </svg>
                telegram-канал @azalukk
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-800 text-center">
        <p className="text-sm text-gray-500">
          © 2025 повседневность. все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
