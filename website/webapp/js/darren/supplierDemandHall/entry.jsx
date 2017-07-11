require("../../../public/asideBar.css");

//import Header from '../../../public/index_header.jsx';
import Topnav from './topnav.jsx';
import Footer from './footer.jsx';
import Listhead from './listhead.jsx';
import AsideBar from '../../../public/asideBarJ.jsx';
 

/*统一使用公共模块*/
class Main extends React.Component{
	constructor(props) {
		super(props);
	}
	componentDidMount(){
		
	}
	render(){
		return (
				<div>
					<div className="content" style={{"width":"1200px","margin":" 0 auto"}}>
						<div className="mid_bg">
							<div className="topNav">
								<Topnav />
							</div>
							<div className="mid_box">
								<Listhead />
							</div>
						</div>
					</div>
					
					<div className="footer_box">
						<Footer />
					</div>
					<div className="cover" style={{"display":"none"}}>
						<div className="cover-box">
							<div className="title">提示<span className="close2"></span></div>
							<div className="context">您还未完善信息，无法竞拍订单！<a href="html/PerfectData.html">点此完善信息>></a></div>
							<div className="bt-choose">
								<button type="button" className="bg_blue">确定</button>
							</div>
						</div>
					</div>
					<AsideBar/>
				</div>
				);
	}
}
ReactDOM.render(<Main />,document.getElementById('supplier'));