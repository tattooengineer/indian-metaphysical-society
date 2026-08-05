"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  ["About", "/about"],
  ["Founder", "/founder"],
  ["Services", "/services"],
  ["Blog", "/blog"],
  // ["Gallery", "/gallery"],
  ["Contact", "/contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#05070b]/88 backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between" aria-label="Primary navigation">
        <Link href="/" className="flex items-center gap-3" aria-label="Indian Metaphysical Society home">
          <img src="/logo.png" alt="" className="h-16 w-16 object-contain" />
          <span className="hidden text-xs tracking-[.2em] text-stone-300 xl:block">INDIAN METAPHYSICAL SOCIETY</span>
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className={`text-sm transition hover:text-[#efc979] ${path === href ? "text-[#efc979]" : "text-stone-300"}`}>
              {label}
            </Link>
          ))}
          <Link href="/share-experience" className="rounded-full border border-[#d8b56a]/60 bg-[#d8b56a]/10 px-5 py-2.5 text-sm text-[#f3d899] transition hover:bg-[#d8b56a] hover:text-[#090a0d]">
            Share an experience
          </Link>
        </div>
        <button type="button" onClick={() => setOpen(!open)} className="rounded-lg border border-white/12 px-3 py-2 text-sm md:hidden" aria-expanded={open} aria-controls="mobile-nav">
          {open ? "Close" : "Menu"}
        </button>
      </nav>
      {open && (
        <div id="mobile-nav" className="border-t border-white/8 bg-[#070a10] md:hidden">
          <div className="section-shell flex flex-col gap-4 py-5">
            {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
            <Link href="/book" className="text-[#efc979]" onClick={() => setOpen(false)}>Book a session</Link>
            <Link href="/share-experience" className="text-[#efc979]" onClick={() => setOpen(false)}>Share an experience</Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#040609]">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3"><img src="/logo.png" alt="" className="h-14 w-14 object-contain" /><span className="text-sm tracking-[.16em]">INDIAN METAPHYSICAL SOCIETY</span></div>
          <p className="mt-4 max-w-md text-sm leading-7 text-stone-500">A responsible space for traditional knowledge, private guidance and sincere exploration beyond the visible.</p>
        </div>
        <div>
          <p className="eyebrow text-[#d8b56a]">Explore</p>
          <div className="mt-4 grid gap-3 text-sm text-stone-400">
            <Link href="/services">Services</Link><Link href="/about">Our approach</Link><Link href="/founder">Founder</Link><Link href="/blog">Knowledge journal</Link>
            {/* <Link href="/gallery">Gallery</Link> */}
          </div>
        </div>
        <div>
          <p className="eyebrow text-[#d8b56a]">Connect</p>
          <div className="mt-4 grid gap-3 text-sm text-stone-400">
            <Link href="/book">Book a session</Link><Link href="/share-experience">Share an experience</Link><Link href="/contact">Contact us</Link><a href="https://wa.me/918398847320" target="_blank" rel="noreferrer">WhatsApp: +91 83988 47320</a>
            {/* <a href="tel:+918398847320">+91 83988 47320</a> */}
            <a href="mailto:contact@indianmetaphysicalsociety.com">contact@indianmetaphysicalsociety.com</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/8">
        <div className="section-shell flex flex-col gap-4 py-6 text-xs text-stone-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Indian Metaphysical Society</p>
          <div className="flex flex-wrap gap-5"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/disclaimer">Disclaimer</Link></div>
        </div>
      </div>
    </footer>
  );
}
