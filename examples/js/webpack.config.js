const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const base = require('../../webpack.config');

module.exports = {
  ...base,
  mode: 'development',
  context: __dirname,
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'example.js'
  },
  externals: {},
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ASR for low-resource code-switching',
      template: `./index.html`
    })
  ],
  resolve: {
    alias: {
      spectacle: path.resolve(__dirname, '../../src')
    },
    fallback: {
      "assert": false,
      "util": false
    }
  }
};
