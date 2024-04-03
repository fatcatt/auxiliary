const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    module:{
        rules: [
            {
                test: /\.jsx?$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    }
                }],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin()
    ],
    resolve: {
        alias: {
            @: require('path').resolve(__dirname, './')
        },
        extensions: ['.js', '.jsx', '.json', 'tsx'] // 常用扩展名列表
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            // TerserPlugin 配置
        })],
        splitChunks: {
            chunks: 'all',
        },
    },
};