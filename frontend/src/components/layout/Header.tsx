import { useState } from "react";
import { Link } from "react-router-dom";
import { compactNavigationItems, navigationItems } from "../../data/siteData";

type HeaderProps = {
  compact?: boolean;
};

export function Header({ compact = false }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const items = compact ? compactNavigationItems : navigationItems;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md py-2.5 sm:py-3 border-b border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-3 px-4 sm:px-6">
        {/* Brand Logo & Name */}
        <Link className="flex min-w-0 items-center text-[#2c3e50] no-underline group" to="/">
          <img
            className="mr-2.5 h-9 sm:h-11 w-auto shrink-0 rounded-md object-contain transition-transform duration-300 group-hover:scale-105"
            src="/assets/logo.png.jpg"
            alt="DigitalMozo Institute Logo"
          />
          <span className="truncate text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-[#2c3e50]">
            DigitalMozo <span className="text-[#3498db]">Institute</span>
          </span>
        </Link>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 p-2 text-xl text-gray-700 transition hover:bg-gray-50 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Desktop & Mobile Navigation Menu */}
        <nav
          id="primary-navigation"
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute top-full right-0 left-0 flex-col border-b border-gray-200 bg-white px-5 py-5 shadow-xl transition-all lg:static lg:flex lg:flex-row lg:items-center lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
          aria-label="Primary navigation"
        >
          <ul className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-3 xl:gap-5">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  className="block rounded-md px-2.5 py-1.5 text-sm font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-[#3498db] lg:px-2 lg:py-1 lg:hover:bg-transparent"
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {!compact ? (
              <li className="mt-3 flex flex-col gap-2 border-t border-gray-100 pt-3 sm:flex-row lg:mt-0 lg:border-0 lg:pt-0">
                <Link
                  className="rounded-lg bg-[#3498db] px-3.5 py-1.5 text-center text-xs sm:text-sm font-semibold text-white shadow-sm transition hover:bg-[#2980b9] hover:shadow"
                  to="/student-login"
                  onClick={() => setIsOpen(false)}
                >
                  Student Login
                </Link>
                <Link
                  className="rounded-lg bg-[#f39c12] px-3.5 py-1.5 text-center text-xs sm:text-sm font-semibold text-white shadow-sm transition hover:bg-[#e67e22] hover:shadow"
                  to="/teacher-login"
                  onClick={() => setIsOpen(false)}
                >
                  Teacher Login
                </Link>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>
    </header>
  );
}

