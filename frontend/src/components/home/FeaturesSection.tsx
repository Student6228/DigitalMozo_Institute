import { features } from "../../data/siteData";

export function FeaturesSection() {
  return (
    <section className="bg-[#f4f4f4] py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="text-center text-3xl font-bold text-[#2c3e50] md:text-4xl">Our Core Features</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="flex flex-col items-center rounded-xl bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl lg:p-10"
            >
              <img
                className="mb-5 h-20 w-20 object-contain drop-shadow-md"
                src={feature.image}
                alt={feature.alt}
              />
              <h3 className="text-xl font-bold text-[#2c3e50]">{feature.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
