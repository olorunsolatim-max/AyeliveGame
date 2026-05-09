import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ["Fira Code", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        accent: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
      typography: ({ theme }: { theme: (key: string) => string }) => ({
        DEFAULT: {
          css: {
            maxWidth: "70ch",
            color: theme("colors.gray.700"),
            lineHeight: "1.8",
            fontSize: "1.05rem",
            h1: {
              fontWeight: "800",
              fontSize: "2rem",
              marginBottom: "0.5em",
              color: theme("colors.gray.900"),
            },h2: {
              fontWeight: "700",
              fontSize: "1.5rem",
              marginTop: "2em",
              marginBottom: "0.75em",
              color: theme("colors.gray.900"),
              borderBottom: `1px solid ${theme("colors.gray.200")}`,
              paddingBottom: "0.3em",
            },
            h3: {
              fontWeight: "600",
              fontSize: "1.25rem",
              marginTop: "1.5em",
              color: theme("colors.gray.900"),
            },
            p: {
              marginBottom: "1.25em",
              lineHeight: "1.8",
            },
            a: {
              color: theme("colors.blue.500"),
              textDecoration: "underline",
              fontWeight: "500",
              "&:hover": {
                color: theme("colors.blue.600"),
              },
            },
            strong: {
              fontWeight: "700",
              color: theme("colors.gray.900"),
            },
            blockquote: {
              borderLeftColor: theme("colors.blue.500"),
              borderLeftWidth: "4px",
              paddingLeft: "1.25em",
              fontStyle: "italic",
              color: theme("colors.gray.600"),
              backgroundColor: theme("colors.blue.50"),
              borderRadius: "0 0.5rem 0.5rem 0",
              padding: "1em 1.25em",
            },
            code: {
              backgroundColor: theme("colors.gray.100"),
              color: theme("colors.blue.600"),
              borderRadius: "0.375rem",
              padding: "0.2em 0.4em",
              fontSize: "0.875em",
              fontWeight: "500",
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            pre: {
              backgroundColor: theme("colors.gray.900"),
              borderRadius: "0.75rem",
              padding: "1.25em",
              overflowX: "auto",
            },
            ul: {
              listStyleType: "disc",
              paddingLeft: "1.5em",
              marginBottom: "1.25em",
            },
            ol: {
              listStyleType: "decimal",
              paddingLeft: "1.5em",
              marginBottom: "1.25em",
            },
            li: {
              marginBottom: "0.5em",
              lineHeight: "1.7",
            },
            img: {
              borderRadius: "0.75rem",
              marginTop: "1.5em",
              marginBottom: "1.5em",
            },
            hr: {
              borderColor: theme("colors.gray.200"),
              marginTop: "2em",
              marginBottom: "2em",
            },
            table: {
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.9em",
            },
            th: {
              backgroundColor: theme("colors.gray.100"),
              padding: "0.75em 1em",
              fontWeight: "600",
              textAlign: "left",
              borderBottom: `2px solid ${theme("colors.gray.200")}`,
            },
            td: {
              padding: "0.75em 1em",
              borderBottom: `1px solid ${theme("colors.gray.100")}`,
            },
          },
        },
        invert: {
          css: {
            color: theme("colors.gray.300"),
            h1: { color: theme("colors.gray.100") },
            h2: {
              color: theme("colors.gray.100"),
              borderBottomColor: theme("colors.blue.500"),
            },
            h3: { color: theme("colors.gray.100") },
            strong: { color: theme("colors.gray.100") },
            blockquote: {
              color: theme("colors.gray.400"),
              backgroundColor: theme("colors.blue.900") + "33",
              borderLeftColor: theme("colors.blue.400"),
            },
            code: {
              backgroundColor: theme("colors.gray.800"),
              color: theme("colors.blue.400"),
            },
            a: {
              color: theme("colors.blue.400"),
              "&:hover": { color: theme("colors.blue.300") },
            },
            hr: { borderColor: theme("colors.gray.700") },
            th: {
              backgroundColor: theme("colors.gray.800"),
              borderBottomColor: theme("colors.gray.700"),
            },
            td: { borderBottomColor: theme("colors.gray.800") },
          },
        },
      }),
    },
  },
  plugins: [typography],
} satisfies Config;
