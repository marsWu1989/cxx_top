const ip = require('ip')
const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const ReactManiFest = require('./reactFest.json')

const env = process.env.NODE_ENV
const cfg = require('./config.js')

const prod = env === 'production'

module.exports = {
  // 仅错误输出
  stats: 'errors-only',
  target: 'web',
  mode: prod ? 'production' : 'development',
  entry: {
    app: ['./client/client.tsx'],
  },
  output: {
    path: path.resolve(__dirname, '../asset'),
    filename: 'script/[name].js',
    chunkFilename: 'script/[name].[chunkhash:5].js',
    publicPath: '/asset/',
  },
  devServer: {
    overlay: {
      errors: true,
      warnings: false,
    },
    open: true,
    https: false,
    hotOnly: true,
    inline: true,
    port: cfg.port,
    compress: true,
    progress: true,
    publicPath: '/asset/',
    openPage: 'index.html',
    host: ip.address(),
    disableHostCheck: true,
    historyApiFallback: true,
    contentBase: './',

    proxy: {
      '/api/*': {
        target: cfg.api,
        secure: false,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      node: 'current',
                      browsers: [
                        'last 2 versions',
                        'ie >= 10',
                      ],
                    },
                  },
                ],
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
              plugins: [
                '@babel/plugin-proposal-function-bind',
                '@babel/plugin-proposal-optional-chaining',
                '@babel/plugin-transform-runtime',
              ],
            },
          /*
          }, {
            loader: 'eslint-loader',
          */
          },
        ],
      }, {
        test: /\.(sc|sa)ss$/,
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader?importLoaders=1',
            options: {
              sourceMap: true,
            },
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer({
                overrideBrowserslist: ['> 1%', 'last 2 versions'],
              })],
            },
          }, {
            loader: 'sass-loader',
          },
        ],
      }, {
        test: /\.css$/,
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader?importLoaders=1',
            options: {
              sourceMap: true,
            },
          },
        ],
      }, {
        test: /\.(png|jpg|gif|md)$/,
        use: ['file-loader?limit=8192&name=image/[md5:hash:base64:10].[ext]'],
      },
    ],
  },
  devtool: !prod ? 'cheap-module-eval-source-map' : 'cheap-module-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.jpg', '.jpeg', '.png', '.gif', '.svg'],
    alias: {
      client: path.resolve(__dirname, '../client'),
      tool: path.resolve(__dirname, '../client/tool'),
      page: path.resolve(__dirname, '../client/page'),
      component: path.resolve(__dirname, '../client/component'),
      container: path.resolve(__dirname, '../client/container'),
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: ReactManiFest,
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
    // Scope Hoisting(作用域提升)
    new webpack.optimize.ModuleConcatenationPlugin(),
    // 打印更新的模块路径
    new webpack.NamedModulesPlugin(),
    // 热更新插件
    new webpack.HotModuleReplacementPlugin(),
    // 分析 webpack 打包依赖
    new BundleAnalyzerPlugin(
      {
        analyzerMode: prod ? 'disabled' : 'server',
        analyzerHost: ip.address(),
        analyzerPort: cfg.port + 1,
        reportFilename: 'report.html',
        defaultSizes: 'parsed',
        openAnalyzer: true,
        generateStatsFile: false,
        statsFilename: 'stats.json',
        statsOptions: null,
        logLevel: 'info',
      },
    ),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          map: { inline: false },
        },
      }),
      // 多进程压缩
      new ParallelUglifyPlugin({
        cacheDir: '.cache/',
        uglifyJS: {
          output: {
            comments: false,
            beautify: false,
          },
          compress: {
            // warnings: false,
            drop_console: true,
            collapse_vars: true,
            reduce_vars: true,
          },
        },
      }),
    ],
    // 分割代码
    splitChunks: {
      cacheGroups: {
        common: {
          // initial: 初始模块; async: 按需加载模块; all: 全部模块
          chunks: 'initial',
          // 模块超过 x 自动被抽离成公共模块
          minSize: 0,
          // 模块被引用 >= 2 次，便分割
          minChunks: 2,
          // 异步加载chunk的并发请求数量 <= 5
          maxAsyncRequests: 5,
          // 一个入口并发加载的 chunk 数量 <=3
          maxInitialRequests: 3,
          // 默认由模块名+hash命名，名称相同时多个模块将合并为1个，可以设置为function
          name: true,
          // 命名分隔符
          automaticNameDelimiter: '~',
        },
        vendor: {
          priority: 1,
          test: /node_modules/,
          chunks: 'initial',
          minSize: 0,
          minChunks: 2,
        },
      },
    },
    noEmitOnErrors: prod,
  },
}
