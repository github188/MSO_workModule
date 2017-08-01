
require("./myinfo.css");

import Avatar from './upload.jsx';


/*统一使用公共模块*/
class Main extends React.Component{
	constructor(props) {
		super(props);
		this.state = {}
		this.init();
	}
	init(){
		
	}
	componentDidMount(){
		jQuery(function(){
			//手机验证
			var mobile = $.trim($("input.contactTel").val());
			var isMobile = /^1\d{10}$/; 
			$("input.contactTel").blur(function(){
				var MobileOk = isMobile.test($(this).val());
				if($.trim($(this).val()) != ''){
					if(!MobileOk){
						$(this).addClass("error");
						$(this).next().show().text(请填写正确的手机号码);
					}
				}
			});
			$("input.contactTel").focus(function(){
				$(this).removeClass("error_red");
				$(this).next().hide();
			});
		});
	}

	render(){
		return (
			<Avatar />);
	}
}
ReactDOM.render(<Main />,$(".upload_img")[0]);
