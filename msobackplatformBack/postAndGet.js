
var Public = require('./public').public;
exports.PostAndGet = function(request,response) {
    if(request.method=="GET"){
			
		
	}else{
		Public.log('POSTPOSTPOSTPOST');
		/*�õ�ǰ�ε�����*/
		var postdata = '';
		request.addListener('data',function (data){
			postdata += data.toString();
			Public.log(postdata);
			console.log('datadatadatadatadatadatadata');
		});
		request.addListener("end",function(){
			 /*Ҳ�����ֶ�����*/
			var params = Public.query.parse(postdata);
			Public.log(params);
			//�õ����ݿ��Ը������ݵľ��巵�����ݣ���ѯ���ݿ��
			Public.log('paramsparamsparamsparamsparams');
			/*(1)�Զ�������*/
			//response.write(JSON.stringify({name:'darren',age:25,subling:3}));
			console.log('jsonDatajsonDatajsonDatajsonData');
			/*(2)��ȡ����*/
			//var newData = fs.readFileSync('json.txt','utf-8');
			var newData = Public.fs.readFileSync('json.txt','utf-8'); 
			response.write(newData);
			Public.log(newData);
			response.end();
		 });
	}
};