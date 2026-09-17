import { useState } from 'react';
import { asset } from '../config';

export default function Tipologias() {
  const [imagemAmpliada, setImagemAmpliada] = useState(null);
  const [abaAtiva, setAbaAtiva] = useState({
    padrao: 'planta',
    duplex: 'planta',
  });
  const [fotoAtiva, setFotoAtiva] = useState({ padrao: 0, duplex: 0 });

  const tipologias = [
    {
      id: 'padrao',
      nome: 'Apartamento Tipo',
      subtitulo: 'Tipologia 88m²',
      area: '88m²',
      quartos: '2 Suítes',
      vagas: '1 Vaga',
      sacada: 'Sacada Gourmet integrada ao living',
      andares: 'Disponível nos andares 1 a 4',
      descricao:
        'Planta inteligente com amplo living integrado, duas suítes confortáveis, lavabo social e sacada gourmet. Ideal para quem busca sofisticação com funcionalidade no dia a dia.',
      badge: null,
      destaque: false,
      galerias: {
        planta: [asset('imagens/plantas/apto.png')],
        sacada: [asset('imagens/plantas/Sacada_Integrada.png')],
        interiores: [asset('imagens/Ciele_Apartamento_PVT4_02.jpg')],
      },
    },
    {
      id: 'duplex',
      nome: 'Cobertura Duplex Emanuele',
      subtitulo: 'Tipologia 177m² com Rooftop Privativo',
      area: '177m²',
      quartos: '3 Suítes',
      vagas: '2 Vagas',
      sacada: 'Sacada ampla + Rooftop privativo na laje',
      andares: 'Exclusividade do 4º andar + Rooftop no 5º pavimento',
      descricao:
        'A expressão máxima do morar bem. Duplex exclusivo no último pavimento, com três suítes, sacada de vista privilegiada e rooftop privativo na laje superior — um espaço reservado para momentos inesquecíveis sob o céu da cidade.',
      badge: 'ÚNICA UNIDADE — 4º ANDAR',
      destaque: true,
      galerias: {
        planta: [asset('imagens/plantas/duplex.jpeg')],
        sacada: [asset('imagens/plantas/rooftop_duplex.jpeg')],
        interiores: [
          asset('imagens/Ciele_Apartamento_Rooftop_03.jpg'),
          asset('imagens/Ciele_Apartamento_Rooftop_05-2.jpg'),
        ],
      },
    },
  ];

  const linkWhatsApp = (nome) =>
    `https://wa.me/5547996476856?text=${encodeURIComponent(
      `Olá! Gostaria de saber mais sobre a ${nome} do Residencial Emanuele.`
    )}`;

  const gerarFallback = (tipo, aba) => {
    const titulos = {
      planta: 'Planta Baixa',
      sacada: tipo.destaque ? 'Rooftop' : 'Sacada Gourmet',
      interiores: 'Interiores',
    };
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
        <rect width="800" height="600" fill="#E0F2FE"/>
        <text x="400" y="280" font-family="sans-serif" font-size="26" fill="#0A2540" text-anchor="middle">
          ${titulos[aba] || 'Imagem'}
        </text>
        <text x="400" y="320" font-family="sans-serif" font-size="22" fill="#1E4E79" text-anchor="middle">
          ${tipo.nome} — ${tipo.area}
        </text>
      </svg>
    `;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  };

  const ImagemModal = ({ dados, onClose }) => {
    if (!dados) return null;
    return (
      <div
        className="fixed inset-0 z-[60] bg-azul-profundo/95 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div
          className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute top-3 right-3 z-10 bg-azul-profundo hover:bg-azul-medio text-white rounded-full w-10 h-10 flex items-center justify-center transition-all"
          >
            ✕
          </button>
          <img
            src={dados.src}
            alt={dados.alt}
            className="w-full h-auto max-h-[80vh] object-contain bg-azul-suave/30"
            onError={(e) => {
              e.target.src = gerarFallback(dados.tipo, dados.aba);
            }}
          />
          <div className="p-6 border-t border-gray-100">
            <h3 className="text-xl font-bold text-azul-profundo">
              {dados.tipo.nome} — {dados.tipo.area}
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              {dados.tipo.quartos} · {dados.tipo.vagas} · {dados.tipo.sacada}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const abasDisponiveis = (tipo) => {
    const abas = [{ key: 'planta', label: 'Planta' }];
    if (tipo.galerias.sacada?.length > 0) {
      abas.push({
        key: 'sacada',
        label: tipo.destaque ? 'Rooftop' : 'Sacada',
      });
    }
    if (tipo.galerias.interiores?.length > 0) {
      abas.push({ key: 'interiores', label: 'Interiores' });
    }
    return abas;
  };

  return (
    <section id="tipologias" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-dourado text-sm tracking-[0.3em] uppercase font-semibold">
            Tipologias
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-azul-profundo mt-4">
            Escolha o espaço ideal
          </h2>
          <p className="text-gray-500 mt-4 max-w-3xl mx-auto leading-relaxed">
            Edifício de 4 andares com 2 apartamentos por pavimento, elevador e
            acabamento de alto padrão. Do conforto das residências de 88m² à
            exclusividade da Cobertura Duplex de 177m² com rooftop privativo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {tipologias.map((tipo) => {
            const aba = abaAtiva[tipo.id];
            const abas = abasDisponiveis(tipo);
            const listaImagens = tipo.galerias[aba] || [];
            const indice = Math.min(
              fotoAtiva[tipo.id] || 0,
              Math.max(0, listaImagens.length - 1)
            );
            const imagemAtual = listaImagens[indice];

            const trocarAba = (key) => {
              setAbaAtiva({ ...abaAtiva, [tipo.id]: key });
              setFotoAtiva({ ...fotoAtiva, [tipo.id]: 0 });
            };
            const trocarFoto = (i) =>
              setFotoAtiva({ ...fotoAtiva, [tipo.id]: i });

            return (
              <div
                key={tipo.id}
                className={`relative rounded-2xl border-2 overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col ${
                  tipo.destaque
                    ? 'border-dourado bg-azul-profundo'
                    : 'border-azul-claro/30 bg-white'
                }`}
              >
                {tipo.badge && (
                  <span className="absolute top-4 right-4 z-20 bg-dourado text-azul-profundo text-[10px] md:text-xs font-bold px-3 py-1 rounded-full tracking-wider">
                    {tipo.badge}
                  </span>
                )}

                <div
                  className={`flex border-b min-h-[48px] ${
                    tipo.destaque ? 'border-white/10' : 'border-gray-100'
                  }`}
                >
                  {abas.map((a) => {
                    const ativa = aba === a.key;
                    return (
                      <button
                        key={a.key}
                        onClick={() => trocarAba(a.key)}
                        className={`flex-1 py-3 px-2 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap ${
                          ativa
                            ? tipo.destaque
                              ? 'text-dourado border-b-2 border-dourado'
                              : 'text-azul-profundo border-b-2 border-azul-profundo'
                            : tipo.destaque
                            ? 'text-azul-suave/60 hover:text-azul-suave'
                            : 'text-gray-400 hover:text-gray-600'
                        }`}
                      >
                        {a.label}
                      </button>
                    );
                  })}
                </div>

                <div className="relative aspect-[4/3] bg-azul-suave/40 group overflow-hidden">
                  <img
                    src={imagemAtual || gerarFallback(tipo, aba)}
                    alt={`${aba} ${tipo.nome}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-zoom-in"
                    onClick={() =>
                      setImagemAmpliada({
                        src: imagemAtual || gerarFallback(tipo, aba),
                        alt: `${aba} ${tipo.nome}`,
                        tipo,
                        aba,
                      })
                    }
                    onError={(e) => {
                      e.target.src = gerarFallback(tipo, aba);
                    }}
                  />

                  <span className="absolute top-4 left-4 bg-azul-profundo/90 text-white text-xs font-semibold px-3 py-1 rounded-full max-w-[70%] truncate pointer-events-none">
                    {tipo.andares}
                  </span>

                  {listaImagens.length > 1 && (
                    <span className="absolute bottom-4 right-4 bg-azul-profundo/90 text-white text-xs font-semibold px-3 py-1 rounded-full pointer-events-none">
                      {indice + 1} / {listaImagens.length}
                    </span>
                  )}

                  <div className="absolute inset-0 bg-azul-profundo/0 group-hover:bg-azul-profundo/30 transition-all duration-300 flex items-center justify-center pointer-events-none">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-azul-profundo text-sm font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                      Ampliar
                    </span>
                  </div>
                </div>

                {listaImagens.length > 1 && (
                  <div
                    className={`flex gap-2 px-4 py-3 overflow-x-auto border-b ${
                      tipo.destaque
                        ? 'border-white/10 bg-white/5'
                        : 'border-gray-100 bg-gray-50'
                    }`}
                  >
                    {listaImagens.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => trocarFoto(i)}
                        className={`relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                          i === indice
                            ? 'border-dourado scale-105'
                            : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                        aria-label={`Ver foto ${i + 1}`}
                      >
                        <img
                          src={img}
                          alt={`Miniatura ${i + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = gerarFallback(tipo, aba);
                          }}
                        />
                      </button>
                    ))}
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3
                        className={`text-2xl font-bold ${
                          tipo.destaque ? 'text-dourado' : 'text-azul-profundo'
                        }`}
                      >
                        {tipo.nome}
                      </h3>
                      <p
                        className={`text-xs uppercase tracking-wider mt-1 ${
                          tipo.destaque
                            ? 'text-azul-suave/70'
                            : 'text-gray-400'
                        }`}
                      >
                        {tipo.subtitulo}
                      </p>
                    </div>
                    <div
                      className={`text-4xl font-bold whitespace-nowrap ${
                        tipo.destaque ? 'text-white' : 'text-azul-medio'
                      }`}
                    >
                      {tipo.area}
                    </div>
                  </div>

                  <p
                    className={`text-sm leading-relaxed mt-4 mb-6 ${
                      tipo.destaque ? 'text-azul-suave/90' : 'text-gray-600'
                    }`}
                  >
                    {tipo.descricao}
                  </p>

                  <ul
                    className={`space-y-3 mb-8 text-sm ${
                      tipo.destaque ? 'text-azul-suave' : 'text-gray-600'
                    }`}
                  >
                    {[
                      tipo.quartos,
                      tipo.vagas,
                      tipo.sacada,
                      tipo.andares,
                      'Elevador no edifício',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-5 h-5 mt-0.5 bg-dourado/20 rounded-full flex items-center justify-center text-dourado text-xs flex-shrink-0">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <a
                      href={linkWhatsApp(tipo.nome)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block text-center font-bold py-3 rounded-lg transition-all ${
                        tipo.destaque
                          ? 'bg-dourado hover:bg-dourado-escuro text-azul-profundo'
                          : 'bg-azul-profundo hover:bg-azul-medio text-white'
                      }`}
                    >
                      Solicitar Informações
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { valor: '4', label: 'Pavimentos' },
            { valor: '2', label: 'Apartamentos por andar' },
            { valor: 'Elevador', label: 'Acessibilidade completa' },
            { valor: '1 Cobertura', label: 'Exclusiva no 4º andar' },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-azul-suave/30 rounded-xl p-6 text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-azul-profundo">
                {item.valor}
              </div>
              <div className="text-gray-500 text-sm mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <ImagemModal
        dados={imagemAmpliada}
        onClose={() => setImagemAmpliada(null)}
      />
    </section>
  );
}