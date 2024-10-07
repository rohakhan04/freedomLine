/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'billgates-script': ['Billgates Script', 'cursive'],
        'merriweather': ['Merriweather', 'serif'],

      },
      container: {
        center: true, // Center the container
        screens: {
          sm: '100%', // Small screens
          md: '720px', // Medium screens
          lg: '960px', // Large screens
          xl: '1140px', // Extra large screens
          '2xl': '1320px', // 2X extra large screens
        },
      },
      colors: {
        'primary': '#637381',      // Example custom color
        'secondary': '#003663',    // Example custom color
        'dark': '#1a202c',         // Example custom color
        'light': '#FFFFFF', 
        'background':'#EB9000',
        'text': '#9D9D9D'  ,
        'link': '#0064E5',
        'accordianHeading':'#000000' ,
        'footer-text':'#6F6C90',
        'navbar-text':'#AFAFAF',
        'footer-border':'#EFF0F6',
        'bullet-text':'#888888',
  
           // Example custom color
        'accent': {
          100: '#f3e0eb',          // Example custom color with shades
          200: '#e6c1d6',
          300: '#d99cc2',
          400: '#cd77ae',
          500: '#c0529b',
          600: '#a63d7e',
          700: '#852f66',
          800: '#67234d',
          900: '#4a1936',

        },

      },
      fontSize: {
        xs: '0.75rem',     // 12px
        sm: '0.875rem',    // 14px
        base: '1rem',      // 16px
        lg: '1.125rem',    // 18px
        xl: '1.25rem',     // 20px
        '1xl': '26px',
        '2xl': '1.5rem',   // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem',  // 36px
        '5xl': '3rem',     // 48px
        '6xl': '4rem',     // 64px
        '7xl': '5rem',    
        'custom-84': '84px', // 80px
        'custome-56':'3.5rem'
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xxl:'2584'

      
    },
  

  }, 
  plugins: [],
}

