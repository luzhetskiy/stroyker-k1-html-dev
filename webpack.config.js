const path = require("path");
const HtmlBundlerPlugin = require("html-bundler-webpack-plugin");
const webpack = require("webpack");

const buildDir = "build";
const publicDir = "public";
const devDir = "src";

const mode = process.env.NODE_ENV === "production" ? "production" : "development";

console.log(mode);

module.exports = {
  mode: mode,
  stats: "minimal",
  // if sets 'source-map' memory will leak after changing big bundle file (css)
  // devtool: mode === 'production' ? false : 'source-map',
  devtool: false,
  resolve: {
    alias: {
      "@public": path.resolve(__dirname, "public"),
      "@src": path.resolve(__dirname, "src"),
      "@images": path.resolve(__dirname, "public/images"),
    },
  },
  optimization: {
    minimize: mode === 'production',
    mergeDuplicateChunks: true,
    splitChunks: {
      cacheGroups: {
        app: {
          test: /\.(js|ts)$/, // split only JS files
          chunks: 'all', // <- use it only in cache groups
          
          name({ context }, chunks, groupName) {
            // save split chunks of the node module under package name
            if (/[\\/]node_modules[\\/]/.test(context)) {
              const moduleName = context.match(/[\\/]node_modules[\\/](.*?)(?:[\\/]|$)/)[1].replace('@', '');
              return `${moduleName}`;
            }
            // save split chunks of the application
            return groupName;
          },
        },
      },
    },
  },
  output: {
    chunkFilename: "js/[name][id].js", // [chunkhash]
    assetModuleFilename: "[name][ext][query]", // [hash]
    path: path.resolve(__dirname, `./${buildDir}`),
    clean: true,
  },
  devServer: {
    open: false,
    hot: true,
    static: {
      directory: `./${publicDir}`,
      watch: true,
    },
    watchFiles: {
      paths: [`${devDir}/**/*.*`],
      options: {
        usePolling: true,
      },
    },
    port: 3000,
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
    new HtmlBundlerPlugin({
      entry: "src/pages",
      js: {
        // output filename of compiled JavaScript, used if `inline` option is false (defaults)
        filename: "js/[name].js",
        // inline: true, // inlines JS into HTML
      },
      css: {
        // output filename of extracted CSS, used if `inline` option is false (defaults)
        filename: "css/[name].css",
        // inline: true, // inlines CSS into HTML
      },
      loaderOptions: {
        preprocessor: "eta",
        preprocessorOptions: {
          views: "src",
        },
      },
    }),
  ],
  module: {
    rules: [
      {
        test: require.resolve("jquery"),
        use: [
          {
            loader: "expose-loader",
            options: {
              exposes: ["$", "jQuery"],
            },
          },
        ],
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: path.resolve(__dirname, 'node_modules/'),
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ["css-loader", "sass-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext][query]",
        },
      },
      {
        test: /\.(ico|png|jpg|jpeg|webp|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext][query]",
        },
      },
    ],
  },
};
