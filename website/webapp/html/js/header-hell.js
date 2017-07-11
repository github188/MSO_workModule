var menus = [];
var menu1 = new Object();
menu1.name = "首页";
menu1.link = "../mso1.4.2/customer_home.html";
var menu2 = new Object();
menu2.name = "发布新需求";
menu2.link = "../mso1.4.2/customer_new_demand.html";
var menu3 = new Object();
menu3.name = "我的需求";
menu3.link = "../mso1.4.2/customerDemandList.html";
var menu4 = new Object();
menu4.name = "需求大厅";
menu4.link = "/html/supplierDemandHall.html";
var menu5 = new Object();
menu5.name = "成单报表";
menu5.link = "../customer_lj_DemandList?zt=cdbb";
menus[0] = menu1;
menus[1] = menu2;
menus[2] = menu3;
menus[3] = menu4;
menus[4] = menu5;

var Logo = React.createClass({
    render:function(){
        return(<div className="logo"><img src="images/public/logo.png" /></div>)
    }
});

var MenuHead = React.createClass({
  render:function(){
      var menuList = menus.map(
          function(menu,index){
              return(<li key={index}><a href={menu.link}>{menu.name}</a></li>);
          }
      );
      return(<div className="menu"><ul>{menuList}</ul></div>);
  }
});

var LoginBox = React.createClass({
    getInitialState:function(){
        return{
            mail:"20",
            headurls:"images/public/default-photo.png",
            showName:"helloWorld",
            invitationcode:"123456",

        }
    },
    componentWillMount:function(){
      this.setState({
            showName: sessionStorage.getItem("showName"),
            invitationcode: sessionStorage.getItem("invitationcode"),
            headurls: sessionStorage.getItem("headurls"),
            mail: sessionStorage.getItem("mail"),
      });
    },
    componentDidMount:function(){
        $(".topNav .top .right ul li.photo-box").hover(function(){
            $(this).find(".photo-details").show();
            $(this).addClass("selected");
        },function(){
            $(this).find(".photo-details").hide();
            $(this).removeClass("selected");
        });
        if($(".topNav .top .right ul li.mail span.num").text()=="0"){
            $(".topNav .top .right ul li.mail span.num").hide();
        }
        if($(".topNav .top .right ul li.mail span.num").text()>99){
            $(".topNav .top .right ul li.mail span.num").text("99+");
        }
    },
    render:function(){
        return(
            <div className="right">
                <ul>
                    <li className="mail"><a className="icon" href="#"></a><span className="num">{this.state.mail}</span></li>
                    <li className="photo-box">
                        <div className="photo"><img src={this.state.headurls} /></div>
                        <div className="photo-details">
                            <div className="pd-top">
                                <div className="default-photo"><img src={this.state.headurls} /></div>
                                <div className="default-info">
                                    <p>用户名：{this.state.showName}</p>
                                    <p>邀请码：{this.state.invitationcode}</p>
                                </div>
                            </div>
                            <div className="pd-bottom">
                                <ul>
                                    <li className="icon-update"><a href="../customer_lj_AccountManagement">修改资料</a></li>
                                    <li className="icon-pswd"><a href="../customer_lj_AccountManagement">修改密码</a></li>
                                </ul>
                                <p><a href="../user_toLoginOut">退出</a></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
});


var Guide = React.createClass({
    next:function(index){
        if(index!=4){
            $(".guide ul li.active").next().addClass("active").siblings().removeClass("active");
        }else{
            $(".customer_guide").hide();
            sessionStorage.removeItem("logontimes");
            localStorage.removeItem("logontimes");
        }
    },
    close:function(){
        $(".customer_guide").hide();
        sessionStorage.removeItem("logontimes");
        localStorage.removeItem("logontimes");
    },
    render:function(){
        if(localStorage.getItem("logontimes")==0){
            return (
                <div className="customer_guide">
                <div className="gray"></div>
                <div className="guide">
                <ul>
                <li className="active">
                <button type="button" className="next" onClick={this.next.bind(this,1)}></button>
                <button type="button" className="guide_close" onClick={this.close}></button>
                </li>
                <li>
                <button type="button" className="next" onClick={this.next.bind(this,2)}></button>
                <button type="button" className="guide_close" onClick={this.close}></button>
                </li>
                <li>
                <button type="button" className="next" onClick={this.next.bind(this,3)}></button>
                <button type="button" className="guide_close" onClick={this.close}></button>
                </li>
                <li>
                <button type="button" className="complete" onClick={this.next.bind(this,4)}></button>
                <button type="button" className="guide_close" onClick={this.close}></button>
                </li>
                </ul>
                </div>
                </div>
        )
        }else{
            return false;
        }
    }
});
ReactDOM.render(
<div className="top">
    <Logo />
    <MenuHead/>
    <LoginBox />
    <Guide />
    </div>,
    $(".topNav")[0]
);
