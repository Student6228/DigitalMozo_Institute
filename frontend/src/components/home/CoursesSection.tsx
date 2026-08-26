import { courses } from "../../data/siteData";
import { SectionHeading } from "../common/SectionHeading";
import { primaryButtonClass } from "../common/styles";

export function CoursesSection() {
  return (
    <section id="academics" className="scroll-mt-20 bg-[#f4f4f4] py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5">
        <SectionHeading
          title="Explore Our Comprehensive Programs"
          description="At Digital Mozo Institute, we offer a diverse range of industry-aligned courses designed to equip you with practical skills and secure a thriving career. Browse our offerings below:"
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.title}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img 
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src={course.image} 
                  alt={course.alt} 
                />
              </div>
              <div className="flex grow flex-col p-6">
                <h3 className="text-left text-2xl font-bold text-[#3498db]">{course.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-gray-600">{course.description}</p>
                <ul className="mt-5 grow space-y-3 text-sm text-gray-600">
                  {course.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2">
                      <span className="mt-0.5 font-bold text-[#27ae60]" aria-hidden="true">
                        ✓
                      </span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
                <a
                  className={`${primaryButtonClass} mt-6 self-start px-5 py-2.5 text-sm`}
                  href="#admission-form"
                >
                  View Details
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
