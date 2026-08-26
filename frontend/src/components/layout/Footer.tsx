export function Footer({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <footer className="bg-[#2c3e50] px-5 py-5 text-center text-white">
        <p className="text-sm">© 2025 Digital Mozo Institute. All rights reserved.</p>
      </footer>
    );
  }

  return (
    <footer className="bg-[#2c3e50] pt-12 text-white">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-5 text-center md:grid-cols-3 md:text-left">
        <div>
          <h2 className="mb-5 text-xl font-bold text-white">DigitalMozo Institute</h2>
          <p className="mb-4 leading-7 text-slate-200">
            2nd Floor, near Sanskrit College Gate, near Cambridge Public School, Jalukbari,
            Guwahati, Assam 781014
          </p>
          <p className="mb-2 text-slate-200">Email: info@digitalmozoinstitute.in</p>
          <p className="text-slate-200">Phone: +91 86384 43812</p>
        </div>

        <div>
          <h2 className="mb-5 text-xl font-bold text-white">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a className="text-slate-200 transition hover:text-[#3498db]" href="/#admissions">
                Admissions
              </a>
            </li>
            <li>
              <a className="text-slate-200 transition hover:text-[#3498db]" href="/#academics">
                Curriculum
              </a>
            </li>
            <li>
              <a className="text-slate-200 transition hover:text-[#3498db]" href="/#about">
                Faculty
              </a>
            </li>
            <li>
              <a className="text-slate-200 transition hover:text-[#3498db]" href="/#news-events">
                Student Life
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-xl font-bold text-white">Follow Us</h2>
          <div className="flex justify-center gap-4 md:justify-start">
            {[
              ["Facebook", "/assets/icon-facebook.png"],
              ["Linkedin", "/assets/icon-linkedin.png"],
              ["Instagram", "/assets/icon-instagram.png"],
            ].map(([label, image]) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                onClick={(event) => event.preventDefault()}
                className="transition hover:opacity-80"
              >
                <img className="h-8 w-8 object-contain" src={image} alt={`${label} Icon`} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-white/15 px-5 py-5 text-center">
        <p className="text-sm text-slate-200">© 2025 DigitalMozo Institute. All rights reserved.</p>
      </div>
    </footer>
  );
}
