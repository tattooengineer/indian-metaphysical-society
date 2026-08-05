import Link from "next/link";

export function ButtonLink({ href, children, secondary = false }: { href: string; children: React.ReactNode; secondary?: boolean }) {
  return <Link href={href} className={secondary ? "rounded-full border border-white/12 bg-white/[.03] px-7 py-3.5 text-center text-sm transition hover:border-sky-300/35 hover:bg-sky-300/5" : "rounded-full bg-[#d8b56a] px-7 py-3.5 text-center text-sm font-semibold text-[#08090c] transition hover:-translate-y-0.5 hover:bg-[#eccf8c]"}>{children}</Link>;
}

export function PageHero({ eyebrow, title, copy, children }: { eyebrow: string; title: string; copy: string; children?: React.ReactNode }) {
  return (
    <section className="ims-grid relative overflow-hidden border-b border-white/8 pt-20">
      <div className="ims-noise pointer-events-none absolute inset-0 opacity-25" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 rounded-full bg-sky-500/10 blur-[110px]" />
      <div className="section-shell relative py-24 sm:py-32">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-light leading-[1.05] tracking-[-.04em] sm:text-6xl">{title}</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-400">{copy}</p>
        {children && <div className="mt-9 flex flex-wrap gap-4">{children}</div>}
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="px-5 py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-sky-300/15 bg-gradient-to-br from-[#0d1722] via-[#090d14] to-[#171107] p-8 sm:p-12 lg:p-16">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-sky-400/10 blur-[90px]" />
        <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div><p className="eyebrow">A private first conversation</p><h2 className="mt-5 text-3xl font-light sm:text-5xl">You do not have to navigate every question alone.</h2><p className="mt-5 max-w-2xl leading-7 text-stone-400">Tell us what you are experiencing. We will respond with honesty, care and clear expectations.</p></div>
          <ButtonLink href="/book">Book a session</ButtonLink>
        </div>
      </div>
    </section>
  );
}
