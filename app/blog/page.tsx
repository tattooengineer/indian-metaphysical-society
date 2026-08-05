import Link from "next/link";
import { PageHero } from "../components/UI";
import { articles } from "../data";
export const metadata = { title: "Knowledge Journal" };
export default function BlogPage() {
  return <><PageHero eyebrow="Knowledge journal" title="Ideas for sincere seekers." copy="Accessible writing on Indian metaphysics, spiritual practice, dreams and responsible interpretation." />
    <section className="py-24"><div className="section-shell grid gap-6 md:grid-cols-2">{articles.map((a,i) => <Link href={`/blog/${a.slug}`} key={a.slug} className={`${i===0 ? "md:col-span-2" : ""} group rounded-3xl border border-white/10 bg-[#090d14] p-8 transition hover:border-[#d8b56a]/30 sm:p-10`}><p className="eyebrow text-[#d8b56a]">{a.category} · {a.read}</p><h2 className={`mt-5 font-light ${i===0 ? "text-3xl sm:text-5xl" : "text-3xl"}`}>{a.title}</h2><p className="mt-5 max-w-2xl leading-7 text-stone-500">{a.excerpt}</p><span className="mt-8 inline-block text-sm text-sky-300">Read article ↗</span></Link>)}</div></section></>;
}
