


/*目标人群模块*/
/*目标人群模块*/
var levelfirstid = [
		'ff8080815b64e782015b66a7ef8f0013',
		'ff8080815b64e782015b66bec87d000a',
		'ff8080815b64e782015b66a80c740014',
		'ff8080815b64e782015b66b6c30f0021',
		'ff8080815b64e782015b66a85e6b0015',
		'ff8080815b64e782015b66b67603001f'
   ];

var fiexdArr = [{name:'姓名'},{name:'年龄'},{name:'城市'},{name:'手机号码'},{name:'职业'},{name:'收入'},{name:'电子邮箱'},{name:'孩子年龄'}];

var collectData = {
	levelfirstid:'',/*行业一级数据*/
	levelsecondid:'',/*二级id可*/
	levelthirdid:'',
	otherindustry:'',
	destcustdesc:''
};
function collect(json){
	/*一级id IndustryId*/
	if(json.levelfirstid){
		if(json.levelfirstid=='1'){
			collectData.levelfirstid = "";
		}else{
			collectData.levelfirstid = json.levelfirstid;
		}		
	}
	if(json.levelsecondid){
		if(json.levelsecondid=='1'){
			collectData.levelsecondid = "";
		}else{
			collectData.levelsecondid = json.levelsecondid;
		}		
	}
	
	/*三级id*/
	if(json.levelthirdid){
		if(json.levelthirdid=='1'){
			collectData.levelthirdid = "";
		}else{
			collectData.levelthirdid = json.levelthirdid;
		}
	}
	
	/*其它行业*/
	
	if(json.otherindustry){
		if(json.otherindustry == '1'){
			collectData.otherindustry = "";
		}else{
			collectData.otherindustry = json.otherindustry;
		}	
	}
	
	if(json.destcustdesc){
		if(json.destcustdesc == '1'){
			collectData.destcustdesc = "";
		}else{
			collectData.destcustdesc = json.destcustdesc;
		}	
	}
}
React.rootEl = $('html,body');

class Industry extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			startIndustry:[
				{name:'教育行业',nfiid:1},
				{name:'汽车行业',nfiid:2},
				{name:'金融行业',nfiid:3},
				{name:'互联网',nfiid:4},
				{name:'医美行业',nfiid:5},
				{name:'其他行业',nfiid:6}
			],
			startIndustryHtml:'',
			isLoad:false
			
		}
	
		
	}
	
	componentDidMount(){
		this.rootEl = $('.getsource-box');
		
		this.setState({startIndustryHtml:this.createstartIndustry()});
		this.chooseStartIndustry();
		

		this.search();
	}
	chooseStartIndustry(){
		this.rootEl.on('focus','.startIndustry',function(ev){
			var target = ev.currentTarget;
			$('.industryList').show(200);
		}.bind(this));
		
		/*industryList*/
		this.rootEl.on('click','.industryList .industry-ft',function(ev){
			
			 collect({
				levelfirstid:'1',
				levelsecondid:'1',
				levelthirdid:'1',
				otherindustry:'1',
				destcustdesc:'1',
			});
			
			$('.descriptionIndustry').val('');
			$('.error.industry-one').hide();
			var target = ev.currentTarget;
			//$('input').attr("readonly","readonly")//将input元素设置为readonly 　　 
			//$('input').removeAttr("readonly");//去除input元素的readonly属性 
			
			var dataId = $(target).attr('data-nfiid');
			$('.search.ant-btn').attr('data-nfiid',dataId);
			$('input.startIndustry').data('dataid',dataId);

			/*清空二级数据*/
			$('.industry.select.area.js_area').val('');
			
			
			
			//6  其它行业
			$('.industry-other').hide();
			if(dataId === '6'){
				//console.log('其它行业');
				$('.industry-other').show();
				
				
			}
			//1 教育行业
			/*先清除在显示*/
			$('.changeIndustry').hide();
			
			if(dataId === '1'){
				$('.changeIndustry').show();
			}
			
			$('.startIndustry').val('');
			
		
			//if(dataId != '1' && dataId != '6'){
			var content = $(target).html();
			$('.startIndustry').val(content);
			//}
			collect({levelfirstid:levelfirstid[dataId*1-1]});
			
			$('.industryList').hide();
		}.bind(this));
		
		/*其它行业*/
		this.rootEl.on('blur','.otherIndustry',function (ev){
			var target = ev.currentTarget;
			collect({otherindustry:$(target).val()});
			
		}.bind(this));
		
		this.rootEl.on('blur','.descriptionIndustry',function (ev){
			var target = ev.currentTarget;
			collect({destcustdesc:$(target).val()});
		}.bind(this));
		
	}
	search(){
		//debugger;
		
		
		
		
		$('input.descriptionIndustry').keypress(function (ev){
			var key = ev.keyCode;
			if(key==13){
				$('.search.ant-btn').click();
			}
		});
		
		
		this.rootEl.on('click','.search.ant-btn',function (ev){
			
			this.setState({isLoad:false});
			var target = ev.currentTarget;
			/*一级行业必须选*/
			$('.error.industry-one').hide();
			if(!collectData.levelfirstid){
				$('.error.industry-one').show();
				return;
			}
			
			
			var industryValue = $('.startIndustry').val();
			//debugger;
			var detailValue = $('.industry.select.area.js_area').val();
			if(detailValue){
				$('input.startIndustry').data('industryName',industryValue+'>'+detailValue);
				
			}else{
				$('input.startIndustry').data('industryName',industryValue);
				//$('span.industryName').html(industryValue);
			}
			
			
			
			
			/*判断其它行业*/
			var dataId = $(target).attr('data-nfiid');
			$('.error.otherInd').hide();
			
			if(dataId==6){
				var otherIndustry = $('input.otherIndustry').val();
				if(!otherIndustry){
					$('.error.otherInd').show();
					return;
				}
				
				var industryValue = $('.startIndustry').val();
				var otherValue = $('.otherIndustry').val();
				
				if(otherValue){
					$('span.industryName').html(industryValue+'>'+otherValue);
				}else{
					$('span.industryName').html(industryValue);
				}
			}
			
			
			/*第一步隐藏*/
			$('.industry-first').hide();
			this.setState({isLoad:true});
			$('.industry-second').show();
		
			
		}.bind(this));
	}
	createstartIndustry(){
			if(this.state.startIndustry){
			var startIndustry = this.state.startIndustry;
				/*0线下 1 线上*/
			return startIndustry.map(function (data,index){
				return (<li data-nfiid={data.nfiid} className="industry-ft">{data.name}</li>);
			});
			
		}
	}
	
	
	render(){
		return(
		<div className="getsource-box">
			<div className="industry-first">
				<div className="search-top" >
					<span>目标查询：</span>
					<span>目标查询可以帮助您查询到数据库中符合您需求的目标客群的数量。</span>
				</div>
				<div className="industry-box">
					<p className="error industry-one">必须选择一个行业！</p>
					<input className="startIndustry" readOnly="readonly"  type="text"  placeholder="请选择您所属的行业"  />
					<i className="select_icon"></i>
					<ul className="industryList">
					{this.state.startIndustryHtml}
					</ul>
				</div>
				
				
				<div className="industry-other">
					<p className="error otherInd">请输入其它行业名称！</p>
					<input className="otherIndustry" maxLength="20"  type="text"  placeholder="请输入其它行业名称"  />
				</div>
				
				<Getsource  />
				<div className="description">
					<p className="error description">最多只能输入20个！</p>
					<input className="descriptionIndustry" maxLength="20" type="text"  placeholder="输入目标客群特征,如对英语口语有学习兴趣的人群"  />
				</div>
				<div className="submit">
					<button type="button"  disabled="disabled"  className="search ant-btn ant-btn-background-ghost"><span>查询</span></button>
				</div>
			</div>
			{this.state.isLoad?<PropertyModule />:""}
		</div>
		);
	}
}





function collectTag(){
	var str = "";
	/*标准属性*/
	$('.prosession ul li.current').each(function (){
		str += ($(this).html()+',');
	});
	
	/*自定义属性*/
	var deFineValue = $('input.userDefine').val();
	
	if(deFineValue.length>100){
		deFineValue = deFineValue.substr(0,100);
	}
	return {
		systemtags:str,
		customtags:deFineValue,
	}
}

var arr = [];
/*转换数据*/
function findArr(newArr){
	
	for(var j=0;j<newArr.length;j++){
		arr.push(newArr[j]);
	}
	return arr;
}


function interlinkingArr(basicEle){
	arr = [];
	var totalArr = [];
	for(var i=0;i<basicEle.length;i++){
		totalArr =  findArr(basicEle[i].list);
	}
	return totalArr;	
}


class PropertyModule extends React.Component{
	constructor(props) {
		super(props);
		this.getPropertyData = this.getPropertyData.bind(this);
		this.actionEvent = this.actionEvent.bind(this);
		this.submit = this.submit.bind(this);
		this.state = {
			basicEle:'',
			basicHtml:'',
			profession:'',
			professionHtml:''
		};
	}
	componentDidMount(){
		this.rootEl = $('.getsource-box');
		this.getPropertyData(function (data){
			//debugger;
			
			this.setState({basicEle:data[0]});
			
			
			
			
			this.setState({basicHtml:this.creatBasicHtml(this.state.basicEle)});
			this.setState({profession:data[1]})
			this.setState({professionHtml:this.creatBasicHtml(this.state.profession)});
			//console.log(this.state);
			this.actionEvent();
			
			//$('input.startIndustry').data('industryName',industryValue);

			var industryName = $('input.startIndustry').data('industryName');
			$('span.industryName').html(industryName);
			
			//$('span.industryName').html(industryValue);
		}.bind(this));
		this.submit();
	}
	creatBasicHtml(basicEle){
		if(basicEle){
			var basicEle = basicEle.list;
			basicEle = interlinkingArr(basicEle);
	
			/*处理随机问题*/
			if(basicEle.length>20){
				//alert('开始随机');
				//fiexdArr
				/*先随机一次*/
				basicEle.sort(function (){
					return Math.random()*1-0.5;
				});
				var newFileArr = [];
				/*添加随机的和业务规定的*/
				
				/*跟新数组*/
				//fiexdArr = [{name:'姓名'},{name:'年龄'},{name:'城市'},{name:'手机号码'},{name:'职业'},{name:'收入'},{name:'电子邮箱'},{name:'孩子年龄'}];

				
				
				/*添加不同的18个*/
				var h = 0;
				while(newFileArr.length<17){
					h++;
					if(!findSame(fiexdArr,basicEle[h])){
						newFileArr.push(basicEle[h]);
					}
				}
			
				function findSame(arr,n){
					for(var i=0;i<arr.length;i++){
						if(n.name==arr[i].name){
							return true;
						}
					}
					return false;
				}
				
			
				
				/*合并数组*/
				basicEle = fiexdArr.concat(newFileArr);
				

				
				/*再次打乱数组*/
				basicEle.sort(function (){
					return Math.random()*1-0.5;
				});
			
			}
			return basicEle.map(function (data,index){
				return (<li data-id={data.id} className="">{data.name}</li>);
			});
			
		}
	}
	

	/**/
	actionEvent(){
		$('.return.ant-btn').click(function (){
			$('.industry-first').show();
			$('.industry-second').hide();
		});
		
		$('.prosession ul li').click(function (){
			if(!this.className){
				$(this).addClass('current');
			}else{
				$(this).removeClass('current');
			}
			
		});
		this.rootEl.on('input','.userDefine',function (ev){
			var target = ev.currentTarget;
			var _value = $(target).val();
			var len = _value.length;
			
			if(len>100){
				$('.error.userDefine').show();
			}
		});
		
	}
	submit(){

		var url = domain137 + '/quality/acquirecustsources';
		
		
		
		$('.sure.ant-btn').click(function (){
			var tags = collectTag();
			//console.log(tags);
			//return;
			
			/*
			var data = {
			  "userid":$.sessionStorage('jfuid'),
			  "levelfirstid":collectData.levelfirstid,
			  "levelsecondid":collectData.levelsecondid,
			  "levelthirdid":collectData.levelthirdid,
			  "otherindustry": collectData.otherindustry,
			  "destcustdesc": collectData.destcustdesc,
			  "tags":tags,
			};
			*/
			
			/*验证其它行业*/
			var dataId = $('input.startIndustry').data('dataid');
			
			
			var industryname = $('input.startIndustry').val();
			
			if(dataId == 1 && $('.industry.select.area.js_area').val()){
				industryname = $('.industry.select.area.js_area').val().split('/')[1];
			}
			
			if(dataId == 6){
				industryname = $('.otherIndustry').val();
			}
			
			
			/*行业id*/
			
			var industryid = collectData.levelfirstid;
			
			if(collectData.levelthirdid){
				industryid = collectData.levelthirdid;
			}
			
			var data = {
			  "userid":$.sessionStorage('jfuid'),
			  "industryid":industryid,
			  "destcustdesc": collectData.destcustdesc,
			  "industryname":industryname,
			  "systemtags":tags.systemtags,
			  "customtags":tags.customtags,
			};
			
			/*			
			"_comment": {
				"这个KEY是注释": "前端不需要发送",
				"userid": "用户ID",
				"industryid": "行业ID",
				"industryname": "行业名称/其他行业名称",
				"destcustdesc": "目标客户特征",
				"systemtags": "系统标签",
				"customtags": "用户自定义标签"
			  }
			 */			
			 
			
			$.when($.ajax({
				url:url,
				data:JSON.stringify(data),
				type : 'POST',
				contentType : 'application/json',
				dataType:'json'
			})).then(function (data){
				if(data.msg=='success'){
					(function (){
						$('.successfully').show();
						var  time = 3;
						var timer = setInterval(function (){
							time--;
							$('.ant-alert-description').html(time + '秒后自动关闭');
							if(time<=0){
								clearInterval(timer);
								window.location.reload();
							}
						},1000);
						$('.error.close').click(function (){
							clearInterval(timer);
							window.location.reload();
							//$(this).hide();
						});
						/*跟新倒计时*/
					})();
				}
			}.bind(this)).done(function (data){
				
			}).fail(function (data){
				
			});
		});
	}
	getPropertyData(callBack){
		
		callBack = callBack || function (){};
	
		let url = domain137 + '/quality/hkytags';
		//debugger;
		/*
		Mock.mock(url,
			{
			  "code": "0",
			  "msg": "success",
			  "data": {
				"id": "",
				"parentid": "",
				"name": "",
				"list": [
				  {
					"id": "1",
					"parentid": "",
					"name": "基本属性",
					"list": [
					  {
						"id": "11",
						"parentid": "1",
						"name": "城市"
					  },
					  {
						"id": "12",
						"parentid": "1",
						"name": "职业"
					  }
					]
				  },
				  {
					"id": "2",
					"parentid": "",
					"name": "行业属性",
					"list": [
					  {
						"id": "21",
						"parentid": "2",
						"name": "企业主"
					  },
					  {
						"id": "22",
						"parentid": "2",
						"name": "房产"
					  }
					]
				  }
				]
			  }
			}
		);
		*/
		
		$.when($.ajax({
			url:url,
			dataType:'json'
		})).then(function (data){
			if(data.msg=='success'){
				callBack(data.data.list);
			}
		}.bind(this)).done(function (data){
			
		}).fail(function (data){
			
		});
		
	}
	render(){
		return(<div className="industry-second">
				
				<div className="search-top">
					<span>获客源查询：</span>
					<span className="industryName"></span>
					<span>(以下目标客群标签可能会满足您的需求，选择您需要的标签)</span>
				</div>
				<div className="prosession">
					<span className="basicProperty">基础属性</span>
					<ul className="basic-ele">
						{this.state.basicHtml}
					</ul>
				</div>
				
				<div className="prosession second">
					<span className="prosessionProperty">行业属性</span>
					<ul className="profession-ele">
						{this.state.professionHtml}
					</ul>
				</div>
				<div className="user-define">
					<ul>
						<li>您还可以自定义标签</li>
						<li>(多个用逗号隔开)</li>
					</ul>
					<p className="error userDefine">输入的总字数不能超过100！</p>
					<input className="userDefine" type="text" maxLength="100"  placeholder="请输入其它行业名称"  />
				</div>
				<div className="comfirm bottom">
					<button type="button" className="return ant-btn ant-btn-background-ghost" >
						<span>返回</span>
					</button>
					<button type="button" className="sure ant-btn ant-btn-background-ghost" >
						<span>确定</span>
					</button>
				</div>
			</div>);
	}
}


class Getsource extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			industry:'',
			industryHtml:'',
			onlineAndOffline:'',
			onlineAndOfflineHtml:'',
			leavalLastdata:'',
			leavalLastHtml:'',
		}
		/*初始化数据*/
		
	}
	init(){
		this.rootEl = React.rootEl.find(".getsource-box");
		
		this.selectIndustry = this.selectIndustry.bind(this);
		this.selectIndustry();
		this.createleavalLastHtml = this.createleavalLastHtml.bind(this);
		this.updataStructrue = this.updataStructrue.bind(this);
		
		
		/*跟新结构数据*/
		this.updataStructrue(0);
	}
	componentDidMount(){
		this.init();
	}
	/*跟新结构数据*/
	updataStructrue(id){
		var dataId = id;
		this.getIndustryData(function (onlineAndOffline){
				/*zhe li you parentId 使用parentId查询 name":"教育培训",*/
			
				this.setState({onlineAndOffline:onlineAndOffline[0].list});
				
				this.setState({onlineAndOfflineHtml:this.createIndustry(dataId)});
				
			
				
		}.bind(this));
	}
	getIndustryData(callBack){
		/*onoff=1 是线上 onoff=2*/
	
		/*获取数据的只处理数据*/
		callBack = callBack || function (){};
		/*fiid=7 list fiid=8 online and offline */
		
		//http://192.168.2.137:8090/bs2/industrys/level/1
		let url = domain137 + '/quality/getIndustryList';
		
		$.when($.ajax({
			url:url,
			data:{onoff:0}
		})).then(function (data){
			if(data.msg=='success'){
				callBack(data.data.list);
			}
		}.bind(this)).done(function (data){
			//debugger;
			//console.log(2);
		}).fail(function (data){
			//console.log(3);
		});
	}
	componentDidUpdate(){
		
		
	}
	selectIndustry(){
		var IndustryValue = "";
		
		/*点击其它地方这个也消失*/
		$(document).on('click',document.body,function (ev){
			var target = ev.target || ev.srcElement;
			var leavalFirst = $(target).parent()[0].className;
			//console.log(leavalFirst);
			if(!(leavalFirst == 'leavalFirst' || leavalFirst == 'leavalThen' || leavalFirst == 'leaval-box')){
				this.rootEl.find('.leavalFirst').hide();
				this.rootEl.find('.leavalThen').hide();
			}
		}.bind(this));
		
		
		this.rootEl.on('focus','.leaval-box input',function (ev){
			var target = ev.currentTarget;
			$(".leavalFirst").show();
		}.bind(this));
		
		
		
		this.rootEl.on('blur','.industry.select.area.js_area',function (ev){
			
			var target = ev.currentTarget;
			if(!$(target).val()){
				$(".error.industry").show();
			}else{
				$(".error.industry").hide();
			}
		}.bind(this));
		
		
		/*点击一级列表*/
		this.rootEl.on('click','.leavalFirst li',function (ev){
			IndustryValue = "";
			var target = ev.currentTarget;
			
			/*二级数据*/
			var dataList = JSON.parse($(target).attr('data-list'));
			
			this.setState({leavalLastdata:dataList});
			this.setState({leavalLastHtml:this.createleavalLastHtml()});
			//debugger;
			 collect({levelsecondid:$(target).attr('data-nfiid')});
			
			
			this.rootEl.find('.leavalThen').show();
			var _value = $(target).html();
			IndustryValue+=_value;
			
		}.bind(this));
		
		/*点击二级列表*/
		this.rootEl.on('click','.leavalThen li',function (ev){
			var target = ev.currentTarget;
			this.rootEl.find('.leavalFirst').hide();
			this.rootEl.find('.leavalThen').hide();
			var _value = $(target).html();
			IndustryValue += '/'+_value;
			this.rootEl.find('.leaval-box input').val(IndustryValue);
			var price = $(target).attr('data-price');
			//console.log(price);
			$('input.industry.select.area.js_area').attr('data-value',price);
			
			$('input.industry.select.area.js_area').attr('data-txt',_value);
			
		
			
			/*城市的算价系统*/
			$(".demend_left input.js_area").change();
			/*城市的算价系统*/
			
			/*选择行业判断*/
			
			if(!$(".industry.select.area.js_area").val()){
				//debugger;
				$(".demend_left .industry p.error").html("请至少选择一项行业").show();
			}else{
				if($(".industry .btn.selected:visible").hasClass("other")){
						if(isNull($(".industry.select.area.js_area").val())){
							$(".demend_left .industry p.error").html("请选择您的行业").show();
						}else{
							$(".demend_left .industry p.error").hide();
						}
				}else{
					$(".demend_left .industry p.error").hide();
				}
			}
			
			
			/*三级id*/
			collect({levelthirdid:$(target).attr('data-nfiid')});
			/*data-nfiid 处理行业id*/
			this.rootEl.find('.leaval-box input').attr('data-nfiid',$(target).attr('data-nfiid'));

		}.bind(this));
		
		
		
	}
	createleavalLastHtml(){
		if(this.state.leavalLastdata){
			var leavalLastdata = this.state.leavalLastdata;
			return leavalLastdata.map(function (data,index){
				return (<li data-price={data.price?data.price:0} data-nfiid={data.nfiid?data.nfiid:0}  className="leaval-ft">{data.name}</li>);
			});
			
		}
	}
	createIndustry(id){
		if(this.state.onlineAndOffline){
			var onlineAndOffline = this.state.onlineAndOffline;
				/*0线下 1 线上*/
			return onlineAndOffline.map(function (data,index){
				//console.log(data);
				//if(data.onoff == id){
					
					return (<li data-price={0} data-nfiid={data.nfiid} data-onoff={data.onoff} data-list={JSON.stringify(data.list)} className="leaval-ft">{data.name}</li>);
				//}
			});
			
		}
	}
	
	render() {
		return (
		  
				<div className="changeIndustry">
					<div className="leaval-box">
							
							<input type="text" data-nfiid={0} data-value={0} readOnly="readonly"  style={{width:'370px'}} className="industry select area js_area" data-txt={" "} placeholder="请选择行业" title="" />
							
							<i className="select_icon"></i>
							<ul className="leavalFirst">
								{this.state.onlineAndOfflineHtml}
							</ul>
							
							<ul className="leavalThen">
								{this.state.leavalLastHtml}
							</ul>
					</div>
				</div>
		)
   }
}


React.render(<Industry />,$('.content')[0]);

/*POST /quality/acquirecustsources*/
