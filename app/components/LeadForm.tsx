"use client";

import { FormEvent, useState } from "react";

type Kind = "contact" | "booking" | "experience";
const endpoint = "https://formsubmit.co/ajax/contact@indianmetaphysicalsociety.com";

export function LeadForm({ kind }: { kind: Kind }) {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error("Unable to submit");
      setState("success"); form.reset();
    } catch { setState("error"); }
  }

  const subject = kind === "booking" ? "New consultation request — Indian Metaphysical Society" : kind === "experience" ? "New experience submission — Indian Metaphysical Society" : "New website enquiry — Indian Metaphysical Society";

  if (state === "success") return (
    <div role="status" className="rounded-2xl border border-emerald-300/20 bg-emerald-300/5 p-8">
      <p className="eyebrow text-emerald-300">Message received</p>
      <h2 className="mt-4 text-2xl font-light">Thank you for trusting us.</h2>
      <p className="mt-3 leading-7 text-stone-400">We have received your submission and will respond by email as soon as possible.</p>
      <button className="mt-6 text-sm text-[#efc979]" onClick={() => setState("idle")}>Send another message</button>
    </div>
  );

  return (
    <form onSubmit={submit} className="grid gap-5" aria-label={`${kind} form`}>
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_template" value="table" />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="form_type" value={kind} />
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-stone-300">Full name<input className="field" name="name" required autoComplete="name" placeholder="Your name" /></label>
        <label className="grid gap-2 text-sm text-stone-300">Email address<input className="field" type="email" name="email" required autoComplete="email" placeholder="you@example.com" /></label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-stone-300">Phone / WhatsApp<input className="field" type="tel" name="phone" autoComplete="tel" placeholder="+91…" /></label>
        {kind === "booking" ? (
          <label className="grid gap-2 text-sm text-stone-300">Service<select className="field" name="service" required defaultValue=""><option value="" disabled>Select a service</option><option>Spiritual Guidance</option><option>Vedic Astrology Reading</option><option>Energy Healing Support</option><option>Dream Interpretation</option><option>Unusual Experience Consultation</option><option>Meditation & Sadhana Guidance</option></select></label>
        ) : (
          <label className="grid gap-2 text-sm text-stone-300">Subject<input className="field" name="subject" required placeholder={kind === "experience" ? "Dream, meditation, event…" : "How can we help?"} /></label>
        )}
      </div>
      {kind === "booking" && <div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm text-stone-300">Preferred date<input className="field" type="date" name="preferred_date" /></label><label className="grid gap-2 text-sm text-stone-300">Preferred time<input className="field" type="time" name="preferred_time" /></label></div>}
      {kind === "experience" && <div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm text-stone-300">Type of experience<select className="field" name="experience_type" required><option>Dream</option><option>Meditation or sadhana</option><option>Spiritual experience</option><option>Unexplained incident</option><option>Other</option></select></label><label className="grid gap-2 text-sm text-stone-300">Privacy preference<select className="field" name="privacy_preference" required><option>Keep completely private</option><option>May be shared anonymously</option><option>Contact me before any use</option></select></label></div>}
      <label className="grid gap-2 text-sm text-stone-300">{kind === "experience" ? "Describe what happened" : kind === "booking" ? "What would you like guidance about?" : "Your message"}<textarea className="field min-h-40 resize-y" name="message" required minLength={20} placeholder="Share enough detail for us to understand your request…" /></label>
      {kind === "booking" && <label className="flex gap-3 text-sm leading-6 text-stone-400"><input type="checkbox" name="understanding" required className="mt-1 accent-[#d8b56a]" />I understand that spiritual guidance and healing support are complementary practices and do not replace medical, legal, financial or mental-health care.</label>}
      {kind === "experience" && <label className="flex gap-3 text-sm leading-6 text-stone-400"><input type="checkbox" name="consent" required className="mt-1 accent-[#d8b56a]" />I confirm this is my own account and consent to the society reviewing it under the privacy preference selected above.</label>}
      {state === "error" && <p role="alert" className="text-sm text-red-300">The form could not be sent. Please try again or email contact@indianmetaphysicalsociety.com.</p>}
      <button disabled={state === "sending"} className="w-fit rounded-full bg-[#d8b56a] px-7 py-3.5 text-sm font-semibold text-[#08090c] transition hover:bg-[#eccf8c] disabled:cursor-wait disabled:opacity-60">{state === "sending" ? "Sending…" : kind === "booking" ? "Request consultation" : kind === "experience" ? "Submit experience" : "Send message"}</button>
      <p className="text-xs leading-5 text-stone-600">Your information is used only to respond to this request. Please avoid sending emergency or highly sensitive medical information through this form.</p>
    </form>
  );
}
