/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tvs: {
          blue: '#183883',
          navy: '#062161',
          dark: '#031838',
          midnight: '#00142b',
          red: '#e41b17',
          'red-hover': '#c31613',
          gray: '#f7f8fa',
          'light-gray': '#f1f3f6',
          border: '#e2e6eb',
          text: '#212121',
          muted: '#686868',
        },
        brand: {
          green: '#059669',
          'green-dark': '#047857',
          'green-light': '#10b981',
          amber: '#d97706',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Roboto', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'tvs-card': '0 4px 20px 0 rgba(95, 95, 95, 0.1)',
        'tvs-card-hover': '0 8px 30px 0 rgba(0, 0, 0, 0.12)',
        'tvs-btn': '0 4px 14px 0 rgba(228, 27, 23, 0.35)',
      },
      borderRadius: {
        'tvs': '4px',
      }
    },
  },
  plugins: [],
}
