import { newsItems } from "../../data/siteData";

export function NewsEventsSection() {
  return (
    <section id="news-events" className="scroll-mt-20 bg-[#f4f4f4] py-16">
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="text-center text-3xl font-bold text-[#2c3e50]">Latest News & Events</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-lg bg-white shadow-[0_4px_10px_rgba(0,0,0,0.05)]"
            >
              <img className="h-52 w-full object-cover" src={item.image} alt={item.alt} />
              <div className="p-4">
                <h3 className="text-xl font-bold text-[#2c3e50]">{item.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-7 text-[#333]">{item.description}</p>
                <a
                  className="mt-3 inline-block font-bold text-[#3498db] hover:underline"
                  href="#contact"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
