/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "osa-bg": "#fcf8fb",
        "osa-bg-warm": "#f7ecf3",
        "osa-bg-cream": "#fff8f3",
        "osa-primary": "#5b2e48",
        "osa-primary-light": "#7a4a64",
        "osa-secondary": "#a05c7b",
        "osa-accent": "#f2b38f",
        "osa-lavender": "#c8b6ff",
        "osa-text": "#2f2430",
        "osa-muted": "#6e5a69",
        "osa-card": "#fcf8fb",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      fontSize: {
        display: ["2.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        hero: ["2rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
      },
      boxShadow: {
        glass: "0 8px 32px rgba(91, 46, 72, 0.08), 0 0 0 1px rgba(255,255,255,0.8) inset",
        "glass-lg": "0 24px 48px rgba(91, 46, 72, 0.1), 0 0 0 1px rgba(255,255,255,0.9) inset",
        soft: "0 4px 24px rgba(91, 46, 72, 0.06)",
        "soft-lg": "0 12px 40px rgba(91, 46, 72, 0.08)",
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      backgroundImage: {
        aurora: "radial-gradient(ellipse 140% 90% at 50% -30%, rgba(200, 182, 255, 0.2), transparent 55%), radial-gradient(ellipse 100% 70% at 100% 30%, rgba(242, 179, 143, 0.18), transparent 50%), radial-gradient(ellipse 80% 60% at 0% 70%, rgba(160, 92, 123, 0.12), transparent 45%)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    { pattern: /^(bg|text|border|ring|from|to|via)-osa-/, variants: ["hover", "focus"] },
    "font-sans", "font-serif", "antialiased",
    "min-h-screen", "min-h-0", "overflow-x-hidden", "overflow-hidden",
    "flex", "flex-col", "items-center", "justify-center", "justify-between",
    "rounded-xl", "rounded-2xl", "rounded-3xl", "rounded-\[32px\]",
    "shadow-glass", "shadow-glass-lg", "shadow-soft",
    "backdrop-blur-xl", "backdrop-blur-sm",
  ],
};
