import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
} satisfies Config;

// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         brown: {
//           50: '#f5f5f5',
//           100: '#e0e0e0',
//           200: '#b3b3b3',
//           300: '#8c8c8c',
//           400: '#666666',
//           500: '#4d4d4d',
//           600: '#333333',
//           700: '#1a1a1a',
//           800: '#0d0d0d',
//           900: '#000000',
//         },
//       },
//     },
//   },
// };
