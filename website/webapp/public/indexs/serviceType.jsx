class ServiceType extends React.Component{
	constructor(props) {
		super(props);
		this.init();
	}
	init(){
	}
	componentDidMount(){
		$(".serviceType button").click(function(){
			if(sessionStorage.getItem("jfuid")==undefined){
				sessionStorage.setItem("fromhome","0");
				window.location.href = "//www.mshuoke.com/login.html";
			}else if(sessionStorage.getItem("pid")!=""){
				window.location.href = "//www.mshuoke.com/html/supplierDemandList.html";
			}else if(sessionStorage.getItem("jfutype")=="2"){
				window.location.href = "//www.mshuoke.com/html/supplierDemandList.html";
			}else{
				window.location.href = "//www.mshuoke.com/html/customerNewDemand.html";
			}
		});
	}

	
	render(){
		return (<div className={"serviceType"}>
			<div className="service-head"><img src="images/index/home-type-title.png" /></div>
			<div className="service-body">
				<ul>
					<li>
						<div className="con-box">
						<h2>销售线索挖掘</h2>
						<p>企业可根据自身市场需求定制销售线索，从而快速提升销售额。</p>
						<img src="images/index/type1.png" />
						<button><span>了解详情</span></button>
					</div>
					</li>
					<li>
						<div className="con-box">
						<h2>数据加工</h2>
						<p>通过对企业自身已有数据的挖掘与处理，帮助企业提升自身数据的销售转化率。</p>
						<img src="images/index/type2.png" />
						<button><span>了解详情</span></button>
					</div>
					</li>
					<li>
						<div className="con-box">
						<h2>标签匹配</h2>
						<p>通过企业业务场景化标签的需求定位及分析结果，为企业碎片化标签进行整合管理。</p>
						<img src="images/index/type3.png" />
						<button><span>了解详情</span></button>
					</div>
					</li>
				</ul>
			</div>
		</div>);
	}
}
export default ServiceType;
