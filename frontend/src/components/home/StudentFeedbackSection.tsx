import { studentFeedbacks } from "../../data/siteData";
import { SectionHeading } from "../common/SectionHeading";

export function StudentFeedbackSection() {
  return (
    <section id="student-feedback" className="scroll-mt-20 bg-white py-20 md:py-28 border-b border-slate-100">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Testimonials"
          title="What Our Trainees Say"
          description="Real experiences and reflections from students who transformed their career trajectories at DigitalMozo Institute."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {studentFeedbacks.map((item) => (
            <article
              key={item.name}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-8 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-300"
            >
              <div>
                {/* Top Circular Student Image */}
                <div className="flex justify-center">
                  <div className="relative h-20 w-20 sm:h-24 sm:w-24 shrink-0 overflow-hidden rounded-full border-4 border-white ring-4 ring-blue-500/15 shadow-md transition-transform duration-300 group-hover:scale-105">
                    <img
                      className="h-full w-full rounded-full object-cover object-top"
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quotation Icon */}
                <div className="mt-5 flex justify-center text-blue-600/30">
                  <svg
                    className="h-7 w-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Feedback Content */}
                <p className="mt-3 text-center text-sm leading-relaxed text-slate-600 italic">
                  "{item.feedback}"
                </p>
              </div>

              {/* Student Name */}
              <div className="mt-6 border-t border-slate-100 pt-4 text-center">
                <p className="text-sm font-bold text-slate-900 tracking-wide">
                  {item.name}
                </p>
                <p className="text-xs text-blue-600 font-medium">DigitalMozo Alumnus</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
