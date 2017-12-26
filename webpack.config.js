const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, '/public'),
    filename: './app.js',
  },
  devServer: {
    port: 3000,
    contentBase: './public',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      modules: path.resolve(__dirname, '/node_modules'),
    },
  },
  module: {
    loaders: [{
      test: /\.js[x]$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2017', 'react'],
      },
    }],
  },
};
