import { LeadForm } from "../components/LeadForm";
import { PageHero } from "../components/UI";
export const metadata = { title: "Share an Experience" };
export default function SharePage() {
  return <><PageHero eyebrow="Experience archive" title="Something unusual happened?" copy="Share a dream, meditation experience, spiritual event or unexplained incident. You choose how privately your account should be handled." />
    <section className="py-24"><div className="section-shell grid gap-12 lg:grid-cols-[.65fr_1.35fr]"><aside><p className="eyebrow text-[#d8b56a]">Your account matters</p><p className="mt-5 leading-7 text-stone-400">You do not need to decide what an experience “proves.” Describe what happened in your own words, including context, emotions and anything that changed afterwards.</p><p className="mt-5 text-sm leading-7 text-stone-500">We may discuss spiritual, symbolic, psychological and ordinary possibilities. We do not confirm supernatural causes as certainty.</p></aside><div className="rounded-3xl border border-white/10 bg-[#090d14] p-6 sm:p-10"><LeadForm kind="experience" /></div></div></section></>;
}
