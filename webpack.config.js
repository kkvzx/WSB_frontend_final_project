const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

ENTRY_PATH = path.resolve(__dirname, "src/index");
DIST_PATH = path.resolve(__dirname, "dist");
PUBLIC_PATH = path.resolve(__dirname, "public");

module.exports = {
  mode: "development", // or production
  entry: {
    // remember that we deleted the main in package.json
    // this is where the project starts
    main: ENTRY_PATH,
  },
  output: {
    // this is where the bundled packages go
    path: DIST_PATH,
    publicPath: "/",
    // [name] is the name of the file and
    // [contenthash] is the hash of the bundle
    filename: "[name].[contenthash].js",
    clean: true, // remove existing previous bundles
  },
  //later
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(jpg|jpeg|png|svg|ico|webp|gif)$/, type: "asset/resource" },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ], // have to be inorder
  },
  resolve: {
    // works like autocomplete for imports
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", // output
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new HtmlWebpackPlugin({
        filename: "mainView.html", // output
        template: path.resolve(__dirname, "src/pages/mainView.html"),
      }),
      new HtmlWebpackPlugin({
        filename: "detailsView.html", // output
        template: path.resolve(__dirname, "src/pages/detailsView.html"),
      }),
      new HtmlWebpackPlugin({
        filename: "summaryView.html", // output
        template: path.resolve(__dirname, "src/pages/summaryView.html"),
      }),
    new CopyPlugin({
      patterns: [{ from: PUBLIC_PATH, to: DIST_PATH }],
    }),
  ],
  devtool: "inline-source-map", //for tracing
  devServer: {
    // so that it can watch for other changes
    static: DIST_PATH,
    hot: true, // hot reload, save to refresh
    port: 3000,
    historyApiFallback: true,
  },
};
