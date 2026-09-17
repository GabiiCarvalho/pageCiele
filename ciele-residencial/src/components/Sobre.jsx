export default function Sobre() {
  const diferenciais = [
    'Elevador para maior comodidade',
    'Acabamento de alto padrão',
    'Plantas otimizadas e funcionais',
    'Localização estratégica',
    'Ciele Empreendimentos: tradição e qualidade',
  ];

  return (
    <section id="sobre" className="py-20 px-6 bg-azul-suave/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-dourado text-sm tracking-[0.3em] uppercase font-semibold">
            Sobre
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-azul-profundo mt-4">
            Um novo conceito de morar
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              O <strong className="text-azul-profundo">Residencial Emanuele</strong> foi
              projetado para oferecer o máximo de conforto e funcionalidade. Com
              acabamento de alto padrão e atenção aos detalhes, cada ambiente foi
              pensado para proporcionar bem-estar e praticidade.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Localizado em uma região privilegiada, o empreendimento conta com{' '}
              <strong className="text-azul-profundo">elevador</strong> e
              infraestrutura completa, unindo a tranquilidade de um lar com a
              conveniência da vida urbana.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-azul-claro/20">
            <h3 className="text-2xl font-bold text-azul-profundo mb-6">
              Diferenciais do Empreendimento
            </h3>
            <ul className="space-y-4">
              {diferenciais.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-dourado rounded-full flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}