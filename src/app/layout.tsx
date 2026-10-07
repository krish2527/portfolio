import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/portfolio";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Krishna Kishore Chakraborty | AI & Software Portfolio", template: "%s | Krishna Kishore Chakraborty" },
  description: "Explore the portfolio, concept projects, and areas of interest of Krishna Kishore Chakraborty.",
  applicationName: "KKC Portfolio",
  openGraph: { type: "website", locale: "en_IN", url: siteUrl, siteName: "KKC Portfolio", title: "Krishna Kishore Chakraborty | AI & Software Portfolio", description: "Thoughtful software, intelligent systems, and human-centered ideas." },
  twitter: { card: "summary_large_image", title: "Krishna Kishore Chakraborty | Portfolio", description: "Thoughtful software, intelligent systems, and human-centered ideas." },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#080b18" }, { media: "(prefers-color-scheme: light)", color: "#f6f7fb" }], width: "device-width", initialScale: 1 };

const personSchema = { "@context": "https://schema.org", "@type": "Person", name: profile.name, url: siteUrl, sameAs: [profile.linkedin], knowsAbout: ["Artificial intelligence", "Machine learning", "Data science", "Software development"], description: profile.summary };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-theme="dark" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('portfolio-theme');if(t)document.documentElement.dataset.theme=t}catch(e){}` }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} /></head><body className={inter.variable}><a href="#main-content" className="skip-link">Skip to content</a>{children}</body></html>;
}
