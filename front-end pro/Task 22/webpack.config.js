const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = (env, argv) => {
  const isDev = argv.mode === "development";

  return {
    entry: "./src/js/index.js",
    output: {
      filename: "js/[name].[contenthash].js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    devtool: isDev ? "source-map" : false,
    devServer: {
      static: "./dist",
      hot: true,
      port: 3000,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          type: "asset",
        },
      ],
    },
    optimization: {
      minimize: !isDev,
      minimizer: [
        `...`,
        new CssMinimizerPlugin(),
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.imageminGenerate,
            options: {
              plugins: [
                ["imagemin-mozjpeg", { quality: 75 }],
                ["imagemin-pngquant", { quality: [0.6, 0.8] }],
              ],
            },
          },
        }),
      ],
      splitChunks: {
        chunks: "all",
      },
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash].css",
      }),
    ],
  };
};