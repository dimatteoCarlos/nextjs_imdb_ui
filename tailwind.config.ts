import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  // Cambia a 'media' si prefieres usar la preferencia del sistema
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        //custom dark and light colors definition
        'light-background': '#ffffff',
        'dark-background': '#1a1a1a',
        'light-text': '#000000',
        'dark-text': '#ffffff',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },

  // variants: {
  //   extend: {
  //     //add variants of colors by dark mode
  //     backgroundColor: ['dark'],
  //     textColor: ['dark'],
  //   },
  // },
  plugins: [],
};
export default config;
