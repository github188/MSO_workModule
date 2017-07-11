jQuery(function(){
		//用户账户
		var oUser = /^[a-zA-Z0-9]{1,}$/;
		var oFirstletter = /^[a-zA-Z]{1}/;
		$("input.accountName").blur(function(){
			if($(this).val() == ''){
                $(this).addClass("error");
                $(this).next().html("请输入用户账号");
                $(this).next().addClass("msg_error");
            }else if($(this).val().length<8){
                $(this).addClass("error_red");
                $(this).next().text("请输入8个以上的字符");
            }else if(!$(this).val().match(oFirstletter)){
            	$(this).next().text("第一个字符必须为字母");
            }else if(!$(this).val().match(oUser)){
            	$(this).next().text("只能输入字母与数字且必须是以字母开头");
            }else{
                $(this).removeClass("error_red");
                $(this).next().text("");
            }
		});
		$("input.accountName").focus(function(){
            $(this).removeClass("error");
            $(this).next().removeClass("msg_error");
        });
		//密码验证
        $("input.loginPsd, input.loginPsd1").blur(function(){
            if($(this).val() == ''){
                $(this).addClass("error");
                $(this).next().html("请输入原始密码");
                $(this).next().addClass("msg_error");
            }else if($(this).val().length<6){
                $(this).addClass("error");
                $(this).next().html("请输入6~20位密码");
                $(this).next().addClass("msg_error");
            }else if($(this).val().length>20){
                $(this).addClass("error");
                $(this).next().html("请输入6~20位密码");
                $(this).next().addClass("msg_error");
            }else{
                $(this).removeClass("error");
                $(this).next().html("");
                $(this).next().removeClass("msg_error");
            }
        });
        $("input.loginPsd, input.loginPsd1").focus(function(){
            $(this).removeClass("error");
            $(this).next().removeClass("msg_error");
        });
        //确认新密码
        $("input.loginPsd1").blur(function(){
        	if($("input.loginPsd1").val() != $("input.loginPsd").val()){
        		$(this).addClass("error");
	        	$(this).next().html("请确保两次密码一致");
	        	$(this).next().addClass("msg_error");
	        }else{
	        	$(this).removeClass("error");
	        	$(this).next().html("");
	        	$(this).next().removeClass("msg_error");
	        }
        });
        $(".btn_submit").click(function(){
            addAccount();
        });
	});
	function addAccount(){
		 var subAccount={
            "jfutype":3,  //1-发包方   2-接包方 3-子账号
            "jfuname":$("input.accountName").val(),//用户名/昵称-用于登录(3-20 位    不区分大小写)
            "jfupassword":$("input.loginPsd").val(),//密码(密文)用于登录(6-20 位    区分大小写)
            "jfudisable":$("input[name=jfudisable]:checked").is("#input1")?"1":"2"//1-启用  2-停用
        };
		$.post("user_toRegoster",subAccount,function(date){
			if(date.code=="Y"){
				alert("新增成功！");
				window.location="subAccount.html";
			}else{
				alert(date.msg);
			}
		});
	}

var NewAccount = React.createClass({
    render:function(){
        return(
            <div>
                <ul>
                    <li>
                        <label><span className="required">*</span> 用户账号：</label>
                        <input type="text" className="accountName" />
                        <span></span>
                    </li>
                    <li>
                        <label><span className="required">*</span> 登录密码：</label>
                        <input type="password" className="loginPsd" />
                        <span></span>
                    </li>
                    <li>
                        <label><span className="required">*</span> 确认密码：</label>
                        <input type="password" className="loginPsd1" />
                        <span></span>
                    </li>
                    <li>
                        <label><span className="required">*</span> 用户状态：</label>
      	    						<input type="radio" name="jfudisable" id="input1" defaultChecked className="qy" /><label htmlFor="input1">启用</label>
      	    						<input type="radio" name="jfudisable" id="input2" className="ty" /><label htmlFor="input2">停用</label>
      	    						<span></span>
                    </li>
                    <li>
                        <button className="btn_submit" type="button">确定提交</button>
                    </li>
                </ul>
            </div>
        );
    }
});

ReactDOM.render(<NewAccount />,$(".add-box")[0]);
