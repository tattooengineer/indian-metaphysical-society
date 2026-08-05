import Link from "next/link";
import { articles, services } from "./data";
import { ButtonLink, FinalCTA } from "./components/UI";

const principles = [
  ["Tradition First", "We respect authentic Indian metaphysical traditions instead of modern sensationalism."],
  ["Personal Attention", "Every consultation is tailored to the individual and their circumstances."],
  ["Privacy", "Your questions and spiritual experiences are handled confidentially."],
  ["Honest Guidance", "We value integrity over dramatic claims and tell you clearly what we can and cannot offer."],
  ["Compassion", "Our purpose is to support people—not create fear, pressure or dependency."],
];

const faqs = [
  ["What happens during a consultation?", "We begin by understanding your questions and context, then offer a traditional interpretation, practical guidance and space for follow-up questions."],
  ["Can a reading guarantee future events?", "No. A reading can explore patterns, possibilities and timing, but it should support informed choices rather than replace your judgement."],
  ["Can energy healing replace medical treatment?", "No. Spiritual healing is offered only as complementary wellbeing support and never as a substitute for qualified healthcare or emergency help."],
  ["Are online sessions available?", "Yes. Consultations and spiritual-healing support can be conducted remotely, subject to availability and suitability."],
  ["Will my information remain private?", "Yes. Submissions are handled with care and are not published without the permission option you select."],
];

export default function Home() {
  return (
    <>
      <section className="ims-grid relative isolate min-h-screen pt-20">
        <div className="ims-noise pointer-events-none absolute inset-0 opacity-30" />
        <div className="section-shell relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-20 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[.03] px-4 py-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-300 shadow-[0_0_12px_rgba(125,211,252,.9)]" /><span className="font-mono text-[10px] tracking-[.24em] text-stone-300">ANCIENT WISDOM · PERSONAL GUIDANCE</span></div>
            <h1 className="max-w-3xl text-5xl font-light leading-[1.04] tracking-[-.045em] sm:text-6xl lg:text-7xl">Seek answers <span className="block bg-gradient-to-r from-[#f0d18d] via-[#c79c43] to-sky-300 bg-clip-text text-transparent">beyond the physical.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-400">Explore Indian metaphysics through authentic traditions and receive thoughtful, private guidance for life’s deeper questions, spiritual experiences and personal transformation.</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row"><ButtonLink href="/book">Book a reading</ButtonLink><ButtonLink href="/services" secondary>Explore services</ButtonLink></div>
            <div className="mt-14 grid max-w-xl grid-cols-3 gap-5 border-t border-white/8 pt-7">
              {[["Study", "Traditions and texts"], ["Guide", "Personal questions"], ["Support", "Grounded practices"]].map(([title, copy]) => <div key={title}><p className="font-mono text-xs tracking-[.15em] text-[#d8b56a]">{title.toUpperCase()}</p><p className="mt-2 text-xs leading-5 text-stone-500">{copy}</p></div>)}
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-[7%] rounded-full border border-[#d8b56a]/30 shadow-[0_0_90px_rgba(44,134,220,.12)]" />
            <div className="absolute inset-[17%] rounded-full border border-sky-400/20" />
            <img src="/logo.png" alt="Indian Metaphysical Society emblem"  />
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#080b11] py-24">
        <div className="section-shell">
          <div className="max-w-2xl"><p className="eyebrow">Our services</p><h2 className="mt-4 text-3xl font-light tracking-tight sm:text-5xl">Guidance for the questions that stay with you.</h2><p className="mt-5 leading-7 text-stone-400">Choose a focused consultation or begin by telling us what you are experiencing.</p></div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
            {services.map((item) => <Link href={`/services#${item.slug}`} key={item.slug} className="group bg-[#090d14] p-8 transition hover:bg-[#0d131d]"><div className="flex justify-between"><span className="font-mono text-xs text-[#d8b56a]">{item.number}</span><span className="text-2xl text-sky-300/35 group-hover:text-sky-300">↗</span></div><h3 className="mt-10 text-2xl font-light">{item.title}</h3><p className="mt-4 max-w-md leading-7 text-stone-500">{item.short}</p></Link>)}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="eyebrow text-[#d8b56a]">Why people trust us</p><h2 className="mt-4 text-3xl font-light sm:text-5xl">Mystery deserves integrity.</h2><img src="/ims-trust-hands-transparent.png" alt="Hands protecting a traditional lamp" className="mx-auto mt-6 max-h-[480px] object-contain" /></div>
          <div className="divide-y divide-white/8 border-y border-white/8">{principles.map(([title, copy], i) => <div key={title} className="grid gap-4 py-8 sm:grid-cols-[3rem_1fr]"><span className="font-mono text-xs text-sky-300/60">0{i + 1}</span><div><h3 className="text-xl">{title}</h3><p className="mt-3 leading-7 text-stone-500">{copy}</p></div></div>)}</div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#080b11] py-24">
        <div className="section-shell"><p className="eyebrow">How it works</p><h2 className="mt-4 text-3xl font-light sm:text-5xl">A clear, private process.</h2><div className="mt-14 grid gap-6 md:grid-cols-4">{[["01", "Choose your service", "Select a reading or tell us what kind of support you need."], ["02", "Share your question", "Complete the private form with relevant context and preferred timing."], ["03", "Meet online", "Receive a focused consultation with time for your questions."], ["04", "Integrate", "Leave with practical guidance and optional follow-up support."]].map(([n,t,c]) => <article key={n} className="rounded-2xl border border-white/10 bg-[#090d14] p-6"><span className="font-mono text-xs text-[#d8b56a]">{n}</span><h3 className="mt-8 text-xl">{t}</h3><p className="mt-3 text-sm leading-7 text-stone-500">{c}</p></article>)}</div></div>
      </section>

      <section className="py-24">
        <div className="section-shell"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="eyebrow">Knowledge journal</p><h2 className="mt-4 text-3xl font-light sm:text-5xl">Study deeply. Question respectfully.</h2></div><Link href="/blog" className="text-sm text-[#efc979]">View all articles →</Link></div><div className="mt-12 grid gap-6 md:grid-cols-3">{articles.slice(0,3).map((a) => <Link key={a.slug} href={`/blog/${a.slug}`} className="rounded-2xl border border-white/10 bg-white/[.025] p-7 transition hover:-translate-y-1 hover:border-[#d8b56a]/30"><p className="eyebrow text-[#d8b56a]">{a.category} · {a.read}</p><h3 className="mt-5 text-2xl font-light">{a.title}</h3><p className="mt-4 leading-7 text-stone-500">{a.excerpt}</p></Link>)}</div></div>
      </section>

        {/* <section className="border-y border-white/8 bg-[#080b11] py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="eyebrow">Frequently asked</p><h2 className="mt-4 text-3xl font-light sm:text-5xl">Meet the Founder</h2></div><div className=""><video src="/foundervideo.mov" controls/></div></div>
      </section> */}

      <section className="border-y border-white/8 bg-[#080b11] py-24">
        <div className="section-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="eyebrow">Frequently asked</p><h2 className="mt-4 text-3xl font-light sm:text-5xl">Before you begin.</h2></div><div className="divide-y divide-white/10 border-y border-white/10">{faqs.map(([q,a]) => <details key={q} className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg"><span>{q}</span><span className="text-[#d8b56a] transition group-open:rotate-45">+</span></summary><p className="mt-4 max-w-2xl pr-10 leading-7 text-stone-500">{a}</p></details>)}</div></div>
      </section>

     
      <FinalCTA />
    </>
  );
}
