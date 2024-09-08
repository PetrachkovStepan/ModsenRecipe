/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.ts(x)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: ({ htmlWebpackPlugin }) =>`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>${htmlWebpackPlugin.options.title}</title>
          <style>body { margin: 0; }</style>
        </head>
        <body>
          <main id="root"></main>
        </body>
      </html>`,
      filename: "index.html",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@components": path.resolve(__dirname, "./src/components/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@assets": path.resolve(__dirname, "./src/assets/"),
      "@store": path.resolve(__dirname, "./src/store/"),
      "@constants": path.resolve(__dirname, "./src/constants/"),
      "@api": path.resolve(__dirname, "./src/api/"),
      "@utils": path.resolve(__dirname, "./src/utils/"),
      "@hooks": path.resolve(__dirname, "./src/hooks/"),
    },
  },
};

module.exports = config;
