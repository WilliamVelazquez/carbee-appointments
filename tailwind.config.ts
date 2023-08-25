import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  theme: {
    extend: {
      colors: {
        "gray": "var(--gray-300)",
        "gray-light": "var(--gray-200)",
        "warn": "var(--color-warn)",
        "danger": "var(--color-danger)",
        "success": "var(--color-success)",
        "info": "var(--brand-secondary-300)",
        "shade-dark": "var(--shade-dark)",
        "shade-light": "var(--shade-light)",
        "primary": "var(--brand-primary)",
        "secondary": "var(--brand-secondary-500)",
        "tertiary": "var(--brand-tertiary-500)",
        "primary-light": "var(--brand-primary-200)",
        "secondary-light": "var(--brand-secondary-200)",
        "tertiary-light": "var(--brand-tertiary-200)",
        "primary-dark": "var(--brand-primary-500)",
        "font-primary": "var(--font-color-primary)",
        "font-primary-light": "var(--font-color-light-grey)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
