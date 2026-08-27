import { placementStats, testimonials } from "../../data/siteData";
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

        {/* Testimonials / Hear From Our Successful Graduates */}
        <div className="mt-20 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#3498db]">
            Alumni Stories
          </span>
          <h2 className="mt-3 text-3xl font-bold text-[#2c3e50] md:text-4xl">
            Hear From Our Successful Graduates
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Real stories from our students who transformed their careers with our practical training and 100% placement support.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex flex-col rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="relative h-16 w-16 shrink-0">
                  <img
                    className="h-16 w-16 rounded-full border-2 border-[#3498db] object-cover shadow-sm"
                    src={testimonial.image}
                    alt={testimonial.name}
                    loading="lazy"
                  />
                  <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-[10px] text-white shadow" title="Verified Placement">
                    ✓
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-[#2c3e50] text-lg">{testimonial.name}</h3>
                  <p className="text-xs font-medium text-gray-500">{testimonial.role}</p>
                  <span className="mt-1 inline-block rounded bg-blue-50 px-2 py-0.5 text-[11px] font-semibold text-[#3498db]">
                    {testimonial.company}
                  </span>
                </div>
              </div>

              <blockquote className="grow italic leading-relaxed text-gray-600 text-sm">
                “{testimonial.quote}”
              </blockquote>

              <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4 text-xs text-gray-400">
                <span>⭐ 5.0 Verified Review</span>
                <span className="text-green-600 font-semibold">● Placed</span>
              </div>
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

