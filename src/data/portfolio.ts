export const profile = {
  name: "Krishna Kishore Chakraborty",
  linkedin: "https://www.linkedin.com/in/krishna-kishore-chakraborty-920789379",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@example.com",
  headline: "Building thoughtful software for an intelligent future.",
  summary: "A curious technologist exploring the space between intelligent systems and useful, human-centered software. Interested in turning ambitious ideas into clear, dependable experiences.",
  availability: "Open to internships & early-career opportunities",
  // Add verified education, experience, credentials and current skill levels before publishing.
};

export const navItems = [
  { label: "About", href: "/#about" }, { label: "Skills", href: "/#skills" },
  { label: "Work", href: "/#work" }, { label: "Journey", href: "/#journey" }, { label: "Contact", href: "/#contact" },
];

// These are concept project briefs, not claims of completed or deployed work.
export const projects = [
  {
    slug: "signal-lab", number: "01", title: "Signal Lab", category: "AI / MACHINE LEARNING", accent: "violet", visual: "chart",
    description: "An interpretable ML workbench that turns messy tabular data into a transparent, explainable prediction workflow.",
    overview: "Signal Lab is a proposed end-to-end learning project exploring the full machine-learning lifecycle: dataset inspection, feature preparation, model evaluation, and clear explanation of results. The interface is designed to make model behavior legible to a non-specialist.",
    technologies: ["Python", "scikit-learn", "Pandas", "Next.js"],
    highlights: ["Compare baseline models with consistent metrics", "Surface feature importance and confidence", "Keep experiment assumptions visible"],
    future: "Add dataset versioning, fairness checks, and a hosted inference endpoint.",
  },
  {
    slug: "study-compass", number: "02", title: "Study Compass", category: "EDTECH / GENERATIVE AI", accent: "cyan", visual: "orbit",
    description: "A grounded study companion that transforms a learner’s own notes into cited summaries, flashcards, and revision plans.",
    overview: "Study Compass is a concept for a responsible learning assistant. It keeps answers tied to source passages, offers a quick way to check citations, and helps learners plan small, focused revision sessions.",
    technologies: ["TypeScript", "React", "Embeddings", "Vector search"],
    highlights: ["Retrieve answers from learner-provided notes", "Generate review cards with source references", "Make uncertainty and source coverage clear"],
    future: "Explore multimodal notes, spaced repetition, and privacy-preserving local storage.",
  },
  {
    slug: "model-observer", number: "03", title: "Model Observer", category: "DATA / DEVELOPER TOOLS", accent: "amber", visual: "pulse",
    description: "A lightweight dashboard concept for watching model quality, data drift, and latency in one actionable view.",
    overview: "Model Observer explores the gap between deploying a model and understanding how it behaves over time. The imagined dashboard brings operational signals together and points teams toward a useful next investigation.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Recharts"],
    highlights: ["Track prediction quality and latency together", "Compare current inputs against a reference window", "Annotate anomalies with investigation notes"],
    future: "Connect to streaming events and add configurable alert thresholds.",
  },
];

export const skillGroups = [
  { title: "Programming", icon: "code", skills: ["Python", "TypeScript", "JavaScript"] },
  { title: "AI & machine learning", icon: "spark", skills: ["Machine learning", "Deep learning", "Generative AI"] },
  { title: "Data science", icon: "chart", skills: ["Data analysis", "Data visualization", "Model evaluation"] },
  { title: "Web development", icon: "globe", skills: ["React", "Next.js", "Tailwind CSS"] },
  { title: "Tools & technologies", icon: "layers", skills: ["Git", "Jupyter", "REST APIs"] },
  { title: "Ways of working", icon: "heart", skills: ["Curiosity", "Clear communication", "Problem solving"] },
];
