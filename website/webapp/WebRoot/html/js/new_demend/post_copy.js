/**
 * 提交审核
 * @returns {boolean}
 */
function addDemandSubmit(){
    sessionStorage.setItem("demandtype", 2);
    sessionStorage.setItem("fdstate", 1);
    var areaCityList = [];
    var demandpricetol = 0;
    var demandNum = 0;
    $(".form_col4 .areaList").each(function (i) {
        demandpricetol += ($(this).find("span.green span.size").text() - 1 + 1);
        demandNum += isNaN(Number($(this).find("div.input").eq(1).find("input").val())) ? 0 : Number($(this).find("div.input").eq(1).find("input").val())
        areaCityList[i] = {
            "target": $(this).find("div.input").eq(0).find("input").val(),//目标区域
            "citydesc": $(this).find("div.input").eq(0).find("input").attr("title"),
            "releasenum": $(this).find("div.input").eq(1).find("input").val(),//数量
            "price": $(this).find("div.input").eq(2).find("input").val(),//单价
            "totalprice": $(this).find("span.green span.size").text(),//总价
            "remark": $(this).find("div.input").eq(3).find(":checked").next().text() == "是" ? $(this).find("div.input").eq(4).find("input").val() : "",//备注
            auto_calc: ""//单价设定方式
        };
    });
    var json = {
        "areaCityList": areaCityList,//Todo 目标区域
        "endtime": $(".endDate").val(),//Todo 结束时间
        "dremark": "",
        "demanddescription": $("textarea.descriptionDemand").val(),//Todo  "需求描述",
        "begintime": $(".startDate").val(),//todo
        "paymenttime": "",//"结算时间",
        "beginage": $("input.startAge").val(),//todo
        "jfuid": sessionStorage.getItem("jfuid"),
        "jfutype": "1",
        "fdstate": sessionStorage.getItem("fdstate"),
        "packageid": $(".block-box .content-right .drafts_details.selected .pid").eq(0).text(),//"套餐id",
        "demand": $(".introductionPro").val(),//todo "产品描述",
        "productname": $("input.pro-name").val(),//"产品名",
        "demandpricetol": $('.countPrice .price').text(),//demandpricetol,
        "pleader": $("input.pleader").val(),//Todo "负责人",
        "demandtype": sessionStorage.getItem("demandtype"),
        "pid": pid,
        "paymentstandard": "按提交线索数量结算",//结算模式
        "pphone": $("input.pphone").val(),//todo "负责人电话",
        "category1": $(".demend_right span.industry").text(),//行业名
        "category2": $("td.hkqd .select-set").text(),//"获客渠道 ",
        "category3": $(".demend_right span.business-types").text(),//"业务类型",
        "targethumen": $(".demend_right span.target-population").text(),//todo "目标人群",
        "favorableway": 0,
        "endage": $("input.endAge").val(),//todo
        "ordername": isNull($("input.demand-name").val()) ? "草稿箱" : $("input.demand-name").val(),//"todo 需求名",
        "productaccessories": file1,//todo "产品介绍
        "xsxsurl": file2,//todo 线索文件
        "standardoperation": file3,//todo上传话术
        "otherreport": file4//todo 客户名单
    };
    //debugger;


    var url = domain137 + `/quality/adddemand/${sessionStorage.getItem("jfuid")}/1/`;
    var targetChannelArr = ["", "电话营销", "网络营销", "地推推广"];
    var data = {
        "releaseQuantity": demandNum,//todo "integer,需求发布量",
        "areaAndDemandQuantity": JSON.stringify(areaCityList),//Todo  "string,原子需求[{\"target\":\"目标区域\",\"releasenum\":\"发布数量\",\"price\":\"单价\",\"totalprice\":\"总价\",\"remark\":\"备注\",\"auto_calc\":\"单价设定方式 1-根据标签计算 2-手动设定\"}]",
        "endTime": $(".endDate").val(),//todo "string,结束时间",
        "demandName": isNull($("input.demand-name").val()) ? "草稿箱" : $("input.demand-name").val(),//todo "string,需求名",
        "projectLeader": $("input.pleader").val(),//Todo  "string,项目负责人",
        "chargeTag": "",//"todo string,收费标签",
        "sales": file2,//"todo string,销售线索附件",
        "productPresentation": file1,//todo  "string,产品介绍附件",
        "dataCleaningUnitPrice": "",//todo "double,数据加工单价",
        "basicUnitPrice": "",//todo "double,基础单价", 行业单价
        "productIntroduce": $(".introductionPro").val(),//todo  "string,产品介绍",
        "customerList": file4,//todo "string,目标客户名单附件path",
        "demandDesc": $("textarea.descriptionDemand").val(),//todo "string,需求描述 可变长度，最多65535个字符",
        "totalPrice": demandpricetol,// Todo "double,需求总价",
        "targetChannel": targetChannelArr.indexOf($("td.hkqd .select-set").text()),//todo "integer,获客渠道 1-电话营销 2-网络营销 3-地推推广",
        "favorableMode": "",//todo "integer,优惠方式 1-无优惠 2-免手续费",
        "beginTime": $(".startDate").val(),//todo "string,开始时间",
        "serviceType": "1",//todo "string,业务类型 1-销售线索挖掘 2-数据筛选 3-人工客服",
        "industryXifen": $(".title_select").find("li.selected").find('a').html(),//todo "string,行业细分",// 3级
        "targetPopulation": $(".demend_right span.target-population").text(),//todo "string,目标人群",
        "speechcraft": file3,//todo "string,话术附件",
        "targetAgeTo": $("input.endAge").val(),//todo "integer,目标区域人群年龄 to",
        "projectLeaderPhone": $("input.pphone").val(),//todo "string,项目负责人电话",
        "customTag": "",//todo "string,自定义标签",
        "targetAgeFrom": $("input.startAge").val(),//todo "integer,目标区域人群年龄 from"
    };
    data = JSON.stringify(data);
    jQuery.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: url,//'http://ip/1_5/addOrUpdateCustomerDemand',
        processData: false,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        data: data,
        success: function (res) {
            if (res.code == "N001") {
                sessionStorage.clear();
                window.location.href = "/index.html";
            } else if (res.code == "0") {
                //setCookie('proname',$("input.pro-name").val(),10);
                sessionStorage.setItem("cgid", res.pid);
                window.location.href = "customerDemandDone.html";
            } else {
                alert("修改失败");
                return false;
            }
        },
        error: function () {
            console.log(msg);
            return false;
        }
    });
    return false;
  }
/**
 * 加入草稿箱
 * @returns {boolean}
 */
function addDemand(){
    sessionStorage.setItem("demandtype", 2);
    sessionStorage.setItem("fdstate", 0);
    var areaCityList = [];
    var demandpricetol = 0;
    var demandNum = 0;
    $(".form_col4 .areaList").each(function (i) {
        demandpricetol += ($(this).find("span.green span.size").text() - 1 + 1);
        demandNum += isNaN(Number($(this).find("div.input").eq(1).find("input").val())) ? 0 : Number($(this).find("div.input").eq(1).find("input").val())
        areaCityList[i] = {
            "target": $(this).find("div.input").eq(0).find("input").val(),//目标区域
            "citydesc": $(this).find("div.input").eq(0).find("input").attr("title"),
            "releasenum": $(this).find("div.input").eq(1).find("input").val(),//数量
            "price": $(this).find("div.input").eq(2).find("input").val(),//单价
            "totalprice": $(this).find("span.green span.size").text(),//总价
            "remark": $(this).find("div.input").eq(3).find(":checked").next().text() == "是" ? $(this).find("div.input").eq(4).find("input").val() : "",//备注
            auto_calc: ""//单价设定方式
        };
    });
    var json = {
        "areaCityList": areaCityList,//Todo 目标区域
        "endtime": $(".endDate").val(),//Todo 结束时间
        "dremark": "",
        "demanddescription": $("textarea.descriptionDemand").val(),//Todo  "需求描述",
        "begintime": $(".startDate").val(),//todo
        "paymenttime": "",//"结算时间",
        "beginage": $("input.startAge").val(),//todo
        "jfuid": sessionStorage.getItem("jfuid"),
        "jfutype": "1",
        "fdstate": sessionStorage.getItem("fdstate"),
        "packageid": $(".block-box .content-right .drafts_details.selected .pid").eq(0).text(),//"套餐id",
        "demand": $(".introductionPro").val(),//todo "产品描述",
        "productname": $("input.pro-name").val(),//"产品名",
        "demandpricetol": $('.countPrice .price').text(),//demandpricetol,
        "pleader": $("input.pleader").val(),//Todo "负责人",
        "demandtype": sessionStorage.getItem("demandtype"),
        "pid": pid,
        "paymentstandard": "按提交线索数量结算",//结算模式
        "pphone": $("input.pphone").val(),//todo "负责人电话",
        "category1": $(".demend_right span.industry").text(),//行业名
        "category2": $("td.hkqd .select-set").text(),//"获客渠道 ",
        "category3": $(".demend_right span.business-types").text(),//"业务类型",
        "targethumen": $(".demend_right span.target-population").text(),//todo "目标人群",
        "favorableway": 0,
        "endage": $("input.endAge").val(),//todo
        "ordername": isNull($("input.demand-name").val()) ? "草稿箱" : $("input.demand-name").val(),//"todo 需求名",
        "productaccessories": file1,//todo "产品介绍
        "xsxsurl": file2,//todo 线索文件
        "standardoperation": file3,//todo上传话术
        "otherreport": file4//todo 客户名单
    };
    //debugger;


    var url = domain137 + `/quality/adddemand/${sessionStorage.getItem("jfuid")}/0/`;
    var targetChannelArr = ["", "电话营销", "网络营销", "地推推广"];
    var data = {
        "releaseQuantity": demandNum,//todo "integer,需求发布量",
        "areaAndDemandQuantity": JSON.stringify(areaCityList),//Todo  "string,原子需求[{\"target\":\"目标区域\",\"releasenum\":\"发布数量\",\"price\":\"单价\",\"totalprice\":\"总价\",\"remark\":\"备注\",\"auto_calc\":\"单价设定方式 1-根据标签计算 2-手动设定\"}]",
        "endTime": $(".endDate").val(),//todo "string,结束时间",
        "demandName": isNull($("input.demand-name").val()) ? "草稿箱" : $("input.demand-name").val(),//todo "string,需求名",
        "projectLeader": $("input.pleader").val(),//Todo  "string,项目负责人",
        "chargeTag": "",//"todo string,收费标签",
        "sales": file2,//"todo string,销售线索附件",
        "productPresentation": file1,//todo  "string,产品介绍附件",
        "dataCleaningUnitPrice": "",//todo "double,数据加工单价",
        "basicUnitPrice": "",//todo "double,基础单价", 行业单价
        "productIntroduce": $(".introductionPro").val(),//todo  "string,产品介绍",
        "customerList": file4,//todo "string,目标客户名单附件path",
        "demandDesc": $("textarea.descriptionDemand").val(),//todo "string,需求描述 可变长度，最多65535个字符",
        "totalPrice": demandpricetol,// Todo "double,需求总价",
        "targetChannel": targetChannelArr.indexOf($("td.hkqd .select-set").text()),//todo "integer,获客渠道 1-电话营销 2-网络营销 3-地推推广",
        "favorableMode": "",//todo "integer,优惠方式 1-无优惠 2-免手续费",
        "beginTime": $(".startDate").val(),//todo "string,开始时间",
        "serviceType": "1",//todo "string,业务类型 1-销售线索挖掘 2-数据筛选 3-人工客服",
        "industryXifen": $(".title_select").find("li.selected").find('a').html(),//todo "string,行业细分",// 3级
        "targetPopulation": $(".demend_right span.target-population").text(),//todo "string,目标人群",
        "speechcraft": file3,//todo "string,话术附件",
        "targetAgeTo": $("input.endAge").val(),//todo "integer,目标区域人群年龄 to",
        "projectLeaderPhone": $("input.pphone").val(),//todo "string,项目负责人电话",
        "customTag": "",//todo "string,自定义标签",
        "targetAgeFrom": $("input.startAge").val(),//todo "integer,目标区域人群年龄 from"
    };
    data = JSON.stringify(data);

    jQuery.ajax({
        type: 'POST',
        url: url,//'http://ip/1_5/addOrUpdateCustomerDemand',
        processData: false,
        dataType: 'json',
        contentType: "application/json;charset=utf-8",
        data: data,
        success: function (res) {
            if (res.code == "N001") {
                sessionStorage.clear();
                window.location.href = "/index.html";
            } else if (res.code == "0") {
                sessionStorage.setItem("cgid", res.pid);
                //	var pid = res.hfp.pid;
                console.log(res);
                //  sessionStorage.removeItem("pid");
                //  sessionStorage.setItem("pid",pid);
                //              setCookie('proname',$("input.pro-name").val(),10);
                window.location.href = "customerDemandDraftDone.html";
            } else {
                alert("新增失败");
                return false;
            }
        },
        error: function () {
            console.log(msg);
            return false;
        }
    });
      return false;
}
