!function(e){function t(l){if(a[l])return a[l].exports;var n=a[l]={exports:{},id:l,loaded:!1};return e[l].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}({0:function(e,t,a){"use strict";var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e};a(471);var n=React.createClass({displayName:"Yewu",getInitialState:function(){return{serviceType:["","销售线索挖掘","数据筛选","人工客服"],data:null}},componentDidUpdate:function(){"查重后质检"==$(".jsms-title").text()&&$(".jsms-text").text("与甲方数据查重后进行录音的质量检验"),"回访电话接通数"==$(".jsms-title").text()&&$(".jsms-text").text("甲方回访后的接通数量，剔除无效与未接通数（>4次）"),"数据条目"==$(".jsms-title").text()&&$(".jsms-text").text("按实际提交数据条目数乘以单价进行结算"),"按提交线索数量结算"==$(".jsms-title").text()&&$(".jsms-text").text("按提交线索数量结算")},render:function(){return isNull(this.state.data)?React.createElement("table",null,React.createElement("tr",null,React.createElement("td",null,"业务类型:"),React.createElement("td",null,React.createElement("span",null,"暂无"),React.createElement("i",{className:"bubble-hover"},"?"),React.createElement("div",{className:"bubble"},"对用户行为和特征进行分析，通过有效触达，挖掘意向客户"))),React.createElement("tr",{className:"hide"},React.createElement("td",null,"结算模式:"),React.createElement("td",null,React.createElement("span",{className:"jsms-title"},"暂无"),React.createElement("i",{className:"bubble-hover"},"?"),React.createElement("div",{className:"bubble jsms-text",style:{width:"258px"}},"与甲方数据查重后进行录音的质量检验")))):React.createElement("table",null,React.createElement("tr",null,React.createElement("td",null,"业务类型:"),React.createElement("td",null,React.createElement("span",null,isNull(this.state.data.servicetype)?"暂无":this.state.serviceType[this.state.data.servicetype]),React.createElement("i",{className:"bubble-hover"},"?"),React.createElement("div",{className:"bubble"},"对用户行为和特征进行分析，通过有效触达，挖掘意向客户"))),React.createElement("tr",{className:"hide"},React.createElement("td",null,"结算模式:"),React.createElement("td",null,React.createElement("span",{className:"jsms-title"},isNull(this.state.data.paymentstandard)?"暂无":this.state.data.paymentstandard),React.createElement("i",{className:"bubble-hover"},"?"),React.createElement("div",{className:"bubble jsms-text",style:{width:"258px"}},"与甲方数据查重后进行录音的质量检验"))))}}),c=React.createClass({displayName:"Hangy",getInitialState:function(){return{data:null}},componentDidUpdate:function(){},render:function(){return isNull(this.state.data)?React.createElement("table",null,React.createElement("tr",null,React.createElement("td",null,"行",React.createElement("span",{className:"zw"}),"业:"),React.createElement("td",null,React.createElement("span",null,"暂无"))),React.createElement("tr",null,React.createElement("td",null,"行业细分:"),React.createElement("td",null,React.createElement("span",null,"暂无")))):React.createElement("table",null,React.createElement("tr",null,React.createElement("td",null,"行",React.createElement("span",{className:"zw"}),"业:"),React.createElement("td",null,React.createElement("span",null,"教育培训"))),React.createElement("tr",null,React.createElement("td",null,"行业细分:"),React.createElement("td",null,React.createElement("span",null,isNull(this.state.data.demandname)?"暂无":this.state.data.demandname.substr(1*this.state.data.demandname.lastIndexOf("-")+1)))))}}),r=React.createClass({displayName:"Mbkh",getInitialState:function(){return{data:null}},render:function(){return isNull(this.state.data)?React.createElement("table",null,React.createElement("tr",null,React.createElement("td",null,"目标人群:"),React.createElement("td",null,React.createElement("span",null,"暂无")))):React.createElement("table",null,React.createElement("tr",null,React.createElement("td",null,"目标人群:"),React.createElement("td",null,React.createElement("span",null,isNull(this.state.data.beginage)?"暂无":this.state.data.beginage+"-"+this.state.data.endage+"岁"))))}}),s=React.createClass({displayName:"Jbxx",getInitialState:function(){return{data:null}},render:function(){return isNull(this.state.data)?React.createElement("table",null,React.createElement("tr",null,React.createElement("td",null,"需求名称:"),React.createElement("td",null,React.createElement("span",null,"暂无"))),React.createElement("tr",null,React.createElement("td",null,"需求描述:"),React.createElement("td",null,React.createElement("span",null,"暂无"))),React.createElement("tr",null,React.createElement("td",null,"产品名称:"),React.createElement("td",null,React.createElement("span",null,"暂无"))),React.createElement("tr",null,React.createElement("td",null,"开始日期:"),React.createElement("td",null,React.createElement("span",null,"暂无"))),React.createElement("tr",null,React.createElement("td",null,"结束日期:"),React.createElement("td",null,React.createElement("span",null,"暂无"))),React.createElement("tr",null,React.createElement("td",null,"项目负责人:"),React.createElement("td",null,React.createElement("span",null,"无"))),React.createElement("tr",null,React.createElement("td",null,"负责人电话:"),React.createElement("td",null,React.createElement("span",null,"无")))):React.createElement("table",null,React.createElement("tr",null,React.createElement("td",null,"需求名称:"),React.createElement("td",null,React.createElement("span",null,isNull(this.state.data.demandname)?"暂无":this.state.data.demandname))),React.createElement("tr",null,React.createElement("td",null,"需求描述:"),React.createElement("td",null,React.createElement("span",null,isNull(this.state.data.demanddescription)?"暂无":this.state.data.demanddescription))),React.createElement("tr",null,React.createElement("td",{style:{"vertical-align":"top","line-height":"30px"}},"产品介绍:"),React.createElement("td",null,isNull(this.state.data.path)?"暂无":React.createElement("p",null,"产品介绍附件:",React.createElement("a",{href:isNull(this.state.data.path)?"javascript:":domainDownShort+this.state.data.path,style:{color:"#1aa0ff"}},"下载>>")))),React.createElement("tr",null,React.createElement("td",null,"开始日期:"),React.createElement("td",null,React.createElement("span",null,isNull(this.state.data.begintime)?"暂无":this.state.data.begintime))),React.createElement("tr",null,React.createElement("td",null,"结束日期:"),React.createElement("td",null,React.createElement("span",null,isNull(this.state.data.endtime)?"暂无":this.state.data.endtime))),React.createElement("tr",null,React.createElement("td",null,"项目负责人:"),React.createElement("td",null,React.createElement("span",null,isNull(this.state.data.pleader)?"无":this.state.data.pleader))),React.createElement("tr",null,React.createElement("td",null,"负责人电话:"),React.createElement("td",null,React.createElement("span",null,isNull(this.state.data.pphone)?"无":this.state.data.pphone))))}}),m=React.createClass({displayName:"Fbfb",getInitialState:function(){return{data:null}},render:function(){return!isNull(this.state.data)&&!isNull(this.state.data.areaanddemandquantity)&&React.createElement("div",{className:"area_table"},JSON.parse(this.state.data.areaanddemandquantity).map(function(e,t){return React.createElement("div",{className:"areaList"},React.createElement("div",{className:"input"},React.createElement("label",null,"目标区域："),e.target),React.createElement("div",{className:"input"},React.createElement("label",null,"发布数量："),React.createElement("span",{className:"size"},e.releasenum),"条"),React.createElement("div",{className:"input"},React.createElement("label",null,"单价："),React.createElement("span",{className:"size"},e.price),"元"),React.createElement("span",{className:"green"},"总价：",React.createElement("span",{className:"size"},e.totalprice),"元"))}))}}),i=React.createClass({displayName:"Fj",getInitialState:function(){return{data:null}},render:function(){return isNull(this.state.data)?React.createElement("div",{className:"fj_style"},React.createElement("div",null,React.createElement("p",null,"免费定制标签:"),React.createElement("p",null,"无")),React.createElement("div",null,React.createElement("p",null,"选择的标签:"),React.createElement("p",null,"无")),React.createElement("div",null,React.createElement("p",null,"自定义标签:"),React.createElement("p",null,"无"))):React.createElement("div",{className:"fj_style"},React.createElement("div",{className:"box"},React.createElement("h4",null,"免费定制标签"),React.createElement("div",{className:"tag-free"},React.createElement(d,null))),React.createElement("div",{className:"box"},React.createElement("h4",null,"选择的标签"),React.createElement("div",{className:"tag-free"},this.state.data.chargeTag&&JSON.parse(this.state.data.chargeTag).length>0?React.createElement("ul",{className:"tag3"},JSON.parse(this.state.data.chargeTag).map(function(e,t){return React.createElement("li",{key:t},e.tagname)})):React.createElement("p",null,"暂无"))),React.createElement("div",{className:"box"},React.createElement("h4",null,"自定义标签"),React.createElement("div",{className:"tag-free"},this.state.data.customlabel&&JSON.parse(this.state.data.customlabel).length?React.createElement("ul",{className:"tag3"},JSON.parse(this.state.data.customlabel).map(function(e,t){return React.createElement("li",{key:t},e.tagname)})):React.createElement("p",null,"暂无"))))}}),d=React.createClass({displayName:"FreeTag",getInitialState:function(){return{config:[]}},componentDidMount:function(){this.state.config,$.ajax({type:"GET",url:domain+"/baseLabel/1",dataType:"json",contentType:"application/x-www-form-urlencoded;charset=utf-8",cache:!1,success:function(e){return"N"==e.code?($(".loading_cover").hide(),!1):("N001"==e.code&&(sessionStorage.clear(),window.location.href="/login.html"),void this.setState({config:e.lableList}))}.bind(this),error:function(){}})},render:function(){var e=this.state.config;if(""==e||null==e)return React.createElement("p",null,"暂无");var t=e.map(function(e,t){return React.createElement("li",{key:t},e.labelName)});return React.createElement("ul",{className:"tag1"},t)}}),u=React.createClass({displayName:"State",getInitialState:function(){return{data:null,calcullationDetailHtml:""}},setCopy:function(){sessionStorage.setItem("copy","normal")},createcalcullationDetailHtml:function(){if(this.props.data){var e=this.props.data.fdstate,t=isNull(this.props.data.releasenum)?0:this.props.data.releasenum,a=(isNull(this.props.data.applicationnum)?0:this.props.data.applicationnum,isNull(this.props.data.finishnum)?0:this.props.data.finishnum),l=isNull(this.props.data.demandpricetol)?0:this.props.data.demandpricetol,n=a/(0==t?1:t),c=new Date,r=new Date(this.props.data.endtime),s=Math.ceil(r.diff(c));if(this.props.data.packageid,parseInt(s)<0&&(s=0),1==e)return React.createElement("div",null,React.createElement("div",{className:"right",style:{"margin-bottom":"20px"}},React.createElement("div",{className:"title-explain"},"距离项目结束还剩"),React.createElement("div",{className:"context-explain package"},React.createElement("div",{className:"countdown"},React.createElement("span",{className:"blue"},React.createElement("span",{className:"size"},s)," ",React.createElement("span",{className:"day"},"天"))))),React.createElement("div",{className:"right",style:{"margin-bottom":"20px",padding:"20px"}},React.createElement("p",{style:{margin:"15px 0px 27px 0px",color:"#999","text-align":"center"}},"该需求正在审核中，请耐心等待！"),React.createElement("a",{style:{display:"none"},href:"new_demand_copy_5.html#copy"+demandid,"data-reactid":".6.1.1"},React.createElement("button",{id:"copyDemand",type:"button",className:"submit",onclick:this.setCopy},"复制需求")),React.createElement("a",{href:"javascript:self.location=document.referrer;"},React.createElement("button",{type:"button",className:"drafts",style:{margin:"0 auto",display:"block"}},"返回上一页"))));if(2==e)return React.createElement("div",null,React.createElement("div",{className:"right",style:{"margin-bottom":"20px"}},React.createElement("div",{className:"title-explain"},"距离项目结束还剩"),React.createElement("div",{className:"context-explain package"},React.createElement("div",{className:"countdown"},React.createElement("span",{className:"blue"},React.createElement("span",{className:"size"},s)," ",React.createElement("span",{className:"day"},"天"))))),React.createElement("div",{className:"right"},React.createElement("div",{className:"title-explain"},React.createElement("span",{style:{"font-size":"16px",float:"left","margin-left":"20px"}},"需求进度")),React.createElement("div",{className:"context-explain package"},React.createElement("div",null,React.createElement("table",null,React.createElement("tr",null,React.createElement("td",null,React.createElement("label",null,"完成进度:"))),React.createElement("tr",null,React.createElement("td",{colSpan:"2"},React.createElement("div",{className:"progress"},React.createElement("b",null,parseInt(100*n),"%"),React.createElement("div",{className:"progress-bar brown",style:{"max-width":"100%",width:parseInt(100*n)+"%"}}),React.createElement("div",{className:"bublle"},React.createElement("p",null,"完成量：",a),React.createElement("p",null,"发布量：",t))))),React.createElement("tr",null,React.createElement("td",null,React.createElement("label",null,"预计结算金额:"))),React.createElement("tr",null,React.createElement("td",null,React.createElement("span",{className:"money",style:{float:"left"}},React.createElement("span",null,"¥"),React.createElement("span",{className:"size"},(l*n).toFixed(2)))))),React.createElement("a",{style:{display:"none"},href:"new_demand_copy_5.html#copy"+demandid,"data-reactid":".6.1.1"},React.createElement("button",{id:"copyDemand",type:"button",className:"submit",onclick:this.setCopy},"复制需求")),React.createElement("a",{href:"javascript:self.location=document.referrer;"},React.createElement("button",{type:"button",className:"drafts",style:{margin:"0 auto",display:"block"}},"返回上一页"))))));if(3==e)return React.createElement("div",null,React.createElement("div",{className:"right"},React.createElement("div",{className:"title-explain"},React.createElement("span",{style:{"font-size":"16px",float:"left","margin-left":"20px"}},"需求进度")),React.createElement("div",{className:"context-explain package"},React.createElement("div",null,React.createElement("table",null,React.createElement("tr",null,React.createElement("td",null,React.createElement("label",null,"完成进度:"))),React.createElement("tr",null,React.createElement("td",{colSpan:"2"},React.createElement("div",{className:"progress"},React.createElement("b",null,parseInt(100*n),"%"),React.createElement("div",{className:"progress-bar brown",style:{"max-width":"100%",width:parseInt(100*n)+"%"}}),React.createElement("div",{className:"bublle"},React.createElement("p",null,"完成量：",a),React.createElement("p",null,"发布量：",t))))),React.createElement("tr",null,React.createElement("td",null,React.createElement("label",null,"预计结算金额:"))),React.createElement("tr",null,React.createElement("td",null,React.createElement("span",{className:"money",style:{float:"left"}},React.createElement("span",null,"¥"),React.createElement("span",{className:"size"},(l*n).toFixed(2)))))),React.createElement("a",{style:{display:"none"},href:"new_demand_copy_5.html#copy"+demandid,"data-reactid":".6.1.1"},React.createElement("button",{id:"copyDemand",type:"button",className:"submit",onclick:this.setCopy},"复制需求")),React.createElement("a",{href:"javascript:self.location=document.referrer;"},React.createElement("button",{type:"button",className:"drafts",style:{margin:"0 auto",display:"block"}},"返回上一页"))))));if(4==e)return React.createElement("div",null,React.createElement("div",{className:"right"},React.createElement("div",{className:"title-explain"},React.createElement("span",{style:{"font-size":"16px",float:"left","margin-left":"20px"}},"需求进度")),React.createElement("div",{className:"context-explain package"},React.createElement("div",null,React.createElement("table",null,React.createElement("tr",null,React.createElement("td",{style:{textAlign:"center",color:"#fd5352"}},"需求已完成！")),React.createElement("tr",null,React.createElement("td",null,React.createElement("label",null,"完成进度:"))),React.createElement("tr",null,React.createElement("td",{colSpan:"2"},React.createElement("div",{className:"progress"},React.createElement("b",null,parseInt(100*n),"%"),React.createElement("div",{className:"progress-bar brown",style:{"max-width":"100%",width:parseInt(100*n)+"%"}}),React.createElement("div",{className:"bublle"},React.createElement("p",null,"完成量：",a),React.createElement("p",null,"发布量：",t))))),React.createElement("tr",null,React.createElement("td",null,React.createElement("label",null,"预计结算金额:"))),React.createElement("tr",null,React.createElement("td",null,React.createElement("span",{className:"money",style:{float:"left"}},React.createElement("span",null,"¥"),React.createElement("span",{className:"size"},(l*n).toFixed(2)))))),React.createElement("a",{href:"javascript:self.location=document.referrer;"},React.createElement("button",{type:"button",className:"drafts",style:{width:"100%"}},"返回上一页"))))));if(5==e)return React.createElement("div",{className:"right"},React.createElement("div",{className:"title-explain"},"需求预览"),React.createElement("div",{className:"context-explain package"},React.createElement("div",null,React.createElement("table",null,React.createElement("tr",null,React.createElement("td",{width:"80px"},React.createElement("label",null,"需求状态:")),React.createElement("td",null,React.createElement("span",null,"驳回"))),React.createElement("tr",null,React.createElement("td",{style:{"vertical-align":"top"}},React.createElement("label",null,"原因:")),React.createElement("td",null,React.createElement("span",null,isNull(this.props.data.remark)?"暂无":this.props.data.remark))),React.createElement("tr",null,React.createElement("td",null,React.createElement("label",null,"时间:")),React.createElement("td",null,React.createElement("span",null,isNull(this.props.data.updatetime)?"暂无":this.props.data.updatetime)))),React.createElement("a",{href:"javascript:self.location=document.referrer;"},React.createElement("button",{type:"button",className:"drafts",style:{width:"100%"}},"返回上一页")))))}},componentDidMount:function(){this.setState({calcullationDetailHtml:this.createcalcullationDetailHtml()}),$(".progress_speed_show").live("click",function(){$(".progress_speed").show()}),$(".progress_speed_show_new").live("click",function(){location.href="customerreportdown.html"+location.hash}),$(".progress_speed .close,.progress_speed .button_close").live("click",function(){$(".progress_speed").hide()})},componentDidUpdate:function(){$(".progress").hover(function(){$(this).find(".bublle").show()},function(){$(this).find(".bublle").hide()})},render:function(){return React.createElement("div",null,this.state.calcullationDetailHtml)}}),o=React.createClass({displayName:"Progress_speed",getInitialState:function(){return{data:null}},render:function(){return!isNull(this.state.data)&&(isNull(this.state.data.demandProgressList)?React.createElement("div",null,React.createElement("div",{className:"top"},React.createElement("span",null,"需求进度详情"),React.createElement("i",{className:"close"})),React.createElement("div",{className:"main"}),React.createElement("div",{className:"bottom"},React.createElement("button",{type:"button",className:"button_close"},"确 定"))):0==this.state.data.demandProgressList.length?React.createElement("div",null,React.createElement("div",{className:"top"},React.createElement("span",null,"需求进度详情"),React.createElement("i",{className:"close"})),React.createElement("div",{className:"main"}),React.createElement("div",{className:"bottom"},React.createElement("button",{type:"button",className:"button_close"},"确 定"))):React.createElement("div",null,React.createElement("div",{className:"top"},React.createElement("span",null,"需求进度详情"),React.createElement("i",{className:"close"})),React.createElement("div",{className:"main"},this.state.data.demandProgressList.map(function(e,t){return React.createElement("div",{className:"demand_list"},React.createElement("p",{className:"demand_title"},e.targecity),React.createElement("p",{className:"demand_main"},React.createElement("span",null,"单价：",e.orderprice,"元"),React.createElement("span",null,"发布量：",e.releasenum," "),React.createElement("span",null,"完成量：",e.fishnum),React.createElement("span",null,"预计结算金额：",React.createElement("span",{className:"red"},"¥ ",React.createElement("span",{className:"size"},(orderpricetol*finlishScale).toFixed(2))))))})),React.createElement("div",{className:"bottom"},React.createElement("button",{type:"button",className:"button_close"},"确 定"))))}});React.render(React.createElement(n,null),$("#new_demand div.demend_left .form_col1>.main")[0]),React.render(React.createElement(c,null),$("#new_demand div.demend_left .form_col6>.main")[0]),React.render(React.createElement(r,null),$("#new_demand div.demend_left .form_col2>.main")[0]),React.render(React.createElement(s,null),$("#new_demand div.demend_left .form_col3>.main")[0]),React.render(React.createElement(m,null),$("#new_demand div.demend_left .form_col4>.main")[0]),React.render(React.createElement(o,null),$(".progress_speed")[0]),$.ajax({type:"GET",url:domain137+"/quality/demanddetail/"+location.hash.slice(1),dataType:"json",cache:!1,success:function(e){if("N001"==e.code)return sessionStorage.clear(),$(".loading_cover").hide(),window.location.href="/login.html",!1;if("N"==e.code)return $(".loading_cover").hide(),!1;if("0"==e.code){for(var t=Array.isArray(e.attachment)?e.attachment:[],a={},d=0;d<t.length;d++)"5"==t[d].type&&(a.path=t[d].path);a=l({},e.demand,a),$(".loading_cover").hide(),$(".title_select p").text(e.demand.demandname),React.render(React.createElement(n,null),$("#new_demand div.demend_left .form_col1>.main")[0],function(){this.setState({data:e.demand})}),React.render(React.createElement(c,null),$("#new_demand div.demend_left .form_col6>.main")[0],function(){this.setState({data:e.demand})}),React.render(React.createElement(r,null),$("#new_demand div.demend_left .form_col2>.main")[0],function(){this.setState({data:e.demand})}),React.render(React.createElement(s,null),$("#new_demand div.demend_left .form_col3>.main")[0],function(){this.setState({data:a})}),React.render(React.createElement(m,null),$("#new_demand div.demend_left .form_col4>.main")[0],function(){this.setState({data:e.demand})}),React.render(React.createElement(i,null),$("#new_demand div.demend_left .form_col5>.main")[0],function(){this.setState({data:e.demand})}),React.render(React.createElement(o,null),$(".progress_speed")[0],function(){this.setState({data:p.detail})}),React.render(React.createElement(u,{data:e.demand}),$("#new_demand div.demend_right")[0],function(){this.setState({data:e.demand})})}},error:function(e){$(".loading_cover").hide()}});var p={1:{name:"审核中"},2:{name:"进行中"},3:{name:"结算中"},4:{name:"已完成"}}},26:function(e,t,a){function l(e,t){for(var a=0;a<e.length;a++){var l=e[a],n=p[l.id];if(n){n.refs++;for(var c=0;c<n.parts.length;c++)n.parts[c](l.parts[c]);for(;c<l.parts.length;c++)n.parts.push(i(l.parts[c],t))}else{for(var r=[],c=0;c<l.parts.length;c++)r.push(i(l.parts[c],t));p[l.id]={id:l.id,refs:1,parts:r}}}}function n(e){for(var t=[],a={},l=0;l<e.length;l++){var n=e[l],c=n[0],r=n[1],s=n[2],m=n[3],i={css:r,media:s,sourceMap:m};a[c]?a[c].parts.push(i):t.push(a[c]={id:c,parts:[i]})}return t}function c(e,t){var a=f(),l=b[b.length-1];if("top"===e.insertAt)l?l.nextSibling?a.insertBefore(t,l.nextSibling):a.appendChild(t):a.insertBefore(t,a.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");a.appendChild(t)}}function r(e){e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",c(e,t),t}function m(e){var t=document.createElement("link");return t.rel="stylesheet",c(e,t),t}function i(e,t){var a,l,n;if(t.singleton){var c=v++;a=h||(h=s(t)),l=d.bind(null,a,c,!1),n=d.bind(null,a,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(a=m(t),l=o.bind(null,a),n=function(){r(a),a.href&&URL.revokeObjectURL(a.href)}):(a=s(t),l=u.bind(null,a),n=function(){r(a)});return l(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;l(e=t)}else n()}}function d(e,t,a,l){var n=a?"":l.css;if(e.styleSheet)e.styleSheet.cssText=N(t,n);else{var c=document.createTextNode(n),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(c,r[t]):e.appendChild(c)}}function u(e,t){var a=t.css,l=t.media;if(l&&e.setAttribute("media",l),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}function o(e,t){var a=t.css,l=t.sourceMap;l&&(a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */");var n=new Blob([a],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(n),c&&URL.revokeObjectURL(c)}var p={},R=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},E=R(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),f=R(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,v=0,b=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=E()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var a=n(e);return l(a,t),function(e){for(var c=[],r=0;r<a.length;r++){var s=a[r],m=p[s.id];m.refs--,c.push(m)}if(e){var i=n(e);l(i,t)}for(var r=0;r<c.length;r++){var m=c[r];if(0===m.refs){for(var d=0;d<m.parts.length;d++)m.parts[d]();delete p[m.id]}}}};var N=function(){var e=[];return function(t,a){return e[t]=a,e.filter(Boolean).join("\n")}}()},27:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var a=this[t];a[2]?e.push("@media "+a[2]+"{"+a[1]+"}"):e.push(a[1])}return e.join("")},e.i=function(t,a){"string"==typeof t&&(t=[[null,t,""]]);for(var l={},n=0;n<this.length;n++){var c=this[n][0];"number"==typeof c&&(l[c]=!0)}for(n=0;n<t.length;n++){var r=t[n];"number"==typeof r[0]&&l[r[0]]||(a&&!r[2]?r[2]=a:a&&(r[2]="("+r[2]+") and ("+a+")"),e.push(r))}},e}},471:function(e,t,a){var l=a(515);"string"==typeof l&&(l=[[e.id,l,""]]),a(26)(l,{}),l.locals&&(e.exports=l.locals)},515:function(e,t,a){t=e.exports=a(27)(),t.push([e.id,"#new_demand .demend_right .title-explain{overflow:hidden}#new_demand .demend_right .context-explain{padding-top:19px}#new_demand .right .context-explain.package table td .progress-bar{background:#77c655}",""])}});