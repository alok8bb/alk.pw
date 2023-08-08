/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                zinc: {
                    black: "#09090b",
                    white: "#fafafa",
                },
            },
        },
    },
    plugins: [require("@tailwindcss/line-clamp")],
};
