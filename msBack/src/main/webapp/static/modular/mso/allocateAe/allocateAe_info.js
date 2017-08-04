/**
 * 初始化分配ae专员详情对话框
 */
var AllocateAeInfoDlg = {
    allocateAeInfoData : {}
};

/**
 * 清除数据
 */
AllocateAeInfoDlg.clearData = function() {
    this.allocateAeInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
AllocateAeInfoDlg.set = function(key, val) {
    this.allocateAeInfoData[key] = (typeof value == "undefined") ? $("#" + key).val() : value;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
AllocateAeInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
AllocateAeInfoDlg.close = function() {
    parent.layer.close(window.parent.AllocateAe.layerIndex);
}

/**
 * 收集数据
 */
AllocateAeInfoDlg.collectData = function() {
    this.set('id');
}

/**
 * 提交添加
 */
AllocateAeInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();
    
    //删除id
    delete this.allocateAeInfoData['id'];

    //提交信息
    
    $.ajax({
		type: "POST",
		url: msourl+'XXXXXXX',
    	data: JSON.stringify(this.allocateAeInfoData),
		dataType:'json',
		//beforeSend: validateData,
		contentType:"application/json",
		cache: false,
		success: function(data){
			Feng.success("修改成功!");
			 window.parent.AllocateAe.table.refresh();
	         AllocateAeInfoDlg.close();
		},
        error: function(data){
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        }
	});
}

/**
 * 提交修改
 */
AllocateAeInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();
    
    $.ajax({
		type: "PATCH",
		url: msourl+'XXXXXXX'+this.allocateAeInfoData.id,
    	data: JSON.stringify(this.allocateAeInfoData),
		dataType:'json',
		//beforeSend: validateData,
		contentType:"application/json",
		cache: false,
		success: function(data){
			Feng.success("修改成功!");
			window.parent.AllocateAe.table.refresh();
	        AllocateAeInfoDlg.close();
		},
        error: function(data){
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        }
	});
    
    
    
    
    
}

$(function() {

});
