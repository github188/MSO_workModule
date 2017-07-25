/**
 * 提交审核
 * @returns {boolean}
 */
export function addDemandSubmit(createTime,industryId){
    var demandId=sessionStorage.getItem("cgid");
    var areaCityList = [];
    var demandpricetol = 0;
    var demandNum = 0;
    $(".form_col4 .areaList").each(function (i) {
        demandpricetol += ($(this).find("span.green span.size").text() - 1 + 1);
        demandNum += isNaN(Number($(this).find("div.input").eq(1).find("input").val())) ? 0 : Number($(this).find("div.input").eq(1).find("input").val())
        areaCityList[i] = {
            "target": $(this).find("div.input").eq(0).find("input").val(),//目标区域
            "releasenum":Number($(this).find("div.input").eq(1).find("input").val()||0),//数量
            "price": $(this).find("div.input").eq(2).find("input").val(),//单价
            "totalprice": Number($(this).find("span.green span.size").text()||0),//总价
            "remark": $(this).find("div.input").eq(3).find(":checked").next().text() == "是" ? $(this).find("div.input").eq(4).find("input").val() : "",//备注
            "auto_calc": ""//单价设定方式
        };
    });


    var url = domain137 + `/quality/drafts/${demandId}/1?industryId=${industryId||""}`;
    var targetChannelArr = ["", "电话营销", "网络营销", "地推推广"];
    var data = {
        "createTime":createTime,
        "demandComment":"",
        "releaseQuantity": demandNum,//todo "integer,需求发布量",
        "areaAndDemandQuantity": JSON.stringify(areaCityList),//Todo  "string,原子需求[{\"target\":\"目标区域\",\"releasenum\":\"发布数量\",\"price\":\"单价\",\"totalprice\":\"总价\",\"remark\":\"备注\",\"auto_calc\":\"单价设定方式 1-根据标签计算 2-手动设定\"}]",
        "endTime": $(".endDate").val(),//todo "string,结束时间",
        "demandName": isNull($("input.demand-name").val()) ? "草稿箱" : $("input.demand-name").val(),//todo "string,需求名",
        "projectLeader": $("input.pleader").val(),//Todo  "string,项目负责人",
        "chargeTag": "",//"todo string,收费标签",
        "sales": file2||"",//"todo string,销售线索附件",
        "productPresentation": file1||"",//todo  "string,产品介绍附件",
        "dataCleaningUnitPrice": "",//todo "double,数据加工单价",
        "basicUnitPrice": "",//todo "double,基础单价", 行业单价
        "productIntroduce": $(".introductionPro").val(),//todo  "string,产品介绍",
        "customerList": file4||"",//todo "string,目标客户名单附件path",
        "demandDesc": $("textarea.descriptionDemand").val(),//todo "string,需求描述 可变长度，最多65535个字符",
        "totalPrice": demandpricetol,// Todo "double,需求总价",
        "targetChannel": targetChannelArr.indexOf($("td.hkqd .select-set").text()),//todo "integer,获客渠道 1-电话营销 2-网络营销 3-地推推广",
        "favorableMode": "",//todo "integer,优惠方式 1-无优惠 2-免手续费",
        "beginTime": $(".startDate").val(),//todo "string,开始时间",
        "serviceType": "1",//todo "string,业务类型 1-销售线索挖掘 2-数据筛选 3-人工客服",
        "industryXifen": $(".title_select").find("li.selected").find('a').html(),//todo "string,行业细分",// 3级
        "targetPopulation": $(".demend_right span.target-population").text(),//todo "string,目标人群",
        "speechcraft": file3||"",//todo "string,话术附件",
        "targetAgeTo": $("input.endAge").val(),//todo "integer,目标区域人群年龄 to",
        "projectLeaderPhone": $("input.pphone").val(),//todo "string,项目负责人电话",
        "customTag": "",//todo "string,自定义标签",
        "targetAgeFrom": $("input.startAge").val(),//todo "integer,目标区域人群年龄 from"
        "productName":$(".pro-name").val()
    };
    data=JSON.stringify(data)
    jQuery.ajax({
        type: 'patch',
        contentType: 'application/json',
        url: url,//'http://ip/1_5/addOrUpdateCustomerDemand',
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
        error: function (msg) {
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
export function addDemand(createTime,industryId){
    var demandId=sessionStorage.getItem("cgid");
    var areaCityList = [];
    var demandpricetol = 0;
    var demandNum = 0;
    $(".form_col4 .areaList").each(function (i) {
        demandpricetol += ($(this).find("span.green span.size").text() - 1 + 1);
        demandNum += isNaN(Number($(this).find("div.input").eq(1).find("input").val())) ? 0 : Number($(this).find("div.input").eq(1).find("input").val())
        var target=$(this).find("div.input").eq(0).find("input").val()//目标区域
        var releasenum=Number($(this).find("div.input").eq(1).find("input").val()||0)//数量
        var price= $(this).find("div.input").eq(2).find("input").val()//单价

        if(target||releasenum||price){
                var obj={
                     "target": target,
                    "releasenum": releasenum,
                    "price":price,
                    "totalprice": Number($(this).find("span.green span.size").text()||0),//总价
                    "remark": $(this).find("div.input").eq(3).find(":checked").next().text() == "是" ? $(this).find("div.input").eq(4).find("input").val() : "",//备注
                    "auto_calc": ""//单价设定方式
                }
                areaCityList.push(obj)
        }
    });



    var url = domain137 + `/quality/drafts/${demandId}/0?industryId=${industryId||""}`;
    var targetChannelArr = ["", "电话营销", "网络营销", "地推推广"];
    var data = {
        "createTime":createTime,
        "demandComment":"",
        "releaseQuantity": demandNum,//todo "integer,需求发布量",
        "areaAndDemandQuantity": JSON.stringify(areaCityList),//Todo  "string,原子需求[{\"target\":\"目标区域\",\"releasenum\":\"发布数量\",\"price\":\"单价\",\"totalprice\":\"总价\",\"remark\":\"备注\",\"auto_calc\":\"单价设定方式 1-根据标签计算 2-手动设定\"}]",
        "endTime": $(".endDate").val(),//todo "string,结束时间",
        "demandName": isNull($("input.demand-name").val()) ? "草稿箱" : $("input.demand-name").val(),//todo "string,需求名",
        "projectLeader": $("input.pleader").val(),//Todo  "string,项目负责人",
        "chargeTag": "",//"todo string,收费标签",
        "sales": file2||"",//"todo string,销售线索附件",
        "productPresentation": file1||"",//todo  "string,产品介绍附件",
        "dataCleaningUnitPrice": "",//todo "double,数据加工单价",
        "basicUnitPrice": "",//todo "double,基础单价", 行业单价
        "productIntroduce": $(".introductionPro").val(),//todo  "string,产品介绍",
        "customerList": file4||"",//todo "string,目标客户名单附件path",
        "demandDesc": $("textarea.descriptionDemand").val(),//todo "string,需求描述 可变长度，最多65535个字符",
        "totalPrice": demandpricetol,// Todo "double,需求总价",
        "targetChannel": targetChannelArr.indexOf($("td.hkqd .select-set").text()),//todo "integer,获客渠道 1-电话营销 2-网络营销 3-地推推广",
        "favorableMode": "",//todo "integer,优惠方式 1-无优惠 2-免手续费",
        "beginTime": $(".startDate").val(),//todo "string,开始时间",
        "serviceType": "1",//todo "string,业务类型 1-销售线索挖掘 2-数据筛选 3-人工客服",
        "industryXifen": $(".title_select").find("li.selected").find('a').html(),//todo "string,行业细分",// 3级
        "targetPopulation": $(".demend_right span.target-population").text(),//todo "string,目标人群",
        "speechcraft": file3||"",//todo "string,话术附件",
        "targetAgeTo": $("input.endAge").val(),//todo "integer,目标区域人群年龄 to",
        "projectLeaderPhone": $("input.pphone").val(),//todo "string,项目负责人电话",
        "customTag": "",//todo "string,自定义标签",
        "targetAgeFrom": $("input.startAge").val(),//todo "integer,目标区域人群年龄 from"
        "productName":$(".pro-name").val()
    };
    data=JSON.stringify(data)
    jQuery.ajax({
        type: 'patch',
        url: url,//'http://ip/1_5/addOrUpdateCustomerDemand',
        contentType: "application/json",
        data: data,
        success: function (res) {
            if (res.code == "N001") {
                sessionStorage.clear();
                window.location.href = "/index.html";
            } else if (res.code == "0") {
                sessionStorage.setItem("cgid", res.pid);
                //	var pid = res.hfp.pid;
                //  sessionStorage.removeItem("pid");
                //  sessionStorage.setItem("pid",pid);
                //              setCookie('proname',$("input.pro-name").val(),10);

                 sessionStorage.setItem("cgid", res.pid);
                window.location.href = "customerDemandDraftDone.html";
            } else {
                alert("新增失败");
                return false;
            }
        },
        error: function (msg) {
            console.log(msg);
            return false;
        }
    });
      return false;
}
