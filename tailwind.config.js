module.exports = {
  mode: 'jit',
  purge: {
    content: [
      'components/**/*.{vue,js}',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.{js,ts}',
      'nuxt.config.{js,ts}'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern-one': "url('~assets/images/Oreti.svg')",
        'hero-pattern-two': "url('~assets/images/Inn.svg')",
        'hero-pattern-three': "url('~assets/images/Linth.svg')",
        'hero-pattern-four': "url('~assets/images/Rangitikei.svg')",
        'hero-pattern-five': "url('~assets/images/Rhon.svg')",
        'hero-pattern-six': "url('~assets/images/Thur.svg')"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
