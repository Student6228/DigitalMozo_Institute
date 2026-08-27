import { features } from "../../data/siteData";

export function FeaturesSection() {
  return (
    <section className="bg-[#f4f4f4] py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="text-center text-3xl font-bold text-[#2c3e50] md:text-4xl">Our Core Features</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
          Discover why aspiring professionals choose DigitalMozo Institute for comprehensive career education.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl lg:p-10 border-t-4 border-[#3498db]"
            >
              <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-blue-50 p-4 shadow-inner">
                <img
                  className="h-16 w-16 object-contain drop-shadow-sm transition-transform duration-300 hover:scale-110"
                  src={feature.image}
                  alt={feature.alt}
                />
              </div>
              <h3 className="text-xl font-bold text-[#2c3e50]">{feature.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

