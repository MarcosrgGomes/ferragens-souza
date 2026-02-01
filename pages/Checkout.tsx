import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { Store, User, Phone, ClipboardCheck } from 'lucide-react';

const Checkout: React.FC = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    notes: ''
  });

  if (cart.length === 0) {
    navigate('/');
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to backend API
    console.log("Order Submitted:", { ...formData, cart, total: cartTotal });
    
    // Simulate API delay
    setTimeout(() => {
      clearCart();
      navigate('/sucesso');
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Finalizar Pedido</h1>
          <p className="text-gray-600">Preencha seus dados para reservar os produtos na loja.</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-blue-50 p-4 border-b border-blue-100 flex items-start gap-3">
            <Store className="w-6 h-6 text-brand-blue shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-brand-blue">Retirada na Loja</h3>
              <p className="text-sm text-blue-800">Rua das Flores, 123 - Jardim Primavera</p>
              <p className="text-xs text-blue-600 mt-1">Pagamento no balcão (Pix ou Dinheiro)</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  required
                  type="text"
                  placeholder="Seu nome"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Telefone / WhatsApp</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  required
                  type="tel"
                  placeholder="(11) 99999-9999"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Entraremos em contato para confirmar a separação.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Observações (Opcional)</label>
              <textarea
                rows={3}
                placeholder="Ex: Vou retirar amanhã de manhã..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                value={formData.notes}
                onChange={e => setFormData({...formData, notes: e.target.value})}
              ></textarea>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
              <span className="font-semibold text-gray-700">Total a Pagar</span>
              <span className="font-bold text-2xl text-brand-blue">R$ {cartTotal.toFixed(2)}</span>
            </div>

            <button 
              type="submit"
              className="w-full bg-green-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              <ClipboardCheck className="w-6 h-6" />
              Confirmar Reserva
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;