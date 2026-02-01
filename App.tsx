import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
import About from './pages/About';
import Contact from './pages/Contact';
import Wishlist from './pages/Wishlist';
import AiAssistant from './components/AiAssistant';
import WhatsAppButton from './components/WhatsAppButton';
import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContext';

const App: React.FC = () => {
  return (
    <CartProvider>
      <FavoritesProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
            <Header />
            
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/produtos" element={<ProductList />} />
                <Route path="/produto/:id" element={<ProductDetail />} />
                <Route path="/carrinho" element={<Cart />} />
                <Route path="/finalizar" element={<Checkout />} />
                <Route path="/sucesso" element={<Success />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/contato" element={<Contact />} />
                <Route path="/favoritos" element={<Wishlist />} />
              </Routes>
            </main>

            <WhatsAppButton />
            <AiAssistant />
            <Footer />
          </div>
        </Router>
      </FavoritesProvider>
    </CartProvider>
  );
};

export default App;