import Textarea from '../../../components/textarea.jsx';


import {Slider} from 'antd';

class Demo extends React.Component {
  state = {
    disabled: false,
	nub:30,
	
  };
  handleDisabledChange = (disabled) => {
    this.setState({ disabled });
  }

 onAfterChange(value){
	// console.log(value,'--------------------------------');
 }
 componentDidMount(){
	 //console.log($('.ant-slider-handle'));
	
	 $('.ant-slider-handle').mouseout(function (){
			$('.ant-tooltip-placement-top').css({left:'-100px',top:'-100px'});
	 });
	  $('.ant-slider-handle').mouseover(function (ev){
		   $('.ant-tooltip-placement-top').css({left:'-100px',top:'-100px'});
			var targat = ev.currentTarget;
			$(targat).show();
	 });
 }
  render() {
    const { disabled } = this.state;

    return (
      <div>
        <Slider range value = {[this.props.rangeArr[0], this.props.rangeArr[1]]}  onAfterChange = {this.onAfterChange}  onChange = { this.props.change }   min={3} max={55} disabled={disabled} />
      </div>
    );
  }
}


var hotCityValue = "";
function areaList(){
	var industryValue = $('.industry.select.area.js_area').attr('data-value')*1;
	var oCountValueLabel = $('.bottom.property span.real');
	
		var arr = ['北京','上海','广州','深圳','杭州'];
		/*找出热门城市*/
		function findCity (data){
			for(var i=0;i<arr.length;i++){
				if(arr[i]==data){
					return true;
				}
			}
			return false;
		}
		
		/*统计一个类的价格*/
		function addCount(arr){
			var n = 0;
			for(var i=0,k;k=arr[i];i++){
				n+=k
			}
			return n;
		}
		
		var cityValue = 0;
		
		if(findCity(hotCityValue)){
			/*热门城市开始增加20%*/
			cityValue = (industryValue/10)*2;
		}else{
			/*不是默认城市使用0*/
			cityValue = 0;
		}

		
		/*属性统计*/
		var  neweleValue = 0;
		var newpropeValue = 0;
		var elementryArr = [];
		var propertyArr = [];
		
		var elementry  = $('.js_elementry li');
		
		var property = $('.js_property li');
		
		for(var i=0,k;k=elementry[i];i++){
			if(k.className){
				if(k.className.indexOf('current')!=-1){
					var price = $(k).attr('data-price')*1;
					elementryArr.push(price);
				}
			}
		}
		
		for(var i=0,k;k=property[i];i++){
			if(k.className){
				if(k.className.indexOf('current')!=-1){
					var dprice = $(k).attr('data-price')*1;
					propertyArr.push(dprice);
				}
			}
		}
		/*默认属性*/
	   neweleValue = addCount(elementryArr);
	   //行为属性
	   newpropeValue = addCount(propertyArr);
	   
	   
		/*人的价格*/
		var startAge = $('.people-yang input.first').val();
		var endAge =  $('.people-yang input.last').val();
		var  firstCheck = $('.people-yang input.first').data('check');
		var  laststCheck = $('.people-yang input.last').data('check');
		//console.log(firstCheck+'==firstCheck');
		//console.log(laststCheck);
		/*两个都合格了*/
		if(firstCheck && laststCheck){
			var industryValue = $('.industry.select.area.js_area').attr('data-value')*1;
		
			/*两个都合格了以后*/
			
			/*如果前面的小于等于 增加15%*/
			
			if((endAge-startAge)<5){
				//alert(endAge-startAge);
				$('.people-yang span.yuan').attr('data-value',(industryValue/10*1.5).toFixed(2));
				$('.people-yang span.yuan').html('+'+(industryValue/10*1.5).toFixed(2)+'元');
			}else{
				$('.people-yang span.yuan').attr('data-value','0');
				$('.people-yang span.yuan').html('+'+'0.00'+'元');
			}
			
		}

	  var peopleValue =  $('.people-yang span.yuan').attr('data-value')*1;

	  /*所有标签的总的价格*/	
	 
	  $('.areaList .select.area.js_area').attr('data-value',cityValue);
	  
	  
	  oCountValueLabel.html((industryValue+cityValue+neweleValue+newpropeValue+peopleValue).toFixed(2));
}



		function checkage(mark){
			//debugger;
			//debugger;
			/*先清空数据*/
			$('.people-yang span.yuan').attr('data-value','0');
			$('.people-yang span.yuan').html('+'+'0.00'+'元');
			
			/*第一个不能小于3 或者为空*/
			var startAge = $('.people-yang input.first').val();
			var endAge =  $('.people-yang input.last').val();
			
			if(!startAge){
				$('.people-yang').parent().find('p.error.first').html('请填写开始年龄！');
				$('.people-yang').parent().find('p.error.first').show();
				$('.people-yang input.first').data('check',false);
				return;
			}
			
			startAge*=1;
			
			/*第一个不能小于3 或者为空*/
			
			if(startAge<3){
				$('.people-yang').parent().find('p.error.first').show();
				$('.people-yang').parent().find('p.error.first').html('开始年龄必须大于三岁！');
				$('.people-yang input.first').data('check',false);
				return;
			}else{
				$('.people-yang input.first').data('check',true);
				$('.people-yang').parent().find('p.error.first').hide();
			}
			
			/*不能小于54*/
			
			/*开始值最大54*/
			
			if(startAge>54){
				$('.people-yang').parent().find('p.error.first').show();
				$('.people-yang').parent().find('p.error.first').html('开始年龄必须小于五十四岁！');
				$('.people-yang input.first').data('check',false);
				return;
			}else{
				$('.people-yang').parent().find('p.error.first').hide();
				$('.people-yang input.first').data('check',true);
			}
			
			
			/*结束年龄不能为空 并且不能大于55 并且不能小于前面*/
			if(!(mark=='start')){
				if(!endAge){
					$('.people-yang').parent().find('p.error.first').html('请填写结束年龄！');
					$('.people-yang').parent().find('p.error.first').show();
					$('.people-yang input.last').data('check',false);
					return;
				}
			}
			if(endAge=="0"){
				$('.people-yang').parent().find('p.error.first').html('结束年龄必须大于开始年龄');
				$('.people-yang').parent().find('p.error.first').show();
				$('.people-yang input.last').data('check',false);
				return;
			}
			endAge*=1;
			/*第一个不能大于55 或者为空*/
				
			/*不能大于55*/
			
			if(endAge>55){
				$('.people-yang').parent().find('p.error.first').show();
				$('.people-yang').parent().find('p.error.first').html('结束年龄必须小于五十五岁！');
				$('.people-yang input.last').data('check',false);
				return;
			}else{
				if(endAge){
					$('.people-yang').parent().find('p.error.first').hide();
					$('.people-yang input.last').data('check',true);
				}
			}
			
			/*结束年龄大于开始年龄*/
			//alert(endAge);
			if(endAge){
				if(endAge<startAge){
					$('.people-yang').parent().find('p.error.first').html('结束年龄必须大于开始年龄！');
					$('.people-yang').parent().find('p.error.first').show();
					$('.people-yang input.last').data('check',false);
					return;
				}else{
					$('.people-yang').parent().find('p.error.first').hide();
					$('.people-yang input.last').data('check',true);
				}
			}
		
		}


class Peoples extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			basicData:[],
			chargeData:[],
			basicHtml:'',
			chargeHtml:'',
			newValue:'0.00',
			hasValue:0,
		}
		this.sendMessage = this.sendMessage.bind(this);
	}
	componentDidMount(){
			this.getLabelData(function (data){
				var basicData = [];
				var chargeData = [];
				if(data.lableList){
					var lableList = data.lableList;
					lableList.map(function (data,index){
						if(data.labelAttribute == 1){
							basicData.push(data);
						}
						if(data.labelAttribute == 2){
							chargeData.push(data);
						}
						
					}.bind(this));
					this.setState({
						basicData:basicData,
						chargeData:chargeData
					});
					
					this.setState({
						basicHtml:this.createBasicHtml(),
						//chargeHtml:this.createChargeHtml()
					});
					
					this.setState({
						chargeHtml:this.createChargeHtml()
					});
					
					this.checkboxConpents('.js_elementry li');
					this.checkboxConpents('.js_property li');
				}
			}.bind(this));
			this.sendMessage();
			$(".close2").click(function(){
				$(".cover").hide();
			});
	}
	createBasicHtml(){
		if(this.state.basicData){
			var basicData = this.state.basicData;
			return basicData.map(function (data,index){				
				return (<li data-price = {data.labelPrice} >{data.labelName}</li>);
			});
		}
	}
	createChargeHtml(){
		if(this.state.chargeData){
			var chargeData = this.state.chargeData;
			return chargeData.map(function (data,index){
				return (<li data-price = {data.labelPrice} >{data.labelName}</li>);
			});
		}
	}
	getLabelData(callBack){
		callBack = callBack || function (){};
		//2收费标签
		var url =  domain + "/baseLabel/2";
		$.when($.ajax({
			 type: 'get',
			 contentType:'application/json',
			 url:url,
		})).then(function (data){
			if(data.code=="Y"){
				callBack(data);
			}else{
				//alert('获取数据失败了');
			}
		}).fail(function (data){
			//alert('获取数据失败了');
		});
	}
	componentWillReceiveProps(nextProps){
		//this.setState({newValue:nextProps.newValue});
		//console.log(this.state.newValue);
		
		
		/*在这里再次计算新的值*/
		/*
		var _this = this;
		var elementryArr = [];
		var propertyArr = [];
		function countLebalPrice(){
				elementryArr = [];
				propertyArr = [];
				var elementry  = $('.js_elementry li');
				
				var property = $('.js_property li');
				
				for(var i=0,k;k=elementry[i];i++){
					if(k.className){
						if(k.className.indexOf('current')!=-1){
							var price = $(k).attr('data-price')*1;
							elementryArr.push(price);
						}
					}
				}
				
				for(var i=0,k;k=property[i];i++){
					if(k.className){
						if(k.className.indexOf('current')!=-1){
							var dprice = $(k).attr('data-price')*1;
							propertyArr.push(dprice);
						}
					}
				}
			//_this.setState({newValue:nextProps.newValue});
			var  newele = addCount(elementryArr);
			var newprope = addCount(propertyArr);
			

			_this.setState({hasValue:(nextProps.newValue*1+newele+newprope)});
			document.newValue = nextProps.newValue;
			
			
		}
		
		function addCount(arr){
			var n = 0;
			for(var i=0,k;k=arr[i];i++){
				n+=k
			}
			return n;
		}
		
		
		countLebalPrice();
		*/
	}
	componentDidUpdate(nextProps, nextState){
		//console.log(this);
		//debugger; 
		//用一个值来做判断，一个值来做赋值
		console.log(nextState);
		console.log(nextProps.isValue);
		/*搞定*/
		if(nextProps.isValue){
			nextProps.isValue = false;
			//this.setState({newValue:nextProps.newValue});
			//console.log(this.state.newValue);
		}
		
		//var a = this.props.newValue;
		//this.setState({newValue:a});
	}
	checkboxConpents(obj){
		$(obj).each(function (){
			$(this).data('isCheck',true);
			$(this).click(function (){
				var data = $(this).data('isCheck');
				if(data){
					$(this).data('isCheck',false);
					$(this).addClass('current');
					
				}else{
					$(this).data('isCheck',true);
					$(this).removeClass('current');
				}
				areaList();
			});
		});
		
	}
	sendMessage(){
		
		var countJson = {};
		var industry = {};
		industry.item = {};
		var taskPeople = {};
		var _this = this;
		var city = {};
		var discrible = {};
		
		$('.send').click(function (){
			/*开始验证验证不通过不采集数据*/
			if(!$(".industry.select.area.js_area").val()){
				//debugger;
				$("p.error.industry").html("请至少选择一项行业").show();
			}else{
				$("p.error.industry").hide();
			}
			
			$("input:visible,textarea").blur();
			/*验证不通过不采集数据*/
			
			if($("p.error:visible").length!=0){
				return false;
			}
			
			var saleTem = {};
			var eleArr = [];
			var onlineDown = $('.online.onlineDown').data('isCheck');
			var onlineUp = $('.online.onlineUp').data('isCheck');
			
			if(onlineDown){
				industry.twolevindustry = "线下";
			}
			
			if(onlineUp){
				industry.twolevindustry = "线上";
			}
			
			var price = $('.industry.select.area.js_area').attr('data-value');
			var finmae = $('.industry.select.area.js_area').attr('data-txt');
			var nfiid = $('.industry.select.area.js_area').attr('data-nfiid');
			
			industry.item.price = price;
			industry.item.finmae = finmae;
			industry.item.nfiid = nfiid;
			industry.item.value = $('.industry.select.area.js_area').val();
			
			/*数据集合完毕 industry*/
			
			//js_elementry
			//js_property
			/*数据集合 saleTem*/
			
			var elementry = $('.js_elementry li');
			var property = $('.js_property li');
			
			for(var i=0,k;k=elementry[i];i++){
				eleArr.push(k);
			}
			
			
			for(var i=0,k;k=property[i];i++){
				eleArr.push(k);
			}
			

			for(var i=0,k;k=eleArr[i];i++){
				if(k.className){
					if(k.className.indexOf('current')!=-1){
						var dataPrice = $(k).attr('data-price');
						var labelName =  $(k).html();
						saleTem[labelName] = dataPrice;
					}
				}
			}
			
			/*地区集合*/
			var cityValue = $('.areaList input.select.area.js_area').val();
			
			city.city = cityValue;
			
			city.value = $('.areaList .select.area.js_area').attr('data-value',);
			//debugger;
			
			/*discrible 集合*/
			var discribleValue =  $('textarea.discrible').val();
			discrible.discrible = discribleValue;
			
			
			
			/*线上and 线下 行业 data-nfiid  data-value data-txt*/
			countJson.industry = industry;
			/*age 开始年龄 结束年龄 data-value*/
			
			/*city name*/
			//taskPeople
			
			taskPeople.startAge = $('.taskPeople input.start.first').val();
			taskPeople.endAge = $('.taskPeople input.last').val();
			taskPeople.value = $('.taskPeople span.yuan').attr('data-value');
			
			countJson.taskPeople = taskPeople;
			countJson.city = city;
			countJson.saleTem = saleTem;
			countJson.discrible = discrible;
			countJson.countPrice = $('.bottom.property span.real').html();
			
			
			sessionStorage.setItem("newDandData",JSON.stringify(countJson));
		
			if(sessionStorage.getItem("companyInfo")=="4"){
				location.href = 'new_demand.html';
			}else{
				$(".cover").show();
			}
		});
	}
	render(){
		return (
				<div className="peoples">
					<div className="task">选择目标人群标签：</div>
					<div className="elementry">
						<div className="title">基本属性</div>
						<ul className="js_elementry">
						{this.state.basicHtml}
						</ul>
					</div>
					<div className="property">
						<div className="title">行为属性</div>
						<ul className="js_property">
						{this.state.chargeHtml}
						</ul>
					</div>
				
					<div className="bottom property">
						<div className="price">
							<span className="left-name">模拟单价:</span>
							<span className="right-price">
								<span className="real">{this.state.hasValue?this.state.hasValue:this.state.newValue}</span>
								<span>元/条</span>
							</span>
						</div>
						<button className="send">立即发布需求</button>
					</div>
					<div className="cover">
						<div className="cover-box">
							<div className="title">提示<span className="close2"></span></div>
							<div className="context" style={{"lineHeight":"200px"}}>您还未进行企业认证，无法发布需求！<a href="firm-identification.html">点此进行企业认证>></a></div>
							<div className="bt-choose">
								<button type="button" className="bg_blue close2">确定</button>
							</div>
						</div>
					</div>
				</div>
				);
	}
}









class Education extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			educationData:'',
			EducationHtml:'',
			cityData:'',
			leavalLastdata:'',
			leavalLastHtml:'',
			range:[8,38]
		}
		this.countVlaue = "";
		this.transmitHotCity = this.transmitHotCity.bind(this);
		this.updataStructrue = this.updataStructrue.bind(this);
		this.selectIndustry = this.selectIndustry.bind(this);
		this.controlCrowd = this.controlCrowd.bind(this);
		this.change = this.change.bind(this);
	}
	componentDidMount(){
		this.rootEl = $('.simulation') ;
		this.selectIndustry();
		this.changeOnline();
		this.updataStructrue(0);
		this.controlCrowd();
		
		this.rootEl.on('input','.people-yang input.first',function (ev){
			var target = ev.currentTarget;
			var firstValue = $(target).val();
			//console.log(typeof firstValue);
			
			this.setState({range:[firstValue*1,$('.people-yang input.last').val()*1]});
		}.bind(this));
		
		
		this.rootEl.on('input','.people-yang input.last',function (ev){
			var target = ev.currentTarget;
			var lastValue = $(target).val();
			//console.log(typeof firstValue);
			
			this.setState({range:[$('.people-yang input.first').val()*1,lastValue*1]});
		}.bind(this));
		
	}

	updataStructrue(id){
		var dataId = id;
		/*0线下 1线上*/
		this.getEducationData(function (data){
			/*一类数据*/
			this.setState({
				educationData:data[0].list,
			});
			
			this.setState({
				EducationHtml:this.createEducation(dataId),
			});
		}.bind(this));
	}
	getEducationData(callBack){
		
		callBack = callBack || function (){};
		let url = domain137 + '/quality/getIndustryList';
		
	
	
		$.when($.ajax({
			url:url
		})).then(function (data){
			if(data.msg=='success'){
				callBack(data.data.list);
			}else{
				//alert('获取数据失败了');
			}
		}.bind(this)).done(function (data){
			//debugger;
			//console.log(2);
		}).fail(function (data){
			//alert('获取数据失败了');
		});
		
	}
	createEducation(id){
		/**/
		if(this.state.educationData){
			var educationData = this.state.educationData;
				/*0线下 1 线上*/
			return educationData.map(function (data,index){
				if(data.onoff == id){
					return (<li data-price={0} data-onoff={data.onoff} data-list={JSON.stringify(data.list)} className="leaval-ft">{data.name}</li>);
				}
			});
			
		}
	
	}
	checkboxConpents(obj){
		var _this = this;
		var arr = ['北京','上海','广州','深圳','杭州'];
		$(obj).each(function (){
			$(this).data('isCheck',true);
			
			$(this).click(function (){
				$(obj).removeClass('current');
				$(this).addClass('current');
				var price = $(this).attr('data-price');
				
				arr.map(function (name,index){
					
					if(_this.state.cityData == name){
						/*已经选了一线城市的情况*/
						price = price*1 + (price*0.2);
						_this.props.getMoney(price);
					}else{
						/*没有选一线城市的情况*/
						_this.countVlaue  = price;
						_this.props.getMoney(price);
					}
				});
			});
		});
	}
	changeOnline(){

		
		var _this = this;
		var isCurrent = false;
		var arrAdress = ['北京','上海','广州','深圳','杭州'];

		/*用来关联下面的城市选择器*/
		$('.online.onlineDown').data('isCheck',true);
		$('.online.onlineUp').data('isCheck',false);
		
		
		/*线下*/
		
		$('.online.onlineDown').click(function(){
			_this.updataStructrue(0);
			/*用来关联下面的城市选择器*/
			$('.online.onlineDown').data('isCheck',true);
			$('.online.onlineUp').data('isCheck',false);
			
			$(this).addClass('current');
			$('.online.onlineUp').removeClass('current');
			

			//$('.industry .line2').removeClass('current');
			$('.industry .line1').show();
			$('.industry .line2').hide();
			
			
			$('.industry.select.area.js_area').val('');
			$('.industry.select.area.js_area').attr('data-value','0');
			$('.industry.select.area.js_area').attr('data-txt','0');
			$('.industry.select.area.js_area').attr('data-nfiid','0');
			areaList();
		});
		
		/*线上*/
		$('.online.onlineUp').click(function(){
			_this.updataStructrue(1);
			/*用来关联下面的城市选择器*/
			$('.online.onlineUp').data('isCheck',true);
			$('.online.onlineDown').data('isCheck',false);
			
			$(this).addClass('current');
			$('.online.onlineDown').removeClass('current');
			//$('.industry .line1').removeClass('current');
			
			/*线上线下切换时变更数据*/
			
			
			$('.industry .line1').hide();
			$('.industry .line2').show();
			
			$('.industry.select.area.js_area').val('');
			$('.industry.select.area.js_area').attr('data-value','0');
			$('.industry.select.area.js_area').attr('data-txt','0');
			$('.industry.select.area.js_area').attr('data-nfiid','0');
			areaList();
		});

		
	}
	transmitHotCity(data){
		console.log(data);
		/*这个函数为了在子级 Textarea 拿到值*/
		//1是线下 2 是线上
		hotCityValue = data;
		areaList();
		this.setState({cityData:data});
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
			var _value = $(target).val();
			console.log(_value);
			if(!_value){
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
			
			if(_value){
				$(".error.industry").hide();
			}
			
			/*data-nfiid 处理行业id*/
			//debugger;
			this.rootEl.find('.leaval-box input').attr('data-nfiid',$(target).attr('data-nfiid'));
			//
			$('.people-yang input.start.first').blur();
			/*计算行业总价*/
			areaList();
			//console.log(IndustryValue);
		}.bind(this));
		
		
		
	}
	controlCrowd(){

		$('.people-yang input.first').data('check',true);		
		/*结束年龄*/
		$('.people-yang input.last').data('check',false);
		
		this.rootEl.on('blur','.people-yang input.last',function (ev){
			checkage();
			areaList();
		}.bind(this));
		
		this.rootEl.on('blur','.people-yang input.first',function (ev){
			checkage('start');
			areaList();
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
	change(value){
		this.setState({range:[value[0],value[1]]});

		$('.people-yang input.first').val(value[0]);
		$('.people-yang input.last').val(value[1]);
		checkage('start');
		areaList();
	}
	render(){
		return (
				<div className="education">
					<ul>
						<li>所属行业：</li>
						<li className="last">教育培训</li>
					</ul>
					<ul className="isOnline">
						<li>行业性质：</li>
						<li className="last" data-price={0}><label className="online current onlineDown"></label><span>线下</span></li>
						<li className="lastest" data-price={0}><label className="online onlineUp"></label><span>线上</span></li>
					</ul>
					<div className="industryDetailed">
						<span className="title">行业细分：</span>

						<div className="leaval-box">
								<p className="error industry">请至少选择一个行业！</p>
								<input type="text" data-nfiid={0} data-value={0} readOnly="readonly" className="industry select area js_area" data-txt={" "} placeholder="请选择行业" title="" />
								<ul className="leavalFirst">
									{this.state.EducationHtml}
								</ul>
								<ul className="leavalThen">
									{this.state.leavalLastHtml}
								</ul>
						</div>
						
						
					</div>
					
					<div className="taskPeople">
						<span className="title">目标人群：</span>
						<div className="people-yang">
							<Demo change={this.change} rangeArr = { this.state.range } />
							<input defaultValue="8" className="start first" type="text" />
							
							<span className="marked" >~</span>
							<input className="last" defaultValue="38" type="text"  />
							<span className="age">周岁</span>
							<span data-value={0} className="yuan">+0.00元</span>
						</div>
						
						<p className="error first task-people"  style={{"display":"none","margin-left":"92px", "margin-top":"70px"}}>结束年龄必须大于开始年龄！</p>
					</div>
					<div className="product">
						<span>产品描述：</span>
						<div>
							<textarea className="discrible" placeholder="请输入产品描述"></textarea>
						</div>
					</div>
					<Textarea transmitHotCity={this.transmitHotCity} />
				</div>
				);
	}
}





class Simulation extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			newValue:0,
			isValue:false,
		}
		this.getMoney = this.getMoney.bind(this);
	}
	componentDidMount(){
		
	}
	getMoney(data){
		this.setState({newValue:data,isValue:true});
		/*传递给子兄弟模块*/
	}
	render(){
		return (
				<div className="simulation" id="simulation">
					<div className="toptitle">
						<div className="money"></div>
						<div className="onlyPrice">获客模拟单价器</div>
						<div className="descripe">注:目前只提供教育培训行业的单价模拟</div>
					</div>
					<Education getMoney={this.getMoney}/>
					<Peoples newValue={this.state.newValue} isValue = { this.state.isValue} />
				</div>
				);
	}
}

export default Simulation;

