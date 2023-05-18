// 配置可参考 https://prettier.io/en/configuration.html
module.exports = {
  printWidth: 80,
  endOfLine: 'auto',
  // 单引号代替双引号
  singleQuote: true,

  // 对于 ES5 而言, 尾逗号不能用于函数参数，因此使用它们只能用于数组
  trailingComma: 'none',
  plugins: [require('prettier-plugin-tailwindcss')],
};
