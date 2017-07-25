
import { Upload, Icon, Modal, Button } from 'antd';

  function uploadByForm(formid,host) { 
		//debugger;
	  /*模拟二进制流*/
	  var formData = new FormData($('#'+formid)[0]);
	// oMyForm.append("username", "Groucho");
	
	
	
	//debugger;
	
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

	var seting = setingpic(host,formData);
	seting.then(function (data){
		$('.msg-error.hy').hide();
		console.log('上传成功');
	});
	seting.fail(function (data){
		$('.msg-error.hy').show();
		$('.msg-error.hy').html('您上传失败请从新上传！');
		console.log(data,'上传失败');
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
		var resultSignature
		window.setclp = function (){
		  resultSignature =  JSON.parse(getSignature({fileName:_this.props.data.fileName}));
		 getsignDarren(resultSignature);
		//debugger;
		//console.log(_this.props.data.fileId);
		//debugger;
		  return  document.getElementById(_this.props.data.fileId).click();
		}

		window.getsignDarren = function (resultSignature){
			
			
			//debugger;
			$('#'+_this.props.data.fileId)[0].onchange = function (ev,value){
				
				var typeArr = ['image/jpeg','image/png','image/bmp'];
				var file = this.files[0];
				var flag = false;
				typeArr.map(function (data,index){
					if(file.type==data){
						flag = true;
					}
				});
				
				
				if(!flag){
					$('.msg-error.hy').show();
					$('.msg-error.hy').html('请您上传,jpg,jpeg,png,bmp格式的图片!');
					return;
				}
				
			
				if((file.size/1024) > 3072){
					$('.msg-error.hy').show();
					$('.msg-error.hy').html('请您上传小于3M的图片!');
					return;
				}else{
					$('.msg-error.hy').hide();
				}
				
				
				
				_this.setState({
					host:resultSignature.host,
					saveFileder:resultSignature.dir,
					OSSAccessKeyId:resultSignature.accessid,
					policy:resultSignature.policy,
					signature:resultSignature.signature,
				});
				//debugger;
				/*计算getpath*/
				_this.props.data.getPath(resultSignature.dir+file.name);
		 
				var readerd = new FileReader();
				readerd.readAsDataURL(file);
			
				readerd.onload = function (e) {
					$('#'+_this.props.data.faceplusimg).html('');
					$('#'+_this.props.data.faceplusimg).append('<img src="'+this.result+'"/>');
				}
				uploadByForm(_this.props.data.formid,_this.state.host);
				/*模拟自动上传*/
				
			};
			
			
			
		}
		
	}
	render(){
		return(
			<form id={ this.props.data.formid } style={{'display':'none'}} action={ this.state.host } method="post" enctype="multipart/form-data" >
				<div>
					<span>文件路径</span>
					<input className="idkey" type="text" name="key" value={this.state.saveFileder+'${filename}'} />
					<span>文件类型</span>
					<input className="idContent-Type" type="text" name="Content-Type" value={this.state.fileType} />
					<span>OSSAccessKeyId</span>
					<input className="idOSSAccessKeyId" type="text" name="OSSAccessKeyId" value={ this.state.OSSAccessKeyId } />
					<span>policy</span>
					<input className="idpolicy" type="text" name="policy" value={this.state.policy} />
					
					<input className="status" type="text" name="success_action_status" value="200" />
					

					<span>Signature</span>
					<input className="idSignature" type="text" name="Signature" value={this.state.signature} />
					
					<input style={{'display':'none'}} accept="image/jpeg,image/png,image/bmp" name="file" type="file"   id={this.props.data.fileId} />
					<div role="button"  id = "darren">上传</div>
					
				</div>
			</form>

		);
	}
}

export default Uploads;

// [formid,saveFileder,fileType,OSSAccessKeyId,policy,fileId,signature,host]
//image/gif,image/jpeg,image/jpg,image/png,image/svg








