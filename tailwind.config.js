/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        "color-primary": "#1a1a1a",
        "color-secondary": "#949494",
        "color-teriary": "#d2d1d1",
        "color-border": "#b4b4b4",
      },
      maxWidth: {
        1240: "1240px",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'reveal': 'reveal 300ms ease-in-out',
      },
      keyframes: {
        reveal: {
          '0%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
