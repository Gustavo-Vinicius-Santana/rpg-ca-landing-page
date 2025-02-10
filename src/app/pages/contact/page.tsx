import Link from "next/link";

export default function Contact() {
    return (
      <div className="mt-28 h-screen px-4">
        {/* Seção de Contato */}
        <div className="flex flex-col items-center justify-center gap-12">
          <div className="bg-black/90 flex flex-col justify-center w-full max-w-[900px] border border-white/50 rounded-2xl p-6 shadow-lg shadow-white/10">
            <h1 className="text-white text-center font-semibold text-xl mb-2">CONTATO</h1>
            <p className="text-white text-center text-base leading-relaxed p-4">
              Entre em contato conosco através dos seguintes meios:
            </p>
            
            {/* Informações de Contato */}
            <div className="flex flex-col items-center gap-4 mt-4 text-white">
              <p>
                <strong>Email:</strong> <a href="mailto:gus.tec.dev@gmail.com" target="_blank" className="text-red-400 hover:underline">gus.tec.dev@gmail.com</a>
              </p>
              <p>
                <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/gustavo-vinicius-596005276/" target="_blank" className="text-blue-400 hover:underline">linkedin.com/in/gustavo-vinicius</a>
              </p>
              <p>
                <strong>WhatsApp:</strong> <a href="https://wa.me/5583988082293" target="_blank" className="text-green-400 hover:underline">+55 83 98808-2293</a>
              </p>
              <p>
                <strong>Github: <a href="https://github.com/gustavo-vinicius-santana" target="_blank" className="text-gray-400 hover:underline">https://github.com/gustavo-vinicius-santana</a></strong>
              </p>
            </div>
          </div>

          <div className="bg-black/90 flex flex-col justify-center w-full max-w-[900px] border border-white/50 rounded-2xl p-6 shadow-lg shadow-white/10">
            <h1 className="text-white text-center font-semibold text-xl mb-2">DESEJA COLABORAR?</h1>
            <p className="text-white text-center text-base leading-relaxed p-4">
              Desjeja colaborar com o projeto? Acesse a nossa pagina com as instruções para colaborar tanto para desenvolvedores quanto para usuarios.
            </p>

            <Link className="w-full flex items-center justify-center" href={"/pages/collaborate"} >
              <button className="w-1/4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                Colabore
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }