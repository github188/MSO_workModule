
class Companions extends React.Component{
	constructor(props) {
		super(props);
		
		this.state = {
			companions:[
				{src:'images/index/home-parterners1.png',path:{left:'',top:''}},
				{src:'images/index/home-parterners2.png',path:{left:'',top:''}},
				{src:'images/index/home-parterners3.png',path:{left:'',top:''}},
				{src:'images/index/home-parterners4.png',path:{left:'',top:''}},
				{src:'images/index/home-parterners5.png',path:{left:'',top:''}},
				{src:'images/index/home-parterners6.png',path:{left:'',top:''}},
				{src:'images/index/home-parterners7.png',path:{left:'',top:''},'marginLeft':'marleft second'},
				{src:'images/index/home-parterners8.png',path:{left:'',top:''}},
				{src:'images/index/home-parterners9.png',path:{left:'',top:''}},
				{src:'images/index/home-parterners10.png',path:{left:'',top:''}},
				{src:'images/index/home-parterners11.png',path:{left:'',top:''}},
				
				{src:'images/index/home-parterners12.png',path:{left:'',top:''},'marginLeft':'third margin0'},
				{src:'images/index/home-parterners13.png',path:{left:'',top:''},'marginLeft':'third'},
				{src:'images/index/home-parterners14.png',path:{left:'',top:''},'marginLeft':'third'},
				{src:'images/index/home-parterners15.png',path:{left:'',top:''},'marginLeft':'third'},
				{src:'images/index/home-parterners16.png',path:{left:'',top:''},'marginLeft':'third'},
				{src:'images/index/home-parterners17.png',path:{left:'',top:''},'marginLeft':'third'},
				

			],
			CompanionHtml:'',
		};
		this.init();
		
	}
	init(){
		this.createCompanionHtml = this.createCompanionHtml.bind(this);
		this.addPosititon = this.addPosititon.bind(this);
		this.processControl = this.processControl.bind(this);
	}
	componentDidMount(){
		this.setState({CompanionHtml:this.createCompanionHtml()});
		/*setState,拿不到img加载值只能通过css来完成*/
		this.addPosititon();
		
	}
	
	componentDidUpdate(prevProps,prevState){
		//console.log(123456);
		this.processControl();
	}
	createCompanionHtml(){
		
		if(this.state.hasOwnProperty('companions')){
			return this.state.companions.map((data,index)=>{
				
				if(data.marginLeft){
					return (<li className={data.marginLeft} ><img  src={data.src} /></li>);
				}else{
					if(index>5){
						return (<li className={"second"}><img src={data.src} /></li>);
					}else{
						if(index==0){
							return (<li className="first"><img src={data.src} /></li>);
						}else{
							return (<li><img src={data.src} /></li>);
						}
					}
				}
			});
		}
	}
	addPosititon(){
		let companionsLi = $('.companion-box li');
		let companionsLiData = [];
			for(var i=0;i<companionsLi.length;i++){
				var k = companionsLi[i];
				var left = $(k)[0].offsetLeft;
				var Top =  $(k)[0].offsetTop;
				companionsLiData.push({left:left,top:Top});
			}
			for(var i=0;i<companionsLi.length;i++){
				var k = companionsLi[i];
				$(k).css({position:'absolute',left:companionsLiData[i].left,top:companionsLiData[i].top,marginLeft:0,marginTop:0});
			}
	}
	processControl(){
		
		var isLoad = true;
		//$.processControl('.companions',function (){
			if(isLoad){
				if($(".page4").hasClass("current")){
					alert(2);
				}
				var boxLi = $('.companion-box li').sort(function (){
						return Math.random()-(0.5);
					});
					
					function animate(){
						var delay = [];
						console.log(boxLi);
						$(boxLi).each(function (index){
							delay.push(parseInt(300*(Math.random()+1)));
							//debugger;
							$(this).delay(delay[index]).animate({opacity: 1},{
								step: function(now, mx){
									$(this).css("transform", "scale("+now+")");
								},
								easing:'easeInSine',
								duration:0,
							});
						});
					}
					animate();
					isLoad = false;
			}
		//});
	}
	render(){
		return (<div className="companions">
				<div className="title"><img src="images/index/home-parterners-title.gif" alt="合作伙伴" /></div>
				<div className={"com"}>
					<ul className={"companion-box"}>
					{this.state.CompanionHtml}
					</ul>
				</div>
			</div>);
	}
}
export default Companions;