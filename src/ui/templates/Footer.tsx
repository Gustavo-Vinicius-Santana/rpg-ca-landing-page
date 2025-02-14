import { FaEnvelope, FaLinkedin } from "react-icons/fa";

type Footer = {
    linkEmail: string;
    linkLinkedin: string;
  };

export default function Footer({linkEmail, linkLinkedin}: Footer) {
    return (
        <footer className="bg-black/90 text-white py-8 mt-12 border-t border-white/50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          {/* Informações principais */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold">Entre em Contato</h2>
            <p className="text-sm text-gray-400">Fale comigo para mais informações sobre o projeto.</p>
          </div>
  
          {/* Links de Contato */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
            <a href={linkEmail} className="flex items-center space-x-2 hover:text-gray-400 transition">
              <FaEnvelope className="w-5 h-5" />
              <span>gus.tec.dev@gmail.com</span>
            </a>
            <a href={linkLinkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-gray-400 transition">
              <FaLinkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </footer>

    );
}