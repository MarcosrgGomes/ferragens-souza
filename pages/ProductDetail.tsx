import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../services/mockData';
import { useCart } from '../context/CartContext';
import { ShoppingCart, ArrowLeft, Minus, Plus, CheckCircle, AlertTriangle } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = PRODUCTS.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Produto não encontrado</h2>
        <button onClick={() => navigate('/produtos')} className="text-brand-blue hover:underline">
          Voltar para a loja
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    // Visual feedback could be added here
  };

  // Get related products (same category, excluding current)
  const relatedProducts = PRODUCTS
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      <button onClick={() => navigate(-1)} className="flex items-center text-gray-500 hover:text-brand-blue mb-6">
        <ArrowLeft className="w-4 h-4 mr-1" /> Voltar
      </button>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
          {/* Image */}
          <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <span className="text-sm text-gray-500 uppercase font-semibold tracking-wider mb-2">{product.category}</span>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-2 mb-6">
              {product.available ? (
                <span className="flex items-center gap-1 text-green-600 text-sm font-medium bg-green-50 px-3 py-1 rounded-full">
                  <CheckCircle className="w-4 h-4" /> Estoque disponível
                </span>
              ) : (
                <span className="flex items-center gap-1 text-red-600 text-sm font-medium bg-red-50 px-3 py-1 rounded-full">
                   <AlertTriangle className="w-4 h-4" /> Indisponível
                </span>
              )}
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6 border border-gray-100">
               <p className="text-gray-500 text-sm mb-1">Preço unitário</p>
               <div className="text-4xl font-bold text-brand-blue">
                 R$ {product.price.toFixed(2).replace('.', ',')}
               </div>
               <p className="text-sm text-gray-500 mt-2">Pagamento na retirada (Pix ou Dinheiro)</p>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-gray-800 mb-2">Descrição</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Actions */}
            <div className="mt-auto">
              {product.available ? (
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center justify-between border border-gray-300 rounded-lg w-full sm:w-32 px-3 py-2">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="text-gray-500 hover:text-brand-orange p-1"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-bold text-lg">{quantity}</span>
                    <button 
                       onClick={() => setQuantity(quantity + 1)}
                       className="text-gray-500 hover:text-brand-orange p-1"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <button 
                    onClick={handleAddToCart}
                    className="flex-1 bg-brand-orange text-white py-3 px-6 rounded-lg font-bold hover:bg-red-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/20"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Adicionar ao Carrinho
                  </button>
                </div>
              ) : (
                <button disabled className="w-full bg-gray-200 text-gray-500 py-3 rounded-lg font-bold cursor-not-allowed">
                  Produto Indisponível
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Você também pode precisar</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;