class LeftMenu extends React.Component{
	constructor(props) {
		super(props);
	}
	componentDidMount(){
		var urlLink="";
        var urlPath = window.location.pathname;
        var index = urlPath.lastIndexOf("\/");
        urlPath  = urlPath.substring(index + 1, urlPath.length);
        //console.log(urlPath);
        $(".sub-account .context .left li a").each(function(){
            var urlLink = $(this).attr('href');
               console.log(urlLink);
               if(urlLink==urlPath){
                   $(this).addClass("selected").siblings().removeClass("selected");
				   return false;
               }
        });
        $(".sub-account .context .left li a.selected").parent().prev().addClass("bg-none").siblings().removeClass("bg-none");
	}
	render(){
		return(
			<div className="aside_bar">
				<ul>
					<li><a href="customerMyInfo.html">基本信息</a></li>
					<li><a href="customerMyInfo.html">企业认证</a></li>
					<li><a href="avatar_settings.html">头像设置</a></li>
					<li><a href="updatePassword.html">修改密码</a></li>
				</ul>
			</div>
        )
	}
}

export default LeftMenu;
