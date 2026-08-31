import { useState } from "react";
import { instituteVideo, socialLinks } from "../../data/siteData";
import { SectionHeading } from "../common/SectionHeading";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-white py-20 md:py-28 border-b border-slate-100">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Campus Tour & Experience"
          title={instituteVideo.heading}
          description={instituteVideo.subtitle}
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Video Player Container (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-950 shadow-xl border border-slate-200/80 group">
              {!isPlaying ? (
                <div className="relative h-full w-full">
                  {/* Poster Image */}
                  <img
                    src={instituteVideo.poster}
                    alt="DigitalMozo Institute Video Tour Preview"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 transition-opacity group-hover:bg-slate-950/30" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    <button
                      type="button"
                      onClick={() => setIsPlaying(true)}
                      className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-blue-600 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-white"
                      aria-label="Play video tour"
                    >
                      <svg
                        className="h-7 w-7 sm:h-8 sm:w-8 translate-x-0.5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                    <span className="mt-4 rounded-full bg-slate-900/80 backdrop-blur-md px-4 py-1.5 text-xs sm:text-sm font-semibold text-white">
                      Click to Watch Video Tour
                    </span>
                  </div>
                </div>
              ) : (
                <iframe
                  className="h-full w-full"
                  src={`${instituteVideo.embedUrl}?autoplay=1&rel=0`}
                  title="DigitalMozo Institute Tour"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>
          </div>

          {/* Highlights & Features (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Why Experience Learning with DigitalMozo?
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Get an insider perspective on our modern infrastructure, high-spec equipment, and vibrant learner community in Guwahati.
            </p>

            <div className="space-y-3.5 pt-2">
              {instituteVideo.highlights.map((item, idx) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3.5 rounded-xl border border-slate-100 bg-slate-50/70 p-4 transition-all hover:bg-slate-50 hover:border-blue-200"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600 font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700 transition"
              >
                <span>Visit our YouTube Channel for more student stories</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
