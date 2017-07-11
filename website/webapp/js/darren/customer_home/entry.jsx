import HeaderCustomer from '../../../public/header-customer.jsx';
import Userlist from './userlist.jsx';
import Simulation from './simulation.jsx';
import Echarts from './echarts.jsx';
import Mycustoms from './mycustoms.jsx';
import Getcustoms from './getCustoms.jsx';
import AsideBar from '../../../public/asideBar.jsx';
import Footer from '../../../public/c_footer.jsx';
import Funnel from './getFunnel.jsx';
import Pop from './pop.jsx';




require("./styleline.css");
require("./stylearea.css");
require("../../../public/asideBar.css");
/*统一使用公共模块*/
class Customerhome extends React.Component{
	constructor(props) {
		super(props);
		
		
	}
	componentDidMount(){
		if(sessionStorage.getItem("logontimes")==0){
			var sHeihgt = $(".simulation").offset().top;
			$('html,body').animate({scrollTop:sHeihgt-65},0);
		}
	}
	
	render(){
		return (
				<div>
					<Pop />
					<div className="topNav">
						<HeaderCustomer/>
					</div>
					<div className="customerMain">
						<Userlist />
						<Simulation />
						<Echarts />
						<div className="getCustom">
							<Getcustoms />
							<Funnel />
						</div>
						<Mycustoms />
					</div>
					<AsideBar/>
					<div className="footer_box">
						<Footer />
					</div>
				</div>
				);
	}
}
ReactDOM.render(<Customerhome />,document.getElementById('customerhome'));
