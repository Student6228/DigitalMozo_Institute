import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { sliderData } from "../../data/siteData";
import { primaryButtonClass, secondaryButtonClass } from "../common/styles";

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const autoPlayRef = useRef<number | null>(null);

  const totalSlides = sliderData.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;

    autoPlayRef.current = window.setInterval(() => {
      nextSlide();
    }, 4500);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPaused, currentIndex, totalSlides]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      id="home"
      className="relative w-full overflow-hidden bg-slate-950 select-none group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Image Carousel"
      role="region"
    >
      {/* Slider Container */}
      <div className="relative h-[480px] sm:h-[540px] md:h-[600px] lg:h-[650px] w-full">
        {sliderData.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
              aria-hidden={!isActive}
            >
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.alt}
                className="h-full w-full object-cover object-center transform scale-100 transition-transform duration-7000 ease-out"
                loading={index === 0 ? "eager" : "lazy"}
              />

              {/* Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/70 to-slate-950/50" />
              <div className="absolute inset-0 bg-radial from-transparent via-slate-950/20 to-slate-950/70" />

              {/* Slide Content Overlay */}
              <div className="absolute inset-0 flex items-center">
                <div className="mx-auto w-full max-w-[1320px] px-6 sm:px-8 lg:px-12">
                  <div className="max-w-2xl text-left">
                    {/* Badge */}
                    <div
                      className={`inline-flex items-center gap-2 rounded-full bg-blue-600/90 backdrop-blur-md px-3.5 py-1 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-lg mb-4 transition-all duration-700 ${
                        isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                    >
                      <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                      <span>{slide.badge}</span>
                    </div>

                    {/* Headline */}
                    <h1
                      className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] transition-all duration-700 delay-100 ${
                        isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                      }`}
                    >
                      {slide.title}
                    </h1>

                    {/* Subtitle */}
                    <p
                      className={`mt-4 sm:mt-5 text-sm sm:text-base md:text-lg leading-relaxed text-slate-200 font-normal transition-all duration-700 delay-200 ${
                        isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                      }`}
                    >
                      {slide.subtitle}
                    </p>

                    {/* CTA Action Buttons */}
                    <div
                      className={`mt-8 flex flex-wrap items-center gap-3 sm:gap-4 transition-all duration-700 delay-300 ${
                        isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                      }`}
                    >
                      <a href={slide.primaryCtaHref} className={primaryButtonClass}>
                        {slide.primaryCtaText}
                      </a>
                      <a href={slide.secondaryCtaHref} className={secondaryButtonClass}>
                        {slide.secondaryCtaText}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20 shadow-xl transition-all duration-200 hover:bg-blue-600 hover:border-blue-600 hover:scale-110 focus-visible:outline-2 focus-visible:outline-white"
        aria-label="Previous Slide"
      >
        <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20 shadow-xl transition-all duration-200 hover:bg-blue-600 hover:border-blue-600 hover:scale-110 focus-visible:outline-2 focus-visible:outline-white"
        aria-label="Next Slide"
      >
        <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination Dot Indicators */}
      <div className="absolute bottom-5 sm:bottom-7 left-0 right-0 z-20 flex items-center justify-center gap-2.5">
        {sliderData.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => goToSlide(idx)}
            className={`transition-all duration-300 rounded-full focus-visible:outline-2 focus-visible:outline-white ${
              idx === currentIndex
                ? "w-8 sm:w-10 h-2.5 sm:h-3 bg-blue-500 shadow-md shadow-blue-500/50"
                : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/50 hover:bg-white/90"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
            aria-current={idx === currentIndex ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  );
}
