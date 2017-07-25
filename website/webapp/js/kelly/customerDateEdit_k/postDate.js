export default function addDemand(num,createTime,file1,file2,file3,file4) {
    $(".loading_cover").show();

    var demandId = sessionStorage.getItem("cgid");
    var data = {
        createTime: createTime,
        "releaseQuantity": $("input.num").val(),//todo "integer,需求发布量",
        "areaAndDemandQuantity": JSON.stringify([]),// todo "string,原子需求[{\"target\":\"目标区域\",\"releasenum\":\"发布数量\",\"price\":\"单价\",\"totalprice\":\"总价\",\"remark\":\"备注\",\"auto_calc\":\"单价设定方式 1-根据标签计算 2-手动设定\"}]",
        "endTime": $(".endDate").val(),//Todo"string,结束时间",
        "demandName": isNull($("input.demand-name").val()) ? "无" : $("input.demand-name").val(),//todo "string,需求名",
        "projectLeader": $("input.pleader").val(),//todo  "string,项目负责人",
        "chargeTag": "",//todo "string,收费标签",
        "sales": file2,//todo "string,销售线索附件",
        "productPresentation": "",// todo "string,产品介绍附件",
        "dataCleaningUnitPrice": $("input.money").val(),//Todo "double,数据加工单价",
        "basicUnitPrice": "",//"double,基础单价",//TODO 行业单价
        "productIntroduce": "",// todo "string,产品介绍",
        "customerList": file4,//todo "string,目标客户名单附件path",
        "demandDesc": $("textarea.descriptionDemand").val(),//Todo "string,需求描述 可变长度，最多65535个字符",
        "totalPrice": $(".total").text(),//todo  "double,需求总价",
        "targetChannel": "",//todo "integer,获客渠道 1-电话营销 2-网络营销 3-地推推广",
        "favorableMode": "",//todo "integer,优惠方式 1-无优惠 2-免手续费",
        "beginTime": $(".startDate").val(),//todo "string,开始时间",
        "serviceType": "2",//Todo "string,业务类型 1-销售线索挖掘 2-数据筛选 3-人工客服",
        "industryXifen": "",//todo "string,行业细分",//todo 3级
        "targetPopulation": "",//todo "string,目标人群",
        "speechcraft": file3,//todo "string,话术附件",
        "targetAgeTo": "",//todo "integer,目标区域人群年龄 to",
        "projectLeaderPhone": $("input.pphone").val(),//todo "string,项目负责人电话",
        "customTag": "",//todo "string,自定义标签",
        "targetAgeFrom": "",//todo "integer,目标区域人群年龄 from"
    };
    data = JSON.stringify(data);
    var url = [`${domain137}/quality/drafts/${demandId}/0?industryId=`, `${domain137}/quality/drafts/${demandId}/1?industryId=`];
    jQuery.ajax({
        type: 'patch',
        contentType: 'application/json',
        url: url[num],//'http://ip/1_5/addOrUpdateDatafiltering',
        processData: false,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        data: data,
        success: function (res) {
            if (res.code == "0") {
                // sessionStorage.setItem("cgid", res.demand.pid);
                if (num == 0) {
                    location.href = "customerDataDone.html";
                } else {
                    location.href = "customerDemandDone.html";
                }
            } else if (res.code == "N001") {
                sessionStorage.clear();
                window.location.href = "/login.html";
                $(".loading_cover").hide();
                return false;
            } else {
                alert("新增失败");
                $(".loading_cover").hide();
                return false;
            }

        },
        error: function () {
            return false;
        }
    });
    return false;
}
