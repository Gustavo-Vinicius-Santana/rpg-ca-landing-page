export default function Home() {
  return (
    <div className="mt-28">
      <div className=" flex items-center justify-center w-full justify-around">
        <div className="bg-black/90 w-1/3 border border-white/50 rounded-2xl p-6 shadow-lg shadow-white/10">
          <h1 className="text-white text-center font-semibold text-lg mb-2">SOBRE</h1>
          <p className="text-white text-center text-base leading-relaxed p-4">
            Bem-vindo ao <strong>RPG DM Combat Assistant</strong>! Este projeto tem como objetivo fornecer 
            ferramentas para ajudar mestres de RPG a gerenciar o combate de forma mais eficiente, 
            organizando informações dos inimigos, jogadores e eventos do combate de maneira interativa e simples.
          </p>
        </div>

        <div className= "bg-black/90 w-[900px] border border-white/50 rounded-2xl p-6 shadow-lg shadow-white/10">
          <h1 className="text-white text-center font-semibold text-lg mb-2">DOWNLOAD</h1>
          <p className="text-white text-center text-base leading-relaxed p-4">
            Baixe já a versão mais recente para android e melhore sua experiencias nos combates de RPG
          </p>

          <div className="flex justify-center mt-4">
            <a href="https://mega.nz/file/2y5iFSaB#1AnNPlgLi_h41vy3mjcXARw2yqU-IsNuOpe5CwVppB8" target="_blank">
              <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-105">
                Donwload now
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="bg-black/90 flex flex-col justify-center mt-12 w-[1400px] border border-white/50 rounded-2xl p-6 shadow-lg shadow-white/10">
          <h1 className="text-white text-center font-semibold text-xl mb-2">FUNCIONALIDADES</h1>

          <div className="flex justify-start mt-4">
            <div className="w-1/3 bg-gray-900 text-white p-6 rounded-lg shadow-lg border border-gray-700">
              <h2 className="text-xl font-bold mb-4 text-center uppercase tracking-wide text-gray-200">
                GERENCIE SEUS JOGADORES
              </h2>
              <p className="text-gray-300 text-center mb-4">
                Gerencie todos os seus jogadores em um só lugar!
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✔</span> Crie, edite e exclua jogadores.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✔</span> Gerencie as condições de cada jogador.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✔</span> Gerencie os pontos de vida e armadura durante o combate.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <div className="w-1/3 bg-gray-900 text-white p-6 rounded-lg shadow-lg border border-gray-700">
                <h2 className="text-xl font-bold mb-4 text-center uppercase tracking-wide text-gray-200">
                  GERENCIE OS INIMIGOS
                </h2>
                <p className="text-gray-300 text-center mb-4">
                  Gerencie os inimigos que seus jogadores sirão enfrentar durante o combate!
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✔</span> Crie, edite e exclua inimigos.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✔</span> Gerencie as condições de cada inimigo.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✔</span> Gerencie os pontos de vida e armadura durante o combate.
                  </li>
                </ul>
              </div>
          </div>

          <div className="flex justify-center justify-between mt-4">
            <div className="w-1/3 bg-gray-900 text-white p-6 rounded-lg shadow-lg border border-gray-700">
                <h2 className="text-xl font-bold mb-4 text-center uppercase tracking-wide text-gray-200">
                  GERENCIE OS COMBATES
                </h2>
                <p className="text-gray-300 text-center mb-4">
                  Controle os combates de maneira facil e intuitiva!
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✔</span> Crie, edite e exclua combates.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✔</span> Definita a iniciativa de cada participante.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✔</span> Gerencie os turnos de combate.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✔</span> Adicione e remova participantes.
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
