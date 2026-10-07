import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { notFound } from "next/navigation";
import { FadeIn, PageFrame } from "@/components/site-shell";
import { projects } from "@/data/portfolio";
import { ProjectArtwork } from "@/components/project-artwork";

export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const project = projects.find(item => item.slug === slug);
  return project ? { title: project.title, description: project.description, openGraph: { title: `${project.title} | Concept Showcase`, description: project.description } } : {};
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const project = projects.find(item => item.slug === slug); if (!project) notFound();
  return <PageFrame><main id="main-content" className="detail-main"><section className="section-wrap detail-hero"><Link href="/#work" className="back-link"><ArrowLeft size={14}/> Back to all concepts</Link><FadeIn><span className="detail-number">PROJECT / {project.number} · {project.category}</span><h1>{project.title}</h1><p>{project.description}</p><span className="concept-callout"><Sparkles size={13}/> CONCEPT SHOWCASE · EXPLORATION IN PROGRESS</span></FadeIn><FadeIn delay={.1}><ProjectArtwork variant={project.visual} className="detail-art" /></FadeIn></section>
    <div className="section-wrap detail-content"><div><FadeIn className="detail-block"><span className="eyebrow">THE IDEA</span><h2>A product question worth exploring.</h2><p>{project.overview}</p></FadeIn><FadeIn className="detail-block" delay={.05}><span className="eyebrow">DESIGN PRINCIPLES</span><ul className="detail-list">{project.highlights.map(item => <li key={item}><Check size={15}/>{item}</li>)}</ul></FadeIn><FadeIn className="detail-block" delay={.1}><span className="eyebrow">POSSIBLE NEXT STEPS</span><h2>Room to grow.</h2><p>{project.future}</p></FadeIn></div>
      <FadeIn className="detail-sidebar glass"><span className="eyebrow">PROJECT SNAPSHOT</span><h3>Technologies to explore</h3><div className="project-tech">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div><p>This showcase describes a proposed build. Implementation details will be added as the project develops.</p><Link href="/#contact" className="button button-primary">Discuss this idea <ArrowUpRight size={14}/></Link><Link href="/#work" className="text-link" style={{ marginTop: 12 }}>More concepts <ArrowRight size={14}/></Link></FadeIn></div>
  </main></PageFrame>;
}
