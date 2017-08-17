import Simulation from './simulation.jsx';

require("./styleline.css");
require("./stylearea.css");
/*统一使用公共模块*/
class Customerhome extends React.Component{
	constructor(props) {
		super(props);
		
		
	}
	componentDidMount(){
	}
	
	render(){
		return (<Simulation />);
	}
}
ReactDOM.render(<Customerhome />,document.getElementById('customerhome'));
