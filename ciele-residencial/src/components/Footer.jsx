export default function Footer() {
  return (
    <footer className="bg-azul-profundo py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-dourado font-bold text-xl mb-4">
              Ciele Empreendimentos
            </h3>
            <p className="text-azul-suave text-sm">
              Construindo sonhos com qualidade e confiança.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="text-azul-suave text-sm space-y-2">
              <li>WhatsApp: (47) 99647-6856</li>
              <li>Email: cieleempreendimentos@gmail.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Residencial Emanuele</h4>
            <ul className="text-azul-suave text-sm space-y-2">
              <li>Apartamentos de 88m²</li>
              <li>Duplex de 177m²</li>
              <li>Elevador</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-azul-suave/60 text-xs">
            © {new Date().getFullYear()} Ciele Empreendimentos. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}