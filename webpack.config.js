const path = require('path');

module.exports = {
  entry: path.join(__dirname, "public/src/index.jsx"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "public/dist")
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
}