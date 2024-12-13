const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
      flowbite.content()
  ],
  theme: {
    extend: {
      colors: {
        'primary': "var(--primary)",
        'primary-hover': 'var(--primary-hover)',
        'black': 'var(--black)',
      },
    },
  },
  plugins: [
      flowbite.plugin()
  ],
};
