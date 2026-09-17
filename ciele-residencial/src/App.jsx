import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Tipologias from './components/Tipologias';
import Galeria from './components/Galeria';
import Caracteristicas from './components/Caracteristicas';
import Localizacao from './components/Localizacao';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Sobre />
      <Tipologias />
      <Galeria />
      <Caracteristicas />
      <Localizacao />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}