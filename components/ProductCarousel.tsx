import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductCarouselProps {
  title: string;
  icon?: React.ReactNode;
  products: Product[];
  seeAllLink?: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ title, icon, products, seeAllLink }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Adjust scroll amount
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="mb-8 relative group/carousel">
      {title && (
        <div className="flex justify-between items-center mb-4 px-1">
          <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            {icon}
            {title}
          </h2>
          {seeAllLink && (
             <a href={`#${seeAllLink}`} className="text-brand-blue font-semibold text-xs flex items-center hover:underline">
              Ver tudo <ChevronRight className="w-3 h-3" />
            </a>
          )}
        </div>
      )}

      <div className="relative">
        {/* Left Arrow */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-3 z-10 bg-white text-gray-800 p-1.5 rounded-full shadow-lg border border-gray-100 hover:bg-gray-50 hover:text-brand-orange transition-all opacity-0 group-hover/carousel:opacity-100 disabled:opacity-0 hidden md:flex"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        >
          {products.map(product => (
            <div key={product.id} className="min-w-[140px] w-[140px] md:min-w-[170px] md:w-[170px] flex-shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-3 z-10 bg-white text-gray-800 p-1.5 rounded-full shadow-lg border border-gray-100 hover:bg-gray-50 hover:text-brand-orange transition-all opacity-0 group-hover/carousel:opacity-100 hidden md:flex"
          aria-label="Próximo"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default ProductCarousel;