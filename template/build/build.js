/**
 * Created by yangho on 6/7/17.
 */
var webpack = require("webpack");
var merge = require('webpack-merge');
var path = require('path');

var webpackConfig = require('./webpack.config');

webpackConfig = merge(webpackConfig, {
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.min',
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]
});

webpack(webpackConfig, function (err, stats) {
    if (err) throw err;
    process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n');

    console.log('Build complete.\n');
});