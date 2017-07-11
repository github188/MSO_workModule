
/*统一使用公共模块*/
require("./styleline.css");

import HeaderCustomer from '../../../public/header-customer.jsx';
import Tabdown from './tabledown.jsx';
import Footer from '../../../public/footer.js';

class Customerreportdown extends React.Component{
	constructor(props) {
		super(props);
		
		
	}	
	render(){
		return (
				<div>
					<div className="customerreport">
						<div className="topNav">
							<HeaderCustomer />
						</div>
						
						<Tabdown />
						
					</div>
					
					<div className="footer_box">
							<Footer />
					</div>
				</div>
				);
	}
}

ReactDOM.render(<Customerreportdown />,document.getElementById('main'));


