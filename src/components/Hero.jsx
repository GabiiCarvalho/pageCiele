import { asset } from '../config';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-azul-profundo overflow-hidden">
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            `url('${asset('imagens/fachada.png')}')`,
        }}
      />

      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-azul-profundo/60 via-azul-profundo/40 to-azul-profundo/90" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <span className="text-dourado text-sm tracking-[0.3em] uppercase font-semibold">
          Ciele Empreendimentos
        </span>

        <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6">
          Residencial <span className="text-dourado">Emanuele</span>
        </h1>

        <p className="text-azul-suave text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          O equilíbrio perfeito entre sofisticação e conforto.
          Apartamentos de 88m² e Duplex de 177m² projetados para sua família.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#tipologias"
            className="bg-dourado hover:bg-dourado-escuro text-azul-profundo font-bold px-8 py-4 rounded-lg transition-all duration-300"
          >
            Conheça as Tipologias
          </a>
          <a
            href="#sobre"
            className="border-2 border-white/30 hover:border-dourado text-white hover:text-dourado font-semibold px-8 py-4 rounded-lg transition-all duration-300"
          >
            Sobre o Empreendimento
          </a>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}