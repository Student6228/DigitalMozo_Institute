import { ContactForm } from "../forms/ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-[#e9e9e9] py-16">
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="text-center text-3xl font-bold text-[#2c3e50]">Get in Touch</h2>
        <ContactForm />
      </div>
    </section>
  );
}
