import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "osa-bg": "#faf8f6",
        "osa-surface": "rgba(255,255,255,0.72)",
        "osa-plum": "#5c4d6a",
        "osa-plum-deep": "#3d3347",
        "osa-rose": "#b8a4b0",
        "osa-rose-muted": "#d4c5cf",
        "osa-peach": "#e8b89a",
        "osa-gold": "#c9a86c",
        "osa-slate": "#1e293b",
        "osa-slate-muted": "#64748b",
        "osa-text": "#1e293b",
        "osa-muted": "#64748b",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-geist-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        "glass": "0 8px 32px rgba(92, 77, 106, 0.08), 0 0 0 1px rgba(255,255,255,0.6) inset",
        "glass-lg": "0 24px 48px rgba(92, 77, 106, 0.1), 0 0 0 1px rgba(255,255,255,0.7) inset",
        "soft": "0 4px 24px rgba(92, 77, 106, 0.06)",
      },
      borderRadius: {
        "3xl": "1.75rem",
        "4xl": "2rem",
      },
      backgroundImage: {
        "aurora": "radial-gradient(ellipse 120% 80% at 50% -20%, rgba(184, 164, 176, 0.25), transparent), radial-gradient(ellipse 80% 60% at 100% 50%, rgba(232, 184, 154, 0.2), transparent), radial-gradient(ellipse 80% 60% at 0% 80%, rgba(201, 168, 108, 0.15), transparent)",
        "aurora-subtle": "radial-gradient(ellipse 100% 60% at 50% 0%, rgba(184, 164, 176, 0.12), transparent)",
      },
    },
  },
  plugins: [],
};

export default config;
