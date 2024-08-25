/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      screens: {
        lg: '1140px',
        xl: '1140px',
        '2xl': '1140px',
      },
    },
    extend: {
      fontFamily: {
        gemunu: ['Gemunu Libre', 'sans-serif'],
        open: ['Open Sans', 'sans-serif'],
        metalmania: ["Metal Mania", "system-ui"],
        oldstandarttt: ["Old Standard TT", "serif"],
        explora: ["Explora", "serif"],
        medievalsharp: ["MedievalSharp", "cursive"],
        creepster: ["creepster", "system-ui"],
        nosifer : ["Nosifer", "sans-serif"],
        
      },

      colors: {
        'gega-red': '#BC1A45',
        'gega-melon': '#FFD369',
        'gega-grey': '#DDDDDD',
        'gega-white': '#F7F7F7',
        'charcoal-black': '#2B2B2B',
        'blood-red': '#B22222',
        'ash-grey': '#6E6E6E',
        'steel-blue': '#4682B4',
        'pale-silver': '#C0C0C0',
        'off-white': '#E0E0E0',
        'deep-violet': '#4B0082',
        'rust-orange': '#8B4513',
        'onyx': '#353535', //Dark grayish-black, slightly muted
        'twilight-purple': '#301934', // Deep, dusky purple with a hint of blue
        'abyss-purple': '#3D002E', // Very dark purple, almost black
        'amethyst-purple': '#56316D', // Rich, deep amethyst purple
        'steel-silver': '#BCC6CC', // Cool steel gray with a metallic feel
        'mist-silver': '#9A9EA1', // Soft, misty silver-gray
        'pewter-silver': '#778899', //A darker, bluish-silver tone
        'silver-blue' :'#A7C6E7',

      },

      spacing: {
        128: '32rem',
      },
    },
  },
  plugins: [],
};