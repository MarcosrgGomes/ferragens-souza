import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { dataService } from '../services/dataService';
import { Product, Category } from '../types';
import ProductCarousel from '../components/ProductCarousel';
import HeroCarousel from '../components/HeroCarousel';
import { 
  Truck, CreditCard, ShieldCheck, Ticket, 
  Store, Building2, Smartphone, Briefcase, 
  ChevronRight, ArrowRight, Tag, Zap, Loader2, Package, Layers
} from 'lucide-react';

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [prodData, catData] = await Promise.all([
          dataService.getProducts(),
          dataService.getCategories()
        ]);
        setProducts(prodData);
        setCategories(catData);
      } catch (error) {
        console.error("Failed to load data", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // Logic for different product sections
  const bestOffers = products.filter(p => p.price < 100);
  const newReleases = products.filter(p => p.id % 2 === 0); 
  const trending = products.slice(0, 8); 

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 className="w-10 h-10 text-brand-orange animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-white pb-10">
      
      {/* 1. Hero Carousel */}
      <HeroCarousel />

      <div className="container mx-auto px-4">

        {/* 2. Mini Banners Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-6 mb-8">
          {[
            { title: "10% Cashback", sub: "em tudo", color: "bg-purple-600", btn: "CONFIRA" },
            { title: "Ofertas do Dia", sub: "Imbatíveis", color: "bg-brand-orange", btn: "VER" },
            { title: "Frete Grátis", sub: "consulte", color: "bg-yellow-500", btn: "APROVEITE" },
            { title: "Cupons", sub: "de desconto", color: "bg-red-500", btn: "PEGAR" },
            { title: "Outlet", sub: "até 50%", color: "bg-blue-600", btn: "VER TUDO" },
          ].map((item, idx) => (
             <Link key={idx} to="/produtos" className={`rounded-lg p-3 ${item.color} text-white flex flex-col items-start justify-between h-20 md:h-24 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group`}>
               <div className="relative z-10">
                 <h3 className="font-black text-sm md:text-base leading-tight uppercase italic">{item.title}</h3>
                 <p className="text-[10px] opacity-90 font-medium">{item.sub}</p>
               </div>
               <div className="mt-1 bg-white/20 px-2 py-0.5 rounded text-[9px] font-bold uppercase relative z-10 group-hover:bg-white group-hover:text-gray-900 transition-colors">
                 {item.btn}
               </div>
               <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-white/10 rounded-full"></div>
             </Link>
          ))}
        </div>

        {/* 3. Navegue por categorias */}
        <section className="mb-10">
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-xl font-bold text-slate-800">Navegue por categorias</h2>
          </div>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3">
            {categories.map(cat => (
              <Link 
                key={cat.id} 
                to={`/produtos?categoria=${cat.id}`}
                className="group flex flex-col gap-1.5"
              >
                <div className="overflow-hidden rounded-lg aspect-square bg-gray-50 relative border border-gray-100 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                  {cat.image ? (
                    <img 
                      src={cat.image} 
                      alt={cat.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <Layers className="w-8 h-8 text-gray-300 group-hover:text-brand-blue transition-colors" />
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
                </div>
                <span className="text-xs font-medium text-slate-700 group-hover:text-brand-blue text-center leading-tight truncate px-1">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* 4. Melhores ofertas */}
        <div className="bg-gray-50 -mx-4 px-4 py-8 mb-8">
           <div className="container mx-auto">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-slate-800 mb-1">Melhores ofertas para sua casa</h2>
                <p className="text-slate-500 text-xs">Preços baixos em itens selecionados</p>
              </div>
              <ProductCarousel 
                title="" 
                products={bestOffers} 
                seeAllLink="/produtos"
              />
           </div>
        </div>

        {/* 5. Anúncios */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div className="bg-gray-100 rounded-lg p-6 flex flex-col justify-center items-start relative overflow-hidden h-48 md:h-56">
             <div className="absolute right-0 bottom-0 opacity-10">
               <Smartphone className="w-48 h-48 text-slate-800" />
             </div>
             <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-1 z-10">
               Clube do APP <br/>Ferragens Souza
             </h3>
             <p className="text-slate-600 text-sm mb-4 max-w-xs z-10">
               Ofertas exclusivas só no aplicativo.
             </p>
             <button className="bg-brand-orange text-white px-4 py-2 text-sm rounded-md font-bold hover:bg-red-600 transition-colors z-10 shadow-lg">
               Baixe o app
             </button>
          </div>

          <div className="bg-brand-yellow/20 rounded-lg p-6 flex flex-col justify-center items-start relative overflow-hidden h-48 md:h-56">
             <div className="absolute right-0 top-0 opacity-10">
               <Tag className="w-48 h-48 text-brand-orange" />
             </div>
             <div className="bg-brand-orange text-white text-[10px] font-bold px-2 py-0.5 rounded mb-3 z-10">
               BAIXOU PREÇO
             </div>
             <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-1 z-10">
               Móveis campeões <br/> de avaliação
             </h3>
             <p className="text-slate-600 text-sm mb-4 max-w-xs z-10">
               Veja o que nossos clientes amam.
             </p>
             <button className="bg-brand-orange text-white px-4 py-2 text-sm rounded-md font-bold hover:bg-red-600 transition-colors z-10 shadow-lg">
               Confira a lista
             </button>
          </div>
        </section>

        {/* 6. Lançamentos */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
             <h2 className="text-xl font-bold text-slate-800">Lançamentos imperdíveis</h2>
             <span className="bg-brand-blue text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase">Novo</span>
          </div>
          <ProductCarousel 
            title="" 
            products={newReleases} 
            seeAllLink="/produtos"
          />
        </section>

        {/* 7. Exclusividade */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Exclusividade para você</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center text-center hover:bg-gray-200 transition-colors cursor-pointer group">
               <Building2 className="w-8 h-8 text-slate-600 mb-2 group-hover:scale-110 transition-transform" />
               <h3 className="font-bold text-slate-800 uppercase tracking-wide text-xs">Para sua empresa</h3>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center text-center hover:bg-gray-200 transition-colors cursor-pointer group">
               <Tag className="w-8 h-8 text-slate-600 mb-2 group-hover:scale-110 transition-transform" />
               <h3 className="font-bold text-slate-800 uppercase tracking-wide text-xs">Venda Conosco</h3>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center text-center hover:bg-gray-200 transition-colors cursor-pointer group">
               <Store className="w-8 h-8 text-slate-600 mb-2 group-hover:scale-110 transition-transform" />
               <h3 className="font-bold text-slate-800 uppercase tracking-wide text-xs">Lojas Físicas</h3>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center text-center hover:bg-gray-200 transition-colors cursor-pointer group">
               <Briefcase className="w-8 h-8 text-slate-600 mb-2 group-hover:scale-110 transition-transform" />
               <h3 className="font-bold text-slate-800 uppercase tracking-wide text-xs">Serviços</h3>
            </div>
          </div>
        </section>

        {/* 8. Trending */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            Todo mundo está de olho
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          </h2>
          <ProductCarousel 
            title="" 
            products={trending} 
            seeAllLink="/produtos"
          />
        </section>

        {/* 9. Marca Própria */}
        <div className="bg-slate-900 text-white rounded-lg p-6 md:p-10 mb-8 text-center relative overflow-hidden">
          <h2 className="text-2xl md:text-4xl font-black mb-2 tracking-tighter">FERRAGENS<span className="text-gray-400 font-light">ORIGINALS</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-6 text-sm">Qualidade garantida e preço justo.</p>
          <button className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold text-sm hover:bg-brand-yellow transition-colors">
            Conheça a linha
          </button>
        </div>

      </div>
    </div>
  );
};

export default HomePage;