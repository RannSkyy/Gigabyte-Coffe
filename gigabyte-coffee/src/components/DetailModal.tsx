import React, { useState } from 'react';
import { MenuItem, formatCurrency } from '../utils/coffeeUtils.ts';

interface DetailModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: MenuItem, temp: 'Hot' | 'Iced', size: 'Regular' | 'Large') => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  item,
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const [temperature, setTemperature] = useState<'Hot' | 'Iced'>('Hot');
  const [size, setSize] = useState<'Regular' | 'Large'>('Regular');
  const [addedSuccess, setAddedSuccess] = useState(false);

  if (!isOpen || !item) return null;

  const currentPrice =
    size === 'Large' ? Math.round(item.price * 1.25 * 100) / 100 : item.price;

  const handleAdd = () => {
    onAddToCart(item, temperature, size);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      onClose();
    }, 900);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.name}
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div className="bg-[#1a1614] border border-stone-800 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative text-white animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-stone-300 hover:text-white flex items-center justify-center transition-colors"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        {/* Hero Image */}
        <div className="relative h-60 w-full overflow-hidden bg-stone-900">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1614] via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#c99558] text-[#12100e]">
              {item.category}
            </span>
            <h3 className="text-2xl font-black text-white mt-1">{item.name}</h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
            {item.description}
          </p>

          {/* Tags & Calories */}
          <div className="flex flex-wrap items-center gap-2">
            {item.calories && (
              <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-stone-800 text-stone-300 flex items-center gap-1">
                <i className="fa-solid fa-fire text-amber-500 text-[10px]"></i>
                {item.calories} kcal
              </span>
            )}
            {item.tags?.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#c99558]/15 text-[#e6b17e] border border-[#c99558]/30"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Temperature Choice */}
          <div>
            <label className="block text-xs font-semibold text-stone-400 mb-2">
              Serving Temperature
            </label>
            <div className="grid grid-cols-2 gap-3">
              {(['Hot', 'Iced'] as const).map((temp) => (
                <button
                  key={temp}
                  type="button"
                  onClick={() => setTemperature(temp)}
                  className={`py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border transition-all ${
                    temperature === temp
                      ? 'bg-[#c99558] text-[#12100e] border-[#c99558] shadow-md'
                      : 'bg-[#221c18] text-stone-300 border-stone-800 hover:border-stone-600'
                  }`}
                >
                  <i
                    className={`fa-solid ${
                      temp === 'Hot' ? 'fa-mug-hot' : 'fa-snowflake'
                    } text-xs`}
                  ></i>
                  <span>{temp}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Size Choice */}
          <div>
            <label className="block text-xs font-semibold text-stone-400 mb-2">
              Cup Size
            </label>
            <div className="grid grid-cols-2 gap-3">
              {(['Regular', 'Large'] as const).map((sz) => (
                <button
                  key={sz}
                  type="button"
                  onClick={() => setSize(sz)}
                  className={`py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-between border transition-all ${
                    size === sz
                      ? 'bg-[#c99558] text-[#12100e] border-[#c99558] shadow-md'
                      : 'bg-[#221c18] text-stone-300 border-stone-800 hover:border-stone-600'
                  }`}
                >
                  <span>{sz} (12 oz)</span>
                  <span className="text-[11px] font-medium opacity-80">
                    {sz === 'Large' ? '+25%' : 'Standard'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Footer Price & Add Button */}
          <div className="pt-3 border-t border-stone-800 flex items-center justify-between gap-4">
            <div>
              <span className="text-[10px] text-stone-400 block uppercase font-medium">Total</span>
              <span className="text-xl font-black text-white">{formatCurrency(currentPrice)}</span>
            </div>

            <button
              onClick={handleAdd}
              disabled={addedSuccess}
              className={`flex-1 py-3 px-6 rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg flex items-center justify-center gap-2 active:scale-95 ${
                addedSuccess
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#c99558] text-[#12100e] hover:bg-[#e6b17e]'
              }`}
            >
              <i className={`fa-solid ${addedSuccess ? 'fa-check' : 'fa-basket-shopping'}`}></i>
              <span>{addedSuccess ? 'Added to Cart!' : 'Add to Order'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
