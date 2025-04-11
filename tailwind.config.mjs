/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
        50: '#F5FAFF', 
    100: '#EDF6FF', 
    200: '#D1E5FF', 
    300: '#B6CFFC', 
    400: '#7E9AFC', 
    500: '#4a59fb', 
    600: '#3A48E0', 
    700: '#2933BA', 
    800: '#1A2296', 
    900: '#0F1570', 
    950: '#060947'
        },
        primary1: {
    50: '#F2FBFF', 
    100: '#E6F7FF', 
    200: '#BFE8FF', 
    300: '#99D5FF', 
    400: '#4DA6FF', 
    500: '#0169fe', 
    600: '#005CE6', 
    700: '#0046BF', 
    800: '#003399', 
    900: '#002273', 
    950: '#00144A'
},
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        
        accent: {
          50: '#FFFEF7', 
    100: '#FFFDF0', 
    200: '#FFFAD9', 
    300: '#FFF5BF', 
    400: '#FFEB91', 
    500: '#ffdd60', 
    600: '#E6C04E', 
    700: '#BF9436', 
    800: '#996E23', 
    900: '#734914', 
    950: '#4A2908'
        },
        green: {
    50: '#F2FCF9', 
    100: '#E6F7F2', 
    200: '#C5F0E0', 
    300: '#A3E6CB', 
    400: '#69D19D', 
    500: '#35bc6e', 
    600: '#2BAB5E', 
    700: '#1D8C46', 
    800: '#137032', 
    900: '#0B5421', 
    950: '#043611'
},
        
        warning: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Lexend', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'slide-down': 'slideDown 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
