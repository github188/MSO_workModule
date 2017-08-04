/**
 * 初始化订单指派详情对话框
 */
var OrderSetInfoDlg = {
    orderSetInfoData : {}
};

/**
 * 清除数据
 */
OrderSetInfoDlg.clearData = function() {
    this.orderSetInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
OrderSetInfoDlg.set = function(key, val) {
    this.orderSetInfoData[key] = (typeof value == "undefined") ? $("#" + key).val() : value;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
OrderSetInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
OrderSetInfoDlg.close = function() {
    parent.layer.close(window.parent.OrderSet.layerIndex);
}

/**
 * 收集数据
 */
OrderSetInfoDlg.collectData = function() {
    this.set('id');
}

/**
 * 提交添加
 */
OrderSetInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();
    
    //删除id
    delete this.orderSetInfoData['id'];

    //提交信息
    
    $.ajax({
		type: "POST",
		url: msourl+'XXXXXXX',
    	data: JSON.stringify(this.orderSetInfoData),
		dataType:'json',
		//beforeSend: validateData,
		contentType:"application/json",
		cache: false,
		success: function(data){
			Feng.success("修改成功!");
			 window.parent.OrderSet.table.refresh();
	         OrderSetInfoDlg.close();
		},
        error: function(data){
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        }
	});
}

/**
 * 提交修改
 */
OrderSetInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();
    
    $.ajax({
		type: "PATCH",
		url: msourl+'XXXXXXX'+this.orderSetInfoData.id,
    	data: JSON.stringify(this.orderSetInfoData),
		dataType:'json',
		//beforeSend: validateData,
		contentType:"application/json",
		cache: false,
		success: function(data){
			Feng.success("修改成功!");
			window.parent.OrderSet.table.refresh();
	        OrderSetInfoDlg.close();
		},
        error: function(data){
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        }
	});
    
    
    
    
    
}

$(function() {

});
