var Public = require('./public').public;
var server = new Public.http.Server();	
var port = 9090;
server.listen(port,'localhost');

var postAndGet = require('./postAndGet.js');


//监听请求；
server.on('request',function (request,response){
	Public.log(request.url);
	Public.log('urlurlurlurlurlurl');
	
	/*(1)接口请求*/
	var route = {
		'user': '/user',
		'login': '/user/login',
		'usercenter': '/usercenter'
	};
	/*检查路径*/
	var isValid = function (reqPath) {
		for (var key in route) {
			if (route[key] == reqPath) {
				return true;
			}
		}
		return false;
	};

	if(isValid(request.url)){
		//判断什么方法
		postAndGet.PostAndGet(request,response);
		
	}else{
		/*(2)html,css,js普通文件请求*/
		var filename = null;
		//解析过来的url；
		var fileUrl = Public.url.parse(request.url);
		var rootPath = fileUrl.pathname;
		if(rootPath){
			if((rootPath == '/') || (rootPath =='/index.html')){
				 //初始化index.html
				 filename = 'index.html';
			}
			//不需要 / 所以去掉
			filename = filename || fileUrl.pathname.substring(1);  // 去掉前导'/'
			//判断类型
			//如果第一个不写return 会自动找第二个;
			var type = (function (_type){
				switch(_type){
					case 'html':
					case 'htm': return 'text/html; charset=utf-8';
					case 'js': return 'application/javascript; charset=utf-8';
					case 'css': return 'text/css; charset=UTF-8';
					case 'txt': return 'text/plain; charset=UTF-8';
					case 'manifest': return 'text/cache-manifest; charset=utf-8';
					default: return 'application/octet-stream';
					//默认是下载
				}
			})(filename.substring(filename.lastIndexOf('.')+1));
			//找出文件类型；
			
			//读取文件；两个参数；
			//一个是文件， 一个是fn fn回调两个参数 一个参数 err ，一个读取的内容
			Public.log('================')
			//转base64
			Public.log(new Buffer(filename).toString('base64'));
			
			Public.log('================')
			Public.fs.readFile(filename,function (err,content){
				if(err){
					response.writeHead(404, {'Content-type' : 'text/plain; charset=utf-8'});
					response.write(err.message);
				}else{
					Public.log(type);
					response.writeHead(
					200, 
					{
						'Content-type' : type ,
						"Access-Control-Allow-Origin":'*',
						"Access-Control-Allow-Methods":'GET, PUT, POST, DELETE, HEAD, OPTIONS',
					});
					response.write(content)
				}
				response.end();
			});
		}
	}
});

//建立服务：
//监听请求；
//找出请求文件的名字 并规定index.html;
//通过文件类型规定头部参数 type 类型
//最后读取文件并且把请求到的内容输出，然后结束相应；



