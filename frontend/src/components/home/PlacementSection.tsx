import { placementRecords, placementStats } from "../../data/siteData";
import { SectionHeading } from "../common/SectionHeading";
import { primaryButtonClass } from "../common/styles";

export function PlacementSection() {
  return (
    <section id="placement-record" className="scroll-mt-20 bg-[#f9f9f9] py-16 md:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <SectionHeading
          title="Our Placement Record"
          description="At DigitalMozo Institute, our commitment to your career success is paramount. We are proud to boast a 100% placement assistance record, with our graduates thriving in top companies across various industries. Your success is our success!"
        />

        {/* Stats Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {placementStats.map((stat) => (
            <article
              key={stat.label}
              className="group rounded-2xl border-b-[5px] border-[#3498db] bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-4xl font-extrabold text-[#2c3e50] group-hover:text-[#3498db] transition-colors">
                {stat.value}
              </h3>
              <p className="mt-2 text-base font-semibold text-gray-500">{stat.label}</p>
            </article>
          ))}
        </div>

        {/* Placed Students Section */}
        <div className="mt-20 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#3498db]">
            Recent Placements
          </span>
          <h2 className="mt-3 text-3xl font-bold text-[#2c3e50] md:text-4xl">
            Our Placed Students
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Celebrating our graduates stepping into rewarding professional roles across top organizations.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {placementRecords.map((student) => (
            <article
              key={student.name}
              className="group flex flex-col items-center justify-between rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex flex-col items-center w-full">
                <div className="relative mb-5 h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-white ring-4 ring-[#3498db]/20 shadow-md transition-transform duration-300 group-hover:scale-105">
                  <img
                    className="h-full w-full rounded-full object-cover object-top"
                    src={student.image}
                    alt={student.name}
                    loading="lazy"
                  />
                </div>

                <h3 className="text-xl font-bold text-[#2c3e50]">{student.name}</h3>
                <p className="mt-1 text-sm font-medium text-gray-500 flex items-center justify-center gap-1">
                  <svg
                    className="h-4 w-4 text-[#3498db]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {student.location}
                </p>

                <div className="mt-5 w-full border-t border-gray-100 pt-5">
                  <p className="text-sm font-semibold text-[#3498db]">{student.designation}</p>
                  <p className="mt-1.5 text-sm font-medium text-gray-700 leading-snug">
                    {student.company}
                  </p>
                </div>
              </div>

              {student.ctc ? (
                <div className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-4 py-1 text-xs font-bold text-emerald-700 border border-emerald-200 shadow-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>CTC: {student.ctc}</span>
                </div>
              ) : null}
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 rounded-2xl bg-gradient-to-r from-[#2c3e50] to-[#34495e] p-8 text-center text-white shadow-xl md:p-12">
          <h3 className="text-2xl font-bold md:text-3xl">Ready to write your own success story?</h3>
          <p className="mx-auto mt-2 max-w-xl text-gray-300 text-sm md:text-base">
            Join hundreds of successful graduates. Apply today and get 100% placement support.
          </p>
          <a
            className={`${primaryButtonClass} mt-6 inline-block px-8 py-3 text-base shadow-lg`}
            href="#admission-form"
          >
            Enroll Now & Get Placed!
          </a>
        </div>
      </div>
    </section>
  );
}


