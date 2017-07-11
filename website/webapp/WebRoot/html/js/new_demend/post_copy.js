
function addDemandSubmit(){
    sessionStorage.setItem("demandtype", 2);
    sessionStorage.setItem("fdstate", 1);
  var areaCityList=[];
  var demandpricetol=0;
  $(".form_col4 .areaList").each(function(i){
       demandpricetol+=($(this).find("span.green span.size").text()-1+1);
       areaCityList[i]={
           "targecity":  $(this).find("div.input").eq(0).find("input").val(),
           "citydesc":$(this).find("div.input").eq(0).find("input").attr("title"),
           "releasenum": $(this).find("div.input").eq(1).find("input").val(),
           "orderprice": $(this).find("div.input").eq(2).find("input").val(),
           "orderpricetol": $(this).find("span.green span.size").text(),
           "subdescription": $(this).find("div.input").eq(3).find(":checked").next().text()=="是"?$(this).find("div.input").eq(4).find("input").val():""
         };
    });
        var json={
         "areaCityList": areaCityList,
          "endtime":$(".endDate").val(),
          "dremark":"",
          "demanddescription":$("textarea.descriptionDemand").val(),// "需求描述",
          "begintime":$(".startDate").val(),
          "paymenttime": "",//"结算时间",
          "beginage": $("input.startAge").val(),
          "jfuid": sessionStorage.getItem("jfuid"),
          "jfutype": "1",
          "fdstate":sessionStorage.getItem("fdstate"),
          "packageid":$(".block-box .content-right .drafts_details.selected .pid").eq(0).text(),//"套餐id",
          "demand":$(".introductionPro").val(),//"产品描述",
          "productname":$("input.pro-name").val(),//"产品名",
          "demandpricetol":demandpricetol,
          "pleader":$("input.pleader").val(),//"负责人",
          "demandtype":sessionStorage.getItem("demandtype"),
          "paymentstandard":"按提交线索数量结算",//结算模式
          "pphone":$("input.pphone").val(),//"负责人电话",
          "category1":$(".demend_right span.industry").text(),//行业名
          "category2":$(".demend_right span.channel").text(),//"获客渠道 ",
          "category3":$(".demend_right span.business-types").text(),//"业务类型",
          "targethumen":$(".demend_right span.target-population").text(),//"目标人群",
          "favorableway":0,
          "endage":$("input.endAge").val(),
          "ordername":isNull($("input.demand-name").val())?"草稿箱":$("input.demand-name").val(),//"需求名",
          "productaccessories":file1,//"产品介绍
          "xsxsurl":file2,//线索文件
          "standardoperation":file3,//上传话术
          "otherreport":file4,//客户名单
		  "industry":$("span.industry").text()
          };
        json=JSON.stringify(json);
      jQuery.ajax({
            type : 'POST',
            contentType : 'application/json',
            url : urlPackageSubmit,//'http://ip/1_5/addOrUpdateCustomerDemand',
            processData : false,
            dataType : 'json',
            contentType:"application/json; charset=utf-8",
            data : json,
            success : function(res) {
              if(res.code=="N001"){
				  sessionStorage.clear();
                window.location.href="/index.html";
              }else if(res.code=="Y"){
                //setCookie('proname',$("input.pro-name").val(),10);
                sessionStorage.setItem("cgid",res.hfp.pid);
                window.location.href="customerDemandDone.html";
              }else{
                alert("修改失败");
                return false;
              }
            },
            error : function() {
               console.log(msg);
               return false;
            }
        });
        return false;
  }

function addDemand(){
    sessionStorage.setItem("demandtype",2);
    sessionStorage.setItem("fdstate", 0);
    var areaCityList=[];
    var demandpricetol=0;
    $(".form_col4 .areaList").each(function(i){
         demandpricetol+=($(this).find("span.green span.size").text()-1+1);
         areaCityList[i]={
             "targecity":  $(this).find("div.input").eq(0).find("input").val(),
             "citydesc":$(this).find("div.input").eq(0).find("input").attr("title"),
             "releasenum": $(this).find("div.input").eq(1).find("input").val(),
             "orderprice": $(this).find("div.input").eq(2).find("input").val(),
             "orderpricetol": $(this).find("span.green span.size").text(),
             "subdescription": $(this).find("div.input").eq(3).find(":checked").next().text()=="是"?$(this).find("div.input").eq(4).find("input").val():""
           };
      });
    var json={
     "areaCityList": areaCityList,
      "endtime":$(".endDate").val(),
      "dremark":"",
      "demanddescription":$("textarea.descriptionDemand").val(),// "需求描述",
      "begintime":$(".startDate").val(),
      "paymenttime": "",//"结算时间",
      "beginage": $("input.startAge").val(),
      "jfuid": sessionStorage.getItem("jfuid"),
      "jfutype": "1",
      "fdstate":sessionStorage.getItem("fdstate"),
      "packageid":$(".block-box .content-right .drafts_details.selected .pid").eq(0).text(),//"套餐id",
      "demand":$(".introductionPro").val(),//"产品描述",
      "productname":$("input.pro-name").val(),//"产品名",
      "demandpricetol":demandpricetol,
      "pleader":$("input.pleader").val(),//"负责人",
      "demandtype":sessionStorage.getItem("demandtype"),
      "paymentstandard":"按提交线索数量结算",//结算模式
      "pphone":$("input.pphone").val(),//"负责人电话",
      "category1":$(".demend_right span.industry").text(),//行业名
      "category2":$(".demend_right span.channel").text(),//"获客渠道 ",
      "category3":$(".demend_right span.business-types").text(),//"业务类型",
      "targethumen":$(".demend_right span.target-population").text(),//"目标人群",
      "favorableway":0,
      "endage":$("input.endAge").val(),
      "ordername":isNull($("input.demand-name").val())?"草稿箱":$("input.demand-name").val(),//"需求名",
      "productaccessories":file1,//"产品介绍
      "xsxsurl":file2,//线索文件
      "standardoperation":file3,//上传话术
      "otherreport":file4,//客户名单
	  "industry":$("span.industry").text()
      };
    json=JSON.stringify(json);
      console.log(json);
    jQuery.ajax({
          type : 'POST',
          url : urlPackageSubmit,//'http://ip/1_5/addOrUpdateCustomerDemand',
          processData : false,
          dataType : 'json',
          contentType:"application/json;charset=utf-8",
          data : json,
          success : function(res) {
            if(res.code=="N001"){
				sessionStorage.clear();
              window.location.href="/index.html";
            }else if(res.code=="Y"){
              sessionStorage.setItem("cgid",res.hfp.pid);
                  //	var pid = res.hfp.pid;
                      //console.log(res);
                    //  sessionStorage.removeItem("pid");
                    //  sessionStorage.setItem("pid",pid);
      //              setCookie('proname',$("input.pro-name").val(),10);
                    window.location.href="customerDemandDraftDone.html";
            }else{
              alert("新增失败");
              return false;
            }
          },
          error : function() {
             console.log(msg);
             return false;
          }
      });
      return false;
}
