"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Copy, Send } from "lucide-react";
import { profile } from "@/data/portfolio";

export function ContactForm() {
  const [copied, setCopied] = useState(false);
  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); window.setTimeout(() => setCopied(false), 1800); } catch { window.location.href = `mailto:${profile.email}`; }
  }
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(String(data.get("subject") || "Portfolio inquiry"));
    const body = encodeURIComponent(`Hi Krishna,\n\n${data.get("message")}\n\n${data.get("name")} · ${data.get("email")}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }
  return <div className="contact-layout">
    <div className="contact-copy"><span className="eyebrow">THE NEXT GOOD THING STARTS HERE</span><h3>Have an idea?<br /><span className="text-gradient">Let’s make it useful.</span></h3><p>For opportunities, collaborations, or a thoughtful conversation, send a note. The form opens your email app with a draft ready to go.</p>
      <a className="contact-email" href={`mailto:${profile.email}`}><span className="contact-icon"><Send size={17} /></span><span><small>EMAIL</small><strong>{profile.email}</strong></span><ArrowUpRight size={17} /></a>
      <button className="copy-email" type="button" onClick={copyEmail}>{copied ? <Check size={14} /> : <Copy size={14} />}{copied ? "Copied" : "Copy email"}</button>
      <a className="contact-linkedin" href={profile.linkedin} target="_blank" rel="noreferrer">Find me on LinkedIn <ArrowUpRight size={14} /></a>
    </div>
    <form className="contact-form glass" onSubmit={handleSubmit}>
      <div className="form-heading"><span className="eyebrow">SEND A NOTE</span><span className="form-indicator"><i /> Usually replies soon</span></div>
      <div className="form-row"><label>Name<input required autoComplete="name" name="name" placeholder="Your name" /></label><label>Email<input required type="email" autoComplete="email" name="email" placeholder="you@example.com" /></label></div>
      <label>Subject<input name="subject" placeholder="What would you like to discuss?" /></label>
      <label>Message<textarea required name="message" rows={4} placeholder="A little context helps me get back to you…" /></label>
      <button className="button button-primary form-submit" type="submit">Open email draft <ArrowUpRight size={16} /></button>
      <p className="form-note">Your details stay in your email app; this portfolio doesn’t store form submissions.</p>
    </form>
  </div>;
}
