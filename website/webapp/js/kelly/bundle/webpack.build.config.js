/**
 * Created by Administrator on 2017/5/11.
 */
var webpack = require("webpack");
module.exports = {
    entry: {
       new_demand_copy_k_5:"../new_demand_copy_k_5/entry.jsx"
        
    },
    output: {
        publicPath: "/",
        path: "./dist",
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            {
                loader: "style-loader!css-loader",//css文件单独打包
                test: /\.css$/
            },{
                loader: "style-loader!css-loader!less-loader",//css文件单独打包
                test: /\.less$/
            },

            // {	//loader文件加载顺序从右至左,从下至上;先将文件
            // 	loader: ExtractTextPlugin.extract("style-loader", "css-loader"),//css文件单独打包
            // 	test:/\.css$/,//匹配希望处理文件的路径
            // 	exclude: "/node_modules/"// 匹配不希望处理文件的路径
            // },
            {	//file-loader:将匹配到的文件复制到输出文件夹，并根据output.publicPath的设置返回文件路径
                loader: "url-loader?limit=10240&&name=/imgs/[name].[ext]",
                test: /\.(gif|png|jpeg|jpg|bmp)$/
            },
            {	//url-loader: 类似file-loader ,但是它可以返回一个DataUrl (base 64)如果文件小于设置的限制值limit
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: "url?limit=10240&&name=/fonts/[name].[ext]"
            },
            {
                loader: "babel?compact=false",
                test: /\.(js|jsx)$/,
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        // 配置默认扩展名  (踩坑区！！！)
        // 1.需要有一个默认空字符串“”，否则在require 全名的时候反而会找不到
        // 2.默认值是[“”, “.webpack.js”, “.web.js”, “.js”]
        // 参考文档：https://webpack.github.io/docs/configuration.html
        extensions: ['', '.js', '.css', '.jsx', '.css', '.jpg', '.png'],//自动补全后缀名
        alias: {}//设置路径别名
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        // new html({
        // 	title: "login",
        // 	//favicon:"",// 添加特定的 favicon 路径到输出的 HTML 文件中
        // 	template: __dirname + '/app.html',//插件没有配置loader时默认支持的ejs模板引擎
        // 	inject:"body",//所有的 javascript 资源将被放置到 body 元素的底部
        // 	filename: "login.html",//输出文件路径为output.path
        // 	//hash:true,//动态添加每次compile后的hash，防止引用缓存的外部文件问题
        // 	chunks: ["vendors","login"],//路径是相对于publicPath及生产环境下的路径
        // 	minify: {    //压缩HTML文件
        // 		removeComments: true,    //移除HTML中的注释
        // 		collapseWhitespace:true    //删除空白符与换行符
        // 	},
        // 	options:{
        // 		title:"login"
        // 	}
        // }),
        // new html({
        // 	title: "manage",
        // 	//favicon:"",// 添加特定的 favicon 路径到输出的 HTML 文件中
        // 	template: __dirname + '/app.html',//插件没有配置loader时默认支持的ejs模板引擎
        // 	inject:"body",//所有的 javascript 资源将被放置到 body 元素的底部
        // 	filename: "manage.html",//输出文件路径为output.path
        // 	//hash:true,//动态添加每次compile后的hash，防止引用缓存的外部文件问题
        // 	chunks: ["vendors","manage"],//路径是相对于publicPath及生产环境下的路径
        // 	minify: {    //压缩HTML文件
        // 		removeComments: true,    //移除HTML中的注释
        // 		collapseWhitespace:true    //删除空白符与换行符
        // 	},
        // 	options:{
        // 		title:"manage"
        // 	}
        // }),
        // new html({
        // 	title: "users",
        // 	//favicon:"",// 添加特定的 favicon 路径到输出的 HTML 文件中
        // 	template: __dirname + '/app.html',//插件没有配置loader时默认支持的ejs模板引擎
        // 	inject:"body",//所有的 javascript 资源将被放置到 body 元素的底部
        // 	filename: "users.html",//输出文件路径为output.path
        // 	//hash:true,//动态添加每次compile后的hash，防止引用缓存的外部文件问题
        // 	chunks: ["vendors","users"],//路径是相对于publicPath及生产环境下的路径
        // 	minify: {    //压缩HTML文件
        // 		removeComments: true,    //移除HTML中的注释
        // 		collapseWhitespace:true    //删除空白符与换行符
        // 	},
        // 	options:{
        // 		title:"users"
        // 	}
        // }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,//压缩时不显示警告信息
                drop_debugger: true, //去除debugger
                drop_console: true   //去除console.log();
            },
            except: ["$", "require", "export", "jQuery"]    //排除关键字，不然会把这些都压缩替换
        }),
        new webpack.HotModuleReplacementPlugin(),//热加载模块，页面整体自动刷新
        //	new ExtractTextPlugin("[name].css"/*,{ allChunks: true}*//*多个文件合成一个文件*/),//分离css，设置文件名
        // new webpack.ProvidePlugin({$: "jquery", jQuery: "jquery", moment: "moment"}),// 全局挂载插件
        // new webpack.optimize.CommonsChunkPlugin({name: "vendors", filename: "vendors.js"})
        ]//将依赖分离打包
}