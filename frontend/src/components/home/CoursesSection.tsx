import { courses } from "../../data/siteData";
import { SectionHeading } from "../common/SectionHeading";
import { primaryButtonClass } from "../common/styles";

export function CoursesSection() {
  return (
    <section id="academics" className="scroll-mt-20 bg-slate-50/70 py-20 md:py-28 border-b border-slate-100">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic Offerings"
          title="Explore Our Comprehensive Programs"
          description="At DigitalMozo Institute, we offer industry-aligned vocational and technical courses designed to equip you with practical skills and secure a thriving career."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.title}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-300"
            >
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={course.image}
                  alt={course.alt}
                  loading="lazy"
                />
                {course.badge && (
                  <span className="absolute top-3 right-3 rounded-full bg-slate-900/80 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-300 shadow-md">
                    {course.badge}
                  </span>
                )}
              </div>

              <div className="flex grow flex-col p-6 sm:p-7">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {course.description}
                </p>

                <div className="mt-5 grow border-t border-slate-100 pt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    Core Curriculum Focus:
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    {course.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2">
                        <span className="mt-0.5 font-bold text-emerald-600" aria-hidden="true">
                          ✓
                        </span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  className={`${primaryButtonClass} mt-6 w-full text-center`}
                  href="#admission-form"
                >
                  Inquire For Admission
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
