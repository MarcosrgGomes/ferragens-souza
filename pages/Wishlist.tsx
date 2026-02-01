import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import ProductCard from '../components/ProductCard';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Wishlist: React.FC = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="bg-red-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
          <Heart className="w-12 h-12 text-brand-orange" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Sua lista de desejos está vazia</h2>
        <p className="text-gray-500 mb-8">Salve os produtos que você quer comprar futuramente.</p>
        <Link 
          to="/produtos" 
          className="bg-brand-blue text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-darkBlue transition-colors"
        >
          Ver Produtos
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="mb-8 border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Heart className="w-6 h-6 text-brand-orange fill-brand-orange" />
          Meus Favoritos
        </h1>
        <p className="text-gray-500 text-sm mt-1">{favorites.length} produtos salvos</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {favorites.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;