/**
 * Created by yangho on 6/7/17.
 */
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var merge = require('webpack-merge');
var path = require('path');

var webpackConfig = require('./webpack.config');

webpackConfig = merge(webpackConfig, {
    entry: {
        devtool: 'webpack-dev-server/client?http://localhost:3000'
    },
    devtool: '#eval',

});

// Start a webpack-dev-server
var devServer = new WebpackDevServer(webpack(webpackConfig), {
    contentBase: path.resolve(__dirname,'../public'),
    publicPath:  webpackConfig.output.publicPath,
    stats: 'normal',
    historyApiFallback: {
     index: '/'
    },
    //historyApiFallback: false
});

//devServer.app.use(require('../server'));

devServer.listen(3000, function(err) {
    if(err) return console.error("webpack-dev-server", err);
    console.log("[webpack-dev-server] listen@", 3000);
});