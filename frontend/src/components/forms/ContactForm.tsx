import { useState } from "react";
import { fieldClass, primaryButtonClass } from "../common/styles";

type SubmitState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setSubmitState("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
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
          : "Unable to send. Please call us at +91 86384 43812.";
      setErrorMessage(message);
      setSubmitState("error");
    }
  }

  if (submitState === "success") {
    return (
      <div className="mx-auto mt-8 max-w-[600px] rounded-xl border border-green-200 bg-green-50 px-8 py-10 text-center">
        <div className="mb-3 text-5xl">✅</div>
        <h3 className="text-xl font-bold text-green-800">Message Sent!</h3>
        <p className="mt-2 text-green-700">
          Thank you for reaching out! We will get back to you shortly.
        </p>
        <button
          className="mt-6 rounded-md border border-green-600 px-5 py-2 text-sm font-semibold text-green-700 transition hover:bg-green-600 hover:text-white"
          onClick={() => setSubmitState("idle")}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      className="mx-auto mt-8 max-w-[600px] rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] sm:p-10 border border-gray-100"
      onSubmit={handleSubmit}
    >
      {submitState === "error" && (
        <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          ⚠️ {errorMessage}
        </div>
      )}

      <div className="mb-4">
        <label className="block font-bold text-[#555] text-sm mb-1.5" htmlFor="contact-name">
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          className={fieldClass}
          type="text"
          id="contact-name"
          name="name"
          placeholder="e.g. Rahul Sharma"
          required
          disabled={submitState === "loading"}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 mb-4">
        <div>
          <label className="block font-bold text-[#555] text-sm mb-1.5" htmlFor="contact-email">
            Your Email <span className="text-red-500">*</span>
          </label>
          <input
            className={fieldClass}
            type="email"
            id="contact-email"
            name="email"
            placeholder="e.g. rahul@example.com"
            required
            disabled={submitState === "loading"}
          />
        </div>

        <div>
          <label className="block font-bold text-[#555] text-sm mb-1.5" htmlFor="contact-phone">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            className={fieldClass}
            type="tel"
            id="contact-phone"
            name="phone"
            pattern="[0-9]{10}"
            placeholder="e.g. 8638443812"
            required
            disabled={submitState === "loading"}
          />
          <small className="mt-1 block text-xs text-gray-500">10-digit number</small>
        </div>
      </div>

      <div className="mb-5">
        <label className="block font-bold text-[#555] text-sm mb-1.5" htmlFor="contact-message">
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          className={fieldClass}
          id="contact-message"
          name="message"
          rows={4}
          placeholder="How can we assist you with our courses or admissions?"
          required
          disabled={submitState === "loading"}
        />
      </div>

      <button
        className={`${primaryButtonClass} w-full disabled:cursor-not-allowed disabled:opacity-60 py-3 text-base font-bold shadow-md`}
        type="submit"
        disabled={submitState === "loading"}
      >
        {submitState === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}


