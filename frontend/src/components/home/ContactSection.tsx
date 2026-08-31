import { ContactForm } from "../forms/ContactForm";
import { SectionHeading } from "../common/SectionHeading";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-slate-100/70 py-20 md:py-28">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Direct Inquiries"
          title="Get in Touch with Our Team"
          description="Have questions about courses, schedules, fees, or placement support? Send us a message or visit our campus."
        />

        <div className="mt-14 mx-auto max-w-[900px] rounded-3xl bg-white p-8 sm:p-12 border border-slate-200/80 shadow-xl">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
