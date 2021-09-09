const path = require('path');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');//css样式从js文件中分离出来,需要通过命令行安装 extract-text-webpack-plugin依赖包
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: './index.js', //打包文件入口
    // template: './index.html',
    output: {               //打包文件出口
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            }
        ],

    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                //   inlineSource: "style.css",
                path: path.resolve(__dirname, "dist"),
                template: "./index.html",
                filename: "index.html",
                hash: true,
            }
        ),]
}