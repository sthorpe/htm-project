/*
    ./webpack.config.js
*/
const path              = require('path');
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  devtool: "inline-source-map",
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "HTM",
      template: "index.html"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify(process.env.NODE_ENV),
        "BUILD_VERSION": JSON.stringify(process.env.BUILD_VERSION || 'development')
      }
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "root.jQuery": "jquery",
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot-loader', 'babel-loader?presets[]=env&plugins[]=transform-runtime'],
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      },
      {
        test: /\.less$/,
        loaders: ["style", "css?sourceMap", "less?sourceMap"],
        exclude: /(node_modules|bower_components)/,
        include: path.join(__dirname, 'htm-project')
      },
      { test: /\.png$/,                         loader: "url-loader?mimetype=image/png" },
      { test: /\.jpg$/,                         loader: "url-loader?mimetype=image/jpg" },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,     loader: "url?limit=10000&minetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,     loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,     loader: "url?limit=10000&minetype=image/svg+xml" },
      { test: /\.otf$/,                         loader: "file-loader?prefix=font/" },
    ]
  },
  resolve: {
    alias: {
      images: __dirname + '/htm-project/images',
      tests:  __dirname + '/tests'
    },
    extensions: ['.js', '.less', '.png', '.jpg']
  }
}