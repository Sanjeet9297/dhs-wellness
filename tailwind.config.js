/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#0E5E6F", // Deep Teal from the header/hero
                secondary: "#D4A056", // Gold/Orange for buttons/accent
                "secondary-hover": "#B8860B",
                accent: "#F3F4F6", // Light Gray Background
                dark: "#1F2937", // Dark Text
                light: "#FFFFFF",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                serif: ["Merriweather", "serif"],
            },
        },
    },
    plugins: [],
};
