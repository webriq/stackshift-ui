import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "../../../apps/nextjs-pages/**/*.{ts,tsx}",
    "../../../apps/storybook/**/*.{ts,tsx}",
    "../../components/**/*.{ts,tsx}",
    "../../core/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0045d8",
        'primary-foreground': '#ffffff',
        secondary: "#3576ff",
        'secondary-foreground': '#ffffff',
        background: "#F9FAFB",
        foreground: '#0b1220',            // hsl(222, 84%, 5%) approx
        card: '#ffffff',
        'card-foreground': '#0b1220',
        popover: '#ffffff',
        'popover-foreground': '#0b1220',
        muted: '#d9e6f9',
        'muted-foreground': '#77828a',   // hsl(215, 16%, 47%)
        accent: '#d9e6f9',
        'accent-foreground': '#1a2c3f',
        destructive: '#f06666',           // hsl(0, 84%, 60%)
        'destructive-foreground': '#e6f0fc',
        border: '#e6eaf2',                // hsl(214, 32%, 91%)
        input: '#e6eaf2',
        ring: '#0b1220',
        sidebar: '#fbfbfb',
        'sidebar-foreground': '#252525',
        'sidebar-primary': '#343434',
        'sidebar-primary-foreground': '#fbfbfb',
        'sidebar-accent': '#f7f7f7',
        'sidebar-accent-foreground': '#343434',
        'sidebar-border': '#ebebeb',
        'sidebar-ring': '#b5b5b5'
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
  plugins: [
		require("tailwindcss-animate"),
		// ...
	]
} satisfies Config;

export default config;
