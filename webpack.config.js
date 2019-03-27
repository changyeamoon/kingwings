const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    open: true,
    publicPath: '/',
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
        resolve: {
          extensions: ['*', '.js', '.jsx'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    // new CopyWebpackPlugin([{ from: 'client/assets', to: 'assets' }]),
    // new webpack.DefinePlugin(envKeys),
  ],
};
