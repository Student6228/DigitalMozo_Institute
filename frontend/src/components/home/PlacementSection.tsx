import { placementRecords, placementStats } from "../../data/siteData";
import { SectionHeading } from "../common/SectionHeading";
import { primaryButtonClass } from "../common/styles";

export function PlacementSection() {
  return (
    <section id="placement-record" className="scroll-mt-20 bg-slate-50/70 py-20 md:py-28 border-b border-slate-100">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Track Record"
          title="Our Placement Record"
          description="At DigitalMozo Institute, your career outcome is our top priority. We provide 100% placement assistance, connecting skilled graduates directly with reputed industries."
        />

        {/* Stats Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {placementStats.map((stat, idx) => (
            <article
              key={stat.label}
              className="group rounded-2xl bg-white p-7 text-center border border-slate-200/80 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-300 relative overflow-hidden"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1 ${
                  idx % 2 === 0 ? "bg-blue-600" : "bg-amber-500"
                }`}
              />
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                {stat.value}
              </h3>
              <p className="mt-2 text-sm font-semibold text-slate-500">{stat.label}</p>
            </article>
          ))}
        </div>

        {/* Placed Students Heading */}
        <div className="mt-20 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200/60 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-600">
            Alumni Success
          </span>
          <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
            Graduates Placed in Leading Organizations
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600">
            Celebrating our students stepping into rewarding safety, engineering, and digital roles.
          </p>
        </div>

        {/* Placed Students Grid */}
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {placementRecords.map((student) => (
            <article
              key={student.name}
              className="group flex flex-col items-center justify-between rounded-2xl bg-white border border-slate-200/80 p-8 text-center shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-300"
            >
              <div className="flex flex-col items-center w-full">
                <div className="relative mb-5 h-24 w-24 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-full border-4 border-white ring-4 ring-blue-500/10 shadow-md transition-transform duration-300 group-hover:scale-105">
                  <img
                    className="h-full w-full rounded-full object-cover object-top"
                    src={student.image}
                    alt={student.name}
                    loading="lazy"
                  />
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-slate-900">{student.name}</h4>
                <p className="mt-1 text-xs font-semibold text-slate-500 flex items-center justify-center gap-1">
                  <svg className="h-3.5 w-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{student.location}</span>
                </p>

                <div className="mt-5 w-full border-t border-slate-100 pt-4">
                  <p className="text-xs sm:text-sm font-bold text-blue-600">{student.designation}</p>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-slate-700 leading-snug">
                    {student.company}
                  </p>
                </div>
              </div>

              {student.ctc ? (
                <div className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-700 border border-emerald-200 shadow-2xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Package: {student.ctc}</span>
                </div>
              ) : null}
            </article>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-blue-950 p-8 text-center text-white shadow-xl md:p-12 border border-slate-800">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Ready to write your own career success story?</h3>
          <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-slate-300">
            Join hundreds of successful graduates with 100% dedicated placement support from day one.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a className={primaryButtonClass} href="#admission-form">
              Enroll Now & Get Placed
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
