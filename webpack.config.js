let path = require('path');
let CopyWebpackPlugin = require('copy-webpack-plugin');

let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');

let config = {
  entry: ['babel-polyfill','./app/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {test: /\.(js)$/, use: 'babel-loader'},
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
    ],
    loaders: [
      { test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, loader: "file" }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
      new HtmlWebpackPlugin({
    template: 'app/index.html'
  }),
      new CopyWebpackPlugin([
        {from: 'app/icons', to: 'icons'},
        {from: 'app/avatars', to: 'avatars'}
      ])
  ],
};
if(process.env.NODE_ENV === 'production'){
  config.plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
  );
}

module.exports = config;