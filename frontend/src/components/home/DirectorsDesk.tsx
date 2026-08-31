import { directorInfo } from "../../data/siteData";
import { SectionHeading } from "../common/SectionHeading";

export function DirectorsDesk() {
  return (
    <section className="bg-slate-50/70 py-20 md:py-28 border-b border-slate-100">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Leadership & Vision"
          title="Director's Desk"
          description="Guiding principles and institutional commitment from our institute leadership."
        />

        <div className="mt-14 overflow-hidden rounded-3xl bg-white border border-slate-200/80 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left: Director Photograph with Badge (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 p-8 sm:p-10 flex flex-col items-center text-center h-full justify-center relative overflow-hidden">
              {/* Decorative background ambient effects */}
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue-500/10 blur-2xl" />
              <div className="absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-amber-500/10 blur-2xl" />

              <div className="relative w-full max-w-[320px]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-4 border-white/20 shadow-2xl bg-slate-950">
                  <img
                    src={directorInfo.image}
                    alt={directorInfo.alt}
                    className="h-full w-full object-cover object-top sm:object-center transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-lg whitespace-nowrap">
                  Leadership
                </div>
              </div>

              <h4 className="mt-7 text-xl sm:text-2xl font-bold text-white tracking-tight">
                {directorInfo.name}
              </h4>
              <p className="text-xs sm:text-sm font-semibold text-blue-300 mt-1">
                {directorInfo.designation}
              </p>
              <p className="text-xs text-slate-400 mt-2">DigitalMozo Institute, Guwahati</p>
            </div>

            {/* Right: Message & Highlights (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
              {/* Quote Icon */}
              <div className="mb-6 text-blue-600/30">
                <svg className="h-10 w-10 sm:h-12 sm:w-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
                Director's Message
              </h3>

              <blockquote className="text-base sm:text-lg leading-relaxed text-slate-700 font-medium italic border-l-4 border-blue-600 pl-4 py-1">
                "{directorInfo.quote}"
              </blockquote>

              <div className="mt-8 space-y-2.5 border-t border-slate-100 pt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Commitment to Quality & Employability
                </h4>
                {directorInfo.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                    <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
