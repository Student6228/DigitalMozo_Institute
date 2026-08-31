import { features } from "../../data/siteData";
import { SectionHeading } from "../common/SectionHeading";

export function FeaturesSection() {
  return (
    <section className="bg-white py-20 md:py-24 border-b border-slate-100">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Choose Us"
          title="Our Core Training Advantages"
          description="Discover why aspiring professionals choose DigitalMozo Institute for comprehensive, hands-on career education."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <article
              key={feature.title}
              className="group flex flex-col items-center rounded-2xl bg-white p-8 text-center border border-slate-200/80 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-300 relative overflow-hidden"
            >
              {/* Accent top stripe */}
              <div
                className={`absolute top-0 left-0 right-0 h-1.5 ${
                  idx === 0 ? "bg-blue-600" : idx === 1 ? "bg-amber-500" : "bg-emerald-600"
                }`}
              />

              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 p-4 shadow-inner group-hover:scale-105 transition-transform duration-300">
                <img
                  className="h-12 w-12 object-contain"
                  src={feature.image}
                  alt={feature.alt}
                  loading="lazy"
                />
              </div>

              <h3 className="text-xl font-bold text-slate-900 tracking-tight">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
