<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<%@ include file="../comm.jsp"%>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script src="js/tj.js"></script>
</head>
<style>
    .info1{height:310px;background: #F6F6F6;}
    .info1>div,.info2>div,.info3>div,form>div,header>div,footer>div{width:1200px;margin:0 auto;}
    aside{position: fixed;top:200px;right:0;z-index: 100;}
    aside ul{padding: 10px;background: rgba(237,237,237,.5);border:1px solid #ccc;}
    aside ul li{width:40px;border-top:1px solid #fff;text-align: center;font-size: 13px;line-height:16px;color:#333;padding:4px 0px;box-sizing: border-box;}
    aside ul li.not{border-top:none;}
    aside ul li a{color:#333;}
    aside ul li a.scroll{display:block;margin:auto;width:33px;height:33px;background-size: 100% 100%;}
    aside ul li a.scroll.top{background-image: url("images/customer/u178.png");}
    aside ul li a.scroll.bottom{background-image: url("images/customer/u162.png");}
    
    .banner { border-top: 1px #cbcbcb solid; height: 150px; background: url(images/about/u83.png) center center no-repeat #f2f3f7; text-indent: 100%; overflow: hidden;}
    .box_content { width: 1112px; padding-left: 88px; margin: 0 auto;}
    .tab { overflow: hidden; padding-top: 18px;}
	.tab_menu { float: left;}
	.tab_menu li { font-size: 16px; border-bottom: 1px #e4e4e4 solid; width: 104px; height: 41px; line-height: 41px; cursor: pointer; text-indent: 22px;}
	.tab_menu li.hover,
	.tab_menu li.selected { font-weight: bold; background: url(images/about/u3.png) 9px center no-repeat;}
	.tab_box { float: left; min-height: 600px; padding-bottom: 35px; width: 822px; padding-left: 80px; padding-top: 4px; background: url(images/about/icon.gif) 34px 17px no-repeat; color: #515151;}
	.tab_box h2 { font-size: 16px; font-weight: 600; padding: 8px 0;}
	.tab_box p { font-size: 12px; padding: 10px 0; color: #222;}
	.tab_box p b { font-size: 15px;}
	.hide{display:none}
	.word_2 { text-indent: 2em;}
</style>
<body>
<aside>
    <ul>
        <li class="not"><a href="tencent://message/?uin=2850840272&Site=&menu=yes"  target="_blank"><img src="images/index1/u551.png"/></a>发包方</li>
        <li><a href="tencent://message/?uin=2850840278&Site=&menu=yes"  target="_blank"><img src="images/index1/u551.png"/></a>接包方</li>
        <li class="scroll"><a href="javascript:" class="scroll bottom"></a></li>
    </ul>
</aside>

	<!-- jsp文件头和头部 -->
	<%@ include file="../header.jsp"%>
    <div class="banner"><img src="images/about/u75.png" ></div>
    <div class="box_content">
    	<div class="tab">
		    <div class="tab_menu">
		        <ul>
		            <li class="selected">眸事简介</li>
		            <li>团队风采</li>
		            <li>企业文化</li>
		            <li>诚聘英才</li>
		        </ul>
		    </div>
		    <div class="tab_box">
		        <div>
		        	<h2>眸事简介</h2>
		        	<p class="word_2">MSO（眸事）营销服务外包平台致力打造成为营销服务外包行业的第三方交易平台，实现发包方在平台发布推广需求；接包方在平台下单，订单执行全程都有专业的工作人员进行1V1服务</p>
		        	<p class="word_2">最优秀的服务团队：数十位超过10年行业经验的的管理者，200多名3年以上行业经验的优秀员工；打造专业级的自主对接平台，
以专业营销，合作运营的模式成为客户切实提高营销的成功率</p>
		        	<p class="word_2">平台以建立海量系统化资源数据库位基础，采取一对一主动营销以及专业的执行力，使用户更能深刻体验到标准化，个性化的优质服务，通过MSO营销服务外包平台专业，验证的信息整合，辅以人性化的私人订制，为客户提供针对性的精准信息和产品销售服务，大大提高潜在用户的转换率，从而实现以结果为导向的营销服务外包平台。</p>
		        	<p><img src="images/about/u32.jpg" width="822" /></p>
		        	<p style="text-align: center; font-weight: bold;">办公楼外景（荣科大厦）</p>
		        	<p><img src="images/about/u36.png" width="822" /></p>
		        	<p style="text-align: center; font-weight: bold;">办公楼外景（芜湖分公司）</p>
		        </div>
		        <div class="hide">
		        	<h2>团队风采</h2>
		        	<p><img src="images/about/u66.jpg" /></p>
		        	<p><img src="images/about/u64.png" /></p>	
		        	<p><img src="images/about/u72.jpg" /></p>
		        	<p><img src="images/about/u74.jpg" /></p>
		        	<p><img src="images/about/u62.png" /></p>
		        </div>
		        <div class="hide">
		        	<h2>企业文化</h2>
		        	<p><img src="images/about/u56.jpg" /></p>
		        	<p><img src="images/about/u58.png" /></p>
		        	<p><img src="images/about/u60.png" /></p>
		        </div>
		        <div class="hide">
		        	<h2>诚聘英才</h2>
		        	<p><b>招商经理</b></p>
		        	<p><b>工作职责：</b><br/>
1、制定公司业务拓展策略，负责全国代理商的开发，评估，谈判，人员培训等。<br/>
2、安排公司招商的相关工作，组建、管理招商团队，根据招商整体规划和布局，制定招商计划，招商信息优化与管理。<br/>
3、负责对已有外包商日常运营进行指导培训，以及定期回顾、整理业务数据，分析代理商销售状况和制定服务策略。<br/>
4、维护和管理与代理商长期良好的合作关系，积极配合公司发展战略决策，保持公司品牌形象。<br/>
5、建设部门强大的招商团队，负责部门招商团队的人员招募，培训，考核等工作；<br/>
<b>任职要求：</b><br/>
1、大专及以上学历，市场营销、工商管理类专业优先。<br/>
2、3-5年工作经验，其中有1-2年呼叫中心招商管理经验，有外包商开发工作经验尤佳，熟悉呼叫中心运营招商及外包商的管理。<br/>
3、思路清晰，具有独立市场判断、出色的团队组织管理能力、谈判能力。<br/>
4、性格开朗，很强的团队合作精神，抗压能力强。</p>
 

<p><b>招商渠道主管</b></p>
 
<p><b>工作职责：</b><br/>
1、负责对外开拓加盟商渠道：全国中小型呼叫中心群体。<br/>
2、收集各园区、经济开发区、行业协会的呼叫中心信息，进行开发洽谈并促成合作，完成公司要求每月目标。<br/>
3、对加盟商的项目执行情况进行跟踪维护，不断完善项目的工作流程，保证业务正常运行。<br/>
<b>任职要求：</b><br/>
1、有丰富的地推招商经验，熟悉各类型地推模式，善于分析总结并制定招商方案，有呼叫中心开发经验和资源尤佳。<br/>
2、学习能力强，适应出差。</p>

<p><b>JAVA前端工程师</b></p>
 
<p><b>工作职责：</b><br/>
1.负责眸事平台前端开发；<br/>
2.完成领导布置的其他任务。<br/>
<b>任职要求：</b><br/>
1、JAVA1到3年工作经验能独立负责项目模块的技术开发和改进工作；<br/>
2、熟悉Eclipse、tomcat、mysql等开发工具；<br/>
   熟悉JSP、JavaBean、Spring、Ajax、AOP、Html、Nginx、CSS、JQUERY、Shiro 等相关技术；<br/>
3、与产品人员共同确定产品的可行性，技术实施方案，并具体实施开发工作和测试工作；<br/>
4、Java代码编写和调试；<br/>
5、性能优化，包括代码优化，数据库优化；<br/>
6、按照项目经理分配的工作，独立、高效的完成编码；<br/>
7、完成领导交待的其他事项。</p>

<p><b>文案策划</b></p>
 
<p><b>岗位职责：</b><br/>
1. 负责公司品牌、产品的宣传推广及文案策划及撰写，如：撰写宣传广告，线上活动策划等；<br/>
2. 负责公司内部与外部文案的统筹与协调；<br/>
3. 按照公司运营计划及要求，制定市场与新闻宣传主题，选择并开发宣传方法；<br/>
4. 协助相关部门制定公司市场广告计划与各类市场文案的撰写。<br/>
<b>任职要求：</b><br/>
1. 大专及以上学历，两年以上相关工作经验，新闻、广告、大众传播或文学等相关专业优先；<br/>
2. 文字功底扎实，有丰富的广告策划和市场营销的知识，可以独立完成策划案；<br/>
3. 具有创新意识，即便模仿现有案例，也会在模仿中有所创新；<br/>
4. 以用户为导向，能创作多种风格的广告文案；以市场为导向，乐于研究，并能深入务实；<br/>
5. 有广告公关或电子商务行业的文字编辑工作经验者优先；有成功品牌、公关传播与网络营销案例者优先 ；</p>
 

<p><b>市场推广</b></p>
 
<p><b>岗位职责：</b><br/>
1、根据公司计划目标制定合适的线上线下渠道推广营销方案，实施投放并进行效果跟踪、数据统计和分析；<br/>
3、策划推广活动，并做活动的执行及撰写文案等；<br/>
4、研究竞争对手推广的相关案例，并据当前市场需求做出合理的优化调整建议。<br/>
<b>任职要求：</b><br/>
1、金融、广告、新闻、计算机、中文等相关专业大专或以上学历；<br/>
2、有2年以上相关互联网推广经验，具有一定的线上媒体资源；<br/>
3、熟悉搜索引擎优化、百科、贴吧、媒体软文发布等推广方法，有数据分析意识，具备直接管理线上推广渠道的实际工作经验；<br/>
4、优秀的沟通协调能力，较强的分析问题和解决问题的能力，有良好的团队协作意识。</p>

		        </div>
		    </div>
		</div>
    <script type="text/javascript" >
	$(function(){
		var $div_li =$("div.tab_menu ul li");
		$div_li.click(function(){
			$(this).addClass("selected").siblings().removeClass("selected"); 
			var index =  $div_li.index(this); 
			$("div.tab_box > div").eq(index).show().siblings().hide();
		}).hover(function(){
			$(this).addClass("hover");
		},function(){
			$(this).removeClass("hover");
		});
        //页面滚动时出现aside栏目
        $(window).scroll(function(){if($(this).scrollTop()<100){$("aside .scroll").removeClass("top").addClass("bottom");}else{$("aside .scroll").removeClass("bottom").addClass("top");}});
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
	})
</script>

<!-- jsp文件尾部和尾部 -->
<%@ include file="../footer.jsp"%>
</body>
</html>