var webpack = require("webpack");
var openBrower = require("open-browser-webpack-plugin");//自动打开浏览器插件
// var ExtractTextPlugin = require("extract-text-webpack-plugin");//分离css
module.exports = {
    entry: {
        app: "./src/App.jsx",
        vendors: ["react","react-dom"]//分离第三方库,antd不能放在这里,否则无法实现按需加载
    },
    output: {
        publicPath:"",//设定静态资源路径
        path: __dirname+"/dist",//生成文件相对于webpack.config.js文件的位置
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                loader:"style-loader!css-loader?modules",//css文件单独打包!!!?modules&localIdentName=[path][name]---[local]---[hash:base64:5]
                test: /\.css$/,
                exclude: /node_modules/    
            },  {
                loader:"style-loader!css-loader",//css文件单独打包!!!?modules&localIdentName=[path][name]---[local]---[hash:base64:5]
                test: /\.css$/,
                include: /node_modules/    
            }, {
                loader:"style-loader!css-loader!less-loader",//
                test: /\.less$/,
                include: /node_modules/    
            },
            {
                loader: "url-loader?limit=10240&&name=/img/[name].[ext]",
                test: /\.(gif|png|jpeg|jpg|bmp)$/i//不区分大小写
            },
            {	//url-loader: 类似file-loader ,但是它可以返回一个DataUrl (base 64)如果文件小于设置的限制值limit
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: "url?limit=10240&&name=/fonts/[name].[ext]"
            },
            {
                loader: "babel?compact=false",//.babelrc文件“-rm”网页部分更换无刷新页面
                test: /\.(js|jsx)$/,
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        // 配置默认扩展名    (踩坑区!!)
        // 1.需要有一个默认空字符串“”，否则在require 全名的时候反而会找不到
        // 2.默认值是[“”, “.webpack.js”, “.web.js”, “.js”]
        // 参考文档：https://webpack.github.io/docs/configuration.html
        extensions: ['', '.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.json','png','jpg','gif'],//自动补全后缀名
        alias: {}//用来设置别名
    },
    // externals: {
    //     jquery: 'window.$'
    // },
    devServer: {//如果route组件的history值browserHistory webserver添加--history-api-fallback
        contentBase:"",  //静态资源的目录 相对路径,相对于当前路径 默认为当前config所在的目录
        hot: true,// 代码热更新
        inline: true,
        port: 3004,
        // historyApiFallback: {
        //     // index: "/manage/",
        //     rewrites: [
        //         // shows views/landing.html as the landing page
        //         { from: /^\/login/, to: '/login.html' },//from(设置根路由)to(访问此根路由时打开对应的静态页面)
        //         // shows views/subpage.html for all routes starting with /subpage
        //         { from: /^\/manage/, to: '/manage.html' },
        //             { from: /^\/users/, to: '/users.html' },
        //         // shows views/404.html on all other pages
        //         { from: /./, to: '/404.html' },
        //     ],
        // },
        devtool:"inline-source-map"
    },
    plugins: [
        //  new ExtractTextPlugin("[name].css"),//分离css
        new openBrower({url: "http://localhost:3004/index.html"}),
        new webpack.HotModuleReplacementPlugin(),//热加载模块，页面整体自动刷新
        new webpack.ProvidePlugin({moment:"moment",$:"jquery"}),// 全局挂载插件,等价于src引入
        new webpack.optimize.CommonsChunkPlugin({name:"vendors",filename:"vendors.js"})]//分析模块的共用代码, 单独打一个包出来
}