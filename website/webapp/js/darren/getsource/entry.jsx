/*目标人群模块*/
/*目标人群模块*/
import Textarea from './textarea.jsx';
require('./more.css');

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
		$('.industryList').hide();
		$('.startIndustry').hide();
		$('.changeIndustry').show();
		
		
		
		
	}
	search(){
		$('input.descriptionIndustry').keypress(function (ev){
			var key = ev.keyCode;
			if(key==13){
				$('.search.ant-btn').click();
			}
		});
		
		
		this.rootEl.on('click','.search.ant-btn',function (ev){
			
			if($('.industry.select.area.js_area').val()){
				$('.error.industry-one').hide();
			}else{
				$('.error.industry-one').show();
			}
			
			
			/*城市*/
			if(!$('.choosedCity li').length){
				$('.error.city-one').show();
			}else{
				$('.error.city-one').hide();
			}
			
			if($('p.error:visible').length){
				return;
			}
			
			var industryValue = $('.industry.select.area.js_area').val();
			var allData = {};
			var city = [];
			var industry = {name:$('.leavalFirst li.current').html(),name2:$('.leavalThen li.current').html(),nfiid:$('.industry.select.area.js_area').attr('data-nfiid')};
			
			$('.choosedCity li a').map(function (data,index){
				city.push({name:$(this).html(),regionid:$(this).parent().attr('data-regionid')});
				//console.log();
			});
			allData.city = city;
			allData.industry = industry;
			//console.log(allData);
			//return;
			//debugger;
			$.setSessionStorage('getsource-data',JSON.stringify(allData));
			location.href = "targetSearch.html";
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
	transmitHotCity(value){
		console.log(value);
	}
	render(){
		return(
		<div className="getsource-box">
			<div className="industry-first">
				
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
				<Textarea transmitHotCity={this.transmitHotCity} />
				<div className="description">
					<p className="error description">最多只能输入20个！</p>
					<input className="descriptionIndustry" maxLength="20" type="text"  placeholder="输入目标客群特征,如对英语口语有学习兴趣的人群"  />
					
				</div>
				<div className="submit">
					<button type="button"    className="search ant-btn">搜索</button>
				</div>
				
				<div className="search-top" >
					<span>目标搜索可以搜索出符合您行业需求的用户画像，从不同维度分析您的用户特征。</span>
					<span>注：目前只提供教育培训行业的目标搜索</span>
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
					<span>获客源搜索：</span>
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
		
		//$('.industry.select.area.js_area').show();
	}
	/*跟新结构数据*/
	updataStructrue(id){
		var dataId = id;
		this.getIndustryData(function (onlineAndOffline){
				/*zhe li you parentId 使用parentId搜索 name":"教育培训",*/
			
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
		
		//Mock.mock(url,{"code":"0","msg":"success","data":{"nfiid":"","parentId":"","name":"","onoff":0,"price":0,"list":[{"nfiid":"ff8080815b64e782015b665ec87d000a","parentId":"","name":"教育培训","onoff":0,"price":0.0,"list":[{"nfiid":"ff8080815b64e782015b66627460000b","parentId":"ff8080815b64e782015b665ec87d000a","name":"幼儿早教","onoff":0,"price":75.0,"list":[{"nfiid":"ff8080815b64e782015b66e7b349004b","parentId":"ff8080815b64e782015b66627460000b","name":"亲子乐园","onoff":0,"price":75.0,"list":[]},{"nfiid":"ff8080815b64e782015b66e7d75b004c","parentId":"ff8080815b64e782015b66627460000b","name":"早教课程","onoff":0,"price":75.0,"list":[]},{"nfiid":"ff8080815b64e782015b66e7f999004d","parentId":"ff8080815b64e782015b66627460000b","name":"半托/全托班","onoff":0,"price":75.0,"list":[]},{"nfiid":"ff8080815b64e782015b66e81c26004e","parentId":"ff8080815b64e782015b66627460000b","name":"幼儿园","onoff":0,"price":75.0,"list":[]}]},{"nfiid":"ff8080815b64e782015b66967dc20010","parentId":"ff8080815b64e782015b665ec87d000a","name":"中小学辅导","onoff":0,"price":75.0,"list":[{"nfiid":"ff8080815b64e782015b66dbc7000037","parentId":"ff8080815b64e782015b66967dc20010","name":"幼小衔接","onoff":0,"price":75.0,"list":[]},{"nfiid":"ff8080815b64e782015b66dbe8be0038","parentId":"ff8080815b64e782015b66967dc20010","name":"小学辅导","onoff":0,"price":75.0,"list":[]},{"nfiid":"ff8080815b64e782015b66dc13250039","parentId":"ff8080815b64e782015b66967dc20010","name":"竞赛辅导","onoff":0,"price":75.0,"list":[]},{"nfiid":"ff8080815b64e782015b66dc3766003a","parentId":"ff8080815b64e782015b66967dc20010","name":"中考辅导","onoff":0,"price":75.0,"list":[]},{"nfiid":"ff8080815b64e782015b66dc5934003b","parentId":"ff8080815b64e782015b66967dc20010","name":"高考辅导","onoff":0,"price":75.0,"list":[]},{"nfiid":"ff8080815b64e782015b66dc75fa003c","parentId":"ff8080815b64e782015b66967dc20010","name":"国内游学","onoff":0,"price":75.0,"list":[]}]},{"nfiid":"ff8080815b64e782015b66bae7a80022","parentId":"ff8080815b64e782015b665ec87d000a","name":"英语培训","onoff":0,"price":50.0,"list":[{"nfiid":"8a9996d85b6c3655015bae075fd60001","parentId":"ff8080815b64e782015b66bae7a80022","name":"教育投资","onoff":0,"price":200.0,"list":[]},{"nfiid":"ff8080815b64e782015b66c05e800031","parentId":"ff8080815b64e782015b66bae7a80022","name":"青少儿英语","onoff":0,"price":50.0,"list":[]},{"nfiid":"ff8080815b64e782015b66c098e80032","parentId":"ff8080815b64e782015b66bae7a80022","name":"成人英语","onoff":0,"price":50.0,"list":[]},{"nfiid":"ff8080815b64e782015b66c0cfaf0033","parentId":"ff8080815b64e782015b66bae7a80022","name":"雅思/托福/SAT/ACT","onoff":0,"price":50.0,"list":[]},{"nfiid":"ff8080815b64e782015b66c1011b0034","parentId":"ff8080815b64e782015b66bae7a80022","name":"其他英语培训","onoff":0,"price":50.0,"list":[]}]},{"nfiid":"ff8080815b64e782015b66bbc6460023","parentId":"ff8080815b64e782015b665ec87d000a","name":"学历教育","onoff":0,"price":100.0,"list":[{"nfiid":"ff8080815b64e782015b66e178b70045","parentId":"ff8080815b64e782015b66bbc6460023","name":"高等教育","onoff":0,"price":100.0,"list":[]},{"nfiid":"ff8080815b64e782015b66e1b1530046","parentId":"ff8080815b64e782015b66bbc6460023","name":"MBA","onoff":0,"price":100.0,"list":[]},{"nfiid":"ff8080815b64e782015b66ead6e40053","parentId":"ff8080815b64e782015b66bbc6460023","name":"中等教育","onoff":0,"price":100.0,"list":[]}]},{"nfiid":"ff8080815b64e782015b66bd1ec00025","parentId":"ff8080815b64e782015b665ec87d000a","name":"文体艺术","onoff":0,"price":75.0,"list":[{"nfiid":"ff8080815b64e782015b66ec08390056","parentId":"ff8080815b64e782015b66bd1ec00025","name":"美术培训","onoff":0,"price":75.0,"list":[]},{"nfiid":"ff8080815b64e782015b66ec2d550057","parentId":"ff8080815b64e782015b66bd1ec00025","name":"书法培训","onoff":0,"price":75.0,"list":[]},{"nfiid":"ff8080815b64e782015b66ec8d380058","parentId":"ff8080815b64e782015b66bd1ec00025","name":"舞蹈培训","onoff":0,"price":75.0,"list":[]},{"nfiid":"ff8080815b64e782015b66ecb0610059","parentId":"ff8080815b64e782015b66bd1ec00025","name":"跆拳道培训","onoff":0,"price":75.0,"list":[]},{"nfiid":"ff8080815b64e782015b66ecd49f005a","parentId":"ff8080815b64e782015b66bd1ec00025","name":"乐器培训","onoff":0,"price":75.0,"list":[]},{"nfiid":"ff8080815b64e782015b66ecf8a9005b","parentId":"ff8080815b64e782015b66bd1ec00025","name":"球类培训","onoff":0,"price":75.0,"list":[]},{"nfiid":"ff8080815b64e782015b66ed1950005c","parentId":"ff8080815b64e782015b66bd1ec00025","name":"健身俱乐部","onoff":0,"price":75.0,"list":[]},{"nfiid":"ff8080815b64e782015b66ed3ae4005d","parentId":"ff8080815b64e782015b66bd1ec00025","name":"表演培训","onoff":0,"price":75.0,"list":[]},{"nfiid":"ff8080815b64e782015b66ed5aad005e","parentId":"ff8080815b64e782015b66bd1ec00025","name":"声乐培训","onoff":0,"price":75.0,"list":[]},{"nfiid":"ff8080815b64e782015b66ed83a8005f","parentId":"ff8080815b64e782015b66bd1ec00025","name":"模特礼仪培训","onoff":0,"price":75.0,"list":[]},{"nfiid":"ff8080815b64e782015b66eda38b0060","parentId":"ff8080815b64e782015b66bd1ec00025","name":"棋牌培训","onoff":0,"price":75.0,"list":[]},{"nfiid":"ff8080815b64e782015b66edc9a60061","parentId":"ff8080815b64e782015b66bd1ec00025","name":"瑜伽培训","onoff":0,"price":75.0,"list":[]},{"nfiid":"ff8080815b64e782015b66edf0490062","parentId":"ff8080815b64e782015b66bd1ec00025","name":"武术培训","onoff":0,"price":75.0,"list":[]},{"nfiid":"ff8080815b64e782015b66ee12400063","parentId":"ff8080815b64e782015b66bd1ec00025","name":"其他培训","onoff":0,"price":75.0,"list":[]}]},{"nfiid":"ff8080815b64e782015b66bd91280027","parentId":"ff8080815b64e782015b665ec87d000a","name":"出国留学","onoff":0,"price":200.0,"list":[{"nfiid":"ff8080815b64e782015b66f106460072","parentId":"ff8080815b64e782015b66bd91280027","name":"欧洲留学","onoff":0,"price":200.0,"list":[]},{"nfiid":"ff8080815b64e782015b66f123af0073","parentId":"ff8080815b64e782015b66bd91280027","name":"美国留学","onoff":0,"price":200.0,"list":[]},{"nfiid":"ff8080815b64e782015b66f145540074","parentId":"ff8080815b64e782015b66bd91280027","name":"加拿大留学","onoff":0,"price":200.0,"list":[]},{"nfiid":"ff8080815b64e782015b66f165ef0075","parentId":"ff8080815b64e782015b66bd91280027","name":"日韩留学","onoff":0,"price":200.0,"list":[]},{"nfiid":"ff8080815b64e782015b66f18e340076","parentId":"ff8080815b64e782015b66bd91280027","name":"新加坡留学","onoff":0,"price":200.0,"list":[]},{"nfiid":"ff8080815b64e782015b66f1b0740077","parentId":"ff8080815b64e782015b66bd91280027","name":"澳大利亚留学","onoff":0,"price":200.0,"list":[]},{"nfiid":"ff8080815b64e782015b66f1cf0f0078","parentId":"ff8080815b64e782015b66bd91280027","name":"留学预科","onoff":0,"price":200.0,"list":[]},{"nfiid":"ff8080815b64e782015b66f1ea600079","parentId":"ff8080815b64e782015b66bd91280027","name":"国际游学","onoff":0,"price":200.0,"list":[]},{"nfiid":"ff8080815b64e782015b66f209ae007a","parentId":"ff8080815b64e782015b66bd91280027","name":"其他国家留学","onoff":0,"price":200.0,"list":[]}]},{"nfiid":"ff8080815b64e782015b66be12de0029","parentId":"ff8080815b64e782015b665ec87d000a","name":"小语种培训","onoff":0,"price":150.0,"list":[{"nfiid":"ff8080815b64e782015b66f438940084","parentId":"ff8080815b64e782015b66be12de0029","name":"日语培训","onoff":0,"price":150.0,"list":[]},{"nfiid":"ff8080815b64e782015b66f459e00085","parentId":"ff8080815b64e782015b66be12de0029","name":"韩语培训","onoff":0,"price":150.0,"list":[]},{"nfiid":"ff8080815b64e782015b66f48c300086","parentId":"ff8080815b64e782015b66be12de0029","name":"法语培训","onoff":0,"price":150.0,"list":[]},{"nfiid":"ff8080815b64e782015b66f4a84f0087","parentId":"ff8080815b64e782015b66be12de0029","name":"德语培训","onoff":0,"price":150.0,"list":[]},{"nfiid":"ff8080815b64e782015b66f4c7270088","parentId":"ff8080815b64e782015b66be12de0029","name":"俄语培训","onoff":0,"price":150.0,"list":[]},{"nfiid":"ff8080815b64e782015b66f4e76c0089","parentId":"ff8080815b64e782015b66be12de0029","name":"意大利语培训","onoff":0,"price":150.0,"list":[]},{"nfiid":"ff8080815b64e782015b66f506ef008a","parentId":"ff8080815b64e782015b66be12de0029","name":"西班牙语培训","onoff":0,"price":150.0,"list":[]},{"nfiid":"ff8080815b64e782015b66f5256b008b","parentId":"ff8080815b64e782015b66be12de0029","name":"其他语种培训","onoff":0,"price":150.0,"list":[]}]},{"nfiid":"ff8080815b64e782015b66bec514002b","parentId":"ff8080815b64e782015b665ec87d000a","name":"财经/会计","onoff":0,"price":150.0,"list":[{"nfiid":"ff8080815b64e782015b66f9ebc20094","parentId":"ff8080815b64e782015b66bec514002b","name":"会计全科","onoff":0,"price":150.0,"list":[]},{"nfiid":"ff8080815b64e782015b66fa2b5b0095","parentId":"ff8080815b64e782015b66bec514002b","name":"会计证培训","onoff":0,"price":150.0,"list":[]},{"nfiid":"ff8080815b64e782015b66fa502a0096","parentId":"ff8080815b64e782015b66bec514002b","name":"注册会计师培训","onoff":0,"price":150.0,"list":[]},{"nfiid":"ff8080815b64e782015b66fa7b120097","parentId":"ff8080815b64e782015b66bec514002b","name":"会计职称培训","onoff":0,"price":150.0,"list":[]},{"nfiid":"ff8080815b64e782015b66fa982f0098","parentId":"ff8080815b64e782015b66bec514002b","name":"报关员培训","onoff":0,"price":150.0,"list":[]},{"nfiid":"ff8080815b64e782015b66fabb560099","parentId":"ff8080815b64e782015b66bec514002b","name":"证券从业培训","onoff":0,"price":150.0,"list":[]},{"nfiid":"ff8080815b64e782015b66faeb5e009a","parentId":"ff8080815b64e782015b66bec514002b","name":"审计师培训","onoff":0,"price":150.0,"list":[]},{"nfiid":"ff8080815b64e782015b66fb1483009b","parentId":"ff8080815b64e782015b66bec514002b","name":"其他培训","onoff":0,"price":150.0,"list":[]}]},{"nfiid":"ff8080815b64e782015b66bf20d7002d","parentId":"ff8080815b64e782015b665ec87d000a","name":"IT培训","onoff":0,"price":150.0,"list":[{"nfiid":"ff8080815b64e782015b66fcfc1b00a5","parentId":"ff8080815b64e782015b66bf20d7002d","name":"网络工程师培训","onoff":0,"price":150.0,"list":[]},{"nfiid":"ff8080815b64e782015b66fd179100a6","parentId":"ff8080815b64e782015b66bf20d7002d","name":"软件工程师培训","onoff":0,"price":150.0,"list":[]},{"nfiid":"ff8080815b64e782015b66fd390800a7","parentId":"ff8080815b64e782015b66bf20d7002d","name":"网络营销培训","onoff":0,"price":150.0,"list":[]},{"nfiid":"ff8080815b64e782015b66fd563300a8","parentId":"ff8080815b64e782015b66bf20d7002d","name":"动漫游戏开发培训","onoff":0,"price":150.0,"list":[]},{"nfiid":"ff8080815b64e782015b66fd719600aa","parentId":"ff8080815b64e782015b66bf20d7002d","name":"数据库培训","onoff":0,"price":150.0,"list":[]},{"nfiid":"ff8080815b64e782015b66fd8de200ab","parentId":"ff8080815b64e782015b66bf20d7002d","name":"Java认证培训","onoff":0,"price":150.0,"list":[]},{"nfiid":"ff8080815b64e782015b66fdb00500ac","parentId":"ff8080815b64e782015b66bf20d7002d","name":"Linux认证培训","onoff":0,"price":150.0,"list":[]},{"nfiid":"ff8080815b64e782015b66fdcbbf00ad","parentId":"ff8080815b64e782015b66bf20d7002d","name":"其他IT培训","onoff":0,"price":150.0,"list":[]}]},{"nfiid":"ff8080815b64e782015b66bf8631002f","parentId":"ff8080815b64e782015b665ec87d000a","name":"职业技能","onoff":0,"price":150.0,"list":[{"nfiid":"ff8080815b64e782015b66ff2a6900b6","parentId":"ff8080815b64e782015b66bf8631002f","name":"就业培训","onoff":0,"price":150.0,"list":[]},{"nfiid":"ff8080815b64e782015b66ff476000b7","parentId":"ff8080815b64e782015b66bf8631002f","name":"美容美发培训","onoff":0,"price":150.0,"list":[]},{"nfiid":"ff8080815b64e782015b66ff63bf00b8","parentId":"ff8080815b64e782015b66bf8631002f","name":"摄影培训","onoff":0,"price":150.0,"list":[]},{"nfiid":"ff8080815b64e782015b66ff7d1d00b9","parentId":"ff8080815b64e782015b66bf8631002f","name":"数控培训","onoff":0,"price":150.0,"list":[]},{"nfiid":"ff8080815b64e782015b66ff991e00ba","parentId":"ff8080815b64e782015b66bf8631002f","name":"汽车维修/美容培训","onoff":0,"price":150.0,"list":[]},{"nfiid":"ff8080815b64e782015b66ffb4bc00bb","parentId":"ff8080815b64e782015b66bf8631002f","name":"其他技能培训","onoff":0,"price":150.0,"list":[]},{"nfiid":"ff8080815b64e782015b66ffdf8400bd","parentId":"ff8080815b64e782015b66bf8631002f","name":"餐饮培训","onoff":0,"price":150.0,"list":[]},{"nfiid":"ff8080815b64e782015b670004af00be","parentId":"ff8080815b64e782015b66bf8631002f","name":"设计培训","onoff":0,"price":150.0,"list":[]}]}]},{"nfiid":"ff8080815b64e782015b66a80c740014","parentId":"","name":"金融行业","onoff":0,"price":0.0,"list":[{"nfiid":"05fc3cbd-b09e-4925-bc14-adb47da8808d","parentId":"ff8080815b64e782015b66a80c740014","name":"保险","onoff":0,"price":100.0,"list":[]},{"nfiid":"534cfa5a-80ec-43ea-955d-0f44af7c6e91","parentId":"ff8080815b64e782015b66a80c740014","name":"基金","onoff":0,"price":100.0,"list":[]},{"nfiid":"5645383b-8732-43ca-9575-4449c5188c05","parentId":"ff8080815b64e782015b66a80c740014","name":"投资银行","onoff":0,"price":100.0,"list":[]},{"nfiid":"732a1f4a-94f3-4d72-8911-cd26547638fd","parentId":"ff8080815b64e782015b66a80c740014","name":"银行","onoff":0,"price":100.0,"list":[]},{"nfiid":"a2718e7e-cdfa-4973-9ba3-e1374a4c84a9","parentId":"ff8080815b64e782015b66a80c740014","name":"财务公司","onoff":0,"price":100.0,"list":[]},{"nfiid":"c378bcb7-7c01-4b55-9ef8-9625f3b8c0de","parentId":"ff8080815b64e782015b66a80c740014","name":"证券","onoff":0,"price":100.0,"list":[]},{"nfiid":"d1793a14-0bbc-4a83-95af-782313186785","parentId":"ff8080815b64e782015b66a80c740014","name":"信托","onoff":0,"price":100.0,"list":[]}]},{"nfiid":"ff8080815b64e782015b66a7ef8f0013","parentId":"","name":"汽车行业","onoff":0,"price":0.0,"list":[{"nfiid":"1ac44c00-318c-455a-b731-66a67c2bb6f2","parentId":"ff8080815b64e782015b66a7ef8f0013","name":"汽车美容","onoff":0,"price":100.0,"list":[]},{"nfiid":"2a64ff3a-277b-4730-9904-0bfc63d2f8ed","parentId":"ff8080815b64e782015b66a7ef8f0013","name":"汽车维修","onoff":0,"price":100.0,"list":[]},{"nfiid":"37f864c0-68e8-4fad-9b3c-4bf6396b6aa8","parentId":"ff8080815b64e782015b66a7ef8f0013","name":"汽车装饰","onoff":0,"price":100.0,"list":[]},{"nfiid":"3e3f2ac2-e8d7-48a0-a7b4-f977a8954b14","parentId":"ff8080815b64e782015b66a7ef8f0013","name":"汽车配件","onoff":0,"price":100.0,"list":[]},{"nfiid":"670fcb14-a989-4dcd-908f-ea9b73c71763","parentId":"ff8080815b64e782015b66a7ef8f0013","name":"驾驶学校","onoff":0,"price":100.0,"list":[]},{"nfiid":"e3dadd20-6882-4491-972c-e1150b362fb3","parentId":"ff8080815b64e782015b66a7ef8f0013","name":"整车销售","onoff":0,"price":100.0,"list":[]}]},{"nfiid":"ff8080815b64e782015b66a85e6b0015","parentId":"","name":"健康行业","onoff":0,"price":0.0,"list":[{"nfiid":"12b3f90f-fe66-4271-a181-a36f0123aa04","parentId":"ff8080815b64e782015b66a85e6b0015","name":"医药","onoff":0,"price":100.0,"list":[]},{"nfiid":"218a8492-b1df-4552-a7c4-b5d3ab3af7d8","parentId":"ff8080815b64e782015b66a85e6b0015","name":"保健","onoff":0,"price":100.0,"list":[]},{"nfiid":"26bb4929-0c59-47d8-933b-3f1cc500cb7c","parentId":"ff8080815b64e782015b66a85e6b0015","name":"健身","onoff":0,"price":100.0,"list":[]},{"nfiid":"4e664c6b-6821-4a9c-bad2-cf9098af055e","parentId":"ff8080815b64e782015b66a85e6b0015","name":"医疗器械","onoff":0,"price":100.0,"list":[]},{"nfiid":"65192b68-989f-4aff-9a9c-2bb07ee3d126","parentId":"ff8080815b64e782015b66a85e6b0015","name":"美容","onoff":0,"price":100.0,"list":[]},{"nfiid":"9514ef3f-4d4d-4986-8e97-afff5d21b486","parentId":"ff8080815b64e782015b66a85e6b0015","name":"养生","onoff":0,"price":100.0,"list":[]},{"nfiid":"caf05454-add3-4b10-b34e-40f4dae1507e","parentId":"ff8080815b64e782015b66a85e6b0015","name":"体检","onoff":0,"price":100.0,"list":[]}]},{"nfiid":"ff8080815b64e782015b66b6c30f0021","parentId":"","name":"计算机/互联网","onoff":0,"price":0.0,"list":[{"nfiid":"1589524d-00f1-46ad-b844-a12e6a6a8c49","parentId":"ff8080815b64e782015b66b6c30f0021","name":"电子商务","onoff":0,"price":100.0,"list":[]},{"nfiid":"1692127b-b358-4f0e-aed7-774130165cf2","parentId":"ff8080815b64e782015b66b6c30f0021","name":"网络游戏","onoff":0,"price":100.0,"list":[]},{"nfiid":"1dc106a5-b630-49cd-8c26-566f3e72886c","parentId":"ff8080815b64e782015b66b6c30f0021","name":"网络设备","onoff":0,"price":100.0,"list":[]},{"nfiid":"b21c4bd5-96c9-45bb-b932-12c69329b6b7","parentId":"ff8080815b64e782015b66b6c30f0021","name":"网络通讯","onoff":0,"price":100.0,"list":[]},{"nfiid":"be8b9220-924c-480b-8ee6-08f9e1bec0dc","parentId":"ff8080815b64e782015b66b6c30f0021","name":"计算机服务（系统、数据、维修）","onoff":0,"price":100.0,"list":[]},{"nfiid":"deb1d395-7af5-42c0-9bc0-097a39d57006","parentId":"ff8080815b64e782015b66b6c30f0021","name":"计算机软件","onoff":0,"price":100.0,"list":[]},{"nfiid":"ecae73ac-d12f-4d47-988a-56c49c4b34f6","parentId":"ff8080815b64e782015b66b6c30f0021","name":"计算机硬件","onoff":0,"price":100.0,"list":[]}]},{"nfiid":"ff8080815b64e782015b66b68f5b0020","parentId":"","name":"生活服务行业","onoff":0,"price":0.0,"list":[{"nfiid":"22ebe999-d9d7-43b1-b5c2-54634a97bb1d","parentId":"ff8080815b64e782015b66b68f5b0020","name":"娱乐休闲","onoff":0,"price":100.0,"list":[]},{"nfiid":"35126784-7f6d-49fe-acd9-86fcb548009f","parentId":"ff8080815b64e782015b66b68f5b0020","name":"活动策划","onoff":0,"price":100.0,"list":[]},{"nfiid":"971d1d98-56a1-4098-a459-63ab993ab3b5","parentId":"ff8080815b64e782015b66b68f5b0020","name":"餐饮","onoff":0,"price":100.0,"list":[]},{"nfiid":"9bcec45d-bcec-497a-81e2-12be4c83cc77","parentId":"ff8080815b64e782015b66b68f5b0020","name":"酒店","onoff":0,"price":100.0,"list":[]},{"nfiid":"dd2b33db-727e-452b-8fec-535698a0e02a","parentId":"ff8080815b64e782015b66b68f5b0020","name":"旅游","onoff":0,"price":100.0,"list":[]}]},{"nfiid":"2cd8213d-e8f3-44f9-8824-da1f1695032d","parentId":"","name":"交通/运输/物流","onoff":0,"price":0.0,"list":[{"nfiid":"1cea7cee-b690-41db-99cb-ec4f5904c13b","parentId":"2cd8213d-e8f3-44f9-8824-da1f1695032d","name":"仓储","onoff":0,"price":100.0,"list":[]},{"nfiid":"2caa57e0-b51b-4852-9770-8631655dbd2a","parentId":"2cd8213d-e8f3-44f9-8824-da1f1695032d","name":"铁路运输业","onoff":0,"price":100.0,"list":[]},{"nfiid":"3a5d2bf0-cd98-4bd7-9bc6-1850e958bb20","parentId":"2cd8213d-e8f3-44f9-8824-da1f1695032d","name":"航空运输业","onoff":0,"price":100.0,"list":[]},{"nfiid":"7c34588c-c4cb-4afc-b603-45456507e61f","parentId":"2cd8213d-e8f3-44f9-8824-da1f1695032d","name":"快递","onoff":0,"price":100.0,"list":[]},{"nfiid":"c8c3697b-fa91-4387-b251-8e89e1051e91","parentId":"2cd8213d-e8f3-44f9-8824-da1f1695032d","name":"水路运输业","onoff":0,"price":100.0,"list":[]},{"nfiid":"d54b746a-c90e-4b24-aedc-114edb2393c7","parentId":"2cd8213d-e8f3-44f9-8824-da1f1695032d","name":"公路运输业","onoff":0,"price":100.0,"list":[]}]},{"nfiid":"d15486f1-dd05-4f1b-bce0-cb3ea0b8d054","parentId":"","name":"房地产行业","onoff":0,"price":0.0,"list":[{"nfiid":"2e86ed35-ad90-476e-b4a9-cf6d8eedd3ab","parentId":"d15486f1-dd05-4f1b-bce0-cb3ea0b8d054","name":"房地产经营","onoff":0,"price":100.0,"list":[]},{"nfiid":"383e9ea3-f6f5-4868-8889-ef712c7e16c5","parentId":"d15486f1-dd05-4f1b-bce0-cb3ea0b8d054","name":"房地产开发","onoff":0,"price":100.0,"list":[]},{"nfiid":"84cae5be-201a-4bc3-b817-be6821f62060","parentId":"d15486f1-dd05-4f1b-bce0-cb3ea0b8d054","name":"房地产中介服务","onoff":0,"price":100.0,"list":[]},{"nfiid":"c8df9365-ef6d-4ace-81ae-f0aaabe3c0f7","parentId":"d15486f1-dd05-4f1b-bce0-cb3ea0b8d054","name":"物业管理","onoff":0,"price":100.0,"list":[]}]},{"nfiid":"13f3e631-fe6c-48cb-ad99-068df665126d","parentId":"","name":"媒体传播","onoff":0,"price":0.0,"list":[{"nfiid":"14cf2c4a-e449-4718-afd9-81a127474098","parentId":"13f3e631-fe6c-48cb-ad99-068df665126d","name":"广告","onoff":0,"price":100.0,"list":[]},{"nfiid":"3bdfac5c-8943-4431-a3ce-b6780dccd709","parentId":"13f3e631-fe6c-48cb-ad99-068df665126d","name":"互联网传播","onoff":0,"price":100.0,"list":[]},{"nfiid":"558edc59-7d7a-4cce-97ef-95ea59d45923","parentId":"13f3e631-fe6c-48cb-ad99-068df665126d","name":"广播","onoff":0,"price":100.0,"list":[]},{"nfiid":"99a01871-1529-4f71-9e9b-c7b4a23cd7fd","parentId":"13f3e631-fe6c-48cb-ad99-068df665126d","name":"电视","onoff":0,"price":100.0,"list":[]},{"nfiid":"d7700d1f-d10f-49ec-b68f-04a9dee28e66","parentId":"13f3e631-fe6c-48cb-ad99-068df665126d","name":"出版/印刷","onoff":0,"price":100.0,"list":[]}]},{"nfiid":"f153b05e-94d0-4a37-9fb3-e2d721a6ecad","parentId":"","name":"法律","onoff":0,"price":0.0,"list":[{"nfiid":"7c5c43c2-7394-43e8-9fe3-ce5d0b222bd5","parentId":"f153b05e-94d0-4a37-9fb3-e2d721a6ecad","name":"法律咨询","onoff":0,"price":100.0,"list":[]},{"nfiid":"b30434ae-5029-408c-b2dd-ce532172c53b","parentId":"f153b05e-94d0-4a37-9fb3-e2d721a6ecad","name":"互联网传播","onoff":0,"price":100.0,"list":[]}]},{"nfiid":"383d071f-4ceb-4363-b47f-95eba10675d2","parentId":"","name":"批发/零售","onoff":0,"price":0.0,"list":[{"nfiid":"495fae29-2f51-46ca-a869-e2fedffee9f7","parentId":"383d071f-4ceb-4363-b47f-95eba10675d2","name":"日化用品","onoff":0,"price":100.0,"list":[]},{"nfiid":"54530858-6585-4855-92d8-b787eab23f27","parentId":"383d071f-4ceb-4363-b47f-95eba10675d2","name":"服装","onoff":0,"price":100.0,"list":[]},{"nfiid":"6694561b-6e76-47a4-8f6f-8b863edb18a9","parentId":"383d071f-4ceb-4363-b47f-95eba10675d2","name":"办公用品","onoff":0,"price":100.0,"list":[]},{"nfiid":"907d82ad-ac46-4597-bd91-4e3153bbd666","parentId":"383d071f-4ceb-4363-b47f-95eba10675d2","name":"耐用消费品（家具/家电等）","onoff":0,"price":100.0,"list":[]},{"nfiid":"c71c07d8-0b68-44d4-b56f-698d7a3ed335","parentId":"383d071f-4ceb-4363-b47f-95eba10675d2","name":"快速消费品（食品/饮料等）","onoff":0,"price":100.0,"list":[]}]},{"nfiid":"ba9be090-0447-4f19-a083-ffcb7fa50989","parentId":"","name":"通信行业","onoff":0,"price":0.0,"list":[{"nfiid":"e4bafddb-625a-44bc-8f92-1037a5f0305f","parentId":"ba9be090-0447-4f19-a083-ffcb7fa50989","name":"运营商服务","onoff":0,"price":100.0,"list":[]}]},{"nfiid":"46e25b01-d0a9-4bd6-ac8b-f059a7e36251","parentId":"","name":"家居行业","onoff":0,"price":0.0,"list":[{"nfiid":"5e1cbc0c-5931-4317-bcfd-b7bd30885f52","parentId":"46e25b01-d0a9-4bd6-ac8b-f059a7e36251","name":"家饰","onoff":0,"price":100.0,"list":[]},{"nfiid":"918a12f7-1b8a-4ac1-a47b-28040d2b16d7","parentId":"46e25b01-d0a9-4bd6-ac8b-f059a7e36251","name":"房屋装修","onoff":0,"price":100.0,"list":[]},{"nfiid":"a4c015a6-ed35-4fc0-a83f-6a413143e8f8","parentId":"46e25b01-d0a9-4bd6-ac8b-f059a7e36251","name":"室内设计","onoff":0,"price":100.0,"list":[]},{"nfiid":"c00764f7-40f5-42bd-b3f8-b4aecc5b6dd4","parentId":"46e25b01-d0a9-4bd6-ac8b-f059a7e36251","name":"家居建材","onoff":0,"price":100.0,"list":[]}]},{"nfiid":"3e7fc980-f288-470c-a8d4-4a14c91423e5","parentId":"","name":"贸易行业","onoff":0,"price":0.0,"list":[{"nfiid":"2fd6b1f6-f156-407b-81b0-246e5407a301","parentId":"3e7fc980-f288-470c-a8d4-4a14c91423e5","name":"工贸","onoff":0,"price":100.0,"list":[]},{"nfiid":"3250a456-a27a-4709-9910-c0d2c2255ff1","parentId":"3e7fc980-f288-470c-a8d4-4a14c91423e5","name":"贸易","onoff":0,"price":100.0,"list":[]},{"nfiid":"9765a7d9-ce1c-4c8d-9cff-404b17984622","parentId":"3e7fc980-f288-470c-a8d4-4a14c91423e5","name":"国际贸易","onoff":0,"price":100.0,"list":[]},{"nfiid":"e7a6c8bd-a4b9-490b-b52c-24f7af441ff6","parentId":"3e7fc980-f288-470c-a8d4-4a14c91423e5","name":"商贸","onoff":0,"price":100.0,"list":[]},{"nfiid":"febd6008-6de0-4c5c-b7db-ca99d4f15947","parentId":"3e7fc980-f288-470c-a8d4-4a14c91423e5","name":"经贸发展","onoff":0,"price":100.0,"list":[]}]},{"nfiid":"8007e937-217d-44f9-b818-f8ddd103e8b9","parentId":"","name":"工业","onoff":0,"price":0.0,"list":[{"nfiid":"080c5b44-c0c8-4c2c-afd7-e57ae1358274","parentId":"8007e937-217d-44f9-b818-f8ddd103e8b9","name":"原料加工","onoff":0,"price":100.0,"list":[]},{"nfiid":"22f3966f-5370-4dad-9cf9-6ceca7b45d33","parentId":"8007e937-217d-44f9-b818-f8ddd103e8b9","name":"钢铁","onoff":0,"price":100.0,"list":[]},{"nfiid":"33b49314-f2da-4c6f-a500-25e0971058cb","parentId":"8007e937-217d-44f9-b818-f8ddd103e8b9","name":"采掘","onoff":0,"price":100.0,"list":[]},{"nfiid":"33fb7232-c893-4731-b55e-b4ea67f73c35","parentId":"8007e937-217d-44f9-b818-f8ddd103e8b9","name":"冶炼","onoff":0,"price":100.0,"list":[]},{"nfiid":"5bb1178e-36ea-4763-82b4-247da8bbef68","parentId":"8007e937-217d-44f9-b818-f8ddd103e8b9","name":"纺织","onoff":0,"price":100.0,"list":[]},{"nfiid":"6cf78b0b-712a-4b3d-801e-3c978d4e1e3e","parentId":"8007e937-217d-44f9-b818-f8ddd103e8b9","name":"机械","onoff":0,"price":100.0,"list":[]},{"nfiid":"a947ee67-00e7-4b95-945c-5cb9173b5ca0","parentId":"8007e937-217d-44f9-b818-f8ddd103e8b9","name":"化工","onoff":0,"price":100.0,"list":[]}]},{"nfiid":"c5ca935d-8bfa-4b5a-80c1-4751ecd9979f","parentId":"","name":"人力资源服务","onoff":0,"price":0.0,"list":[{"nfiid":"1b9cbb7c-5292-4a02-9420-ab8f7ad1bec0","parentId":"c5ca935d-8bfa-4b5a-80c1-4751ecd9979f","name":"人才市场","onoff":0,"price":100.0,"list":[]},{"nfiid":"3bb2bf98-1ebf-4a0d-8b52-1059bd01ef35","parentId":"c5ca935d-8bfa-4b5a-80c1-4751ecd9979f","name":"招聘网站","onoff":0,"price":100.0,"list":[]},{"nfiid":"ff20a81b-52b3-4dcb-a76b-bc30f03333ea","parentId":"c5ca935d-8bfa-4b5a-80c1-4751ecd9979f","name":"劳务服务","onoff":0,"price":100.0,"list":[]}]},{"nfiid":"7f25f5e6-4b31-4239-bd02-8b4ff17c8810","parentId":"","name":"电子技术","onoff":0,"price":0.0,"list":[{"nfiid":"2f4c11be-7065-440f-a2bc-3c9a6a9a1744","parentId":"7f25f5e6-4b31-4239-bd02-8b4ff17c8810","name":"仪器仪表","onoff":0,"price":100.0,"list":[]},{"nfiid":"ad61afff-b3ce-4d82-8d29-b0d118dc4aad","parentId":"7f25f5e6-4b31-4239-bd02-8b4ff17c8810","name":"半导体/集成电路","onoff":0,"price":100.0,"list":[]},{"nfiid":"fbb4ac9e-453c-4519-934f-3924994626a6","parentId":"7f25f5e6-4b31-4239-bd02-8b4ff17c8810","name":"工业自动化","onoff":0,"price":100.0,"list":[]}]},{"nfiid":"c1265c7a-2cc2-4881-8619-9274c4176be1","parentId":"","name":"环保行业","onoff":0,"price":0.0,"list":[{"nfiid":"521b863e-3822-4b65-b2cb-d33548631891","parentId":"c1265c7a-2cc2-4881-8619-9274c4176be1","name":"环保产品","onoff":0,"price":100.0,"list":[]},{"nfiid":"9f2b6291-368b-43c2-9cb9-6de84ce40c31","parentId":"c1265c7a-2cc2-4881-8619-9274c4176be1","name":"环保服务","onoff":0,"price":100.0,"list":[]}]},{"nfiid":"ff8080815b64e782015b66b67603001f","parentId":"","name":"其他行业","onoff":0,"price":0.0,"list":[]}]}});
		
		//debugger;
		$.when($.ajax({
			url:url,
			data:{onoff:0}
		})).then(function (data){
			//debugger;
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
			//debugger;
			var leavalFirst = $(target).parent()[0].className;
			//console.log(leavalFirst);
			
			if(!(leavalFirst == 'leavalFirst' || leavalFirst == 'leavalThen' || leavalFirst == 'leaval-box')){
				this.rootEl.find('.leavalFirst').hide();
				this.rootEl.find('.leavalThen').hide();
			}
			
			
			if(leavalFirst == 'input js_input task-select')return;
			console.log(target,leavalFirst);
			//click js_key
			if(!(leavalFirst == 'click js_key current' || leavalFirst == 's-citys1 click' || leavalFirst == 'hot' || leavalFirst == 'click current' 
			|| leavalFirst == 'citytop' || leavalFirst == 'area-box' || leavalFirst == 'list' || leavalFirst == 'click js_key' || 
			leavalFirst == 'js_key_current')){
				$('.area-box').hide();
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
			$('.leavalFirst li').removeClass('current');
			$(target).addClass('current');
			
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
			$('.leavalThen li').removeClass('current');
			$(target).addClass('current');	
			var _value = $(target).html();
			IndustryValue += '/'+_value;
			this.rootEl.find('.leaval-box input').val(IndustryValue);
			var dataNfild = $(target).attr('data-nfiid')
			this.rootEl.find('.leaval-box input').attr('data-nfiid',dataNfild);
			
			/*验证是否选过*/
			if($('.industry.select.area.js_area').val()){
				$('.error.industry-one').hide();
			}else{
				$('.error.industry-one').show();
			}

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
					<label className="selectIndustry">选择行业:</label>
					<div className="leaval-box">
							
							<input type="text" data-nfiid={0} data-value={0} readOnly="readonly" className="search-industry industry select area js_area" data-txt={" "} placeholder="请选择您的产品所属行业" title="" />
							<p className="error industry-one">请选择行业！</p>
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

/*优化页面的加载进度*/
import AsideBar from '../../../html/js/asideBar.js';
import Headercustomer from '../../../html/js/header-customer.js';
import Footer  from '../../../html/js/footer.js';

React.render(<Industry />,$('.content')[0]);

/*POST /quality/acquirecustsources*/