let path = require('path');
let webpack = require('webpack');
const { STATIC_PATH } = require('./base');

module.exports = {
  // 要打包的模块的数组
  context: __dirname,
  entry: {
    vendor: ['react', 'react-dom', 'react-router-dom', 'dva-core', 'react-redux']
  },
  output: {
    path: path.join(__dirname, `${STATIC_PATH}/dll`), // 打包后文件输出的位置
    filename: '[name].dll.js', // vendor.dll.js中暴露出的全局变量名。
    library: '[name]_library' // 与webpack.DllPlugin中的`name: '[name]_library',`保持一致。
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, STATIC_PATH, '[name]-manifest.json'),
      name: '[name]_library',
      context: __dirname
    }),
  ]
};
