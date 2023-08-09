const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackWatchedGlobEntries = require('webpack-watched-glob-entries-plugin');

const mode = process.env.NODE_ENV == 'production' ? 'production' : 'development'

const buildDir = 'dist'
const devDir = 'src'
const pagesDir = path.resolve(__dirname, `./src/html/pages/`);
const pages = fs.readdirSync(pagesDir).filter(fileName => fileName.endsWith('.html'));

console.log(mode + ' mode')

module.exports = {
    mode: mode,
    stats: 'minimal',
    entry: WebpackWatchedGlobEntries.getEntries(
        [
          path.resolve(__dirname, `${devDir}/*.js`)
        ],
    ),
    output: {
        filename: 'js/[name].[hash].js',
        chunkFilename: 'js/[id].[chunkhash].js',
        assetModuleFilename: "assets/[hash][ext][query]",
        path: path.resolve(__dirname, `./${buildDir}`),
        clean: true,
    },
    devServer: {
        open: true,
        static: {
            directory: './src',
            watch: true
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new WebpackWatchedGlobEntries(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css'
        }),
        ...pages.map(page => new HtmlWebpackPlugin({
            favicon: `${devDir}/images/favicon.png`,
            hash: true,
            template: `${pagesDir}/${page}`,
            filename: page,
        })),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            // Options
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[hash][ext][query]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[hash][ext][query]'
                }
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //     presets: ['@babel/preset-env']
                    // }
                }
            }
        ]
    },
}