/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "6px": "6px",
        "13px": "13px",
        26: "1.625rem",
        45: "2.8125rem",
        420: "26.25rem",
        440: "27.5rem",
        855: "53.4375rem",
      },
    },
  },
  corePlugins: {
    cssVariables: true,
  },
  plugins: [require("daisyui")],
};
