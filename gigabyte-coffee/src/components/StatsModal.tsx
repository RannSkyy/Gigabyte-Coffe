import React from 'react';

interface StatsModalProps {
  statId: string | null;
  onClose: () => void;
  onExploreMenu: () => void;
}

export const StatsModal: React.FC<StatsModalProps> = ({
  statId,
  onClose,
  onExploreMenu,
}) => {
  if (!statId) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Stat Details"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
    >
      <div className="bg-[#181412] border border-stone-800 rounded-3xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl relative text-white animate-scale-in p-6 sm:p-8">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-900 text-stone-300 hover:text-white flex items-center justify-center border border-stone-700"
        >
          <i className="fa-solid fa-xmark text-sm"></i>
        </button>

        {statId === 'stat-1' && (
          <div className="space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-[#c99558]">
              GLOBAL REACH
            </span>
            <h3 className="text-2xl font-black text-white">200+ Partner & Cafe Locations</h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Find Gigabyte Coffee specialty beans, drip bars, and franchise partners across premier metropolitan hubs:
            </p>
            <div className="space-y-2.5 pt-2">
              {[
                { city: 'Vale Flagship Roastery', addr: 'No 101 Milk Street, Vale', tel: '+1 234 5667 845' },
                { city: 'Seattle Capitol Hill', addr: '450 Pine Ave, Seattle, WA', tel: '+1 206 555 0192' },
                { city: 'Tokyo Shibuya Bar', addr: '1-14-8 Jinnan, Shibuya-ku, Tokyo', tel: '+81 3 5456 7890' },
                { city: 'London Shoreditch Lab', addr: '82 Redchurch St, London E2 7DD', tel: '+44 20 7946 0921' },
              ].map((loc, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-[#221c18] border border-stone-800 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#c99558]/20 text-[#e6b17e] flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
                    <i className="fa-solid fa-store"></i>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">{loc.city}</h5>
                    <p className="text-[11px] text-stone-400">{loc.addr}</p>
                    <p className="text-[11px] text-[#e6b17e]">{loc.tel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {statId === 'stat-2' && (
          <div className="space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-[#c99558]">
              CURATED MENU
            </span>
            <h3 className="text-2xl font-black text-white">40+ Product Types</h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              From our signature double ristretto milk beverages to single-farm pour overs, nitro cold brews, ceremonial grade matchas, and whole bean roaster bags:
            </p>
            <div className="grid grid-cols-2 gap-2.5 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-[#221c18] border border-stone-800">
                <span className="font-bold text-white block">Artisanal Espresso</span>
                <span className="text-stone-400 text-[11px]">8 signature roast formulas</span>
              </div>
              <div className="p-3 rounded-xl bg-[#221c18] border border-stone-800">
                <span className="font-bold text-white block">Cold Cloud Brews</span>
                <span className="text-stone-400 text-[11px]">Slow-steeped 18 hours</span>
              </div>
              <div className="p-3 rounded-xl bg-[#221c18] border border-stone-800">
                <span className="font-bold text-white block">Non-Coffee Elixirs</span>
                <span className="text-stone-400 text-[11px]">Matcha, Chai & Tisanes</span>
              </div>
              <div className="p-3 rounded-xl bg-[#221c18] border border-stone-800">
                <span className="font-bold text-white block">Reserve Bean Bags</span>
                <span className="text-stone-400 text-[11px]">Nitrogen-sealed freshness</span>
              </div>
            </div>
            <button
              onClick={() => {
                onClose();
                onExploreMenu();
              }}
              className="w-full mt-2 py-2.5 rounded-full bg-[#c99558] text-[#12100e] font-bold text-xs hover:bg-[#e6b17e] transition-colors"
            >
              Explore Full Menu Catalog
            </button>
          </div>
        )}

        {statId === 'stat-3' && (
          <div className="space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-[#c99558]">
              DECADE OF EXCELLENCE
            </span>
            <h3 className="text-2xl font-black text-white">10+ Years of Craft Experience</h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              A timeline of passionate roasting, innovation, and specialty community:
            </p>
            <div className="space-y-3 pt-2 text-xs">
              <div className="border-l-2 border-[#c99558] pl-3">
                <span className="text-[#e6b17e] font-bold text-[11px]">2016</span>
                <p className="text-white font-medium">First garage roastery with 5kg batch drum</p>
              </div>
              <div className="border-l-2 border-[#c99558] pl-3">
                <span className="text-[#e6b17e] font-bold text-[11px]">2019</span>
                <p className="text-white font-medium">Won National Barista Cup & Direct Sourcing Partner</p>
              </div>
              <div className="border-l-2 border-[#c99558] pl-3">
                <span className="text-[#e6b17e] font-bold text-[11px]">2023</span>
                <p className="text-white font-medium">Introduced digital precision airflow roasters</p>
              </div>
              <div className="border-l-2 border-[#c99558] pl-3">
                <span className="text-[#e6b17e] font-bold text-[11px]">2026</span>
                <p className="text-white font-medium">Serving over 500,000 coffee enthusiasts globally</p>
              </div>
            </div>
          </div>
        )}

        {statId === 'stat-4' && (
          <div className="space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-[#c99558]">
              COMMUNITY LOVE
            </span>
            <h3 className="text-2xl font-black text-white">500,000+ Happy Customers</h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Over half a million cups delivered with 4.9 average customer review rating. Read stories from coffee enthusiasts who make Gigabyte Coffee part of their daily morning ritual.
            </p>
            <div className="p-4 rounded-2xl bg-[#221c18] border border-stone-800 text-center">
              <div className="flex justify-center text-amber-400 text-base mb-1">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <span className="text-sm font-bold text-white">99.4% Customer Satisfaction</span>
              <p className="text-[11px] text-stone-400 mt-1">Based on 14,800+ verified customer ratings</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
