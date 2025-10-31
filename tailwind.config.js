/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Sora", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "var(--color-primary)",
        "primary-light": "var(--color-primary-light)",
        "primary-dark": "var(--color-primary-dark)",
        "primary-20": "var(--color-primary-20)",
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        text: "var(--color-text)",
        "text-muted": "var(--color-text-muted)",
        border: "var(--color-border)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
        "icon-home": "var(--color-icon-home)",
        "icon-posts": "var(--color-icon-posts)",
      },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-highlight": "var(--gradient-highlight)",
      },
      boxShadow: {
        primary: "var(--shadow-primary)",
        soft: "var(--shadow-soft)",
      },
    },
  },
  plugins: [],
};
