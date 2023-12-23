import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        header: '#242526',
        input: '#3A3B3C',
        navigate: '#18191A',
        post: '#242526',
        primary: '#e4e6eb',
        secondary: '#b0b3b8',
        blue: '#0866FF',
        login: '#F0F2F5',
        third: '#42B72A',
        hover: '#4E4F50'
      },
      fontFamily: {
        default: 'CustomFont'
      }
    },
  },
  plugins: [],
}
export default config
