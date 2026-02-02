import React from 'react';
import { Product } from '../types';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { ShoppingCart, Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product);
  };

  const isLiked = isFavorite(product.id);
  const installmentValue = (product.price / 3).toFixed(2).replace('.', ',');

  return (
    <div className="group bg-white rounded-md border border-gray-100 hover:border-brand-blue/30 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full relative overflow-hidden text-sm">
      
      {/* Link wrapping the image area - Height reduced */}
      <Link to={`/produto/${product.id}`} className="block relative h-28 md:h-36 overflow-hidden bg-gray-50 p-2">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain mix-blend-normal group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Badges */}
        <div className="absolute top-0 left-0 flex flex-col gap-1 z-10 p-1">
          {!product.available && (
             <span className="bg-slate-800 text-white px-1 py-0.5 text-[8px] font-extrabold uppercase tracking-wider rounded-sm shadow-sm">Esgotado</span>
          )}
          {product.featured && product.available && (
             <span className="bg-brand-orange text-white text-[8px] font-extrabold px-1 py-0.5 rounded-sm shadow-sm uppercase tracking-wider">Oferta</span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={handleToggleFavorite}
          className="absolute top-1 right-1 p-1 rounded-full bg-white/90 shadow border border-gray-100 hover:bg-gray-50 transition-all z-20 group/heart active:scale-90"
          title={isLiked ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        >
          <Heart 
            className={`w-3 h-3 transition-all duration-300 ${
              isLiked 
                ? 'fill-brand-orange text-brand-orange scale-110' 
                : 'text-gray-300 group-hover/heart:text-brand-orange group-hover/heart:scale-110'
            }`} 
          />
        </button>
      </Link>
      
      {/* Content Padding Reduced */}
      <div className="p-2 flex flex-col flex-1">
        <Link to={`/produto/${product.id}`} className="block group/text mb-1">
           <span className="text-[8px] font-bold text-brand-blue uppercase tracking-widest mb-0.5 block opacity-70 truncate">{product.category}</span>
           <h3 className="text-xs font-semibold text-slate-800 leading-tight line-clamp-2 min-h-[2.5em] group-hover/text:text-brand-blue transition-colors">
             {product.name}
           </h3>
        </Link>
        
        <div className="mt-auto pt-2 border-t border-dashed border-gray-100">
          <Link to={`/produto/${product.id}`} className="block mb-2">
            <div className="flex flex-col">
              <span className="text-[9px] text-slate-400 line-through font-medium">R$ {(product.price * 1.2).toFixed(2).replace('.', ',')}</span>
              <div className="flex items-baseline gap-1">
                <span className="text-[9px] text-brand-orange font-bold self-start mt-0.5">R$</span>
                <span className="text-base font-extrabold text-brand-orange leading-none tracking-tight">
                  {product.price.toFixed(2).replace('.', ',')}
                </span>
                <span className="text-[8px] text-slate-500 font-bold uppercase ml-0.5">à vista</span>
              </div>
              <span className="text-[8px] text-slate-500 font-medium leading-tight">
                3x <strong>R$ {installmentValue}</strong>
              </span>
            </div>
          </Link>
          
          {product.available ? (
            <button 
              onClick={handleAddToCart}
              type="button"
              className="w-full bg-brand-blue text-white hover:bg-brand-darkBlue py-1.5 px-1 rounded-md text-[10px] md:text-xs font-bold transition-all flex items-center justify-center gap-1 active:scale-95 shadow-sm hover:shadow-md"
            >
              <ShoppingCart className="w-3 h-3" />
              Comprar
            </button>
          ) : (
            <button disabled type="button" className="w-full bg-gray-100 text-gray-400 py-1.5 px-1 rounded-md text-[10px] md:text-xs font-bold cursor-not-allowed border border-gray-200">
              Indisponível
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;