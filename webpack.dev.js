const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const Dotenv = require('dotenv-webpack')

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: './dist'
    },
    devtool: 'inline-source-map',
    plugins: [
        new Dotenv()
    ]
})