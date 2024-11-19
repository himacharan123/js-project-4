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
    new CleanWebpackPlugin(), // Cleans the 'dist' folder before each build
    new HtmlWebpackPlugin({
      template: "./index.html", // Use your existing `index.html`
      filename: "index.html", // Output HTML file in `dist`
    }),
  ],
  devServer: {
    static: "./dist", // Serve files from the `dist` folder
    port: 8080, // Development server port
    open: true, // Automatically opens the browser
  },
};
