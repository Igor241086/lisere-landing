const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = (env, argv) => {
  const mode = process.env.MODE || argv.mode || "development";
  const isProd = mode === "production";

  return {
    entry: path.resolve(__dirname, "src/js/index.js"),
    output: {
      filename: "js/[name].[contenthash].js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    devtool: isProd ? false : "source-map",
    devServer: {
      static: path.resolve(__dirname, "dist"),
      hot: true,
      port: 3000,
      compress: true,
      devMiddleware: {
        writeToDisk: false,
      },
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
      minimize: isProd,
      minimizer: [
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
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src/index.html"),
      }),
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash].css",
      }),
    ],
  };
};