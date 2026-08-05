"use client";

import { FormEvent, useState } from "react";

declare global {
  interface Window { Razorpay?: new (options: Record<string, unknown>) => { open: () => void }; }
}

const endpoint = "https://formsubmit.co/ajax/contact@indianmetaphysicalsociety.com";
const services = [
  ["Spiritual Guidance", "₹1,499"],
  ["Vedic Astrology Reading", "₹1,999"],
  ["Energy Healing Support", "₹1,499"],
  ["Dream Interpretation", "₹999"],
  ["Unusual Experience Consultation", "₹1,499"],
  ["Meditation & Sadhana Guidance", "₹1,499"],
];

async function loadRazorpay() {
  if (window.Razorpay) return true;
  return new Promise<boolean>((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export function BookingForm() {
  const [state, setState] = useState<"idle" | "processing" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("processing"); setError("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const loaded = await loadRazorpay();
      if (!loaded) throw new Error("Payment window could not be loaded. Please check your connection.");
      const orderRes = await fetch("/api/razorpay/order", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ service: data.service }) });
      const order = await orderRes.json();
      if (!orderRes.ok) throw new Error(order.error || "Unable to start payment.");

      const RazorpayCtor = window.Razorpay;
      if (!RazorpayCtor) throw new Error("Razorpay checkout is unavailable.");
      const razorpay = new RazorpayCtor({
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        name: "Indian Metaphysical Society",
        description: String(data.service),
        order_id: order.orderId,
        prefill: { name: data.name, email: data.email, contact: data.phone },
        notes: { service: data.service, preferred_date: data.preferred_date, preferred_time: data.preferred_time },
        theme: { color: "#d8b56a" },
        handler: async (payment: Record<string, string>) => {
          const verifyRes = await fetch("/api/razorpay/verify", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payment) });
          const verification = await verifyRes.json();
          if (!verifyRes.ok || !verification.verified) { setState("error"); setError("Payment verification failed. Please contact us with your payment ID."); return; }

          const submission = { ...data, _subject: "Paid booking — Indian Metaphysical Society", _template: "table", form_type: "paid_booking", payment_status: "verified", amount: `₹${order.displayAmount}`, ...payment };
          const mailRes = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(submission) });
          if (!mailRes.ok) { setState("error"); setError("Payment succeeded, but the confirmation message could not be sent. Please WhatsApp us with your payment ID."); return; }
          form.reset(); setState("success");
        },
        modal: { ondismiss: () => setState("idle") },
      });
      razorpay.open();
    } catch (e) {
      setState("error"); setError(e instanceof Error ? e.message : "Unable to process your booking.");
    }
  }

  if (state === "success") return <div role="status" className="rounded-2xl border border-emerald-300/20 bg-emerald-300/5 p-8"><p className="eyebrow text-emerald-300">Payment verified</p><h2 className="mt-4 text-2xl font-light">Your booking request is confirmed.</h2><p className="mt-3 leading-7 text-stone-400">We have received your details and payment information. We will contact you to confirm the final session time.</p><button className="mt-6 text-sm text-[#efc979]" onClick={() => setState("idle")}>Book another session</button></div>;

  return <form onSubmit={submit} className="grid gap-5" aria-label="Paid appointment booking form">
    <div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm text-stone-300">Full name<input className="field" name="name" required autoComplete="name" placeholder="Your name" /></label><label className="grid gap-2 text-sm text-stone-300">Email address<input className="field" type="email" name="email" required autoComplete="email" placeholder="you@example.com" /></label></div>
    <div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm text-stone-300">Phone / WhatsApp<input className="field" type="tel" name="phone" required autoComplete="tel" placeholder="+91…" /></label><label className="grid gap-2 text-sm text-stone-300">Service<select className="field" name="service" required defaultValue=""><option value="" disabled>Select a service</option>{services.map(([name, price]) => <option key={name} value={name}>{name} — {price}</option>)}</select></label></div>
    <div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm text-stone-300">Preferred date<input className="field" type="date" name="preferred_date" required /></label><label className="grid gap-2 text-sm text-stone-300">Preferred time<input className="field" type="time" name="preferred_time" required /></label></div>
    <label className="grid gap-2 text-sm text-stone-300">What would you like guidance about?<textarea className="field min-h-40 resize-y" name="message" required minLength={20} placeholder="Share enough detail for us to understand your request…" /></label>
    <label className="flex gap-3 text-sm leading-6 text-stone-400"><input type="checkbox" name="understanding" required className="mt-1 accent-[#d8b56a]" />I understand that spiritual guidance and healing support are complementary practices and do not replace medical, legal, financial or mental-health care.</label>
    {state === "error" && <p role="alert" className="text-sm text-red-300">{error}</p>}
    <button disabled={state === "processing"} className="w-fit rounded-full bg-[#d8b56a] px-7 py-3.5 text-sm font-semibold text-[#08090c] transition hover:bg-[#eccf8c] disabled:cursor-wait disabled:opacity-60">{state === "processing" ? "Opening secure payment…" : "Pay & request appointment"}</button>
    <p className="text-xs leading-5 text-stone-600">Payment is securely processed by Razorpay. Your preferred time is confirmed after our team checks availability.</p>
  </form>;
}
