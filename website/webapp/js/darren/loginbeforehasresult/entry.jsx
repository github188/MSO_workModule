
	/*统一使用公共模块*/
	import {Button,Card,Slider} from 'antd';
	
	function getoptions(research){
		var currentCode = research.currentCode;
		var selecttedcity = research.citydata;
		//debugger;
		var firstword = research.industrydata.first;
		var userword = research.industrydata.second;
		var citydata = research.cityidList;
		var defaultdata = {
			lineOff:(currentCode==2)?0:currentCode,
			//这个数据需要装换
			city:citySwitch(selecttedcity,citydata,userword.id),
			twoLine:firstword,
			industry:userword
		};
		return defaultdata;
	}

	function citySwitch(data,citydata,industryId){
		var names = data.name;
		var foundcity = [];
		for(var i=0;i<names.length;i++){
			if(names[i] == "二线" || names[i] == "一线"){
				//所有的找出的城市
				foundcity.concat(findcity(names[i],citydata,foundcity));
			}
		}
		
		var findarr = names.concat(foundcity);
		
		//删除一线二线
		for(var i=0;i<findarr.length;i++){
			if(findarr[i] == "二线" || findarr[i] == "一线"){
				findarr.splice(i,1);
				i--;
			}
		}
		
		var integaratearr = [];
		findarr.map(function (item,index){
			integaratearr.push(arrsearch(citydata,item,industryId));
		});
		return integaratearr;
		//查看一下处理以后的城市
		//在看找出来的城市
	}

	//转成需要的格式
	function arrsearch(citydata,name,industryId){
		var type = {
				'一线':1,
				'二线':2,
				'三线':3,
				'四线':4,
				'五线':5,
				'六线':6,
			}
		
		for (var i=0;i<citydata.length;i++){
			if(citydata[i].city === name){
				return {
					city:citydata[i].city,
					type:type[citydata[i].tier],
					industryId:industryId
				};
			}
		}
	}

	//找二线and一线城市
	function findcity(name,citydata,foundcity){
		citydata.map(function (item,index){
			if(item.tier===name){
				foundcity.push(item.city);
			}
		});
		return foundcity;
	}
	
	var integrate =  sessionStorage.getItem('integrate');
	integrate = JSON.parse(integrate);
	var moniData  = getoptions(integrate);
	
	
	
	$(function(){
	
		function intentions (options){
			return {
				itemStyle: {
					normal: {
						color: '#ffffff'
					}
				},
				// title: {
				// 	top: "top",
				// 	left: "center",
				// 	//text: "学习意向",
				// 	textStyle: {
				// 		fontStyle: "normal",
				// 		fontWeight: "normal",
				// 		fontSize: 14,
				// 		color: "#333333"
				// 	}
				// },
				// title: {
				// 	text: '客户意向度',
				// 	padding:[12,0,28,0],
				// 	textStyle:{
				// 		color:"#333",
				// 		fontSize:20,
				// 		fontWeight:"normal",
				// 	}
				// },
				radar: {
					indicator: options.intentionName,
					//getIndustry(isDown ? "线下" : "线上", industry3),
					name: {
						textStyle: {
							color: "#666666",
							fontSize: 14
						}
					},
					radius: options.echartsContainerW / 4,
					center: ["50%", "42%"],
					  radius: '50%',
					  startAngle: 90,
					  splitNumber: 4,
					 // shape: 'circle',
				},
				series: [{
					// name: '预算 vs 开销（Budget vs spending）',
					type: 'radar',
					data: [
						{
							value: options.intentionNum,
							//getRandom(),
							name: '行为特征',

							lineStyle:{
								normal:{
									color:"#D2981D"
								}
							},
							areaStyle:{
								normal:{
									color: "rgba(244,187,65,0.6)",
								}
							}
						}
					]
				}]
			}
		}
		

	
		//使用制定的配置项和数据显示图表
		var intention = JSON.parse(moniData.industry.hangyeyixiangID);
		var intentionName =  intention.map(function (v){
			return {name:v.name,max:1};
		});
		
		var intentionNum = intention.map(function (v){
			return v.level;
		});
		var echartsContainerW = $("#radar-chart").width();
		//console.log(moniData,intentionName,intentionNum,echartsContainerW);
		//var areaoptions = {};
		//var CSAT = initEcharts("CSAT");
			//CSAT.setOption(intentiondata);
		var  areaChart = echarts.init(document.getElementById('radar-chart'));
		var intentiondata = intentions({
			intentionName:intentionName,
			echartsContainerW:echartsContainerW,
			intentionNum:intentionNum,
			echarts:echarts
		});
		areaChart.setOption(intentiondata);
	
	
		
		
		//性别;
		function transform(arr) {
			var obj = {};
			for (var i = 0; i < arr.length; i++) {
				arr[i].age = arr[i].age.toString();
				if (Object.keys(obj).indexOf(arr[i].age) == -1) {
					obj[arr[i].age] = [arr[i].requirenum]
				} else {
					obj[arr[i].age].push(arr[i].requirenum)
				}
			}
			var ages = []
			var numbers = []

			for (var key in obj) {
				var num = 0;
				//obj[key].map(v => num += Number(v))
				obj[key].map(function (v){return num += Number(v) });
				obj[key] = num;
				ages.push(key);
				numbers.push(obj[key])
			}
			obj.ages = ages
			obj.numbers = numbers
			return obj;
		}
		
		function getSexAndAge(isAdult, data) {
			var obj = {
				noAdult: [],
				adult: {
					man: [],
					woman: []
				}
			};
			if (isAdult) {
				for (var i = 0; i < data.length; i++) {
					if (data[i].sex == 0) {
						obj.adult.woman.push(data[i])
					}
					if (data[i].sex == 1) {
						obj.adult.man.push(data[i])
					}

				}
				//obj.adult.man = transform(obj.adult.man.sort((a, b) => (a.age - b.age)))
				obj.adult.man = transform(obj.adult.man.sort(function (a,b){
					return (a.age - b.age);
				}));
				//obj.adult.woman = transform(obj.adult.woman.sort((a, b) => (a.age - b.age)))
				obj.adult.woman = transform(obj.adult.woman.sort(function (a,b){return a.age - b.age}));
			} else {
				for (var i = 0; i < data.length; i++) {
					if (data[i].sex == 2) {
						obj.noAdult.push(data[i])
					}

				}
				obj.noAdult = transform(obj.noAdult.sort((a, b) => (a.age - b.age)))

			}
			return obj;
		}
		
		var agearr = moniData.industry.age1.split("~");
		var maxAge = parseInt(agearr[1]);
		var isAdult = maxAge > 18 ? true : false;
		//请求参数
		//var cityList = moniData.city.map(v => v.city);
		var cityList = moniData.city.map(function (v){
			return v.city;
		});
		
		cityList = cityList.join();
		var industryId = moniData.industry.id;
		
		var cityidlist = {
			list:cityList,
			industryId:industryId
		}; 
		
		//获取cityidlist;
		//axios.get(`${config.DEMAND_DATA}/chart/sex?cityidlist=${options.cityidlist.list}&industryid=${options.cityidlist.industryId}`),
		//var cityidlist = '北京,上海';
		//初始化;
		rightbox([]);
		var url = domain137 + '/chart/sex';
		$.when($.ajax({
			url:url,
			data:{
				cityidlist:cityidlist.list,
				industryid:cityidlist.industryId,
			}
		})).then(function (res){
			$('.con-main-chart .loading').hide();
			//初始化
			var  sexAge = echarts.init(document.getElementById('area-chart'));
			//使用制定的配置项和数据显示图表
			//debugger;
			var cityidlist = res.data;
			rightbox(cityidlist);
			var totalData = getSexAndAge(isAdult,cityidlist);
			var sexandagedata = sexandage({
				isAdult:isAdult,
				totalData:totalData
			});
			
			sexAge.setOption(sexandagedata);
			//debugger;
		}).fail(function (){
			//debugger;
			
		});
		
		
		function sexandage (options){
			var totalData = options.totalData || {},
				isAdult = options.isAdult || false,
				series,
				xAxis;
			
			if (isAdult) {
				series = [{
					data: totalData.adult.man.numbers,
					name: '男',
					type: 'line',
					stack: null,
					label: {
						normal: {
							show: false,
							position: 'top'
						}
					},
					itemStyle: {
						normal: {
							color: "rgba(244,187,65,0.60)",
							lineStyle: {
								color: "rgba(244,187,65,0.60)"
							}
						}
					},
					areaStyle:{
						normal:{
							color: "rgba(244,187,65,0.60)",
						}
					}
				}, {
					data: totalData.adult.woman.numbers,
					name: '女',
					type: 'line',
					stack: null,
					label: {
						normal: {
							show: false,
							position: 'top'
						}
					},
					itemStyle: {
						normal: {
							color: "rgba(203,95,93,0.60)",
							lineStyle: {
								color: "rgba(203,95,93,0.60)"
							}
						}
					},
					areaStyle: {normal: {color: "rgba(203,95,93,0.60)"}}
				}];
				xAxis = [
					{
						show: false,
						type: 'category',
						name: "男",
						boundaryGap: false,
						data: totalData.adult.man.ages
					}, {
						show: false,
						type: 'category',
						name: "女",
						boundaryGap: false,
						data: totalData.adult.woman.ages
					}
				]
			} else {
				series = [{
					data: totalData.noAdult.numbers,
					name: '青少年',
					type: 'line',
					stack: '总量',
					label: {
						normal: {
							show: false,
							position: 'top'
						}
					},
					itemStyle: {
						normal: {
							color: "rgba(244,187,65,0.60)",
							lineStyle: {
								color: "rgba(244,187,65,0.60)"
							}
						}
					},
					areaStyle:{
						normal:{
							color: "rgba(244,187,65,0.60)",
						}
					}
				}];
				xAxis = [
					{
						show: false,
						type: 'category',
						name: "青少年",
						boundaryGap: false,
						data: totalData.noAdult.ages
					}
				]
			};
			
			
			var option2 = {
					// title: {
					// 	text: '数量',
					// 	top: "8%",
					// 	left: "16",
					// 	textStyle: {
					// 		fontSize: "14",
					// 		color: "#333333",
					// 		fontWeight: "normal"
					// 	}
					// },
					tooltip: {
						trigger: 'axis'
						// axisPointer: {
						//     type: 'cross',
						//     label: {
						//         backgroundColor: '#6a7985'
						//     }
						// }
					},
					color: ["#413FE9", "#B370DA"],
					legend: {
						right: "10",
						top: "20",
						data: [{
							name: '男',
							// 强制设置图形为圆。
							icon: 'circle',
							// 设置文本为红色
							textStyle: {
								color: '#333333'
							}
						}, {
							name: '女',
							// 强制设置图形为圆。
							icon: 'circle',
							// 设置文本为红色
							textStyle: {
								color: '#333333'
							}
						},
							{
								name: '青少年',
								// 强制设置图形为圆。
								icon: 'circle',
								// 设置文本为红色
								textStyle: {
									color: '#333333'
								}
							},]
					},
					// toolbox: {
					// 	feature: {
					// 		saveAsImage: {}
					// 	}
					// },
					grid: {
					//top: "8%",
						left: '3%',
						right: '4%',
						bottom: '1%',
						containLabel: true
					},
					xAxis: xAxis,
					yAxis: [
						{
							type: 'value'
						}
					],
					series: series
				};
			return option2;
		}
});


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
var requireamountnum = 0;
function rightbox(cityidlist){
	class Customerhome extends React.Component{
		constructor(props) {
			super(props);
			var agearr = moniData.industry.age1.split("~");
			var startage = parseInt(agearr[0]);
			var endage = parseInt(agearr[1]);
			
			this.state = {
				shcools:1,
				startage:startage,
				endage:endage,
				money:0,
				cityidlist:cityidlist,
				searchage:true,
			};
			
			this.getshcools = this.getshcools.bind(this);
			this.onChange = this.onChange.bind(this);
			this.getalluser = this.getalluser.bind(this);
			this.countMoney = this.countMoney.bind(this);
			this.countrequireamount = this.countrequireamount.bind(this);
			this.onChangeshcool = this.onChangeshcool.bind(this);
			this.findcity = this.findcity.bind(this);
			this.findindustry = this.findindustry.bind(this);
			this.finduserlabel = this.finduserlabel.bind(this);
			
		}
		onChangeshcool(item){
			this.setState({
				shcools:item,
			});
			this.countMoney();
		}
		getshcools(){
			return (
				<div>
					{/* <span className="first">校区</span> */}
					<Slider min={1} max={25} onChange={this.onChangeshcool}  step={1} className="sliderright"/>
					<span className="schools"><i>{this.state.shcools}</i>个</span>
				</div>
			);
		}
		componentDidMount(){
			//if(sessionStorage.getItem("logontimes")==0){
				//var sHeihgt = $(".simulation").offset().top;
				//$('html,body').animate({scrollTop:sHeihgt-65},0);
			//}
			//默认加载
			this.countMoney();
		}
		onChange(item){
			
			//
			if(item[1]==item[0]){
				if(item[0]-1<=0){
				   item[1]=item[1]+1;
				}else{
				   item[0]= item[0]-1;
				}
			}
			
			this.setState({
				startage:item[0],
				endage:item[1],
				searchage:false
			})
			
			this.countMoney();
		}
			
		countMoney(){
			
				//var citys = moniData.city;
				var lineOff = moniData.lineOff;
				var citys = moniData.city;

				//一线价格
				var firstprice = moniData.industry.firstprice;
				//二线价格
				var secondprice = moniData.industry.secondprice;
				
				//开始年龄
				var  startage = this.state.startage || 0;
				//结束年龄
				var endage = this.state.endage || 0;
				
				var shcoolrate  = 1;
				
				var agerate = 1;
			
				//基础单价;
				var basicPrice = 0;
				//默认一个线下校区;
				var shcool = this.state.shcools; 
				if(citys && citys[0]){
					//看城市是一线还是二线
					citys.map(function (item,index){
						if(item.type == 1){
							basicPrice+=firstprice;
						}else{
							basicPrice+=secondprice;	
						}
					});
				}
			
			//基础价格
			//XXX元/100条 计价规则：（城市1单价+城市2单价+...+城市n单价）/n*100
			basicPrice = basicPrice/(citys.length*100);
			
			//：线下校区≤2 ，获客成本*1.5。大于2个不改变
			
			
			
			if((shcool*1)<=2){
				shcoolrate = 1.5;
			}else{
				shcoolrate = 1;
			}
			
			//年龄最大值-年龄最小值≤4，获客成本*1.2，
			//年龄最大值-年龄最小值≤2 ，获客成本*1.5。
			var ageRange = endage - startage;
			
			if(ageRange<=4){
				agerate = 1.2;
			}
			
			if(ageRange<=2){
				agerate = 1.5;
			}
			
			//money = basicPrice (*) shcoolrate学校的rate(*)agerate年龄的rate;
			var money = 0;
			if(lineOff==1){
				//线上
				money = (basicPrice*agerate).toFixed(1);
			}else{
				//线下
				money = (basicPrice*shcoolrate*agerate).toFixed(1);
			}
			console.log(money);
			this.setState({
				money:money
			})
			
		}
		countrequireamount(cityidlist){
			var  startage = this.state.startage;
			var endage = this.state.endage;
			var count = 0;
			if(!cityidlist) return 0;
			cityidlist.map(function (item,index){
				if(item.age>= startage && item.age<=endage){
					if(item.sex == 2){
						count += item.requirenum;
					}
				}
				//debugger;
			});
			requireamountnum = count;
			return ((count+'').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, "$1,"));
			
		}
		getalluser(){
			//integrate上面带过来的;
			var alluser = "";
			//debugger;
			if(integrate && integrate.alluser){
				alluser = (integrate.alluser+'');
			}
			//a.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, "$1,");
			//var b = a.replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
			if(alluser){
				alluser =  (alluser = alluser.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, "$1,"));
			}
			//debugger;
			$('#countpeople').html(alluser);
		}
		findcity(city){
			var citystr = "";
			if(city){
				city.map(function (item,index){
					citystr+=(item.city+',');
				});
			}
			
			if(citystr){
				return  citystr.slice(0,-1);
			}else{
				
				return citystr;
			}
			
		}
		//biaoqian
		findindustry(moniData){
			var onlines = "";
			if(moniData.lineOff == 1){
				onlines = "线上教育";
			}else{
				
				onlines = "线下教育";
			}
			//debugger;
			return onlines+'>'+moniData.twoLine.name+'>' + moniData.industry.name;
		}
		finduserlabel(moniData){
			var biaoqian = moniData.industry.biaoqian;
			if(biaoqian){
				biaoqian = JSON.parse(biaoqian);
				return biaoqian.map(function (item,index){
					return (<li>
									<div className="con-main-listRight-babelName">{item.lablename}</div>
									<div className="con-main-listRight-babelValue">{item.lablevalue}</div>
						   </li>);
				});
			}
			
		}
		render(){
			var shcoolsaddes = this.getshcools();
			var agearr = moniData.industry.age1.split("~");
			var startage = parseInt(agearr[0]);
			var endage = parseInt(agearr[1]);
			var lineOff = moniData.lineOff;
			//debugger;
			var money = this.state.money;
			var requireamount = this.countrequireamount(this.state.cityidlist);
			var allusers = this.getalluser();
			var searchage = this.state.searchage;
			var expectuser = 0;
			if(searchage){
				expectuser = integrate.expectuser;
			}else{
				//console.log(integrate.expectuser,integrate.alluser,);
				expectuser = (integrate.expectuser/integrate.alluser)*(requireamountnum);
				expectuser = parseInt(expectuser);
				//console.log('======================');
			}
			expectuser = (expectuser+'').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, "$1,");
			
			var citys = this.findcity(moniData.city);
			var industrys = this.findindustry(moniData);
			var finduserlabels = this.finduserlabel(moniData);
			return (			
					<div>
						<div className="con-main-dataTitle">
							<img src="../../../images/login_before/Trian.png" alt="" />
							<p>获客成本<span>≈<b>{money}</b>万元/100条</span></p>
						</div>
						<div className="con-main-hint">进一步调整价格</div>
						<div className="con-main-list">
							<ul>
								<li>
									<div className="con-main-listLeft">
										行业
									</div>
									<div className="con-main-listRight industry-val">
									{industrys}
									</div>
								</li>
								<li>
									<div className="con-main-listLeft">
										地区
									</div>
									<div className="con-main-listRight industry-val">
									{citys}
									</div>
								</li>
								<li>
									<div className="con-main-listLeft">
										<span>年龄</span>
									</div>
									<div className="con-main-listRight industry-val">
										<Slider 
											className="sliderright"
											onChange={this.onChange}
											/*disabled={disabled}*/  
											range step={1} defaultValue={[startage,endage]}				
											min={startage} max={endage}
										/>
										<span className="ages"><i>{this.state.startage}~{this.state.endage}</i>岁</span>
									</div>
								</li>
								{(lineOff==0)?
									<li>
										
											<div className="con-main-listLeft">
												校区
											</div>
											<div className="con-main-listRight industry-val">
											{shcoolsaddes}
											</div>
									</li>
								:""}
								<li>
									<div className="con-main-listLeft">
										客户标签
									</div>
									<div className="con-main-listRight industry-school">
										<ul>
										{finduserlabels}
										</ul>	
									</div>
								</li>
							</ul>
						</div>
						<div className="con-main-info">
							预计销售线索<span>{expectuser}</span>条
						</div>
						<div className="con-main-register">
							<a href="https://www.mshuoke.com/register-customer.html">立即注册查看更多数据详情</a>
						</div>
						<div className="con-main-login">
							<a href="https://www.mshuoke.com/login.html">已有账号，立即登录</a>
							
						</div>
					</div>

					);
		}
	}

	ReactDOM.render(<Customerhome />,document.getElementById('con-main-data'));
}

//ReactDOM.render(<Customerhome />,document.getElementById('ageslider'));
