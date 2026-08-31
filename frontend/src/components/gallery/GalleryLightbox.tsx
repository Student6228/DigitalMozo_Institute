import { useEffect } from "react";
import { GalleryItem } from "../../data/siteData";

type GalleryLightboxProps = {
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function GalleryLightbox({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: GalleryLightboxProps) {
  const currentItem = items[currentIndex];

  // Handle keyboard keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        onPrev();
      } else if (e.key === "ArrowRight") {
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  if (!currentItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 sm:p-6 lg:p-8 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Image preview modal"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80 text-white">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-blue-600/30 border border-blue-500/40 px-3 py-0.5 text-xs font-bold text-blue-400">
              {currentItem.category}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              Image {currentIndex + 1} of {items.length}
            </span>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition focus-visible:outline-2 focus-visible:outline-white"
            aria-label="Close image modal"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Image Preview with Arrows */}
        <div className="relative flex-1 min-h-[300px] max-h-[65vh] sm:max-h-[70vh] flex items-center justify-center bg-black/60 p-2 sm:p-4 overflow-hidden">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-full max-w-full object-contain rounded-lg transition-all duration-300 select-none shadow-2xl"
          />

          {/* Prev Arrow */}
          <button
            type="button"
            onClick={onPrev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-slate-900/80 border border-slate-700 text-white shadow-xl hover:bg-blue-600 hover:border-blue-600 hover:scale-110 transition focus-visible:outline-2 focus-visible:outline-white"
            aria-label="Previous image"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={onNext}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-slate-900/80 border border-slate-700 text-white shadow-xl hover:bg-blue-600 hover:border-blue-600 hover:scale-110 transition focus-visible:outline-2 focus-visible:outline-white"
            aria-label="Next image"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Caption Bar */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 text-left">
          <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
            {currentItem.title}
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
            {currentItem.caption}
          </p>
        </div>
      </div>
    </div>
  );
}
