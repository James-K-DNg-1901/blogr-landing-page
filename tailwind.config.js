/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        // primary
        // (CTA text)
        light_red: 'hsl(356, 100%, 66%)',
        // (CTA hover background)
        very_light_red: 'hsl(355, 100%, 74%)',
        // (headings)
        very_dark_blue: 'hsl(208, 49%, 24%)',
        // Neutral
        // (footer text)
        grayish_blue: 'hsl(240, 2%, 79%)',
        //(body copy)
        very_dark_grayish_blue: 'hsl(207, 13%, 34%)',
        // footer background
        very_dark_black_blue: 'hsl(240, 10%, 16%)',
        // Background gradient - Intro/CTA mobile nav:
        very_light_red_2: 'hsl(13, 100%, 72%)',
        light_red_2: 'hsl(353, 100%, 62%)',
        // Background gradient - body:
        very_dark_gray_blue: 'hsl(237, 17%, 21%)',
        very_dark_desaturated_blue: 'hsl(237, 23%, 32%)',
      },
      fontFamily: {
        overpass: ['Overpass', 'sans-seri'],
        ubuntu: ['Ubuntu', 'san-serif']
      },
      spacing: {
        intro: '34rem',
        mobile_intro: '40rem',
        84: '24rem',
        74: '19.5rem'
      },
      borderRadius: {
        '4xl': '7rem'
      }
    },
  },
  plugins: [],
}

