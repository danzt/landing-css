// /** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#F85900',
                'secondary': '#FFB74B',
                'bgray': '#B9B9B9',
                'darkgray': '#CACACA',
                'yellowFood': '#FECB47'

            },
            fontFamily: {
                'sans': ['Poppins', 'sans-serif'],
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}

