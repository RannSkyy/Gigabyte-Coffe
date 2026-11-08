import React, { useState } from 'react';
import { CartItem, calculateCartTotals, formatCurrency } from '../utils/coffeeUtils.ts';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
  unlockedPromo?: string | null;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  unlockedPromo,
}) => {
  const [promoInput, setPromoInput] = useState(unlockedPromo || '');
  const [appliedPromo, setAppliedPromo] = useState<string | null>(unlockedPromo || null);
  const [promoError, setPromoError] = useState<string | null>(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isOpen) return null;

  const totals = calculateCartTotals(cart, appliedPromo || undefined);

  const applyPromoCode = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError(null);
    const code = promoInput.trim().toUpperCase();

    if (code === 'GIGA10' || code === 'FIRSTCUP') {
      setAppliedPromo(code);
    } else {
      setPromoError('Invalid coupon code. Try "GIGA10" or "FIRSTCUP"!');
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
      setTimeout(() => {
        onClearCart();
        setOrderComplete(false);
        onClose();
      }, 2500);
    }, 1200);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Order Cart"
      className="fixed inset-0 z-50 overflow-hidden"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#161311] border-l border-stone-800 text-white flex flex-col shadow-2xl relative">
          {/* Header */}
          <div className="p-6 border-b border-stone-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#c99558]/20 text-[#e6b17e] flex items-center justify-center">
                <i className="fa-solid fa-basket-shopping text-xs"></i>
              </div>
              <h3 className="font-bold text-lg text-white">Your Coffee Order</h3>
              <span className="text-xs px-2 py-0.5 rounded-full bg-stone-800 text-stone-300">
                {totals.itemCount} items
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close cart"
              className="w-8 h-8 rounded-full bg-stone-800/80 hover:bg-stone-700 text-stone-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <i className="fa-solid fa-xmark text-sm"></i>
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {orderComplete ? (
              <div className="text-center py-16 space-y-4 animate-scale-in">
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto text-3xl">
                  <i className="fa-solid fa-mug-hot"></i>
                </div>
                <h4 className="text-2xl font-bold text-white">Order Confirmed!</h4>
                <p className="text-xs text-stone-300 max-w-xs mx-auto leading-relaxed">
                  Our baristas are crafting your artisanal drinks right now at our Milk Street bar.
                </p>
                <div className="p-3 rounded-2xl bg-[#201b17] border border-stone-800 text-xs text-[#e6b17e] font-mono">
                  Order ID: #GB-{(Math.random() * 90000 + 10000).toFixed(0)}
                </div>
              </div>
            ) : cart.length === 0 ? (
              <div className="text-center py-20 space-y-3">
                <div className="w-16 h-16 rounded-full bg-stone-800/50 flex items-center justify-center mx-auto text-stone-500 text-2xl">
                  <i className="fa-solid fa-mug-saucer"></i>
                </div>
                <h4 className="font-bold text-white text-base">Your cart is empty</h4>
                <p className="text-xs text-stone-400 max-w-xs mx-auto">
                  Explore our Best Menu and add handcrafted coffee or matcha to your bag.
                </p>
                <button
                  onClick={onClose}
                  className="mt-3 px-5 py-2 rounded-full bg-[#c99558] text-[#12100e] text-xs font-bold hover:bg-[#e6b17e] transition-colors"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              cart.map((cartItem, idx) => {
                const multiplier = cartItem.size === 'Large' ? 1.25 : 1.0;
                const unitPrice = cartItem.item.price * multiplier;
                const lineTotal = unitPrice * cartItem.quantity;

                return (
                  <div
                    key={`${cartItem.item.id}-${idx}`}
                    className="p-3.5 rounded-2xl bg-[#1e1916] border border-stone-800/90 flex gap-3.5 items-center justify-between"
                  >
                    <img
                      src={cartItem.item.image}
                      alt={cartItem.item.name}
                      className="w-16 h-16 rounded-xl object-cover border border-stone-700/60 flex-shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <h5 className="font-bold text-sm text-white truncate">
                        {cartItem.item.name}
                      </h5>
                      <div className="flex items-center gap-1.5 text-[11px] text-[#e6b17e] mt-0.5">
                        <span className="px-1.5 py-0.2 rounded bg-stone-800 text-stone-300">
                          {cartItem.temperature || 'Hot'}
                        </span>
                        <span className="px-1.5 py-0.2 rounded bg-stone-800 text-stone-300">
                          {cartItem.size || 'Regular'}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-stone-300 mt-1">
                        {formatCurrency(lineTotal)}
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <button
                        onClick={() => onRemoveItem(idx)}
                        aria-label={`Remove ${cartItem.item.name}`}
                        className="text-stone-500 hover:text-red-400 text-xs p-1"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>

                      <div className="flex items-center gap-2 bg-[#12100e] border border-stone-700 rounded-lg p-0.5">
                        <button
                          onClick={() => onUpdateQuantity(idx, cartItem.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center text-stone-400 hover:text-white text-xs"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold text-white px-1">
                          {cartItem.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(idx, cartItem.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center text-stone-400 hover:text-white text-xs"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Totals & Checkout */}
          {cart.length > 0 && !orderComplete && (
            <div className="p-6 border-t border-stone-800 bg-[#14110f] space-y-4">
              {/* Promo Code input */}
              <form onSubmit={applyPromoCode} className="flex gap-2">
                <input
                  type="text"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  placeholder="Promo Code (e.g. GIGA10)"
                  className="flex-1 px-3 py-1.5 rounded-xl bg-[#1e1916] border border-stone-700 text-xs text-white uppercase placeholder:text-stone-500 focus:outline-none focus:border-[#c99558]"
                />
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-xl bg-stone-800 hover:bg-[#c99558] hover:text-stone-900 text-xs font-semibold transition-colors"
                >
                  Apply
                </button>
              </form>

              {appliedPromo && (
                <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <i className="fa-solid fa-tag"></i> Coupon '{appliedPromo}' applied!
                </p>
              )}
              {promoError && (
                <p className="text-[11px] text-red-400">{promoError}</p>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-stone-400 pt-2 border-t border-stone-800/80">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-stone-200">{formatCurrency(totals.subtotal)}</span>
                </div>
                {totals.discount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount</span>
                    <span>-{formatCurrency(totals.discount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Tax (10%)</span>
                  <span className="text-stone-200">{formatCurrency(totals.tax)}</span>
                </div>
                <div className="flex justify-between text-sm font-black text-white pt-2 border-t border-stone-800">
                  <span>Total Amount</span>
                  <span className="text-[#e6b17e]">{formatCurrency(totals.total)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full py-3.5 rounded-full bg-[#c99558] hover:bg-[#e6b17e] text-[#12100e] font-bold text-sm tracking-wide transition-all shadow-lg shadow-[#c99558]/20 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-60 cursor-pointer"
              >
                {isCheckingOut ? (
                  <>
                    <i className="fa-solid fa-circle-notch fa-spin text-sm"></i>
                    <span>Preparing Payment...</span>
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-lock text-xs"></i>
                    <span>Checkout Now ({formatCurrency(totals.total)})</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
