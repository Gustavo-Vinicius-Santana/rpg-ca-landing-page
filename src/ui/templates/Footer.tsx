
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
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v.01L12 12l8-5.99V6l-8 5.99L4 6z"/></svg>
                <span>gus.tec.dev@gmail.com</span>
                </a>
                <a href={linkLinkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-gray-400 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4 3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H4zm4 14H5V9h3v8zm-1.5-9.5c-.83 0-1.5-.67-1.5-1.5S5.67 5 6.5 5 8 5.67 8 6.5 7.33 7.5 6.5 7.5zM19 17h-3v-4c0-1.1-.9-2-2-2s-2 .9-2 2v4h-3V9h3v1.6c.76-.88 1.86-1.6 3.15-1.6 2.21 0 4.01 1.79 4.01 4v4z"/></svg>
                <span>LinkedIn</span>
                </a>
            </div>
            </div>
        </footer>

    );
}