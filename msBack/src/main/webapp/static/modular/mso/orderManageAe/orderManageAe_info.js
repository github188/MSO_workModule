/**
 * 初始化订单管理ae详情对话框
 */
var OrderManageAeInfoDlg = {
    orderManageAeInfoData : {}
};

/**
 * 清除数据
 */
OrderManageAeInfoDlg.clearData = function() {
    this.orderManageAeInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
OrderManageAeInfoDlg.set = function(key, val) {
    this.orderManageAeInfoData[key] = (typeof value == "undefined") ? $("#" + key).val() : value;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
OrderManageAeInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
OrderManageAeInfoDlg.close = function() {
    parent.layer.close(window.parent.OrderManageAe.layerIndex);
}

/**
 * 收集数据
 */
OrderManageAeInfoDlg.collectData = function() {
    this.set('id');
}

/**
 * 提交添加
 */
OrderManageAeInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();
    
    //删除id
    delete this.orderManageAeInfoData['id'];

    //提交信息
    
    $.ajax({
		type: "POST",
		url: msourl+'XXXXXXX',
    	data: JSON.stringify(this.orderManageAeInfoData),
		dataType:'json',
		//beforeSend: validateData,
		contentType:"application/json",
		cache: false,
		success: function(data){
			Feng.success("修改成功!");
			 window.parent.OrderManageAe.table.refresh();
	         OrderManageAeInfoDlg.close();
		},
        error: function(data){
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        }
	});
}

/**
 * 提交修改
 */
OrderManageAeInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();
    
    $.ajax({
		type: "PATCH",
		url: msourl+'XXXXXXX'+this.orderManageAeInfoData.id,
    	data: JSON.stringify(this.orderManageAeInfoData),
		dataType:'json',
		//beforeSend: validateData,
		contentType:"application/json",
		cache: false,
		success: function(data){
			Feng.success("修改成功!");
			window.parent.OrderManageAe.table.refresh();
	        OrderManageAeInfoDlg.close();
		},
        error: function(data){
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        }
	});
    
    
    
    
    
}

$(function() {

});
