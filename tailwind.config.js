module.exports = {
  content: ['./app/**/*.{ts,tsx,jsx,js,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        serif: ['Merriweather', 'serif']
      },
      colors: {
        // Akila's colors
        cyan: '#00B8E9',
        periwinkle: '#544BFD',
        darkBlue: '#2325C9',
        // other colors
        primary: '#3BB3C1',
        darkGrey: '#292B2C',
        background: '#0C0C0C',
        secondaryBackground: '#1E1E1E',
        alternateBackground: '#18181B',
        lightGrey: '#555555',
        linkText: '#3b82f6', // same as text-blue-500
        greyText: '#71717A',
        redText: '#fe87a1'
      }
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman'
    },
    backgroundImage: (theme) => ({
      periwinkleToBlackGradient:
        'linear-gradient(to right, rgb(32,30,100), rgb(7,6,9))'
    })
  },
  plugins: []
}
