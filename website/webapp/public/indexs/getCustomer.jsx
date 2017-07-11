var easingFn = function (t, b, c, d) {
 	  var ts = (t /= d) * t;
 	  var tc = ts * t;
 	  return b + c * (tc + -3 * ts + 3 * t);
 }	
 
 
 class GetCustomer extends React.Component{
 	constructor(props) {
 		super(props);
 		this.state = {
 			images:[
 				{old:'count-number.png',new:'count-number-1.png'},
 				{old:'moblie.png',new:'moblie-1.png'},
 				{old:'money.png',new:'money-1.png'},
 				{old:'amount.png',new:'amount-1.png'},
 				{old:'trade.png',new:'trade-1.png'},
 				{old:'add.png',new:'add-1.png'},
 			],
 			degrees:[-360,-60,-120,-180,-240,-300],
 			changeValue:3,
 			backupCen:[
 				'money-cen.png',
 				'amount-cen.png',
 				'trade-cen.png',
 				'add-cen.png',
 				'count-number-cen.png',
 				'moblie-cen.png'
 			],
 			currentImg:[
 				'money-left.png',
 				'amount-left.png',
 				'trade-left.png',
 				'add-left.png',
 				'count-number-left.png',
 				'moblie-left.png'
 			],
 			countSwitch:true,
 			autoSwitch:true,
 			titleName:[	
 				'获客需求金额',
 				'获客需求量',
 				'促成交易',
 				'新增标签',
 				'标签总量',
 				'移动用户'
 			],
 			titleNum:this.randomArr(true),
 			options:{
 				useEasing : true, 
 				easingFn:easingFn, 
 				useGrouping : true, 
 				separator : ',', 
 				decimal : '.', 
 				prefix : '', 
 				suffix : '' 
 			},
 			
 			
 		}
 		this.createMenu = this.createMenu.bind(this);
 		this.transfromRound = this.transfromRound.bind(this);
 		this.slideAnimate = this.slideAnimate.bind(this);

 	}
 	randomArr(isTrue){
 		var seed =[1492,28837,288.53,576.481,576.481,17285.54];
 		var inits= 1487174400000;
 		var seedNum=[33514576,934311,95944945,192352,1948201760,133266389];
		//console.log(123456);
 		function  initNum() {
 			var numList = [];
 			var nowTime;
 			$.ajax({type:"OPTIONS",url:"/",async:false,complete:function(x){
 					nowTime=   new Date(x.getResponseHeader("Date")).getTime();
 				}});
 			seedNum.forEach(function(value, index, array) {
 					if (index==3) value = 0;	
					//如果是 促成交易 则1周1变
					if (index == 2){
						//(nowTime-inits / (604800000)) = 实际周数（小数）
						// 从现在到初始化时 一共多少周（整）的毫秒数
						//debugger
						var timem =Math.floor((nowTime-inits) / 604800000)*604800000;
						numList[index] =  value+ Math.floor(timem/seed[index]);
						
						//console.log(numList[index]+'===timem');
					}else {
					//正常获值
					//seed[index] 代表 增加1需要消耗多少毫秒
 					numList[index] =  value+ Math.floor(((nowTime-inits)/seed[index]));
					
					}
					
					
 			});
 			return numList ;
 		}
 		if(isTrue){
 			return initNum();
 		}
 	}
 	createMenu(callBack,obj){
 		
 		var targetDom = document.getElementById(obj);
 				var nm = new nice_menu(targetDom);
 				nm.initScale = 1.0;
 				nm.distributionType = 0;
 				nm.delay = 50;
 				nm.gap = 0;
 				nm.nm_ItemsData = [
 					["Menu1", "", "_self", "images/public/default.png"],
 					["Menu2", "", "_self", "images/public/default.png"],
 					["Menu3", "", "_self", "images/public/default.png"],
 					["Menu4", "", "_self", "images/public/default.png"],
 					["Menu5", "", "_self", "images/public/default.png"],
 					["Menu6", "", "_self", "images/public/default.png"],
 				];
 					
 				nm.nm_createMenu();
 				
 				setTimeout(function (){
 					callBack && callBack();
 				},1000);
 				
 	}
 	componentDidMount(){
 		
 		this.createMenu(function (){
 			var countNumber = 90;
 			this.transfromRound(countNumber);
 		}.bind(this),"targetMenu");
 		
 		/*创建小圆的扇叶*/
 		this.createMenu(function (){
 			
 		},"targetleft");
 		//debugger;
 		
 		this.clickAnimate();
		
		
		(function (){
			$(document).click(function (){
				//console.log('ffffffffff');
			});
		})();
 	}
 	transfromRound(obj,flag){
 		
 		/*标题数据*/
 		
 		
 		var that = this;
 		/*先获取物体开始的度数*/
 		var startDegrees = $('.point').css('transform');
 	   function getmatrix(a,b,c,d,e,f){ 
 	   
 		var aa=Math.round(180*Math.asin(a)/ Math.PI);  
 		var bb=Math.round(180*Math.acos(b)/ Math.PI);  
 		var cc=Math.round(180*Math.asin(c)/ Math.PI);  
 		var dd=Math.round(180*Math.acos(d)/ Math.PI);  
 		var deg=0;  
 		if(aa==bb||-aa==bb){  
 			deg=dd;  
 		}else if(-aa+bb==180){  
 			deg=180+cc;  
 		}else if(aa+bb==180){  
 			deg=360-cc||360-dd;  
 		}  
 		return deg>=360?0:deg;  
 		//return (aa+','+bb+','+cc+','+dd);  
 	 }  
 		/*getmatrix() 在这里被执行*/
 		if('getnone'=='get'+startDegrees){
 			/*处理异常*/
 			//debugger;
 			startDegrees = 30;
 		}else{
 			startDegrees = eval('get'+startDegrees);
 			//debugger;
 		}
 		var amount = startDegrees;
 		/*先闪一下*/
 			(function (){
 				var startValue = 1;
 					if(!flag){
 						$('.round-box .round-3').animate({height:'50',top:'-128',left:'202'},200,function() {
 							$('.round-box .round-3-1').animate({width:'140'},function (){
 								$(this).find('div').show();
 								var timer5 = setTimeout(function (){
 									$('.round-box li').hide();
 										clearInterval(timer5);
 									},500);
 							});
 						});
 					}
 					//debugger;
 					var timer3 = setInterval(function (){
 						/*判断函数暂停*/
 						/*第一个滑动线*/
 						startValue++;
 						if(startValue%2){
 							$('.point img')[0].src = 'images/shine1.png';
 							/*如果事再次调用不再走这里*/
 							if(!flag){
 								$('#nm_3 a img')[0].src = 'images/msoindex/money.png';
 							}
 							
 						}else{
 							$('.point img')[0].src = 'images/shine2.0.png';
 							/*如果事再次调用不再走这里*/
 							if(!flag){
 								$('#nm_3 a img')[0].src = 'images/public/default.png';
 							}
 							//console.log(123456);
 						}
 						if(startValue>=4){
 							clearInterval(timer3);
 							$('.round-box li').hide();
 							startRun();
 						}
 					},300);
 			})();
 			
 			
 		var timer2;
 		function startRun(){
 			$('#targetMenu a img').each(function (index,name){
 				this.src = 'images/public/default.png';
 			});
 			that.state.changeValue++;
 			if(that.state.changeValue>6){
 				/*从头来*/
 				that.state.changeValue=1
 			}
 						/*开始值就是30*/
 			var timer = setInterval(function (){
 			
 				startDegrees+=2;
 				if(startDegrees>=obj){
 					/*分支动画*/
 					that.branchAnimate(that.state.changeValue);
 					/*刚转到位置的时候*/
 					var startValue = 1;
 					//debugger;
 						timer2 = setInterval(function (){
 						startValue++;
 						if(startValue>=4){
 							clearInterval(timer2); 
 							if(obj>=360){
 								obj = 30;
 							}
 						   that.transfromRound(obj+60,'flag');
 						}
 						
 						if(startValue%2){
 							$('.point img')[0].src = 'images/shine1.png';
 							$('#nm_'+that.state.changeValue+' a img')[0].src = 'images/msoindex/'+that.state.images[that.state.changeValue-1].old;
 						}else{
 							$('#nm_'+that.state.changeValue+' a img')[0].src = 'images/msoindex/'+that.state.images[that.state.changeValue-1].old
 							$('.point img')[0].src = 'images/shine2.0.png';
 						}
 					},300);
 					clearInterval(timer);
 				}
 				$('.point').css({
 					transform:'rotate('+startDegrees+'deg)',
 				});
 				
 				
 				/*自动跳转*/
 				
 				if(startDegrees>330){
 					that.autoClick();
 				}
 			},30);
		}
	}
	branchAnimate(index){
		if(index==1){
			$('.round-box .round-1').show();
			$('.round-box .round-1 div').css({display:'none'});
			$('.round-box .round-1').animate({width:'150',left:'-259'},function(){
				$(this).find('div').css({display:'block'});
				//debugger;
				/*第六个复原*/
				$('.round-box .round-6').animate({height:'0'});
				$('.round-box .round-6-1').animate({width:'0',left:'-31'});
			});
		}
		if(index==2){
			$('.round-box .round-2').css({display:'block'});
			$('.round-box .round-2-1').css({display:'block'});
			$('.round-box .round-2-1 div').css({display:'none'});
			$('.round-box .round-2').animate({height:'50',top:'-124',left:'-28'},200,function() {
				$('.round-box .round-2-1').animate({width:'140',left:'-178'},function (){
					$(this).find('div').css({display:'block'});
					/*第一个复原*/
					$('.round-box .round-1').animate({width:'0',left:'-109'});
					
				});
			});
		}
		if(index==3){
			$('.round-box .round-3').css({display:'block'});
			$('.round-box .round-3-1').css({display:'block'});
			$('.round-box .round-3-1 div').css({display:'none'});
			$('.round-box .round-3').animate({height:'50',top:'-128',left:'202'},200,function() {
				$('.round-box .round-3-1').animate({width:'140'},function (){
					$(this).find('div').css({display:'block'});
					/*第二个复原*/
					$('.round-box .round-2').animate({height:'0',top:'-80',left:'-14'});
					$('.round-box .round-2-1').animate({width:'0',left:'-38'});
				});
			});
		}
		if(index==4){
			$('.round-box .round-4').css({display:'block'});
			$('.round-box .round-4 div').css({display:'none'});
			
			$('.round-box .round-4').animate({width:'145'},function (){
				$(this).find('div').css({display:'block'});
				/*第三个复原*/
				//left:189px; top:-85px;
				$('.round-box .round-3').css({height:'0',top:'-85',left:'189'});
				$('.round-box .round-3-1').css({width:'0'});
			});
		}
		
		if(index==5){
			$('.round-box .round-5').css({display:'block'});
			$('.round-box .round-5-1').css({display:'block'});
			$('.round-box .round-5-1 div').css({display:'none'});
			$('.round-box .round-5').animate({height:'50'},200,function (){
				$('.round-box .round-5-1').animate({width:'140'},function (){
					$(this).find('div').css({display:'block'});
					/*第四个复原*/
					$('.round-box .round-4').css({width:'0'});
					
				});
			});
		}
		if(index==6){
			$('.round-box .round-6').css({display:'block'});
			$('.round-box .round-6-1').css({display:'block'});
			$('.round-box .round-6-1 div').css({display:'none'});
			$('.round-box .round-6').animate({height:'50'},200,function (){
				$('.round-box .round-6-1').animate({width:'140',left:'-169'},function (){
					$(this).find('div').css({display:'block'});
					/*第五个复原*/
					$('.round-box .round-5').css({height:'0'});
					$('.round-box .round-5-1').css({width:'0'});
					
				});
			});
		}
	}
	clickAnimate(){
		//debugger;
		/*自动转*/
		$('.shows').hide();
		$('.backup-cen').hide();
		
		//$('.round').hide();
		//$('.round-backup').show();
		/*屏蔽大圆圈点击事件*/
		
		var that = this;
		//debugger;
		$('#targetMenu ul li a').each(function (index,name){
			
			$(name).click(function (){
				/*如果点击了以后自动就不再加载*/
				that.state.autoSwitch = false;
				$('.round').hide();
				$('.round-backup').show();
				that.slideAnimate(index-2);
				$('.shows').show();
				$('.backup-cen').show();
			});
		});
		
		//this.automaticAnimate();
	}
 	autoClick(){
 		
 		if(this.state.autoSwitch){
 			this.state.autoSwitch = false;
 			$('.round').hide();
 			$('.round-backup').show();
 			this.slideAnimate(2);
 			$('.shows').show();
 			$('.backup-cen').show();
 		}
 	}
 	automaticAnimate(){
 		//debugger;
 		//this.slideAnimate(index);
 		var index = 0;
 		
 		var timer = setInterval(function (){
 			index++;
 			index = index%6;
 			$('.currentImg img')[0].src = 'images/public/default.png';
 			this.turnAnimate(this.state.degrees[index],index);
 			/*中间的大图的相应图片*/
 			//$('.backup-cen img')[0].src = 'images/' + this.state.backupCen[index];
 		}.bind(this),2000);
 		
 		
 		$('.round-backup').mouseover(function (){
 			clearInterval(timer);
 		}.bind(this));
 		
 		$('.round-backup').mouseout(function (){
 			timer = setInterval(function (){
 				index++;
 				index = index%6;
 				$('.currentImg img')[0].src = 'images/public/default.png';
 				this.turnAnimate(this.state.degrees[index],index);
 				/*中间的大图的相应图片*/
 				//$('.backup-cen img')[0].src = 'images/' + this.state.backupCen[index];
 			}.bind(this),2000);
 		}.bind(this));
 	}
 	slideAnimate(index){
 		/*获取屏幕的宽度*/
 		var scrrenWidth = $(window).width();
 		//debugger;
 		$('.round-backup').animate({width:'303',height:'303',marginLeft:scrrenWidth-170});
 		/*window调整大小的时候从新计算*/
 	
 		$(window).resize(function() {
 			scrrenWidth = $(window).width();
 			$('.round-backup').animate({width:'303',height:'303',marginLeft:scrrenWidth-170});
 		});
 		//this.turnAnimate(0);
 		/*旁边的每个点击转动*/
 		this.eachClickEvent(index);
 		
 	}
 	addMark(str){
 		str+='';
 		//\b 匹配一个单词的边界 
 		//? 匹配前面元字符0次或1次
 		var re = /(?=(?!\b)(\d{3})+$)/g; 
 		return str.replace(re, ','); 
 	} 
 	eachClickEvent(previndex){
 		var _this = this;
 		
 		//_this.turnAnimate(_this.state.degrees[previndex]);
 		if(previndex==-1){
 			previndex = 5;
 		}
 		if(previndex==-2){
 			previndex = 4;
 		}
 		
 		/*默认调出相对应的大图*/
 		//$('.backup-cen img')[0].src = 'images/' + _this.state.backupCen[previndex];
 		//$('.backup-cen img').animate({opacity:1});
 		
 		
 		/*中心数据(初始化)*/
 		//debugger;
 		$('.backup-title').html(_this.state.titleName[previndex]);
 
 		$('.backup-title').eq(previndex).html(_this.state.titleName[previndex]);
 		/*设置每个数字的默认值*/
 		for(var i=0;i<_this.state.titleNum.length;i++){
 			$('#targetleft ul li').eq(i).attr('data-num',_this.state.titleNum[i]);
 		}
 		
 		/*初始化存储值   */
 		
 		
 		//var demo = new CountUp("myTargetElement", 0,_this.state.titleNum[previndex], 0, 1, options);
 		//after = _this.state.titleNum[previndex];
 		
 		 var demo = new CountUp("myTargetElement", 0,_this.state.titleNum[previndex], 0, 1, _this.state.options);
 		 demo.start();
 		//			console.log(before  + "     to 446    " + after);
 
 		//before = after ;
 		//			console.log(before  + "     to 449    " + after);
 		
 		/*默认走的度数*/
 		$('.backup-img').css({
 			transform:'rotate('+(_this.state.degrees[previndex])+'deg)',
 		});
 		/*自定义属性的度数*/
 		$('.backup-img').attr('data-deg',_this.state.degrees[previndex]);
 		
 		
 		/*默认高亮图片*/
 		//debugger;
 		$('.currentImg img')[0].src = 'images/' + _this.state.currentImg[previndex];
 		
 		$('#targetleft ul li').each(function (index,name){
 			$(name).click(function (){
 				/*跟新自动数据index*/
 				previndex = index;
 				/*缓冲效果*/
 				//$('.backup-cen img').css({opacity:0});
 				//$('.backup-cen img').animate({opacity:1});
 				//console.log(index);
 				if( _this.state.countSwitch){
 					_this.state.countSwitch = false;
 					_this.turnAnimate(_this.state.degrees[index],index);
 					$('.currentImg img')[0].src = 'images/public/default.png';
 					$('ul.shows li').css({top:420})
 					$('ul.shows li').eq(index).animate({top:0});
 					
 					/*中心数据title*/
 					$('.backup-title').html(_this.state.titleName[index]);
 
 					/*跟新数据*/
 					_this.setState({
 						titleNum:_this.randomArr(true),
 					});
 					
 					demo.update(_this.state.titleNum[index]);
 				}				
 			});
 		});
 		
 		
 		var timer;
 		/*自动播放*/
 		timer = setInterval(function (){
 			_this.updateNumber(demo,previndex);
 		}.bind(this),10000);
 		
 		
 	}
 	updateNumber(demo,index){
 		var _this = this;
 		_this.setState({
 			titleNum:_this.randomArr(true)
 		});
 		demo.update(_this.state.titleNum[index]);
 	}
 	turnAnimate(target,index){
 	   var timer;
 	   var that = this;
 	   var startDegrees = $('.backup-img').attr('data-deg')*1;
 	  
 	if(startDegrees==target){
 		return;
 	}else{
 		if(startDegrees==-360){
 			//debugger;
 			startDegrees = 0;
 		}
 		var left = startDegrees;
 		var iTarget =  target;
 		var W = 360;
 		Move($('.backup-img'),iTarget);
 		function Move(obj,iTarget){
 			clearInterval(timer);
 			var count = Math.floor(800/30);
 			var start = left;
 		
 			var dis = iTarget - start;//目标角度-开始时的角度=实际应该到达的角度
 			if (dis<-180) {
 				if(dis == -240) {
 					dis =120;
 				}else{
 					dis = 60;
 				}
 			}else if (dis >180){
 				if(dis == 240) {
 					dis =-120;
 				}else{
 				    dis = -60;
 				}
 			}
 			
 			var n = 0;
 			if(dis==-360){
 				//debugger;
 				return;
 			}
 			timer = setInterval(function (){
 				n++;
 				var a = 1-n/count;
 				left = start + dis*(1-a*a*a);//开始角度+ 正在走的角度
 				if(left<0){
 					
 					$('.backup-img').attr('data-deg',left%W);
 					$('.backup-img').css({
 						transform:'rotate('+(left%W)+'deg)',
 					});
 				}else{
 					
 					$('.backup-img').attr('data-deg',-W+left%W);
 						
 					$('.backup-img').css({
 						transform:'rotate('+(-W+left%W)+'deg)',
 						
 					});
 					//debugger;
 					//obj.style.left = -W + left%W + 'px';
 					
 				}
 				if(n==count){
 					$('.currentImg img')[0].src = 'images/' + that.state.currentImg[index];
 					clearInterval(timer);
 					that.state.countSwitch = true;
 					/*高亮小图标*/
 				}
 			},30);
 		};
	}
 		
 	}
 	render(){
 		return (<div className="getCustomer">
 	
 		
 		<div className="getCustomer-bg"></div>
 		<div className="getCustomer-con">
 				<p className="data-sty">人工智能<span className="dot">·</span>大数据<span className="dot">·</span>获客</p>
 					<div className="backup-cen">
 						
 						<p id="myTargetElement" className="backup-number"></p>
 						<h2 className="backup-title" ></h2>
 						<ul className="shows">
 							<li className="first">
 								<img src="images/money-cen.png" />
 							</li>
 							<li>
 								<img src="images/amount-cen.png" />
 							</li>
 							<li>
 								<img src="images/trade-cen.png" />
 							</li>
 							<li><img src="images/add-cen.png" /></li>
 							<li><img src="images/count-number-cen.png" /></li>
 							<li><img src="images/moblie-cen.png" /></li>
 						</ul>
 						
 					</div>
 					
 					<div className="round-backup">
 						<div className="point-cen" >
 							<img src="images/leaves-left.png" />
 						</div>
 						<div className="currentImg" >
 							<img src="images/public/default.png" />
 						</div>
 						<div className="backup-img" data-deg={'0'}>
 							<div id="targetleft" className="nicemenu">
 							</div>
 						</div>
 					</div>
 					<div className="round">
 						<div className="point" >
 							<img src="images/shine1.png" />
 						</div>
 						<div className="round-point">
 							<ul className="round-box" >
 								<li className="round-3"></li>
 								<li className="round-3-1">
 									<div>
 										<span>获客需求金额</span><br/>
 										<span className="num">
 										{this.addMark(this.state.titleNum[0])}
 										</span>
 									</div>
 								</li>
 								<li className="round-4">
 									<div>
 										<span>获客需求量</span><br/>
 										<span className="num">
 										{this.addMark(this.state.titleNum[1])}
 										</span>
 									</div>
 								</li>
 								<li className="round-5"></li>
 								<li className="round-5-1">
 									<div>
 										<span>促成交易</span><br/>
 										<span className="num">
 										{this.addMark(this.state.titleNum[2])}
 										</span>
 									</div>
 								</li>
 								<li className="round-6"></li>
 								<li className="round-6-1">
 									<div>
 										<span>新增标签</span><br/>
 										<span className="num">
 										{this.addMark(this.state.titleNum[3])}
 										</span>
 									</div>
 								</li>
 								<li className="round-1" >
 									<div>
 										<span>标签总量</span><br/>
 										<span className="num">
 										{this.addMark(this.state.titleNum[4])}
 										</span>
 									</div>
 								</li>
 								<li className="round-2">
 									
 								</li>
 								<li className="round-2-1" >
 									<div>
 										<span>移动用户</span><br/>
 										<span className="num">
 										{this.addMark(this.state.titleNum[5])}
 										</span>
 									</div>
 								</li>
 							</ul>
 						</div>
 						<div id="targetMenu" className="nicemenu">
 							
 						</div>
 					</div>
 					</div>
 					<span className="next-page"></span>
 				</div>);
 	}
 }
 export default  GetCustomer;