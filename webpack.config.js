const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})],
  },
  devtool: 'source-map',
  resolve: {
    modules: [ 'node_modules' ],
    extensions: ['.js', '.jsx'],
    alias: {
      'react': 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat', // Must be below test-utils
    }
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: "/node_modules", loader: "babel-loader" },
      {
        test: /\.css$/,
        use: [
          {loader: MiniCssExtractPlugin.loader, options: { name: "[name].css" }},
          {loader: 'css-loader'},
        ]
      },
      { test: /\.scl$/,
        use: [
          {loader: 'raw-loader'}
        ]
      },
      {
        test:/\.(png|jpg|gif)$/,
        use:[{
          loader:'url-loader',
          options:{
            limit:1024,
            outputPath:'./'
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: "./keys.htm", }),
    new CopyWebpackPlugin([
      // TODO generate manifest
      {from: "manifest.webmanifest", to: './'},
      {from: "sounds", to: './sounds'},
    ]),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
  ],
  devServer: {
    host: '0.0.0.0'
  }
}
