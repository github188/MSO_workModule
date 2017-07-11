
function autocompleteCity(cities){
	$('.city_name').autocomplete(cities, {
		max: 12, //列表里的条目数
		minChars: 0, //自动完成激活之前填入的最小字符
		width: 240, //提示的宽度，溢出隐藏
		scrollHeight: 300, //提示的高度，溢出显示滚动条
		matchContains: true, //包含匹配，就是data参数里的数据，是否只要包含文本框里的数据就显示
		autoFill: false, //自动填充
		formatItem: function(row, i, max) {
			return row.name + '（'+row.pinyin+'）';
		},
		formatMatch: function(row, i, max) {
			return row.match;
		},
		formatResult: function(row) {
			return row.name;
		},resultsClass:'search-text'
	}).result(function(event, row, formatted) {
		$('.area-box').hide();
		$('.areaList .select.area.js_area').val(row.name);
		$('.areaList .select.area.js_area').change().blur();
	});
}


			
function choosedCity(){
	var arr = [];
	$('.choosedCity li').map(function (index,data){
		var regionId = $(data).attr('data-regionid');
		arr.push(regionId);
		
	});
	
	$('#s-citys1 li').map(function (index,data){
		var regionId = $(data).attr('data-regionid');
		for(var k=0;k<arr.length;k++){
			if(arr[k]==regionId){
				$(data).addClass('current');
			}
		}
	});
}
			
			

class Textarea extends React.Component{
	constructor(props) {
		super(props);
			this.state = {
			hotCity:[{name:"北京",regionId:52},{name:"上海",regionId:321},{name:"广州",regionId:76},
					{name:"深圳",regionId:77},{name:"杭州",regionId:383},{name:"苏州",regionId:221},
					{name:"南京",regionId:220},{name:"成都",regionId:322},{name:"重庆",regionId:394},
					{name:"天津",regionId:343}],
			hotCityHtml:'',
			cityTop:['ABC','DEF','GHI','JKL','MNO','PQR','STUV','WXYZ',],
			cityTopHtml:'',
			chooseCity:'',
			chooseCityHtml:'',
			provinceData:'',
			provinceHtml:'',
			controlVar:'city',/*默认city*/
			areaData:'',
			areaTtml:'',
			countNumber:[true],
			areaLength:1,
			cities:[],
			/*city province area defined*/
		};
		
	}
	componentDidMount(){
		this.rootEl = $(".areaList");
		/*热门城市*/
		this.setState({hotCityHtml:this.createHotCity()});
		/*头部*/
		this.setState({cityTopHtml:this.createCityTop()});
		
			/*获取选择城市数据*/
			
		
	
		this.getChooseCityData(function (data){
			this.setState({chooseCity:data});
			/*第一次默认abc*/
			this.setState({chooseCityHtml:this.createChooseCity(['A','B','C'])});
			
			
			
			//debugger;
			/*添加自动获取*/
				
			var cityList={};
			var cities= [];

			data.map(function(result,index){
				  for(var key in result){
					if(isNull(cityList[key])){
					   cityList[key]=[];
					}
					cityList[key].push(result[key]);

					var city={
					 "name": result[key].regionName,
					 "match": result[key].regionName+"|"+result[key].regionPinyyin+"|"+result[key].regionPy,
					 "pinyin": result[key].regionPinyyin,
					 "sanzima": result[key].regionPy
					}
					cities.push(city);
				  }
			});
			
			//debugger;
			
			this.setState({
				cities:cities,
			})
			autocompleteCity(this.state.cities);
			
		}.bind(this));
		
		
		
		/*开始选择*/
		this.chooseTypeCityEvent(function (data){
			this.setState({chooseCityHtml:this.createChooseCity(data)});
			choosedCity();
		}.bind(this));
		
		this.chooseAreaCityEvent(function (data,currentType){
			if(currentType=='province'){
				this.setState({provinceHtml:data, controlVar:currentType});
			}
			if(currentType=='city' || currentType=='area' || currentType=='defined'){
				this.setState({controlVar:currentType});
			}
			autocompleteCity(this.state.cities);
		}.bind(this));	
		
		
		
		/*预加载省份数据*/
		this.getProvinceData(function (data){
			this.setState({provinceData:data});
		}.bind(this));
		/*预加载区域数据*/
		this.getAreaData(function (data){
			this.setState({areaData:data});
			this.setState({areaTtml:this.createAreaHtml()});
		}.bind(this));
		this.close();
		/*选择具体city*/
		this.chooseOnlyCity();
		this.selectAreaShow();
		this.areaChange();
		
		
		
		

		
		
		
		
		/*显示搜索模块*/
		this.rootEl.on('click','.text.city_name',function (){
			$('.search-text').show();
		}.bind(this));
		
	}
	selectAreaShow(){
		this.rootEl.on('click','.select.area.js_area',function (ev){
			var _this = this.rootEl.find(ev.currentTarget);
			this.rootEl.find('.area-box').show();
		}.bind(this))
	}
	createAreaHtml(){
		if(this.state.areaData){
			return this.state.areaData.map(function (Area,index){
				for(var key in Area){
					return (<li className="js_key">
						<a href="javascript:;">{Area[key].regionName}</a>
						<span>{Area[key].remark}</span>
					</li>);
				}
			}.bind(this));
		}
	}
	chooseOnlyCity(){
		/*hot city province area*/
		var bOk = true;
		this.rootEl.on('click','.js_key',function (ev){
				
				var lenEnd = $('.choosedCity li').length;
				
				if(lenEnd<5){
					/*跟新开关的值*/
					bOk = true;
				}
						
				var target = ev.currentTarget;
				var oValue = this.rootEl.find(target).find('a').html();
				//var valueRegoinid = this.rootEl.find(target).attr('data-regionid');
				var regionid = $(target).attr('data-regionid');
				
				/*先去掉在添加*/
				//console.log(target);
				if($(target).hasClass('current')){
					$(target).removeClass('current');
					/*去掉上面的选中的*/
					var removeRegid = $(target).attr('data-regionid');
					$('.choosedCity li').map(function (index,data){
						var hadCityValue = $(data).attr('data-regionid');
						if(removeRegid  == hadCityValue){
							$(data).remove();
						}
					});
					
					
					/*关联下面的列表的热门城市*/
					$('#s-citys1 li').map(function (index,data){
						var otherRegionId = $(data).attr('data-regionid');
						if(regionid==otherRegionId){
							//alert(otherRegionId);
							$(data).removeClass('current');
						}
					});
					
					
					/*关联热门城市的列表*/
					
					$('.mychoose li').map(function (index,data){
						var otherRegionId = $(data).attr('data-regionid');
						if(regionid==otherRegionId){
							//alert(otherRegionId);
							$(data).removeClass('current');
						}
					});
					
					
				}else{
						if(bOk){
							/*添加当前自己的current*/
							$(target).addClass('current');
							
							/*关联下面的列表的热门城市*/
							$('#s-citys1 li').map(function (index,data){
								var otherRegionId = $(data).attr('data-regionid');
								if(regionid==otherRegionId){
									//alert(otherRegionId);
									$(data).addClass('current');
								}
							});
							
							/*关联热门城市的列表*/
					
							$('.mychoose li').map(function (index,data){
								var otherRegionId = $(data).attr('data-regionid');
								if(regionid==otherRegionId){
									//alert(otherRegionId);
									$(data).addClass('current');
								}
							});
							
							
							/*添加上面的5个列表*/
							$('.choosedCity').append('<li data-regionid='+regionid+'><a href="javascript:;">'+oValue+'</a><span class="newChoosedCity"></span></li>');
							var len = $('.choosedCity li').length;
							
							if(this.props.transmitHotCity){
								if(oValue == "一线城市"){
									this.props.transmitHotCity("北京");
								}else{
									this.props.transmitHotCity(oValue);
								}
							}
							
							if(len>=5){
								bOk = false;
							}
						}
				}
				
				if($('.choosedCity li').length){
					$('.task-select  .select.area.js_area').attr('placeholder','');
				}else{
					$('.task-select  .select.area.js_area').attr('placeholder','请选择区域');
				}
				
				if(!$('.choosedCity li').length){
					$('.error.city-one').show();
				}else{
					$('.error.city-one').hide();
				}
				
				/*控制placeholder*/
				
				
				
		}.bind(this));
		
	
		this.rootEl.on('click','span.newChoosedCity',function (ev){
			var target = ev.currentTarget;
			var currentParent = $(target).parent();
			var removeregionId = $(currentParent).attr('data-regionid');
			$(currentParent).remove();
			
			/*删除下面的current*/
			$('#s-citys1 li').map(function (index,data){
				var regionId = $(data).attr('data-regionid');
				if(regionId==removeregionId){
					$(data).removeClass('current');
				}
			});
			
			$('.mychoose li').map(function (index,data){
				var regionId = $(data).attr('data-regionid');
				if(regionId==removeregionId){
					$(data).removeClass('current');
				}
			});
			
			if($('.choosedCity li').length){
					$('.task-select  .select.area.js_area').attr('placeholder','');
				}else{
					$('.task-select  .select.area.js_area').attr('placeholder','请选择区域');
			}
			
			
			if(!$('.choosedCity li').length){
				$('.error.city-one').show();
			}else{
				$('.error.city-one').hide();
			}
		}.bind(this));
	}
	areaChange(){
		$('.select.area.js_area').change(function (ev){
			var oValue = this.rootEl.find(ev.currentTarget).val();
			this.props.transmitHotCity(oValue);
		}.bind(this));
	}
	close(){
		this.rootEl.on("click","div.area ul.list i.close",function(){
			$(this).parent().parent().hide();
		});
	}
	getAreaData(callBack){
		//getBaseRegionType/4 /*area*/
		var url = domain + '/getBaseRegionType/4';
		$.when($.ajax({
			url:url
		})).then(function (data){
			if(!data.basreglist[0])return;
			callBack(data.basreglist);
		}.bind(this)).done(function (){

		}).fail(function (data){
			/*假数据*/
		});
	}
	getProvinceData(callBack){
		//getBaseRegionType/1 /*省份*/
		callBack = callBack || function (){};
		var url =  domain + '/getBaseRegionType/1';
		$.when($.ajax({
			url:url
		})).then(function (data){
			if(!data.basreglist[0])return;
			callBack(data.basreglist);
		}.bind(this)).done(function (){
		}).fail(function (){});
	}
	createHotCity(){
		/*创建热门城市*/
		return this.state.hotCity.map(function (name,index){
			return (<li data-regionid={ name.regionId } className="click js_key"><a href="javascript:;" className="click">{name.name}</a></li>);
		});
	}
	createCityTop(){
		/*头部导航城市*/
		return this.state.cityTop.map(function (name,index){
			if(index==0){
				return (<li className="current click"><a href="javascript:;" className="click">{name}</a><i></i></li>);
			}else{
				return (<li className="click"><a href="javascript:;" className="click">{name}</a><i></i></li>);
			}
		}.bind(this));
	}
	getChooseCityData(callBack){
		//getBaseRegionType/2 /*一线城市*/
		/*2 我要选城市*/
		callBack = callBack || function (){};
		var url =  domain + '/getBaseRegionType/2';
		$.when($.ajax({
			url:url,
		})).then(function (data){
			if(!data.basreglist[0])return;
				data.basreglist.map(function(result,index){
					for(var key in result){
						var city={
						 "name": result[key].regionName,
						 "match": result[key].regionName+"|"+result[key].regionPinyyin+"|"+result[key].regionPy,
						 "pinyin": result[key].regionPinyyin,
						 "sanzima": result[key].regionPy
						}
						//cities.push(city);
					}
				});
			callBack(data.basreglist);
		}.bind(this)).done(function (){
		}).fail(function (){});
	}
	createChooseCity(data){
		/*创建选择城市*/
		if(this.state.chooseCity){
			if(data.length==3){
				return this.state.chooseCity.map(function (city,index){
					for(var key in city){
						if(key === data[0] || key === data[1] || key === data[2]){
							//debugger;
							return (<li data-regionid = {city[key].regionId} title={city[key].regionName}   className="click js_key" href="javascript:;" ><a>{city[key].regionName}</a></li>);
						//	console.log(city[key].regionName);
						}
					}
				}.bind(this));
			}else{
				return this.state.chooseCity.map(function (city,index){
					for(var key in city){
						if(key === data[0] || key === data[1] || key === data[2] || key === data[3]){
							return (<li data-regionid = {city[key].regionId} data-name={city[key].regionPy} title={city[key].regionName}   className="click js_key" href="javascript:;" ><a>{city[key].regionName}</a></li>);
						//	console.log(city[key].regionName);
						}
					}
				}.bind(this));
			}
		}
	}
	chooseTypeCityEvent(callBack){
		callBack = callBack || function (){};
		this.rootEl.on('click','.citytop li.click',function (ev){
			
			var typeCity = this.rootEl.find(ev.currentTarget).find('a.click').html();
			this.rootEl.find('.citytop li.click').removeClass('current');
			this.rootEl.find(ev.currentTarget).addClass('current');
			callBack(typeCity.split(''));

		}.bind(this));
	}
	selectArea(){
		if(this.state.controlVar=='city'){
			return this.state.chooseCityHtml;
		}else if(this.state.controlVar=='province'){
			return this.state.provinceHtml;
		}else if(this.state.controlVar=='area'){
			return this.state.areaTtml;
		}
	}
	chooseAreaCityEvent(callBack){
		callBack = callBack || function (){};
		this.rootEl.on('click','.area .list li',function (ev){
			var currentType = this.rootEl.find(ev.currentTarget).attr('data-type');
			this.rootEl.find(ev.currentTarget).addClass('active').siblings().removeClass("active");
			var province = this.createprovinceTtml();
			callBack(province,currentType);
		}.bind(this));
	}
	createprovinceTtml(){
		if(this.state.provinceData){
			return this.state.provinceData.map(function (province,index){
				for(var key in province){
					return (<li data-name={province[key].regionPy} title={province[key].regionName}  className="click js_key" href="javascript:;" ><a>{province[key].regionName}</a></li>);
				}
			}.bind(this));
		}
	}
	controlStructure(){
		if(this.state.controlVar=='city'){
			return (
					<div>
						<div className="hot">
							<span>热门城市:</span>
							<ul className="list1 active mychoose">
							{this.state.hotCityHtml}
							</ul>
						</div>
						<div className="search pop search-citys-pop click cityarea">
							<input type="text" placeholder="输入拼音首字母" className="text city_name" />
							<ul className="citytop">
								{this.state.cityTopHtml}
							</ul>
						</div>
						<div className="search-citys-list click citylist">
							<div className="js_key_current">
								<ul className="s-citys1 click" id="s-citys1">{this.selectArea()}</ul>
							</div>
						</div>
					</div>
			);
		}
		if(this.state.controlVar=='province'){
			return (
					<div>
						<div className="search-citys-list click citylist">
							<div>
								<p style={{margin:"30px 0px 30px 20px"}}>请选择省份:</p>
								<ul className="s-citys1 click" id="s-citys1">{this.selectArea()}</ul>
							</div>
						</div>
					</div>
			);
		}
		if(this.state.controlVar=='area'){
			return (
					<div className="list3  active">
						<p style={{margin:"30px 0px 30px 20px"}}>请选择区域:</p>
						<ul className="area">
						{this.selectArea()}
						</ul>
					</div>
			);
		}
	}
	render(){
		var _this = this;
		return (<div className="areaList">
					<label className="selectarea">选择城市:</label>
					<div className="input js_input task-select">
						
						<input type="text" data-value={false} required=""  className={"select area js_area"} placeholder="请选择目标城市" title="" />
						<i className="select_icon"></i>
						<ul className="choosedCity"></ul>
						<i className="select_icon"></i>
						<p className="error city-one">请选择城市！</p>
						<div className="area">
							<div className={"area-box"}>
								<ul className="list">
									<li data-type="city" className="active">我要选城市</li>
									<li data-type="province">我要选省份</li>
									<li data-type="">选择城市进行搜索，最多可选择5个城市</li>
									<i className="close"></i>
								</ul>
								{_this.controlStructure()}
							</div>
						</div>
					</div>
				</div>
				);
	}
}


export default Textarea;

//transmitHotCity 对外查值函数;