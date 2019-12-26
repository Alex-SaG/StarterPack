const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConf = require('./webpack.base.config')

const devConf = merge(baseConf, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: baseConf.externals.paths.dist,
    port: 8081,
    overlay: true
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(devConf)
})