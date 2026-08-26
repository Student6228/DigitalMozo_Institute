import { placementStats, testimonials } from "../../data/siteData";
import { SectionHeading } from "../common/SectionHeading";
import { primaryButtonClass } from "../common/styles";

export function PlacementSection() {
  return (
    <section id="placement-record" className="scroll-mt-20 bg-[#f9f9f9] py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5">
        <SectionHeading
          title="Our Placement Record"
          description="At Digital Mozo Institute, our commitment to your career success is paramount. We are proud to boast a strong placement record, with our graduates thriving in top companies across various industries. Your success is our success!"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {placementStats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-2xl border-b-[5px] border-[#3498db] bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-4xl font-bold text-[#2c3e50]">{stat.value}</h3>
              <p className="mt-2 text-lg text-gray-500 font-medium">{stat.label}</p>
            </article>
          ))}
        </div>

        <h2 className="mt-20 text-center text-3xl font-bold text-[#2c3e50] md:text-4xl">
          Hear From Our Successful Graduates
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative mb-6 h-24 w-24">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 opacity-70 blur"></div>
                <img
                  className="relative h-24 w-24 rounded-full border-[3px] border-white object-cover shadow-md"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
              </div>
              <blockquote className="grow italic leading-relaxed text-gray-600">
                “{testimonial.quote}”
              </blockquote>
              <p className="mt-5 font-bold text-[#2c3e50]">
                {testimonial.name}, <span className="font-normal text-gray-500">{testimonial.role}</span>
              </p>
              <p className="mt-1 text-sm font-semibold text-[#3498db]">Placed at: {testimonial.company}</p>
            </article>
          ))}
        </div>

        <div className="mt-20 border-t border-gray-200 pt-12 text-center">
          <p className="mb-8 text-2xl font-bold text-[#2c3e50]">Ready to write your own success story?</p>
          <a className={`${primaryButtonClass} px-8 py-3.5 text-lg`} href="#admission-form">
            Enroll Now & Get Placed!
          </a>
        </div>
      </div>
    </section>
  );
}
