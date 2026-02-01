import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, MapPin, Clock } from 'lucide-react';

const Success: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20 text-center max-w-lg">
      <div className="mb-6 inline-flex p-4 rounded-full bg-green-100">
        <CheckCircle className="w-16 h-16 text-green-600" />
      </div>
      
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Pedido Realizado!</h1>
      <p className="text-lg text-gray-600 mb-8">
        Obrigado! Recebemos sua solicitação de reserva. 
        <br/>
        Já estamos separando seus itens.
      </p>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-left mb-8">
        <h3 className="font-bold text-gray-800 border-b pb-2 mb-4">Próximos passos:</h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
             <div className="bg-blue-100 p-2 rounded-full text-brand-blue">
               <Clock className="w-5 h-5" />
             </div>
             <div>
               <p className="font-semibold text-gray-800">Aguarde a confirmação</p>
               <p className="text-sm text-gray-500">Vamos conferir o estoque e enviar uma mensagem no seu WhatsApp.</p>
             </div>
          </li>
          <li className="flex items-start gap-3">
             <div className="bg-blue-100 p-2 rounded-full text-brand-blue">
               <MapPin className="w-5 h-5" />
             </div>
             <div>
               <p className="font-semibold text-gray-800">Retire na loja</p>
               <p className="text-sm text-gray-500">Passe no balcão, confira os produtos e faça o pagamento.</p>
             </div>
          </li>
        </ul>
      </div>

      <Link 
        to="/" 
        className="inline-block w-full bg-brand-blue text-white py-3 rounded-lg font-bold hover:bg-brand-darkBlue transition-colors"
      >
        Voltar para o Início
      </Link>
    </div>
  );
};

export default Success;