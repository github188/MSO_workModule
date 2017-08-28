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
								<label></label>
								<span>发布需求</span>
							</a> 
						</li>
						<li className="first2">
							<a href="customerDemandList.html">
								<label></label>
								<span>我的需求</span>
							</a>
						</li>
						<li className="first3">
							<a href="customerreport.html" className="nav-rpt">
								<label></label>
								<span>成单报表</span>
							</a>
							<a href="customer_reports_1.html" className="nav-rpt-old">
								<label></label>
								<span>成单报表</span>
							</a>
						</li>
						<li className="first4">
							<a href="getsource.html">
								<label></label>
								<span>目标搜索</span>
							</a>
						</li>
					</ul>
				</div>
				);
	}
}

export default Userlist;