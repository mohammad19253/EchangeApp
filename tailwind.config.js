/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'black': '#292929',
      'primary-gray': '#373636',
      'secondary-gray': '#404040',
      'primary':'#1A5B79',
      'primary-blue':'#0f7bae',
      'secondary-blue':'#1A5B79',
      'third-blue':'#30383c',
      'primary-green':'#57c180',
      'secondary-green':'#417155',
      'primary-red':'#b12b34',
      'secondary-red':'#683033',

    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [require("daisyui")],
}
