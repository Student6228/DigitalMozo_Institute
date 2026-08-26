import { useState } from "react";
import { primaryButtonClass } from "../common/styles";

export function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="scroll-mt-20 bg-[#f9f9f9] py-16 md:py-24">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 lg:grid-cols-2">
        <div>
          <h2 className="text-left text-3xl font-bold text-[#2c3e50] md:text-4xl">
            About Digital Mozo Institute
          </h2>
          <p className="mt-6 text-justify leading-relaxed text-gray-700">
            <strong>Digital Mozo Institute</strong> was established in <strong>2022</strong> with a
            clear mission: to empower individuals with the in-demand skills necessary to thrive in
            today's dynamic professional landscape. Located conveniently in{" "}
            <strong>
              Jalukbari, Guwahati, Assam (near Sanskrit College Gate and Cambridge Public School,
              PIN: 781014)
            </strong>
            , we are committed to delivering high-quality, practical training that bridges the gap
            between education and industry demands.
          </p>

          {expanded ? (
            <div
              id="more-about-content"
              className="mt-6 space-y-5 text-justify leading-relaxed text-gray-700 transition-all duration-300 animate-fade-in"
            >
              <p>
                At Digital Mozo, we pride ourselves on offering a diverse range of specialized
                programs. Our core offerings include:
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Comprehensive Safety Courses:</strong> We provide in-depth training for
                  all types of <strong>Safety Officer</strong> roles, ensuring our students are
                  well-prepared to meet industry standards and regulatory requirements. All our
                  safety courses are accompanied by <strong>fully government-certified</strong>{" "}
                  credentials, adding significant value to your qualifications.
                </li>
                <li>
                  <strong>Digital & Software Development:</strong> Dive into the world of technology
                  with our cutting-edge programs in <strong>Digital Software Development</strong>{" "}
                  and <strong>Website Designing</strong>. Learn the skills to build robust
                  applications and visually stunning, functional websites.
                </li>
                <li>
                  <strong>Creative Media Production:</strong> Unleash your creativity with our{" "}
                  <strong>Video Editing</strong> courses, mastering the art of visual storytelling
                  and production.
                </li>
                <li>
                  <strong>Digital Marketing Excellence:</strong> Gain the expertise to navigate the
                  digital landscape with our <strong>Digital Marketing</strong> programs, covering
                  essential strategies to promote businesses and brands online.
                </li>
              </ul>
              <p>
                What sets Digital Mozo Institute apart is our unwavering commitment to{" "}
                <strong>hands-on practical training</strong>. We believe that true learning comes
                from doing, which is why our courses emphasize real-world application, ensuring you
                gain confidence and proficiency. Furthermore, we are dedicated to our students'
                success beyond the classroom, offering <strong>100% placement assistance</strong> to
                help you kickstart or advance your career.
              </p>
              <p>
                Join Digital Mozo Institute and embark on a journey of skill enhancement, career
                growth, and professional excellence.
              </p>
            </div>
          ) : null}

          <button
            type="button"
            className={`${primaryButtonClass} mt-8`}
            aria-expanded={expanded}
            aria-controls="more-about-content"
            onClick={() => setExpanded((value) => !value)}
          >
            {expanded ? "Show Less" : "Learn More"}
          </button>
        </div>

        <div className="relative">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-blue-100 to-teal-50 opacity-50 blur-lg"></div>
          <img
            className="relative w-full rounded-2xl object-cover shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
            src="/assets/building-image1.jpg"
            alt="Institute View 1"
          />
        </div>
      </div>
    </section>
  );
}
