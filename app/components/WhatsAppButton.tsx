export function WhatsAppButton() {
  const href = "https://wa.me/918398847320?text=Hello%2C%20I%27d%20like%20to%20know%20more%20about%20a%20consultation%20with%20the%20Indian%20Metaphysical%20Society.";
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Indian Metaphysical Society on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-2xl text-white shadow-[0_12px_40px_rgba(16,185,129,.35)] transition hover:-translate-y-1 hover:bg-emerald-400"
    >
      <span aria-hidden="true">✆</span>
    </a>
  );
}
