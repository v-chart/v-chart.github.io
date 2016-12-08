var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var APP_PATH = path.resolve(ROOT_PATH, 'app');

module.exports= {
  entry: {
    app: path.resolve(APP_PATH, 'main.js')
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },

  // enable dev source map
  devtool: 'eval-source-map',
  // enable dev server
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: APP_PATH
  },
  module: {
    preLoaders: [
      // 加入 eslint 验证
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: APP_PATH
      }
    ],
    loaders: [
      // 加入 babel 转义
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: APP_PATH
      }    ]
  },
  plugins: [
    // 自动生成 html 页面
    new HtmlwebpackPlugin({
      title: 'Home Page'
    })
  ]
}
