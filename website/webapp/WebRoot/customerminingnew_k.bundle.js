!function(e){function t(l){if(a[l])return a[l].exports;var n=a[l]={exports:{},id:l,loaded:!1};return e[l].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}({0:function(e,t,a){"use strict";function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}();a(470);var s=React.createClass({displayName:"Yewu",getInitialState:function(){return{serviceType:["","销售线索挖掘","数据筛选","人工客服"],data:null}},componentDidUpdate:function(){"查重后质检"==$(".jsms-title").text()&&$(".jsms-text").text("与甲方数据查重后进行录音的质量检验"),"回访电话接通数"==$(".jsms-title").text()&&$(".jsms-text").text("甲方回访后的接通数量，剔除无效与未接通数（>4次）"),"数据条目"==$(".jsms-title").text()&&$(".jsms-text").text("按实际提交数据条目数乘以单价进行结算"),"按提交线索数量结算"==$(".jsms-title").text()&&$(".jsms-text").text("按提交线索数量结算")},render:function(){return isNull(this.state.data)?React.createElement("table",null,React.createElement("tr",null,React.createElement("td",null,"业务类型:"),React.createElement("td",null,React.createElement("span",null,"暂无"),React.createElement("i",{className:"bubble-hover"},"?"),React.createElement("div",{className:"bubble"},"对用户行为和特征进行分析，通过有效触达，挖掘意向客户"))),React.createElement("tr",null,React.createElement("td",null,"行业:"),React.createElement("td",null,React.createElement("span",null,"暂无"))),React.createElement("tr",{className:"hide"},React.createElement("td",null,"结算模式:"),React.createElement("td",null,React.createElement("span",{className:"jsms-title"},"暂无"),React.createElement("i",{className:"bubble-hover"},"?"),React.createElement("div",{className:"bubble jsms-text",style:{width:"258px"}},"与甲方数据查重后进行录音的质量检验")))):React.createElement("table",null,React.createElement("tr",null,React.createElement("td",null,"业务类型:"),React.createElement("td",null,React.createElement("span",null,isNull(this.state.data.servicetype)?"暂无":this.state.serviceType[this.state.data.servicetype]),React.createElement("i",{className:"bubble-hover"},"?"),React.createElement("div",{className:"bubble"},"对用户行为和特征进行分析，通过有效触达，挖掘意向客户"))),React.createElement("tr",null,React.createElement("td",null,"行业:"),React.createElement("td",null,React.createElement("span",null,isNull(this.state.data.industry)?"暂无":this.state.data.industry))),React.createElement("tr",{className:"hide"},React.createElement("td",null,"结算模式:"),React.createElement("td",null,React.createElement("span",{className:"jsms-title"},isNull(this.state.data.paymentstandard)?"暂无":this.state.data.paymentstandard),React.createElement("i",{className:"bubble-hover"},"?"),React.createElement("div",{className:"bubble jsms-text",style:{width:"258px"}},"暂无"))))}}),m=React.createClass({displayName:"Mbkh",getInitialState:function(){return{data:null,targetChannel:["","电话营销","网络营销","地推推广"]}},render:function(){return isNull(this.state.data)?React.createElement("table",null,React.createElement("tr",null,React.createElement("td",null,"目标人群:"),React.createElement("td",null,React.createElement("span",null,"暂无"))),React.createElement("tr",null,React.createElement("td",null,"对象年龄:"),React.createElement("td",null,"暂无")),React.createElement("tr",null,React.createElement("td",null,"获客渠道:"),React.createElement("td",null,"暂无"))):React.createElement("table",null,React.createElement("tr",null,React.createElement("td",null,"目标人群:"),React.createElement("td",null,React.createElement("span",null,isNull(this.state.data.targethumen)?"暂无":this.state.data.targethumen))),React.createElement("tr",null,React.createElement("td",null,"对象年龄:"),React.createElement("td",null,isNull(this.state.data.beginage)&&isNull(this.state.data.endage)?"暂无":this.state.data.beginage+"-"+this.state.data.endage+" 周岁")),React.createElement("tr",null,React.createElement("td",null,"获客渠道:"),React.createElement("td",null,isNull(this.state.data.category2)?"暂无":this.state.targetChannel[this.state.data.category2])))}}),i=React.createClass({displayName:"Jbxx",getInitialState:function(){return{data:null}},render:function(){return isNull(this.state.data)?React.createElement("table",null,React.createElement("tr",null,React.createElement("td",null,"需求名称:"),React.createElement("td",null,React.createElement("span",null,"暂无"))),React.createElement("tr",null,React.createElement("td",null,"需求描述:"),React.createElement("td",null,React.createElement("span",null,"暂无"))),React.createElement("tr",null,React.createElement("td",null,"产品名称:"),React.createElement("td",null,React.createElement("span",null,"暂无"))),React.createElement("tr",null,React.createElement("td",{style:{"vertical-align":"top","line-height":"30px"}},"产品介绍:"),React.createElement("td",null,"暂无")),React.createElement("tr",null,React.createElement("td",null,"开始日期:"),React.createElement("td",null,React.createElement("span",null,"暂无"))),React.createElement("tr",null,React.createElement("td",null,"结束日期:"),React.createElement("td",null,React.createElement("span",null,"暂无"))),React.createElement("tr",null,React.createElement("td",null,"项目负责人:"),React.createElement("td",null,React.createElement("span",null,"暂无"))),React.createElement("tr",null,React.createElement("td",null,"负责人电话:"),React.createElement("td",null,React.createElement("span",null,"暂无")))):React.createElement("table",null,React.createElement("tr",null,React.createElement("td",null,"需求名称:"),React.createElement("td",null,React.createElement("span",null,isNull(this.state.data.demandname)?"暂无":this.state.data.demandname))),React.createElement("tr",null,React.createElement("td",null,"需求描述:"),React.createElement("td",null,React.createElement("span",null,isNull(this.state.data.demanddescription)?"暂无":this.state.data.demanddescription))),React.createElement("tr",null,React.createElement("td",null,"产品名称:"),React.createElement("td",null,React.createElement("span",null,isNull(this.state.data.productname)?"暂无":this.state.data.productname))),React.createElement("tr",null,React.createElement("td",{style:{"vertical-align":"top","line-height":"30px"}},"产品介绍:"),React.createElement("td",null,isNull(this.state.data.demand)?React.createElement("p",null,"暂无"):React.createElement("p",null,this.state.data.demand))),React.createElement("tr",null,React.createElement("td",null,"开始日期:"),React.createElement("td",null,React.createElement("span",null,isNull(this.state.data.begintime)?"暂无":this.state.data.begintime))),React.createElement("tr",null,React.createElement("td",null,"结束日期:"),React.createElement("td",null,React.createElement("span",null,isNull(this.state.data.endtime)?"暂无":this.state.data.endtime))),React.createElement("tr",null,React.createElement("td",null,"项目负责人:"),React.createElement("td",null,React.createElement("span",null,isNull(this.state.data.pleader)?"暂无":this.state.data.pleader))),React.createElement("tr",null,React.createElement("td",null,"负责人电话:"),React.createElement("td",null,React.createElement("span",null,isNull(this.state.data.pphone)?"暂无":this.state.data.pphone))))}}),d=React.createClass({displayName:"Fbfb",getInitialState:function(){return{data:null}},render:function(){return!isNull(this.state.data)&&!isNull(this.state.data.areaanddemandquantity)&&React.createElement("div",{className:"area_table"},JSON.parse(this.state.data.areaanddemandquantity).map(function(e,t){return React.createElement("div",{className:"areaList",key:t},React.createElement("div",{className:"input"},React.createElement("label",null,"目标区域:"),e.target),React.createElement("div",{className:"input"},React.createElement("label",null,"发布数量:"),React.createElement("span",{className:"size"},e.releasenum),"条"),React.createElement("div",{className:"input"},React.createElement("label",null,"单价:"),React.createElement("span",{className:"size"},e.price),"元"),React.createElement("span",{className:"green"},"总价:",React.createElement("span",{className:"size"},e.totalprice),"元"),React.createElement("br",null),React.createElement("div",{className:"input"},React.createElement("label",null,"单价说明:"),React.createElement("span",null,isNull(e.remark)?"暂无":e.remark)))}))}}),u=React.createClass({displayName:"Fj",getInitialState:function(){return{data:null,type:["","销售线索:","话术文件:","目标客户名单:","质检标准:","产品介绍:"]}},render:function(){var e=this;return React.createElement("div",{className:"fj_style"},Array.isArray(this.state.data)&&this.state.data.length>0?this.state.data.map(function(t,a){return React.createElement("div",{key:a},React.createElement("div",null,React.createElement("p",null,e.state.type[t.type]),React.createElement("p",null,"1 份"),React.createElement("p",null,React.createElement("a",{href:domainDownShort+t.path},"下载"))))}):React.createElement("div",null,React.createElement("div",null,React.createElement("p",null,"销售线索文件:"),React.createElement("p",null,"无")),React.createElement("div",null,React.createElement("p",null,"话术文件:"),React.createElement("p",null,"无")),React.createElement("div",null,React.createElement("p",null,"目标客户名单:"),React.createElement("p",null,"无"))))}}),o=function(e){function t(e){l(this,t);var a=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={data:null,calcullationDetailHtml:"",copyDemandHtml:"",checkIndustryHtml:""},a}return c(t,e),r(t,[{key:"createcalcullationDetailHtml",value:function(){if(this.props.data){var e=this.props.data.fdstate,t=isNull(this.props.data.releasenum)?0:this.props.data.releasenum,a=(isNull(this.props.data.applicationnum)?0:this.props.data.applicationnum,isNull(this.props.data.finishnum)?0:this.props.data.finishnum),l=isNull(this.props.data.paymentmoney)?0:this.props.data.paymentmoney,n=a/(0==t?1:t),c=new Date,r=new Date(this.props.data.endtime),s=Math.ceil(r.diff(c));if(parseInt(s)<0&&(s=0),1==e)return React.createElement("div",null,React.createElement("div",{className:"right",style:{"margin-bottom":"20px"}},React.createElement("div",{className:"title-explain"},"距离项目结束还剩"),React.createElement("div",{className:"context-explain package"},React.createElement("div",{className:"countdown"},React.createElement("span",{className:"blue"},React.createElement("span",{className:"size"},s)," ",React.createElement("span",{className:"day"},"天"))))),React.createElement("div",{className:"right",style:{"margin-bottom":"20px",padding:"20px"}},React.createElement("p",{style:{margin:"15px 0px 27px 0px",color:"#999","text-align":"center"}},"该需求正在审核中，请耐心等待！"),React.createElement("a",{href:"new_demand_copy_5.html#copy"+demandid,"data-reactid":".6.1.1"},React.createElement("button",{id:"copyDemand",type:"button",className:"submit",onclick:this.setCopy},"复制需求")),React.createElement("a",{href:"javascript:self.location=document.referrer;"},React.createElement("button",{type:"button",className:"drafts",style:{margin:0,display:"inline-block"}},"返回上一页"))));if(2==e)return React.createElement("div",null,React.createElement("div",{className:"right",style:{"margin-bottom":"20px"}},React.createElement("div",{className:"title-explain"},"距离项目结束还剩"),React.createElement("div",{className:"context-explain package"},React.createElement("div",{className:"countdown"},React.createElement("span",{className:"blue"},React.createElement("span",{className:"size"},s)," ",React.createElement("span",{className:"day"},"天"))))),React.createElement("div",{className:"right"},React.createElement("div",{className:"title-explain"},React.createElement("span",{style:{"font-size":"16px",float:"left","margin-left":"20px"}},"需求进度")),React.createElement("div",{className:"context-explain package"},React.createElement("div",null,React.createElement("table",null,React.createElement("tr",null,React.createElement("td",null,React.createElement("label",null,"完成进度:"))),React.createElement("tr",null,React.createElement("td",{colSpan:"2"},React.createElement("div",{className:"progress"},React.createElement("b",null,parseInt(100*n),"%"),React.createElement("div",{className:"progress-bar brown",style:{"max-width":"100%",width:parseInt(100*n)+"%"}}),React.createElement("div",{className:"bublle"},React.createElement("p",null,"完成量：",a),React.createElement("p",null,"发布量：",t))))),React.createElement("tr",null,React.createElement("td",null,React.createElement("label",null,"预计结算金额:"))),React.createElement("tr",null,React.createElement("td",null,React.createElement("span",{className:"money",style:{float:"left"}},React.createElement("span",null,"¥"),React.createElement("span",{className:"size"},(l*n).toFixed(2)))))),React.createElement("a",{href:"new_demand_copy_5.html#copy"+demandid,"data-reactid":".6.1.1"},React.createElement("button",{id:"copyDemand",type:"button",className:"submit",onclick:this.setCopy},"复制需求")),React.createElement("a",{href:"javascript:self.location=document.referrer;"},React.createElement("button",{type:"button",className:"drafts",style:{margin:0,display:"inline-block"}},"返回上一页"))))));if(3==e)return React.createElement("div",null,React.createElement("div",{className:"right"},React.createElement("div",{className:"title-explain"},React.createElement("span",{style:{"font-size":"16px",float:"left","margin-left":"20px"}},"需求进度")),React.createElement("div",{className:"context-explain package"},React.createElement("div",null,React.createElement("table",null,React.createElement("tr",null,React.createElement("td",null,React.createElement("label",null,"完成进度:"))),React.createElement("tr",null,React.createElement("td",{colSpan:"2"},React.createElement("div",{className:"progress"},React.createElement("b",null,parseInt(100*n),"%"),React.createElement("div",{className:"progress-bar brown",style:{"max-width":"100%",width:parseInt(100*n)+"%"}}),React.createElement("div",{className:"bublle"},React.createElement("p",null,"完成量：",a),React.createElement("p",null,"发布量：",t))))),React.createElement("tr",null,React.createElement("td",null,React.createElement("label",null,"预计结算金额:"))),React.createElement("tr",null,React.createElement("td",null,React.createElement("span",{className:"money",style:{float:"left"}},React.createElement("span",null,"¥"),React.createElement("span",{className:"size"},(l*n).toFixed(2)))))),React.createElement("a",{href:"new_demand_copy_5.html#copy"+demandid,"data-reactid":".6.1.1"},React.createElement("button",{id:"copyDemand",type:"button",className:"submit",onclick:this.setCopy},"复制需求")),React.createElement("a",{href:"javascript:self.location=document.referrer;"},React.createElement("button",{type:"button",className:"drafts",style:{margin:0,display:"inline-block"}},"返回上一页"))))));if(4==e)return React.createElement("div",null,React.createElement("div",{className:"right"},React.createElement("div",{className:"title-explain"},React.createElement("span",{style:{"font-size":"16px",float:"left","margin-left":"20px"}},"需求进度")),React.createElement("div",{className:"context-explain package"},React.createElement("div",null,React.createElement("table",null,React.createElement("tr",null,React.createElement("td",{style:{textAlign:"center",color:"#fd5352"}},"需求已完成！")),React.createElement("tr",null,React.createElement("td",null,React.createElement("label",null,"完成进度:"))),React.createElement("tr",null,React.createElement("td",{colSpan:"2"},React.createElement("div",{className:"progress"},React.createElement("b",null,parseInt(100*n),"%"),React.createElement("div",{className:"progress-bar brown",style:{"max-width":"100%",width:parseInt(100*n)+"%"}}),React.createElement("div",{className:"bublle"},React.createElement("p",null,"完成量：",a),React.createElement("p",null,"发布量：",t))))),React.createElement("tr",null,React.createElement("td",null,React.createElement("label",null,"预计结算金额:"))),React.createElement("tr",null,React.createElement("td",null,React.createElement("span",{className:"money",style:{float:"left"}},React.createElement("span",null,"¥"),React.createElement("span",{className:"size"},(l*n).toFixed(2)))))),React.createElement("a",{href:"javascript:self.location=document.referrer;"},React.createElement("button",{type:"button",className:"drafts",style:{width:"100%"}},"返回上一页"))))));if(5==e)return React.createElement("div",{className:"right"},React.createElement("div",{className:"title-explain"},"需求预览"),React.createElement("div",{className:"context-explain package"},React.createElement("div",null,React.createElement("table",null,React.createElement("tr",null,React.createElement("td",{width:"80px"},React.createElement("label",null,"需求状态:")),React.createElement("td",null,React.createElement("span",null,"驳回"))),React.createElement("tr",null,React.createElement("td",{style:{"vertical-align":"top"}},React.createElement("label",null,"原因:")),React.createElement("td",null,React.createElement("span",null,isNull(this.props.data.remark)?"暂无":this.props.data.remark))),React.createElement("tr",null,React.createElement("td",null,React.createElement("label",null,"时间:")),React.createElement("td",null,React.createElement("span",null,isNull(this.props.data.updatetime)?"暂无":this.props.data.updatetime)))),React.createElement("a",{href:"javascript:self.location=document.referrer;"},React.createElement("button",{type:"button",className:"drafts",style:{width:"100%"}},"返回上一页")))))}}},{key:"componentDidMount",value:function(){this.setState({calcullationDetailHtml:this.createcalcullationDetailHtml()}),this.rootEl=$(".demend_right"),$(".progress_speed_show").live("click",function(){$(".progress_speed").show()}),$(".progress_speed .close,.progress_speed .button_close").live("click",function(){$(".progress_speed").hide()}),this.copyDemandEvent()}},{key:"componentDidUpdate",value:function(){$(".progress").hover(function(){$(this).find(".bublle").show()},function(){$(this).find(".bublle").hide()})}},{key:"copyDemandEvent",value:function(){this.rootEl.on("click","#copyDemand",function(){this.setState({copyDemandHtml:this.copyDemand()}),this.rootEl.find(".cover1").show()}.bind(this)),this.rootEl.on("click",".confirm",function(e){location.href="customer_new_demand.html"}.bind(this)),this.rootEl.on("click",".cancel",function(e){this.rootEl.find(".cover1").hide()}.bind(this)),this.rootEl.on("click",".close2",function(e){this.rootEl.find(".cover1").hide()}.bind(this))}},{key:"copyDemand",value:function(){return React.createElement("div",{className:"cover1"},React.createElement("div",{className:"cover-box"},React.createElement("div",{className:"title"},React.createElement("span",null,"提示"),React.createElement("i",{className:"close2"},"X")),React.createElement("div",{className:"context"},React.createElement("span",null,"网站新的版本已经发布，发布需求流程已经变更，暂时无法使用复制需求功能，"),React.createElement("a",{href:"11111"},"点此从新发布需求")),React.createElement("div",{className:"bt-choose"},React.createElement("button",{className:"confirm bg_blue close2",type:"button"},"确定"),React.createElement("button",{className:"cancel",type:"button"},"取消"))))}},{key:"checkIndustry",value:function(e){switch(e.industry){case"汽车行业":return React.createElement("a",{href:"new_demand_copy_2.html#"+demandid},React.createElement("button",{id:"copyDemand_1",type:"button",className:"submit hide"},"复制需求"));case"医美行业":return React.createElement("a",{href:"new_demand_copy_2.html#"+demandid},React.createElement("button",{id:"copyDemand_1",type:"button",className:"submit hide"},"复制需求"));case"房地产":return React.createElement("a",{href:"new_demand_copy_2.html#"+demandid},React.createElement("button",{id:"copyDemand_1",type:"button",className:"submit hide"},"复制需求"));case"电商平台":return React.createElement("a",{href:"new_demand_copy_2.html#"+demandid},React.createElement("button",{id:"copyDemand_1",type:"button",className:"submit hide"},"复制需求"));case"金融":return React.createElement("a",{href:"new_demand_copy_2.html#"+demandid},React.createElement("button",{id:"copyDemand_1",type:"button",className:"submit hide"},"复制需求"));case"教育培训":return React.createElement("a",{href:"javascript:;"},React.createElement("button",{id:"copyDemand",type:"button",className:"submit"},"复制需求"))}}},{key:"render",value:function(){if(!this.state.data)return React.createElement("div",null);var e=this.state.data.fdstate,t=isNull(this.state.data.releasenum)?0:this.state.data.releasenum,a=isNull(this.state.data.finishnum)?0:this.state.data.finishnum,l=isNull(this.state.data.paymentmoney)?0:this.state.data.paymentmoney,n=a/(0==t?1:t),c=new Date,r=new Date(this.state.data.endtime),s=Math.ceil(r.diff(c));return parseInt(s)<0&&(s=0),1==e?React.createElement("div",null,React.createElement("div",{className:"right",style:{"margin-bottom":"20px"}},React.createElement("div",{className:"title-explain"},"距离项目结束还剩"),React.createElement("div",{className:"context-explain package"},React.createElement("div",{className:"countdown"},React.createElement("span",{className:"blue"},React.createElement("span",{className:"size"},s)," ",React.createElement("span",{className:"day"},"天"))))),React.createElement("div",{className:"right",style:{"margin-bottom":"20px",padding:"20px"}},React.createElement("p",{style:{margin:"15px 0px 27px 0px",color:"#999","text-align":"center"}},"该需求正在审核中，请耐心等待！"),React.createElement("a",{href:"javascript:self.location=document.referrer;"},React.createElement("button",{type:"button",className:"drafts",style:{width:"100%"}},"返回上一页")))):2==e?React.createElement("div",null,React.createElement("div",{className:"right",style:{"margin-bottom":"20px"}},React.createElement("div",{className:"title-explain"},"距离项目结束还剩"),React.createElement("div",{className:"context-explain package"},React.createElement("div",{className:"countdown"},React.createElement("span",{className:"blue"},React.createElement("span",{className:"size"},s)," ",React.createElement("span",{className:"day"},"天"))))),React.createElement("div",{className:"right"},React.createElement("div",{className:"title-explain"},React.createElement("span",{style:{"font-size":"16px",float:"left","margin-left":"20px"}},"需求进度")),React.createElement("div",{className:"context-explain package"},React.createElement("div",null,React.createElement("table",null,React.createElement("tr",null,React.createElement("td",null,React.createElement("label",null,"完成进度:"))),React.createElement("tr",null,React.createElement("td",{colSpan:"2"},React.createElement("div",{className:"progress"},React.createElement("b",null,parseInt(100*n),"%"),React.createElement("div",{className:"progress-bar brown",style:{"max-width":"100%",width:parseInt(100*n)+"%"}}),React.createElement("div",{className:"bublle"},React.createElement("p",null,"完成量：",a),React.createElement("p",null,"发布量：",t))))),React.createElement("tr",null,React.createElement("td",null,React.createElement("label",null,"预计结算金额:"))),React.createElement("tr",null,React.createElement("td",null,React.createElement("span",{className:"money",style:{float:"left"}},React.createElement("span",null,"¥"),React.createElement("span",{className:"size"},(l*n).toFixed(2)))))),React.createElement("a",{href:"javascript:self.location=document.referrer;"},React.createElement("button",{type:"button",className:"drafts",style:{width:"100%"}},"返回上一页")))))):3==e?React.createElement("div",null,React.createElement("div",{className:"right"},React.createElement("div",{className:"title-explain"},React.createElement("span",{style:{"font-size":"16px",float:"left","margin-left":"20px"}},"需求进度")),React.createElement("div",{className:"context-explain package"},React.createElement("div",null,React.createElement("table",null,React.createElement("tr",null,React.createElement("td",null,React.createElement("label",null,"完成进度:"))),React.createElement("tr",null,React.createElement("td",{colSpan:"2"},React.createElement("div",{className:"progress"},React.createElement("b",null,parseInt(100*n),"%"),React.createElement("div",{className:"progress-bar brown",style:{"max-width":"100%",width:parseInt(100*n)+"%"}}),React.createElement("div",{className:"bublle"},React.createElement("p",null,"完成量：",a),React.createElement("p",null,"发布量：",t))))),React.createElement("tr",null,React.createElement("td",null,React.createElement("label",null,"预计结算金额:"))),React.createElement("tr",null,React.createElement("td",null,React.createElement("span",{className:"money",style:{float:"left"}},React.createElement("span",null,"¥"),React.createElement("span",{className:"size"},(l*n).toFixed(2)))))),React.createElement("a",{href:"javascript:self.location=document.referrer;"},React.createElement("button",{type:"button",className:"drafts",style:{width:"100%"}},"返回上一页")))))):4==e?React.createElement("div",null,React.createElement("div",{className:"right"},React.createElement("div",{className:"title-explain"},React.createElement("span",{style:{"font-size":"16px",float:"left","margin-left":"20px"}},"需求进度")),React.createElement("div",{className:"context-explain package"},React.createElement("div",null,React.createElement("table",null,React.createElement("tr",null,React.createElement("td",{style:{textAlign:"center",color:"#fd5352"}},"需求已完成！")),React.createElement("tr",null,React.createElement("td",null,React.createElement("label",null,"完成进度:"))),React.createElement("tr",null,React.createElement("td",{colSpan:"2"},React.createElement("div",{className:"progress"},React.createElement("b",null,parseInt(100*n),"%"),React.createElement("div",{className:"progress-bar brown",style:{"max-width":"100%",width:parseInt(100*n)+"%"}}),React.createElement("div",{className:"bublle"},React.createElement("p",null,"完成量：",a),React.createElement("p",null,"发布量：",t))))),React.createElement("tr",null,React.createElement("td",null,React.createElement("label",null,"预计结算金额:"))),React.createElement("tr",null,React.createElement("td",null,React.createElement("span",{className:"money",style:{float:"left"}},React.createElement("span",null,"¥"),React.createElement("span",{className:"size"},(l*n).toFixed(2)))))),React.createElement("a",{href:"javascript:self.location=document.referrer;"},React.createElement("button",{type:"button",className:"drafts",style:{width:"100%"}},"返回上一页")))))):5==e?React.createElement("div",{className:"right"},React.createElement("div",{className:"title-explain"},"需求预览"),React.createElement("div",{className:"context-explain package"},React.createElement("div",null,React.createElement("table",null,React.createElement("tr",null,React.createElement("td",{width:"80px"},React.createElement("label",null,"需求状态:")),React.createElement("td",null,React.createElement("span",null,"驳回"))),React.createElement("tr",null,React.createElement("td",{style:{"vertical-align":"top"}},React.createElement("label",null,"原因:")),React.createElement("td",null,React.createElement("span",null,isNull(this.state.data.remark)?"暂无":this.state.data.remark))),React.createElement("tr",null,React.createElement("td",null,React.createElement("label",null,"时间:")),React.createElement("td",null,React.createElement("span",null,isNull(this.state.data.updatetime)?"暂无":this.state.data.updatetime)))),React.createElement("a",{href:"javascript:self.location=document.referrer;"},React.createElement("button",{type:"button",className:"drafts",style:{width:"100%"}},"返回上一页"))))):void 0}}]),t}(React.Component),R=React.createClass({displayName:"Progress_speed",getInitialState:function(){return{data:null}},render:function(){return!isNull(this.state.data)&&(isNull(this.state.data.demandProgressList)?React.createElement("div",null,React.createElement("div",{className:"top"},React.createElement("span",null,"需求进度详情"),React.createElement("i",{className:"close"})),React.createElement("div",{className:"main"}),React.createElement("div",{className:"bottom"},React.createElement("button",{type:"button",className:"button_close"},"确 定"))):0==this.state.data.demandProgressList.length?React.createElement("div",null,React.createElement("div",{className:"top"},React.createElement("span",null,"需求进度详情"),React.createElement("i",{className:"close"})),React.createElement("div",{className:"main"}),React.createElement("div",{className:"bottom"},React.createElement("button",{type:"button",className:"button_close"},"确 定"))):React.createElement("div",null,React.createElement("div",{className:"top"},React.createElement("span",null,"需求进度详情"),React.createElement("i",{className:"close"})),React.createElement("div",{className:"main"},this.state.data.demandProgressList.map(function(e,t){return React.createElement("div",{className:"demand_list"},React.createElement("p",{className:"demand_title"},e.targecity),React.createElement("p",{className:"demand_main"},React.createElement("span",null,"单价：",e.orderprice,"元"),React.createElement("span",null,"发布量：",e.releasenum," "),React.createElement("span",null,"竞拍量：",e.applicationnum),React.createElement("span",null,"完成量：",e.fishnum),React.createElement("span",null,"预计结算金额：",React.createElement("span",{className:"red"},"¥ ",React.createElement("span",{className:"size"},e.orderpriceTol.toFixed(2))))))})),React.createElement("div",{className:"bottom"},React.createElement("button",{type:"button",className:"button_close"},"确 定"))))}});React.render(React.createElement(s,null),$("#new_demand div.demend_left .form_col1>.main")[0]),React.render(React.createElement(m,null),$("#new_demand div.demend_left .form_col2>.main")[0]),React.render(React.createElement(i,null),$("#new_demand div.demend_left .form_col3>.main")[0]),React.render(React.createElement(d,null),$("#new_demand div.demend_left .form_col4>.main")[0]),React.render(React.createElement(u,null),$("#new_demand div.demend_left .form_col5>.main")[0]),React.render(React.createElement(R,null),$(".progress_speed")[0]),React.render(React.createElement(o,null),$("#new_demand div.demend_right")[0],function(){$(".loading_cover").hide()}),$.ajax({type:"GET",url:domain137+"/quality/demanddetail/"+location.hash.slice(1),success:function(e){return"N001"==e.code?(sessionStorage.clear(),$(".loading_cover").hide(),window.location.href="/login.html",!1):"N"==e.code?($(".loading_cover").hide(),!1):void("0"==e.code&&($(".loading_cover").hide(),$(".title_select p").text(e.demand.demandname),React.render(React.createElement(s,null),$("#new_demand div.demend_left .form_col1>.main")[0],function(){this.setState({data:e.demand})}),React.render(React.createElement(m,null),$("#new_demand div.demend_left .form_col2>.main")[0],function(){this.setState({data:e.demand})}),React.render(React.createElement(i,null),$("#new_demand div.demend_left .form_col3>.main")[0],function(){this.setState({data:e.demand})}),React.render(React.createElement(d,null),$("#new_demand div.demend_left .form_col4>.main")[0],function(){this.setState({data:e.demand})}),React.render(React.createElement(u,null),$("#new_demand div.demend_left .form_col5>.main")[0],function(){this.setState({data:e.attachment})}),React.render(React.createElement(R,null),$(".progress_speed")[0],function(){this.setState({data:e.demand})}),React.render(React.createElement(o,null),$("#new_demand div.demend_right")[0],function(){this.setState({data:e.demand})})))},error:function(e){$(".loading_cover").hide()}})},26:function(e,t,a){function l(e,t){for(var a=0;a<e.length;a++){var l=e[a],n=R[l.id];if(n){n.refs++;for(var c=0;c<n.parts.length;c++)n.parts[c](l.parts[c]);for(;c<l.parts.length;c++)n.parts.push(i(l.parts[c],t))}else{for(var r=[],c=0;c<l.parts.length;c++)r.push(i(l.parts[c],t));R[l.id]={id:l.id,refs:1,parts:r}}}}function n(e){for(var t=[],a={},l=0;l<e.length;l++){var n=e[l],c=n[0],r=n[1],s=n[2],m=n[3],i={css:r,media:s,sourceMap:m};a[c]?a[c].parts.push(i):t.push(a[c]={id:c,parts:[i]})}return t}function c(e,t){var a=f(),l=v[v.length-1];if("top"===e.insertAt)l?l.nextSibling?a.insertBefore(t,l.nextSibling):a.appendChild(t):a.insertBefore(t,a.firstChild),v.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
a.appendChild(t)}}function r(e){e.parentNode.removeChild(e);var t=v.indexOf(e);t>=0&&v.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",c(e,t),t}function m(e){var t=document.createElement("link");return t.rel="stylesheet",c(e,t),t}function i(e,t){var a,l,n;if(t.singleton){var c=b++;a=h||(h=s(t)),l=d.bind(null,a,c,!1),n=d.bind(null,a,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(a=m(t),l=o.bind(null,a),n=function(){r(a),a.href&&URL.revokeObjectURL(a.href)}):(a=s(t),l=u.bind(null,a),n=function(){r(a)});return l(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;l(e=t)}else n()}}function d(e,t,a,l){var n=a?"":l.css;if(e.styleSheet)e.styleSheet.cssText=N(t,n);else{var c=document.createTextNode(n),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(c,r[t]):e.appendChild(c)}}function u(e,t){var a=t.css,l=t.media;if(l&&e.setAttribute("media",l),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}function o(e,t){var a=t.css,l=t.sourceMap;l&&(a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */");var n=new Blob([a],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(n),c&&URL.revokeObjectURL(c)}var R={},E=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=E(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),f=E(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,b=0,v=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=p()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var a=n(e);return l(a,t),function(e){for(var c=[],r=0;r<a.length;r++){var s=a[r],m=R[s.id];m.refs--,c.push(m)}if(e){var i=n(e);l(i,t)}for(var r=0;r<c.length;r++){var m=c[r];if(0===m.refs){for(var d=0;d<m.parts.length;d++)m.parts[d]();delete R[m.id]}}}};var N=function(){var e=[];return function(t,a){return e[t]=a,e.filter(Boolean).join("\n")}}()},27:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var a=this[t];a[2]?e.push("@media "+a[2]+"{"+a[1]+"}"):e.push(a[1])}return e.join("")},e.i=function(t,a){"string"==typeof t&&(t=[[null,t,""]]);for(var l={},n=0;n<this.length;n++){var c=this[n][0];"number"==typeof c&&(l[c]=!0)}for(n=0;n<t.length;n++){var r=t[n];"number"==typeof r[0]&&l[r[0]]||(a&&!r[2]?r[2]=a:a&&(r[2]="("+r[2]+") and ("+a+")"),e.push(r))}},e}},470:function(e,t,a){var l=a(514);"string"==typeof l&&(l=[[e.id,l,""]]),a(26)(l,{}),l.locals&&(e.exports=l.locals)},514:function(e,t,a){t=e.exports=a(27)(),t.push([e.id,"#new_demand .demend_right .title-explain{overflow:hidden}#new_demand .demend_right .context-explain{padding-top:19px}#new_demand .right .context-explain.package table td .progress-bar{background:#77c655}",""])}});