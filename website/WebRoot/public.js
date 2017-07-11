var http = require('http');
var fs = require('fs');		
var util = require('util');
var url = require('url');
//解析get请求
var query = require('querystring');
//解析post请求
var log = util.log; 
var path = require('path');
exports.public = {
	http:http,
	fs:fs,
	util:util,
	url:url,
	query:query,
	log:log,
	path:path
}

	