const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BabelMinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})],
    },
    entry: path.resolve(__dirname + '/public/src/js/adminMain.js'),
    output: {
        path: path.resolve(__dirname + '/public/dist/'),
        filename: 'adminBundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader
                    }, {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        },
                        options: {
                            implementation: require("sass")
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|eot|svg|gif|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{
                    loader: 'file-loader',
                }]
            },
        ]
    },
  }
