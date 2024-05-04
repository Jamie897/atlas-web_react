const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    compress: true,
    hot: true,
  },
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: ['style-loader', 'css-loader'] 
      },
      { 
        test: /\.jpg/,
        use: ['file-loader', 'image-webpack-loader'] 
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Output',
    }),
  ],
};