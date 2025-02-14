import { FaAndroid, FaApple, FaLinux, FaWindows } from "react-icons/fa";
import { SiMacos } from "react-icons/si";

export default function Download() {
  const downloads = [
    { name: "Android", icon: <FaAndroid className="text-green-500" size={50} />, link: "https://mega.nz/file/2y5iFSaB#1AnNPlgLi_h41vy3mjcXARw2yqU-IsNuOpe5CwVppB8", linkEncur: "https://fir3.net/onb1hBT", description: "Baixe a versão para Android e jogue onde quiser.", avaible: true},
    { name: "iOS", icon: <FaApple className="text-gray-800" size={50} />, link: "#", linkEncur: "", description: "Compatível com dispositivos iOS para uma experiência fluida.", avaible: false},
    { name: "macOS", icon: <SiMacos className="text-gray-500" size={50} />, link: "#", linkEncur: "", description: "Versão otimizada para macOS, aproveite no seu MacBook ou iMac.", avaible: false},
    { name: "Linux", icon: <FaLinux className="text-black" size={50} />, link: "#", linkEncur: "", description: "Para os usuários de Linux, garantindo estabilidade e performance.", avaible: false},
    { name: "Windows", icon: <FaWindows className="text-blue-600" size={50} />, link: "#", linkEncur: "", description: "A versão para Windows proporciona a melhor experiência no PC.", avaible: false},
  ];

    return (
      <div className="mt-28 px-4">
        <section className="min-h-screen flex flex-col items-center p-4 bg-black/90 border border-white/50 rounded-2xl shadow-lg shadow-white/10">
          <h1 className="text-3xl font-bold mb-6">Download RPG CA</h1>
          <p className="text-white text-center text-base leading-relaxed mb-4">
            Baixe a verção mais recente da aplicação em diversas plataformas.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {downloads.map(({ name, icon, link, description, avaible, linkEncur }) => (
              <div key={name} className="p-10 rounded-2xl shadow-lg flex flex-col items-center bg-gray-900 shadow-lg">
                {icon}
                <h2 className="mt-4 text-xl font-semibold">{name}</h2>
                <p className="text-gray-400 text-sm text-center mt-2">{description}</p>

                {!avaible && <p className="text-red-500 text-sm mt-2">Em breve</p>}

                {avaible && (
                  <>
                    <a href={link} target="_blank">
                      <button className="bg-blue-600 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-105 mt-2">
                        Download Now
                      </button>
                    </a>

                    <a href={linkEncur} target="_blank">
                      <button className="bg-blue-600 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-105 mt-2">
                        Download com anuncio
                      </button>
                    </a>
                  </>


                  
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }