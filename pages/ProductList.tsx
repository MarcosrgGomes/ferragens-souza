import React, { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../services/mockData';
import ProductCard from '../components/ProductCard';
import { Filter, X, ChevronRight, SlidersHorizontal, ArrowUpDown, Check, Search, ChevronDown, ChevronUp } from 'lucide-react';

type SortOption = 'relevance' | 'price_asc' | 'price_desc' | 'name_asc';

const ProductList: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('categoria');
  const searchFilter = searchParams.get('search');

  // Local Filter States
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  
  // States for Price Inputs (Local only)
  const [localMinPrice, setLocalMinPrice] = useState('');
  const [localMaxPrice, setLocalMaxPrice] = useState('');

  // Actual applied price filter
  const [appliedPriceRange, setAppliedPriceRange] = useState<{min: number, max: number}>({ min: 0, max: Infinity });
  
  const [sortOption, setSortOption] = useState<SortOption>('relevance');

  // Sync inputs when filters are cleared externally or mostly for initial load logic
  useEffect(() => {
     // Reset local inputs if applied range is reset (optional behavior, keeping simple)
  }, [appliedPriceRange]);

  // Handler to Apply Price Filter
  const applyPriceFilter = () => {
    const min = localMinPrice ? parseFloat(localMinPrice) : 0;
    const max = localMaxPrice ? parseFloat(localMaxPrice) : Infinity;
    setAppliedPriceRange({ min, max });
    setIsMobileFiltersOpen(false);
  };

  // Filter Logic
  const filteredProducts = useMemo(() => {
    let result = PRODUCTS.filter(p => {
      // Category Filter
      const matchCategory = categoryFilter ? p.category === categoryFilter : true;
      
      // Search Filter
      const matchSearch = searchFilter 
        ? p.name.toLowerCase().includes(searchFilter.toLowerCase()) || 
          p.description.toLowerCase().includes(searchFilter.toLowerCase())
        : true;

      // Price Filter (Uses applied state, not input state)
      const matchPrice = p.price >= appliedPriceRange.min && p.price <= appliedPriceRange.max;

      return matchCategory && matchSearch && matchPrice;
    });

    // Sorting Logic
    return result.sort((a, b) => {
      switch (sortOption) {
        case 'price_asc': return a.price - b.price;
        case 'price_desc': return b.price - a.price;
        case 'name_asc': return a.name.localeCompare(b.name);
        default: return 0; // relevance (id or original order)
      }
    });
  }, [categoryFilter, searchFilter, appliedPriceRange, sortOption]);

  const activeCategoryName = categoryFilter 
    ? CATEGORIES.find(c => c.id === categoryFilter)?.name 
    : 'Todos os Produtos';

  // Handler to clear all filters
  const clearFilters = () => {
    setSearchParams({});
    setLocalMinPrice('');
    setLocalMaxPrice('');
    setAppliedPriceRange({ min: 0, max: Infinity });
    setSortOption('relevance');
    setIsMobileFiltersOpen(false);
  };

  const FilterSidebarContent = () => (
    <div className="space-y-8">
      {/* Header for Mobile */}
      <div className="flex items-center justify-between md:hidden mb-6 pb-4 border-b border-gray-100">
        <h2 className="text-xl font-bold text-slate-800">Filtrar Produtos</h2>
        <button onClick={() => setIsMobileFiltersOpen(false)} className="p-2 bg-gray-100 rounded-full">
          <X className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Categories */}
      <div>
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
          Departamentos
        </h3>
        <div className="max-h-[300px] overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100">
          <ul className="space-y-1">
            <li>
              <button
                onClick={() => { setSearchParams({}); setIsMobileFiltersOpen(false); }}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all flex items-center justify-between ${
                  !categoryFilter 
                    ? 'bg-brand-blue text-white font-semibold shadow-md' 
                    : 'text-slate-600 hover:bg-gray-100 hover:text-brand-blue'
                }`}
              >
                Todos os Produtos
                {!categoryFilter && <Check className="w-4 h-4" />}
              </button>
            </li>
            {CATEGORIES.map(cat => (
              <li key={cat.id}>
                <button
                  onClick={() => { setSearchParams({ categoria: cat.id }); setIsMobileFiltersOpen(false); }}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all flex justify-between items-center group ${
                    categoryFilter === cat.id 
                      ? 'bg-brand-blue text-white font-semibold shadow-md' 
                      : 'text-slate-600 hover:bg-gray-100 hover:text-brand-blue'
                  }`}
                >
                  <span>{cat.name}</span>
                  {categoryFilter === cat.id ? <Check className="w-4 h-4" /> : <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-50" />}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Price Range */}
      <div className="border-t border-gray-100 pt-6">
        <h3 className="font-bold text-slate-800 mb-4 text-sm uppercase tracking-wide">Faixa de Preço</h3>
        <div className="space-y-3">
          <div className="flex gap-2 items-center">
            <div className="relative rounded-md shadow-sm flex-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-xs font-medium">R$</span>
              </div>
              <input 
                type="number" 
                placeholder="Mín"
                value={localMinPrice}
                onChange={(e) => setLocalMinPrice(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && applyPriceFilter()}
                className="block w-full rounded-md border-gray-300 pl-8 py-2 focus:border-brand-blue focus:ring-brand-blue text-sm bg-gray-50 border outline-none"
              />
            </div>
            <span className="text-gray-400">-</span>
            <div className="relative rounded-md shadow-sm flex-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-xs font-medium">R$</span>
              </div>
              <input 
                type="number" 
                placeholder="Max"
                value={localMaxPrice}
                onChange={(e) => setLocalMaxPrice(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && applyPriceFilter()}
                className="block w-full rounded-md border-gray-300 pl-8 py-2 focus:border-brand-blue focus:ring-brand-blue text-sm bg-gray-50 border outline-none"
              />
            </div>
          </div>
          
          <button 
            onClick={applyPriceFilter}
            className="w-full bg-slate-800 text-white py-2 rounded-md text-sm font-semibold hover:bg-brand-blue transition-colors shadow-sm active:scale-95"
          >
            Filtrar Preço
          </button>
        </div>
      </div>
      
      {/* Reset Button */}
      <div className="pt-4">
        <button 
          onClick={clearFilters}
          className="w-full py-2.5 text-sm font-bold text-red-600 border border-red-200 bg-red-50 rounded-lg hover:bg-red-100 transition-colors flex items-center justify-center gap-2"
        >
          <X className="w-4 h-4" />
          Limpar Filtros
        </button>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen bg-gray-50/50">
      
      {/* Mobile Filter Overlay */}
      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden" onClick={() => setIsMobileFiltersOpen(false)}>
          <div 
            className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white p-6 shadow-2xl overflow-y-auto animate-slide-in-right"
            onClick={e => e.stopPropagation()}
          >
            <FilterSidebarContent />
          </div>
        </div>
      )}

      {/* Page Title & Breadcrumbs */}
      <div className="mb-8">
        <div className="text-sm text-slate-500 mb-2 flex items-center gap-2">
           <button onClick={() => setSearchParams({})} className="hover:text-brand-blue transition-colors">Home</button> 
           <span className="text-gray-300">/</span>
           <span className="font-semibold text-slate-800">{activeCategoryName}</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              {searchFilter ? `Resultados para "${searchFilter}"` : activeCategoryName}
            </h1>
            <p className="text-slate-500 text-sm mt-2 font-medium">{filteredProducts.length} produtos encontrados</p>
          </div>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-white p-4 rounded-xl shadow-sm border border-gray-100 sticky top-[72px] z-30 md:static">
        {/* Mobile Filter Trigger */}
        <button 
          onClick={() => setIsMobileFiltersOpen(true)}
          className="md:hidden flex items-center gap-2 bg-brand-blue text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-brand-darkBlue shadow-md active:scale-95 transition-all w-full justify-center"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filtrar e Ordenar
        </button>

        {/* Desktop Active Filters Display */}
        <div className="hidden md:flex items-center gap-2 text-sm text-slate-600">
          {(appliedPriceRange.min > 0 || appliedPriceRange.max < Infinity) && (
             <div className="flex items-center gap-2 bg-slate-100 text-slate-800 px-3 py-1.5 rounded-full border border-slate-200 font-medium text-xs">
               <span>
                 Preço: {appliedPriceRange.min > 0 ? `R$${appliedPriceRange.min}` : 'R$0'} 
                 {' - '} 
                 {appliedPriceRange.max < Infinity ? `R$${appliedPriceRange.max}` : 'Max'}
               </span>
               <button onClick={() => {
                 setLocalMinPrice('');
                 setLocalMaxPrice('');
                 setAppliedPriceRange({min: 0, max: Infinity});
               }} className="hover:text-red-500 ml-1"><X className="w-3 h-3" /></button>
             </div>
          )}
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-3 ml-auto w-full md:w-auto">
          <span className="text-sm text-slate-500 font-medium hidden sm:inline whitespace-nowrap">Ordenar por:</span>
          <div className="relative w-full md:w-48">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as SortOption)}
              className="w-full appearance-none bg-gray-50 border border-gray-200 text-slate-700 py-2.5 pl-4 pr-10 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent cursor-pointer hover:bg-gray-100 transition-colors"
            >
              <option value="relevance">Mais Relevantes</option>
              <option value="price_asc">Menor Preço</option>
              <option value="price_desc">Maior Preço</option>
              <option value="name_asc">Nome (A-Z)</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
              <ArrowUpDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sidebar (Desktop) */}
        <aside className="hidden md:block w-64 flex-shrink-0">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto custom-scrollbar">
            <FilterSidebarContent />
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-white rounded-xl border border-dashed border-gray-300 shadow-sm">
              <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Filter className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-700">Nenhum produto encontrado</h3>
              <p className="text-slate-500 mt-2 max-w-md mx-auto px-4">
                Não encontramos resultados com esses filtros. Tente reduzir o preço mínimo ou mudar a categoria.
              </p>
              <button 
                onClick={clearFilters} 
                className="mt-8 text-brand-blue font-bold hover:underline bg-blue-50 px-6 py-2 rounded-full"
              >
                Limpar todos os filtros
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProductList;