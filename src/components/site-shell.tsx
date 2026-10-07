"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { navItems, profile } from "@/data/portfolio";

export function AmbientBackground() {
  return <div className="ambient" aria-hidden="true"><div className="ambient-grid" /><span className="ambient-orb orb-a" /><span className="ambient-orb orb-b" /><span className="ambient-orb orb-c" /><div className="particle-field">{Array.from({ length: 28 }, (_, i) => <i key={i} style={{ "--i": i, left: `${(i * 37 + 9) % 100}%`, top: `${(i * 61 + 13) % 100}%` } as React.CSSProperties} />)}</div></div>;
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);
  useEffect(() => { setLight(document.documentElement.dataset.theme === "light"); }, []);
  function toggleTheme() {
    const next = !light;
    setLight(next);
    document.documentElement.dataset.theme = next ? "light" : "dark";
    try { localStorage.setItem("portfolio-theme", next ? "light" : "dark"); } catch { /* storage may be unavailable */ }
  }
  return <header className="site-header">
    <div className="header-inner glass">
      <Link href="/" className="brand focus-ring" aria-label={`${profile.name}, home`}><span className="brand-mark">K<span>.</span></span><span className="brand-name">KKC<span> / PORTFOLIO</span></span></Link>
      <nav className={`desktop-nav ${open ? "nav-open" : ""}`} aria-label="Main navigation">
        {navItems.map(item => <a key={item.href} className="nav-link focus-ring" href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
      </nav>
      <div className="header-actions">
        <button className="icon-button focus-ring" aria-label={`Switch to ${light ? "dark" : "light"} theme`} onClick={toggleTheme}>{light ? <Moon size={17} /> : <Sun size={17} />}</button>
        <Link href="/#contact" className="header-cta focus-ring">Let’s talk <ArrowUpRight size={15} /></Link>
        <button className="icon-button menu-button focus-ring" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
    </div>
  </header>;
}

export function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ duration: reduce ? 0 : 0.62, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-inner"><Link href="/" className="brand"><span className="brand-mark">K<span>.</span></span><span className="brand-name">KKC<span> / PORTFOLIO</span></span></Link><p>Thoughtful by design. Curious by nature.</p><div className="footer-links"><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a><a href={`mailto:${profile.email}`}>Email <ArrowUpRight size={13} /></a></div><small>© {new Date().getFullYear()} Krishna Kishore Chakraborty</small></div></footer>;
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return <><AmbientBackground /><ScrollProgress /><SiteHeader /><div>{children}</div><SiteFooter /></>;
}
