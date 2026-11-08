import React, { useState, useEffect } from 'react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenStoryModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenStoryModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Simple scrollspy to highlight active section
      const sections = ['home', 'about', 'skills', 'menu', 'gallery', 'reviews', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Shop', id: 'menu' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#12100e]/95 backdrop-blur-md shadow-lg shadow-black/40 py-3 border-b border-[#2d2520]/60'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with Steam Coffee Cup */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, 'home')}
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#c99558] rounded-lg p-1"
          aria-label="Gigabyte Coffee Home"
        >
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#c99558] to-[#6f4e37] p-[1.5px] flex items-center justify-center shadow-md">
            <div className="w-full h-full rounded-full bg-[#161311] flex items-center justify-center text-[#e6b17e] group-hover:text-white transition-colors">
              {/* Coffee Cup Outline Icon matching mockup */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
              >
                <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                <line x1="6" y1="2" x2="6" y2="4" className="animate-steam" />
                <line x1="10" y1="1" x2="10" y2="4" className="animate-steam" style={{ animationDelay: '0.4s' }} />
                <line x1="14" y1="2" x2="14" y2="4" className="animate-steam" style={{ animationDelay: '0.8s' }} />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-base sm:text-lg font-bold tracking-wider leading-none">
              GIGABYTE
            </span>
            <span className="font-script text-[#d4a373] text-sm leading-none mt-0.5">
              Coffee
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`text-sm font-medium transition-all duration-200 relative py-1 focus:outline-none focus:ring-1 focus:ring-[#c99558] rounded ${
                  isActive
                    ? 'text-[#e6b17e]'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#c99558] to-[#e6b17e] rounded-full animate-pulse" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons: Cart Drawer & Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* Order / Cart Button */}
          <button
            onClick={onOpenCart}
            aria-label={`Shopping Cart with ${cartCount} items`}
            className="relative px-3.5 py-1.5 rounded-full bg-[#201b17] border border-[#3e342c] hover:border-[#c99558] text-[#e6b17e] hover:text-white transition-all duration-200 flex items-center gap-2 group shadow-sm focus:outline-none focus:ring-2 focus:ring-[#c99558]"
          >
            <i className="fa-solid fa-basket-shopping text-sm group-hover:scale-110 transition-transform"></i>
            <span className="text-xs font-semibold hidden sm:inline text-stone-200 group-hover:text-white">
              Order Cart
            </span>
            <span className="w-5 h-5 rounded-full bg-[#c99558] text-[#12100e] text-xs font-bold flex items-center justify-center">
              {cartCount}
            </span>
          </button>

          {/* Quick Story Modal Trigger */}
          <button
            onClick={onOpenStoryModal}
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-[#c99558]/10 text-[#d4a373] border border-[#c99558]/30 hover:bg-[#c99558]/20 transition-colors"
          >
            <i className="fa-solid fa-sparkles text-[10px]"></i>
            Our Story
          </button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="md:hidden p-2 rounded-lg bg-[#201b17] border border-[#3e342c] text-stone-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#c99558]"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-lg`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#161311]/98 backdrop-blur-xl border-b border-[#332b24] shadow-2xl px-6 py-6 transition-all duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`text-base font-medium py-2 px-3 rounded-lg flex items-center justify-between transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#c99558]/15 text-[#e6b17e] border-l-4 border-[#c99558]'
                    : 'text-stone-300 hover:bg-stone-800/50 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                <i className="fa-solid fa-chevron-right text-xs opacity-50"></i>
              </a>
            ))}

            <div className="pt-3 border-t border-stone-800 flex gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStoryModal();
                }}
                className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#2a221b] border border-[#4a3b30] text-[#e6b17e] hover:bg-[#342921] transition-colors text-center"
              >
                <i className="fa-solid fa-book-open mr-1.5"></i> Story & Roast
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCart();
                }}
                className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#c99558] text-[#12100e] hover:bg-[#dbab6e] transition-colors text-center shadow-md"
              >
                <i className="fa-solid fa-basket-shopping mr-1.5"></i> View Cart ({cartCount})
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
