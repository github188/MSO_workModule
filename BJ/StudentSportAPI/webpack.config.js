var webpack = require("webpack");
var openBrower = require("open-browser-webpack-plugin");//自动打开浏览器插件
var ExtractTextPlugin = require("extract-text-webpack-plugin");//分离css
module.exports = {
    entry: {
        index: "./src/App.jsx",
        vendors: ["react", "react-router", "react-dom"]//分离第三方库
    },
    output: {
        publicPath: "/src",//开发时设定的静态资源路径,也是文件在内存中生成的位置
        path: "./dist",//生成文件相对于webpack.config.js文件的位置
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader"),
                // loader: "style-loader!css-loader!less-loader",//css文件单独打包
                test: /\.(css|less)$/
            },
            {
                loader: "url-loader?limit=10240&&name=/img/[name].[ext]",
                test: /\.(gif|png|jpeg|jpg|bmp|svg)$/
            },
            {	//url-loader: 类似file-loader ,但是它可以返回一个DataUrl (base 64)如果文件小于设置的限制值limit
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: "file-loader?name=/fonts/[name].[ext]"
            },
            {
                loader: "babel?compact=false",//.babelrc文件“-rm”网页部分更换无刷新页面,开发模式不进行压缩
                test: /\.(js|jsx)$/,
                exclude: /node_modules/

            }
        ]
    },
    resolve: {
        //需要有一个默认空字符串“”，否则在require 全名的时候反而会找不到
        //默认值是[“”, “.webpack.js”, “.web.js”, “.js”]
        extensions: ['','.js', '.css', '.jsx', '.css', '.jpg', '.png'],
        alias: {}//用来设置别名
    },
    // externals: {
    //     jquery: 'window.$'
    // },
    devServer: {//如果route组件的history值browserHistory webserver添加--history-api-fallback
        contentBase: "",  //静态资源的目录 相对路径,相对于当前路径 默认为当前config所在的目录
        hot: true,// 代码热更新
        inline: true,
        port: 3003,
        // historyApiFallback: {
        //     index: "/",
        //     rewrites: [
        //         // shows views/landing.html as the landing page
        //         { from: /^\//, to: '/index1.html' }//重定向，from(设定根路由) to（指向某个静态文件）
        //         // // shows views/subpage.html for all routes starting with /subpage
        //         // { from: /^\/manage/, to: '/manage.html' },
        //         //     { from: /^\/users/, to: '/users.html' },
        //         // // shows views/404.html on all other pages
        //         // { from: /./, to: '/404.html' },
        //     ],
        // },
        historyApiFallback:true,
        devtool: "eval"
    },
    plugins: [
        //  new ExtractTextPlugin("[name].css"),//分离css
        new openBrower({url: "http://localhost:3003"}),
        new webpack.HotModuleReplacementPlugin(),//热加载模块，页面整体自动刷新
        new ExtractTextPlugin("[name].css"/*,{ allChunks: true}*//*多个文件合成一个文件*/),//分离css，设置文件名
        new webpack.ProvidePlugin({$: "jquery", jQuery: "jquery", moment: "moment"}),// 全局挂载插件,等价于src引入
        new webpack.optimize.CommonsChunkPlugin({name:"vendors", filename:"vendors.js", minChunks: Infinity})]
}
//安装依赖 webpack style-loader css-loader url-loader(npm3.x需单独下载file-loader)
//babel-loader(npm3.x需单独安装babel-core)   babel-preset-es2015  babel-preset-react
//react react-dom react-router
//
//热替换配置
//webpack-dev-server  babel-plugin-react-transform：代替react-hot-loader的插件 react-transform-hmr：安装这个才能实现热替换的功能。
// babel-preset-react-hmre：让Babel知道HMR（热替换） react-transform-catch-errors、redbox-react：
//open-browser-webpack-plugin自动打开浏览器插件


//package.json依赖说明
//------------------------------------------------------------
//1:webpack 打包时调用webpack.config.js
//2:webpack-dev-server  webpack小型服务器,用于开发时进行调试
//------------------------------------------------------------
//3:loaders部分{
//      style-loader css-loader less-loader  样式方面的编译
// }
//4:url-loader  类似file-loader ,但是它可以返回一个DataUrl (base 64)如果文件小于设置的限制值limit
//5:file-loder  将匹配到的文件复制到输出文件夹，并根据output.publicPath的设置返回文件路径
//6:babel-core babel 核心
//7:babel-loader babel加载器
//8:babel-preset-es2015 es6语法包
//9:babel-preset-react  react语法包
//10:babel-preset-stage-0 转移部分es7
//-------------------------------------------------------------
//11:插件部分{
// extract-text-webpack-plugin  用于分离css,将css独立打包
// html-webpack-plugin  用于生成html文件
// open-browser-webpack-plugin 自动打开浏览器文件
// }
//-------------------------------------------------------------
//12:react react核心语法
//13:react-dom 用于渲染dom
//14:react-router 路由
//15:redux 管理数据流
//16:react-redux 用于连接react与redux 提供conect将木偶组件变成智能组件,provider组件提供story属性用于注入store
//17:redux-thunk  用于发送异步action
//-------------------------------------------------------------
//关于热替换
//18:babel-plugin-react-transform  代替react-hot-loader的插件，是基于Babel Plugin的。这是一个基本的架子，要实现热替换还要安装其他插件。
//19:react-transform-hmr  安装这个才能实现热替换的功能
//20:babel-preset-react-hmre 让Babel知道HMR（热替换），涉及到了webpack.config.js里loader为babel（也就是js、jsx使用babel-loader地方）的配置。
//21: react-transform-catch-errors、redbox-react：这两个插件把catch到的错误直接显示到页面上，就不用再打开控制台看了
