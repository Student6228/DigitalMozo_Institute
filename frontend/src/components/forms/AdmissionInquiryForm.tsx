import { useState } from "react";
import { courseOptions } from "../../data/siteData";
import { fieldClass, primaryButtonClass } from "../common/styles";

type SubmitState = "idle" | "loading" | "success" | "error";

export function AdmissionInquiryForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setSubmitState("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          applicantName: data.get("applicant-name"),
          applicantEmail: data.get("applicant-email"),
          applicantPhone: data.get("applicant-phone"),
          preferredCourse: data.get("preferred-course"),
          message: data.get("applicant-message"),
        }),
      });

      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.error ?? "Something went wrong. Please try again.");
      }

      setSubmitState("success");
      form.reset();
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Unable to submit. Please call us at +91 86384 43812.";
      setErrorMessage(message);
      setSubmitState("error");
    }
  }

  if (submitState === "success") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 px-8 py-10 text-center">
        <div className="mb-3 text-5xl">✅</div>
        <h3 className="text-xl font-bold text-green-800">Inquiry Submitted!</h3>
        <p className="mt-2 text-green-700">
          Thank you! Our admissions team will call you within 24 hours.
        </p>
        <button
          className="mt-6 rounded-md border border-green-600 px-5 py-2 text-sm font-semibold text-green-700 transition hover:bg-green-600 hover:text-white"
          onClick={() => setSubmitState("idle")}
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form className="mx-auto max-w-[600px]" onSubmit={handleSubmit}>
      {submitState === "error" && (
        <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          ⚠️ {errorMessage}
        </div>
      )}

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
          disabled={submitState === "loading"}
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
          disabled={submitState === "loading"}
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
          disabled={submitState === "loading"}
        />
        <small className="mt-1 block text-sm text-[#777]">e.g., 8638443812 (10 digits)</small>
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
          disabled={submitState === "loading"}
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
        <textarea
          className={fieldClass}
          id="applicant-message"
          name="applicant-message"
          rows={5}
          disabled={submitState === "loading"}
        />
      </div>
      <button
        className={`${primaryButtonClass} w-full disabled:cursor-not-allowed disabled:opacity-60`}
        type="submit"
        disabled={submitState === "loading"}
      >
        {submitState === "loading" ? "Submitting..." : "Submit Inquiry"}
      </button>
    </form>
  );
}

