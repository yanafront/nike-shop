module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    "@nuxtjs",
    "prettier",
    "prettier/vue",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended"
  ],
  plugins: ["prettier"],
  // add your custom rules here
  rules: {
    "vue/order-in-components": ["error"],
    "vue/require-default-prop": ["error"],
    "vue/no-template-shadow": ["error"],
    "vue/require-prop-types": ["error"],
    "vue/attributes-order": ["error"],
    "import/no-named-as-default": ["error"],
    "vue/attribute-hyphenation": ["error"],
    "vue/this-in-template": ["error"],
    "vue/require-component-is": ["warn"],
    semi: [2, "never"],
    "no-console": "off",
    "prettier/prettier": ["error", { semi: false, endOfLine: "auto" }]
  }
}
