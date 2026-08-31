import { useState } from "react";
import { contactInfo } from "../../data/siteData";
import { SectionHeading } from "../common/SectionHeading";
import { primaryButtonClass } from "../common/styles";

export function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="scroll-mt-20 bg-slate-50/60 py-20 md:py-28 border-b border-slate-100">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          badge="About Our Institute"
          title="Bridging Academic Learning & Industry Demands"
          description="Founded in 2022, DigitalMozo Institute is Guwahati's premier vocational training hub, committed to empowering learners with government-certified skills and hands-on competence."
        />

        {/* 2-Column Content Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Story & Highlights */}
          <div className="lg:col-span-7 space-y-6 text-slate-700">
            <div className="rounded-2xl bg-white p-7 sm:p-9 shadow-sm border border-slate-200/70">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Empowering Minds, Building Futures Since {contactInfo.establishedYear}
              </h3>
              <p className="leading-relaxed text-slate-600">
                <strong className="text-slate-900 font-semibold">DigitalMozo Institute</strong> was
                established in Guwahati, Assam with a clear mission: to equip students and young
                professionals with in-demand practical skills essential for modern industry. Conveniently
                located in <strong className="text-slate-800">Jalukbari, Guwahati</strong> (near Sanskrit College Gate & Cambridge Public School),
                we provide rigorous, certified training programs that turn ambition into measurable career success.
              </p>

              {/* Core Feature Badges */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 rounded-xl bg-blue-50/60 p-4 border border-blue-100">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white shadow-xs">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Government Certified</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Valid credentials recognizing your practical competencies nationwide.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-amber-50/60 p-4 border border-amber-100">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500 text-white shadow-xs">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">100% Practical Labs</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Real equipment, live case studies, and hands-on project execution.</p>
                  </div>
                </div>
              </div>

              {/* Expandable Details */}
              {expanded && (
                <div className="mt-6 pt-6 border-t border-slate-100 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed animate-fade-in">
                  <p>
                    Our curriculum spans specialized disciplines:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
                    <li className="flex items-center gap-2 text-slate-800 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                      <span>Certified Safety Officer (IOSH/NEBOSH/OHSAS)</span>
                    </li>
                    <li className="flex items-center gap-2 text-slate-800 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                      <span>Full-Stack Software Development</span>
                    </li>
                    <li className="flex items-center gap-2 text-slate-800 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                      <span>Professional Website & UI/UX Design</span>
                    </li>
                    <li className="flex items-center gap-2 text-slate-800 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                      <span>Cinematic Video Editing & Motion Graphics</span>
                    </li>
                    <li className="flex items-center gap-2 text-slate-800 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                      <span>SEO & Digital Marketing Strategies</span>
                    </li>
                    <li className="flex items-center gap-2 text-slate-800 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                      <span>Mock Interviews & Soft Skills Training</span>
                    </li>
                  </ul>
                  <p className="pt-2">
                    We take pride in our robust placement assistance cell which guides candidates from resume creation to final job placements in premier organizations.
                  </p>
                </div>
              )}

              <div className="mt-8 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setExpanded(!expanded)}
                  className={primaryButtonClass}
                >
                  {expanded ? "Show Less" : "Learn More About Us"}
                </button>
                <a
                  href="#admissions"
                  className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition"
                >
                  <span>Admission Details →</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Campus Image & Mission/Vision Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Campus Image Frame */}
            <div className="relative overflow-hidden rounded-2xl bg-white p-2 shadow-md border border-slate-200/80">
              <img
                src="/assets/building-image1.jpg"
                alt="DigitalMozo Institute Campus Building"
                className="h-64 sm:h-72 w-full rounded-xl object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-slate-900/85 backdrop-blur-md px-4 py-2.5 text-white shadow-lg">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-400">Campus Facility</p>
                <p className="text-xs text-slate-200 truncate">{contactInfo.address}</p>
              </div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white p-5 shadow-xs border border-slate-200/80">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-600 text-white text-xs font-bold">
                    M
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Our Mission</h4>
                </div>
                <p className="text-xs leading-relaxed text-slate-600">
                  To deliver affordable, industry-calibrated vocational education that ensures every student graduates with certified mastery and confidence.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-xs border border-slate-200/80">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-amber-500 text-white text-xs font-bold">
                    V
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Our Vision</h4>
                </div>
                <p className="text-xs leading-relaxed text-slate-600">
                  To become Northeast India's most trusted skill development academy for technical trades, digital technology, and safety engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
