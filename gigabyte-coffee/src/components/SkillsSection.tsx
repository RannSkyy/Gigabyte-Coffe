import React, { useState } from 'react';
import { SKILL_STATS } from '../data/coffeeData.ts';

interface SkillsSectionProps {
  onCardAction: (id: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onCardAction }) => {
  const [activeDot, setActiveDot] = useState(1);

  return (
    <section
      id="skills"
      className="relative bg-[#161311] text-white py-20 sm:py-28 overflow-hidden curved-top-dark curved-bottom-dark -my-8 z-20 shadow-2xl"
    >
      {/* Curved Background Dashed Line */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
      >
        <path
          d="M 60 100 C 400 30 800 200 1380 80"
          fill="none"
          stroke="#c99558"
          strokeWidth="1.2"
          strokeDasharray="6 8"
          strokeOpacity="0.3"
        />
        <path
          d="M 40 450 C 350 560 950 360 1420 500"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1"
          strokeDasharray="4 6"
          strokeOpacity="0.2"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14 text-left">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-stone-400 block mb-1">
            OUR SKILLS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight flex items-baseline gap-3 flex-wrap">
            <span>OUR BEST</span>
            <span className="font-script text-[#d4a373] text-4xl sm:text-5xl font-normal">
              Skills
            </span>
          </h2>
        </div>

        {/* 4 Cards Grid Matching Reference Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SKILL_STATS.map((stat, idx) => (
            <div
              key={stat.id}
              onClick={() => onCardAction(stat.id)}
              className="group cursor-pointer bg-[#1e1916] hover:bg-[#251f1b] border border-stone-800/80 hover:border-[#c99558]/60 rounded-3xl p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#c99558]/10 flex flex-col justify-between"
            >
              {/* Top Circular Image */}
              <div className="flex justify-center mb-6">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden p-1 border-2 border-stone-700/60 group-hover:border-[#c99558] transition-colors shadow-inner">
                  <img
                    src={stat.image}
                    alt={stat.label}
                    className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Stat Number & Label */}
              <div className="text-left space-y-1 mb-6">
                <div className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-[#e6b17e] transition-colors">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-stone-300">
                  {stat.label}
                </div>
                <div className="text-xs text-stone-500 line-clamp-2">
                  {stat.description}
                </div>
              </div>

              {/* Bottom Arrow Circle Button matching reference */}
              <div className="flex justify-end">
                <div className="w-9 h-9 rounded-full bg-[#2a221d] group-hover:bg-[#c99558] text-stone-300 group-hover:text-stone-950 flex items-center justify-center transition-all duration-300 shadow-md">
                  <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-0.5 transition-transform"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Pagination Indicator Dots Matching Reference */}
        <div className="flex justify-center items-center gap-2.5 mt-12">
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              onClick={() => setActiveDot(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[#c99558] ${
                activeDot === idx
                  ? 'w-7 bg-[#c99558]'
                  : 'w-2.5 bg-stone-700 hover:bg-stone-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
