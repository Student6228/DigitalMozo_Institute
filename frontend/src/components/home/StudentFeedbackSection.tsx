import { studentFeedbacks } from "../../data/siteData";
import { SectionHeading } from "../common/SectionHeading";

export function StudentFeedbackSection() {
  return (
    <section id="student-feedback" className="scroll-mt-20 bg-white py-16 md:py-24 border-t border-gray-100">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <SectionHeading
          title="What Our Students Say"
          description="Hear from our students about their learning and career journey with Digital Mozo Institute."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {studentFeedbacks.map((item) => (
            <article
              key={item.name}
              className="group flex flex-col justify-between rounded-2xl border border-gray-100 bg-[#fbfcfd] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-[#3498db]/30"
            >
              <div>
                {/* Top Circular Student Image */}
                <div className="flex justify-center">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-4 border-white ring-4 ring-[#3498db]/20 shadow-md transition-transform duration-300 group-hover:scale-105">
                    <img
                      className="h-full w-full rounded-full object-cover object-top"
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quotation Icon */}
                <div className="mt-6 flex justify-center text-[#3498db]/40">
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Feedback Content */}
                <p className="mt-4 text-center text-sm leading-relaxed text-gray-600 italic">
                  “{item.feedback}”
                </p>
              </div>

              {/* Student Name */}
              <div className="mt-6 border-t border-gray-100/80 pt-4 text-center">
                <p className="text-sm font-semibold text-[#2c3e50] tracking-wide">
                  — {item.name}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
