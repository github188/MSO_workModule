var Menu = React.createClass({
    componentDidMount:function(){
        var urlLink="";
        var urlPath = window.location.pathname;
        var index = urlPath.lastIndexOf("\/");
        urlPath  = urlPath.substring(index + 1, urlPath.length);
        console.log(urlPath);
        $(".sub-account .context .left li a").each(function(){
            var urlLink = $(this).attr('href');
               console.log(urlLink);
               if(urlLink==urlPath){
                   $(this).addClass("selected").siblings().removeClass("selected");
				   return false;
               }
        });
        $(".sub-account .context .left li a.selected").parent().prev().addClass("bg-none").siblings().removeClass("bg-none");
    },
    render:function(){
        return(
            <ul>
                <li><a href="PerfectData.html">我的信息</a></li>
                <li><a href="avatar_settings.html">头像设置</a></li>
                <li><a href="updatePassword.html">修改密码</a></li>
                <li><a href="subAccount.html">子账号管理</a></li>
            </ul>
        );
    }
});

ReactDOM.render(<Menu />,$(".sub-account .left")[0]);
