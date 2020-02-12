const baseConfig = require('./webpack.config')
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(baseConfig, {
  mode: 'production',

  devtool: 'inline-source-map',

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
    minimizer: [new UglifyJsPlugin()],
  },
})
