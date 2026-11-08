import React, { useState } from 'react';
import { CUSTOMER_REVIEWS, CustomerReview } from '../data/coffeeData.ts';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<CustomerReview[]>(CUSTOMER_REVIEWS);
  const [activeDot, setActiveDot] = useState(1);
  const [showReviewModal, setShowReviewModal] = useState(false);

  // New review form state
  const [newReviewerName, setNewReviewerName] = useState('');
  const [newReviewerRole, setNewReviewerRole] = useState('Coffee Lover');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewerName.trim() || !newComment.trim()) return;

    const newRev: CustomerReview = {
      id: `rev-${Date.now()}`,
      name: newReviewerName.trim(),
      role: newReviewerRole.trim() || 'Verified Customer',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      rating: newRating,
      comment: newComment.trim(),
      date: 'Just now',
    };

    setReviews([newRev, ...reviews]);
    setReviewSubmitted(true);
    setTimeout(() => {
      setShowReviewModal(false);
      setReviewSubmitted(false);
      setNewReviewerName('');
      setNewComment('');
    }, 1500);
  };

  return (
    <section
      id="reviews"
      className="relative bg-[#faf7f2] text-stone-900 py-20 sm:py-28 overflow-hidden"
    >
      {/* Decorative Dashed Waves */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <path
          d="M 20 200 C 300 40 800 350 1420 180"
          fill="none"
          stroke="#c99558"
          strokeWidth="1.2"
          strokeDasharray="6 8"
          strokeOpacity="0.3"
        />
        <path
          d="M 50 680 C 450 500 950 720 1400 560"
          fill="none"
          stroke="#161311"
          strokeWidth="1"
          strokeDasharray="5 7"
          strokeOpacity="0.15"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4">
          <div className="text-left">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-stone-600 block mb-1">
              OUR REVIEWS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 tracking-tight flex items-baseline gap-3 flex-wrap">
              <span>OUR HAPPY</span>
              <span className="font-script text-[#c99558] text-4xl sm:text-5xl font-normal">
                Customers
              </span>
            </h2>
          </div>

          <button
            onClick={() => setShowReviewModal(true)}
            className="px-5 py-2.5 rounded-full bg-stone-900 text-white hover:bg-[#c99558] hover:text-stone-950 text-xs font-semibold tracking-wide transition-all shadow-sm flex items-center gap-2"
          >
            <i className="fa-solid fa-pen-to-square text-xs"></i>
            <span>Leave a Review</span>
          </button>
        </div>

        {/* 4 Testimonial Cards Grid Matching Reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.slice(0, 4).map((rev) => (
            <div
              key={rev.id}
              className="bg-[#ede7dd]/70 hover:bg-[#eae2d5] border border-stone-200/90 rounded-3xl p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Top Avatar Circle & Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden p-0.5 border border-[#c99558]/60 bg-white shadow-sm flex-shrink-0">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-full h-full object-cover rounded-full"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900 leading-tight">
                      {rev.name}
                    </h4>
                    <p className="text-[11px] text-stone-600 leading-tight">
                      {rev.role}
                    </p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex text-amber-500 text-xs mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i
                      key={i}
                      className={`fa-solid fa-star ${
                        i < rev.rating ? 'text-amber-500' : 'text-stone-300'
                      }`}
                    ></i>
                  ))}
                </div>

                {/* Review Quote matching reference */}
                <p className="text-xs text-stone-700 leading-relaxed italic line-clamp-4">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-300/60 flex items-center justify-between text-[11px] text-stone-600">
                <span className="flex items-center gap-1">
                  <i className="fa-solid fa-circle-check text-emerald-600 text-[10px]"></i>
                  Verified Order
                </span>
                <span>{rev.date}</span>
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
              aria-label={`Go to review page ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[#c99558] ${
                activeDot === idx
                  ? 'w-7 bg-[#c99558]'
                  : 'w-2.5 bg-stone-300 hover:bg-stone-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Review Submission Modal */}
      {showReviewModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-stone-200 relative animate-scale-in">
            <button
              onClick={() => setShowReviewModal(false)}
              aria-label="Close modal"
              className="absolute top-5 right-5 text-stone-400 hover:text-stone-800 p-1 rounded-full"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>

            <div className="text-left mb-5">
              <span className="text-xs uppercase tracking-widest font-bold text-[#c99558]">
                Customer Feedback
              </span>
              <h3 className="text-xl font-bold text-stone-900">Share Your Experience</h3>
            </div>

            {reviewSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl">
                  <i className="fa-solid fa-check"></i>
                </div>
                <h4 className="text-base font-bold text-stone-900">Thank you for your review!</h4>
                <p className="text-xs text-stone-500">Your review was added to our customer feed.</p>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={newReviewerName}
                    onChange={(e) => setNewReviewerName(e.target.value)}
                    placeholder="e.g. Alex Johnson"
                    className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-xs sm:text-sm focus:border-[#c99558] focus:ring-1 focus:ring-[#c99558] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Rating
                  </label>
                  <div className="flex gap-2 text-xl text-amber-400 cursor-pointer">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewRating(star)}
                        className="focus:outline-none"
                      >
                        <i
                          className={`fa-solid fa-star ${
                            star <= newRating ? 'text-amber-500' : 'text-stone-300'
                          }`}
                        ></i>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Review
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Tell us about the coffee, taste, vibe, or barista service..."
                    className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-xs sm:text-sm focus:border-[#c99558] focus:ring-1 focus:ring-[#c99558] outline-none"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowReviewModal(false)}
                    className="flex-1 py-2.5 rounded-xl border border-stone-300 text-stone-600 text-xs font-semibold hover:bg-stone-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl bg-stone-900 text-white hover:bg-[#c99558] hover:text-stone-900 text-xs font-semibold shadow-md transition-colors"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
