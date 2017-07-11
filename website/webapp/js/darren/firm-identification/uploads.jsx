
import { Upload, Icon, Modal, Button } from 'antd';

  function uploadByForm(currentIdEle,host) {
	  /*模拟二进制流*/
	  var formData = new FormData(currentIdEle.find('form')[0]);
	// oMyForm.append("username", "Groucho");
	  var url = "https://mso.oss-cn-shanghai.aliyuncs.com"; 

	function setingpic(host,formData){
		return $.when(
			$.ajax({  
				url : host,  
				type : 'POST',  
				data : formData,  
				processData : false,  
				contentType : false,  
			})
		)
	}
	//debugger;
	var seting = setingpic(host,formData);
	
	seting.then(function (data){
		$('.msg-error.hy').removeClass('fail');
		$('.msg-error.hy').hide();
		//console.log('上传成功');
	});
	
	seting.fail(function (data){
		currentIdEle.find('.msg-error.hy').show();
		currentIdEle.find('.msg-error.hy').addClass('fail');
		currentIdEle.find('.msg-error.hy').html('您上传失败请从新上传！');
		//currentIdEle.find('div.faceplus').html(`<i className="anticon anticon-plus" ></i><div className="pluswords">点击上传图片</div>`);
		//debugger;
		//console.log(data,'上传失败');
	});
		
 }  




class Uploads extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			host:'',
			formid:props.data.formid,
			fileType:props.fileType,
			fileId:props.fileId,
			saveFileder:'',
			OSSAccessKeyId:'',
			policy:'',
			signature:'',
		}
	
	}
	componentDidMount(){
		var _this = this;
		var resultSignature;
		var  currentIdEle;
		window.setclp = function (currentIdEle){
			resultSignature =  JSON.parse(getSignature({fileName:_this.props.data.fileName}));
			
			
		
			changeFileid(currentIdEle,resultSignature);
		    return currentIdEle.find('input.fileId').click();
		}

		window.getsignDarren = function (currentIdEle,resultSignature){
			
			currentIdEle.find('form')[0].action = resultSignature.host;
			currentIdEle.find('.saveFileder').val(resultSignature.dir+'${filename}');
			currentIdEle.find('.idpolicy').val(resultSignature.policy);
			currentIdEle.find('.idOSSAccessKeyId').val(resultSignature.accessid);
			currentIdEle.find('.idSignature').val(resultSignature.signature);
			
		}
		
		
		function changeFileid(currentIdEle,resultSignature){
			currentIdEle.find('input.fileId')[0].onchange = function (ev,value){

				var typeArr = ['image/jpeg','image/png','image/bmp'];
				var file = this.files[0];
				var flag = false;
				
				typeArr.map(function (data,index){
					if(file.type==data){
						flag = true;
					}
				});
				
				if(!flag){
					currentIdEle.find('.msg-error.hy').show();
					currentIdEle.find('.msg-error.hy').html('请您上传,jpg,jpeg,png,bmp格式的图片!');
					return;
				}
				/*计算getpath*/
				//debugger;
				
				if((file.size/1024)>3072){
					//debugger;
					currentIdEle.find('.msg-error.hy').show();
					currentIdEle.find('.msg-error.hy').removeClass('fail');
					currentIdEle.find('.msg-error.hy').html('请您上传小于3M的图片');
					return;
				}else{
					currentIdEle.find('.msg-error.hy').hide();
				}
				
				
				
				
				getsignDarren(currentIdEle,resultSignature);
				
				
				_this.props.data.getPath(resultSignature.dir+file.name);
			
				//判断是否是图片类型
				//if (!/image\/\w+/.test(file.type)) {
					//  alert("只能选择图片");
				// return false;
				// }
		  
			
				var readerd = new FileReader();
				readerd.readAsDataURL(file);
				readerd.onload = function (e) {
					currentIdEle.find('div.faceplus').html('');
					currentIdEle.find('div.faceplus').append('<img src="'+this.result+'"/>');
				}
				//debugger;
				uploadByForm(currentIdEle,currentIdEle.find('form')[0].action);
				/*模拟自动上传*/
			
			};
		}
		

		
	}
	render(){
		return(
			<form id={ this.props.data.formid } style={{'display':'none'}} action={ this.state.host } method="post" enctype="multipart/form-data" >
				<div>
					<span>文件路径</span>
					<input className="idkey saveFileder" type="text" name="key"  />
					<span>文件类型</span>
					<input className="idContent-Type" type="text" name="Content-Type"  />
					<span>OSSAccessKeyId</span>
					<input className="idOSSAccessKeyId" type="text" name="OSSAccessKeyId"  />
					<span>policy</span>
					<input className="idpolicy" type="text" name="policy"  />

					<span>Signature</span>
					<input className="idSignature" type="text" name="Signature"  />
					
					<input style={{'display':'none'}} className="fileId" accept="image/bmp,image/jpeg,image/png" name="file" type="file"   id={this.props.data.fileId} />
					<div role="button"  id = "darren">上传</div>
					
				</div>
			</form>

		);
	}
}

export default Uploads;

// [formid,saveFileder,fileType,OSSAccessKeyId,policy,fileId,signature,host]
//image/gif,image/jpeg,image/jpg,image/png,image/svg








