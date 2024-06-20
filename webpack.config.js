const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundles.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin({
        name: 'index.html',
        template: './src/index.html'
    })],
}