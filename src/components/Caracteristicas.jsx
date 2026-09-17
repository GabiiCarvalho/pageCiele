const caracteristicas = [
  {
    titulo: 'Elevador',
    desc: 'Mais comodidade e acessibilidade para todos os moradores.',
  },
  {
    titulo: 'Alto Padrão',
    desc: 'Acabamentos selecionados e design moderno.',
  },
  {
    titulo: 'Plantas Funcionais',
    desc: 'Espaços otimizados para o dia a dia da família.',
  },
  {
    titulo: 'Localização',
    desc: 'Próximo a escolas, comércios e serviços essenciais.',
  },
  {
    titulo: 'Segurança',
    desc: 'Projeto pensado para o bem-estar dos moradores.',
  },
  {
    titulo: 'Sustentabilidade',
    desc: 'Materiais e soluções que respeitam o meio ambiente.',
  },
];

export default function Caracteristicas() {
  return (
    <section className="py-20 px-6 bg-azul-profundo">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-dourado text-sm tracking-[0.3em] uppercase font-semibold">
            Características
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
            Tudo que você precisa
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caracteristicas.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-dourado/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-dourado text-lg font-bold">{i + 1}</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{item.titulo}</h3>
              <p className="text-azul-suave text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}