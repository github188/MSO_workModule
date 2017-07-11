var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config = require("./webpack.config.js");
var compiler = webpack(config);
var port = "8090";
var hosts = "127.0.0.1";


/*把配置放入这个插件处理*/
var server = new WebpackDevServer(compiler, {
	//热加载
	hot:true,
	//热加载必须的 inline
	inline:true,
	quiet: false,
    compress: false,
    historyApiFallback: true,
	/*
	proxy: {
		"**": "http://localhost:9090"
	},
	*/
    stats: {
        // Config for minimal console.log mess.
        assets: true,
        colors: true,
        version: false,
        hash: true,
        timings: true,
        chunks: false,
        chunkModules: true
    }

});


server.listen(port);