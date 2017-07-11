<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title></title>
    <script src="js/tj.js"></script>
	<link rel="stylesheet" href="css/style.css"/>
	<script src="js/jquery-1.7.2.min.js"></script>
	<script src="js/main.js"></script>
    <link rel="stylesheet" href="css/bootstrap.min.css"/>
    <link rel="stylesheet" href="css/bootstrap-datetimepicker.min.css"/>
</head>
<body>
	<!-- jsp文件头和头部 -->
	<%@ include file="../cheader.jsp"%>
    <div class="content">
	   <!--导入 公用菜单页  -->
       <%@ include file="../hmenu.jsp"%>
    	<div class="mid_bg">
    		<div class="mid_box">
    		   	<%@ include file="../lmenu2.jsp"%>
	    		<div class="content_mid">
	    		
	    		<form id="sencondForm" name="sencondForm" >
	    			<div class="new_demand new_demand2">
	    				<div class="title">发布新需求</div>
	    				<div class="info">
	    					<h3>眸事，让销售变简单！</h3>
	    					<p>只需要简单三步，即可发布您的需求，轻松提升业绩！</p>
	    					<ul>
	    						<span class="icon"></span>
	    						<li class="first"><span>1</span>选择类目</li>
	    						<li class="second"><span>2</span>填写需求详情</li>
	    						<li class="last"><span>3</span>提交成功，等待审核</li>
	    					</ul>
	    				</div>
	    			</div>
	    			<div class="new_demand_step">
	    				<div class="title">请选择以下发布类型（选择后改为“请填写需求详情”）<span>搞不定？<a href="tencent://message/?uin=2850840272&Site=&menu=yes">马上联系客服代发 ></a></span></div>
	    				<div class="info personal_info">
	    					
	    					<div class="choice_pakeage_box">
	    						<h2 class="choice_pakeage">我想选择套餐，快速发布</h2>
	    						<form class="hide" method="post" action="">
	    							<div class="scroll">
										<a class="prev" href="javascript:;"></a> 
										<div class="box"> 
											<div class="scroll_list"> 
												<ul> 
													<li class="selected">
														<h4>新手尝鲜套餐1</h4>
														<p>线上教育培训</p>
														<p>意向挖掘</p>
														<p class="money"><span>4000</span>／次</p>
														<p class="details">提供100条销售线索，不合格全额退款</p>
														<p class="price">20</p>
														<p class="number">200</p>
													</li> 
													<li>
														<h4>新手尝鲜套餐2</h4>
														<p>线下教育培训</p>
														<p>意向挖掘</p>
														<p class="money"><span>5000</span>／次</p>
														<p class="details">提供100条销售线索，不合格全额退款</p>
														<p class="price">30</p>
														<p class="number">300</p>
													</li> 
													<li>
														<h4>新手尝鲜套餐3</h4>
														<p>房地产销售</p>
														<p>意向挖掘</p>
														<p class="money"><span>6000</span>／次</p>
														<p class="details">提供100条销售线索，不合格全额退款</p>
														<p class="price">24</p>
														<p class="number">240</p>
													</li> 
													<li>
														<h4>新手尝鲜套餐4</h4>
														<p>汽车销售</p>
														<p>意向挖掘</p>
														<p class="money"><span>5500</span>／次</p>
														<p class="details">提供100条销售线索，不合格全额退款</p>
														<p class="price">220</p>
														<p class="number">2200</p>
													</li> 
													<li>
														<h4>新手尝鲜套餐5</h4>
														<p>金融行业</p>
														<p>意向挖掘</p>
														<p class="money"><span>4000</span>／次</p>
														<p class="details">提供100条销售线索，不合格全额退款</p>
														<p class="price">20</p>
														<p class="number">200</p>
													</li> 
													<li>
														<h4>新手尝鲜套餐6</h4>
														<p>线上教育培训</p>
														<p>意向挖掘</p>
														<p class="money"><span>4000</span>／次</p>
														<p class="details">提供100条销售线索，不合格全额退款</p>
														<p class="price">20</p>
														<p class="number">200</p>
													</li> 
													<li>
														<h4>新手尝鲜套餐7</h4>
														<p>线上教育培训</p>
														<p>意向挖掘</p>
														<p class="money"><span>4000</span>／次</p>
														<p class="details">提供100条销售线索，不合格全额退款</p>
														<p class="price">20</p>
														<p class="number">200</p>
													</li> 
													<li>
														<h4>新手尝鲜套餐8</h4>
														<p>线上教育培训</p>
														<p>意向挖掘</p>
														<p class="money"><span>4000</span>／次</p>
														<p class="details">提供100条销售线索，不合格全额退款</p>
														<p class="price">20</p>
														<p class="number">200</p>
													</li> 
													<li>
														<h4>新手尝鲜套餐9</h4>
														<p>线上教育培训</p>
														<p>意向挖掘</p>
														<p class="money">4000</span>／次</p>
														<p class="details">提供100条销售线索，不合格全额退款</p>
														<p class="price">20</p>
														<p class="number">200</p>
													</li> 
													<li>
														<h4>新手尝鲜套餐10</h4>
														<p>线上教育培训</p>
														<p>意向挖掘</p>
														<p class="money"><span>4000</span>／次</p>
														<p class="details">提供100条销售线索，不合格全额退款</p>
														<p class="price">20</p>
														<p class="number">200</p>
													</li> 
													<li>
														<h4>新手尝鲜套餐11</h4>
														<p>线上教育培训</p>
														<p>意向挖掘</p>
														<p class="money"><span>4000</span>／次</p>
														<p class="details">提供100条销售线索，不合格全额退款</p>
														<p class="price">20</p>
														<p class="number">200</p>
													</li> 
													<li>
														<h4>新手尝鲜套餐12</h4>
														<p>线上教育培训</p>
														<p>意向挖掘</p>
														<p class="money"><span>4000</span>／次</p>
														<p class="details">提供100条销售线索，不合格全额退款</p>
														<p class="price">20</p>
														<p class="number">200</p>
													</li> 
													<li>
														<h4>新手尝鲜套餐13</h4>
														<p>线上教育培训</p>
														<p>意向挖掘</p>
														<p class="money"><span>4000</span>／次</p>
														<p class="details">提供100条销售线索，不合格全额退款</p>
														<p class="price">20</p>
														<p class="number">200</p>
													</li> 
													<li>
														<h4>新手尝鲜套餐14</h4>
														<p>线上教育培训</p>
														<p>意向挖掘</p>
														<p class="money"><span>4000</span>／次</p>
														<p class="details">提供100条销售线索，不合格全额退款</p>
														<p class="price">20</p>
														<p class="number">200</p>
													</li> 
													<li>
														<h4>新手尝鲜套餐15</h4>
														<p>线上教育培训</p>
														<p>意向挖掘</p>
														<p class="money"><span>4000</span>／次</p>
														<p class="details">提供100条销售线索，不合格全额退款</p>
														<p class="price">20</p>
														<p class="number">200</p>
													</li> 
													<li>
														<h4>新手尝鲜套餐16</h4>
														<p>线上教育培训</p>
														<p>意向挖掘</p>
														<p class="money"><span>4000</span>／次</p>
														<p class="details">提供100条销售线索，不合格全额退款</p>
														<p class="price">20</p>
														<p class="number">200</p>
													</li> 
												</ul> 
											</div> 
										</div> 
										<a class="next" href="javascript:;"></a> 
									</div> 
			    				<ul>
			    					<li>
			    						<label><span>*</span> 套餐名称：</label>
			    						<span class="pakeageName">新手尝鲜套餐</span>
			    					</li>
			    					<li>
			    						<label><span>*</span> 套餐优惠价：</label>
			    						<span class="pakeagePrice">￥0</span>
			    					</li>
			    					<li>
			    						<label><span>*</span> 需求单价：</label>
			    						<span class="pakeageTag">￥20</span>
			    					</li>
			    					<li>
			    						<label><span>*</span> 需求数量：</label>
			    						<span class="pakeageNumber">200</span>
			    					</li>
			    					<li>
			    						<label><span>*</span> 目标人群：</label>
			    						<span class="context">成人</span>
			    					</li>
			    					<li>
			    						<label><span>*</span> 完成周期：</label>
			    						<span class="context">30天（完成周期是指完成任务的期限，从需求上架之日算起）</span>
			    					</li>
			    					<li>
			    						<label><span>*</span> 对象年龄：</label>
			    						<input class="age01" type="text" />
			    						<span class="age02">~</span>
			    						<input class="age03" type="text" />
			    						<span class="age04">（请输入目标人群的年龄范围）</span>
			    					</li>
			    					<li class="region">
						                <label><span>*</span> 目标城市：</label>
						                <input type="text" placeholder="请输入目标人群所在的城市，只能填写一个" />
						            </li>
			    					<li class="speech-template">
			    						<label><span>*</span> 使用话术：</label>
			    						<!--<input type="text" placeholder="您希望接包方怎么跟客户沟通？" />
			    						<button class="btn_upload">上传文件</button>-->
			    						<div class="ossfile" ></div>
			    						<button type="button" id="selectfiles" class="btn_upload">选择文档</button>
										<button type="button" id="postfiles" class="btn_upload">开始上传</button>
			    						<p>
			    							<a href="">下载话术模板 >></a>
			    							<span>不太明白？<a href="tencent://message/?uin=2850840272&Site=&menu=yes">点此寻求专家帮助 >></a></span>
			    						</p>
			    					</li>
			    					<li>
			    						<label>负责人：</label>
			    						<input class="contactName" type="text" placeholder="负责人" />
			    						<span></span>
			    					</li>
									<li>
			    						<label>负责人电话：</label>
			    						<input class="telNumber" type="text" placeholder="请输入有效的电话号码" />
			    						<span></span>
			    					</li>
			    					<li>
			    						<label><span>*</span> 付款时间：</label>
			    						<span class="context">预付款（提前把款项付给平台）</span>
			    					</li>
			    				</ul>
			    				</form>
	    					</div>
	    					
	    					<div class="choice_pakeage_box">
	    						<h2 class="choice_pakeage">我不想选择套餐，想自己填写<span>有问题？<a href="tencent://message/?uin=2850840272&Site=&menu=yes">马上咨询客服 ></a></span></h2>
	    						<form class="hide" method="post" action="">
			    				<ul>
			    					<li>
			    						<label><span>*</span> 需求名称：</label>
			    						<input type="text" placeholder="请用一句话描述您的需求" />
			    						<span></span>
			    					</li>
			    					<li>
			    						<label><span>*</span> 需求单价：</label>
			    						<input class="price" type="text" />
			    						<span></span>
			    					</li>
			    					<li>
			    						<label><span>*</span> 需求数量：</label>
			    						<input class="number" type="text" />
			    					</li>
			    					<li>
			    						<label><span>*</span> 目标人数：</label>
			    						<input type="text" />
			    					</li>
			    					<li>
			    						<label><span>*</span> 对象年龄：</label>
			    						<input class="age01" type="text" />
			    						<span class="age02">~</span>
			    						<input class="age03" type="text" />
			    						<span class="age04">（请输入目标人群的年龄范围）</span>
			    					</li>
			    					<li class="region">
						                <label><span>*</span> 目标城市：</label>
						                &emsp;<input type="radio" name="region" class="region1" checked>全国&emsp;<input type="radio" name="region" class="region2"> 自定义城市
						                <br/>
						                <select id="cmbProvince">
						                </select>
						                <div>
						                    <div class="left" style="margin-top: -1px;">
						                        <select  multiple size="12" id="cmbCity">
						                        </select>
						                    </div>
						                    <div class="left_button">
						                        <button type="button" class="btn all">全选 >></button>
						                        <button type="button" class="btn add">添加 >></button>
						                        <button type="button" class="btn delete"><< 删除</button>
						                    </div>
						                    <div class="left">
						                        <select  multiple size="12" id="active">
						                        </select>
						                    </div>
						                </div>
						            </li>
			    					<li class="date">
			    						<label><span>*</span> 结束日期：</label>
			    						<div class="input-group date form_date1 col-md-5" data-date="" data-date-format="yyyy-MM-dd" data-link-field="dtp_input1" data-link-format="yyyy-MM-dd">
						                    <input class="form-control" size="16" type="text" value="" readonly>
						                    <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
											<span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
						                </div>
										<input type="hidden" id="dtp_input1" value="" />
			    					</li>
			    					<li class="speech-template2">
			    						<label><span>*</span> 使用话术：</label>
			    						<!--<input type="text" placeholder="您希望接包方怎么跟酷虎沟通？" />
			    						<button class="btn_upload">上传文件</button>-->
			    						<div class="ossfile2" ></div>
			    						<button type="button" id="selectfiles2" class="btn_upload">选择文档</button>
										<button type="button" id="postfiles2" class="btn_upload">开始上传</button>
										<a href="">下载话术模板 >></a>
			    					</li>
			    					<li class="speech-template2">
			    						<label>其他资料：</label>
			    						<!--<input type="text" placeholder="您还希望提供什么资料？" />
			    						<button class="btn_upload">上传文件</button>-->
			    						<div class="ossfile3" ></div>
			    						<button type="button" id="selectfiles3" class="btn_upload">选择文档</button>
										<button type="button" id="postfiles3" class="btn_upload">开始上传</button>
			    					</li>
			    					<li>
			    						<label>负责人：</label>
			    						<input type="text" placeholder="谁来负责这个项目？" />
			    						<span></span>
			    					</li>
			    					<li>
			    						<label>负责人电话：</label>
			    						<input type="text" placeholder="请输入有效的电话号码" />
			    						<span></span>
			    					</li>
			    				</ul>
			    				</form>
	    					</div>
	    					<div class="choice_pakeage_box">
	    						<h3>* 我是大客户！ <a href="tencent://message/?uin=2850840272&Site=&menu=yes">点此获得</a> 更多贴心服务！</h3>
	    						<div class="center">
	    							<input type="checkbox" checked="checked" />
	    							<span>同意并遵守《<a href="#">眸事网需求发布与处理规则</a>》</span>
	    						</div>
	    						<div class="btn_box">
	    							<a href="javascript:history.back(-1);">< 返回上一页</a>
<!-- 	    							<a class="back" href="customer_lj_DemandManagement1"><< 返回上一步</a> -->
	    							<button class="btn_orange">同意协议条款，马上发布</button>
	    							<button class="btn_gray">保存到草稿箱</button>
	    						</div>
	    						
	    					</div>
	    				</div>
	    			</div>
	    		 </form>
	    		</div>
	    		<!-- jsp文件尾部和尾部 -->
				<%@ include file="../Bulletin_display.jsp"%>
    		</div>
    	</div>
    </div>
	<!-- jsp文件尾部和尾部 -->
	<%@ include file="../cfooter.jsp"%>
	<script>
		jQuery(function(){

			//点击切换选项卡
			$("h2.choice_pakeage").click(function(){
				$(this).next("form").toggle();
			});
			$("h2.choice_pakeage").click(function(){
				$(this).addClass("selected").parents().siblings().children("h2.choice_pakeage").removeClass("selected");
				$(this).next().addClass("submit_post").parents().siblings().children("form").removeClass("submit_post");
			});
			
			//套餐默认显示第一个套餐内容
			$(".pakeageName").text($(".scroll_list li:first-child h4").text());
			$(".pakeagePrice").text("￥" + $(".scroll_list li:first-child p.money span").text());
			$(".pakeageTag").text("￥" + $(".scroll_list li:first-child p.price").text());
			$(".pakeageNumber").text($(".scroll_list li:first-child p.number").text());
			
			//点击选择套餐
			$(".scroll_list li").click(function(){
				$(this).addClass("selected").siblings().removeClass("selected");
				$(".pakeageName").text($(this).children("h4").text());
				$(".pakeagePrice").text("￥" + $(this).find("p.money span").text());
				$(".pakeageTag").text("￥" + $(this).find("p.price").text());
				$(".pakeageNumber").text($(this).find("p.number").text());
			});
			//点击滚动
			var page= 1; 
			var i = 4;
			//向右滚动 
			$(".next").click(function(){
				var v_wrap = $(this).parents(".scroll");
				var v_show = v_wrap.find(".scroll_list");
				var v_cont = v_wrap.find(".box");
				var v_width = v_cont.width(); 
				var len = v_show.find("li").length;
				var page_count = Math.ceil(len/i);
				if(!v_show.is(":animated")){ 
					if(page == page_count){ 
						v_show.animate({left:'0px'},"slow"); 
						page =1; 
					}else{ 
						v_show.animate({left:'-='+v_width},"slow"); 
						page++; 
					} 
				} 
			}); 
			//向左滚动 
			$(".prev").click(function(){
				var v_wrap = $(this).parents(".scroll");
				var v_show = v_wrap.find(".scroll_list");
				var v_cont = v_wrap.find(".box");
				var v_width = v_cont.width(); 
				var len = v_show.find("li").length;
				var page_count = Math.ceil(len/i);
				if(!v_show.is(":animated")){ 
					if(page == 1){ 
						v_show.animate({left:'-='+ v_width*(page_count-1)},"slow"); 
						page =page_count; 
					}else{ 
						v_show.animate({left:'+='+ v_width},"slow"); 
						page--; 
					} 
				} 
			}); 
			//radio自定义样式
			$(".radio-style").click(function(){
				$(this).addClass("selected").siblings().removeClass("selected");
			});
			
			//日期调用
			$('.form_date1').datetimepicker({
		        language:  'zh-CN',
		        weekStart: 1,
		        todayBtn:  1,
				autoclose: 1,
				todayHighlight: 1,
				startView: 2,
				minView: 2,
				forceParse: 0
		   	}).on("click", function (ev) {
			    $(".form_date1").datetimepicker("setEndDate", $(".form_date2").val());
			});
			
			//表单验证开始
			//负责人
	        $("input.contactName").blur(function(){
	            if($(this).val() == ''){
	                $(this).addClass("error_red");
	                $(this).next().text("请填写负责人的姓名");
	            }else if($(this).val().length<2){
	                $(this).addClass("error_red");
	                $(this).next().text("请输入2~8个字符");
	            }else if($(this).val().length>8){
	                $(this).addClass("error_red");
	                $(this).next().text("请输入2~8个字符");
	            }else{
	                $(this).removeClass("error_red");
	                $(this).next().text("");
	            }
	        });
	        $("input.nickname").focus(function(){
	            $(this).removeClass("error_red");
	            $(this).next().text("");
	        });
	        //年龄
	        $("input.age01").blur(function(){
	            if($(this).val() == ''){
	                $(this).addClass("error_red");
	                $(this).next().text("请填写目标年龄");
	            }else if($(this).val().length<2){
	                $(this).addClass("error_red");
	                $(this).next().text("请输入2~8个字符");
	            }else if($(this).val().length>8){
	                $(this).addClass("error_red");
	                $(this).next().text("请输入2~8个字符");
	            }else{
	                $(this).removeClass("error_red");
	                $(this).next().text("");
	            }
	        });
	        $("input.nickname").focus(function(){
	            $(this).removeClass("error_red");
	            $(this).next().text("");
	        });
	        //返回顶部
//	        $(".go-to-top").click(function(){
//			    $('html,body').animate({scrollTop: '0px'}, 800);
//			});
		});
	</script>
	<script type="text/javascript" src="js/jsAddress.js"></script>
<script type="text/javascript">
    var file1;
    var file2;
    var file3;
    addressInit('cmbProvince', 'cmbCity', 'cmbArea', '上海', '', '');
    $(".left_button .add").click(function(){
        var length=[];
        if($("#cmbCity option:selected").length==0){
            alert("请您在左边选择框中至少选择一个！");
        }
        $("#cmbCity option:selected").each(function(){
            var option=$(this);
            var flag=false;
            $("#active option").each(function(){
                if($(this).text()==$(option).text()){
                    flag=true;
                    return true;
                }
            });
            if(flag){
                length.push($(this)[0]);
            }else{
                $("#active").append($(this).clone());
            }
        });
        if(length.length!=0){
            var text;
            for(var i=0;i<length.length;i++){
                if(i==0){
                    text=$(length[i]).text();
                }else if(i<length.length-1){
                    text+=","+$(length[i]).text();
                }else{
                    text+=","+$(length[i]).text();
                }
            }
            alert("城市("+text+")已经添加过！");
            length=[];
        }
    });
    $(".left_button .all").click(function(){
        $("#cmbCity option").attr("selected","selected");
    });
    $(".left_button .delete").click(function(){
        if($("#active option:selected").length==0){
            alert("请您在右边选择框中至少选择一个！");
        }
        $("#active option:selected").remove();
    });
    $("input[name=region]").change(function(){
       if($(this).hasClass("region1")){
           $("#cmbProvince,#cmbProvince+div").hide();
       }else{
           $("#cmbProvince,#cmbProvince+div").show();
       }
    });
    //$("#CompanySize div.class>p input[type=checkbox]").
</script>

	<script type="text/javascript"  src="js/jquery-2.1.1.min.js"></script>
	<script type="text/javascript"  src="js/project_base.js"></script>	
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/bootstrap-datetimepicker.js" charset="UTF-8"></script>
	<script type="text/javascript" src="js/locales/bootstrap-datetimepicker.zh-CN.js" charset="UTF-8"></script>
	<script type="text/javascript" src="js/plupload.full.min.js"></script>
	<script type="text/javascript" src="js/upload_files.js"></script>
</body>
</html>