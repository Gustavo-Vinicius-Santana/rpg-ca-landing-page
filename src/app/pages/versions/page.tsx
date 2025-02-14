import Link from "next/link";

export default function Versions() {
  const versions = [
    {
      name: "0.1.2-alpha.2",
      description: "Correção do bug crítico que impedia a renderização ao atualizar de uma versão anterior.",
      features: [
        "Correção do bug crítico de atualização."
      ],
      downloadLink: "https://mega.nz/file/2y5iFSaB#1AnNPlgLi_h41vy3mjcXARw2yqU-IsNuOpe5CwVppB8"
    },
    {
      name: "0.1.1-alpha.2",
      description: "Correção de bugs de interface relacionado a condições",
      features: [
        "Correção do bug de quebra de linha na descrição da condição no modal de edição de personagens.",
        "Bug crítico: erro no banco de dados impede renderização ao atualizar de uma versão anterior."
      ],
      downloadLink: "https://mega.nz/file/X3ITiCZA#e3CXMpGYOVqUPU1Si4xElubvSLcJm6oCJPeb-iAfiR4"
    },
    {
      name: "0.1.0-alpha.2",
      description: "Adicionado o gerenciamento de condições, permitindo um controle mais detalhado.",
      features: [
        "Gerenciamento de condições.",
        "Bug crítico: erro no banco de dados impede carregamento ao atualizar a aplicação."
      ],
      downloadLink: ""
    },
    {
      name: "0.1.0-alpha.1",
      description: "Primeira versão lançada, estabelecendo a base do sistema.",
      features: [
        "Primeira versão lançada da aplicação."
      ],
      downloadLink: "https://mega.nz/file/T6QSDKiL#MI_fyAfZRLkRMO2pHg_Rf74OSjYO1W25ZqC9l88pzJ0"
    }
  ];

  return (
    <div className="flex flex-col justify-around mt-28 px-4 md:px-10">
      <div className="w-full flex flex-wrap justify-center gap-6 p-4">
        <div className="bg-black/90 w-full sm:w-1/2 lg:w-1/3 border border-white/50 rounded-2xl p-6 shadow-lg shadow-white/10">
          <h2 className="text-white text-center font-semibold text-lg mb-2">SOBRE AS VERSÕES</h2>

          <p className="text-white text-center text-base leading-relaxed p-4">
            As versões alpha tem como objetivo estabelecer as principais funcionalidades da aplicação e a sua interface inicial.
          </p>
        </div>

        <div className="bg-black/90 w-full sm:w-1/2 lg:w-1/3 border border-white/50 rounded-2xl p-6 shadow-lg shadow-white/10">
          <h2 className="text-white text-center font-semibold text-lg mb-2">FUTURAS VERSÕES</h2>

          <p className="text-white text-center text-base leading-relaxed p-4">
            Para saber mais sobre as principais funcionalidades das proximas versões e como esta o ritmo de desenvolvimento acesso o nosso devlog
          </p>

          <Link className="flex justify-center" href={"/pages/devlog"}>
            <button className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors ">
              Devlog
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-black/90 w-full border border-white/50 rounded-2xl p-6 shadow-lg shadow-white/10 mt-12">
        <h1 className="text-3xl font-bold mb-6 text-center">VERSÕES</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {versions.map((version, index) => (
            <div
              key={index}
              className="w-200 h-auto p-6 bg-gray-900 text-white rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl transition-shadow flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-center">{version.name}</h2>
                <p className="text-sm text-gray-300 mb-4">{version.description}</p>
                <h3 className="text-lg font-semibold mb-2">Novidades:</h3>
                <ul className="list-disc list-inside text-sm text-gray-300 mb-4">
                  {version.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Renderização condicional do botão de download ou mensagem de indisponível */}
              {version.downloadLink ? (
                <a href={version.downloadLink} target="_blank">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                    Download
                  </button>
                </a>
              ) : (
                <p className="text-center text-gray-400 font-semibold">Download não disponível</p>
              )}

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}