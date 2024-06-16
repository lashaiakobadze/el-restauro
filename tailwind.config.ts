import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        georgian: ['Noto Sans Georgian', 'sans-serif'],
      },
      colors: {
        customGray: '#2B2731',
        customRed: '#e63946',
        customGraySecond: '#f9f9f9',
        customHover: '#f1f1f1',
        customBlue: '#23447c',
      },
    },
  },
  plugins: [],
};
export default config;
