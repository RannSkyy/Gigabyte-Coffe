import React, { useState } from 'react';
import { validateContactForm, ContactFormState } from '../utils/coffeeUtils.ts';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: '',
      });
    }, 900);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#181412] text-white py-20 sm:py-28 overflow-hidden curved-top-dark shadow-2xl"
    >
      {/* Decorative Dotted Curves */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <path
          d="M 50 150 C 400 350 900 80 1400 300"
          fill="none"
          stroke="#c99558"
          strokeWidth="1.2"
          strokeDasharray="6 8"
          strokeOpacity="0.25"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-stone-400 block mb-1">
            CONNECT WITH US
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight flex items-baseline justify-center gap-3 flex-wrap">
            <span>GET IN</span>
            <span className="font-script text-[#d4a373] text-4xl sm:text-5xl font-normal">
              Touch
            </span>
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm mt-3">
            Have questions about whole bean deliveries, barista workshops, or private event catering? Drop us a note.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details & Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#1f1916] border border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <i className="fa-solid fa-mug-hot text-[#c99558]"></i>
                <span>Roastery & Flagship Cafe</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3 text-stone-300">
                  <div className="w-9 h-9 rounded-full bg-[#2c221a] text-[#e6b17e] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <strong className="block text-white font-semibold">Address</strong>
                    <span>No 101 Milk Street, Vale Roastery District, CA 94103</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-stone-300">
                  <div className="w-9 h-9 rounded-full bg-[#2c221a] text-[#e6b17e] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <strong className="block text-white font-semibold">Phone</strong>
                    <a href="tel:+12345667845" className="hover:text-[#c99558] transition-colors">
                      +1 234 5667 845
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-stone-300">
                  <div className="w-9 h-9 rounded-full bg-[#2c221a] text-[#e6b17e] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <strong className="block text-white font-semibold">Email</strong>
                    <a href="mailto:info@gigabytecoffee.com" className="hover:text-[#c99558] transition-colors">
                      info@gigabytecoffee.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-stone-300">
                  <div className="w-9 h-9 rounded-full bg-[#2c221a] text-[#e6b17e] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="fa-solid fa-clock"></i>
                  </div>
                  <div>
                    <strong className="block text-white font-semibold">Brew Hours</strong>
                    <span>Mon — Fri: 07:00 AM — 10:00 PM</span>
                    <span className="block">Sat — Sun: 08:00 AM — 11:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="pt-4 border-t border-stone-800 flex gap-3">
                <a
                  href="tel:+12345667845"
                  className="flex-1 py-2 px-3 rounded-xl bg-[#2a221b] hover:bg-[#392e24] text-xs font-semibold text-[#e6b17e] text-center border border-[#443528] transition-colors"
                >
                  <i className="fa-solid fa-phone mr-1.5"></i> Call Cafe
                </a>
                <a
                  href="mailto:info@gigabytecoffee.com"
                  className="flex-1 py-2 px-3 rounded-xl bg-[#2a221b] hover:bg-[#392e24] text-xs font-semibold text-stone-200 text-center border border-[#443528] transition-colors"
                >
                  <i className="fa-solid fa-envelope mr-1.5"></i> Email Us
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#1f1916] border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-xl">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4 animate-scale-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-3xl border border-emerald-500/40">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Received!</h3>
                  <p className="text-xs sm:text-sm text-stone-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Gigabyte Coffee. Our head barista will reply to your message within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#c99558] text-[#12100e] text-xs font-bold hover:bg-[#e6b17e] transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                        Your Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Wick"
                        required
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#14110f] border text-xs sm:text-sm text-white placeholder:text-stone-500 focus:outline-none focus:ring-1 transition-all ${
                          errors.name
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-stone-700 focus:border-[#c99558] focus:ring-[#c99558]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-[11px] mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#14110f] border text-xs sm:text-sm text-white placeholder:text-stone-500 focus:outline-none focus:ring-1 transition-all ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-stone-700 focus:border-[#c99558] focus:ring-[#c99558]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-[11px] mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#14110f] border border-stone-700 text-xs sm:text-sm text-white placeholder:text-stone-500 focus:outline-none focus:border-[#c99558] focus:ring-1 focus:ring-[#c99558] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                        Subject Topic
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#14110f] border border-stone-700 text-xs sm:text-sm text-white focus:outline-none focus:border-[#c99558] focus:ring-1 focus:ring-[#c99558] transition-all"
                      >
                        <option value="General Inquiry">General Coffee Question</option>
                        <option value="Wholesale Beans">Wholesale Beans & Roastery</option>
                        <option value="Table Reservation">Table Reservation / Event</option>
                        <option value="Barista Training">Barista Workshop Class</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                      Your Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your note or question here..."
                      required
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#14110f] border text-xs sm:text-sm text-white placeholder:text-stone-500 focus:outline-none focus:ring-1 transition-all ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-stone-700 focus:border-[#c99558] focus:ring-[#c99558]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-[11px] mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full bg-[#c99558] text-[#12100e] hover:bg-[#e6b17e] font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-[#c99558]/20 disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fa-solid fa-circle-notch fa-spin text-sm"></i>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <i className="fa-solid fa-paper-plane text-xs"></i>
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
