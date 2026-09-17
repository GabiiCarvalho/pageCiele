export default function Localizacao() {
  const pontos = [
    { label: 'Escolas', valor: 'A 5 min' },
    { label: 'Comércio', valor: 'A 3 min' },
    { label: 'Transporte', valor: 'A 2 min' },
  ];

  const linkWhatsApp = `https://wa.me/5511999999999?text=${encodeURIComponent(
    'Olá! Gostaria de agendar uma visita ao Residencial Emanuele.'
  )}`;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-dourado text-sm tracking-[0.3em] uppercase font-semibold">
            Localização
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-azul-profundo mt-4">
            Onde tudo acontece
          </h2>
        </div>

        <div className="bg-azul-suave/30 rounded-2xl p-8 md:p-12 text-center">
          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
            O Residencial Emanuele está localizado em uma região estratégica, com
            fácil acesso a vias principais, transporte público, comércio e serviços.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {pontos.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-2xl font-bold text-dourado mb-1">
                  {item.valor}
                </div>
                <div className="text-gray-500 text-sm">{item.label}</div>
              </div>
            ))}
          </div>

          <a
            href={linkWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-azul-profundo hover:bg-azul-medio text-white font-bold px-8 py-4 rounded-lg transition-all"
          >
            Agendar Visita
          </a>

          {/* ===== STATUS DA OBRA ===== */}
          <div className="mt-10 max-w-2xl mx-auto bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-dourado/20">
            <div className="flex items-center justify-between mb-4">
              <div className="text-left">
                <span className="text-dourado text-xs tracking-[0.25em] uppercase font-semibold">
                  Status da Obra
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-azul-profundo mt-1">
                  Em construção
                </h3>
              </div>
              <div className="text-right">
                <div className="text-4xl md:text-5xl font-bold text-dourado leading-none">
                  45%
                </div>
                <div className="text-xs text-gray-400 mt-1">concluído</div>
              </div>
            </div>

            {/* Barra de progresso */}
            <div className="w-full h-3 bg-azul-suave rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-azul-medio to-dourado rounded-full transition-all duration-1000 ease-out"
                style={{ width: '45%' }}
              />
            </div>

            <p className="text-gray-500 text-sm mt-4">
              A obra do Residencial Emanuele está com{' '}
              <strong className="text-azul-profundo">45% concluída</strong>.
              Seguimos dentro do cronograma, com previsão de entrega no prazo
              planejado para o seu novo lar.
            </p>

            {/* Mini indicadores */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">
                  Entrega
                </div>
                <div className="text-sm font-semibold text-azul-profundo mt-1">
                  Em breve
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">
                  Etapa atual
                </div>
                <div className="text-sm font-semibold text-azul-profundo mt-1">
                  Estrutura
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">
                  Visitas
                </div>
                <div className="text-sm font-semibold text-azul-profundo mt-1">
                  Agendadas
                </div>
              </div>
            </div>
          </div>
          {/* ===== FIM DO STATUS DA OBRA ===== */}
        </div>
      </div>
    </section>
  );
}