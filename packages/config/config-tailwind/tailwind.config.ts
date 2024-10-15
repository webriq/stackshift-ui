import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        primary: "#0045d8",
        secondary: "#3576ff",
        background: "#F9FAFB",
      },
      borderRadius: {
        none: "0px",
        sm: "0.125rem",
        base: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        full: "9999px",
        //global: "var(--border-radius)",
        global: "0.25rem",
      },
      spacing: {
        sm: "384px",
        md: "448px",
        lg: "512px",
        xl: "576px",
        "2xl": "672px",
      },
      fontFamily: {
        sans: "Open Sans",
        serif: "Lora",
        mono: "Roboto Mono",
        //global: "var(font-family)",
        global: "Open Sans",
      },
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.857rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
        //global: "calc(0.10rem + var(--font-size))",
        global: "1rem",
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        //global: "calc(100 + var(--font-weight))",
        global: "400",
      },
    },
  },
  plugins: [],
};
export default config;
