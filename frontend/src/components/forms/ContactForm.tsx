import { type FormEvent, useState } from "react";
import { SubmitStatus } from "../common/SubmitStatus";
import { fieldClass, primaryButtonClass } from "../common/styles";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Your message has been recorded. This frontend form is ready for API integration.");
    event.currentTarget.reset();
  }

  return (
    <form
      className="mx-auto mt-8 max-w-[600px] rounded-lg bg-white p-6 shadow-[0_4px_15px_rgba(0,0,0,0.08)] sm:p-8"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label className="block font-bold text-[#555]" htmlFor="contact-name">
          Your Name:
        </label>
        <input className={fieldClass} type="text" id="contact-name" name="name" required />
      </div>
      <div className="mb-4">
        <label className="block font-bold text-[#555]" htmlFor="contact-email">
          Your Email:
        </label>
        <input className={fieldClass} type="email" id="contact-email" name="email" required />
      </div>
      <div className="mb-5">
        <label className="block font-bold text-[#555]" htmlFor="contact-message">
          Your Message:
        </label>
        <textarea className={fieldClass} id="contact-message" name="message" rows={5} required />
      </div>
      <button className={primaryButtonClass} type="submit">
        Send Message
      </button>
      <SubmitStatus message={status} />
    </form>
  );
}
