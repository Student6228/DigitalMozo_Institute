import { type FormEvent, useState } from "react";
import { courseOptions } from "../../data/siteData";
import { SubmitStatus } from "../common/SubmitStatus";
import { fieldClass, primaryButtonClass } from "../common/styles";

export function AdmissionInquiryForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(
      "Your admission inquiry has been recorded. This frontend form is ready for API integration.",
    );
    event.currentTarget.reset();
  }

  return (
    <form className="mx-auto max-w-[600px]" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block font-bold text-[#555]" htmlFor="applicant-name">
          Full Name:
        </label>
        <input
          className={fieldClass}
          type="text"
          id="applicant-name"
          name="applicant-name"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold text-[#555]" htmlFor="applicant-email">
          Email Address:
        </label>
        <input
          className={fieldClass}
          type="email"
          id="applicant-email"
          name="applicant-email"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold text-[#555]" htmlFor="applicant-phone">
          Phone Number:
        </label>
        <input
          className={fieldClass}
          type="tel"
          id="applicant-phone"
          name="applicant-phone"
          required
          pattern="[0-9]{10}"
        />
        <small className="mt-1 block text-sm text-[#777]">e.g., +91 6001868318</small>
      </div>
      <div className="mb-4">
        <label className="block font-bold text-[#555]" htmlFor="preferred-course">
          Preferred Course:
        </label>
        <select
          className={fieldClass}
          id="preferred-course"
          name="preferred-course"
          required
          defaultValue=""
        >
          <option value="" disabled>
            -- Select a Course --
          </option>
          {courseOptions.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
          <option value="other">Other / Not Sure</option>
        </select>
      </div>
      <div className="mb-5">
        <label className="block font-bold text-[#555]" htmlFor="applicant-message">
          Your Message / Questions:
        </label>
        <textarea className={fieldClass} id="applicant-message" name="applicant-message" rows={5} />
      </div>
      <button className={primaryButtonClass} type="submit">
        Submit Inquiry
      </button>
      <SubmitStatus message={status} />
    </form>
  );
}
