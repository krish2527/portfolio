import type { Config } from "tailwindcss";
const config: Config = { content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/data/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { ink: "#080b18", indigo: "#8172ff", violet: "#b48aff", cyan: "#72e7ef" }, fontFamily: { sans: ["var(--font-inter)", "Inter", "sans-serif"] } } }, plugins: [] };
export default config;
