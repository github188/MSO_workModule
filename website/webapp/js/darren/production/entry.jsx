import Simulation from './simulation.jsx';
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
					<div className="customerMain">
						<Simulation />
					</div>
				</div>
				);
	}
}

ReactDOM.render(<Customerhome />,document.getElementById('production'));
