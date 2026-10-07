"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit, BriefcaseBusiness, Check, Code2, Compass, ExternalLink, GraduationCap, HeartHandshake, Layers3, Linkedin, Mail, Sparkles, Terminal, Waypoints } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { FadeIn, PageFrame } from "@/components/site-shell";
import { profile, projects, skillGroups } from "@/data/portfolio";

const iconMap = { code: Code2, spark: Sparkles, chart: Waypoints, globe: Compass, layers: Layers3, heart: HeartHandshake };

function SectionHeading({ eyebrow, title, description, side }: { eyebrow: string; title: React.ReactNode; description?: string; side?: React.ReactNode }) {
  return <div className="section-heading"><div><span className="eyebrow">{eyebrow}</span><h2 className="section-title">{title}</h2>{description && <p>{description}</p>}</div>{side}</div>;
}

function ProjectArt({ variant }: { variant: string }) {
  return <div className={`project-art art-${variant}`} aria-hidden="true"><div className="art-top"><span>PROJECT / CONCEPT</span><span>↗</span></div>{variant === "chart" ? <div className="chart-art"><div className="chart-labels"><b>MODEL SIGNAL</b><span>+18.6%</span></div><div className="chart-bars">{[26,43,36,58,49,74,67,88,62,96,78,100].map((height, i) => <i key={i} style={{ "--bar": `${height}%`, "--delay": `${i * 55}ms` } as React.CSSProperties} />)}</div><div className="chart-foot"><span>FEATURE IMPORTANCE</span><span>01 — 12</span></div></div> : variant === "orbit" ? <div className="orbit-art"><div className="orbit-ring ring-a"/><div className="orbit-ring ring-b"/><div className="orbit-ring ring-c"/><div className="orbit-core"><Sparkles size={23}/></div><span className="orbit-node node-a"/><span className="orbit-node node-b"/><span className="orbit-node node-c"/></div> : <div className="pulse-art"><div className="pulse-label"><i/> SYSTEM HEALTH <b>98.4%</b></div><svg viewBox="0 0 440 160" role="presentation"><defs><linearGradient id="pulseGradient" x1="0" x2="1"><stop stopColor="#b193ff"/><stop offset="1" stopColor="#66e7e8"/></linearGradient></defs><path d="M0 105h56l22-44 31 80 42-103 37 73 28-39 25 27 28-62 32 70 24-31h115" fill="none" stroke="url(#pulseGradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M0 105h56l22-44 31 80 42-103 37 73 28-39 25 27 28-62 32 70 24-31h115v55H0z" fill="url(#pulseGradient)" opacity=".08"/></svg><div className="pulse-foot"><span>LATENCY</span><b>42 ms</b><span>DRIFT</span><b>LOW</b></div></div>}</div>;
}

function Hero() {
  const reduce = useReducedMotion();
  const name = profile.name.split(" ");
  return <section id="top" className="hero section-wrap"><div className="hero-left">
    <motion.div initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="availability"><span className="availability-dot"/>{profile.availability}</motion.div>
    <h1><span className="hero-kicker">HELLO, I’M</span><span className="name-line">{name.map((word, i) => <motion.span key={word} initial={reduce ? false : { opacity: 0, y: "70%" }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .17 + i * .095, duration: .68, ease: [.22, 1, .36, 1] }}>{word}{i < name.length - 1 ? " " : ""}</motion.span>)}</span></h1>
    <p className="hero-headline">{profile.headline.split("intelligent future.")[0]}<span className="text-gradient">intelligent future.</span></p>
    <p className="hero-summary">{profile.summary}</p>
    <div className="hero-actions"><Link className="button button-primary" href="/resume"><BriefcaseBusiness size={15}/> View résumé <ArrowUpRight size={15}/></Link><a className="button button-glass" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15}/> LinkedIn</a><a className="button button-glass" href="#contact">Contact me <ArrowRight size={15}/></a></div>
    <div className="hero-proof"><span><Check size={13}/> Curiosity-led</span><span><Check size={13}/> Human-centered</span><span><Check size={13}/> Always learning</span></div>
  </div>
  <motion.div className="hero-visual" initial={reduce ? false : { opacity: 0, scale: .94, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .8, delay: .25 }}>
    <div className="visual-halo"/><div className="visual-grid"/><div className="profile-card glass"><div className="profile-card-top"><div className="avatar-mark">K<span>.</span></div><div className="profile-status"><i/> AVAILABLE TO CONNECT</div></div><div className="monogram-art"><div className="mono-orbit mono-a"/><div className="mono-orbit mono-b"/><div className="mono-orbit mono-c"/><div className="mono-center"><span>KK</span><i>✳</i></div><span className="floating-chip chip-ai"><BrainCircuit size={14}/> AI / ML</span><span className="floating-chip chip-code"><Terminal size={14}/> CODE</span><span className="floating-chip chip-ideas"><Sparkles size={14}/> IDEAS</span></div><div className="profile-card-bottom"><div><span className="eyebrow">AREAS OF INTEREST</span><p>Artificial intelligence <b>·</b> Product thinking <b>·</b> Software</p></div><ArrowUpRight size={19}/></div></div>
    <div className="floating-note note-a glass-soft"><span className="note-icon"><Sparkles size={15}/></span><span><small>THE NORTH STAR</small><b>Useful over impressive</b></span></div><div className="floating-note note-b glass-soft"><span className="note-icon note-cyan"><Waypoints size={15}/></span><span><small>THE APPROACH</small><b>Learn · build · refine</b></span></div>
  </motion.div>
  <a href="#about" className="hero-scroll" aria-label="Scroll to About"><span>SCROLL TO EXPLORE</span><ArrowDown size={14}/></a>
  </section>;
}

function About() {
  return <section id="about" className="section-wrap section-block"><SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Curiosity with a <span className="text-gradient">practical streak.</span></>} description="Technology is most exciting when it makes something clearer, kinder, or more capable." />
    <div className="about-grid"><FadeIn className="about-main glass"><div className="about-mark"><Sparkles size={19}/></div><span className="eyebrow">MY POINT OF VIEW</span><h3>Good technology should make people feel more capable.</h3><p>I’m drawn to the craft of translating complex ideas into tools that feel approachable. Artificial intelligence and machine learning create new possibilities; thoughtful engineering and clear design help those possibilities serve real needs.</p><p>This portfolio is a starting point: a place to develop ideas, share learning, and grow through hands-on work. The project showcases below are clearly marked concepts that can evolve into real builds.</p><a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-link">A bit more on LinkedIn <ArrowUpRight size={14}/></a></FadeIn>
      <div className="about-side"><FadeIn className="value-card glass" delay={.08}><span className="value-icon"><BrainCircuit size={18}/></span><div><span className="eyebrow">EXPLORING</span><h4>AI that earns trust</h4><p>Explainable systems, useful generative AI, and responsible product choices.</p></div><span className="value-number">01</span></FadeIn><FadeIn className="value-card glass" delay={.16}><span className="value-icon cyan-icon"><Code2 size={18}/></span><div><span className="eyebrow">BUILDING TOWARD</span><h4>Engineering with care</h4><p>Accessible interfaces, reliable foundations, and details that feel considered.</p></div><span className="value-number">02</span></FadeIn><FadeIn className="value-card glass" delay={.24}><span className="value-icon violet-icon"><Compass size={18}/></span><div><span className="eyebrow">LOOKING FORWARD</span><h4>Learning through practice</h4><p>Real problems, thoughtful teams, and room to try, measure, and improve.</p></div><span className="value-number">03</span></FadeIn></div>
    </div>
    <div className="profile-note"><span className="profile-note-icon"><GraduationCap size={18}/></span><p><strong>Education & career details</strong><br/>Profile-specific education and experience details are being added from verified sources.</p><a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-link">View LinkedIn <ExternalLink size={13}/></a></div>
  </section>;
}

function Skills() {
  return <section id="skills" className="section-wrap section-block"><SectionHeading eyebrow="TOOLKIT & CRAFT" title={<>A growing <span className="text-gradient">set of tools.</span></>} description="Areas of interest to shape into practical skills through building and collaboration." side={<span className="section-side-note"><span className="pulse-dot"/> LEARNING IN PROGRESS</span>} />
    <div className="skills-grid">{skillGroups.map((group, idx) => { const Icon = iconMap[group.icon as keyof typeof iconMap]; return <FadeIn key={group.title} delay={idx * .045} className="skill-card glass"><div className="skill-card-head"><span className={`skill-icon skill-tone-${idx}`}><Icon size={18}/></span><span className="skill-index">0{idx + 1}</span></div><h3>{group.title}</h3><div className="skill-tags">{group.skills.map((skill, i) => <span className="skill-pill" key={skill}><i style={{ "--skill-delay": `${(idx * 3 + i) * 90}ms` } as React.CSSProperties}/>{skill}</span>)}</div><div className="skill-bottom"><span>AREA OF INTEREST</span><span className="skill-line"><i style={{ "--skill-width": `${48 + idx * 6}%`, "--skill-delay": `${idx * 130}ms` } as React.CSSProperties}/></span></div></FadeIn>})}</div>
    <p className="skills-footnote"><Sparkles size={14}/> Starter tags are examples to verify or replace; indicators visualize focus areas, not proficiency claims.</p>
  </section>;
}

function Work() {
  return <section id="work" className="section-wrap section-block"><SectionHeading eyebrow="SELECTED DIRECTIONS" title={<>Ideas worth <span className="text-gradient">making real.</span></>} description="Three thoughtful project briefs built around real product questions. These are concept showcases—not completed projects." side={<span className="concept-badge"><span/> CONCEPT SHOWCASES</span>} />
    <div className="project-grid">{projects.map((project, i) => <FadeIn key={project.slug} delay={i * .08} className={`project-card glass project-${project.visual}`}><ProjectArt variant={project.visual}/><div className="project-copy"><div className="project-meta"><span>{project.category}</span><span>{project.number}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-tech">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div><Link className="project-link" href={`/projects/${project.slug}`}>Explore concept <ArrowRight size={15}/></Link></div></FadeIn>)}</div>
  </section>;
}

function Journey() {
  return <section id="journey" className="section-wrap section-block"><SectionHeading eyebrow="THE JOURNEY" title={<>Grounded in learning. <span className="text-gradient">Open to what’s next.</span></>} description="The next chapter is best told with accurate details. Verified milestones can be added as they’re ready to share." />
    <div className="journey-grid"><FadeIn className="journey-panel glass"><div className="journey-panel-head"><span className="journey-icon"><BriefcaseBusiness size={18}/></span><div><span className="eyebrow">EXPERIENCE</span><h3>Work & collaboration</h3></div></div><div className="empty-timeline"><div className="timeline-rail"><i/></div><div><strong>Room for the real story</strong><p>Internships, roles, and hands-on experience will appear here once verified profile details are available.</p><a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={14}/></a></div></div><div className="journey-bottom"><span>OPEN TO INTERNSHIPS & EARLY-CAREER ROLES</span><span className="journey-number">01</span></div></FadeIn>
      <FadeIn className="journey-panel glass" delay={.1}><div className="journey-panel-head"><span className="journey-icon journey-icon-cyan"><GraduationCap size={18}/></span><div><span className="eyebrow">EDUCATION</span><h3>Learning & foundations</h3></div></div><div className="empty-timeline"><div className="timeline-rail rail-cyan"><i/></div><div><strong>Details coming into focus</strong><p>Institution, degree, dates, and achievements belong here. They’ll be added from a verified source rather than guessed.</p><a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">View profile <ArrowUpRight size={14}/></a></div></div><div className="journey-bottom"><span>ALWAYS LEARNING, ALWAYS BUILDING</span><span className="journey-number">02</span></div></FadeIn>
    </div>
    <div className="credentials-strip glass"><div className="credentials-icon"><Sparkles size={16}/></div><div><span className="eyebrow">CERTIFICATIONS, AWARDS & ACHIEVEMENTS</span><p>Add verified credentials, workshops, competitions, and leadership highlights here.</p></div><a href={profile.linkedin} target="_blank" rel="noreferrer" className="icon-link" aria-label="Open LinkedIn"><ArrowUpRight size={16}/></a></div>
  </section>;
}

function Contact() {
  return <section id="contact" className="section-wrap section-block contact-section"><SectionHeading eyebrow="SAY HELLO" title={<>Let’s start with a <span className="text-gradient">good question.</span></>} description="Thoughtful conversations can lead somewhere interesting. I’d be glad to hear what you’re working on." /><FadeIn><ContactForm/></FadeIn></section>;
}

function FinalCta() { return <FadeIn className="section-wrap final-cta"><div className="final-cta-icon"><Mail size={20}/></div><div><span className="eyebrow">ONE LAST THING</span><h2>Building something meaningful?</h2><p>I’d like to hear the story behind it.</p></div><a href="#contact" className="button button-primary">Start a conversation <ArrowRight size={15}/></a></FadeIn>; }

export default function Home() {
  return <PageFrame><main id="main-content"><Hero/><div className="marquee-band" aria-hidden="true"><div className="marquee-track">{Array.from({length: 2}, (_, i) => <span key={i}>THOUGHTFUL TECHNOLOGY <i>✳</i> HUMAN-CENTERED AI <i>✳</i> CURIOUS BY NATURE <i>✳</i> BUILT WITH INTENTION <i>✳</i>&nbsp;</span>)}</div></div><About/><Skills/><Work/><Journey/><Contact/><FinalCta/></main></PageFrame>;
}
