import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, Hammer, Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';

const Header: React.FC = () => {
  const { cartCount } = useCart();
  const { favoritesCount } = useFavorites();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/produtos?search=${encodeURIComponent(searchTerm)}`);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-brand-blue text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
            <div className="bg-brand-orange p-1.5 rounded-md">
              <Hammer className="w-6 h-6 text-white" />
            </div>
            <div className="leading-tight">
              <h1 className="font-bold text-xl uppercase tracking-wide">Ferragens Souza</h1>
              <p className="text-xs text-gray-300 font-light hidden sm:block">Sua obra começa aqui</p>
            </div>
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:block flex-1 max-w-lg mx-6">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="O que você precisa hoje?"
                className="w-full pl-4 pr-10 py-2 rounded-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-orange border-none shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-brand-blue hover:scale-110 transition-transform">
                <Search className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Favorites Icon */}
            <Link to="/favoritos" className="relative p-2 hover:bg-brand-darkBlue rounded-full transition-colors hidden sm:block">
              <Heart className="w-6 h-6" />
              {favoritesCount > 0 && (
                <span className="absolute top-0 right-0 bg-brand-orange text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {favoritesCount}
                </span>
              )}
            </Link>

            {/* Cart Icon */}
            <Link to="/carrinho" className="relative p-2 hover:bg-brand-darkBlue rounded-full transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-brand-orange text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search & Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-brand-darkBlue animate-fade-in">
            <form onSubmit={handleSearch} className="mt-4 relative px-1">
              <input
                type="text"
                placeholder="Buscar produto..."
                className="w-full pl-4 pr-10 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 shadow-sm focus:ring-2 focus:ring-brand-orange focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-blue">
                <Search className="w-5 h-5" />
              </button>
            </form>

            <nav className="mt-6 flex flex-col gap-2">
              <Link 
                to="/" 
                className="py-3 px-4 hover:bg-brand-darkBlue rounded text-lg font-medium border-b border-brand-darkBlue/50"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                to="/produtos" 
                className="py-3 px-4 hover:bg-brand-darkBlue rounded text-lg font-medium border-b border-brand-darkBlue/50"
                onClick={() => setIsMenuOpen(false)}
              >
                Todos os Produtos
              </Link>
              <Link 
                to="/favoritos" 
                className="py-3 px-4 hover:bg-brand-darkBlue rounded text-lg font-medium border-b border-brand-darkBlue/50 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart className="w-5 h-5" /> Meus Favoritos
              </Link>
              <Link 
                to="/sobre" 
                className="py-3 px-4 hover:bg-brand-darkBlue rounded text-lg font-medium border-b border-brand-darkBlue/50"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre a Loja
              </Link>
              <Link 
                to="/contato" 
                className="py-3 px-4 hover:bg-brand-darkBlue rounded text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;