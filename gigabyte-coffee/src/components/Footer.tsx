import React from 'react';

export const Footer: React.FC = () => {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="relative bg-[#12100e] text-white pt-16 pb-12 overflow-hidden border-t border-stone-800/80">
      {/* Concentric Circular Rings Background Motif matching reference */}
      <div className="absolute -bottom-24 right-0 pointer-events-none opacity-10">
        <svg width="450" height="450" viewBox="0 0 450 450" fill="none">
          <circle cx="225" cy="225" r="70" stroke="#c99558" strokeWidth="2" />
          <circle cx="225" cy="225" r="120" stroke="#c99558" strokeWidth="2" />
          <circle cx="225" cy="225" r="170" stroke="#c99558" strokeWidth="2" />
          <circle cx="225" cy="225" r="220" stroke="#c99558" strokeWidth="2" />
        </svg>
      </div>

      {/* Dotted Curves */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path
          d="M 20 280 C 400 380 900 150 1400 320"
          fill="none"
          stroke="#c99558"
          strokeWidth="1.2"
          strokeDasharray="6 8"
          strokeOpacity="0.25"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Column 1: Brand & Bio matching reference */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#c99558] to-[#6f4e37] p-[1.5px] flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#161311] flex items-center justify-center text-[#e6b17e]">
                  <i className="fa-solid fa-mug-saucer text-sm"></i>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-base font-bold tracking-wider leading-none">
                  GIGABYTE
                </span>
                <span className="font-script text-[#d4a373] text-sm leading-none mt-0.5">
                  Coffee
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Handcrafted artisan espresso and specialty beans roasted with passion.
            </p>

            {/* Social Icons matching reference */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow us on Instagram"
                className="w-8 h-8 rounded-full bg-[#1e1916] border border-stone-800 hover:border-[#c99558] text-stone-300 hover:text-[#c99558] flex items-center justify-center text-xs transition-colors"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://gigabytecoffee.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Website"
                className="w-8 h-8 rounded-full bg-[#1e1916] border border-stone-800 hover:border-[#c99558] text-stone-300 hover:text-[#c99558] flex items-center justify-center text-xs transition-colors"
              >
                <i className="fa-solid fa-globe"></i>
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow us on Pinterest"
                className="w-8 h-8 rounded-full bg-[#1e1916] border border-stone-800 hover:border-[#c99558] text-stone-300 hover:text-[#c99558] flex items-center justify-center text-xs transition-colors"
              >
                <i className="fa-brands fa-pinterest-p"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow us on Facebook"
                className="w-8 h-8 rounded-full bg-[#1e1916] border border-stone-800 hover:border-[#c99558] text-stone-300 hover:text-[#c99558] flex items-center justify-center text-xs transition-colors"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links matching reference */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a
                  href="#home"
                  onClick={(e) => scrollTo(e, 'home')}
                  className="hover:text-[#c99558] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={(e) => scrollTo(e, 'menu')}
                  className="hover:text-[#c99558] transition-colors"
                >
                  Coffee Shop
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={(e) => scrollTo(e, 'skills')}
                  className="hover:text-[#c99558] transition-colors"
                >
                  Our Branches
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={(e) => scrollTo(e, 'menu')}
                  className="hover:text-[#c99558] transition-colors"
                >
                  Our Best Menu
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => scrollTo(e, 'gallery')}
                  className="hover:text-[#c99558] transition-colors"
                >
                  Gallery & Roast
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info matching reference */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider">
              Contact Info
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <p className="flex items-start gap-2">
                <i className="fa-solid fa-location-dot text-[#c99558] mt-0.5"></i>
                <span>No 101 Milk Street, Vale</span>
              </p>
              <p className="flex items-center gap-2">
                <i className="fa-solid fa-phone text-[#c99558]"></i>
                <a href="tel:+12345667845" className="hover:text-[#c99558] transition-colors">
                  Tel: +1 234 5667 845
                </a>
              </p>
              <p className="flex items-center gap-2">
                <i className="fa-solid fa-envelope text-[#c99558]"></i>
                <a href="mailto:info@gigabytecoffee.com" className="hover:text-[#c99558] transition-colors">
                  Email: info@gigabytecoffee.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-center gap-4 text-[11px] text-stone-500">
          <p>
            Copyright © 2026 Gigabyte Coffee. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#about" onClick={(e) => scrollTo(e, 'about')} className="hover:text-stone-300">
              Privacy Policy
            </a>
            <a href="#menu" onClick={(e) => scrollTo(e, 'menu')} className="hover:text-stone-300">
              Terms of Service
            </a>
            <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="hover:text-stone-300">
              Roastery Direct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
