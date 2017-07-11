/*逻辑可以分为(认证中|已经认证)！(未认证|驳回)*/

require('./more.css');

import { Upload, Icon, Modal, Button } from 'antd';

import  Uploads from './uploads.jsx';

/*引入数据流管理*/
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';

var appState = observable({
	host:'',
	formid:'postform',
	fileType:'application/x-www-form-urlencoded',
	fileId:'selectFile',
	saveFileder:'',
	OSSAccessKeyId:'',
	policy:'',
	signature:'',
	fileValue:'',
	
});







/*统一使用公共模块*/

@observer
class PicturesWall extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
  };
  customRequest(value){
	 // debugger;
	 var resultSignature =  JSON.parse(getSignature({fileName:'credentials'}));
	 appState.resetTimer = action(function() {
		appState.host = resultSignature.host;
		appState.saveFileder = resultSignature.dir;
		appState.OSSAccessKeyId = resultSignature.accessid;
		appState.policy = resultSignature.policy;
		appState.signature = resultSignature.signature;
		//appState.fileValue = value.file.name;
	});
	appState.resetTimer();
	//debugger;
	/*设置文件文件的value*/
	//$('#selectFile').val(value.file.name);

	//$('#postform .submitUp').click();
 }
 handleChange = (info) => {
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({ imageUrl }));
    }
  }

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          action="https://mso.oss-cn-shanghai.aliyuncs.com/"
          listType="picture-card"
          fileList={fileList}
		onChange={this.handleChange}
		// customRequest = {this.customRequest}
		  accept={'.png,.jpg,.bmp,.jpeg,.gif'}
        >
          {fileList.length >= 3 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} >
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

//debugger;


@observer
class Myinfo extends React.Component{
	constructor(props) {
		super(props);
		
		/*初始化数据*/
		
	}
	/*验证状态*/
	///quality/enterpriseinfo/{jfuid}
	componentDidMount(){
		this.enterpriseinfo(function (data){
			//debugger;
			if(data.jfustate==0){
				/*新用户不做任何处理*/
			}
			
		});
		this.pageTest();
	}
	pageTest(){
		$('.phone-num').blur(function (){
			var phoneValue  = $(this).val();
			$('.error.industry-one').hide()
			if(phoneValue){
				//debugger;
				/*验证是否正确*/
				var reg = /^1\d{10}/;
				if(reg.test(phoneValue)){
					$('.error.industry-one').hide()
				}else{
					$('.error.industry-one').show();
				}
			}
		});
	}
	enterpriseinfo(callBack){
		var callBack = callBack || function (){};
		var url = domain137 + '/quality/enterpriseinfo/30';
		/*
		Mock.mock(url,{
			"jfustate":0,
			"jfudisable":1,
			"jfuname":"zhangsan",
			"approveremark":"",
			"jfutype":"1",
			"jfuid":"30",
			"brandname":"",
			"compaddr":"",
			"compwebsite":"",
			"compimg":"images/customer/photo.png",
			"contacts":"",
			"contactsphone":"",
			"compemail":"",
			"complicense":"images/customer/photo.png",
			"comptaxcer":"images/customer/photo.png",
			"comporgcode":"images/customer/photo.png",
			"code":"Y",
			"msg":"获取数据成功"
		});
		*/
		$.when($.ajax(
			url:url,
			"dataType":"json",
		)).then(function (data){
			if(typeof data == 'string'){
				callBack(JSON.parse(data));
			}else{
				callBack(data);
			}
			
			//debugger;
		}).fail(function (data){
			
			
		});
		
	}
	render(){
		return(
			<div>
				<span className="infoTitle">基本信息</span>
				<ul className="infoList">
					<li> 
						<div className="infoName">姓名：</div>
						 <input type="text" /> 
					</li>
					
					<li> 
						<div  className="infoName">手机号：</div>
						 <input className="phone-num" maxLength={11} placeholder="请输入您的手机号" type="text"/> 
						 <p className="error industry-one">
							请输入正确的手机号
						 </p>
					</li>
					<li> 
						<div  className="infoName">电子邮箱：</div>
						<input placeholder="请输入您的电子邮箱" type="text"/> 
					</li>
					<li> 
						<div  className="infoName">QQ号：</div>
						<input placeholder="请输入QQ号" type="text"/> 
					</li>
					<li> 
						<div  className="infoName">公司网址：</div>
						<input placeholder="请输入您的公司网址链接" type="text"/> 
					</li>
					<li> 
						<div  className="infoName">品牌名：</div>
						<input placeholder="请输入您的公司的品牌名，如眸事网" type="text"/> 
					</li>
					
					<li> 
						<PicturesWall />
						<Uploads data={{
						fileValue:appState.fileValue,
						host:appState.host,
						formid:appState.formid,
						fileType:appState.fileType,
						fileId:appState.fileId,
						saveFileder:appState.saveFileder,
						OSSAccessKeyId:appState.OSSAccessKeyId,
						policy:appState.policy,
						signature:appState.signature,
					}}/>
						<div  className="infoName">公司图片：</div>
						<div className="uploadPhoto">
							<div className="upload_img">
								<p className="file-list gszpEdit"><img src="images/customer/gszp.png" /></p>
								<div className="ossfile"></div>
								<div className="container">
									<button type="button" id="selectfiles">选择文件</button>
									<button type="button" id="postfiles">开始上传</button>
								</div>
							</div>
							<p className="msg"></p>
						</div>
					</li>
				</ul>
			</div>
		);
	}
}






/*优化页面的加载进度*/
import AsideBar from '../../../html/js/asideBar.js';
import Headercustomer from '../../../html/js/header-customer.js';
import leftMenu from '../../../html/js/customer/leftMenu.js';
import Footer  from '../../../html/js/footer.js';

ReactDOM.render(<Myinfo />,$('.context .right')[0]);


//jfustate	接包方/发包方-当前用户信息的状态 0-初始状态(注册未完善资料) 1-填写资料-提交 4-已审核 3-驳回
/*填写资料 已审核都不显示右面的input*/
/*驳回数据需要回填*/




