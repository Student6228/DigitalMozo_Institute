import { AdmissionInquiryForm } from "../forms/AdmissionInquiryForm";
import { SectionHeading } from "../common/SectionHeading";
import { secondaryButtonClass } from "../common/styles";

export function AdmissionsSection() {
  return (
    <section id="admissions" className="scroll-mt-20 bg-slate-50/70 py-20 md:py-28 border-b border-slate-100">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Admissions 2025–2026"
          title="Simple, Transparent Admission Process"
          description="Embark on your journey to a successful career with DigitalMozo Institute. Our admissions process is designed to be straightforward and supportive."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Admission Steps */}
          <article className="flex flex-col rounded-2xl bg-white p-8 sm:p-10 border border-slate-200/80 shadow-xs transition-all hover:shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-bold">
                1
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Admission Procedure
              </h3>
            </div>

            <ol className="grow space-y-4 text-sm sm:text-base leading-relaxed text-slate-600">
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600 mt-0.5">1</span>
                <div>
                  <strong className="text-slate-900">Inquiry & Career Counseling:</strong> Contact our admission counselors to review eligibility and course structures.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600 mt-0.5">2</span>
                <div>
                  <strong className="text-slate-900">Application Submission:</strong> Complete the online inquiry form below or visit our Jalukbari campus.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600 mt-0.5">3</span>
                <div>
                  <strong className="text-slate-900">Document Verification:</strong> Submit academic credentials and ID proof for verification.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600 mt-0.5">4</span>
                <div>
                  <strong className="text-slate-900">Enrollment Confirmation:</strong> Receive your enrollment kit, ID card, and batch schedule!
                </div>
              </li>
            </ol>

            <a
              className={`${secondaryButtonClass} mt-8 self-start`}
              href="#admission-form"
            >
              Apply Online Below
            </a>
          </article>

          {/* Eligibility & Requirements */}
          <article className="rounded-2xl bg-white p-8 sm:p-10 border border-slate-200/80 shadow-xs transition-all hover:shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-white font-bold">
                2
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Eligibility & Checklist
              </h3>
            </div>

            <div className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-600">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Eligibility Criteria:</h4>
                <ul className="space-y-2 pl-2">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Minimum 10th or 12th pass from any recognized board.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Basic computer literacy for digital & software programs.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Enthusiasm and commitment to hands-on practical learning.</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <h4 className="font-bold text-slate-900 mb-2">Required Documents:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2 text-xs sm:text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Photocopy of Aadhaar Card / ID</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Educational Marksheets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>2 Passport-Sized Photographs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Category / Certificate (if any)</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>

        {/* Form Container */}
        <div
          id="admission-form"
          className="mx-auto mt-16 max-w-[760px] scroll-mt-24 rounded-3xl bg-white p-8 sm:p-12 border border-slate-200/80 shadow-xl"
        >
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200/60 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
              Fast-Track Application
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Online Admission Inquiry
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Submit your details and our senior counselor will call you within 24 hours.
            </p>
          </div>

          <AdmissionInquiryForm />
        </div>
      </div>
    </section>
  );
}
