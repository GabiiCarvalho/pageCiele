import { useState } from 'react';

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  const telefone = '5511999999999'; // Substitua pelo número real
  const mensagem = encodeURIComponent(
    'Olá! Gostaria de saber mais sobre o Residencial Emanuele da Ciele Empreendimentos.'
  );
  const link = `https://wa.me/${telefone}?text=${mensagem}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold pl-4 pr-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
    >
      {/* Ícone do WhatsApp */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-7 h-7 fill-current flex-shrink-0"
        aria-hidden="true"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.315.158-.66.158-1.003 0-.243-.473-.387-.66-.473-.314-.158-1.962-.96-2.163-.96zM16.03 27.62c-2.13 0-4.22-.552-6.05-1.6l-.42-.24-4.51 1.18 1.22-4.4-.27-.44a11.55 11.55 0 0 1-1.77-6.18c0-6.39 5.2-11.6 11.6-11.6 3.1 0 6.01 1.21 8.2 3.4a11.52 11.52 0 0 1 3.4 8.2c0 6.4-5.2 11.6-11.6 11.6zm0-25.55C8.35 2.07 2.07 8.35 2.07 16.03c0 2.51.66 4.96 1.9 7.11L2 30l6.99-1.83a13.86 13.86 0 0 0 7.04 1.9h.01c7.68 0 13.96-6.28 13.96-13.97 0-3.73-1.45-7.24-4.09-9.88a13.86 13.86 0 0 0-9.88-4.09z" />
      </svg>

      {/* Texto que aparece no hover (desktop) */}
      {hovered && (
        <span className="hidden sm:inline text-sm whitespace-nowrap">
          Fale conosco
        </span>
      )}
    </a>
  );
}