const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackWatchedGlobEntries = require("webpack-watched-glob-entries-plugin");
const webpack = require('webpack')

const mode =
  process.env.NODE_ENV == "production" ? "production" : "development";

const buildDir = "build";
const publicDir = 'public'
const devDir = "src";
const pagesDir = path.resolve(__dirname, `./src/pages/`);
let files  = [];

function throughDirectory(directory) {
    fs.readdirSync(directory).forEach(File => {
        const absolute = path.join(directory, File);
        if (fs.statSync(absolute).isDirectory()) return throughDirectory(absolute);
        else return files.push(absolute);
    });
}

throughDirectory(pagesDir)

const pages = files.map(page => page.replace(pagesDir, '')).map(page => page.replace(/\\/g, "/")).map(page => page.slice(1));

console.log(pages);

console.log(mode + " mode");

module.exports = {
  mode: mode,
  stats: "minimal",
  target: 'web',
  resolve: {
    alias: {
      public: path.resolve(__dirname, '/public'),
    },
  },
  entry: WebpackWatchedGlobEntries.getEntries([
    path.resolve(__dirname, `${devDir}/*.js`),
  ]),
  output: {
    filename: "js/[name].js", // [hash]
    chunkFilename: "js/[name].js", // [chunkhash]
    assetModuleFilename: "[name][ext][query]", // [hash]
    path: path.resolve(__dirname, `./${buildDir}`),
    clean: true,
  },
  devtool: mode === 'development' ? 'source-map' : false,
  devServer: {
    open: false,
    hot: true,
    static: {
      watch: true,
    },
    port: 3000,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      'window.jQuery': 'jquery'
    }),
    new WebpackWatchedGlobEntries(),
    new MiniCssExtractPlugin({
      filename: "css/[name].css", // [contenthash]
    }),
    ...pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          favicon: `${publicDir}/favicon.png`,
          hash: true,
          template: `${pagesDir}/${page}`,
          filename: page,
        })
    ),
  ],
  module: {
    rules: [
      {
        test: /\.html?$/,
        use: [
          {
            loader: 'html-loader', // Used to output as html
          },
          {
            loader: 'webpack-ssi-include-loader',
            options: {
              localPath: path.join(__dirname, '/src'),
            },
          },
        ],
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
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext][query]", // [hash]
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext][query]", // [hash]
        },
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          // options: {
          //     presets: ['@babel/preset-env']
          // }
        },
      },
    ],
  },
};
