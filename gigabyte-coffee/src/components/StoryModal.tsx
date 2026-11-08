import React from 'react';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreMenu: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({
  isOpen,
  onClose,
  onExploreMenu,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="The Story of Gigabyte Coffee"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
    >
      <div className="bg-[#181412] border border-stone-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-white animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close story dialog"
          className="sticky top-4 float-right mr-4 z-20 w-9 h-9 rounded-full bg-stone-900/90 text-stone-300 hover:text-white flex items-center justify-center border border-stone-700"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#c99558]">
              HERITAGE & CRAFT
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              The Philosophy Behind Gigabyte Coffee
            </h3>
            <span className="font-script text-[#d4a373] text-xl block">
              Where Technology Meets Artisanal Roasting
            </span>
          </div>

          <div className="rounded-2xl overflow-hidden border border-stone-800">
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&q=80"
              alt="Gigabyte Coffee Lab and Roaster"
              className="w-full h-48 sm:h-64 object-cover"
            />
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-300 leading-relaxed">
            <p>
              Founded in 2016 by a collective of software engineers and third-wave coffee roasters, <strong className="text-white">Gigabyte Coffee</strong> began with a single question: <em>Can digital precision enhance the soul of traditional coffee craftsmanship?</em>
            </p>
            <p>
              We sample-roast green beans sourced directly from micro-lot farms above 1,800 meters. Our custom heat profile telemetry monitors caramelization to within 0.1°C, unlocking fruit-forward brightness and deep chocolate notes that mass commercial roasters destroy.
            </p>
            <p>
              Every cup pulled at our flagship cafe on Milk Street is weighed on laboratory scales, calibrated against daily barometric pressure, and served with warmth and unpretentious hospitality.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#201a16] border border-stone-800 text-center">
            <div>
              <span className="text-lg sm:text-xl font-bold text-[#e6b17e] block">1,850m</span>
              <span className="text-[10px] text-stone-400">Average Farm Elevation</span>
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold text-[#e6b17e] block">88.5+</span>
              <span className="text-[10px] text-stone-400">SCA Cup Score</span>
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold text-[#e6b17e] block">100%</span>
              <span className="text-[10px] text-stone-400">Compostable Packaging</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onExploreMenu();
              }}
              className="flex-1 py-3 px-5 rounded-full bg-[#c99558] hover:bg-[#e6b17e] text-[#12100e] font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md text-center"
            >
              Taste Our Roasts (Explore Menu)
            </button>
            <button
              onClick={onClose}
              className="py-3 px-6 rounded-full border border-stone-700 text-stone-300 hover:text-white text-xs sm:text-sm font-semibold transition-colors text-center"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
