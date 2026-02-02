import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { Store, User, Phone, ClipboardCheck, CreditCard, Banknote, QrCode } from 'lucide-react';

const Checkout: React.FC = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('pix');
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
    console.log("Order Submitted:", { ...formData, paymentMethod, cart, total: cartTotal });
    
    // Simulate API delay
    setTimeout(() => {
      clearCart();
      navigate('/sucesso');
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Finalizar Pedido</h1>
          <p className="text-gray-600">Preencha seus dados para reservar os produtos na loja.</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-brand-blue p-6 text-white flex items-start gap-4">
            <div className="bg-white/10 p-3 rounded-full">
               <Store className="w-6 h-6 text-brand-yellow" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Retirada na Loja</h3>
              <p className="text-blue-100 text-sm mt-1">Rua das Flores, 123 - Jardim Primavera</p>
              <p className="text-xs text-blue-200 mt-2 bg-blue-900/50 inline-block px-2 py-1 rounded">Segunda a Sexta: 08h às 18h | Sábado: 08h às 14h</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-8">
            
            {/* Section 1: Personal Data */}
            <div className="space-y-4">
               <h3 className="font-bold text-gray-800 border-b pb-2 flex items-center gap-2">
                 <User className="w-5 h-5 text-brand-orange" />
                 Seus Dados
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                  <input
                    required
                    type="text"
                    placeholder="Seu nome"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Telefone / WhatsApp</label>
                  <input
                    required
                    type="tel"
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
               </div>
            </div>

            {/* Section 2: Payment Method */}
            <div className="space-y-4">
               <h3 className="font-bold text-gray-800 border-b pb-2 flex items-center gap-2">
                 <Banknote className="w-5 h-5 text-brand-orange" />
                 Pagamento (na retirada)
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                 <label className={`cursor-pointer border-2 rounded-xl p-4 flex flex-col items-center gap-2 transition-all hover:bg-gray-50 ${paymentMethod === 'pix' ? 'border-brand-orange bg-orange-50/50' : 'border-gray-200'}`}>
                    <input type="radio" name="payment" value="pix" className="hidden" checked={paymentMethod === 'pix'} onChange={() => setPaymentMethod('pix')} />
                    <QrCode className={`w-8 h-8 ${paymentMethod === 'pix' ? 'text-brand-orange' : 'text-gray-400'}`} />
                    <span className={`font-bold text-sm ${paymentMethod === 'pix' ? 'text-brand-orange' : 'text-gray-600'}`}>Pix</span>
                    <span className="text-[10px] text-green-600 font-bold bg-green-100 px-2 py-0.5 rounded-full">-5% OFF</span>
                 </label>
                 
                 <label className={`cursor-pointer border-2 rounded-xl p-4 flex flex-col items-center gap-2 transition-all hover:bg-gray-50 ${paymentMethod === 'card' ? 'border-brand-orange bg-orange-50/50' : 'border-gray-200'}`}>
                    <input type="radio" name="payment" value="card" className="hidden" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} />
                    <CreditCard className={`w-8 h-8 ${paymentMethod === 'card' ? 'text-brand-orange' : 'text-gray-400'}`} />
                    <span className={`font-bold text-sm ${paymentMethod === 'card' ? 'text-brand-orange' : 'text-gray-600'}`}>Cartão</span>
                    <span className="text-[10px] text-gray-500">Crédito/Débito</span>
                 </label>

                 <label className={`cursor-pointer border-2 rounded-xl p-4 flex flex-col items-center gap-2 transition-all hover:bg-gray-50 ${paymentMethod === 'cash' ? 'border-brand-orange bg-orange-50/50' : 'border-gray-200'}`}>
                    <input type="radio" name="payment" value="cash" className="hidden" checked={paymentMethod === 'cash'} onChange={() => setPaymentMethod('cash')} />
                    <Banknote className={`w-8 h-8 ${paymentMethod === 'cash' ? 'text-brand-orange' : 'text-gray-400'}`} />
                    <span className={`font-bold text-sm ${paymentMethod === 'cash' ? 'text-brand-orange' : 'text-gray-600'}`}>Dinheiro</span>
                    <span className="text-[10px] text-green-600 font-bold bg-green-100 px-2 py-0.5 rounded-full">-5% OFF</span>
                 </label>
               </div>
            </div>

            {/* Section 3: Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Observações (Opcional)</label>
              <textarea
                rows={2}
                placeholder="Ex: Vou retirar amanhã de manhã..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
                value={formData.notes}
                onChange={e => setFormData({...formData, notes: e.target.value})}
              ></textarea>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-gray-500 text-sm">Total a pagar na loja:</p>
                <span className="font-bold text-3xl text-brand-blue">R$ {cartTotal.toFixed(2)}</span>
              </div>
              <button 
                type="submit"
                className="w-full md:w-auto bg-green-600 text-white py-4 px-8 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform active:scale-95"
              >
                <ClipboardCheck className="w-6 h-6" />
                Confirmar Reserva
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;