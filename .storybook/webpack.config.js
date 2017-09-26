const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve('node_modules', 'stringify-object'),
          path.resolve('node_modules', 'get-own-enumerable-property-symbols')
        ],
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: "[name]__[local]___[hash:base64:5]"
            },
          },
        ],
      },
    ],
  },
}
