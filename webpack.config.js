var webpack = require('webpack');
const path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var APP_PATH = path.resolve(__dirname, './src');
const BUILD_PATH = path.resolve(__dirname, './res/dist');
var STATIC_RES = path.resolve(__dirname, './res/static');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonExtract = new ExtractTextPlugin('common.css', {chunck: true});
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    name: 'client',
    target: 'web',
    entry: [
        path.resolve(APP_PATH, './client'),
        'webpack-hot-middleware/client',
    ],
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js',
        publicPath: '/static'
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'React Component Test',
            template: path.resolve(__dirname, './index.html'),
            filename: 'index.html',
            // chunks 指定要引用entry文件中哪个几个入口个文件
            chunks: 'app',
            // 表示script插入标签中
            inject: 'body'
        })
    ],
    // devtool: 'eval-source-map',
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    // postcss: function () {
    //     return [require('autoprefixer'), require('precss')];
    // },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            include: APP_PATH
        }, {
            test: /\.(scss|css)$/,
            loaders:['style-loader','css-loader']
        }]
    }
};
