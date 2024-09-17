/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",  // Inclua todos os arquivos HTML e TypeScript
    "./src/app/**/*.{html,ts}",
    "./src/components/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
