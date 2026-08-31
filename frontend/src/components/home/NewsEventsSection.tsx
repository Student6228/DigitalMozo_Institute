import { newsItems } from "../../data/siteData";
import { SectionHeading } from "../common/SectionHeading";

export function NewsEventsSection() {
  return (
    <section id="news-events" className="scroll-mt-20 bg-white py-20 md:py-28 border-b border-slate-100">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Campus Updates"
          title="Latest News & Events"
          description="Stay informed about our latest academic workshops, student activities, celebrations, and admissions updates."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-300 flex flex-col"
            >
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                />
              </div>

              <div className="p-6 flex grow flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 transition"
                    href="#contact"
                  >
                    <span>Read More</span>
                    <span>→</span>
                  </a>
                  <span className="text-xs font-semibold text-slate-400">DigitalMozo</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
