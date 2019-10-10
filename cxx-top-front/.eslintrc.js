module.exports = {
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    },
  },
  "env": {
    "es6": true,
    "node": true,
    "browser": true,
    "jest": true,
  },
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
  ],
  "parser": "babel-eslint",
  "rules": {
    "semi": ["error", "never"],
    "no-console": ["off"],
    "react/no-danger": ["off"],
    "prefer-destructuring": ["error", {"object": false, "array": false}], // 对象解构
    "max-len": ["off"],                                                   // 行 100
    "no-nested-ternary": ["off"],                                         // 三元嵌套
    "no-unneeded-ternary": ["off"],                                       // 三元正负
    "react/jsx-filename-extension": ["off"],                              // JSX 扩展名
    "import/no-unresolved": ["off"],                                      // 引入
    "react/jsx-fragments": ["off"],                                       // 有问题
    "no-new": ["off"],                                                    // 不在 Effects 里 new
  }
}

