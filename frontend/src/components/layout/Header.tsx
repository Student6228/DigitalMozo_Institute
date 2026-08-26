import { useState } from "react";
import { Link } from "react-router-dom";
import { compactNavigationItems, navigationItems } from "../../data/siteData";

type HeaderProps = {
  compact?: boolean;
};

const primaryButton =
  "rounded-[5px] border border-[#3498db] bg-[#3498db] px-4 py-2 text-center font-bold text-white transition hover:border-[#2980b9] hover:bg-[#2980b9]";
const secondaryButton =
  "rounded-[5px] border border-[#f39c12] bg-[#f39c12] px-4 py-2 text-center font-bold text-white transition hover:border-[#e67e22] hover:bg-[#e67e22]";

export function Header({ compact = false }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const items = compact ? compactNavigationItems : navigationItems;

  return (
    <header className="sticky top-0 z-50 bg-white py-3.5 shadow-[0_2px_5px_rgba(0,0,0,0.1)]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5">
        <Link className="flex min-w-0 items-center text-[#2c3e50] no-underline" to="/">
          <img
            className="mr-2.5 h-[50px] w-auto shrink-0"
            src="/assets/logo.png.jpg"
            alt="School Logo"
          />
          <span className="truncate text-xl font-bold sm:text-[1.8rem]">DigitalMozo Institute</span>
        </Link>

        <button
          type="button"
          className="rounded-md p-2 text-3xl leading-none text-[#333] lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "×" : "☰"}
        </button>

        <nav
          id="primary-navigation"
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute top-full right-0 left-0 flex-col border-t border-slate-100 bg-white px-5 py-4 shadow-lg lg:static lg:flex lg:flex-row lg:border-0 lg:p-0 lg:shadow-none`}
          aria-label="Primary navigation"
        >
          <ul className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-4">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  className="block py-2 font-bold text-[#555] transition hover:text-[#3498db] lg:py-1"
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {!compact ? (
              <>
                <li className="mt-2 lg:mt-0">
                  <Link
                    className={`block ${primaryButton}`}
                    to="/student-login"
                    onClick={() => setIsOpen(false)}
                  >
                    Student Login
                  </Link>
                </li>
                <li>
                  <Link
                    className={`block ${secondaryButton}`}
                    to="/teacher-login"
                    onClick={() => setIsOpen(false)}
                  >
                    Teacher Login
                  </Link>
                </li>
              </>
            ) : null}
          </ul>
        </nav>
      </div>
    </header>
  );
}
