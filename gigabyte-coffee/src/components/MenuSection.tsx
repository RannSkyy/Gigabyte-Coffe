import React, { useState, useMemo } from 'react';
import { MenuItem, filterMenuItems, formatCurrency } from '../utils/coffeeUtils.ts';
import { MENU_ITEMS } from '../data/coffeeData.ts';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem, temp: 'Hot' | 'Iced', size: 'Regular' | 'Large') => void;
  onOpenItemDetail: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToCart,
  onOpenItemDetail,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Coffee');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [itemTemps, setItemTemps] = useState<Record<string, 'Hot' | 'Iced'>>({});
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const categories = ['All', 'Coffee', 'NonCoffee', 'Signature', 'Iced Coffee'];

  const filteredItems = useMemo(() => {
    return filterMenuItems(MENU_ITEMS, selectedCategory, searchQuery);
  }, [selectedCategory, searchQuery]);

  // Pagination for 4 items per page (matching the 4 card layout in reference)
  const pageSize = 4;
  const totalPages = Math.max(1, Math.ceil(filteredItems.length / pageSize));
  const displayedItems = filteredItems.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

  const handleAddToCartClick = (item: MenuItem) => {
    const temp = itemTemps[item.id] || (item.category === 'Iced Coffee' ? 'Iced' : 'Hot');
    onAddToCart(item, temp, 'Regular');
    setJustAddedId(item.id);
    setTimeout(() => setJustAddedId(null), 1400);
  };

  const toggleTemperature = (id: string, currentCategory: string) => {
    setItemTemps((prev) => {
      const current = prev[id] || (currentCategory === 'Iced Coffee' ? 'Iced' : 'Hot');
      return {
        ...prev,
        [id]: current === 'Hot' ? 'Iced' : 'Hot',
      };
    });
  };

  return (
    <section
      id="menu"
      className="relative bg-[#faf7f2] text-stone-900 py-20 sm:py-28 overflow-hidden"
    >
      {/* Decorative Wavy Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <path
          d="M 50 180 C 400 300 850 50 1350 220"
          fill="none"
          stroke="#c99558"
          strokeWidth="1.2"
          strokeDasharray="6 8"
          strokeOpacity="0.3"
        />
        <path
          d="M 120 720 C 600 600 1000 800 1400 680"
          fill="none"
          stroke="#161311"
          strokeWidth="1"
          strokeDasharray="4 6"
          strokeOpacity="0.15"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header matching reference */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-stone-600 block mb-1">
            OUR MENU
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 tracking-tight flex items-center justify-center gap-3 flex-wrap">
            <span>BEST MENU</span>
            <span className="font-script text-[#c99558] text-4xl sm:text-5xl font-normal">
              We Have
            </span>
          </h2>
        </div>

        {/* Category Filter Pills Matching Reference */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentPage(0);
                }}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#c99558] ${
                  isActive
                    ? 'bg-[#c99558] text-[#161311] shadow-md shadow-[#c99558]/20 scale-105'
                    : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-400 hover:text-stone-900'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Bar & Result Count */}
        <div className="max-w-md mx-auto mb-10 flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-stone-200 shadow-sm focus-within:border-[#c99558] focus-within:ring-2 focus-within:ring-[#c99558]/20 transition-all">
          <i className="fa-solid fa-magnifying-glass text-stone-400 text-xs pl-1"></i>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(0);
            }}
            placeholder="Search our brews, matcha, roast..."
            className="w-full bg-transparent text-xs sm:text-sm text-stone-800 focus:outline-none placeholder:text-stone-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-stone-400 hover:text-stone-600 text-xs p-1"
              aria-label="Clear search"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          )}
        </div>

        {/* 4 Menu Cards Grid matching reference */}
        {displayedItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {displayedItems.map((item) => {
              const currentTemp =
                itemTemps[item.id] || (item.category === 'Iced Coffee' ? 'Iced' : 'Hot');
              const isAdded = justAddedId === item.id;

              return (
                <div
                  key={item.id}
                  className="group bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl border border-stone-100/80 transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-2 relative"
                >
                  {/* Top Floating Circular Image */}
                  <div className="flex justify-center -mt-3 mb-5 relative">
                    <div
                      onClick={() => onOpenItemDetail(item)}
                      className="cursor-pointer relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden p-1.5 bg-gradient-to-tr from-[#c99558]/30 via-stone-200 to-transparent shadow-lg group-hover:scale-105 transition-transform duration-300"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-full"
                        loading="lazy"
                      />
                    </div>

                    {/* Quick View Button on Image Hover */}
                    <button
                      onClick={() => onOpenItemDetail(item)}
                      aria-label={`View details for ${item.name}`}
                      className="absolute bottom-0 bg-[#161311] text-[#e6b17e] hover:bg-[#c99558] hover:text-[#161311] p-1.5 rounded-full shadow-md text-[10px] transition-colors"
                      title="Quick Details"
                    >
                      <i className="fa-solid fa-eye px-1"></i>
                    </button>
                  </div>

                  {/* Card Info matching reference */}
                  <div className="text-center space-y-2 mb-4">
                    <h3
                      onClick={() => onOpenItemDetail(item)}
                      className="font-bold text-stone-900 text-base sm:text-lg group-hover:text-[#c99558] transition-colors cursor-pointer"
                    >
                      {item.name}
                    </h3>
                    <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed px-1">
                      {item.description}
                    </p>
                    <div className="text-sm font-extrabold text-stone-900">
                      {formatCurrency(item.price)}
                    </div>
                  </div>

                  {/* Options: Temperature toggle & Add Button */}
                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-2">
                    {/* Temperature Pill Toggle */}
                    <button
                      onClick={() => toggleTemperature(item.id, item.category)}
                      className={`px-2.5 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1 border transition-colors ${
                        currentTemp === 'Hot'
                          ? 'bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100'
                          : 'bg-sky-50 text-sky-800 border-sky-200 hover:bg-sky-100'
                      }`}
                      title="Click to toggle Hot/Iced"
                    >
                      <i
                        className={`fa-solid ${
                          currentTemp === 'Hot' ? 'fa-mug-hot' : 'fa-snowflake'
                        } text-[10px]`}
                      ></i>
                      <span>{currentTemp}</span>
                    </button>

                    {/* Add to Order Button */}
                    <button
                      onClick={() => handleAddToCartClick(item)}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 active:scale-95 shadow-sm ${
                        isAdded
                          ? 'bg-emerald-600 text-white scale-105'
                          : 'bg-stone-950 hover:bg-[#c99558] text-white hover:text-stone-950'
                      }`}
                    >
                      <i
                        className={`fa-solid ${
                          isAdded ? 'fa-check' : 'fa-plus'
                        } text-[10px]`}
                      ></i>
                      <span>{isAdded ? 'Added' : 'Order'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-3xl border border-stone-200 max-w-md mx-auto">
            <i className="fa-solid fa-mug-saucer text-stone-300 text-4xl mb-3"></i>
            <p className="text-stone-700 text-sm font-semibold">No menu drinks found</p>
            <p className="text-stone-500 text-xs mt-1">Try another category or search term.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-1.5 rounded-full bg-stone-900 text-white text-xs font-medium"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* 3 Pagination Indicator Dots Matching Reference */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2.5 mt-12">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                aria-label={`Go to menu page ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[#c99558] ${
                  currentPage === idx
                    ? 'w-7 bg-[#c99558]'
                    : 'w-2.5 bg-stone-300 hover:bg-stone-400'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
