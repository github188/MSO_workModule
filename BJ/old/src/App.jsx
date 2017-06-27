/**Created by kellyZhang on 2017/3/16.*/
import React from "react";
import {Router,Route,IndexRoute,hashHistory,IndexRedirect,Redirect,browserHistory} from "react-router";
import ReactDOM from "react-dom";

import Index from "./components/index";
import IndexPages from "./components/bodyComponents/IndexPages";
import GK from "./components/bodyComponents/GK";
import NEWS from "./components/bodyComponents/NEWS";
import GROW from "./components/bodyComponents/newActives/lookScore";//查看成绩
//活动
import ACTIVE from "./components/bodyComponents/newActives/ActiveHome";//
import IndexAvtive from "./components/bodyComponents/newActives/IndexAvtive";//
import Active_detail from "./components/bodyComponents/actives/active_detail";
import ArtIndex from "./components/bodyComponents/newActives/ArtIndex";//艺术首页
//活动，后台管理部分
import BackStageIndex from "./components/bodyComponents/ActiveBackStage/backStageIndex";//后台管理首页
//活动==>艺术类
import ArtTab1 from "./components/bodyComponents/newActives/ArtTab1";
import ArtTab2 from "./components/bodyComponents/newActives/ArtTab2";
import ArtTab3 from "./components/bodyComponents/newActives/ArtTab3";
import ArtTab4 from "./components/bodyComponents/newActives/ArtTab4";

import ActiveLogin from "./components/bodyComponents/newActives/Login";//
import activeSign from "./components/bodyComponents/newActives/Sign";//
import ActiveClassify from "./components/bodyComponents/newActives/ActiveClassify";//

//首页登陆按钮
import Login_Index from "./components/bodyComponents/Login/Index";
import Login_Page from "./components/bodyComponents/Login/LoginPage";
import Login_SportType from "./components/bodyComponents/Login/SportType";
import Login_SignPage from "./components/bodyComponents/Login/SignPage";

const root= document.getElementById("main");

class App extends React.Component{
    render(){return (
        <Router history={browserHistory}>
            <Route path="/" component={Index}>
                <IndexRedirect to="/ACTIVE"/>
                <Route path="ACTIVE" component={ACTIVE}>
                    <IndexRoute component={IndexAvtive}/>
                    <Route path="Classify" component={ActiveClassify}/>
                    <Route path="Active_detail" component={Active_detail}/>
                    <Route path="Login" component={ActiveLogin}/>
                    <Route path="Sign" component={activeSign}/>
                    <Route path="BackStageIndex" component={BackStageIndex}/>
                    <Route path="ArtIndex" component={ArtIndex}>
                        <IndexRedirect to="/ACTIVE/ArtIndex/ArtTab1"/>
                        <Route path="ArtTab1" component={ArtTab1}/>
                        <Route path="ArtTab2" component={ArtTab2}/>
                        <Route path="ArtTab3" component={ArtTab3}/>
                        <Route path="ArtTab4" component={ArtTab4}/>
                    </Route>
                </Route>
                <Route path="GK" component={GK}/>
                <Route path="NEWS" component={NEWS}/>
                <Route path="LOGIN" component={Login_Index}>
                    <IndexRoute components={Login_Page}/>
                    <Route path="SportType" components={Login_SportType}/>
                    <Route path="SignPage" components={Login_SignPage}/>
                </Route>

                <Route path="LookScore" component={GROW}/>
            </Route>
        </Router>
    )}
}
ReactDOM.render(<App/>,root);


