import { useState } from 'react';

export default function Galeria() {
  const [filtro, setFiltro] = useState('todas');
  const [fotoAberta, setFotoAberta] = useState(null);

  const fotos = [
    // Fachada / externas
    {
      id: 1,
      src: '/imagens/fachada.png',
      categoria: 'fachada',
      titulo: 'Fachada Principal',
    },
    {
      id: 2,
      src: '/imagens/noturno.png',
      categoria: 'fachada',
      titulo: 'Fachada ao Entardecer',
    },

    // Interiores / apartamento 88m²
    {
      id: 3,
      src: '/imagens/Ciele_Apartamento_PVT4_02.jpg',
      categoria: 'interiores',
      titulo: 'Living do Apartamento Tipo',
    },

    // Rooftop do duplex
    {
      id: 4,
      src: '/imagens/Ciele_Apartamento_Rooftop_03.jpg',
      categoria: 'rooftop',
      titulo: 'Rooftop Privativo',
    },
    {
      id: 5,
      src: '/imagens/Ciele_Apartamento_Rooftop_05-2.jpg',
      categoria: 'rooftop',
      titulo: 'Vista do Rooftop',
    },
  ];

  const filtros = [
    { key: 'todas', label: 'Todas' },
    { key: 'fachada', label: 'Fachada' },
    { key: 'interiores', label: 'Interiores' },
    { key: 'rooftop', label: 'Rooftop' },
  ];

  const fotosFiltradas =
    filtro === 'todas' ? fotos : fotos.filter((f) => f.categoria === filtro);

  const gerarFallback = (titulo) => {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
        <rect width="800" height="600" fill="#E0F2FE"/>
        <text x="400" y="300" font-family="sans-serif" font-size="24" fill="#0A2540" text-anchor="middle">
          ${titulo}
        </text>
      </svg>
    `;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  };

  return (
    <section id="galeria" className="py-20 px-6 bg-azul-suave/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-dourado text-sm tracking-[0.3em] uppercase font-semibold">
            Galeria
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-azul-profundo mt-4">
            Conheça o Residencial Emanuele
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Uma seleção de imagens do edifício e de seus espaços. Clique em
            qualquer foto para ampliar.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filtros.map((f) => (
            <button
              key={f.key}
              onClick={() => setFiltro(f.key)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                filtro === f.key
                  ? 'bg-azul-profundo text-white shadow-md'
                  : 'bg-white text-azul-profundo hover:bg-azul-suave/50'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {fotosFiltradas.map((foto) => (
            <button
              key={foto.id}
              onClick={() => setFotoAberta(foto)}
              className="relative group aspect-square overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all"
            >
              <img
                src={foto.src}
                alt={foto.titulo}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  e.target.src = gerarFallback(foto.titulo);
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-azul-profundo/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-sm font-semibold">
                  {foto.titulo}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {fotoAberta && (
        <div
          className="fixed inset-0 z-[60] bg-azul-profundo/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setFotoAberta(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setFotoAberta(null)}
              aria-label="Fechar"
              className="absolute top-3 right-3 z-10 bg-azul-profundo hover:bg-azul-medio text-white rounded-full w-10 h-10 flex items-center justify-center transition-all"
            >
              ✕
            </button>
            <img
              src={fotoAberta.src}
              alt={fotoAberta.titulo}
              className="w-full h-auto max-h-[80vh] object-contain bg-azul-suave/30"
              onError={(e) => {
                e.target.src = gerarFallback(fotoAberta.titulo);
              }}
            />
            <div className="p-6 border-t border-gray-100">
              <h3 className="text-xl font-bold text-azul-profundo">
                {fotoAberta.titulo}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}