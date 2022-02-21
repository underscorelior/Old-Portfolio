const colors = require('tailwindcss/colors')

module.exports = {
    enabled: true,
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class',
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#11171f",
                skc: "#cbd5e1",
                eskc: "#f4f8fd",
                react: "#61DBFB",
                tailwind: "#00b4b6",
                py: "#4B8BBE",
                cb: "#18181b",
                pd: "#0f172a",
            },
            screens: {
                custom: "400px",
            },
            fontFamily: {
                jost: ["Jost", "sans-serif"],
                sen: ["Sen", "sans-serif"],
            },
        },
    },
    variants: {},
    plugins: [],
};