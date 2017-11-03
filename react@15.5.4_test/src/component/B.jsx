import React,{Component} from "react";
import {BrowserRouter as Router,Route,Link,history} from 'react-router-dom';
import {History} from 'react-router';
// BrowserRouter、HashRouter、MemoryRouter
var rout4=require("react-router-dom");
var rout2=require("react-router");
const Basic = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/page1">Page1</Link></li>
                <li><Link to="/page2">Page2</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/page1" component={Page1}/>
            <Route path="/page2" component={Page2}/>
        </div>
    </Router>
)
const Page2 = ({ match }) => (
    <div>
        <h2>Page2</h2>
        <ul>
            <li>
                <Link to={`${match.url}/branch1`}>
                    branch1
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/branch2`}>
                    branch2
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/branch3`}>
                    branch3
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:branchId`} component={Branch} />
        <Route exact path={match.url} render={() => (
            <h3>Default Information</h3>
        )} />
    </div>
)

const Branch = ({ match }) => {
    console.log(match);
    return (
        <div>
            <h3>{match.params.branchId}</h3>
        </div>
    )
}


export default class B extends Component{
    componentDidMount(){
       //  var _this=this;
       // setTimeout(function(){
       //     _this.forceUpdate()
       // },2000)
    }
    componentDidUpdate(){
        // console.log(2132);
    }
    click(e){
        e.preventDefault();
        console.log(e.button);//===0鼠标左键点击
        console.log(e.defaultPrevented);//是否阻止了默认事件,是=>true 否则 false
        // console.log(this.props);
        console.log(history);
    }
    render(){
        // console.log( <Route/>);
        console.log(History.contextTypes.history);
        return (<div>
           <h1> <a href="http://www.baidu.com" onClick={this.click.bind(this)}>我是B12组件</a></h1>
        </div>)
    }
}