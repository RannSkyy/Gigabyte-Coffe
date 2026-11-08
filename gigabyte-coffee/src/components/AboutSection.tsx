import React, { useState } from 'react';

interface AboutSectionProps {
  onLearnMore: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  const [activeTab, setActiveTab] = useState<'roast' | 'source' | 'craft'>('roast');

  const tabContent = {
    roast: 'Precision heat profiling with digital airflow controls ensures every bean develops delicate caramel and chocolate aromatic notes without bitterness.',
    source: '100% fair-trade partnerships with independent altitude farmers across Ethiopia, Colombia, Guatemala, and Sumatra.',
    craft: 'Trained specialty baristas calibrating grind micron size every morning to match changing humidity and temperature.',
  };

  return (
    <section
      id="about"
      className="relative bg-white text-stone-900 py-16 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Decorative Dotted Curves matching reference */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <path
          d="M -20 120 C 180 280 80 580 240 760"
          fill="none"
          stroke="#1b1612"
          strokeWidth="1.5"
          strokeDasharray="5 7"
          strokeOpacity="0.3"
        />
        <path
          d="M 1200 40 C 1380 200 1260 480 1460 620"
          fill="none"
          stroke="#c99558"
          strokeWidth="1.2"
          strokeDasharray="4 6"
          strokeOpacity="0.4"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typography & Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-stone-600">
                WHO WE ARE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 tracking-tight">
                ABOUT
              </h2>
              <span className="font-script text-[#c99558] text-3xl sm:text-4xl lg:text-5xl block -mt-2">
                Gigabyte Coffee
              </span>
            </div>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.
            </p>

            {/* Interactive Feature Tabs */}
            <div className="bg-[#faf7f2] p-4 rounded-2xl border border-stone-200/80 space-y-3">
              <div className="flex gap-2 border-b border-stone-200/60 pb-2">
                {(['roast', 'source', 'craft'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                      activeTab === tab
                        ? 'bg-stone-900 text-white shadow-sm'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
                    }`}
                  >
                    {tab === 'roast' ? 'Micro Roast' : tab === 'source' ? 'Direct Source' : 'Brew Craft'}
                  </button>
                ))}
              </div>
              <p className="text-xs text-stone-700 leading-relaxed min-h-[36px]">
                {tabContent[activeTab]}
              </p>
            </div>

            {/* Black Pill Button matching reference */}
            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onLearnMore}
                className="px-8 py-3 rounded-full bg-stone-950 text-white hover:bg-[#c99558] hover:text-stone-950 text-sm font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-stone-950"
              >
                Learn More
              </button>

              <div className="flex items-center gap-2 text-stone-600 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Open Daily: 07:00 — 22:00</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Coffee Bean & Splash Image */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full max-w-lg group">
              {/* Soft caramel background blur aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#e6b17e]/30 via-[#c99558]/20 to-transparent rounded-full blur-2xl transform scale-90 group-hover:scale-105 transition-transform duration-700 pointer-events-none" />

              {/* Dynamic Splash Composition Photo */}
              <div className="relative rounded-3xl overflow-hidden p-3 bg-white shadow-xl border border-stone-100 transform hover:scale-[1.01] transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1000&q=85"
                  alt="Coffee beans splashing in roasted brew"
                  className="w-full h-auto object-cover rounded-2xl"
                  loading="lazy"
                />

                {/* Roasted Bean Badge */}
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-lg border border-stone-200/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#c99558]/15 flex items-center justify-center text-[#c99558]">
                    <i className="fa-solid fa-seedling text-lg"></i>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-600 block">
                      Single Origin
                    </span>
                    <span className="text-xs font-bold text-stone-900 block">
                      Guatemala Antigua Lot
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
