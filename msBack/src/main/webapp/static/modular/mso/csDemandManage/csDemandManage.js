/**
 * cs需求管理管理初始化
 */
var CsDemandManage = {
    id: "CsDemandManageTable", //表格id
    seItem: null, //选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
CsDemandManage.initColumn = function() {
return [
    {
        // field: 'industryxifen',
        radio: true
    },
    {
        title: '发包方用户名',
        field: 'username',
        visible: true,
        align: 'center',
        valign: 'middle'
    },{
        title: '品牌名',
        field: 'brandname',
        visible: true,
        align: 'center',
        valign: 'middle'
    },{
        title: '需求名',
        field: 'demandname',
        visible: true,
        align: 'center',
        valign: 'middle'
    },{
        title: '业务类型',
        field: 'servicetypedesc',
        visible: true,
        align: 'center',
        valign: 'middle'
    },{
        title: '需求总量',
        field: 'demandquantity',
        visible: true,
        align: 'center',
        valign: 'middle'
    },{
        title: '需求总金额',
        field: 'totalprice',
        visible: true,
        align: 'center',
        valign: 'middle'
    },{
        title: 'AE负责人',
        field: 'ae',
        visible: true,
        align: 'center',
        valign: 'middle'
    },{
        title: '状态',
        field: 'demandstatedesc',
        visible: true,
        align: 'center',
        valign: 'middle'
    },{
        title: '归属年月',
        field: 'vestingtime',
        visible: true,
        align: 'center',
        valign: 'middle'
    },{
        title: '发布时间',
        field: 'releasetime',
        visible: true,
        align: 'center',
        valign: 'middle'
    },{
        title: '结算量',
        field: 'settlementquantity',
        visible: true,
        align: 'center',
        valign: 'middle'
    },{
        title: '结算金额',
        field: 'settlementprice',
        visible: true,
        align: 'center',
        valign: 'middle'
    },{
        title: '结算时间',
        field: 'settlementtime',
        visible: true,
        align: 'center',
        valign: 'middle'
    },{
        title: '是否有创建任务',
        field: 'hastask',
        visible: true,
        align: 'center',
        valign: 'middle'
    }
];
};

/**
 * 检查是否选中
 */
CsDemandManage.check = function() {
var selected = $('#' + this.id).bootstrapTable('getSelections');
if (selected.length == 0) {
    Feng.info("请先选中表格中的某一记录！");
    return false;
} else {
    CsDemandManage.seItem = selected[0];
    return true;
}
};

/**
 * 点击添加cs需求管理
 */
CsDemandManage.openAddCsDemandManage = function() {
var index = layer.open({
    type: 2,
    title: '添加cs需求管理',
    area: ['800px', '420px'], //宽高
    fix: false, //不固定
    maxmin: true,
    content: Feng.ctxPath + '/csDemandManage/csDemandManage_add'
});
this.layerIndex = index;
};

/**
 * 打开查看cs需求管理详情
 */
CsDemandManage.openCsDemandManageDetail = function() {
if (this.check()) {
    var index = layer.open({
        type: 2,
        title: 'cs需求管理详情',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/csDemandManage/csDemandManage_update/' + CsDemandManage.seItem.id
    });
    this.layerIndex = index;
}
};

/**
 * 删除cs需求管理
 */
CsDemandManage.delete = function() {
if (this.check()) {
    var ajax = new $ax(Feng.ctxPath + "/csDemandManage/delete", function(data) {
        Feng.success("删除成功!");
        CsDemandManage.table.refresh();
    }, function(data) {
        Feng.error("删除失败!" + data.responseJSON.message + "!");
    });
    ajax.set("csDemandManageId", this.seItem.id);
    ajax.start();
}
};

/**
 * 查询cs需求管理列表
 */
CsDemandManage.search = function() {
var queryData = {};
queryData['condition'] = $("#condition").val();
CsDemandManage.table.refresh({
    query: queryData
});
};

$(function() {
var csuserid = "5aa62e535d2b4e218f20b5cd7d13697a";
var defaultColunms = CsDemandManage.initColumn();
var table = new MSOTable(CsDemandManage.id, msourl + `/pasf/csusers/${csuserid}/demands?all=1&size=1000000`, defaultColunms);

table.setPaginationType("client");

//返回值处理
table.setResponseHandler(function(result) {
    //这里根据接口自定义
    return result.data;
});
CsDemandManage.table = table.init();



    $.fn.extend({
            getRoleList:function (data){
                //GET 开发完成 /pasf/pt/sysusers
                var url = domain137 + "/pt/sysusers";
                var csUsername = 'CS专员';
                $.when($.ajax({
                    url:url,
                    //选择CS专员
                    data:{rolename:csUsername},
                    dataType:'json',
                })).then(function (data){
                    if(data.msg=="success"){
                        data.data.map(function (data,index){
                            $('#AEstaff').append('<option value="'+data.userid+'">'+data.username+'</option>');
                        });
                    }
                    
                }).fail(function (data){
            
                });
            }
        });
    
    $('#AEstaff').getRoleList();


    $('#AEstaff').change(function (){
                /*获取某个CS专员的数据*/ 
            url = msourl+`/pasf/csusers/${$(this).val()==1?csuserid:$(this).val()}/demands?all=${$(this).val()==1?1:0}&size=1000000`;

           $('#' + CsDemandManage.id).bootstrapTable('refresh',{url:url});
                    
        });

});
