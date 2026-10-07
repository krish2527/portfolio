import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { PageFrame } from "@/components/site-shell";
export default function NotFound() {
  return <PageFrame><main id="main-content" className="detail-main"><section className="section-wrap not-found"><span className="not-found-icon"><Sparkles size={20}/></span><span className="eyebrow">404 · OFF THE MAP</span><h1>This page hasn’t<br/><span className="text-gradient">been imagined yet.</span></h1><p>The link may have changed. Let’s get you back to the portfolio.</p><Link className="button button-primary" href="/"><ArrowLeft size={14}/> Return home</Link></section></main></PageFrame>;
}
