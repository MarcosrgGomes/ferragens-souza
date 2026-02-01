import React from 'react';
import { Hammer } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="text-center mb-10">
        <div className="inline-block bg-brand-orange p-3 rounded-xl mb-4">
           <Hammer className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Sobre a Ferragens Souza</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8 space-y-6 text-lg text-gray-700 leading-relaxed">
        <p>
          A <strong>Ferragens Souza</strong> nasceu em 2008 com um objetivo simples: atender as necessidades do bairro com preço justo e atendimento amigo.
        </p>
        <p>
          Fundada pelo Sr. Luciano, começamos como uma pequena garagem vendendo apenas o básico para reparos. Hoje, temos orgulho de ser a referência na região para quem está construindo, reformando ou apenas precisa daquela ferramenta certa para um conserto rápido.
        </p>
        
        <img 
          src="https://picsum.photos/id/122/800/400" 
          alt="Fachada da Loja" 
          className="w-full h-64 object-cover rounded-lg my-6 shadow-md"
        />

        <h3 className="text-xl font-bold text-brand-blue">Nossos Diferenciais</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Atendimento especializado: a gente entende do que vende.</li>
          <li>Variedade: mais de 2.000 itens em estoque.</li>
          <li>Preço baixo: negociamos direto com os fornecedores.</li>
          <li>Praticidade: compre pelo site e retire sem fila.</li>
        </ul>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
          <p className="italic text-gray-600 text-center">
            "Aqui não vendemos apenas parafusos e ferramentas, vendemos soluções para o lar da nossa vizinhança."
            <br/>
            <span className="font-bold text-brand-darkBlue block mt-2">- Luciano Souza, Fundador</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;