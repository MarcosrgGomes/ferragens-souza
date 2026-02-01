import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-darkBlue text-gray-300 mt-auto pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 uppercase">Ferragens Souza</h3>
            <p className="text-sm leading-relaxed mb-4">
              Há 15 anos oferecendo os melhores materiais para sua construção e reforma no bairro. 
              Aqui você fala direto com o dono!
            </p>
            <div className="flex gap-2 text-sm font-semibold text-white">
              <Link to="/sobre" className="hover:text-brand-orange">Nossa História</Link>
              <span>|</span>
              <Link to="/contato" className="hover:text-brand-orange">Localização</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 uppercase">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-sm">Rua das Flores, 123 - Jardim Primavera<br/>São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-sm">(11) 99999-8888</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-orange shrink-0" />
                <span className="text-sm">Seg - Sex: 08h às 18h<br/>Sáb: 08h às 14h</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 uppercase">Categorias</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link to="/produtos?categoria=eletrica" className="hover:text-white hover:underline">Elétrica</Link>
              <Link to="/produtos?categoria=hidraulica" className="hover:text-white hover:underline">Hidráulica</Link>
              <Link to="/produtos?categoria=ferramentas" className="hover:text-white hover:underline">Ferramentas</Link>
              <Link to="/produtos?categoria=pintura" className="hover:text-white hover:underline">Pintura</Link>
              <Link to="/produtos?categoria=construcao" className="hover:text-white hover:underline">Construção</Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Ferragens Souza. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;