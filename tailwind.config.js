/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./renderer/**/*.{vue,js,ts,jsx,tsx}",
        "./components/**/*.{vue,js,ts,jsx,tsx}",
        "./pages/**/*.{vue,js,ts,jsx,tsx}",
    ],
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
    plugins: [],
};
