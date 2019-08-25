var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: ['@babel/polyfill', './src/main/frontend/src/index.js'],

  output: {
    path: path.resolve('target/classes/static')
  },

  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: "babel-loader", exclude: /node_modules/ },
      { test: /\.(jpe?g|gif|png|svg|ttf)$/, use: "file-loader", exclude: /node_modules/ }
    ]
  },

  plugins: [
    new htmlWebpackPlugin({
      filename: "index.html",
      template: "./src/main/frontend/public/index.html",
      favicon: "./src/main/frontend/public/favicon.ico",
      inject: 'body'
    })
  ],

  devServer: {
    port: 3000,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080'
      },
      "/auth": {
        target: "http://localhost:8080"
      },
      "/login": {
        target: "http://localhost:8080"
      }
    }
  },

  devtool: 'source-map'

};