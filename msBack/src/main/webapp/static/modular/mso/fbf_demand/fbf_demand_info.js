/**
 * 初始化需求包详情对话框
 */
var Fbf_demandInfoDlg = {
    fbf_demandInfoData : {}
};

/**
 * 清除数据
 */
Fbf_demandInfoDlg.clearData = function() {
    this.fbf_demandInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
Fbf_demandInfoDlg.set = function(key, val) {
    this.fbf_demandInfoData[key] = (typeof value == "undefined") ? $("#" + key).val() : value;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
Fbf_demandInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
Fbf_demandInfoDlg.close = function() {
    parent.layer.close(window.parent.Fbf_demand.layerIndex);
}

/**
 * 收集数据
 */
Fbf_demandInfoDlg.collectData = function() {
    this.set('id');
   this.set('createTime');
       this.set('modifiedTime');
       this.set( 'state');
this.set( 'serviceType');
this.set( 'targetPopulation');
this.set( 'targetAgeFrom');
this.set( 'targetAgeTo');
this.set( 'targetChannel');
this.set( 'demandName');
this.set( 'demandDesc');
this.set( 'demandState');
this.set( 'demandComment');
this.set( 'productName');
this.set( 'productIntroduce');
this.set( 'beginTime');
this.set( 'endTime');
this.set( 'projectLeader');
this.set( 'projectLeaderPhone');
this.set( 'areaAndDemandQuantity');
this.set( 'industryXifen');
this.set( 'chargeTag');
this.set( 'customTag');
this.set( 'trusteeship');
this.set( 'paymentCycle');
this.set( 'settlementCycle');
this.set( 'favorableMode');
this.set( 'releaseQuantity');
this.set( 'unitPrice');
this.set( 'totalPrice');
this.set( 'favorableTotalPrice');
this.set( 'finalTotalPriceType');
this.set( 'completeQuantity');
this.set( 'settlementQuantity');
this.set( 'settlementTotalPrice');
this.set( 'auditPassTime');
this.set( 'completeTime');
this.set( 'operationRemark');
this.set( 'settlementTime');
this.set( 'vestingTime');
this.set( 'hasTask');
}






/**
 * 提交添加
 */
Fbf_demandInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();
   
    //删除id
    delete this.fbf_demandInfoData['id'];
    //this.fbf_demandInfoData['id'] = new Date().getTime();

    //提交信息
//    var ajax = new $ax(Feng.ctxPath + "/fbf_demand/add", function(data){
//        Feng.success("添加成功!");
//        window.parent.Fbf_demand.table.refresh();
//        Fbf_demandInfoDlg.close();
//    },function(data){
//        Feng.error("添加失败!" + data.responseJSON.message + "!");
//    });
//    ajax.set(this.fbf_demandInfoData);
//    ajax.start();
    $.ajax({
		type: "POST",
		//url: msourl+'/dbservice/fbfdemands',
		url: '/fbf_demand/add',
    	data: JSON.stringify(this.fbf_demandInfoData),
		dataType:'json',
		//beforeSend: validateData,
		contentType:"application/json",
		cache: false,
		success: function(data){
			Feng.success("修改成功!");
			window.parent.Fbf_demand.table.refresh();
	        Fbf_demandInfoDlg.close();
		},
        error: function(data){
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        }
	});

}

/**
 * 提交修改
 */
Fbf_demandInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
//    var ajax = new $ax(Feng.ctxPath + "/fbf_demand/update", function(data){
//        Feng.success("修改成功!");
//        window.parent.Fbf_demand.table.refresh();
//        Fbf_demandInfoDlg.close();
//    },function(data){
//        Feng.error("修改失败!" + data.responseJSON.message + "!");
//    });
//    ajax.set(this.fbf_demandInfoData);
//    ajax.start();

    $.ajax({
		type: "PATCH",
		url: '/fbf_demand/update/'+'201511201D986F3E',
    	data: JSON.stringify(this.fbf_demandInfoData),
		dataType:'json',
		//beforeSend: validateData,
		contentType:"application/json",
		cache: false,
		success: function(data){
			Feng.success("修改成功!");
			window.parent.Fbf_demand.table.refresh();
	        Fbf_demandInfoDlg.close();
		},
        error: function(data){
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        }
	});
}

$(function() {

});


