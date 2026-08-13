import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "./components/Shell";
import { WhatsAppButton } from "./components/WhatsAppButton";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://indianmetaphysicalsociety.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Indian Metaphysical Society | Vedic Astrology, Spiritual Guidance & Paranormal Research",
    template: "%s | Indian Metaphysical Society",
  },

  description:
    "Explore Vedic astrology, kundli analysis, spiritual guidance, dream interpretation, meditation, mantra sadhana, astral projection, paranormal research, consciousness studies and Indian metaphysical traditions.",

  keywords: [
    // Brand
    "Indian Metaphysical Society",
    "IMS",

    // Astrology
    "Astrology",
    "Vedic Astrology",
    "Jyotish",
    "Jyotish Shastra",
    "Birth Chart",
    "Natal Chart",
    "Kundli",
    "Kundli Reading",
    "Horoscope",
    "Planetary Analysis",
    "Dasha",
    "Mahadasha",
    "Transit",
    "Navamsa",
    "Career Astrology",
    "Marriage Astrology",
    "Love Astrology",

    // Spirituality
    "Spirituality",
    "Spiritual Guidance",
    "Meditation",
    "Meditation Teacher",
    "Sadhana",
    "Mantra",
    "Mantra Sadhana",
    "Guru",
    "Yoga",
    "Consciousness",
    "Self Realization",
    "Inner Awakening",
    "Kundalini",
    "Energy Healing",
    "Healing",
    "Chakras",
    "Aura",

    // Dreams
    "Dream Interpretation",
    "Dream Meaning",
    "Spiritual Dreams",
    "Lucid Dreaming",

    // Paranormal
    "Paranormal",
    "Paranormal Investigation",
    "Ghost",
    "Ghosts",
    "Haunted Places",
    "Haunted House",
    "Spirit",
    "Spirits",
    "Negative Energy",
    "Entity",
    "Supernatural",
    "Occult",
    "Mysticism",

    // Astral
    "Astral Travel",
    "Astral Projection",
    "Out of Body Experience",
    "OBE",
    "Remote Viewing",

    // Indian traditions
    "Tantra",
    "Yantra",
    "Vedic Wisdom",
    "Ancient Indian Knowledge",
    "Indian Philosophy",
    "Sanatan Dharma",
    "Hindu Spirituality",
    "Upanishads",

    // Research
    "Metaphysics",
    "Metaphysical Research",
    "Consciousness Research",
    "Parapsychology",
    "Near Death Experience",
    "NDE",
    "Mystical Experiences"
  ],

  authors: [{ name: "Lakshay Kaushik" }],
  creator: "Indian Metaphysical Society",

  alternates: {
    canonical: siteUrl,
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    title:
      "Indian Metaphysical Society | Vedic Astrology & Spiritual Guidance",
    description:
      "Ancient wisdom, Vedic astrology, meditation, dreams, consciousness and responsible spiritual exploration.",
    type: "website",
    url: siteUrl,
    siteName: "Indian Metaphysical Society",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Indian Metaphysical Society",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Indian Metaphysical Society",
    description:
      "Vedic Astrology • Spiritual Guidance • Consciousness Research",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", name: "Indian Metaphysical Society", url: siteUrl, logo: `${siteUrl}/logo.png`, founder: { "@type": "Person", name: "Lakshay Kaushik" }, contactPoint: { "@type": "ContactPoint", telephone: "+91-96655-53569", contactType: "customer service", areaServed: "Worldwide", availableLanguage: ["English", "Hindi"] } },
      { "@type": "WebSite", name: "Indian Metaphysical Society", url: siteUrl },
    ],
  };
  return (
    <html lang="en">
      <body className={`${geist.variable} ${mono.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
