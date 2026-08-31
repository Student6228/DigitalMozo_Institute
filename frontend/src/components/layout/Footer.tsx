import { Link } from "react-router-dom";
import { contactInfo, courses, socialLinks } from "../../data/siteData";

export function Footer({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <footer className="bg-slate-900 px-5 py-6 text-center text-slate-400 border-t border-slate-800">
        <p className="text-xs sm:text-sm">
          © {new Date().getFullYear()} {contactInfo.instituteName}. All rights reserved.
        </p>
      </footer>
    );
  }

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800/80">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Bio (4 cols on lg) */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3 no-underline group mb-5">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-white p-1.5 shadow-sm">
                <img
                  className="h-full w-full object-contain"
                  src="/assets/logo.png.jpg"
                  alt="DigitalMozo Logo"
                  width="48"
                  height="48"
                />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white block">
                  DigitalMozo <span className="text-blue-400">Institute</span>
                </span>
                <span className="text-xs font-medium text-slate-400">
                  Govt. Certified Vocational Training
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-slate-400 mb-6 max-w-sm">
              Empowering students and job-seekers with hands-on industrial safety, software development,
              web design, and digital skills. Bridging the academia-industry divide with 100% placement support.
            </p>

            {/* Social Icons */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Connect With Us
              </p>
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow DigitalMozo Institute on Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 transition-all duration-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/30"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow DigitalMozo Institute on Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 transition-all duration-200 hover:bg-gradient-to-tr hover:from-amber-600 hover:via-rose-600 hover:to-purple-600 hover:text-white hover:border-rose-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-600/30"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subscribe to DigitalMozo Institute on YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 transition-all duration-200 hover:bg-red-600 hover:text-white hover:border-red-600 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-600/30"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with DigitalMozo Institute on LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 transition-all duration-200 hover:bg-blue-700 hover:text-white hover:border-blue-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-700/30"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-bold text-white tracking-wide uppercase mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/#home" className="text-slate-400 transition hover:text-blue-400 hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-slate-400 transition hover:text-blue-400 hover:translate-x-1 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#academics" className="text-slate-400 transition hover:text-blue-400 hover:translate-x-1 inline-block">
                  Academics
                </Link>
              </li>
              <li>
                <Link to="/#placement-record" className="text-slate-400 transition hover:text-blue-400 hover:translate-x-1 inline-block">
                  Placement Record
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-400 transition hover:text-blue-400 hover:translate-x-1 inline-block font-semibold text-blue-400">
                  Our Gallery
                </Link>
              </li>
              <li>
                <Link to="/#admissions" className="text-slate-400 transition hover:text-blue-400 hover:translate-x-1 inline-block">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-slate-400 transition hover:text-blue-400 hover:translate-x-1 inline-block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Academic Programs (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-bold text-white tracking-wide uppercase mb-5">
              Training Programs
            </h3>
            <ul className="space-y-2.5 text-sm">
              {courses.map((course) => (
                <li key={course.title}>
                  <Link
                    to="/#academics"
                    className="text-slate-400 transition hover:text-blue-400 hover:translate-x-1 inline-block leading-snug"
                  >
                    {course.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/student-login"
                  className="text-amber-400 font-semibold transition hover:text-amber-300 inline-flex items-center gap-1"
                >
                  <span>Student Portal Access</span>
                  <span>→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-bold text-white tracking-wide uppercase mb-5">
              Contact Information
            </h3>
            <div className="space-y-4 text-sm text-slate-400">
              {/* Address */}
              <div className="flex items-start gap-3">
                <svg className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="leading-relaxed">{contactInfo.address}</p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`} className="hover:text-blue-400 transition">
                  {contactInfo.phone}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-400 transition">
                  {contactInfo.email}
                </a>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{contactInfo.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {contactInfo.instituteName}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Guwahati, Assam</span>
            <span>•</span>
            <span>Est. {contactInfo.establishedYear}</span>
            <span>•</span>
            <span>Govt. Certified Training</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
