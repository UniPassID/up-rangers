/*
 * @Author: mouse
 * @Date: 2022-06-08 12:00:19
 * @LastEditTime: 2022-06-09 16:42:34
 * @LastEditors: mouse
 * @Description:
 * @FilePath: /up-rangers/webpack.config.js
 * @project:
 */
// 引入一个包
const path = require('path');
const webpack = require('webpack')
/*
webpack中所有的配置信息都应该写在module.exports中
*/
module.exports = {

    // 指定入口文件
    entry: "./src/index.ts",
    // mode:"development",
    mode:"production",

    // 指定打包文件所在目录
    output: {
        // 指定打包文件目录
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        library:'upRangers',
        // 打包后的文件
        filename: "upRangers.js"
    },

    // 指定webpack打包时要使用的模块
    module: {
        //指定加载的规则
        rules: [
            {
                // test指定规则生效的文件
                test: /\.ts$/,
                // 要使用的loader
                use: 'ts-loader',
                // 要排除的文件
                exclude: /node-modules/
            }
        ]
    },

    resolve: {
        alias: {
          // '@': path.resolve(__dirname, 'src/'),
          process: "process/browser"

        },
        extensions:['.ts','.js'],
        fallback: {
          path: require.resolve("path-browserify"),
          url: require.resolve("url/"),
          buffer: require.resolve("buffer/"),
          util: require.resolve("util/"),
          stream: require.resolve("stream-browserify/"),
          https: require.resolve("https-browserify"),
          os: require.resolve("os-browserify/browser"),
          http: require.resolve("stream-http"),
          crypto: require.resolve("crypto-browserify"),
          assert: require.resolve("assert/"),
          process: require.resolve("process/browser")
        }
    },
    plugins: [
      new webpack.DefinePlugin({
         'process.env': JSON.stringify(process.env)
      }),
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
    }),
    ]
};
