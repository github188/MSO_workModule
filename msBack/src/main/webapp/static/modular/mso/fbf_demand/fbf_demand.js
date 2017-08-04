/**
 * 需求包管理初始化
 */
var Fbf_demand = {
    id: "Fbf_demandTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
Fbf_demand.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
        {title: 'id', field: 'id',  align: 'center', valign: 'middle'},
        {title: '创建时间', field: 'createTime', align: 'center', valign: 'middle', sortable: true},
        {title: '修改时间', field: 'modifiedTime', align: 'center', valign: 'middle', sortable: true},
        {field: 'state', title: '数据状态',  align: 'center', valign: 'middle'},
        {field: 'serviceType', title: '业务类型',  align: 'center', valign: 'middle'},
        {field: 'targetPopulation', title: '目标人群',  align: 'center', valign: 'middle'},
        {field: 'targetAgeFrom', title: '目标区域人群年龄',  align: 'center', valign: 'middle'},
        {field: 'targetAgeTo', title: '目标区域人群年龄',  align: 'center', valign: 'middle'},
        {field: 'targetChannel', title: '获客渠道',  align: 'center', valign: 'middle'},
        {field: 'demandName', title: '需求名',  align: 'center', valign: 'middle'},
        {field: 'demandDesc', title: '需求描述',  align: 'center', valign: 'middle'},
        {field: 'demandState', title: '发包方需求状态',  align: 'center', valign: 'middle'},
        {field: 'demandComment', title: '需求备注',  align: 'center', valign: 'middle'},
        {field: 'productName', title: '产品名称',  align: 'center', valign: 'middle'},
        {field: 'productIntroduce', title: '产品介绍',  align: 'center', valign: 'middle'},
        {field: 'beginTime', title: '开始时间',  align: 'center', valign: 'middle'},
        {field: 'endTime', title: '结束时间',  align: 'center', valign: 'middle'},
        {field: 'projectLeader', title: '项目负责人',  align: 'center', valign: 'middle'},
        {field: 'projectLeaderPhone', title: '项目负责人电话',  align: 'center', valign: 'middle'},
        {field: 'areaAndDemandQuantity', title: '子需求',  align: 'center', valign: 'middle'},
        {field: 'industryXifen', title: '行业细分',  align: 'center', valign: 'middle'},
        {field: 'chargeTag', title: '收费标签',  align: 'center', valign: 'middle'},
        {field: 'customTag', title: '自定义标签',  align: 'center', valign: 'middle'},
        {field: 'trusteeship', title: '是否托管',  align: 'center', valign: 'middle'},
        {field: 'paymentCycle', title: '付款周期',  align: 'center', valign: 'middle'},
        {field: 'settlementCycle', title: '结算周期',  align: 'center', valign: 'middle'},
        {field: 'favorableMode', title: '优惠方式',  align: 'center', valign: 'middle'},
        {field: 'releaseQuantity', title: '需求发布的订单数量',  align: 'center', valign: 'middle'},
        {field: 'unitPrice', title: '需求单价',  align: 'center', valign: 'middle'},
        {field: 'totalPrice', title: '需求总价',  align: 'center', valign: 'middle'},
        {field: 'favorableTotalPrice', title: '优惠后的总价',  align: 'center', valign: 'middle'},
        {field: 'finalTotalPriceType', title: '最终使用的总价类型',  align: 'center', valign: 'middle'},
        {field: 'completeQuantity', title: '包完成数量',  align: 'center', valign: 'middle'},
        {field: 'settlementQuantity', title: '结算数量',  align: 'center', valign: 'middle'},
        {field: 'settlementTotalPrice', title: '结算总价',  align: 'center', valign: 'middle'},
        {field: 'auditPassTime', title: '审核通过时间',  align: 'center', valign: 'middle'},
        {field: 'completeTime', title: '修改到完成状态的完成时间',  align: 'center', valign: 'middle'},
        {field: 'operationRemark', title: '操作备注',  align: 'center', valign: 'middle'},
        {field: 'settlementTime', title: '结算日期',  align: 'center', valign: 'middle'},
        {field: 'vestingTime', title: '归属年月',  align: 'center', valign: 'middle'},
        {field: 'hasTask', title: '是否创建了任务',  align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
Fbf_demand.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        Fbf_demand.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加需求包
 */
Fbf_demand.openAddFbf_demand = function () {
    var index = layer.open({
        type: 2,
        title: '添加需求包',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/fbf_demand/fbf_demand_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看需求包详情
 */
Fbf_demand.openFbf_demandDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '需求包详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/fbf_demand/fbf_demand_update/' + Fbf_demand.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除需求包
 */
Fbf_demand.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/fbf_demand/delete", function (data) {
            Feng.success("删除成功!");
            Fbf_demand.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("fbf_demandId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询需求包列表
 */
Fbf_demand.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    Fbf_demand.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = Fbf_demand.initColumn();
    var table = new MSOTable(Fbf_demand.id, msourl+"/dbservice/fbfdemands?size=999999", defaultColunms);
   
    table.setPaginationType("client");
    
    //返回值处理
    table.setResponseHandler(function(data){
        return data._embedded.fbfDemandEntities;
    });
    Fbf_demand.table = table.init();
});


