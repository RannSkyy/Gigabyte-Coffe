import { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { SkillsSection } from './components/SkillsSection.tsx';
import { MenuSection } from './components/MenuSection.tsx';
import { GallerySection } from './components/GallerySection.tsx';
import { ReviewsSection } from './components/ReviewsSection.tsx';
import { NewsletterSection } from './components/NewsletterSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { BackToTop } from './components/BackToTop.tsx';
import { CartDrawer } from './components/CartDrawer.tsx';
import { DetailModal } from './components/DetailModal.tsx';
import { StoryModal } from './components/StoryModal.tsx';
import { StatsModal } from './components/StatsModal.tsx';
import { MenuItem, CartItem } from './utils/coffeeUtils.ts';
import { MENU_ITEMS } from './data/coffeeData.ts';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([
    {
      item: MENU_ITEMS[0], // Preloaded initial favorite: Brown Sugar Latte
      quantity: 1,
      temperature: 'Hot',
      size: 'Regular',
    },
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [activeStatId, setActiveStatId] = useState<string | null>(null);
  const [selectedItemForDetail, setSelectedItemForDetail] = useState<MenuItem | null>(null);
  const [unlockedPromo, setUnlockedPromo] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleAddToCart = (
    item: MenuItem,
    temperature: 'Hot' | 'Iced' = 'Hot',
    size: 'Regular' | 'Large' = 'Regular'
  ) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (ci) =>
          ci.item.id === item.id &&
          ci.temperature === temperature &&
          ci.size === size
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + 1,
        };
        return next;
      } else {
        return [...prev, { item, quantity: 1, temperature, size }];
      }
    });

    showToast(`Added ${item.name} (${temperature}) to your order!`);
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCart((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], quantity: newQty };
      return next;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
    showToast('Item removed from cart.');
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const totalCartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-[#12100e] text-[#2c2420] flex flex-col font-sans selection:bg-[#c99558] selection:text-white relative">
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed top-20 right-6 z-50 bg-[#1e1916]/95 backdrop-blur-md text-white border border-[#c99558]/60 px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2.5 text-xs font-semibold animate-bounce"
        >
          <div className="w-5 h-5 rounded-full bg-[#c99558] text-[#12100e] flex items-center justify-center text-[10px]">
            <i className="fa-solid fa-mug-hot"></i>
          </div>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Header / Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenStoryModal={() => setIsStoryOpen(true)}
      />

      {/* Page Content with Overlapping Smooth Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onViewMore={() => setIsStoryOpen(true)}
          onExploreMenu={() => scrollToSection('menu')}
        />

        {/* Section 2: WHO WE ARE / ABOUT Gigabyte Coffee */}
        <AboutSection onLearnMore={() => setIsStoryOpen(true)} />

        {/* Section 3: OUR SKILLS / OUR BEST Skills */}
        <SkillsSection onCardAction={(id) => setActiveStatId(id)} />

        {/* Section 4: OUR MENU / BEST MENU We Have */}
        <MenuSection
          onAddToCart={handleAddToCart}
          onOpenItemDetail={(item) => setSelectedItemForDetail(item)}
        />

        {/* Section 5: GALLERY / OUR Gallery */}
        <GallerySection />

        {/* Section 6: OUR REVIEWS / OUR HAPPY Customers */}
        <ReviewsSection />

        {/* Section 7: OUR NEWSLETTER / JOIN OUR Newsletter */}
        <NewsletterSection
          onPromoCodeUnlocked={(code) => {
            setUnlockedPromo(code);
            showToast(`Promo ${code} added! You saved $5.00.`);
          }}
        />

        {/* Section 8: GET IN TOUCH / Contact Form & Roastery Address */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Shopping Order Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        unlockedPromo={unlockedPromo}
      />

      {/* Drink Detail & Customization Modal */}
      <DetailModal
        item={selectedItemForDetail}
        isOpen={!!selectedItemForDetail}
        onClose={() => setSelectedItemForDetail(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Roastery Heritage & Story Modal */}
      <StoryModal
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
        onExploreMenu={() => scrollToSection('menu')}
      />

      {/* Skills & Statistics Detail Modal */}
      <StatsModal
        statId={activeStatId}
        onClose={() => setActiveStatId(null)}
        onExploreMenu={() => scrollToSection('menu')}
      />
    </div>
  );
}
