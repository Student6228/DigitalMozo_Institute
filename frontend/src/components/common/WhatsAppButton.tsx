/**
 * Floating WhatsApp button — shows on all pages.
 * Clicking opens a WhatsApp chat with a pre-filled message.
 */

const WHATSAPP_NUMBER = "918638443812"; // +91 86384 43812
const PRE_FILLED_MESSAGE = encodeURIComponent(
  "Hello! I am interested in learning more about courses at DigitalMozo Institute.",
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${PRE_FILLED_MESSAGE}`;

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-5 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] shadow-[0_4px_20px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_28px_rgba(37,211,102,0.7)]"
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-8 w-8"
        fill="white"
        aria-hidden="true"
      >
        <path d="M16.004 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.37.635 4.587 1.745 6.506L2.667 29.333l7.034-1.72A13.286 13.286 0 0 0 16.004 29.333c7.368 0 13.33-5.969 13.33-13.333 0-7.364-5.962-13.333-13.33-13.333Zm7.477 18.584c-.31.871-1.817 1.666-2.489 1.724-.673.059-1.3.317-4.37-.905-3.713-1.468-6.097-5.266-6.279-5.512-.182-.246-1.483-1.98-1.483-3.774 0-1.793.937-2.676 1.27-3.044.332-.368.726-.46.968-.46.243 0 .486 0 .697.009.224.009.524-.085.821.626.31.74 1.049 2.533 1.14 2.717.092.184.152.4.031.636-.121.237-.182.384-.364.59-.182.208-.38.463-.547.623-.182.182-.373.376-.16.737.212.36.943 1.567 2.027 2.54 1.392 1.247 2.567 1.632 2.928 1.814.36.183.568.152.777-.09.212-.243.9-1.054 1.14-1.416.24-.36.48-.3.808-.18.33.12 2.1 1 2.46 1.183.36.18.6.27.693.42.09.15.09.86-.22 1.73Z" />
      </svg>
    </a>
  );
}
