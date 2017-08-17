/*逻辑可以分为(认证中|已经认证)！(未认证|驳回)*/



require('./more.css');

import { Upload, Icon, Modal, Button } from 'antd';

import  Uploads from './uploads.jsx';

/*引入数据流管理*/





class PicturesWall extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
  };
  componentDidMount(){
		/*点击上传图片然后签名*/
		$("#faceplusimg").click(function (){
			 setclp();
		});
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
		<p className="msg-error hy" >请您上传小于3M的图片!</p>
		<div className="faceplus" id="faceplusimg">
			<Icon type="plus" />
			<div className="pluswords">点击上传图片</div>
		</div>
        <Upload
          action="https://mso.oss-cn-shanghai.aliyuncs.com/"
          listType="picture-card"
          fileList={fileList}
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
		//(faceplusimg 如果这个页面有这个多个，需要多添加);
		/*获取图片路径*/
		this.getPath = this.getPath.bind(this);
	}
	/*验证状态*/
	///quality/enterpriseinfo/{jfuid}
	componentDidMount(){
		/*数据回填*/
		this.enterpriseinfo(function (data){
			if(!data)return;
			
			$('.realname').val(data.realname);
			$('.jfumobilephone').val(data.jfumobilephone.toString().replace(/\s/g,""));
			$('.compemail').val(data.compemail);
			$('.userqq').val(data.qq);
			$('.compwebsite').val(data.compwebsite);
			$('.brandname').val(data.brandname);
			
			this.setState({
				realname:data.realname,
				jfumobilephone:data.jfumobilephone,
				compemail:data.compemail,
				userqq:data.userqq,
				compwebsite:data.compwebsite,
				brandname:data.brandname,
				compimg:data.compimg,
			});
			if(this.state.compimg){
				$('#faceplusimg').html('');
				$('#faceplusimg').append('<img src="'+'https://res.mshuoke.com/' + this.state.compimg+'" />');
			}
	
		}.bind(this));
		this.pageTest();
		
		this.saveData();
		
		$('.close2').click(function (){
			$('.cover1').hide();
		});
		$('.close3').click(function (){
			$('.cover2').hide();
		});
		$('.cover2 .bg_blue').click(function (){
			$('.cover2').hide();
		});
	}
	saveData(){
		///quality/basicinfo
		var url = domain137 + '/quality/basicinfo';
	
		
		var _this = this;
		$('.saveData button').click(function (){
		
			if($("input.jfumobilephone").val().length!=11){
					$('.error.industry-one').show();
				return false;
			}
			/*
			邮箱验证
			*/
			var regMail =/^([a-zA-Z0-9_-]+|[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+)@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
			var okMail = regMail.test($("input.compemail").val().trim());
			if($("input.compemail").val()!=""){
				if(!okMail){
					$(".cover2").show();
					$(".cover2 .context").text("请输入正确的电子邮箱");
					return false;
				}
			}
			/*
			姓名
			*/
			var fitValue =  /[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g;
			var okValue = fitValue.test($("input.realname").val());
			if($("input.realname").val()!=""){
				if(okValue){
					$(".cover2").show();
					$(".cover2 .context").text("请输入正确的姓名");
					return false;
				}
			}
			/*
				qq验证
			*/
			var okValue2 = fitValue.test($("input.userqq").val());
			if($("input.userqq").val()!=""){
				if(okValue2){
					$(".cover2").show();
					$(".cover2 .context").text("请输入正确的qq号");
					return false;
				}
			}
			/*
				品牌名
			*/
			var okValue4 = fitValue.test($("input.brandname").val());
			if($("input.brandname").val()!=""){
				if(okValue4){
					$(".cover2").show();
					$(".cover2 .context").text("请输入正确的品牌名");
					return false;
				}
			}
			

			/*
				公司网址
			*/
			var fitValueNet = /<|>/;
			
			var okValue3 = fitValueNet.test($("input.compwebsite").val());
			if($("input.compwebsite").val()!=""){
				if(okValue3){
					$(".cover2").show();
					$(".cover2 .context").text("请输入正确的公司网址");
					return false;
				}
			}
			
			
			
			
			
			var imgSrc = "";
			if(!imgSrc){
				imgSrc = _this.state.getPath;
				if(!imgSrc){
					/*如果还没有就取原来的*/
					if($('.faceplus img')[0]){
						imgSrc = $('.faceplus img')[0].src.split('.com')[1];
					}
				}
			}
			//debugger;
			var data = JSON.stringify({
			  "jfumobilephone":$('.jfumobilephone').val(),
			  "compwebsite": $('.compwebsite').val(),
			  "brandname":$('.brandname').val(),
			  "compimg":imgSrc,
			  "jfuid": $.sessionStorage('jfuid'),
			  "compemail":$('.compemail').val(),
			  "realname": $('.realname').val(),
			  "qq":$('.userqq').val()
			});
			//return;
		//	debugger;
		
		//	if($('p.msg-error.hy:visible').length)return;
			$.when(
				$.ajax({
					type:'POST',
					url:url,
					contentType:'application/json',
					data:data
				}
			)).then(function (data){
				if(data.msg == "success"){
					$('.cover1').show();
				}
				//debugger;
			}).fail(function (data){
				//debugger;
			});
		});
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
					$('.error.industry-one').hide();
				}else{
					$('.error.industry-one').show();
				}
			}
		});
		$('.compemail').blur(function (){
			var mail  = $(this).val();
			$('.error.industry-two').hide()
			if(mail){
				//debugger;
				/*验证是否正确*/
				var reg =/^([a-zA-Z0-9_-]+|[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+)@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
				if(reg.test(mail)){
					$('.error.industry-two').hide();
				}else{
					$('.error.industry-two').show();
				}
			}
		});
	}

	enterpriseinfo(callBack){
		//debugger;
		
		var callBack = callBack || function (){};
		var url = domain137 + '/quality/basicinfo/'+$.sessionStorage('jfuid');
		//var url = 'http://192.168.2.45:20004' + '/basicinfo/'+$.sessionStorage('jfuid');
				
		$.when($.ajax({
			url:url,
			"dataType":"json",
			})).then(function (data){
			
			if(data.msg=="success"){
				callBack(data.data);
			}

		}).fail(function (data){
			//debugger;
			
		});
		
	}
	getPath(value){
		this.setState({
			getPath:value
		});
		//console.log(value);
	}
	render(){
		//
		return(
			<div>
				
				<span className="infoTitle">基本信息</span>
				<ul className="infoList">
					<li> 
						<div className="infoName">姓名：</div>
						 <input className="realname"   maxLength={50} type="text" /> 
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
						<input  maxLength={50} className="compemail" placeholder="请输入您的电子邮箱" type="text"/> 
						 <p className="error industry-two">
							请输入正确的电子邮箱
						 </p>
					</li>
					<li> 
						<div  className="infoName">QQ号：</div>
						<input  maxLength={50}  className="userqq"   placeholder="请输入QQ号" type="text"/> 
					</li>
					<li> 
						<div  className="infoName">公司网址：</div>
						<input  maxLength={50} className="compwebsite"    placeholder="请输入您的公司网址链接" type="text"/> 
					</li>
					<li> 
						<div  className="infoName">品牌名：</div>
						<input  maxLength={50}  className="brandname"  placeholder="请输入您的公司的品牌名，如眸事网" type="text"/> 
					</li>
					
					<li className="heightH"> 
						<div  className="infoName">公司图片：</div>
						
						
						<PicturesWall />
					
						
						<Uploads data={{
							formid:'postform',
							fileType:'application/x-www-form-urlencoded',
							fileId:'selectFile',
							fileName:'credentials',
							faceplusimg:'faceplusimg',
							getPath:this.getPath
						}}/>
						
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

ReactDOM.render(<Myinfo />,$('.context .right')[0]);


//jfustate	接包方/发包方-当前用户信息的状态 0-初始状态(注册未完善资料) 1-填写资料-提交 4-已审核 3-驳回
/*填写资料 已审核都不显示右面的input*/
/*驳回数据需要回填*/




