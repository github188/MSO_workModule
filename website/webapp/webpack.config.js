/*配置多个js文件用手动引入 11111111111*/
var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
/*HtmlWebpackPlugin*/
/*可以打包出多个html
 title:'admin', 
 filename: 'main/admin.html' || filename: 'admin.html' 
*/


/*把文件夹移动到别的路径*/
var CopyWebpackPlugin = require('copy-webpack-plugin');
//其他节点省略    
/*plugins: [
    //把指定文件夹下的文件复制到指定的目录
    new TransferWebpackPlugin([
      {from: 'www'}
    ], path.resolve(__dirname,"src"))
  ]
  */

/*读取所有的html*/
var glob = require('glob');
function getEntry(globPath, pathDir) {
    var files = glob.sync(globPath);
    var entries = {},
        entry, dirname, basename, pathname, extname;
    for (var i = 0; i < files.length; i++) {
        entry = files[i];
        dirname = path.dirname(entry);
        extname = path.extname(entry);
        basename = path.basename(entry, extname);
        pathname = path.join(dirname, basename);
        pathname = pathDir ? pathname.replace(pathDir, '') : pathname;
        console.log(2, pathname, entry);
		/*可以在这里添加路径 ./ + entry */
        entries[pathname] = entry;
    }
    return entries;
}
//dirname 在什么文件夹下面
//extname /文件后缀名/
//basename /文件名/
//var htmls = getEntry('webapp/html/**/*.html', 'webapp/html//');
var htmls = {};
/*获取一级目录的html文件*/
/*如果需要增加一级目录请在这里配置*/
htmls.index = 'index.html';
htmls.about = 'about.html';
htmls.help = 'help.html';
htmls.production = 'production.html';
//htmls['index-s'] = 'index-s.html';
//	debugger;

//debugger;
var ArrHtmlWebpackPlugin = [];

for(var name in htmls){
	/*把抓取到的页面添加到 HtmlWebpackPlugin 插件中并且 分成多个*/
	/*path.sep 系统兼容的 分隔符号 / */
	var fileArr = name.split(path.sep);

	//双斜杠在这里代表单斜杠
	var htmlFileName =  fileArr[fileArr.length-1];
	ArrHtmlWebpackPlugin.push(new HtmlWebpackPlugin({
		 filename:htmls[name],
		 template:'./'+htmls[name],
		 inject:false
	}));
	//inject false 不允许自动加入css js 等文件
	//template表示使用自己的模板
}



/*读取所有的入口文件*/
var arrEntryJsx = getEntry("js/**/entry.jsx",'js//');

/*{
'js\darren\index\entry':"js/darren/index/entry.jsx"
'js\ina\joined-policy\entry':"js/ina/joined-policy/entry.jsx"
}
*/
var EntryJsx = {};
for(var name in arrEntryJsx){
	var jsxUrlarr =  name.split(path.sep);
	EntryJsx[jsxUrlarr[jsxUrlarr.length-2]] = __dirname+"/"+arrEntryJsx[name];
}

/*{index:"g:\webpack/js/darren/index/entry.jsx"
joined-policy:"g:\webpack/js/ina/joined-policy/entry.jsx"
}*/



/*添加移动文件*/


/*plugins: [
    //把指定文件夹下的文件复制到指定的目录
    new TransferWebpackPlugin([
      {from: 'www'}
    ], path.resolve(__dirname,"src"))
  ]
  */
  
/*http://blog.csdn.net/zaichuanguanshui/article/details/53611379  CopyWebpackPlugin*/

//to	定义要烤盘膛的目标目录	from: __dirname + ‘/dist’
  ArrHtmlWebpackPlugin.push( 
	  new CopyWebpackPlugin([{from: __dirname + '/public',to:__dirname + '/WebRoot/public'}])
  );
  ArrHtmlWebpackPlugin.push( 
	  new CopyWebpackPlugin([{from: __dirname + '/images',to:__dirname + '/WebRoot/images'}])
  );
  
  ArrHtmlWebpackPlugin.push( 
	  new CopyWebpackPlugin([{from: __dirname + '/html',to:__dirname + '/WebRoot/html'}])
  );
  
  //不压缩打包 
   ArrHtmlWebpackPlugin.push(
 	 new webpack.optimize.UglifyJsPlugin({
 		 
		output: {
 			comments:true,
 		},
 		compress: {
 			warnings:false,
			drop_debugger: true, //去除debugger
			drop_console: true   //去除console.log();
 		}
 	})
 );

 
 

//iReturnCode();

var config = {
	 entry:EntryJsx,
	 output:{
		 path:__dirname+"/WebRoot",
		 filename:"[name].bundle.js"
	 },
	 /*模块加载*/
	 module:{
		 loaders:[
			{
                test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel',
            },
				{
               test: /\.css$/,
			  // exclude: /node_modules/,
               loader: 'style!css'
            },
			{
               test: /\.less$/,
			   //exclude: /node_modules/,
               loader: 'style!css!less'
            },
			{
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
				loader: 'file-loader?limit=8192&name=images'
			    //loader: 'file-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            }
		],
	 },
	 externals: {
        'react': 'window.React'
     },
	 plugins:ArrHtmlWebpackPlugin
     /*babel:{
		// 有了这个可以不用browser.js,加载速度会快很多
		// presets: ['es2015', 'react'],
        compact: false
     }*/
};

/*处理线上坏境*/
/*if(process.env.NODE_ENV === "production") {
	
	config.resolve = {
        modulesDirectories: ["/root/common_modules/node_modules"]
    };
	
	config.resolveLoader = {
		root: '/root/common_modules/node_modules'
    };
	
}*/

module.exports = config;


