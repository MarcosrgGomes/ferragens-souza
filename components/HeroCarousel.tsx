import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SLIDES = [
  {
    id: 1,
    bgClass: 'bg-gradient-to-r from-orange-600 to-orange-500',
    title: 'Operação Casa Reformada',
    subtitle: 'Comece o ano tirando seus planos do papel.',
    buttonText: 'Faça já sua reforma',
    link: '/produtos?categoria=construcao'
  },
  {
    id: 2,
    bgClass: 'bg-gradient-to-r from-blue-900 to-blue-700',
    title: 'Festival de Ferramentas',
    subtitle: 'Kits profissionais com até 40% OFF.',
    buttonText: 'Ver Ofertas',
    link: '/produtos?categoria=ferramentas'
  },
  {
    id: 3,
    bgClass: 'bg-gradient-to-r from-yellow-500 to-yellow-400',
    title: 'Iluminação & Elétrica',
    subtitle: 'Renove a energia da sua casa com segurança.',
    buttonText: 'Comprar Agora',
    link: '/produtos?categoria=eletrica'
  }
];

const HeroCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(curr => (curr === 0 ? SLIDES.length - 1 : curr - 1));
  const next = () => setCurrent(curr => (curr === SLIDES.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[280px] md:h-[400px] overflow-hidden group bg-gray-800">
      {/* Slides Container */}
      <div 
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {SLIDES.map((slide) => (
          <div key={slide.id} className="min-w-full h-full relative">
            {/* Background Color Gradient */}
            <div className={`absolute inset-0 ${slide.bgClass}`}></div>
            
            {/* Pattern Overlay (Optional CSS pattern for texture without image) */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2">
                <div className="text-white z-10 animate-fade-in-up">
                  <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tight mb-2 md:mb-4 drop-shadow-md">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-2xl mb-6 md:mb-8 font-light text-gray-100">
                    {slide.subtitle}
                  </p>
                  <Link 
                    to={slide.link}
                    className="inline-block bg-white text-brand-darkBlue px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-lg hover:scale-105 transition-transform shadow-lg uppercase"
                  >
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button 
        onClick={prev} 
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button 
        onClick={next} 
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
              current === idx ? 'bg-white w-6 md:w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;