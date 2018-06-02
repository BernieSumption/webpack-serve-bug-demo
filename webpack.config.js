const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "src"),
  entry: "./index.js",
  resolve: {
    modules: ["node_modules", "src"],
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "script-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      inject: true
    }),
  ],
  output: {
    pathinfo: true,
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
    libraryTarget: "umd"
  }
};
