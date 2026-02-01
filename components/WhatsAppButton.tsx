import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  // Use a generic number for the demo
  const phoneNumber = "5511988463093"; 
  const message = "Olá! Vim pelo site da Ferragens Souza e gostaria de tirar uma dúvida.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:right-auto md:left-6 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all z-40 flex items-center gap-2 group animate-fade-in hover:scale-110"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="font-bold hidden md:inline max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap">
        Fale conosco
      </span>
    </a>
  );
};

export default WhatsAppButton;