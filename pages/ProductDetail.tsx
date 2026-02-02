import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../services/mockData';
import { useCart } from '../context/CartContext';
import { ShoppingCart, ArrowLeft, Minus, Plus, CheckCircle, AlertTriangle, CreditCard, Banknote, FileText } from 'lucide-react';
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
  };

  // Simulação de preço "De/Por" para parecer varejo
  const listPrice = product.price * 1.15; // Preço "original" 15% maior
  const parcelPrice = listPrice / 3;

  // Get related products (same category, excluding current)
  const relatedProducts = PRODUCTS
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      <button onClick={() => navigate(-1)} className="flex items-center text-gray-500 hover:text-brand-blue mb-6 text-sm font-medium">
        <ArrowLeft className="w-4 h-4 mr-1" /> Voltar
      </button>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
          {/* Image */}
          <div className="aspect-square bg-white rounded-lg overflow-hidden border border-gray-100 p-4 flex items-center justify-center relative">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-contain max-h-[400px]"
            />
            {product.featured && (
               <span className="absolute top-4 left-4 bg-brand-orange text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
                 OFERTA
               </span>
            )}
            {/* Marca Badge */}
            {product.brand && (
                <span className="absolute bottom-4 right-4 bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full border border-gray-200 uppercase tracking-wide">
                  {product.brand}
                </span>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <span className="text-xs text-brand-blue uppercase font-bold tracking-widest mb-2 border-b border-gray-100 pb-2 w-fit">
              {product.category}
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 leading-tight">{product.name}</h1>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="text-xs text-gray-400 font-mono">Cód: {product.id.toString().padStart(6, '0')}</div>
              <span className="text-gray-300">|</span>
              {product.available ? (
                <span className="flex items-center gap-1 text-green-600 text-xs font-bold bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                  <CheckCircle className="w-3 h-3" /> Disponível
                </span>
              ) : (
                <span className="flex items-center gap-1 text-red-600 text-xs font-bold bg-red-50 px-2 py-0.5 rounded-full border border-red-100">
                   <AlertTriangle className="w-3 h-3" /> Indisponível
                </span>
              )}
              {product.brand && (
                <>
                  <span className="text-gray-300">|</span>
                  <span className="text-xs text-slate-600 font-medium">Marca: {product.brand}</span>
                </>
              )}
            </div>

            {/* Price Box - KaBuM Style */}
            <div className="bg-gray-50 p-6 rounded-lg mb-6 border border-gray-100 relative overflow-hidden">
               {/* Decorative background accent */}
               <div className="absolute top-0 right-0 w-16 h-16 bg-brand-orange/5 rounded-bl-full"></div>

               <div className="flex items-center gap-2 mb-1">
                 <span className="text-gray-400 text-sm line-through decoration-red-400">R$ {listPrice.toFixed(2).replace('.', ',')}</span>
                 <span className="bg-brand-orange text-white text-[10px] font-bold px-1.5 py-0.5 rounded ml-1 animate-pulse">-15%</span>
               </div>

               <div className="flex items-baseline gap-1 mb-1">
                 <span className="text-sm font-bold text-brand-orange">R$</span>
                 <span className="text-5xl font-extrabold text-brand-orange tracking-tighter">
                   {product.price.toFixed(2).replace('.', ',')}
                 </span>
               </div>
               
               <p className="text-sm font-bold text-brand-blue flex items-center gap-1 mb-4">
                 <Banknote className="w-4 h-4" /> à vista no PIX
               </p>

               <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-600 text-sm flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-gray-400" />
                    <span className="font-bold text-slate-800">R$ {listPrice.toFixed(2).replace('.', ',')}</span>
                    <span className="text-xs">em até 3x de R$ {parcelPrice.toFixed(2).replace('.', ',')} sem juros</span>
                  </p>
               </div>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-gray-800 mb-2 text-sm uppercase tracking-wide">Descrição do Produto</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
            </div>

            {/* Actions */}
            <div className="mt-auto">
              {product.available ? (
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center justify-between border border-gray-300 rounded-lg w-full sm:w-32 px-3 py-2 bg-white">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="text-gray-500 hover:text-brand-orange p-1 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-bold text-lg text-slate-800">{quantity}</span>
                    <button 
                       onClick={() => setQuantity(quantity + 1)}
                       className="text-gray-500 hover:text-brand-orange p-1 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <button 
                    onClick={handleAddToCart}
                    className="flex-1 bg-brand-orange text-white py-3 px-6 rounded-lg font-bold hover:bg-red-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/20 active:scale-95 text-lg uppercase tracking-wide"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Comprar Agora
                  </button>
                </div>
              ) : (
                <button disabled className="w-full bg-gray-200 text-gray-400 py-4 rounded-lg font-bold cursor-not-allowed uppercase tracking-wide border border-gray-300">
                  Produto Indisponível
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Technical Specifications (New) */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 mb-12">
        <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
          <FileText className="w-5 h-5 text-brand-blue" />
          Ficha Técnica
        </h2>
        {product.specs ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <tbody className="divide-y divide-gray-100">
                {Object.entries(product.specs).map(([key, value], index) => (
                  <tr key={key} className={index % 2 === 0 ? "bg-gray-50/50" : "bg-white"}>
                    <td className="px-6 py-4 font-medium text-slate-700 w-1/3">{key}</td>
                    <td className="px-6 py-4 text-slate-600">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500 italic">Nenhuma especificação técnica disponível para este produto.</p>
        )}
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="border-t border-gray-200 pt-10">
          <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-brand-orange rounded-full"></span>
            Quem viu este produto, viu também
          </h2>
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