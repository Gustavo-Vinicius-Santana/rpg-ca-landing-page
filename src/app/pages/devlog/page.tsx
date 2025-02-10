export default function DevLog() {
  const devLogs = [
    {
      version: "0.1.2-alpha.2",
      date: "31/01/2025",

      isFutureVersion: false,

      haveFeatures: false,
      features: [],

      haveFixBugs: true,
      fixBugs: [
        "Corrigido bug crítico no banco de dados que impedia a renderização ao atualizar a aplicação",
      ],

      haveImprovements: false,
      improvements: [
        
      ],

      isActualVersion: true,
      nextSteps: [
        "melhorias na ui geral da aplicação",
        "Melhorias na ui/ux dos inputs",
        "Melhorias na ui/ux dos botões",
      ],

      haveRemotion: false,
      remotion: [],
    },
    {
      version: "0.1.1-alpha.2",
      date: "31/01/2025",

      isFutureVersion: false,

      haveFeatures: false,
      features: [],

      haveFixBugs: true,
      fixBugs: [
        "Corrigida quebra de linha na descrição das condições",
      ],

      haveImprovements: false,
      improvements: [],

      isActualVersion: false,
      nextSteps: [],

      haveRemotion: false,
      remotion: [],
    },
    {
      version: "0.1.0-alpha.2",
      date: "31/01/2025",

      isFutureVersion: false,

      haveFeatures: true,
      features: [
        "sistema de gerenciamento de condições",
      ],

      haveFixBugs: false,
      fixBugs: [],

      haveImprovements: true,
      improvements: [
        "Melhorando a relação entre personagens e condições nos inimigos"
        
      ],

      isActualVersion: false,
      nextSteps: [],

      haveRemotion: false,
      remotion: [],
    },
    {
      version: "0.1.0-alpha.1",
      date: "12/01/2025",

      isFutureVersion: false,

      haveFeatures: true,
      features: [
        "gerenciamento de combate",
        "gerenciamento de personagens",
        "gerenciamento de inimigos",
      ],

      haveFixBugs: false,
      fixBugs: [],

      haveImprovements: false,
      improvements: [],

      isActualVersion: false,
      nextSteps: [],

      haveRemotion: false,
      remotion: [],
    }
  ];

  return (
    <div className="mt-28 px-4 flex flex-col items-center">

    <div className="flex flex-wrap justify-center gap-6 mt-6 mb-12 px-4">
      <div className="bg-black/90 w-full sm:w-5/6 md:w-1/2 lg:w-1/3 border border-white/50 rounded-2xl p-6 shadow-lg shadow-white/10">
        <h2 className="text-white text-center font-semibold text-lg mb-2">SOBRE O DEVLOG</h2>

        <p className="text-white text-center text-base leading-relaxed p-4">
          O DevLog é um espaço dedicado para acompanhar o desenvolvimento do projeto, 
          registrando novas funcionalidades, melhorias e correções em cada versão.
        </p>
      </div>

      <div className="bg-black/90 w-full sm:w-5/6 md:w-1/2 lg:w-1/3 border border-white/50 rounded-2xl p-6 shadow-lg shadow-white/10">
        <h2 className="text-white text-center font-semibold text-lg mb-2">ATUALIZAÇÕES</h2>

        <p className="text-white text-center text-base leading-relaxed p-4">
          As atualizações ocorrem à medida que a aplicação é desenvolvida. As funcionalidades previstas para a próxima versão 
          são sempre colocadas na seção de próximos passos.
        </p>
      </div>
    </div>

      <div className="bg-black/90 w-full md:max-w-[900px] border border-white/50 rounded-2xl p-6 shadow-lg shadow-white/10">
        {/* Título */}
        <h1 className="text-white font-semibold text-2xl mb-4 text-center">Dev Log</h1>

        <div className="flex flex-col items-center mt-8">
          {/* Histórico de Versões */}
          {devLogs.map((log, index) => (
            <div key={index} className="bg-gray-800 w-full max-w-[900px] border border-white/50 rounded-2xl p-6 shadow-lg shadow-white/10 mb-6">
              <h2 className="text-white text-lg font-semibold">[{log.version}] - {log.date} {log.isActualVersion && "- Versão Atual"}</h2>
              
                {log.haveFeatures && (
                  <>
                    <h3 className="text-blue-400 text-md font-semibold mt-4">🚀 Novidades</h3>
                    <ul className="text-gray-300 list-disc list-inside">
                      {log.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </>
                )}

                {log.haveFixBugs && (
                  <>
                    <h3 className="text-red-400 text-md font-semibold mt-4">🚨 Correções</h3>
                    <ul className="text-gray-300 list-disc list-inside">
                      {log.fixBugs.map((bug, index) => (
                        <li key={index}>{bug}</li>
                      ))}
                    </ul>
                  </>
                )}

                {log.haveImprovements && (
                  <>
                    <h3 className="text-green-400 text-md font-semibold mt-4">🚀 Melhorias</h3>
                    <ul className="text-gray-300 list-disc list-inside">
                      {log.improvements.map((improvement, index) => (
                        <li key={index}>{improvement}</li>
                      ))}
                    </ul>
                  </>
                )}

                {log.isActualVersion && (
                  <>
                    <h3 className="text-yellow-400 text-md font-semibold mt-4">📌 Próximos Passos</h3>
                    <ul className="text-gray-300 list-disc list-inside">
                      {log.nextSteps.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ul>
                  </>
                )}

                {log.haveRemotion && (
                  <>
                    <h3 className="text-yellow-400 text-md font-semibold mt-4">❌ Remoções</h3>
                    <ul className="text-gray-300 list-disc list-inside">
                      {log.remotion.map((remotion, index) => (
                        <li key={index}>{remotion}</li>
                      ))}
                    </ul>
                  </>
                )}
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}