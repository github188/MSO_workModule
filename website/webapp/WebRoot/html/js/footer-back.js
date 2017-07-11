var navs = [];
var nav1 = new Object();
nav1.name = "首页";
nav1.link = "index.html";
nav1.hr = "|";
var nav2 = new Object();
nav2.name = "产品";
nav2.link = "production.html";
nav2.hr = "|";
var nav3 = new Object();
nav3.name = "帮助中心";
nav3.link = "help.html";
nav3.hr = "|";
var nav4 = new Object();
nav4.name = "关于我们";
nav4.link = "about.html";
nav4.hr = "";
var nav5 = new Object();
nav4.name = "招贤纳士";
nav4.link = "joinus.html";
nav4.hr = "";
navs[0] = nav1;
navs[1] = nav2;
navs[2] = nav3;
navs[3] = nav4;
navs[4] = nav5;

var Footer = React.createClass({
    getInitialState:function(){
        return{
          copyRight:"Copyright © 2011-2017  上海脉豪商务信息咨询有限公司  版权所有  沪ICP备17004427号-1",
          address:"上海市虹口区四平路198号轻工国际大厦3楼  |  400-900-5288",
        }
    },
    render:function(){
        return(
          <div className="footer">
              <FooterNav />
              <p>{this.state.copyRight}</p>
              <p>{this.state.address}</p>
          </div>
        )
    }
});

var FooterNav = React.createClass({
    render:function(){
        var navList = navs.map(
            function(nav,index){
                return(
                    <ul>
                        <li key={index}><a href={nav.link} target="_blank">{nav.name}</a>&nbsp;&nbsp;{nav.hr}&nbsp;&nbsp;</li>
                    </ul>
                );
            }
        );
        return(<div>{navList}</div>);
    }
});

ReactDOM.render(<Footer />,$(".footer_box")[0]);
