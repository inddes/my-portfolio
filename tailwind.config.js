/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: 'rgb(var(--border))',
      },
      backgroundImage: {
        'grid-slate-200': 'linear-gradient(to right, rgba(226, 232, 240, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(226, 232, 240, 0.2) 1px, transparent 1px)',
        'grid-slate-700': 'linear-gradient(to right, rgba(51, 65, 85, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(51, 65, 85, 0.2) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-slate-200': '40px 40px',
        'grid-slate-700': '40px 40px',
      },
    },
  },
  plugins: [],
};
