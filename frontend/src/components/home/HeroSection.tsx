import { primaryButtonClass, secondaryButtonClass } from "../common/styles";

export function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-screen scroll-mt-20 items-center justify-center bg-cover bg-center px-5 py-24 text-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)), url('/assets/backround1.jpg')",
      }}
    >
      <div className="mx-auto max-w-[1200px] animate-fade-in pt-16">
        <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-7xl">
          Empowering Minds, <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">Building Futures</span>
        </h1>
        <p 
          className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-gray-200 opacity-0 animate-slide-up sm:text-xl" 
          style={{ animationDelay: '200ms' }}
        >
          Welcome to Mozo Institute, where education meets innovation. Discover our vibrant
          community and academic excellence with 100% placement hand to hand.
        </p>
        <div 
          className="mt-10 flex flex-col justify-center gap-4 opacity-0 animate-slide-up sm:flex-row" 
          style={{ animationDelay: '400ms' }}
        >
          <a className={primaryButtonClass} href="#academics">
            Explore Programs
          </a>
          <a className={secondaryButtonClass} href="#admission-form">
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}
