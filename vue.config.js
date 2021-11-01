const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  devServer: {
    disableHostCheck: true
  },
  configureWebpack: {
    plugins: [
      new MonacoWebpackPlugin()
    ]
  }
};