const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    port: 8081,
    host: '0.0.0.0',
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    open: true,
    publicPath: '/',
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },

    proxy: {
      '/api/**': {
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true,
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
