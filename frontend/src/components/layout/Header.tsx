import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { compactNavigationItems, navigationItems } from "../../data/siteData";

type HeaderProps = {
  compact?: boolean;
};

export function Header({ compact = false }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const items = compact ? compactNavigationItems : navigationItems;

  // Close mobile drawer on route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isLinkActive = (href: string) => {
    if (href === "/gallery") {
      return location.pathname === "/gallery";
    }
    if (href.startsWith("/#")) {
      const hash = href.replace("/", "");
      if (location.pathname === "/") {
        if (!location.hash && hash === "#home") return true;
        return location.hash === hash;
      }
    }
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.05)] transition-all duration-200">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 h-18 sm:h-20">
        {/* Brand Logo & Name */}
        <Link
          className="flex items-center gap-3 no-underline group shrink-0"
          to="/"
          aria-label="DigitalMozo Institute Homepage"
        >
          <div className="relative flex items-center justify-center h-11 w-11 sm:h-12 sm:w-12 rounded-xl bg-slate-50 border border-slate-200/80 p-1.5 shadow-xs transition-transform duration-300 group-hover:scale-105">
            <img
              className="h-full w-full object-contain"
              src="/assets/logo.png.jpg"
              alt="DigitalMozo Logo"
              width="48"
              height="48"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 leading-tight">
              DigitalMozo <span className="text-blue-600">Institute</span>
            </span>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-slate-500">
              Guwahati • Govt. Certified
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-2"
          aria-label="Desktop primary navigation"
        >
          {items.map((item) => {
            const active = isLinkActive(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`relative px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  active
                    ? "text-blue-600 bg-blue-50/80 font-bold"
                    : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-600 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        {!compact ? (
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <Link
              to="/student-login"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-xs xl:text-sm font-semibold text-white transition-all duration-200 shadow-sm shadow-blue-500/20 hover:bg-blue-700 hover:shadow-md hover:shadow-blue-500/30"
            >
              Student Login
            </Link>
            <Link
              to="/teacher-login"
              className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-4 py-2 text-xs xl:text-sm font-semibold text-white transition-all duration-200 shadow-sm shadow-amber-500/20 hover:bg-amber-600 hover:shadow-md hover:shadow-amber-500/30"
            >
              Teacher Login
            </Link>
          </div>
        ) : null}

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-2 text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-blue-600 lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Backdrop & Dropdown Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 top-18 sm:top-20 z-40 bg-slate-900/40 backdrop-blur-xs lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav
        id="mobile-navigation"
        className={`fixed top-18 sm:top-20 right-0 left-0 bottom-0 z-50 flex flex-col bg-white border-t border-slate-100 px-6 py-6 shadow-2xl transition-all duration-300 ease-in-out lg:hidden overflow-y-auto ${
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        aria-label="Mobile primary navigation"
      >
        <div className="flex flex-col gap-1.5 pb-6">
          {items.map((item) => {
            const active = isLinkActive(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-all ${
                  active
                    ? "bg-blue-50 text-blue-600 font-bold"
                    : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                }`}
              >
                <span>{item.label}</span>
                {active && (
                  <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                )}
              </Link>
            );
          })}
        </div>

        {!compact ? (
          <div className="mt-auto border-t border-slate-100 pt-6 flex flex-col gap-3">
            <Link
              to="/student-login"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center rounded-xl bg-blue-600 py-3 text-center text-sm font-bold text-white shadow-md shadow-blue-500/20 active:bg-blue-700"
            >
              Student Login
            </Link>
            <Link
              to="/teacher-login"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center rounded-xl bg-amber-500 py-3 text-center text-sm font-bold text-white shadow-md shadow-amber-500/20 active:bg-amber-600"
            >
              Teacher Login
            </Link>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
