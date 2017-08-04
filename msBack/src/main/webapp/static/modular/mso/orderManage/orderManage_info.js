/**
 * 初始化订单管理详情对话框
 */
var OrderManageInfoDlg = {
    orderManageInfoData : {}
};

/**
 * 清除数据
 */
OrderManageInfoDlg.clearData = function() {
    this.orderManageInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
OrderManageInfoDlg.set = function(key, val) {
    this.orderManageInfoData[key] = (typeof value == "undefined") ? $("#" + key).val() : value;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
OrderManageInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
OrderManageInfoDlg.close = function() {
    parent.layer.close(window.parent.OrderManage.layerIndex);
}

/**
 * 收集数据
 */
OrderManageInfoDlg.collectData = function() {
    this.set('id');
}

/**
 * 提交添加
 */
OrderManageInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();
    
    //删除id
    delete this.orderManageInfoData['id'];

    //提交信息
    
    $.ajax({
		type: "POST",
		url: msourl+'XXXXXXX',
    	data: JSON.stringify(this.orderManageInfoData),
		dataType:'json',
		//beforeSend: validateData,
		contentType:"application/json",
		cache: false,
		success: function(data){
			Feng.success("修改成功!");
			 window.parent.OrderManage.table.refresh();
	         OrderManageInfoDlg.close();
		},
        error: function(data){
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        }
	});
}

/**
 * 提交修改
 */
OrderManageInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();
    
    $.ajax({
		type: "PATCH",
		url: msourl+'XXXXXXX'+this.orderManageInfoData.id,
    	data: JSON.stringify(this.orderManageInfoData),
		dataType:'json',
		//beforeSend: validateData,
		contentType:"application/json",
		cache: false,
		success: function(data){
			Feng.success("修改成功!");
			window.parent.OrderManage.table.refresh();
	        OrderManageInfoDlg.close();
		},
        error: function(data){
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        }
	});
    
    
    
    
    
}

$(function() {

});
