import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GalleryLightbox } from "../components/gallery/GalleryLightbox";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { galleryCategories, galleryItems } from "../data/siteData";

export function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Our Gallery | DigitalMozo Institute – Training, Events & Life";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (itemIndex: number) => {
    setActiveImageIndex(itemIndex);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex(
        (activeImageIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50/60 pb-24">
        {/* Page Banner Header */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-18 sm:py-24 text-center text-white border-b border-slate-800">
          <div className="absolute inset-0 bg-radial from-transparent via-slate-950/40 to-slate-950/80" />
          <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600/30 border border-blue-500/40 px-4 py-1 text-xs font-bold uppercase tracking-wider text-blue-300 shadow-xs mb-4">
              Visual Highlights
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Our Gallery
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              A glimpse into our training, student activities, events and campus life.
            </p>

            {/* Breadcrumb */}
            <div className="mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-400">
              <Link to="/" className="hover:text-blue-400 transition">
                Home
              </Link>
              <span>/</span>
              <span className="text-white font-bold">Gallery</span>
            </div>
          </div>
        </section>

        {/* Gallery Content Area */}
        <section className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {galleryCategories.map((category) => {
              const count =
                category === "All"
                  ? galleryItems.length
                  : galleryItems.filter((item) => item.category === category).length;

              const isSelected = selectedCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(category);
                    setActiveImageIndex(null);
                  }}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 shadow-2xs ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/20 scale-[1.02]"
                      : "bg-white text-slate-700 border border-slate-200/80 hover:bg-slate-50 hover:text-blue-600 hover:border-blue-200"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-extrabold ${
                      isSelected ? "bg-blue-700 text-white" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Gallery Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <article
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-300"
              >
                {/* Image Box */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
                    loading="lazy"
                  />
                  {/* Subtle Dark Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/90 text-white shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </span>
                  </div>

                  {/* Category Pill Tag */}
                  <span className="absolute top-3 left-3 rounded-full bg-slate-900/80 backdrop-blur-md px-3 py-0.5 text-[11px] font-bold text-white shadow-xs">
                    {item.category}
                  </span>
                </div>

                {/* Caption Card Footer */}
                <div className="p-4 bg-white border-t border-slate-100">
                  <h3 className="text-sm font-bold text-slate-900 truncate group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State Fallback (Defensive) */}
          {filteredItems.length === 0 && (
            <div className="py-20 text-center text-slate-500">
              <p className="text-base font-semibold">No images found in this category.</p>
            </div>
          )}
        </section>

        {/* Gallery CTA */}
        <section className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8 mt-20">
          <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-950 p-8 sm:p-12 text-center text-white shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Be a Part of Our Growing Learning Community
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-blue-100">
              Join hands-on practical batches at DigitalMozo Institute and build a thriving career with government-certified skills.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/#admissions"
                className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-amber-600 transition-all hover:-translate-y-0.5"
              >
                Apply for Admission
              </Link>
              <Link
                to="/#academics"
                className="inline-flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-white/20 transition-all hover:-translate-y-0.5"
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <GalleryLightbox
          items={filteredItems}
          currentIndex={activeImageIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}
