import React,{Component} from "react";
import {render} from "react-dom";
import Main from "./main.jsx";
import HeaderCustomer from '../../../public/header-customer.jsx';
import AsideBar from '../../../public/asideBar.jsx';
import Footer from '../../../public/footer';
require("../../../public/asideBar.css");

var root= document.getElementById("main");

class Entry extends Component{
    render(){
        return (<div>
            <div className="topNav">
                <HeaderCustomer selected={"目标搜索"}/>
            </div>
            <Main/>
            <AsideBar/>
            <div className="footer_box">
                <Footer />
            </div>
        </div>)
    }
}
render(<Entry/>,root)