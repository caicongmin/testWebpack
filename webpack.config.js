/**
 * Created by ccm on 2016/11/30.
 */
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  devtool: "source-map",
  entry: __dirname + "/app/main.js",    //  入口文件
  output: {
    path: __dirname + "/build", //  打包后输出的文件路径
    filename: 'bundle.js'   // 打包后输出的文件名
  },
  devServer: {
    contentBase: "./public",  //  本地服务器所加载的页面
    colors: true,  //  控制台输出文字为彩色
    historyApiFallback: true,   //  不跳转页面 所有的跳转指向index.html 依赖于H5 History API
    inline: true,   //  实时刷新
    port: 6001  //  监听端口 默认8080
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.js$/,
        loader: "babel",
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    // new webpack.BannerPlugin("Copy right Flying Unicorns inc")
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.tmpl.html" // new一个插件实例 并传入模板地址
    })
  ]
}