const path = require('path');

module.exports = {
  entry: './index.js', 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }, 
  mode: 'development', 
  module: {
    rules: [
      {
        test: /\.css$/, 
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 5501, 
  },
};
