var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: './wwwroot/app/main.js',
  output: {
    path: path.resolve(__dirname, './wwwroot/dist'),
    publicPath: '/wwwroot/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
              use: 'css-loader'
          })
      },
      {
          test: /\.(woff2?|ttf|eot|svg)$/,
          loader: 'url-loader?limit=10000'
      }
    ]
  },
  plugins: [
      new ExtractTextPlugin('styles.css'),
      new OptimizeCssAssetsPlugin({
          assetNameRegExp: /\.css$/g,
          cssProcessor: require('cssnano'),
          cssProcessorOptions: { discardComments: { removeAll: true } },
          canPrint: true
      }),
      new webpack.ProvidePlugin({
          jQuery: 'jquery',
          $: 'jquery',
          jquery: 'jquery'
      })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
