import React, { useState } from 'react';
import { GALLERY_PHOTOS, GalleryPhoto } from '../data/coffeeData.ts';

export const GallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const openPhoto = (photo: GalleryPhoto) => {
    setSelectedPhoto(photo);
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction: 'next' | 'prev') => {
    if (!selectedPhoto) return;
    const currentIndex = GALLERY_PHOTOS.findIndex((p) => p.id === selectedPhoto.id);
    if (currentIndex === -1) return;

    let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (nextIndex >= GALLERY_PHOTOS.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = GALLERY_PHOTOS.length - 1;

    setSelectedPhoto(GALLERY_PHOTOS[nextIndex]);
  };

  return (
    <section
      id="gallery"
      className="relative bg-[#12100e] text-white py-20 sm:py-28 overflow-hidden"
    >
      {/* Decorative Dotted Curves */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <path
          d="M 100 400 C 500 150 900 650 1350 350"
          fill="none"
          stroke="#c99558"
          strokeWidth="1.2"
          strokeDasharray="6 8"
          strokeOpacity="0.25"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-left">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-stone-400 block mb-1">
            GALLERY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight flex items-baseline gap-3 flex-wrap">
            <span>OUR</span>
            <span className="font-script text-[#d4a373] text-4xl sm:text-5xl font-normal">
              Gallery
            </span>
          </h2>
        </div>

        {/* Mosaic Coffee Photo Grid Matching Reference */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[160px] sm:auto-rows-[190px]">
          {/* Photo 1: Big Feature (Latte art) */}
          <div
            onClick={() => openPhoto(GALLERY_PHOTOS[0])}
            className="col-span-1 row-span-1 sm:row-span-2 group relative overflow-hidden rounded-2xl bg-stone-900 cursor-pointer border border-stone-800"
          >
            <img
              src={GALLERY_PHOTOS[0].url}
              alt={GALLERY_PHOTOS[0].title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-95 group-hover:brightness-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
              <p className="text-xs font-bold text-white">{GALLERY_PHOTOS[0].title}</p>
              <p className="text-[11px] text-stone-300">{GALLERY_PHOTOS[0].subtitle}</p>
            </div>
          </div>

          {/* Photo 2: Single Ceramic Cup */}
          <div
            onClick={() => openPhoto(GALLERY_PHOTOS[1])}
            className="col-span-1 row-span-1 group relative overflow-hidden rounded-2xl bg-stone-900 cursor-pointer border border-stone-800"
          >
            <img
              src={GALLERY_PHOTOS[1].url}
              alt={GALLERY_PHOTOS[1].title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-3 flex items-center justify-center">
              <span className="w-8 h-8 rounded-full bg-[#c99558] text-[#12100e] flex items-center justify-center text-xs">
                <i className="fa-solid fa-expand"></i>
              </span>
            </div>
          </div>

          {/* Photo 3: Espresso Bar */}
          <div
            onClick={() => openPhoto(GALLERY_PHOTOS[2])}
            className="col-span-1 row-span-1 sm:col-span-2 group relative overflow-hidden rounded-2xl bg-stone-900 cursor-pointer border border-stone-800"
          >
            <img
              src={GALLERY_PHOTOS[2].url}
              alt={GALLERY_PHOTOS[2].title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
              <p className="text-xs font-bold text-white">{GALLERY_PHOTOS[2].title}</p>
              <p className="text-[11px] text-[#e6b17e]">{GALLERY_PHOTOS[2].subtitle}</p>
            </div>
          </div>

          {/* Photo 4: Roasted Beans */}
          <div
            onClick={() => openPhoto(GALLERY_PHOTOS[3])}
            className="col-span-1 row-span-1 group relative overflow-hidden rounded-2xl bg-stone-900 cursor-pointer border border-stone-800"
          >
            <img
              src={GALLERY_PHOTOS[3].url}
              alt={GALLERY_PHOTOS[3].title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <i className="fa-solid fa-plus text-white text-base"></i>
            </div>
          </div>

          {/* Photo 5: Manual V60 Dripper */}
          <div
            onClick={() => openPhoto(GALLERY_PHOTOS[4])}
            className="col-span-1 row-span-1 sm:row-span-2 group relative overflow-hidden rounded-2xl bg-stone-900 cursor-pointer border border-stone-800"
          >
            <img
              src={GALLERY_PHOTOS[4].url}
              alt={GALLERY_PHOTOS[4].title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
              <p className="text-xs font-bold text-white">{GALLERY_PHOTOS[4].title}</p>
              <p className="text-[11px] text-stone-300">{GALLERY_PHOTOS[4].subtitle}</p>
            </div>
          </div>

          {/* Photo 6: Heart Latte Art */}
          <div
            onClick={() => openPhoto(GALLERY_PHOTOS[5])}
            className="col-span-1 row-span-1 group relative overflow-hidden rounded-2xl bg-stone-900 cursor-pointer border border-stone-800"
          >
            <img
              src={GALLERY_PHOTOS[5].url}
              alt={GALLERY_PHOTOS[5].title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-xs font-medium text-white px-3 py-1 bg-black/60 rounded-full border border-white/20">
                View Pour
              </span>
            </div>
          </div>

          {/* Photo 7: Blue Cup Signature */}
          <div
            onClick={() => openPhoto(GALLERY_PHOTOS[6])}
            className="col-span-1 row-span-1 group relative overflow-hidden rounded-2xl bg-stone-900 cursor-pointer border border-stone-800"
          >
            <img
              src={GALLERY_PHOTOS[6].url}
              alt={GALLERY_PHOTOS[6].title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
              <p className="text-xs font-bold text-white">{GALLERY_PHOTOS[6].title}</p>
            </div>
          </div>

          {/* Photo 8: Lounge Vibe */}
          <div
            onClick={() => openPhoto(GALLERY_PHOTOS[7])}
            className="col-span-1 sm:col-span-2 row-span-1 group relative overflow-hidden rounded-2xl bg-stone-900 cursor-pointer border border-stone-800"
          >
            <img
              src={GALLERY_PHOTOS[7].url}
              alt={GALLERY_PHOTOS[7].title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
              <p className="text-xs font-bold text-white">{GALLERY_PHOTOS[7].title}</p>
              <p className="text-[11px] text-stone-300">{GALLERY_PHOTOS[7].subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          {/* Close button */}
          <button
            onClick={closePhoto}
            aria-label="Close photo preview"
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-[#c99558] hover:text-[#12100e] text-white flex items-center justify-center transition-colors z-20 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <i className="fa-solid fa-xmark text-lg"></i>
          </button>

          {/* Prev Button */}
          <button
            onClick={() => navigatePhoto('prev')}
            aria-label="Previous photo"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-[#c99558] hover:text-[#12100e] text-white flex items-center justify-center transition-colors z-20"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          {/* Next Button */}
          <button
            onClick={() => navigatePhoto('next')}
            aria-label="Next photo"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-[#c99558] hover:text-[#12100e] text-white flex items-center justify-center transition-colors z-20"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center bg-[#181412] rounded-3xl overflow-hidden border border-stone-800 shadow-2xl relative">
            <div className="w-full max-h-[70vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="max-h-[65vh] w-auto object-contain"
              />
            </div>
            <div className="p-5 text-center w-full bg-[#181412] border-t border-stone-800/80">
              <h3 className="text-lg font-bold text-white">{selectedPhoto.title}</h3>
              <p className="text-sm text-[#d4a373] font-script">{selectedPhoto.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
