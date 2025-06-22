/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            zIndex: {
                '60': '60',
                '100': '100',
                '999': '999',
            },
            fontFamily: {
                roboto: ['Roboto', 'Arial', 'sans-serif'],
            },
        },
    },
    plugins: [],
}