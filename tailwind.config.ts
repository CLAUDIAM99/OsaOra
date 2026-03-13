import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "osa-bg": "#050816",
        "osa-surface": "#0b1020",
        "osa-soft": "#111827",
        "osa-accent": "#f97316",
        "osa-accent-soft": "#fed7aa",
        "osa-text": "#e5e7eb",
        "osa-muted": "#9ca3af",
        "osa-positive": "#22c55e",
        "osa-warning": "#facc15"
      },
      boxShadow: {
        "soft-xl":
          "0 20px 45px rgba(15,23,42,0.75), 0 0 0 1px rgba(148,163,184,0.15)"
      },
      borderRadius: {
        "3xl": "1.75rem"
      }
    }
  },
  plugins: []
};

export default config;

