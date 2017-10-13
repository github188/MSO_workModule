	
	//二分查找
	function binary_search(arr,low, high, key) {
			if (low > high){
				return false;
			}
			var mid = parseInt((high + low) / 2);
			if(arr[mid]){
				if(arr[mid].id){
					if(arr[mid].id == key){
						return mid;
					}else if (arr[mid].id > key){
						high = mid - 1;
						return binary_search(arr, low, high, key);
					}else if (arr[mid].id < key){
						low = mid + 1;
						return binary_search(arr, low, high, key);
					}
				}
			}
		};

		//找出想要的数据
		function handleData(data){
			//找出想要的数据
			var msoCityData = [];
			data.length
			data.map(function (item,index){
				var foundIndex = binary_search(cityData,0,cityData.length,item.id);
				if(foundIndex){
					cityData[foundIndex].tier = item.tier;
					msoCityData.push(cityData[foundIndex]);
				}
			});
			return msoCityData;
		}

		function cloneData(options,self){
			//debugger;
			var parentsele = $(options.ele).parent();
			var cloneEle = $(options.ele).find('.slectedbox').clone();
			var $selector = self.$selector;
			 cloneEle.removeClass('slectedbox').addClass('outside');
			 parentsele.find('.outside').remove();
			 cloneEle.find('span').addClass('js_click_hide');
			
			 parentsele.find('.city-select').before(cloneEle);
			 console.log(cloneEle.find('span').length);
			 var  manyLen = cloneEle.find('span').length;
			 
			if(manyLen>4){
				  var requireddata = cloneEle.children().splice(0,4);
				  parentsele.find('.outside').html('');
				  parentsele.find('.outside').append(requireddata);
				  parentsele.find('.outside').append('<span  class="js_click_hide specialranking">...</span>');
			}
			 
			var  ifonlad = $(options.ele).data('ifonlad');
			
			if(ifonlad){
				 $(options.ele).data('ifonlad',false);
				 parentsele.on('click','.outside span',function (ev){
					 var target = ev.currentTarget;
					 if($(target).hasClass('specialranking')){
						return;
					 }
					 var currentIndex = $(this).index();
					 var currentId = $(options.ele).find('.slectedbox span').eq(currentIndex).attr('data-id');
					 /*用了它自己特殊处理过的i.del*/
					 var type =  $(options.ele).find('a.caller[data-id="'+ currentId +'"]').attr('data-type');
					 //目前没有查出所有bug采用这个方法修复一下
					 if(type=="all" || type =="parent"){
						 $(options.ele).find('a.caller[data-id="'+ currentId +'"]').click();
					 }else{
						 parentsele.find('.slectedbox span i.del').eq(currentIndex).click();
					 }
					 $(this).remove();
				 });
			}
		}
		function msocitySelect(options){
			options = options || {};
			options.data = options.data || [];
			options.getdata =  options.getdata || function (){};
			options.multiSelect = options.multiSelect || false;
			options.search = options.search || false;
			if(options.multiSelect){
				options.multiMaximum = options.multiMaximum || 1000000000000000;
			}
			options.hotCity = options.hotCity || [];
			options.shorthand = options.shorthand || false;
			if(!options.ele){
				return ;
			}
			$(options.ele).data('ifonlad',true);
			var MulticitySelect2 = $(options.ele).citySelect({
				ele:options.ele,
				dataJson: options.data,
				multiSelect: options.multiSelect,
				search: options.search,
				//multiType: 1,
				multiMaximum: options.multiMaximum,
				hotCity:options.hotCity,
				shorthand:options.shorthand,
				onInit: function () {
					console.log(this)
				},
				onForbid: function () {
					console.log(this)
				},
				onTabsAfter: function (target) {
					console.log(event)
				},
				onCallerAfter: function (target, values) {
					var  self = this;
					//debugger;
					if(values){
						if(values.name[0]){
							$(options.ele).parent().find('.valued-p').html('');
							cloneData(options,self);
						}
					}else{
						//debugger;
						$(options.ele).parent().find('.valued-p').html('目标区域');
						cloneData(options,self);
					}
					options.getdata(values);
				
				
				
					//console.log(JSON.stringify(values))
				}
			});
			
			return MulticitySelect2;
		}