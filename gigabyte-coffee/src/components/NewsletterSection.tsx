import React, { useState } from 'react';
import { isValidEmail } from '../utils/coffeeUtils.ts';

interface NewsletterSectionProps {
  onPromoCodeUnlocked?: (code: string) => void;
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = ({
  onPromoCodeUnlocked,
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [unlockedCode, setUnlockedCode] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!isValidEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      const promo = 'FIRSTCUP';
      setUnlockedCode(promo);
      if (onPromoCodeUnlocked) {
        onPromoCodeUnlocked(promo);
      }
      setEmail('');
    }, 800);
  };

  return (
    <section className="relative bg-white py-16 sm:py-20 text-stone-900 border-t border-stone-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header Matching Reference */}
        <div className="mb-8">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-stone-500 block mb-1">
            OUR NEWSLETTER
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 tracking-tight flex items-baseline justify-center gap-3 flex-wrap">
            <span>JOIN OUR</span>
            <span className="font-script text-[#c99558] text-4xl sm:text-5xl font-normal">
              Newsletter
            </span>
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm mt-3 max-w-md mx-auto">
            Get weekly roastery drops, brewing tips from our champion baristas, and 10% off your first coffee bag.
          </p>
        </div>

        {/* Input Bar Matching Reference */}
        <div className="max-w-xl mx-auto">
          {status === 'success' ? (
            <div className="bg-[#faf7f2] border border-[#c99558]/40 rounded-2xl p-6 text-center animate-fade-in space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto text-xl">
                <i className="fa-solid fa-check"></i>
              </div>
              <h3 className="font-bold text-base text-stone-900">
                Welcome to the Gigabyte Coffee Club!
              </h3>
              <p className="text-xs text-stone-600">
                Use promo code <span className="font-mono font-bold bg-[#c99558]/20 px-2 py-0.5 rounded text-stone-900">{unlockedCode}</span> in your cart for $5 off your first order!
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="text-xs font-semibold text-[#c99558] hover:underline pt-1"
              >
                Subscribe another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative">
              <div className="flex items-center rounded-xl sm:rounded-2xl border-2 border-stone-300 hover:border-stone-400 focus-within:border-[#c99558] bg-white transition-all shadow-sm overflow-hidden p-1 sm:p-1.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="Enter your email address..."
                  aria-label="Email for newsletter"
                  required
                  className="w-full px-4 py-2 sm:py-3 text-xs sm:text-sm text-stone-800 placeholder:text-stone-400 bg-transparent focus:outline-none"
                />

                {/* Send Button matching reference icon */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  aria-label="Subscribe to newsletter"
                  className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-stone-950 text-white hover:bg-[#c99558] hover:text-stone-950 transition-colors flex items-center justify-center font-bold disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <i className="fa-solid fa-circle-notch fa-spin text-sm"></i>
                  ) : (
                    <i className="fa-solid fa-paper-plane text-xs sm:text-sm"></i>
                  )}
                </button>
              </div>

              {status === 'error' && (
                <p className="text-left text-xs text-red-600 mt-2 font-medium flex items-center gap-1.5">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  {errorMessage}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
