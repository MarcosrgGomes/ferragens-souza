import React from 'react';
import { Product } from '../types';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { ShoppingCart, Heart, Package } from 'lucide-react';

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
    <div className="group bg-white rounded-lg border border-gray-100 hover:border-brand-blue/30 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full relative overflow-hidden text-sm">
      
      {/* Container de imagem / Placeholder */}
      <Link to={`/produto/${product.id}`} className="block relative h-40 md:h-48 overflow-hidden bg-gray-50">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-300 group-hover:bg-gray-200 transition-colors">
            <Package className="w-12 h-12" />
          </div>
        )}
        
        {/* Fallback oculto para erro de img (caso image não seja vazio mas falhe) */}
        <div className="hidden absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-300">
           <Package className="w-12 h-12" />
        </div>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
          {!product.available && (
             <span className="bg-slate-800 text-white px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded shadow-sm">Esgotado</span>
          )}
          {product.featured && product.available && (
             <span className="bg-brand-orange text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wider">Oferta</span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={handleToggleFavorite}
          className="absolute top-2 right-2 p-1.5 rounded-full bg-white/90 shadow-sm hover:bg-white transition-all z-20 group/heart active:scale-90"
          title={isLiked ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        >
          <Heart 
            className={`w-4 h-4 transition-all duration-300 ${
              isLiked 
                ? 'fill-brand-orange text-brand-orange scale-110' 
                : 'text-gray-400 group-hover/heart:text-brand-orange group-hover/heart:scale-110'
            }`} 
          />
        </button>
      </Link>
      
      {/* Conteúdo */}
      <div className="p-3 flex flex-col flex-1">
        <Link to={`/produto/${product.id}`} className="block group/text mb-1">
           <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block truncate">{product.category}</span>
           <h3 className="text-sm font-semibold text-slate-800 leading-tight line-clamp-2 min-h-[2.5em] group-hover/text:text-brand-blue transition-colors">
             {product.name}
           </h3>
        </Link>
        
        <div className="mt-auto pt-3">
          <Link to={`/produto/${product.id}`} className="block mb-3">
            <div className="flex flex-col">
              <span className="text-xs text-slate-400 line-through font-medium">R$ {(product.price * 1.2).toFixed(2).replace('.', ',')}</span>
              <div className="flex items-baseline gap-1">
                <span className="text-xs text-brand-orange font-bold self-start mt-1">R$</span>
                <span className="text-xl font-extrabold text-brand-orange leading-none tracking-tight">
                  {product.price.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-medium">
                à vista ou 3x de R$ {installmentValue}
              </span>
            </div>
          </Link>
          
          {product.available ? (
            <button 
              onClick={handleAddToCart}
              type="button"
              className="w-full bg-brand-blue text-white hover:bg-brand-darkBlue py-2 px-2 rounded-md text-xs font-bold transition-all flex items-center justify-center gap-2 active:scale-95 shadow-sm hover:shadow-md uppercase tracking-wide"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              Comprar
            </button>
          ) : (
            <button disabled type="button" className="w-full bg-gray-100 text-gray-400 py-2 px-2 rounded-md text-xs font-bold cursor-not-allowed border border-gray-200 uppercase tracking-wide">
              Indisponível
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;