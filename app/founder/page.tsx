import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink, PageHero } from "../components/UI";

export const metadata: Metadata = {
  title: "Founder — Lakshay Kaushik",
  description: "Meet Lakshay Kaushik, founder of the Indian Metaphysical Society, and learn about his journey through engineering, art, software development, astrology and spiritual practice.",
  alternates: { canonical: "/founder" },
};

const journey = [
  ["Diploma in Mechanical Engineering", "My formal journey began with a diploma in Mechanical Engineering, where I developed a practical and analytical approach to solving problems."],
  ["B.Tech in Mechanical Engineering", "I continued my education with a Bachelor of Technology in Mechanical Engineering, strengthening my technical foundation and discipline."],
  ["Mechanical Industry", "I worked with mechanical companies and gained first-hand experience of professional systems, operations and industrial work culture."],
  ["BPO & Communication", "Working with various BPO organisations gave me exposure to diverse people, communication styles and real-world human concerns."],
  ["Professional Tattoo Artist", "I later worked professionally as a tattoo artist and ran my own studio, combining creativity, symbolism and close one-to-one interaction with clients."],
  ["Software Development", "Through self-learning, I transitioned into coding and software engineering. I currently work as a developer with a multinational organisation."],
  ["Sadhana & Astrology", "Alongside my professional life, I entered a disciplined spiritual path involving mantra sadhana, meditation, astrology and the study of Indian metaphysical traditions."],
  ["Indian Metaphysical Society", "I founded the society to bring knowledge, private guidance and responsible spiritual exploration together in one accessible space."],
];

export default function FounderPage() {
  return <>
    <PageHero eyebrow="About the founder" title="A journey across engineering, art, technology and inner exploration." copy="Lakshay Kaushik founded the Indian Metaphysical Society to create a thoughtful space where traditional knowledge can be studied, discussed and applied with responsibility." />
    <section className="py-24">
      <div className="section-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
        <aside>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#090d14]">
            <div className="flex aspect-[4/5] items-center justify-center bg-[radial-gradient(circle_at_50%_35%,rgba(111,201,242,.14),transparent_35%),linear-gradient(145deg,#0b111a,#07090d)] p-8 text-center">
              <div><img src="/founder-photo.jpg" alt="Indian Metaphysical Society emblem" className="mx-auto object-contain opacity-80" style={{ width: '100%', height: '100%' }} /></div>
            </div>
          </div>
          <p className="eyebrow mt-8 text-[#d8b56a]">Lakshay Kaushik</p>
          <h2 className="mt-3 text-3xl font-light">Founder & Spiritual Practitioner</h2>
          <p className="mt-5 leading-8 text-stone-400">My work brings together analytical thinking, creative expression, lived experience and sustained study of spiritual traditions. I offer guidance based on my practice and learning, while maintaining clear boundaries around healthcare and other regulated professional services.</p>
          <div className="mt-8 flex flex-wrap gap-3"><ButtonLink href="/book">Book a consultation</ButtonLink><ButtonLink href="/contact" secondary>Contact me</ButtonLink></div>
        </aside>
        <div>
          <p className="eyebrow">Professional & personal journey</p>
          <div className="mt-8 border-l border-white/10 pl-7 sm:pl-10">
            {journey.map(([title, copy], index) => <article key={title} className="relative pb-10 last:pb-0"><span className="absolute -left-[2.08rem] top-1.5 h-3 w-3 rounded-full border border-[#d8b56a] bg-[#080b11] sm:-left-[2.83rem]" /><p className="font-mono text-xs text-sky-300/70">0{index + 1}</p><h3 className="mt-2 text-2xl font-light">{title}</h3><p className="mt-3 max-w-2xl leading-8 text-stone-500">{copy}</p></article>)}
          </div>
        </div>
      </div>
    </section>
    <section className="border-y border-white/8 bg-[#080b11] py-24"><div className="section-shell grid gap-12 lg:grid-cols-2"><div><p className="eyebrow text-[#d8b56a]">My approach</p><h2 className="mt-4 text-3xl font-light sm:text-5xl">Guidance without fear or dependency.</h2></div><div className="grid gap-5 text-stone-400"><p className="leading-8">My intention is to listen carefully, understand the person’s context and offer a sincere perspective informed by astrology, symbolism, meditation and spiritual practice.</p><p className="leading-8">Spiritual guidance and energy-healing practices are complementary in nature. They are not presented as replacements for medical, psychological, legal or financial care.</p><Link href="/disclaimer" className="text-sm text-[#efc979]">Read the full disclaimer →</Link></div></div></section>
  </>;
}
