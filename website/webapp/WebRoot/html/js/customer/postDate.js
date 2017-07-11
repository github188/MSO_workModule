var file1;
var file2;
var file3;
var file4;

var oFdstate;
var pidEdit;

function addDemand(){
  $(".loading_cover").show();
  var json={
    "endtime":$(".endDate").val(),//结束时间
    "demanddescription":$("textarea.descriptionDemand").val(),//需求描述
    "begintime":$(".startDate").val(),//开时时间
    "paymenttime":"",//结算时间
    "jfuid":sessionStorage.getItem("jfuid"),//用户id
    "jfutype":1,//用户类型
    "fdstate":sessionStorage.getItem("fdstate"),//需求状态 默认0(草稿箱)1(发布)
    "ordername":isNull($("input.demand-name").val())?"无":$("input.demand-name").val(),//订单/需求名
    "industry":"",//行业名
    "servicetype":$("span.types-of").eq(0).text(),//类型
    "cleaningchannel":$("span.qxqd").eq(0).text(),//清洗 1-电话清洗渠道
    "releasenum":$("input.num").val(),//发布数量
    "demandprice":$("input.money").val(),//发布价
    "paymentstandard":$("span.jsms").eq(0).text(),//结算模式
    "pleader":$("input.pleader").val(),//负责人
    "pphone":$("input.pphone").val(),//负责人电话
    "demandtype":2,//需求类型 套餐/非套餐
    "pid":pidEdit,//套餐id
    "favorableway":0,//是否免税
    "productaccessories":file1,//"产品介绍
    "xsxsurl":file2,//线索文件
    "standardoperation":file3,//上传话术
    "otherreport":file4,//客户名单
		};
      json=JSON.stringify(json);
      //alert(json);
      //console.log(urlDateSubmit);
    jQuery.ajax({
          type : 'POST',
          contentType : 'application/json',
          url : urlDateSubmit,//'http://ip/1_5/addOrUpdateDatafiltering',
          processData : false,
          dataType : 'json',
          contentType:"application/json; charset=utf-8",
          data : json,
          success : function(res) {
            //console.log(res);
            console.log(res.code);
            if(res.code=="Y"){
                sessionStorage.setItem("cgid",res.hfp.pid);
                if(sessionStorage.getItem("fdstate")==1){
                	location.href = "customerDemandDone.html";
                }else{
                	location.href = "customerDataDone.html";
                }
            }else if(res.code=="N001"){
				        sessionStorage.clear();
                window.location.href="/login.html";
                $(".loading_cover").hide();
                return false;
            }else{
              alert("新增失败");
              $(".loading_cover").hide();
              return false;
            }

          },
          error : function() {
             return false;
          }
      });
      return false;
}
