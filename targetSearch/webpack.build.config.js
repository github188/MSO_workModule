/**
 * Created by Administrator on 2017/5/11.
 */
const webpack = require("webpack");
module.exports = {
    entry: {
        app:"./src/App.jsx",
        vendors: ["react", "react-router", "react-dom"]
    },
    output: {
        publicPath: "/",
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader?modules"
            },
            {
                test: /\.(gif|png|jpeg|jpg|bmp)$/i,
                loader: "url-loader?limit=1024&&name=/image/[name].[ext]"
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/i,
                loader: "file-loader?name=/font/[name].[ext]"
            },
            {
                test: /\.(js|jsx)$/,
                loader: "babel",
                exclude: /node_modules/
            }

        ],
        resolve:{
            extensions:["",".js",".jsx",".json",".png","jpg",".gif"],//自动补全扩展名
            alias:{ }//设置扩展名
        },
        devServer:{
            hot:true,
            port:3003,
            inline:true,
            contentBase:"",//设定静态资源目录

        },
        plugin:[
            new webpack.optimize.CommonsChunkPlugin({name:"vendors",filename:"vendor.js"}),
            new webpack.ProvidePlugin({moment:"moment"}),//全局挂载
            new webpack.HotModuleReplacementPlugin(),//热加载模块，保证页面自动刷新，同时还要配合hmr
            new openBrowser({url:"http://localhost:3003/index.html"})//自动打开浏览器插件
        ]

    }
}