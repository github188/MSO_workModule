
var Public = require('./public').public;
exports.PostAndGet = function(request,response) {
    if(request.method=="GET"){
			
		
	}else{
		Public.log('POSTPOSTPOSTPOST');
		/*拿到前段的数据*/
		var postdata = '';
		request.addListener('data',function (data){
			postdata += data.toString();
			Public.log(postdata);
			console.log('datadatadatadatadatadatadata');
		});
		request.addListener("end",function(){
			 /*也可以手动解析*/
			var params = Public.query.parse(postdata);
			Public.log(params);
			//拿到数据可以根据数据的具体返回数据，查询数据库等
			Public.log('paramsparamsparamsparamsparams');
			/*(1)自定义数据*/
			//response.write(JSON.stringify({name:'darren',age:25,subling:3}));
			console.log('jsonDatajsonDatajsonDatajsonData');
			/*(2)读取数据*/
			//var newData = fs.readFileSync('json.txt','utf-8');
			var newData = Public.fs.readFileSync('json.txt','utf-8'); 
			response.write(newData);
			Public.log(newData);
			response.end();
		 });
	}
};