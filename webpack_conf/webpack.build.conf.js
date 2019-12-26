const merge = require('webpack-merge');
const baseConf = require('./webpack.base.config');

const buildConf = merge(baseConf, {
  mode: 'production'
})

module.exports = new Promise((resolve, reject) => {
  resolve(buildConf)
})