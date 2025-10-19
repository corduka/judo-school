/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'; // Import default theme for safe merging

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors based on logo analysis
        'primary-blue': '#1A237E', // Deep Blue
        'accent-red': '#FF0000',  // Vibrant Red (Use red-600/700 for utility classes)
      },
      fontFamily: {
        // Use a modern sans-serif font
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  // ADD the typography plugin here!
  plugins: [
    require('@tailwindcss/typography'), 
  ],
}