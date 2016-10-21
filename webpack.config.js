var webpack = require('webpack');
var path = require('path');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {       
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: './'
    },
    entry: {
        index: path.resolve(__dirname, 'src/js/index.jsx'),
        list: path.resolve(__dirname, 'src/js/list.jsx')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath:'/dist/',
        filename: 'js/[name].js',
        chunkFilename: 'js/[id].chunk.js'
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: "html-loader" },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
            { test: /\.less$/, loader: ExtractTextPlugin.extract("css-loader!less-loader") },
            { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.(png|jpg|jpeg|gif)$/, loader: "url-loader?limit=1024&name=img/[name].[ext]" },
            { test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/, loader: "file-loader" }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    plugins: [
        new webpack.ProvidePlugin({ $:"jquery" }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors', // 将公共模块提取，生成名为`vendors`的chunk
            chunks: ['index','list'], //提取哪些模块共有的部分
            minChunks: 2 // 提取至少3个模块共有的部分
        }),
        new ExtractTextPlugin("css/[name].css"),
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            favicon: './src/img/favicon.ico', //favicon路径，通过webpack引入同时可以生成hash值
            filename: 'view/index.html', //生成的html存放路径，相对于path
            template: './src/view/index.html', //html模板路径
            inject: 'body', //js插入的位置，true/'head'/'body'/false
            hash: true, //为静态资源生成hash值
            chunks: ['vendors', 'index']            
        }),
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
            favicon: './src/img/favicon.ico', //favicon路径，通过webpack引入同时可以生成hash值
            filename: 'view/list.html', //生成的html存放路径，相对于path
            template: './src/view/list.html', //html模板路径
            inject: 'body', //js插入的位置，true/'head'/'body'/false
            hash: true, //为静态资源生成hash值
            chunks: ['vendors', 'list']            
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:8080/dist/view/index.html' })
    
    ]
};
