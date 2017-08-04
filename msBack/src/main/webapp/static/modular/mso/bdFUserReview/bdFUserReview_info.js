/**
 * 初始化bd用户审核详情对话框
 */
var BdFUserReviewInfoDlg = {
    bdFUserReviewInfoData : {}
};

/**
 * 清除数据
 */
BdFUserReviewInfoDlg.clearData = function() {
    this.bdFUserReviewInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
BdFUserReviewInfoDlg.set = function(key, val) {
    this.bdFUserReviewInfoData[key] = (typeof value == "undefined") ? $("#" + key).val() : value;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
BdFUserReviewInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
BdFUserReviewInfoDlg.close = function() {
    parent.layer.close(window.parent.BdFUserReview.layerIndex);
}

/**
 * 收集数据
 */
BdFUserReviewInfoDlg.collectData = function() {
    this.set('id');
}

/**
 * 提交添加
 */
BdFUserReviewInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();
    
    //删除id
    delete this.bdFUserReviewInfoData['id'];

    //提交信息
    
    $.ajax({
		type: "POST",
		url: msourl+'XXXXXXX',
    	data: JSON.stringify(this.bdFUserReviewInfoData),
		dataType:'json',
		//beforeSend: validateData,
		contentType:"application/json",
		cache: false,
		success: function(data){
			Feng.success("修改成功!");
			 window.parent.BdFUserReview.table.refresh();
	         BdFUserReviewInfoDlg.close();
		},
        error: function(data){
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        }
	});
}

/**
 * 提交修改
 */
BdFUserReviewInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();
    
    $.ajax({
		type: "PATCH",
		url: msourl+'XXXXXXX'+this.bdFUserReviewInfoData.id,
    	data: JSON.stringify(this.bdFUserReviewInfoData),
		dataType:'json',
		//beforeSend: validateData,
		contentType:"application/json",
		cache: false,
		success: function(data){
			Feng.success("修改成功!");
			window.parent.BdFUserReview.table.refresh();
	        BdFUserReviewInfoDlg.close();
		},
        error: function(data){
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        }
	});
    
    
    
    
    
}

$(function() {

});
