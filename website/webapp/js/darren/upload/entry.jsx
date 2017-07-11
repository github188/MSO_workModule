/*逻辑可以分为(认证中|已经认证)！(未认证|驳回)*/



require('./more.css');
import { Upload, Icon, Modal ,Button,message} from 'antd';

class PicturesWall extends React.Component {
	constructor(props) {
		super(props);
		  this.state = {
			previewVisible: false,
			previewImage: '',
			key:'',
			action:'',
			policy:'',
			OSSAccessKeyId:'',
			Signature:''
		  };
		  this.beforeUpload = this.beforeUpload.bind(this);
	}


  handleCancel(){
	  this.setState({ previewVisible: false });
  }
  onPreview(){
	//debugger;
  }
  beforeUpload(value){
	  
		var signture = JSON.parse(getSignature({fileName:'credentials'}));
		
		this.setState({
			key:signture.dir+'${filename}',
			action:signture.host,
			policy:signture.policy,
			OSSAccessKeyId:signture.accessid,
			Signature:signture.signature,
		});
  }
 change(ev){

	  console.log(ev);
	// $('.ant-upload.ant-upload-select.ant-upload-select-picture-card').hide();
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
          action={this.state.action}
		  showUploadList={true}
          listType="picture-card"
		  beforeUpload = { this.beforeUpload}
		//  onChange = {this.change}
		   onChange = {this.change}
		  data={{
		  'key':this.state.key,
		  OSSAccessKeyId:this.state.OSSAccessKeyId,
		  'policy':this.state.policy,
		  'Signature':this.state.Signature
		}}
        >
         {uploadButton}
        </Upload>
        <Modal  visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
		{React.DOM.option([12233,22333])}
      </div>
    );
  }
}




/*
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}


class PicturesWall extends React.Component {
  state = {
	//previewVisible: false,
	previewImage: '',
	key:'',
	action:'',
	policy:'',
	OSSAccessKeyId:'',
	Signature:''
  };

  handleChange = (info) => {
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({ imageUrl }));
    }
  }
  beforeUpload=(file) =>{
	var signture = JSON.parse(getSignature({fileName:'credentials'}));
	
	this.setState({
		key:signture.dir+'${filename}',
		action:signture.host,
		policy:signture.policy,
		OSSAccessKeyId:signture.accessid,
		Signature:signture.signature,
	});
	
	
	  const isJPG = file.type === 'image/jpeg';
	  if (!isJPG) {
		message.error('You can only upload JPG file!');
	  }
	  const isLt2M = file.size / 1024 / 1024 < 2;
	  if (!isLt2M) {
		message.error('Image must smaller than 2MB!');
	  }
	  return isJPG && isLt2M;
  }

  render() {
    const imageUrl = this.state.imageUrl;
    return (
      <Upload
        className="avatar-uploader"
        name="avatar"
		data={{
		  'key':this.state.key,
		  OSSAccessKeyId:this.state.OSSAccessKeyId,
		  'policy':this.state.policy,
		  'Signature':this.state.Signature
		}}
        showUploadList={false}
        action={this.state.action}
		accept = {'.png,.jpg'}
        beforeUpload={this.beforeUpload}
        onChange={this.handleChange}
      >
        {
          imageUrl ?
            <img src={imageUrl} alt="" className="avatar" /> :
            <Icon type="plus" className="avatar-uploader-trigger" />
        }
      </Upload>
    );
  }
}
*/



class Myinfo extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			getPath:'',
			realname:'',
			jfumobilephone:'',
			compemail:'',
			userqq:'',
			compwebsite:'',
			brandname:'',
			compimg:'',
		}

	}


	render(){
		//
		return(
			<div>
				
				<span className="infoTitle">基本信息</span>
				<ul className="infoList">
					<li> 
						<div className="infoName">姓名：</div>
						 <input className="realname"  type="text" /> 
					</li>
					
					<li> 
						<div  className="infoName">手机号：</div>
						 <input className="phone-num jfumobilephone"  maxLength={11} placeholder="请输入您的手机号" type="text"/> 
						 <p className="error industry-one">
							请输入正确的手机号
						 </p>
					</li>
					<li> 
						<div  className="infoName">电子邮箱：</div>
						<input className="compemail" placeholder="请输入您的电子邮箱"   type="text"/> 
					</li>
					<li> 
						<div  className="infoName">QQ号：</div>
						<input className="userqq"   placeholder="请输入QQ号" type="text"/> 
					</li>
					<li> 
						<div  className="infoName">公司网址：</div>
						<input className="compwebsite"    placeholder="请输入您的公司网址链接" type="text"/> 
					</li>
					<li> 
						<div  className="infoName">品牌名：</div>
						<input className="brandname"  placeholder="请输入您的公司的品牌名，如眸事网" type="text"/> 
					</li>
					
					<li className="heightH"> 
						<div  className="infoName">公司图片11：</div>
						
						
						<PicturesWall />
					</li>
					<li className="saveData">
						<Button>
						保存
						</Button>
					</li>
				</ul>
			</div>
		);
	}
}


/*使用upload样式 + 加用改造的ulploads组件*/
//postform表单id
//fileType 文件需要的类型
//fileId 选择文件的id
//上传到服务器的fileName文件名
//faceplusimg 图片id

/*优化页面的加载进度*/
import AsideBar from '../../../html/js/asideBar.js';
import Headercustomer from '../../../html/js/header-customer.js';
import leftMenu from '../../../html/js/customer/leftMenu.js';
import Footer  from '../../../html/js/footer.js';

//debugger;
ReactDOM.render(<Myinfo />,$('.context .right')[0]);


//jfustate	接包方/发包方-当前用户信息的状态 0-初始状态(注册未完善资料) 1-填写资料-提交 4-已审核 3-驳回
/*填写资料 已审核都不显示右面的input*/
/*驳回数据需要回填*/











