var file1;
var file2;
var file3;
var file4;
function addDemand(){
  sessionStorage.removeItem("demandtype");
  sessionStorage.removeItem("fdstate");
  sessionStorage.setItem("demandtype", 1);
  sessionStorage.setItem("fdstate", 1);

  var endtime = getNewDay($(".startDate").val(), $("span.cycle").text());
  //console.log(endtime);
  var json={
	"paytime":$("span.cycle").text(),
    "endtime":endtime,
    "dremark":"",
    "demanddescription":$("textarea.descriptionDemand").val(),// "需求描述",
    "begintime":$(".startDate").val(),
    "paymenttime": "",//"结算时间",
    "beginage": $("input.startAge").val(),
    "jfuid": sessionStorage.getItem("jfuid"),
    "jfutype": "1",
    "areaCityList": [
      {
        "orderpricetol": $("span.coupon").eq(0).text(),
        "orderprice":$("span.money").eq(0).text(),
        "releasenum": $("span.number").eq(0).text(),
        "targecity": $("input.area").attr("title"),
        "subdescription": ""//价格说明
      }
    ],
    "fdstate":sessionStorage.getItem("fdstate"),
    "targethumen":$(".context-explain span.target-population").text(),//"目标人群",
    "packageid":$(".block-box .content-right .drafts_details.selected .pid").eq(0).text(),//"套餐id",
    "demand":$(".introductionPro").val(),//"产品描述",
    "productname":$("input.pro-name").val(),//"产品名",
    "paymentstandard":$("span.billing").eq(0).text(),//,"结算模式",
    "pleader":$("input.pleader").val(),//"负责人",
    "demandtype":sessionStorage.getItem("demandtype"),
    "category1":$("span.industry").eq(0).text(),//"选择行业及发布类型",
    "pid":"",
    "pphone":$("input.pphone").val(),//"负责人电话",
    "category3":sessionStorage.getItem("servicetype"),//"销售线索挖掘",
    "category2":$(".hkqd li.select-items.active").eq(0).text(),//"电话营销 ",
    "favorableway":0,
    "endage":$("input.endAge").val(),
    "ordername":$("input.demand-name").val(),//"需求名",
    "productaccessories":file1,//"产品介绍
    "xsxsurl":file2,//线索文件
    "standardoperation":file3,//上传话术
    "otherreport":file4//客户名单
		};
      //console.log(json);
      json=JSON.stringify(json);
    jQuery.ajax({
          type : 'POST',
          url : urlPackageSubmit,//'http://ip/1_5/addOrUpdateCustomerDemand',
          processData : false,
          dataType : 'json',
          contentType:'application/json; charset=utf-8',
          data : json,
          success : function(res) {
            console.log(res);
            if(res.code=="Y"){
                window.location.href = "customerDemandDone.html";
                //$(".loading_cover").hide();
            }else if(res.code=="N001"){
                //alert("登录超时，请重新登录。");
				        sessionStorage.clear();
                window.location.href="/login.html";
                $(".loading_cover").hide();
                return false;
            }else{
              $(".loading_cover").hide();
              alert("新增失败");
              return false;
            }

          },
          error : function(XMLHttpRequest, textStatus, errorThrown) {
             console.log(XMLHttpRequest);
             console.log(textStatus);
             console.log(errorThrown);
             return false;
          }
      });
      return false;
}
