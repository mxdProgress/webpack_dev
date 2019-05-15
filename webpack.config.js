const path = require('path')
const webpack = require('webpack') //启动热更新得第二步
const VueLoaderPlugin = require('vue-loader/lib/plugin');
//这个插件有两个作用
//1.自动在内存中根据制定页面生成一个内存页面
//2.自动把打包好得bundle.js追加到生成的页面中去
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        open: true,
        // contentBase: 'src',
        port: 3000,
        hot: true //启动热更新得第一步
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App1',
            template: path.join(__dirname, './src/index.html'), //制定模板文件路径
            filename: 'index.html', //生成文件名
            // minify:{
            // 	collapseWhitespace:true
            // },
            hash: true
        }),
        new webpack.HotModuleReplacementPlugin(), //new 一个热更新得模块对象 这是启动热更新的第三部
        new VueLoaderPlugin()
    ],
    module: { //这个节点，用用配置所用模块加载器
        rules: [{ //匹配规则 安装style-loader css-loader
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            { //安装less-loader less
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            { //安装sass-loader node-sass  node-sass是sass-loader内部依赖不需要使用
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            { //安装url-loader file-loader file-loader是url-loader内部依赖不需要使用 
                test: /\.(jpg|png|gif|bmp|jpeg)$/,
                use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]' //limit限制小于指定字节的url转乘base64 name作用不改变文件名，ext打包完不改变文件名
            },
            { //处理字体文件
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                use: 'url-loader'
            },
            { //配置babel来转换高级语法
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    }
}