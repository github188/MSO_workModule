!function(e){function t(n){if(a[n])return a[n].exports;var l=a[n]={exports:{},id:n,loaded:!1};return e[n].call(l.exports,l,l.exports,t),l.loaded=!0,l.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}({0:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){sessionStorage.setItem("cgid",e.demand.pid),setTimeout(function(){ReactDOM.render(React.createElement(E,{data:e.demand}),$(".clo1")[0]),ReactDOM.render(React.createElement(g,{data:e.demand}),$(".clo2")[0]),ReactDOM.render(React.createElement(R,{data:e.demand}),$(".clo3")[0]),ReactDOM.render(React.createElement(y,null),$(".context-explain")[0]),$(".date span.types-of").text($(".content-right span.types-of").text()),$(".date span.startDate").text($("input.startDate").val()),$(".date span.endDate").text($("input.endDate").val()),$(".date span.num").text($("input.num").val()),$(".date span.money").text($("input.money").val()),$(".date span.total").text($("input.num").val()*$("input.money").val()),$(".loading_cover").hide()},0)}var o,d,u,p,m,f=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),h=a(557),b=n(h),v=domain137+"/quality/demanddetail/"+location.hash.slice(1);$.ajax({type:"GET",url:v,dataType:"json",cache:!1,success:function(e){return"0"!=e.code?($(".loading_cover").hide(),!1):(o=e.demand.createTime,void c(e))},error:function(e){$(".loading_cover").hide()}});var E=function(e){function t(e){var a;i(this,t);var n=r(this,(a=t.__proto__||Object.getPrototypeOf(t)).call.apply(a,[this].concat(l(e))));return n.state={servicetype:["","销售线索挖掘","数据加工","人工客服"]},n}return s(t,e),f(t,[{key:"componentDidMount",value:function(){var e=new Date,t=e.toJSON();$(".startDate").datetimepicker({language:"zh-CN",weekStart:1,todayBtn:1,autoclose:1,todayHighlight:1,startView:2,minView:2,forceParse:0,format:"yyyy-mm-dd",startDate:new Date(t)}).on("click",function(e){$(".startDate").datetimepicker("setEndDate",$(".endDate").val())}),$(".endDate").datetimepicker({language:"zh-CN",weekStart:1,todayBtn:1,autoclose:1,todayHighlight:1,startView:2,minView:2,forceParse:0,format:"yyyy-mm-dd",startDate:new Date(t)}).on("click",function(e){$(".endDate").datetimepicker("setStartDate",$(".startDate").val())}),$("input.startDate").change(function(){$(".package li span.startDate").text($(this).val())}),$("input.startDate").blur(function(){return""==$(this).val()?($(this).addClass("error"),$(this).parent().find("p.error").text("请填写开始日期").show(),!1):($(this).removeClass("error"),void $(this).parent().find("p.error").hide())}),$("input.startDate").focus(function(){$(this).removeClass("error"),$(this).parent().find("p.error").hide()}),$("table.table-condensed").click(function(){$("input.startDate").parent().find("p.error").hide(),$("input.startDate").removeClass("error")}),$("input.endDate").change(function(){$(".package li span.endDate").text($(this).val())}),$("input.endDate").blur(function(){return""==$(this).val()?($(this).addClass("error"),$(this).parent().find("p.error").text("请填写结束日期").show(),!1):($(this).removeClass("error"),void $(this).parent().find("p.error").hide())}),$("input.endDate").focus(function(){$(this).removeClass("error"),$(this).parent().find("p.error").hide()}),$("table.table-condensed").click(function(){$("input.endDate").parent().find("p.error").hide(),$("input.endDate").removeClass("error")}),$("input[name=isFZ]").change(function(){"是"==$(this).parent().text()?($(".radio_fz").show(),$("input.pleader").blur(function(){return""==$(this).val()?($(this).addClass("error"),$(this).parent().next().text("请填写负责人姓名").show(),!1):($(this).removeClass("error"),void $(this).parent().next().hide())}),$("input.pleader").focus(function(){$(this).removeClass("error"),$(this).parent().next().hide()}),$("input.pphone").blur(function(){return""==$(this).val()?($(this).addClass("error"),$(this).parent().next().text("请填写负责人电话").show(),!1):($(this).removeClass("error"),void $(this).parent().next().hide())}),$("input.pphone").focus(function(){$(this).removeClass("error"),$(this).parent().next().hide()})):($(".radio_fz").hide().next().hide(),$(".radio_fz input").removeClass("error"))}),$("input[name=isFJ]").change(function(){"是"==$(this).parent().text()?$(".radio_fj").show():$(".radio_fj").hide()}),$("input[name=isXS]").change(function(){"是"==$(this).parent().text()?$(".radio_xs").show():$(".radio_xs").hide()}),$("input[name=isHS]").change(function(){"是"==$(this).parent().text()?$(".radio_hs").show():$(".radio_hs").hide()}),$("input[name=isMD]").change(function(){"是"==$(this).parent().text()?$(".radio_md").show():$(".radio_md").hide()}),$("input.startDate").change(function(){$(".date li span.startDate").text($(this).val())}),$("input.endDate").change(function(){$(".date li span.endDate").text($(this).val())}),$("input.demand-name").blur(function(){return""==$(this).val()?($(this).addClass("error"),$(this).parent().find("p.error").show(),!1):($(this).removeClass("error"),void $(this).parent().find("p.error").hide())}),$("input.demand-name").focus(function(){$(this).removeClass("error"),$(this).parent().find("p.error").hide()}),$("textarea.descriptionDemand").blur(function(){return""==$(this).val()?($(this).addClass("error"),$(this).parent().find("p.error").show(),!1):($(this).removeClass("error"),void $(this).parent().find("p.error").hide())}),$("textarea.descriptionDemand").focus(function(){$(this).removeClass("error"),$(this).parent().find("p.error").hide()}),$("span.help").hover(function(){$(this).next(".bubble").show()},function(){$(this).next(".bubble").hide()})}},{key:"handleInput",value:function(){$(".right").find("span.num").html(Number($("input.num").val())||0),$(".right").find("span.money").html(Number($("input.money").val())||0),$(".right").find("span.total").html((Number($("input.num").val())||0)*(Number($("input.money").val())||0)),$(".descriptionDemand").next().find(".length>span.size2").html(150-$(".descriptionDemand").val().length)}},{key:"render",value:function(){var e=this.props.data;return React.createElement("div",{className:"block-box"},React.createElement("div",{className:"title-left"},"业务"),React.createElement("div",{className:"content-right"},React.createElement("ul",null,React.createElement("li",null,React.createElement("label",null,"业务类型："),React.createElement("span",{className:"types-of"},this.state.servicetype[e.servicetype]),React.createElement("i",null,React.createElement("span",{className:"help"},"?"),React.createElement("span",{className:"bubble"},"针对企业自有数据和需求，进行有效触达"))),React.createElement("li",null,React.createElement("label",null,"清洗渠道："),React.createElement("span",null,"电话")),React.createElement("li",null,React.createElement("label",null,"数据条目："),React.createElement("input",{autoComplete:"off",type:"text",className:"num",onInput:this.handleInput.bind(this),defaultValue:e.releasenum}),React.createElement("span",{style:{color:"#777777"}},"条"),React.createElement("span",{className:"margin-15"},"拨打次数：无人接听数据最多拨打 3 次"),React.createElement("p",{className:"error"},"请填写数据条目")),React.createElement("li",null,React.createElement("label",null,"单价："),React.createElement("input",{autoComplete:"off",type:"text",className:"money",onInput:this.handleInput.bind(this),defaultValue:e.pprice}),React.createElement("span",{style:{color:"#777777"}},"元"),React.createElement("p",{className:"error"},"请填写单价")),React.createElement("li",{className:"hide"},React.createElement("label",null,"结算模式："),React.createElement("span",null,"数据条目"),React.createElement("i",null,React.createElement("span",{className:"help"},"?"),React.createElement("span",{className:"bubble"},"按实际提交数据条目数乘以单价进行结算"))))))}}]),t}(React.Component),g=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),f(t,[{key:"componentDidMount",value:function(){var e=new Date,t=e.toJSON();$(".startDate").datetimepicker({language:"zh-CN",weekStart:1,todayBtn:1,autoclose:1,todayHighlight:1,startView:2,minView:2,forceParse:0,format:"yyyy-mm-dd",startDate:new Date(t)}).on("click",function(e){$(".startDate").datetimepicker("setEndDate",$(".endDate").val())}),$(".endDate").datetimepicker({language:"zh-CN",weekStart:1,todayBtn:1,autoclose:1,todayHighlight:1,startView:2,minView:2,forceParse:0,format:"yyyy-mm-dd",startDate:new Date(t)}).on("click",function(e){$(".endDate").datetimepicker("setStartDate",$(".startDate").val())}),$("input[name=isFZ]").change(function(){"是"==$(this).parent().text()?($(".radio_fz").show(),$("input.pleader").blur(function(){return""==$(this).val()?($(this).addClass("error"),$(this).parent().next().text("请填写负责人姓名").show(),!1):($(this).removeClass("error"),void $(this).parent().next().hide())}),$("input.pleader").focus(function(){$(this).removeClass("error"),$(this).parent().next().hide()}),$("input.pphone").blur(function(){return""==$(this).val()?($(this).addClass("error"),$(this).parent().next().text("请填写负责人电话").show(),!1):($(this).removeClass("error"),void $(this).parent().next().hide())}),$("input.pphone").focus(function(){$(this).removeClass("error"),$(this).parent().next().hide()})):$(".radio_fz").hide()}),$("input[name=isFJ]").change(function(){"是"==$(this).parent().text()?$(".radio_fj").show():$(".radio_fj").hide()}),$("input.startDate").change(function(){$(".date li span.startDate").text($(this).val())}),$("input.endDate").change(function(){$(".date li span.endDate").text($(this).val())}),$("input.demand-name").blur(function(){return""==$(this).val()?($(this).addClass("error"),$(this).parent().find("p.error").show(),!1):($(this).removeClass("error"),void $(this).parent().find("p.error").hide())}),$("input.demand-name").focus(function(){$(this).removeClass("error"),$(this).parent().find("p.error").hide()}),$("textarea.descriptionDemand").blur(function(){return""==$(this).val()?($(this).addClass("error"),$(this).parent().find("p.error").show(),!1):($(this).removeClass("error"),void $(this).parent().find("p.error").hide())}),$("textarea.descriptionDemand").focus(function(){$(this).removeClass("error"),$(this).parent().find("p.error").hide()}),$("input.startDate").blur(function(){setTimeout(function(){""==$("input.startDate").val()||""==$("input.endDate").val()?$("input.startDate").parent().find("p.error").show():$("input.startDate").parent().find("p.error").hide(),""==$("input.endDate").val()?$("input.endDate").addClass("error").parent().find("p.error").text("请填写结束日期"):$("input.endDate").removeClass("error"),""==$("input.startDate").val()?$("input.startDate").addClass("error").parent().find("p.error").text("请填写开始日期"):$("input.startDate").removeClass("error")},300)}),$("input.endDate").blur(function(){setTimeout(function(){""==$("input.startDate").val()||""==$("input.endDate").val()?$("input.endDate").parent().find("p.error").show():$("input.endDate").parent().find("p.error").hide(),""==$("input.startDate").val()?$("input.startDate").addClass("error").parent().find("p.error").text("请填写开始日期"):$("input.startDate").removeClass("error"),""==$("input.endDate").val()?$("input.endDate").addClass("error").parent().find("p.error").text("请填写结束日期"):$("input.endDate").removeClass("error")},300)})}},{key:"handleInput",value:function(){$(".descriptionDemand").next().find(".length>span.size2").html(150-$(".descriptionDemand").val().length)}},{key:"render",value:function(){var e=this.props.data;return React.createElement("div",{className:"block-box"},React.createElement("div",{className:"title-left"},"基本信息"),React.createElement("div",{className:"content-right"},React.createElement("div",{className:"main"},React.createElement("table",null,React.createElement("tbody",null,React.createElement("tr",null,React.createElement("td",null,"需求名称："),React.createElement("td",null,React.createElement("input",{autoComplete:"off",type:"text",defaultValue:e.demandname,className:"demand-name",maxLength:"12"}),React.createElement("span",{className:"info"},"为您的需求命名，限制 12 个字"),React.createElement("p",{className:"error"},"请填写需求名称"))),React.createElement("tr",null,React.createElement("td",{style:{verticalAlign:"top"}},"需求描述："),React.createElement("td",null,React.createElement("textarea",{maxLength:"150",defaultValue:e.demanddescription,className:"descriptionDemand",onInput:this.handleInput.bind(this)}),React.createElement("p",null,React.createElement("span",{className:"length"},"还可以输入 ",React.createElement("span",{className:"size2"},"150")," 个字")),React.createElement("p",{className:"error"},"请填写需求描述"))),React.createElement("tr",null,React.createElement("td",null,React.createElement("span",null,"开始日期:")),React.createElement("td",null,React.createElement("input",{autoComplete:"off",type:"text",defaultValue:"",className:"form_date startDate",readOnly:!0,onChange:this.handleInput.bind(this)}),React.createElement("i",{className:"date_icon"}),React.createElement("span",null,"结束日期:"),React.createElement("input",{type:"text",defaultValue:"",className:"form_date endDate",readOnly:!0,onChange:this.handleInput.bind(this)}),React.createElement("i",{className:"date_icon"}),React.createElement("p",{className:"error",style:{position:"relative",left:0}}))),React.createElement("tr",null,React.createElement("td",{style:{verticalAlign:"top"}},"项目负责人："),React.createElement("td",null,React.createElement("p",{style:{marginBottom:"20px"}},"是否需要其他人负责此需求：",React.createElement("label",null,React.createElement("input",{type:"radio",name:"isFZ",defaultChecked:!(!e.pleader&&!e.pphone)}),"是"),React.createElement("label",null,React.createElement("input",{type:"radio",name:"isFZ",defaultChecked:!e.pleader&&!e.pphone}),"否")),React.createElement("p",{className:"radio_fz",style:{display:e.pleader||e.pphone?"block":"none"}},React.createElement("span",null,"负责人姓名："),React.createElement("input",{autoComplete:"off",type:"text",defaultValue:e.pleader,style:{width:"162px"},className:"pleader"}),React.createElement("span",{style:{marginLeft:"84px"}},"负责人电话："),React.createElement("input",{autoComplete:"off",type:"text",defaultValue:e.pphone,className:"pphone",style:{width:"162px"}})),React.createElement("p",{className:"error"},"请填写负责人姓名"))))))))}}]),t}(React.Component),R=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),f(t,[{key:"componentDidMount",value:function(){var e=new plupload.Uploader({runtimes:"html5,flash,silverlight,html4",browse_button:"selectfiles",container:$(".container")[0],flash_swf_url:"lib/plupload-2.1.2/js/Moxie.swf",silverlight_xap_url:"lib/plupload-2.1.2/js/Moxie.xap",url:"http://oss.aliyuncs.com",filters:{mime_types:[{extensions:"doc,docx,xls,xlsx,txt,pdf,ppt,zip,rar"}],max_file_size:"1000mb",prevent_duplicates:!0},init:{PostInit:function(){$(".ossfile")[0].innerHTML="",document.getElementById("postfiles").onclick=function(){return set_upload_param(e,"",!1,1),!1}},FilesAdded:function(e,t){plupload.each(t,function(t){e.files.length>1&&e.removeFile(e.files[0]),$(".ossfile").css({"text-align":"left"}),$("#postfiles").html("开始上传"),$(".ossfile")[0].innerHTML='<div id="'+t.id+'"><span class="file_name">'+(t.name.substr(0,4)+/\.[^\.]+/.exec(t.name))+" ("+plupload.formatSize(t.size)+')<span class="bfb"></span></span><i class="file_close"></i><div class="progress"><div class="progress-bar" style="width: 0%"><b></b></div></div></div>',$(".ossfile .file_close").click(function(){e.removeFile(e.files[0]),$(".ossfile")[0].innerHTML="",$(".ossfile").css({"text-align":"left"}),$("#selectfiles").html("重新上传"),$("#postfiles").html("开始上传")})})},BeforeUpload:function(e,t){check_object_radio(),set_upload_param(e,t.name,!0,1)},UploadProgress:function(e,t){var a=document.getElementById(t.id),n=a.getElementsByTagName("div")[0],l=n.getElementsByTagName("div")[0];$(".ossfile").css({"text-align":"center"}),$("#postfiles").html("正在上传..."),l.style.width=t.percent+"%",$(a).find("span.bfb").html("..."+t.percent+"%"),l.setAttribute("aria-valuenow",t.percent)},FileUploaded:function(e,t,a){200==a.status?(d=get_uploaded_object_name(t.name),$("#selectfiles").html("重新上传"),$("#postfiles").html("上传成功"),$(".ossfile .progress-bar").css("width","0%"),$(".ossfile .progress-bar")[0].setAttribute("aria-valuenow",0),$(".ossfile").find("span.bfb").html("")):document.getElementById(t.id).getElementsByTagName("b")[0].innerHTML=a.response},Error:function(e,t){t.code==-600?alert("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小"):t.code==-601?alert("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型"):t.code==-602?alert("\n这个文件已经上传过一遍了"):(alert("拒绝访问。请重新上传!"),$(".ossfile .file_close").click())}}});e.init(),e.bind("FilesAdded",function(e,t){for(var a=0,n=t.length;a<n;a++)t[a].name,!function(e){previewImage(t[e],function(e){$(".file-list img").attr("src",e)})}(a)});var t=new plupload.Uploader({runtimes:"html5,flash,silverlight,html4",browse_button:"selectfiles2",container:$(".container2")[0],flash_swf_url:"lib/plupload-2.1.2/js/Moxie.swf",silverlight_xap_url:"lib/plupload-2.1.2/js/Moxie.xap",url:"http://oss.aliyuncs.com",filters:{max_file_size:"1000mb",prevent_duplicates:!0},init:{PostInit:function(){$(".ossfile2")[0].innerHTML="",document.getElementById("postfiles2").onclick=function(){return set_upload_param(t,"",!1,2),!1}},FilesAdded:function(e,t){plupload.each(t,function(t){e.files.length>1&&e.removeFile(e.files[0]),$(".ossfile2").css({"text-align":"left"}),$("#postfiles2").html("开始上传"),$(".ossfile2")[0].innerHTML='<div id="'+t.id+'"><span class="file_name">'+(t.name.substr(0,4)+/\.[^\.]+/.exec(t.name))+" ("+plupload.formatSize(t.size)+')<span class="bfb"></span></span><i class="file_close"></i><div class="progress"><div class="progress-bar" style="width: 0%"><b></b></div></div></div>',$(".ossfile2 .file_close").click(function(){e.removeFile(e.files[0]),$(".ossfile2")[0].innerHTML="",$(".ossfile2").css({"text-align":"left"}),$("#selectfiles2").html("重新上传"),$("#postfiles2").html("开始上传")})})},BeforeUpload:function(e,t){check_object_radio(),set_upload_param(e,t.name,!0,2)},UploadProgress:function(e,t){var a=document.getElementById(t.id),n=a.getElementsByTagName("div")[0],l=n.getElementsByTagName("div")[0];$(".ossfile2").css({"text-align":"center"}),$("#postfiles2").html("正在上传..."),l.style.width=t.percent+"%",$(a).find("span.bfb").html("..."+t.percent+"%"),l.setAttribute("aria-valuenow",t.percent)},FileUploaded:function(e,t,a){200==a.status?(u=f2,$("#selectfiles2").html("重新上传"),$("#postfiles2").html("上传成功"),$(".ossfile2 .progress-bar").css("width","0%"),$(".ossfile2 .progress-bar")[0].setAttribute("aria-valuenow",0),$(".ossfile2").find("span.bfb").html("")):document.getElementById(t.id).getElementsByTagName("b")[0].innerHTML=a.response},Error:function(e,t){t.code==-600?alert("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小"):t.code==-601?alert("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型"):t.code==-602?alert("\n这个文件已经上传过一遍了"):(alert("拒绝访问。请重新上传!"),$(".ossfile2 .file_close").click())}}});t.init(),t.bind("FilesAdded",function(e,t){for(var a=0,n=t.length;a<n;a++)t[a].name,!function(e){previewImage(t[e],function(e){$(".file-list2 img").attr("src",e)})}(a)});var a=new plupload.Uploader({runtimes:"html5,flash,silverlight,html4",browse_button:"selectfiles3",container:$(".container3")[0],flash_swf_url:"lib/plupload-2.1.2/js/Moxie.swf",silverlight_xap_url:"lib/plupload-2.1.2/js/Moxie.xap",url:"http://oss.aliyuncs.com",filters:{max_file_size:"1000mb",prevent_duplicates:!0},init:{PostInit:function(){$(".ossfile3")[0].innerHTML="",document.getElementById("postfiles3").onclick=function(){return set_upload_param(a,"",!1,3),!1}},FilesAdded:function(e,t){plupload.each(t,function(t){e.files.length>1&&e.removeFile(e.files[0]),$(".ossfile3").css({"text-align":"left"}),$("#postfiles3").html("开始上传"),$(".ossfile3")[0].innerHTML='<div id="'+t.id+'"><span class="file_name">'+(t.name.substr(0,6)+/\.[^\.]+/.exec(t.name))+" ("+plupload.formatSize(t.size)+')<span class="bfb"></span></span><i class="file_close"></i><div class="progress"><div class="progress-bar" style="width: 0%"><b></b></div></div></div>',$(".ossfile3 .file_close").click(function(){e.removeFile(e.files[0]),$(".ossfile3")[0].innerHTML="",$(".ossfile3").css({"text-align":"left"}),$("#selectfiles3").html("重新上传"),$("#postfiles3").html("开始上传")})})},BeforeUpload:function(e,t){check_object_radio(),set_upload_param(e,t.name,!0,3)},UploadProgress:function(e,t){var a=document.getElementById(t.id),n=a.getElementsByTagName("div")[0],l=n.getElementsByTagName("div")[0];$(".ossfile3").css({"text-align":"center"}),$("#postfiles3").html("正在上传..."),l.style.width=t.percent+"%",$(a).find("span.bfb").html("..."+t.percent+"%"),l.setAttribute("aria-valuenow",t.percent)},FileUploaded:function(e,t,a){200==a.status?(p=f3,$("#selectfiles3").html("重新上传"),$("#postfiles3").html("上传成功"),$(".ossfile3 .progress-bar").css("width","0%"),$(".ossfile3 .progress-bar")[0].setAttribute("aria-valuenow",0),$(".ossfile3").find("span.bfb").html("")):document.getElementById(t.id).getElementsByTagName("b")[0].innerHTML=a.response},Error:function(e,t){t.code==-600?alert("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小"):t.code==-601?alert("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型"):t.code==-602?alert("\n这个文件已经上传过一遍了"):(alert("拒绝访问。请重新上传!"),$(".ossfile3 .file_close").click())}}});a.init(),a.bind("FilesAdded",function(e,t){for(var a=0,n=t.length;a<n;a++)t[a].name,!function(e){previewImage(t[e],function(e){$(".file-list3 img").attr("src",e)})}(a)});var n=new plupload.Uploader({runtimes:"html5,flash,silverlight,html4",browse_button:"selectfiles4",container:$(".container4")[0],flash_swf_url:"lib/plupload-2.1.2/js/Moxie.swf",silverlight_xap_url:"lib/plupload-2.1.2/js/Moxie.xap",url:"http://oss.aliyuncs.com",filters:{max_file_size:"1000mb",prevent_duplicates:!0},init:{PostInit:function(){$(".ossfile4")[0].innerHTML="",document.getElementById("postfiles4").onclick=function(){return set_upload_param(n,"",!1,4),!1}},FilesAdded:function(e,t){plupload.each(t,function(t){e.files.length>1&&e.removeFile(e.files[0]),$(".ossfile4").css({"text-align":"left"}),$("#postfiles4").html("开始上传"),$(".ossfile4")[0].innerHTML='<div id="'+t.id+'"><span class="file_name">'+(t.name.substr(0,6)+/\.[^\.]+/.exec(t.name))+" ("+plupload.formatSize(t.size)+')<span class="bfb"></span></span><i class="file_close"></i><div class="progress"><div class="progress-bar" style="width: 0%"><b></b></div></div></div>',$(".ossfile4 .file_close").click(function(){e.removeFile(e.files[0]),$(".ossfile4")[0].innerHTML="",$(".ossfile4").css({"text-align":"left"}),$("#selectfiles4").html("重新上传"),$("#postfiles4").html("开始上传")})})},BeforeUpload:function(e,t){check_object_radio(),set_upload_param(e,t.name,!0,4)},UploadProgress:function(e,t){var a=document.getElementById(t.id),n=a.getElementsByTagName("div")[0],l=n.getElementsByTagName("div")[0];$(".ossfile4").css({"text-align":"center"}),$("#postfiles4").html("正在上传..."),l.style.width=t.percent+"%",$(a).find("span.bfb").html("..."+t.percent+"%"),l.setAttribute("aria-valuenow",t.percent)},FileUploaded:function(e,t,a){200==a.status?(m=f4,$("#selectfiles4").html("重新上传"),$("#postfiles4").html("上传成功"),$(".ossfile4 .progress-bar").css("width","0%"),$(".ossfile4 .progress-bar")[0].setAttribute("aria-valuenow",0),$(".ossfile4").find("span.bfb").html("")):document.getElementById(t.id).getElementsByTagName("b")[0].innerHTML=a.response},Error:function(e,t){t.code==-600?alert("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小"):t.code==-601?alert("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型"):t.code==-602?alert("\n这个文件已经上传过一遍了"):(alert("拒绝访问。请重新上传!"),$(".ossfile4 .file_close").click())}}});n.init(),n.bind("FilesAdded",function(e,t){for(var a=0,n=t.length;a<n;a++)t[a].name,!function(e){previewImage(t[e],function(e){$(".file-list4 img").attr("src",e)})}(a)}),$("input[name=isXS]").change(function(){"是"==$(this).parent().text()?$(".radio_xs").show():$(".radio_xs").hide()}),$("input[name=isHS]").change(function(){"是"==$(this).parent().text()?$(".radio_hs").show():$(".radio_hs").hide()}),$("input[name=isMD]").change(function(){"是"==$(this).parent().text()?$(".radio_md").show():$(".radio_md").hide()}),$(".radio_main i.bubble-hover").click(function(){$(this).next().show()}),$(".radio_main .bubble-click").click(function(){$(this).hide()}),$(".radio_main .bubble-click>div").click(function(e){e.stopPropagation()})}},{key:"render",value:function(){return this.props.data,React.createElement("div",{className:"block-box"},React.createElement("div",{className:"title-left"},"附件"),React.createElement("div",{className:"content-right"},React.createElement("div",{className:"main"},React.createElement("p",null,"请选择上传相关附件，单个附件最大限制为100MB，不支持应用程序、音频和视频等文件上传"),React.createElement("table",null,React.createElement("tbody",null,React.createElement("tr",{className:"radio_main"},React.createElement("td",{width:"178"},"是否上传销售线索文件："),React.createElement("td",{width:"470"},React.createElement("label",null,React.createElement("input",{type:"radio",name:"isXS"}),"是"),React.createElement("label",null,React.createElement("input",{type:"radio",name:"isXS",defaultChecked:!0}),"否"),React.createElement("i",{className:"bubble-hover",id:"bubble"},"?"),React.createElement("div",{className:"bubble-click"},React.createElement("div",null,React.createElement("img",{src:"images/public/pic-jbf-nodata.jpg"}))))),React.createElement("tr",{className:"radio_xs"},React.createElement("td",null,React.createElement("button",{type:"button",className:"btn",id:"selectfiles2",style:{width:"158px"}},React.createElement("i",{className:"add"}),React.createElement("span",null,"上传销售线索文件"))),React.createElement("td",null,React.createElement("div",{className:"ossfile2",style:{width:"450px"}})),React.createElement("td",null,React.createElement("button",{type:"button",className:"btn",id:"postfiles2",style:{width:"152px"}},"开始上传"))),React.createElement("tr",{className:"radio_main"},React.createElement("td",null,"是否上传话术："),React.createElement("td",null,React.createElement("label",null,React.createElement("input",{type:"radio",name:"isHS"}),"是"),React.createElement("label",null,React.createElement("input",{type:"radio",name:"isHS",defaultChecked:!0}),"否"))),React.createElement("tr",{className:"radio_hs"},React.createElement("td",null,React.createElement("button",{type:"button",className:"btn",id:"selectfiles3",style:{width:"158px"}},React.createElement("i",{className:"add"}),React.createElement("span",null,"上传话术"))),React.createElement("td",null,React.createElement("div",{className:"ossfile3",style:{width:"450px"}})),React.createElement("td",null,React.createElement("button",{type:"button",className:"btn",id:"postfiles3",style:{width:"152px"}},"开始上传"))),React.createElement("tr",{className:"radio_main"},React.createElement("td",null,"是否上传目标客户名单："),React.createElement("td",null,React.createElement("label",null,React.createElement("input",{type:"radio",name:"isMD"}),"是"),React.createElement("label",null,React.createElement("input",{type:"radio",name:"isMD",defaultChecked:!0}),"否"))),React.createElement("tr",{className:"radio_md"},React.createElement("td",null,React.createElement("button",{type:"button",className:"btn",id:"selectfiles4",style:{width:"158px"}},React.createElement("i",{className:"add"}),React.createElement("span",null,"上传目标客户名单"))),React.createElement("td",null,React.createElement("div",{className:"ossfile4",style:{width:"450px"}})),React.createElement("td",null,React.createElement("button",{type:"button",className:"btn",id:"postfiles4",style:{width:"152px"}},"开始上传"))))))))}}]),t}(React.Component),y=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),f(t,[{key:"componentDidMount",value:function(){sessionStorage.removeItem("fdstate"),$(".btn_tj").click(function(){$("input:visible").blur(),$("textarea").blur(),sessionStorage.removeItem("fdstate"),sessionStorage.setItem("fdstate",1),$("input").hasClass("error")||$("textarea").hasClass("error")||""==$("input.form_date").val()||(0,b.default)(1,o,d,u,p,m)}),$("button.btn_cg").click(function(){$(".loading_cover").show(),sessionStorage.setItem("fdstate",0),(0,b.default)(0,o,d,u,p,m)})}},{key:"render",value:function(){return this.props.data,React.createElement("div",null,React.createElement("ul",null,React.createElement("li",null,React.createElement("label",null,"业务类型："),React.createElement("span",{className:"types-of"})),React.createElement("li",null,React.createElement("label",null,"清洗渠道："),React.createElement("span",{className:"qxqd"},"电话")),React.createElement("li",null,React.createElement("label",null,"拨打次数："),React.createElement("span",null,"无人接听数据最多拨打3次")),React.createElement("li",{className:"hide"},React.createElement("label",null,"结算模式："),React.createElement("span",{className:"jsms"},"数据条目")),React.createElement("li",null,React.createElement("label",null,"开始日期："),React.createElement("span",{className:"startDate"})),React.createElement("li",null,React.createElement("label",null,"结束日期："),React.createElement("span",{className:"endDate"}))),React.createElement("ul",{className:"top"},React.createElement("li",null,React.createElement("label",null,"数据条目："),React.createElement("span",{className:"num"})),React.createElement("li",null,React.createElement("label",null,"需求单价："),React.createElement("span",{className:"money"}))),React.createElement("p",null,"总金额："),React.createElement("h2",null,React.createElement("span",{className:"total-d"},"￥"),React.createElement("span",{className:"total"})),React.createElement("div",null,React.createElement("button",{type:"button",className:"btn_tj",id:"add-sh"},"提交审核"),React.createElement("button",{type:"button",className:"btn_cg",id:"add-cg"},"加入草稿箱")))}}]),t}(React.Component)},557:function(e,t){"use strict";function a(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t,n,l,i,r){var s;$(".loading_cover").show();var c=sessionStorage.getItem("cgid"),o={createTime:t,releaseQuantity:$("input.num").val(),areaAndDemandQuantity:JSON.stringify([]),endTime:$(".endDate").val(),demandName:isNull($("input.demand-name").val())?"无":$("input.demand-name").val(),projectLeader:$("input.pleader").val(),chargeTag:"",sales:l,productPresentation:"",dataCleaningUnitPrice:$("input.money").val(),basicUnitPrice:"",productIntroduce:"",customerList:r,demandDesc:$("textarea.descriptionDemand").val(),totalPrice:$(".total").text(),targetChannel:"",favorableMode:"",beginTime:$(".startDate").val(),serviceType:"2",industryXifen:"",targetPopulation:"",speechcraft:i,targetAgeTo:"",projectLeaderPhone:$("input.pphone").val(),customTag:"",targetAgeFrom:""};o=JSON.stringify(o);var d=[domain137+"/quality/drafts/"+c+"/0?industryId=",domain137+"/quality/drafts/"+c+"/1?industryId="];return jQuery.ajax((s={type:"patch",contentType:"application/json",url:d[e],processData:!1,dataType:"json"},a(s,"contentType","application/json; charset=utf-8"),a(s,"data",o),a(s,"success",function(t){return"0"!=t.code?"N001"==t.code?(sessionStorage.clear(),window.location.href="/login.html",$(".loading_cover").hide(),!1):(alert("新增失败"),$(".loading_cover").hide(),!1):void(0==e?location.href="customerDataDone.html":location.href="customerDemandDone.html")}),a(s,"error",function(){return!1}),s)),!1}Object.defineProperty(t,"__esModule",{
value:!0}),t.default=n,e.exports=t.default}});