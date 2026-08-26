import { AdmissionInquiryForm } from "../forms/AdmissionInquiryForm";
import { SectionHeading } from "../common/SectionHeading";
import { secondaryButtonClass } from "../common/styles";

export function AdmissionsSection() {
  return (
    <section id="admissions" className="scroll-mt-20 bg-[#f4f4f4] py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5">
        <SectionHeading
          title="Admissions"
          description="Embark on your journey to a successful career with Digital Mozo Institute. Our admissions process is designed to be straightforward and supportive. Find all the information you need to join our vibrant learning community below."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <article className="flex flex-col rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10">
            <h3 className="text-2xl font-bold text-[#3498db]">Admission Process</h3>
            <ol className="mt-6 grow list-decimal space-y-4 pl-6 leading-relaxed text-gray-700">
              <li>
                <strong>Inquiry & Counseling:</strong> Contact us to discuss your career goals and
                explore our course offerings. Our counselors are here to guide you.
              </li>
              <li>
                <strong>Application Submission:</strong> Fill out our online application form or
                visit our institute for an offline application.
              </li>
              <li>
                <strong>Document Verification:</strong> Submit the required documents for
                verification (see list below).
              </li>
              <li>
                <strong>Admission Confirmation:</strong> Upon successful verification and fee
                payment, your admission will be confirmed!
              </li>
            </ol>
            <a
              className={`${secondaryButtonClass} mt-8 self-start px-6 py-2.5 text-sm`}
              href="#admission-form"
            >
              Apply Now
            </a>
          </article>

          <article className="rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10">
            <h3 className="text-2xl font-bold text-[#3498db]">Eligibility & Requirements</h3>
            <p className="mt-6 leading-relaxed text-gray-700">
              Eligibility criteria vary slightly by course. Generally, candidates should meet the
              following:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-gray-700">
              <li>Minimum 10th or 12th pass from a recognized board.</li>
              <li>Basic computer literacy for digital/software courses.</li>
              <li>Interest and aptitude for the chosen field.</li>
            </ul>
            <p className="mt-8 font-bold text-[#2c3e50]">Required Documents:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-gray-700">
              <li>Photocopy of Aadhar Card / ID Proof</li>
              <li>Photocopy of Latest Marksheet / Educational Qualification</li>
              <li>Passport-sized Photographs (2)</li>
              <li>Any other course-specific documents (will be communicated)</li>
            </ul>
          </article>
        </div>

        <div className="mt-20 border-t border-gray-200 pt-12 text-center">
          <h3 className="text-3xl font-bold text-[#2c3e50] md:text-4xl">Ready to Apply?</h3>
          <p className="mt-4 text-lg text-gray-600">
            Fill out the form below or reach out to us for personalized assistance!
          </p>
        </div>

        <div
          id="admission-form"
          className="mx-auto mt-12 max-w-[700px] scroll-mt-24 rounded-2xl bg-white p-8 shadow-xl sm:p-12"
        >
          <h3 className="mb-8 text-center text-3xl font-bold text-[#3498db]">
            Online Admission Inquiry
          </h3>
          <AdmissionInquiryForm />
        </div>
      </div>
    </section>
  );
}
