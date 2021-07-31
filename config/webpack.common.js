const paths = require('./paths');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        paths.src + '/index.js',
        paths.assets + '/styles/index.css'
    ],

    resolve: {
        alias: {
            src: paths.src,
            app: paths.src,
        }
    },
    // Rules of how webpack will take our files, complie & bundle them for the browser 
    module: {
        rules: [
            // JS
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    }
                }
            },
            // Fonts
            {
                test: /\.(woff2?|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                  outputPath: 'fonts/',
                },
            },
            // Images
            {
                test: /\.(ico|gif|png|jpe?g|webp|svg)$/i,
                use: [
                {
                    loader: 'file-loader',
                    options: { outputPath: 'images/' },
                },
                ],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: paths.static,
                    to: '',
                    globOptions : {
                        ignore : ['*.DS_Store']
                    }
                }
            ]
        }),
        new HtmlWebpackPlugin({
            favicon: paths.assets + '/favicon.ico',
            template: paths.assets + '/index.html'
        }),
    ],
}