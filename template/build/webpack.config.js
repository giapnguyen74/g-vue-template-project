const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
module.exports = {
    context: path.resolve(__dirname, ".."),
    entry: {

        main: "./src/entry.js"
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                exclude: /node_modules/
            },
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'vue-html-loader?minimize=true&caseSensitive=true'
            },
            {
                test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9]|\?[a-z0-9.]*)?$/,
                loader: 'url-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif)(\?v=[0-9]\.[0-9]\.[0-9]|\?[a-z0-9.]*)?$/,
                loader: 'file-loader?name=assets/images/[name].[ext]?[hash]'
            },
            {
                test: /\.(woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]|\?[a-z0-9.]*)?$/,
                loader: 'file-loader?name=assets/fonts/[name].[ext]?[hash]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new FriendlyErrorsPlugin()
    ]
};