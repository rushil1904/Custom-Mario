const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/js/canvas.js",
  output: {
    path: __dirname + "/dist/",
    filename: "./js/[name].[contenthash].bundle.js",
    chunkFilename: "./js/[name].[contenthash].chunk.js",
  },
  optimization: {
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[contenthash].[ext]",
              outputPath: "images",
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
      {
        test: /\.(mp3|wav)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[contenthash].[ext]",
              outputPath: "audio",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      server: { baseDir: ["dist"] },
      files: ["./dist/*"],
      notify: false,
      open: false,
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      favicon: "favicon.ico",
      template: "src/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new CompressionPlugin(),
  ],
  devtool: process.env.NODE_ENV === "production" ? false : "source-map",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
    proxy: {
      "/api": {
        target: "http://localhost:5001",
        changeOrigin: true,
        secure: false,
      },
    },
  },
};
