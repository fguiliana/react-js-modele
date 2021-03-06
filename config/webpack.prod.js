const paths = require('./paths');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { BundleStatsWebpackPlugin } = require('bundle-stats-webpack-plugin');

module.exports= merge(common, {
    mode: 'production',
    devtool: false,
    // Where files should be sent once they are bundled
    output: {
        path: paths.build,
        publicPath: './',
        filename: 'js/[name].[contenthash].js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name];css',
        }),
        new BundleStatsWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(s?css)$/,
                use: [
                    'resolve-url-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: '../' },
                    },
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 3 },
                    },                    
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                        },
                    },
                ],
            },
        ],
    },

    optimization: {
        minimize: true,
        minimizer: [new TerserJSPlugin(), new CssMinimizerPlugin()],
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
        },
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
});