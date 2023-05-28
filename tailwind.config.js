module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}",],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    // ...
  ],
};
