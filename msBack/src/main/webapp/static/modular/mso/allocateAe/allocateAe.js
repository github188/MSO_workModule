/**
 * 分配ae专员管理初始化
 */
var AllocateAe = {
    id: "AllocateAeTable", //表格id
    seItem: null, //选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
AllocateAe.initColumn = function() {
return [
    {
        field: 'selectItem',
        radio: true
    },
    {
        title: '发包方公司名',
        field: 'companyname',
        visible: true,
        align: 'center',
        valign: 'middle'
    },
    {
        title: '品牌名',
        field: 'brandname',
        visible: true,
        align: 'center',
        valign: 'middle'
    },
    {
        title: 'AE负责人',
        field: 'ae',
        visible: true,
        align: 'center',
        valign: 'middle'
    },
    {
        title: '更新时间',
        field: 'updatetime',
        visible: true,
        align: 'center',
        valign: 'middle'
    },
    {
        title: '注册时间',
        field: 'registrytime',
        visible: true,
        align: 'center',
        valign: 'middle'
    },
    {
        field: 'assigneddesc',
        title: '分配状态',
        visible: true,
        align: 'center',
        valign: 'middle'
    }
];
};

/**
 * 检查是否选中
 */
AllocateAe.check = function() {
var selected = $('#' + this.id).bootstrapTable('getSelections');
if (selected.length == 0) {
    Feng.info("请先选中表格中的某一记录！");
    return false;
} else {
    AllocateAe.seItem = selected[0];
    return true;
}
};

/**
 * 点击添加分配ae专员
 */
AllocateAe.openAddAllocateAe = function() {
var index = layer.open({
    type: 2,
    title: '添加分配ae专员',
    area: ['800px', '420px'], //宽高
    fix: false, //不固定
    maxmin: true,
    content: Feng.ctxPath + '/allocateAe/allocateAe_add'
});
this.layerIndex = index;
};

/**
 * 打开查看分配ae专员详情
 */
AllocateAe.openAllocateAeDetail = function() {
if (this.check()) {
    var index = layer.open({
        type: 2,
        title: '分配ae专员详情',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/allocateAe/allocateAe_update/' + AllocateAe.seItem.id
    });
    this.layerIndex = index;
}
};

/**
 * 删除分配ae专员
 */
AllocateAe.delete = function() {
if (this.check()) {
    var ajax = new $ax(Feng.ctxPath + "/allocateAe/delete", function(data) {
        Feng.success("删除成功!");
        AllocateAe.table.refresh();
    }, function(data) {
        Feng.error("删除失败!" + data.responseJSON.message + "!");
    });
    ajax.set("allocateAeId", this.seItem.id);
    ajax.start();
}
};

/**
 * 查询分配ae专员列表
 */
AllocateAe.search = function() {
var queryData = {};
queryData['condition'] = $("#condition").val();
AllocateAe.table.refresh({
    query: queryData
});
};

$(function() {
    var csuserid = "5aa62e535d2b4e218f20b5cd7d13697a";
    var defaultColunms = AllocateAe.initColumn();
    var table = new MSOTable(AllocateAe.id, msourl + `/pasf/csusers/${csuserid}/customers?all=1&size=100000000`, defaultColunms);
    table.setPaginationType("client");

    //返回值处理
    table.setResponseHandler(function(result) {
        //这里根据接口自定义
        return result.data;
    });
    AllocateAe.table = table.init();


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
            url = msourl+`/pasf/csusers/${$(this).val()==1?csuserid:$(this).val()}/customers?all=${$(this).val()==1?1:0}&size=1000000`;

           $('#' + AllocateAe.id).bootstrapTable('refresh',{url:url});
                    
        });





});
