import Image from "next/image";

export default function Collaborate() {
    return (
      <div className="mt-24 min-h-screen px-4 sm:px-8">
        <section className="mt-12 bg-black/90 flex flex-col items-center border border-white/50 rounded-2xl p-6 shadow-lg shadow-white/10 gap-6 w-full max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-center">Colabore financeiramente</h1>
          <div className="w- sm:w-3/4 bg-gray-900 shadow-lg p-6 rounded-2xl border border-white/50 text-center">
            <div className="flex flex-col justify-center w-full mt-6 md:mt-0 ">
                <h2 className="text-xl font-semibold mb-4 text-center">Qualquer valor é bem-vindo!</h2>
                <div className="md:w1/2">
                  <p className="text-gray-300 mb-4 text-center md:text-left">
                    O projeto RPG Combat Assistant é totalmente gratuito e feito de jogador para jogador. Sua ajuda é muito útil para que haja atualizações constantes e para que o projeto continue sendo desenvolvido para melhorar a experiência dos jogadores.
                  </p>

                </div>

            </div>

            <div className="w-full flex flex-col md:flex-row md:justify-around px-4">
              <div className="flex flex-col items-center">
                <h2 className="text-xl font-semibold mb-4 text-center">Pix</h2>
                <Image src={"/pix.png"} alt={"pix qr code"} width={200} height={200} />
                <p className="text-gray-300 mt-4">83 98808-2293</p>
              </div>

              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-xl font-semibold mb-4 text-center">Download com anúncios</h2>
                <p>
                  Caso você não possa ajudar financiando o projeto diretamente, baixe a versão mais recente clicando no botão abaixo através do encurtador de URL. Assim, você nos ajuda sem precisar pagar nada!
                </p>

                <div className="flex justify-center mt-4">
                  <a href="https://fir3.net/onb1hBT" target="_blank">
                    <button className="bg-blue-600 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-105">
                      Download com anuncio
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 bg-black/90 flex flex-col items-center border border-white/50 rounded-2xl p-6 shadow-lg shadow-white/10 gap-6 w-full max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">Colabore com o Projeto</h1>
      
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            {/* Seção para Desenvolvedores */}
            <section className="bg-gray-900 shadow-lg p-6 rounded-2xl border border-white/50">
              <h2 className="text-xl font-semibold mb-4">Para Desenvolvedores</h2>
              <p className="text-gray-300 mb-4">
                Se você é um desenvolvedor e quer contribuir com código, siga os passos abaixo:
              </p>
              <ul className="text-gray-300 list-disc list-inside space-y-2">
                <li>Fork o repositório no GitHub.</li>
                <li>Crie uma nova branch para suas alterações.</li>
                <li>Faça commits claros e detalhados.</li>
                <li>Envie um pull request para revisão.</li>
              </ul>

              <div className="flex justify-center mt-4">
                <a href="https://github.com/Gustavo-Vinicius-Santana/rpg-dm-combat-assistant" target="_blank">
                  <button className="bg-blue-600 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-105">
                    Repositorio no github
                  </button>
                </a>
              </div>
            </section>
            
            {/* Seção para Usuários */}
            <section className="bg-gray-900 shadow-lg p-6 rounded-2xl border border-white/50">
              <h2 className="text-xl font-semibold mb-4">Para Usuários</h2>
              <p className="text-gray-300 mb-4">
                Se você é um usuário e quer ajudar, veja como pode colaborar:
              </p>
              <ul className="text-gray-300 list-disc list-inside space-y-2">
                <li>Reporte bugs e sugestões através do nosso formulário.</li>
                <li>Divulgue o projeto para mais pessoas.</li>
              </ul>

              <div className="flex justify-center mt-4">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfVi4l0yL9XOea5P8Z9MLQzOHDXArde8thq1A-IIJQBbm799Q/viewform?usp=sharing" target="_blank">
                  <button className="bg-blue-600 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-105">
                    Formulário
                  </button>
                </a>
              </div>

            </section>
          </div>
        </div>
      </div>
    );
  }