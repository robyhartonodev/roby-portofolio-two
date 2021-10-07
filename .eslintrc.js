module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended'
  ],
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    semi: [2, 'always'],
    quotes: [2, 'single', { avoidEscape: true }]
  }
};
