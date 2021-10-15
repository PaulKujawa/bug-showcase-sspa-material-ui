const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = (env = {}) => {
  return {
    mode: "development",
    entry: path.resolve(__dirname, "src/index.tsx"),
    output: {
      path: path.resolve(__dirname, `dist`),
      filename: "[name].js",
      libraryTarget: "system",
      jsonpFunction: "webpackJsonp_component-library",
      publicPath: "",
    },
    externals: ["react", "react-dom"],
    resolve: {
      extensions: [".mjs", ".js", ".ts", ".tsx"],
    },
    module: {
      rules: [
        // for webpack@<5, this is needed to avoid rewriting references to the global System variable
        { parser: { system: false } },
        {
          test: /\.tsx?$/,
          use: [/* 'babel-loader', */ "ts-loader"],
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
      ...(env.analyse ? [new BundleAnalyzerPlugin()] : []),
    ],
    devServer: {
      compress: true,
      historyApiFallback: true,
      headers: { "Access-Control-Allow-Origin": "*" },
      disableHostCheck: true,
      https: true,
      port: 8090,
    },
  };
};
