import React from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, Package } from 'lucide-react';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="bg-blue-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-12 h-12 text-brand-blue" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Seu carrinho está vazio</h2>
        <p className="text-gray-500 mb-8">Navegue pelas categorias e adicione itens.</p>
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
        <ShoppingBag className="w-6 h-6" />
        Carrinho de Compras
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items List */}
        <div className="flex-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 bg-gray-50 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:grid grid-cols-12 gap-4">
              <div className="col-span-6">Produto</div>
              <div className="col-span-2 text-center">Qtd</div>
              <div className="col-span-2 text-right">Preço Un.</div>
              <div className="col-span-2 text-right">Total</div>
            </div>

            <div className="divide-y divide-gray-100">
              {cart.map(item => (
                <div key={item.id} className="p-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  {/* Product Info */}
                  <div className="col-span-1 md:col-span-6 flex items-center gap-4">
                    {item.image ? (
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded bg-gray-100" />
                    ) : (
                        <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center text-gray-300">
                            <Package className="w-8 h-8" />
                        </div>
                    )}
                    
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm md:text-base line-clamp-1">{item.name}</h3>
                      <p className="text-xs text-gray-500 mt-1 block md:hidden">Unitário: R$ {item.price.toFixed(2)}</p>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 text-xs flex items-center gap-1 mt-2 hover:underline"
                      >
                        <Trash2 className="w-3 h-3" /> Remover
                      </button>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="col-span-1 md:col-span-2 flex justify-center">
                     <div className="flex items-center border border-gray-300 rounded">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 px-2 hover:bg-gray-100 text-gray-600"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 w-8 text-center text-sm font-semibold">{item.quantity}</span>
                         <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 px-2 hover:bg-gray-100 text-gray-600"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                     </div>
                  </div>

                  {/* Price Unit (Desktop) */}
                  <div className="hidden md:block col-span-2 text-right text-gray-600 text-sm">
                    R$ {item.price.toFixed(2)}
                  </div>

                  {/* Total Line */}
                  <div className="col-span-1 md:col-span-2 flex justify-between md:block md:text-right">
                    <span className="md:hidden font-semibold text-gray-600">Subtotal:</span>
                    <span className="font-bold text-brand-blue">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Card */}
        <div className="w-full lg:w-80 h-fit">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Resumo do Pedido</h3>
            
            <div className="space-y-2 mb-6 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>R$ {cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Retirada</span>
                <span className="text-green-600 font-medium">Grátis</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mb-6">
              <div className="flex justify-between items-end">
                <span className="font-bold text-gray-800">Total</span>
                <span className="text-2xl font-bold text-brand-blue">R$ {cartTotal.toFixed(2)}</span>
              </div>
            </div>

            <button 
              onClick={() => navigate('/finalizar')}
              className="w-full bg-brand-orange text-white py-3 rounded-lg font-bold hover:bg-red-600 transition-colors flex items-center justify-center gap-2 mb-3"
            >
              Finalizar Pedido <ArrowRight className="w-4 h-4" />
            </button>
            
            <Link to="/produtos" className="block text-center text-sm text-gray-500 hover:text-brand-blue">
              Continuar comprando
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;