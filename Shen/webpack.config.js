var webpack = require('webpack');
module.exports = {
  entry: './src/jsx/main.jsx',
  output: {
    path: './dist',
    filename: 'bundle.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
  ],
  devtool: "source-map"
};
