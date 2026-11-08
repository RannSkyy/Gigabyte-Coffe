import React from 'react';

interface HeroProps {
  onViewMore: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewMore, onExploreMenu }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen bg-[#161311] text-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden flex items-center"
    >
      {/* Background Matrix/Grid Accent (Gigabyte Tech Motif in reference top left) */}
      <div className="absolute top-0 left-0 w-80 h-96 pointer-events-none opacity-20 z-0">
        <div className="grid grid-cols-6 gap-3 p-6">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className={`w-6 h-6 rounded-sm border border-emerald-400/40 ${
                i % 4 === 0 ? 'bg-emerald-400/20' : 'bg-transparent'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Subtle Warm Radial Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#c99558]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-1/3 w-80 h-80 bg-[#3f2b1d]/40 rounded-full blur-3xl pointer-events-none" />

      {/* Dotted Curved Accent Stroke (Matching reference SVG curve) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <path
          d="M 120 180 Q 520 100 850 140 T 1320 280"
          fill="none"
          stroke="#e6b17e"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          strokeOpacity="0.4"
        />
        <path
          d="M 50 560 Q 400 480 820 620 T 1420 540"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.2"
          strokeDasharray="5 7"
          strokeOpacity="0.25"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Big Coffee Cup with Saucer, Spoon, and Cookies */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative group max-w-md sm:max-w-lg lg:max-w-xl">
              {/* Soft circular aura behind the cup */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#d4a373]/20 to-transparent rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-70" />

              {/* Coffee Cup Composition with Cookie */}
              <div className="relative rounded-3xl overflow-hidden p-2 sm:p-4 animate-float-slow">
                <img
                  src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1000&q=85"
                  alt="Gigabyte Artisanal Latte Art with Cookie"
                  className="w-full h-auto object-cover rounded-2xl drop-shadow-2xl brightness-105 contrast-105"
                  loading="eager"
                />

                {/* Floating Cookie & Spoon Accent Badge */}
                <div className="absolute bottom-6 left-6 bg-[#161311]/90 backdrop-blur-md border border-[#c99558]/40 rounded-2xl px-4 py-2.5 flex items-center gap-3 shadow-xl">
                  <div className="w-9 h-9 rounded-full bg-[#c99558]/20 flex items-center justify-center text-[#e6b17e]">
                    <i className="fa-solid fa-cookie-bite text-base"></i>
                  </div>
                  <div>
                    <p className="text-[11px] text-stone-300 font-medium">Fresh Baked Daily</p>
                    <p className="text-xs font-bold text-white">Oatmeal Almond Crisps</p>
                  </div>
                </div>

                {/* Rating Badge Top Right */}
                <div className="absolute top-6 right-6 bg-[#161311]/90 backdrop-blur-md border border-white/10 rounded-2xl px-3.5 py-1.5 flex items-center gap-2 shadow-lg">
                  <div className="flex text-amber-400 text-xs">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <span className="text-xs font-bold text-white">4.9/5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Headline & Call to Action */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-none">
                GIGABYTE
              </h1>
              <span className="font-script text-[#d4a373] text-4xl sm:text-5xl xl:text-6xl block -mt-1 transform -rotate-1 select-none">
                Coffee
              </span>
            </div>

            <p className="text-stone-300 text-sm sm:text-base max-w-lg leading-relaxed font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>

            {/* Action Buttons matching reference rounded pill outline */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onViewMore}
                className="px-8 py-3 rounded-full border-2 border-[#d4a373] text-[#e6b17e] hover:text-[#12100e] hover:bg-[#d4a373] text-sm font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#d4a373]/20 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
              >
                View More
              </button>

              <button
                onClick={onExploreMenu}
                className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-stone-200 text-sm font-semibold tracking-wide border border-white/15 transition-all duration-300 flex items-center gap-2 group active:scale-95"
              >
                <span>Order Drink</span>
                <i className="fa-solid fa-arrow-right text-xs text-[#d4a373] group-hover:translate-x-1 transition-transform"></i>
              </button>
            </div>

            {/* Quick Micro Features */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-stone-800/80 w-full max-w-md">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-[#e6b17e] text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                  <i className="fa-solid fa-leaf text-[10px]"></i> 100%
                </span>
                <span className="text-[11px] text-stone-400">Arabica Beans</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-[#e6b17e] text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                  <i className="fa-solid fa-fire-burner text-[10px]"></i> Micro
                </span>
                <span className="text-[11px] text-stone-400">Batch Roasted</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-[#e6b17e] text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                  <i className="fa-solid fa-heart text-[10px]"></i> Master
                </span>
                <span className="text-[11px] text-stone-400">Barista Craft</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Organic Curved Wave Divider at the Bottom transitioning to White About Section */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 sm:h-16 lg:h-24 text-white fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,60 C650,140 900,10 1200,80 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};
