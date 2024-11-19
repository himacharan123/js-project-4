const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./index.js", 
  output: {
    path: path.resolve(__dirname, "dist"), 
    filename: "bundle.js", 
  },
  mode: "development", 
  module: {
    rules: [
      {
        test: /\.css$/i, 
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), 
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html", 
    }),
  ],
  devServer: {
    static: "./dist", 
    port: 8080, 
    open: true, 
  },
};
