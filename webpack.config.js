const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  entry: path.join(__dirname, "/src/index.js"),
  output: {
    filename: "[name].[hash].bundle.js",
    chunkFilename: "[name].[hash].bundle.js",
    path: BUILD_DIR,
    publicPath: "/"
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  devServer: {
    contentBase: BUILD_DIR,
    compress: true,
    port: 9000,
    disableHostCheck: false,
    open: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-syntax-dynamic-import"]
          }
        }
      },
      {
        test: /\.css/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.sass/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: {
          loader: "file-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
