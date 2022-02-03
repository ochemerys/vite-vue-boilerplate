module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    "vue/setup-compiler-macros": true,
  },
  plugins: ["vue", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  parser: "vue-eslint-parser",
  // https://github.com/vuejs/vue-eslint-parser#parseroptionsparser
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/object-curly-spacing": [2, "always"],
    "vue/html-closing-bracket-spacing": [
      2,
      {
        selfClosingTag: "always",
      },
    ],
    // "vue/max-attributes-per-line": [
    //   2,
    //   {
    //     singleline: {
    //       max: 1,
    //     },
    //     multiline: {
    //       max: 1,
    //     },
    //   },
    // ],
  },
};
