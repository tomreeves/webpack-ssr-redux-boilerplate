const webpack = require('webpack')
const path = require('path')
const __BUILD_DIR__ = path.resolve(__dirname, 'public')

module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: {
    app: ['./client/index.js'],
    vendor: [
      'regenerator-runtime',
      'react',
      'react-dom',
      'react-router',
      'react-router-dom',
    ],
  },

  resolve: {
    modules: ['node_modules', path.resolve(__dirname, '/src')],
    extensions: ['.js', '.jsx', '.json'],
  },

  output: {
    path: __BUILD_DIR__ + '/dist',
    filename: '[name].js',
    publicPath: '/dist/',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
}
