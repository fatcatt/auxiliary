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
        filename: '[name].[contenthash].js', // 输出文件名
        clean: true, // 清理 /dist 文件夹
        publicPath: '/'
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
            },
            {
                test: /\.(woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }
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
        ],
        splitChunks: {
            chunks: 'all', // 对所有类型的 chunks 进行分割
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/, // 从 node_modules 目录中分割出来
                    name: 'vendors', // 打包到 vendors 文件中
                    chunks: 'all',
                    priority: 20 // 优先级
                }
                // 可以根据需要添加更多的缓存组来进一步细分包
            }
        }
    }
};
