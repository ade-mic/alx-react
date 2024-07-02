// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    clean: true,
  },
  mode: 'production',
  module: {
    rules: [
      { 
        test: /\.css$/i, 
        use: ["style-loader", "css-loader"] 
      },
      { 
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name].[ext]',
        }
      },
      {
        tesst: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  performance: {
    hints: false,
    maxAssetSize: 1512000,
    maxEntrypointSize: 1512000,
  }
};
