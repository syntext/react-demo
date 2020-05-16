const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const path = require('path')

module.exports = (env, argv = {}) => ({
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                resolve: {
                    extensions: ['.js', '.jsx'],
                },
                exclude: /node_modules/,
                loaders: ['babel-loader'],
            },
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    fix: false,
                    emitWarning: true
                },
            },
            {
                test: /\.html$/,
                loaders: ['html-loader'],
            },
            {
                test: /\.(scss|css)$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(woff(2)?|ttf|eot)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 8000, // Convert images < 8kb to base64 strings
                    name: '[hash]-[name].[ext]'
                }
            }
        ],
    },
    entry: [
        './src/index.jsx'
    ],
    output: {
        filename: argv.mode === 'development' ? '[name].[hash].js' : '[name].[chunkhash].js',
        publicPath: '/',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './static/index.html',
            filename: './index.html',
        }),
        new FaviconsWebpackPlugin({
            logo: './static/images/artwork.png',
            prefix: 'favicon/',
        }),
        new webpack.IgnorePlugin({
            resourceRegExp: /^\.\/locale$/,
            contextRegExp: /moment$/
        }),
        new CompressionPlugin({
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ],
    devServer: {
        port: 10001,
        hot: true,
        compress: false,
        contentBase: path.join(__dirname, 'dist'),
        writeToDisk: false,
        historyApiFallback: true,
        disableHostCheck: true,
    },
})
