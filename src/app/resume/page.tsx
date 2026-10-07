"use client";

import { ArrowLeft, ArrowUpRight, Download, Linkedin } from "lucide-react";
import Link from "next/link";
import { PageFrame } from "@/components/site-shell";
import { profile, projects, skillGroups } from "@/data/portfolio";

export default function ResumePage() {
  return <PageFrame><main id="main-content" className="detail-main resume-main"><section className="section-wrap resume-sheet"><div className="resume-toolbar"><Link href="/" className="back-link"><ArrowLeft size={14}/> Back to portfolio</Link><button className="button button-glass" onClick={() => window.print()}><Download size={14}/> Print / save PDF</button></div><header className="resume-header"><div><span className="eyebrow">RÉSUMÉ · PROFILE SNAPSHOT</span><h1>{profile.name}</h1><p>{profile.headline}</p></div><a href={profile.linkedin} target="_blank" rel="noreferrer" className="resume-contact"><Linkedin size={15}/> LinkedIn profile <ArrowUpRight size={13}/></a></header>
    <div className="resume-callout"><strong>Profile details in progress</strong><p>This résumé snapshot contains only the information currently available. Education, employment, certificates, contact email, and achievement details should be added from verified sources before sharing as a formal résumé.</p></div>
    <section className="resume-section"><h2>Profile</h2><p>{profile.summary}</p><p>Areas of interest: AI/ML, data science, and modern web development.</p></section>
    <section className="resume-section"><h2>Selected concept work</h2><p className="resume-subtitle">Proposed portfolio explorations — not represented as completed work.</p>{projects.map(project => <div className="resume-entry" key={project.slug}><div><h3>{project.title}</h3><span>{project.category}</span></div><p>{project.description}</p></div>)}</section>
    <section className="resume-section"><h2>Focus areas</h2><div className="resume-skills">{skillGroups.flatMap(group => group.skills).map(skill => <span key={skill}>{skill}</span>)}</div><p className="resume-subtitle">These are focus areas, not verified proficiency claims.</p></section>
    <section className="resume-section resume-pending"><h2>Education · Experience · Credentials</h2><p>Details are intentionally omitted until verified. See the supplied LinkedIn profile for current information.</p><a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">Open LinkedIn <ArrowUpRight size={14}/></a></section>
    <footer className="resume-footer"><span>Krishna Kishore Chakraborty</span><Link href="/#contact">Contact <ArrowUpRight size={13}/></Link></footer>
  </section></main></PageFrame>;
}
