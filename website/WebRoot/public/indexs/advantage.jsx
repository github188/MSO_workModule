
class Advantage extends React.Component{
	constructor(props) {
		super(props);
	}
	componentDidMount(){
		
	}
	render(){
		return (<div className={"advantage"}>
			<ul className={"advantage-box"}>
				<li>
					<div><img src="images/index/home-advantage2.png" onerror="onerror=null;src='images/index/home-advantage2.png'" /></div>
					<div>
						<h1>销售线索标签化</h1>
						<h2>多维度用户画像更贴合业务需求</h2>
					</div>
				</li>
				<li>
					<div><img src="images/index/home-advantage3.png" onerror="onerror=null;src='images/index/home-advantage3.png'" /></div>
					<div>
						<h1>业绩飞速增长</h1>
						<h2>助力企业提高市场占有率</h2>
					</div>
				</li>
				<li>
					<div><img src="images/index/home-advantage4.png" onerror="onerror=null;src='images/index/home-advantage4.png'" /></div>
					<div>
						<h1>数据闭环</h1>
						<h2>获客数据安全可靠</h2>
					</div>
				</li>
				<li>
					<div><img src="images/index/home-advantage1.png" onerror="onerror=null;src='images/index/home-advantage1.png'" /></div>
					<div>
						<h1>ROI合理化</h1>
						<h2>帮助控制企业的获客投入与产出</h2>
					</div>
				</li>
			</ul>
		</div>);
	}
}
export default Advantage;
