const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js', // 应用的入口文件
    output: {
        path: path.resolve(__dirname, 'dist'), // 输出文件的目标目录
        filename: 'bundle.js' // 输出文件的名称
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/, // 匹配 .scss 文件
                use: [
                    'style-loader', // 3. 将 JS 字符串生成为 style 节点
                    'css-loader', // 2. 将 CSS 转化成 CommonJS 模块
                    'sass-loader' // 1. 将 Sass 编译成 CSS
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html', // 指定模板文件
            filename: 'index.html' // 输出的 HTML 文件名称
        })
    ],
    // resolve: {
    //     alias: {
    //         @: require('path').resolve(__dirname, './')
    //     },
    //     extensions: ['.js', '.jsx', '.json', 'tsx'] // 常用扩展名列表
    // },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                // TerserPlugin 配置
            })
        ]
    }
};
