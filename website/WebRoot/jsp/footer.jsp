<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
   	
   	
   	
<footer>
        <div>
            <div class="left">
                <ul>
                    <li class="title">新手指南</li>
                    <li><a href="home_toNewRegister">注册新用户</a></li>
                    <li><a href="home_toNewLogin">登录MSO</a></li>
                    <li><a href="home_toCustomerIn">发包方入门</a></li>
                    <li><a href="home_toSupplierIn">接包方入门</a></li>
                </ul>
                <ul>
                    <li class="title">我是发包方</li>
                    <li><a href="home_toCustomerSend">发布需求</a></li>
                    <li><a href="home_toCustomerPayment">打款到平台</a></li>
                    <li><a href="home_toCustomerTrusteeship">全程托管</a></li>
                    <li><a href="home_toCustomerBilling">项目结款</a></li>
                </ul>
                <ul>
                    <li class="title">我是接包方</li>
                    <li><a href="home_toSupplierAuction">竞拍订单</a></li>
                    <li><a href="home_toSupplierUpload">上传成果</a></li>
                    <li><a href="home_toSupplierQuality">平台质检</a></li>
                    <li><a href="home_toSupplierBilling">项目结算</a></li>
                </ul>
            </div>
            <div class="right">
                <p>眸事致力于成为中国最受推崇的营销服务外包平台！</p>
                <div>
                    <img src="images/index1/u538.png"/>
                    <p class="p1">服务热线</p>
                    <p class="p2">400-900-5288</p>
                </div>
            </div>
        </div>
    </footer>
    <div class="copyright">
        <p class="p1">©&nbsp;2016&nbsp;www.mshuoke.com&nbsp;MSO营销服务外包平台&nbsp;保留所有权利</p>
        <p class="p2">眸事，让销售变简单！&nbsp;&nbsp;&nbsp;&nbsp;沪ICP备15029022号-1</p>
    </div>
    <script type="text/javascript">
    jQuery(function(){
    	var $div_li = $("div.hover_menu ul li");
    	$div_li.mouseover(function(){
    		$(this).addClass("selected").siblings().removeClass("selected");
    		var index =  $div_li.index(this); 
			$("div.hover_box .box_info").eq(index).show().siblings().hide();
    	});
    	
    	//数据滚动
    	var total = $(".datelist>ul>li").length;//数据总数
    	var pageCount = 6;//Math.ceil(total/3);//总页码
	    var pageing = 0;//当前页
	    var dynamic = setInterval(date,4000);//时间控制
	    function date() {
		    var liHeght = ($(".datelist>ul>li").height());//一条数据高度
		    var pageHeight = liHeght*2+liHeght;//一屏数据高度
		    if(pageing < pageCount-2){
		      $(".datelist>ul").animate({"margin-top": -pageing*pageHeight+"px"});
		      pageing++;
		    }
		    else if(pageing == pageCount-2){
		      $(".datelist>ul").animate({"margin-top": "0px"});
		      pageing = 0;
		    }
		    else{
		      return;
		    }
	    }
	    setTimeout(function(){
	    clearInterval(dynamic);
	    dynamic = setInterval(date,4000);
	  },500);
	});
    //页面滚动时出现aside栏目
    $(window).scroll(function(){if($(this).scrollTop()<300){$("aside .scroll").removeClass("top").addClass("bottom");}else{$("aside .scroll").removeClass("bottom").addClass("top");}});
    //返回顶部和跳到底部切换
    var flag=true;
    $("aside .scroll").click(function(){
        if(flag){
            flag=false;
            if($(this).hasClass("top")){
                $("html,body").animate({"scrollTop":0},500,"swing",function(){
                    $("aside .scroll").removeClass("top").addClass("bottom");
                    flag=true;
                });
            }else{
                $("html,body").animate({"scrollTop":$("body").height()},500,"swing",function(){
                    $("aside .scroll").removeClass("bottom").addClass("top");
                    flag=true;
                });
            }
        }
    });
</script>