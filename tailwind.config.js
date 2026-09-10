/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        paper: "hsl(var(--paper))",
        surface: {
          DEFAULT: "hsl(var(--surface))",
          2: "hsl(var(--surface-2))",
        },
        ink: {
          DEFAULT: "hsl(var(--ink))",
          soft: "hsl(var(--ink-soft))",
        },
        muted: "hsl(var(--muted))",
        line: {
          DEFAULT: "hsl(var(--line))",
          strong: "hsl(var(--line-strong))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          ink: "hsl(var(--accent-ink))",
        },
        live: "hsl(var(--live))",
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "10px",
        md: "10px",
        lg: "14px",
        xl: "20px",
        "2xl": "28px",
      },
      fontSize: {
        "display-sm": ["clamp(2.25rem, 6vw, 3.25rem)", { lineHeight: "0.98", letterSpacing: "-0.035em" }],
        "display": ["clamp(2.75rem, 9vw, 5.5rem)", { lineHeight: "0.92", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(3.25rem, 12vw, 8rem)", { lineHeight: "0.88", letterSpacing: "-0.045em" }],
      },
      maxWidth: {
        shell: "1240px",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.22, 1, 0.36, 1) infinite",
      },
    },
  },
  plugins: [],
}
