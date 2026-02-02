import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">Fale Conosco</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h3 className="text-xl font-bold text-brand-blue mb-6">Informações de Contato</h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 p-3 rounded-full text-brand-orange">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Endereço</h4>
                <p className="text-gray-600">Rua das Flores, 123<br/>Jardim Primavera, São Paulo - SP</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-50 p-3 rounded-full text-brand-orange">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Telefone / WhatsApp</h4>
                <p className="text-gray-600">(11) 99999-8888</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-50 p-3 rounded-full text-brand-orange">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">E-mail</h4>
                <p className="text-gray-600">contato@ferragenssouza.com.br</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
               <div className="bg-blue-50 p-3 rounded-full text-brand-orange">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Horário de Funcionamento</h4>
                <p className="text-gray-600">Segunda a Sexta: 08:00 - 18:00</p>
                <p className="text-gray-600">Sábado: 08:00 - 14:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mock Map Placeholder */}
        <div className="bg-gray-100 rounded-xl overflow-hidden h-80 md:h-auto relative flex items-center justify-center border border-gray-200">
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
                <MapPin className="w-8 h-8 text-brand-orange mb-2 animate-bounce" />
                <span className="font-bold text-brand-darkBlue">Estamos Aqui!</span>
                <span className="text-xs text-gray-400 mt-1">(Mapa Indisponível)</span>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;