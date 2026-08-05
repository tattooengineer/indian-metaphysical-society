import { notFound } from "next/navigation";
import { articles } from "../../data";

const bodies: Record<string, { intro: string; sections: [string,string][] }> = {
  "how-to-approach-a-spiritual-reading": {
    intro: "A useful spiritual reading begins with the quality of the question. The aim is not to hand your agency to another person, but to see your situation from a wider and more honest perspective.",
    sections: [["Ask open but focused questions", "Questions such as “What pattern should I understand in this relationship?” invite more useful reflection than demanding a guaranteed yes-or-no prediction."], ["Bring context, not a performance", "Share the relevant facts, your uncertainty and what you have already tried. You do not need to sound spiritual or conceal ordinary explanations."], ["Keep your judgement", "Consider the reading alongside practical evidence, professional advice and your own values. Good guidance strengthens discernment rather than dependency."]],
  },
  "dream-symbols-and-personal-context": {
    intro: "Traditional symbols matter, but dreams also speak through a person’s memories, fears, relationships and current life. Interpretation becomes more responsible when both layers are considered.",
    sections: [["Begin with the feeling", "Ask what emotion was strongest and where it appears in waking life. The same image can feel protective to one person and threatening to another."], ["Notice repetition", "Repeated places, people or actions may indicate an unresolved concern or an important personal theme. Record the dream before forcing a conclusion."], ["Hold interpretations lightly", "A dream can be spiritually meaningful without functioning as a literal prediction. Treat an interpretation as a lens to test, not a command."]],
  },
  "my-first-astral-travel": {
    intro: "A personal experience that changed my understanding of consciousness forever.",
    sections: [
  [
    "Introduction",
    "Before I begin, I want to make one thing clear: this is my personal experience. I am not asking anyone to believe it blindly. I simply want to share an event that had a profound impact on my life and completely changed the way I viewed spirituality and consciousness."
  ],
  [
    "How My Journey Began",
    "In 2021, I went through a deeply personal and traumatic phase in my life. While I prefer not to discuss the details, that difficult period became the turning point that led me toward spirituality. Like many people searching for answers, I started reading about meditation, manifestation, astral projection, and consciousness. I watched countless videos and read many articles, hoping to experience these things for myself. Despite trying numerous guided astral projection sessions on YouTube, nothing ever seemed to happen. At that point, they were simply interesting concepts to me. Everything changed when I began my spiritual practice."
  ],
  [
    "Beginning My Sadhana",
    "About two years ago, I received Guru Diksha and began a disciplined routine of mantra chanting (jaap), meditation, and spiritual practice. Within the first few weeks, I started noticing experiences that felt completely new to me. During meditation and before sleep, I often experienced a strong pressure in the center of my forehead, energy-like sensations flowing throughout my body, and involuntary body movements or jerks while lying still. These experiences gradually became a regular part of my spiritual practice."
  ],
  [
    "The First Signs",
    "Since I was already interested in astral projection, I occasionally continued listening to guided meditation recordings before sleeping. One night, while lying completely still, I became aware of my body resting on the bed, yet I distinctly felt my legs becoming lighter, almost as though they were gently being lifted upward. Gradually, the sensation spread upward through my body. It felt as if something was separating from my physical body. However, every time the sensation reached my head, it stopped, almost as if I was unable to completely let go. This happened several times over the following days."
  ],
  [
    "The Night Everything Changed",
    "One particular night, I wasn't even trying to practice astral projection. I simply went to sleep after completing my regular spiritual routine. As usual, I experienced the familiar pressure on my forehead and the body movements I had grown accustomed to. Then something entirely different happened. I suddenly felt myself being pulled upward with incredible force. The sensation was unlike anything I had ever experienced before."
  ],
  [
    "A Journey Through Light",
    "It felt as though I had entered a glowing tunnel filled with brilliant light. Around me were countless flashes of symbols and patterns that seemed impossible to describe. Along with the visuals came incredibly intense sounds. I remember hearing what sounded like temple bells, horns, and powerful vibrations surrounding me from every direction. The experience was so vivid that it felt almost physical. Then, in an instant, everything became completely silent. There was only peace."
  ],
  [
    "Seeing Myself",
    "The next thing I remember was standing beside my bed. I felt completely conscious and aware. Nothing felt dreamlike. Thinking I was simply awake, I started walking as if I was going to drink some water. As I turned back toward my bed, I froze. I could clearly see my own body lying asleep. For a few moments, I simply stood there in complete shock. As someone with a technical background who naturally questions things, this experience completely challenged my understanding of reality."
  ],
  [
    "Curiosity Took Over",
    "Instead of simply observing the experience, curiosity got the better of me. I reached toward my sleeping body and touched its hand. The moment I did that, my sleeping body suddenly reacted. It moved under the blanket and shifted position, almost as if it sensed that someone had touched it while asleep. Seeing this frightened me because I had no idea what was happening. Instinctively, I called upon my Ishta Devta and prayed for protection. After that, everything faded."
  ],
  [
    "The Next Morning",
    "When I woke up, I surprisingly didn't remember the experience immediately. It wasn't until I sat down for my regular morning mantra chanting that every detail suddenly returned to me with complete clarity. It wasn't like remembering an ordinary dream. It felt more like recalling something that had genuinely happened. I spent the rest of the day reflecting on what I had experienced."
  ],
  [
    "How It Changed Me",
    "Whether someone interprets this experience as an astral projection, an unusually vivid conscious experience, or something else entirely is a personal matter. For me, however, it became one of the defining moments of my spiritual journey. It transformed spirituality from something I had only read about into something deeply personal that I wanted to continue exploring. Since then, my curiosity about meditation, consciousness, and Indian metaphysical traditions has only grown stronger."
  ],
  [
    "Looking Ahead",
    "This was only the beginning of my journey. Over the years, I have had several other experiences that have shaped my understanding of spirituality and consciousness. I look forward to sharing them with you in future articles. Thank you for reading and being part of this journey."
  ]
]
  },
   "tradition-without-sensationalism": {
    intro: "Respect for metaphysical tradition does not require exaggeration. In fact, careful language and honest boundaries protect both the tradition and the person seeking help.",
    sections: [["Separate experience from proof", "A sincere experience can be important even when its cause is uncertain. Describe what happened before declaring what it must mean."], ["Avoid fear-based certainty", "Claims of curses, possession or guaranteed miracles can create harm and dependency. Responsible guidance offers proportion, consent and alternatives."], ["Let integrity build trust", "Saying “I do not know” is sometimes the most truthful spiritual response. Credibility grows through humility and consistency."]],
  },
  "jinn-encounter": {
    intro: "Throughout my spiritual journey, I have experienced several events that challenged my understanding of reality. This is one of those experiences. Whether it was a symbolic dream, a spiritual encounter, or simply something my mind cannot fully explain, I leave that for you to decide. I am sharing this experience exactly as I remember it, hoping it encourages thoughtful exploration of the unseen.",
    sections: [
  [
    "Introduction",
    "This is another personal experience from my spiritual journey. I am simply sharing exactly what I experienced and how it affected me. Everyone is free to interpret such experiences in their own way."
  ],
  [
    "A Regular Morning",
    "This happened around one and a half years ago. At that time, I had not yet met my Guru, but I was following a disciplined spiritual routine every day. One morning, I woke up around 4:00 AM and noticed I still had about an hour before getting ready for work. I decided to go back to sleep, never imagining that this short nap would leave a lasting impression on me."
  ],
  [
    "An Unexpected Visitor",
    "In my dream, I found myself sitting in the guest room of my house. A man I had never seen before was sitting with me. He appeared friendly, calm, and seemed to know exactly why he was there. After a brief conversation, he told me that someone wanted to meet me. He described this being as a jinn and said it wished to speak with me."
  ],
  [
    "The Invitation",
    "At first, I wasn't interested. I asked him why I would want to speak to a jinn. He continued encouraging me and eventually asked me to step onto the balcony. Curious, I agreed. When I reached the balcony, I saw a man hanging effortlessly from the edge of the second-floor balcony. He looked at me with a smile and greeted me politely in my native language, almost as though he wanted to gain my trust."
  ],
  [
    "A Choice I Refused",
    "After introducing himself, he stretched out his hand and invited me to come with him. He said we could leave directly from the balcony if I simply held his hand. Something about the invitation made me uncomfortable. Instead of accepting, I told him I would come downstairs by myself. Looking back, I still remember feeling that I should not take his hand."
  ],
  [
    "Trying to Show My Family",
    "As I walked downstairs, I met my family coming up the stairs. I immediately told them there was a jinn outside and asked them to come with me. They didn't believe me. I took them back upstairs and searched for the mysterious figure. Eventually, I noticed him sitting quietly on the neighboring rooftop in a squatting position. I pointed toward him, but no one around me could see what I was seeing."
  ],
  [
    "The Protection Mantra",
    "At that moment, I instinctively raised my hand toward the figure and began chanting my protection mantra—the same mantra I regularly used during my spiritual practice. As soon as I finished chanting, the figure stood up. Instead of looking angry, I remember him appearing disappointed and upset, almost as though he had expected a different response from me. Without saying another word, he turned around and quietly walked away."
  ],
  [
    "Waking Up",
    "The very moment the figure disappeared, I woke up. Unlike most dreams that fade within minutes, every detail of this experience remained crystal clear in my memory. I remembered the conversations, the expressions, the surroundings, and every decision I had made throughout the dream."
  ],
  [
    "Looking Back",
    "To this day, I cannot say with certainty what I experienced. Some may see it as a symbolic dream, while others may interpret it through a spiritual lens. For me, it became another memorable event on my spiritual journey and reinforced the importance I place on my daily practice and the protection I seek through prayer and mantra. Whatever the explanation may be, it remains one of the most vivid and unforgettable dreams I have ever had."
  ]
],
  },
  "building-a-grounded-sadhana": {
    intro: "A spiritual practice becomes sustainable when it fits the body, mind, responsibilities and guidance available to the practitioner. Intensity is not the same as depth.",
    sections: [["Choose consistency", "A modest practice repeated steadily often transforms more than occasional extremes. Begin with a duration you can maintain without neglecting sleep, food, health or duties."], ["Keep a simple record", "Note the practice, duration, mood and after-effects. This helps distinguish stable benefits from temporary excitement or exhaustion."], ["Stay connected to ordinary life", "Healthy practice should support relationships, work, self-care and clear thinking. Seek qualified help if experiences become frightening, disruptive or unsafe."]],
  },
};

export function generateStaticParams() { return articles.map(({slug}) => ({slug})); }
export default async function ArticlePage({ params }: { params: Promise<{slug:string}> }) {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);
  const body = bodies[slug];
  if (!article || !body) notFound();
  return <article><header className="ims-grid border-b border-white/8 pt-20"><div className="section-shell py-24 sm:py-32"><p className="eyebrow text-[#d8b56a]">{article.category} · {article.read}</p><h1 className="mt-5 max-w-4xl text-4xl font-light leading-tight tracking-[-.04em] sm:text-6xl">{article.title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-stone-400">{article.excerpt}</p></div></header><div className="section-shell prose-ims max-w-3xl py-20"><p className="text-xl">{body.intro}</p>{body.sections.map(([h,p]) => <section key={h}><h2>{h}</h2><p>{p}</p></section>)}<div className="mt-12 rounded-2xl border border-[#d8b56a]/20 bg-[#d8b56a]/5 p-6 text-sm"><p>These articles are educational and reflective. They are not medical, mental-health, legal or financial advice.</p></div></div></article>;
}
