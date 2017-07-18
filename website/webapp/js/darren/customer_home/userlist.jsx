class Userlist extends React.Component{
	constructor(props) {
		super(props);
	}
	componentDidMount(){
		$(".userlist li.first a").click(function(){
			if(sessionStorage.getItem("companyInfo")==4){
				location.href =  'customer_new_demand.html';
			}else{
				$(".cover").show();
			}
		});
		
		
		
	}
	
	render(){
		return (
				<div className="userlist">
					<ul>
						<li className="first">
							<a href="javascript:">
								<label className="first"></label>
								<span className="first">发布需求</span>
							</a> 
						</li>
						<li className="first2">
							<a href="customerDemandList.html">
								<label className="first2"></label>
								<span className="first2">我的需求</span>
							</a>
						</li>
						<li className="first3">
							<a href="customer_reports_1.html" className="nav-rpt-old">
								<label className="first3"></label>
								<span className="first3">成单报表</span>
							</a>
							<a href="customerreport.html" className="nav-rpt">
								<label className="first3"></label>
								<span className="first3">成单报表</span>
							</a>
						</li>
						<li className="first4">
							<a href="getsource.html">
								<label className="first4"></label>
								<span className="first4">目标搜索</span>
							</a>
						</li>
					</ul>
				</div>
				);
	}
}

export default Userlist;