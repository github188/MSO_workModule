/**
 * 初始化BD发包方需求审核详情对话框
 */
var pagedata = JSON.parse($('.pagedata').html());
var BdDemandReviewInfoDlg = {
    bdDemandReviewInfoData : {},
	newPageData:$.extend(true,pagedata,{})
};

/**
 * 清除数据
 */
BdDemandReviewInfoDlg.clearData = function() {
    this.bdDemandReviewInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
BdDemandReviewInfoDlg.set = function(key, val) {
    this.bdDemandReviewInfoData[key] = (typeof value == "undefined") ? $("#" + key).val() : value;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
BdDemandReviewInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
BdDemandReviewInfoDlg.close = function() {
    parent.layer.close(window.parent.BdDemandReview.layerIndex);
}

/**
 * 收集数据
 */
BdDemandReviewInfoDlg.collectData = function() {
    this.set('id');
}

/**
 * 提交添加
 */
BdDemandReviewInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();
    
    //删除id
    delete this.bdDemandReviewInfoData['id'];

    //提交信息***
    
    $.ajax({
		type: "POST",
		url: msourl+'XXXXXXX',
    	data: JSON.stringify(this.bdDemandReviewInfoData),
		dataType:'json',
		//beforeSend: validateData,
		contentType:"application/json",
		cache: false,
		success: function(data){
			Feng.success("修改成功!");
			 window.parent.BdDemandReview.table.refresh();
	         BdDemandReviewInfoDlg.close();
		},
        error: function(data){
            Feng.error("修改失败!" + data.responseJSON.message + "!");
        }
	});
}

/**
 * 提交修改
 */
BdDemandReviewInfoDlg.editSubmit = function() {
	var demandata = BdDemandReviewInfoDlg.newPageData;
	console.log(demandata);
      var url = Feng.ctxPath + '/bdDemandReview/update/'+demandata.demandid+"?rolename="+rolename+'&roleid='+roleid ;
	  //https://gateway.mshuoke.com/pasf/bdusers/67018442beb7424b850e658aa43af830/demands/20170803154308983?rolename=
	
		demandata.vestingtime = $('.vestingtime .end_date:visible').val();
		//demandata.auditcomment = $('.auditcomment:visible').val();

		/*审核状态更新*/
		//1审核中 7再次提交 通过2,3,4 驳回305 // 1 || 7 才可以有审核的权利
		if(demandata.demandstate == 1 || demandata.demandstate == 7 ){
			//auditstate == 3
			demandata.auditstate = $('.form-control.auditstate').val();
			
			if(demandata.auditstate == 3){
				/*只有驳回才传值审核意见*/
				demandata.auditcomment = $('.auditcomment:visible').val();
			}
			
			/*审核意见*/
			
		}
		
		
		//auditcomment
		if(demandata.industry == "教育培训"){
			//demandata.basicunitprice =  $('.basicunitprice').val();
		}
		
		/*子需求*/
		$('.subdemands input.comment').map(function (index,data){
			if(data){
				if(demandata.subdemands[index]){
					demandata.subdemands[index].remark = $('.subdemands input.comment').eq(index).val();
				}
			}
		});
		
		
		/*paymentcycle 付款*/
		if($('.payuserdefined')[0].checked){
			/*自定义*/
			demandata.payuserdefined = 1;
			demandata.paymentcycle = $('div.radio.paycycle input[type="number"]').val();
		}else{
			demandata.payuserdefined = 0;
			/*判断 35 45 */
			$('div.radio.paycycle input[type="radio"]').map(function(index,data){
				if(this.checked){
				
					if(this.value==35){
						demandata.paymentcycle = 35;
					}
					
					if(this.value==45){
						demandata.paymentcycle = 45;
					}
				}

			});
		}
		
		
		
		/*settlementcycle 付款*/

		if($('.settleuserdefined')[0].checked){
			/*自定义*/
			demandata.settleuserdefined = 1;
			demandata.settlementcycle = $('div.radio.setcycle input[type="number"]').val();
		}else{
		//debugger;
			/*判断 35 45 */
			demandata.settleuserdefined = 0;
			$('div.radio.setcycle input[type="radio"]').map(function(index,data){
				if(this.checked){
					if(this.value==35){
						demandata.settlementcycle = 35;
					}
					
					if(this.value==45){
						demandata.settlementcycle = 45;
					}
				}

			});
		}
		
		
		
		if(!demandata.vestingtime){
			//alert('请填写归属日期');
			$('.modal-body').scrollTop(270);
			$('.vestingtime-error').show();
		}else{
			$('.vestingtime-error').hide();
		}
		
		if(demandata.auditstate == 3){
			demandata.auditcomment = $('.auditcomment:visible').val();
			if(!demandata.auditcomment){
				//alert('请填写审核意见');
				if(demandata.vestingtime){
					$('.modal-body').scrollTop($('.modal-body').height()-50);
				}
				$('.auditcomment-error').show();
			}else{
				$('.auditcomment-error').hide();
			}
		}
		
		
		
		/*判断自定义标签*/
		//debugger;
		if(demandata.customtags && demandata.customtags[0]){
			//先看有几个 
			//现在有几个
			//删除多余的
			//改变，改变的
			
			var originlen = demandata.customtags.length;
			
			var nowlen = $('.free-label-box .free-label').length;
			if(!(originlen==nowlen)){
				for(var i=0;i<originlen-nowlen;i++){
					demandata.customtags.pop();
				}
			}
			
			//改变现在的
			
			var customtagsArr = $('.free-label-box .free-label');
			
			for(var k=0;k<demandata.customtags.length;k++){
				demandata.customtags[k].tagname = customtagsArr.eq(k).find('input[type="text"]').val();
				demandata.customtags[k].price = customtagsArr.eq(k).find('input[type="number"]').val();
			}
		}
		
		demandata.adjustprice = $('.adjustprice').val();
		
		if($('label.error:visible').get(0)){
		
			return;
		}
	
		$.ajax({
			type: "PUT",
			url:url,
			data:JSON.stringify(demandata),
			dataType:'json',
			//beforeSend: validateData,
			contentType:"application/json",
			cache: false,
			success: function(data){
				Feng.success("修改成功!");
				window.parent.BdDemandManage.table.refresh();
				BdDemandManageInfoDlg.close();
			},
			error: function(data){
				Feng.error("修改失败!" + data.responseJSON.message + "!");
			}
		}); 
}

$(function() {
	
	function setDetaildata(data){
		var servicetype = data.servicetype;
		var isindustry = data.industry;
		var dataState = data.demandstate
		customtagValue = 0;
		chargeValue = 0;
			/*判断页面的显示流程*/
		if(servicetype=="1" && isindustry == "教育培训"){
			/*标准发包 销售线索挖掘*/
			
			$('.attachment').hide();
			$('.standard').show();
		
			/*基本信息*/
			$('.basicdetail').show();
			$('.basicnot').hide();
			$('.basicmaked').hide();
		}
		
		
		if(servicetype=="1" && isindustry != "教育培训"){
			/*非标准发包*/
			$('.standard').hide();
			$('.attachment').show();
			
			
			/*基本信息*/
			$('.basicdetail').hide();
			$('.basicnot').show();
			$('.basicmaked').hide();
		}
		
		if(servicetype=="2"){
			/*数据加工*/
			$('.standard').hide();
			
			
			/*基本信息*/
			$('.basicmaked').show();
			$('.basicdetail').hide();
			$('.basicnot').hide();
			
		}
		
		/*判断自定义的周期*/
		if(data.settleuserdefined){
			$('div.radio.setcycle input[type="radio"]').map(function(index,data){
					this.checked = false;
			});
			$('.settleuserdefined').prop('checked',true);
			$('div.radio.setcycle input[type="number"]').val(data.settlementcycle);
		}else{
			$('div.radio.setcycle input[type="radio"]').map(function(index,data){
					this.checked = false;
			});
			
			/*初始化*/
			$('div.radio.setcycle input[type="radio"]').eq(1).prop('checked',true);
			
			
			$('div.radio.setcycle input[type="number"]').val("");
			
			
			if(data.settlementcycle){
				if(data.settlementcycle == 35){
					$('div.radio.setcycle input[type="radio"]').map(function(index,data){
						this.checked = false;
					});
					$('div.radio.setcycle input[type="radio"]').eq(0).prop('checked',true);
					$('div.radio.setcycle input[type="number"]').val('');
				}
				
				if(data.settlementcycle == 45){
				//debugger;
					$('div.radio.setcycle input[type="radio"]').map(function(index,data){
						this.checked = false;
					});
					$('div.radio.setcycle input[type="radio"]').eq(1).prop('checked',true);
					$('div.radio.setcycle input[type="number"]').val('');
				}
			}
		}
		
		
		if(data.payuserdefined){
			$('div.radio.paycycle input[type="radio"]').map(function(index,data){
					this.checked = false;
			});
			$('.payuserdefined').prop('checked',true);
			$('div.radio.paycycle input[type="number"]').val(data.paymentcycle);
		}else{
			$('div.radio.paycycle input[type="radio"]').map(function(index,data){
					this.checked = false;
			});
			/*初始化*/
			$('div.radio.paycycle input[type="radio"]').eq(1).prop('checked',true);
			$('div.radio.paycycle input[type="number"]').val('');
			if(data.paymentcycle){
				if(data.paymentcycle == 35){
					$('div.radio.paycycle input[type="radio"]').map(function(index,data){
						this.checked = false;
					});
					$('div.radio.paycycle input[type="radio"]').eq(0).prop('checked',true);
					$('div.radio.paycycle input[type="number"]').val('');
				}
				
				if(data.paymentcycle == 45){
				//debugger;
					$('div.radio.paycycle input[type="radio"]').map(function(index,data){
						this.checked = false;
					});
					$('div.radio.paycycle input[type="radio"]').eq(1).prop('checked',true);
					$('div.radio.paycycle input[type="number"]').val('');
				}
			}
		}
		

		
		if(data.targetaddprice){
			$('.targetaddprice').html(data.targetaddprice.toFixed(2));
		}
		
		//标签总价
		if(data.demandtotalprice){
			$('.demandtotalprice').html(data.demandtotalprice.toFixed(2));
		}
		
		//productattach
		if(data.productattach){
			$('.productattach').html('<a href="'+domainDownShort + data.productattach +'">下载</a>');
		}else{
			$('.productattach').html('暂无');
		}
		
		//控制审核显示
		if(data.auditstate){
			if(dataState == 1 ||  dataState == 7){
				/*默认数据*/
				//1审核中 7再次提交 通过2,3,4 驳回305
				//audiparnet
				$('.auditstate').show();
				if(data[name] == 2 || data[name] == 3 ){
				
					$('.auditstate').val(data[name]);
				}else{
					$('.auditstate').val(2);
				}
			}else{
				$('.auditstate').remove();
			}	
			
			$('.auditcomment').parents('.audiparnet').hide();
			
			if(dataState == 1 || dataState == 7){
				//debugger;
				$('.auditstatedesc').hide();
			}else{
				if(data.demandstate == 305 || data.demandstate==2 ||  data.demandstate == 3){
					$('.auditcomment').parents('.audiparnet').show();
					$('.auditstatedesc').show();
					$('.auditstatedesc').html(data.auditstatedesc);
				}
			}
		}

		
		
		
		
		for(var name in data){
			//收费标签
			if(name=="chargetags"){
				$('.charge-label').html('');
				$('li.chargetags').hide();
				if(data[name]){
					if(data[name][0]){
						$('.charge-label').show();
						$('li.chargetags').show();
						data[name].map(function (item,index){
							$('.charge-label').append('<i>'+item.tagname+'</i>');
							chargeValue+=item.price;
						});
						//console.log(chargeValue,'darren');
						$('span.chargetags').html('+<i style="border:none;">'+chargeValue.toFixed(2)+'</i>元');
					}else{
						$('.charge-label').hide();
						$('li.chargetags').hide();
					}
				}
		
			}
			
			//自定义标签
			if(name == "customtags"){
				if(data[name]){
					if(data[name][0]){
					 $('.free-label-box').html('');
					 
						data[name].map(function (data,index){
							/*创建自定义标签*/
							$('.free-label-box').append('<div class="free-label"><input class="form-control" type="text" value="'+data.tagname+'" placeholder="标签名" /><input class="form-control" type="number" value="'+data.price+'" placeholder="请输入标签单价" /><span class="deletetagename">删除此条</span></div>');
							/*求标签的总价格*/
							customtagValue+=data.price;
						});
						$('span.customtags').html('+<i style="font-style:normal;">'+customtagValue+'<i/>元');
					}else{
						//没有数据也要清空因为切换多个时会串联
						 $('.free-label-box').html('');
					}
				}
			}
		}
		
		/*回显所有改价相关的数据*/
		$('input.adjustprice').blur();
		$('.addprices').html('+<i style="font-style:normal;">'+(customtagValue+chargeValue)+'</i>元');
		
		
		
	}
	
	
	
	
		
	/*自定义标签价格计算*/
	var noadddemandtotalprice = [];
	
	var customtagsValue = 0;
	var countDemandtotalprice = 0;
	
	var demandata =  BdDemandReviewInfoDlg.newPageData;
	
	
	$(document).on('blur','.adjustprice',function(){
		countDemandtotalprice = 0;
		if($('.free-label-box .free-label input[type="number"]').get(0)){
			//debugger;
			//有自定义标签
			$('.free-label-box .free-label input[type="number"]').blur();
		}else{
			//没有自定义标签
			//$('.free-label-box .free-label input[type="number"]').blur();
			/*没有自定义标签的时候调不到 onblur 事件*/
			
			//单价加价
			
			//chargeValue(收费标签) customtagsValue(自定义标签的价格) defineadjustprice(改价的价格)
	       
			var defineadjustprice = $('.adjustprice').val()*1;
		    var  allprice = (chargeValue*1)+(customtagsValue*1)+(defineadjustprice*1);
			
			$('.addprices').html('+<i style="font-style:normal;">'+allprice.toFixed(2)+'</i>元');
			
			/*子需求的单价和总价*/
			
			/*回到原来的值*/
		    $.extend(true,noadddemandtotalprice,demandata.subdemands);
			
			noadddemandtotalprice.map(function (data,index){
					data.price += customtagsValue;
					$('.main-box.subdemands .js_one_price').eq(index).html((data.price+defineadjustprice).toFixed(2));
					$('.main-box.subdemands .js_totalprice').eq(index).html((data.releasenum*(data.price+defineadjustprice)).toFixed(2));
			});
		}
		
		/*更新需求页面总价*/
		$('.js_totalprice').map(function (index,data){
			//console.log(data,index);
			countDemandtotalprice+=($(data).html()*1);
		});
		$('.demandtotalprice').html(countDemandtotalprice.toFixed(2));
	});
	
	

	$(document).on('blur','.free-label-box .free-label input[type="number"]',function (ev){
		customtagsValue = 0;
		var target  =  ev.currentTarget;
		/*深度拷贝*/

		/*回到原来的值*/
		$.extend(true,noadddemandtotalprice,demandata.subdemands);
		/*这里时序列化的数据需要同时计数几组数据*/
		

		var demandtotalprice = $('.free-label-box .free-label input[type="number"]');
		
	
		//算单价
		demandtotalprice.map(function (index,data){
			customtagsValue+=(data.value*1);
			$('span.customtags').html('+<i style="font-style:normal;">'+customtagsValue.toFixed(2)+'<i/>元');
		});
		
		//算一组每个的总价 noadddemandtotalprice 一组的每个单价
		var defineadjustprice = $('.adjustprice').val()*1;
		noadddemandtotalprice.map(function (data,index){
			data.price += customtagsValue;
			
			$('.main-box.subdemands .js_one_price').eq(index).html((data.price+defineadjustprice).toFixed(2));
			//js_totalprice
			$('.main-box.subdemands .js_totalprice').eq(index).html((data.releasenum*(data.price+defineadjustprice)).toFixed(2));

		});
		
		
		////chargeValue(收费标签) customtagsValue(自定义标签的价格) defineadjustprice(改价的价格)

		var  allprice = (chargeValue*1)+(customtagsValue*1)+(defineadjustprice*1);
		console.log(allprice);
		$('.addprices').html('+<i style="font-style:normal;">'+allprice.toFixed(2)+'</i>元');
		//debugger;
		/*标签的总价+自定义标签的价格+改价 */
		//demandata.demandtotalprice +=demandata.basicunitprice;
		
	});
	
	
	//删除自定义标签
	$(document).on('click','.deletetagename',function (ev){
		var target = ev.currentTarget;
		$(target).parent().remove();
		$('.free-label-box .free-label input[type="number"]').blur();
	});
	
	$.extend({
		setDetaildata:setDetaildata,
	});
	
	$.setDetaildata(BdDemandReviewInfoDlg.newPageData);
	
	//清除隐藏域数据
	$('.pagedata').remove();
	
	/*审核切换*/
	$.fn.extend({
		auditchange:function (){
			$('.auditcomment').parents('.audiparnet').hide();
			$('.auditstate').change(function (){
				if(this.value == 3){
					$('.auditcomment').parents('.audiparnet').show();
				}else{
					$('.auditcomment').parents('.audiparnet').remove();
				}
			});
		}
	});
	
	$('.auditstate').auditchange();

});
