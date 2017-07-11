class Listhead extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			searchData:'',
			searchHtml:'',
			pagingData:'',
			//pagingHtml:''
			//searchChange:true
		}
		this.rootEl = $("#supplier");
	}
	getDemandHallData(callBack,page){
		callBack = callBack || function (){};
		  var url = domain +  "/getDemandHall";
		  //search_box
		  var orderBy=$(".deman_hall_search .search_box ul li.selected").attr("data");
		  var sort="";
		  var sorttext=$(".deman_hall_search .search_box ul li.selected").find(".sequence").text();
		  if("↑"==sorttext){//desc降序 asc 升序
		    sort="asc";
		  }else if("↓"==sorttext){
		    sort="desc";
		  }
		  var data={
				"category1":$(".deman_hall_box ul li.selected").eq(0).attr("data"),//面向行业
				"category3":$(".deman_hall_box ul li.selected").eq(1).attr("data"),//业务类型
				"targecity":$(".deman_hall_box ul li.selected").eq(2).attr("data"),//目标城市
				//"category2":$(".deman_hall_box ul li.selected").eq(3).attr("data"),//获客渠道
				"auction":$(".deman_hall_box ul li.selected").eq(3).attr("data"),//可竞拍不可竞拍
				"pricerange":$(".deman_hall_box ul li.selected").eq(4).attr("data"),//需求单价
				"keyword":document.getElementById("ordername").value,
				"demandid":document.getElementById("demandid").value,
				"orderBy":orderBy,
				"sort":sort,
				"currentPage":page
		  };
		$.when($.ajax({
			type:'post',
			url:url,
			data:data
		})).then((data)=>{
			callBack(data);
		}).fail((data)=>{
			alert('获取数据失败');
		});
		
	}
	componentDidMount(){
		/*跟新数据*/
		this.updataSearchData(1);
		this.searchChange();
		this.robberyPat();
		$(".cover-box .title1 span,.cover-box .title span,.cover-box .bt-choose button.bg_blue,.cover-box .bt-choose button.bg_gray").click(function(){
    			$(".cover").hide();
    	});
	}
	updataSearchData(page){
		var  _this = this;
		this.getDemandHallData((data)=>{
			/*用真实的数据测试*/
			//data = {"report":null,"pageNo":2,"currentPage":1,"pageSize":10,"entityOrField":true,"url":null,"totalCount":827,"pageCount":83,"results":[{"sorderName":null,"sorderNo":null,"sbeginDateValue":null,"sendDateValue":null,"xuqiuType":null,"category1":"","category2":"电话","mxArea":null,"minJine":null,"maxJine":null,"pageNo":0,"currentPage":0,"strzt":null,"zt":null,"orderBy":null,"jfustate":null,"suDay":null,"month":null,"productname":"","begintime":"2017-02-28","xsxsurl":"","standardoperation":"order/fbxq/2017/02/23/20170223031952625/知麻开门话术20170221_152435.docx","otherreport":"order/fbxq/2017/02/23/20170117050432291/投资融资理财用户数据10000条_151935.xls","paymentstandard":"数据条目","paymenttime":"","demanddescription":"理财产品推广","favorableway":0,"newdemand":1,"auction":null,"pricerange":null,"sort":null,"par":null,"jfutype":null,"collectionid":null,"othercol":null,"standis":null,"otheris":null,"needv":null,"distributionstate":null,"releasetime":"2017-02-23 15:26:19","finishtime":null,"demandid":"20170223031952641","pid":"20170223031952625","jfuid":"20170117050432291","category3":"数据加工","demandtype":2,"packageid":"","ordername":"外呼10000个电话","releasenum":10000,"citydesc":"","targecity":"","subdescription":null,"orderprice":1.50,"sittingprice":null,"orderpricetol":15000.00,"minorderpricetol":null,"maxorderpricetol":null,"targethumen":"","beginage":null,"endage":0,"endtime":"2017-03-31","pleader":null,"pphone":null,"paytime":null,"demand":"","productaccessories":null,"fdstate":2,"dremark":null,"createtime":"2017-02-23 15:19:52","updatetime":null,"fishnum":0,"percent":0.0,"zhanbi":0.0,"paymentday":null,"paymentmoney":null,"paymentnum":null,"pause":null,"pausedescription":null,"remark":null,"customlabel":null,"twolevindustry":"","threelevindustry":"","price":0,"cityprice":null,"jbfpricetol":10000.00,"jbfprice":1.00,"selectedlist":null,"yjwctime":null,"applicationnum":10000,"type":null},{"sorderName":null,"sorderNo":null,"sbeginDateValue":null,"sendDateValue":null,"xuqiuType":null,"category1":"","category2":"电话","mxArea":null,"minJine":null,"maxJine":null,"pageNo":0,"currentPage":0,"strzt":null,"zt":null,"orderBy":null,"jfustate":null,"suDay":null,"month":null,"productname":"","begintime":"2017-02-23","xsxsurl":"","standardoperation":"order/fbxq/2017/02/23/20170223022738204/大家中医APP话术170216_142942.docx","otherreport":"","paymentstandard":"数据条目","paymenttime":"45个工作日","demanddescription":"根据提供的名单，对目标客户进行电话营销，邀请客户下载使用app。","favorableway":0,"newdemand":1,"auction":null,"pricerange":null,"sort":null,"par":null,"jfutype":null,"collectionid":null,"othercol":null,"standis":null,"otheris":null,"needv":null,"distributionstate":null,"releasetime":"2017-02-23 14:30:28","finishtime":null,"demandid":"20170223022738220","pid":"20170223022738204","jfuid":"20161102124304454","category3":"数据加工","demandtype":2,"packageid":"","ordername":"app下载拉新","releasenum":1600,"citydesc":"","targecity":"","subdescription":null,"orderprice":1.20,"sittingprice":null,"orderpricetol":1920.00,"minorderpricetol":null,"maxorderpricetol":null,"targethumen":"","beginage":null,"endage":0,"endtime":"2017-03-23","pleader":null,"pphone":null,"paytime":null,"demand":"","productaccessories":null,"fdstate":2,"dremark":null,"createtime":"2017-02-23 14:27:38","updatetime":null,"fishnum":0,"percent":0.0,"zhanbi":0.0,"paymentday":null,"paymentmoney":null,"paymentnum":null,"pause":null,"pausedescription":null,"remark":null,"customlabel":null,"twolevindustry":"","threelevindustry":"","price":0,"cityprice":null,"jbfpricetol":1632.00,"jbfprice":1.02,"selectedlist":null,"yjwctime":null,"applicationnum":1600,"type":null},{"sorderName":null,"sorderNo":null,"sbeginDateValue":null,"sendDateValue":null,"xuqiuType":null,"category1":"教育培训","category2":"","mxArea":null,"minJine":null,"maxJine":null,"pageNo":0,"currentPage":0,"strzt":null,"zt":null,"orderBy":null,"jfustate":null,"suDay":null,"month":null,"productname":"","begintime":"2017-02-23","xsxsurl":"order/fbxq/2017/02/23/undefined/线下EFKBJ 每日邀约报告-MSO_120245.rar","standardoperation":"order/fbxq/2017/02/23/undefined/线下EFKBJ话术-MSO_120256.rar","otherreport":"","paymentstandard":"查重后质检","paymenttime":"45个工作日","demanddescription":"挖掘对于英语感兴趣的青少儿人群，城市根据具体运营需求调整城市","favorableway":0,"newdemand":1,"auction":null,"pricerange":null,"sort":null,"par":null,"jfutype":null,"collectionid":null,"othercol":null,"standis":null,"otheris":null,"needv":null,"distributionstate":null,"releasetime":"2017-02-23 12:04:30","finishtime":null,"demandid":"201702231156430411","pid":"20170223115642992","jfuid":"32","category3":"销售线索挖掘","demandtype":2,"packageid":"","ordername":"线下-EF北京-青少儿英语1702","releasenum":200,"citydesc":"","targecity":"北京","subdescription":null,"orderprice":30.00,"sittingprice":null,"orderpricetol":6000.00,"minorderpricetol":null,"maxorderpricetol":null,"targethumen":"学龄前儿童(3~6岁),小学生(6~12岁),初中生(12~15岁),高中生(15~18岁)","beginage":null,"endage":0,"endtime":"2017-02-28","pleader":null,"pphone":null,"paytime":null,"demand":"","productaccessories":null,"fdstate":2,"dremark":null,"createtime":"2017-02-23 11:56:43","updatetime":null,"fishnum":0,"percent":0.0,"zhanbi":0.0,"paymentday":null,"paymentmoney":null,"paymentnum":null,"pause":null,"pausedescription":null,"remark":null,"customlabel":null,"twolevindustry":"线下","threelevindustry":"青少儿英语","price":0,"cityprice":null,"jbfpricetol":6000.00,"jbfprice":30.00,"selectedlist":null,"yjwctime":null,"applicationnum":0,"type":null},{"sorderName":null,"sorderNo":null,"sbeginDateValue":null,"sendDateValue":null,"xuqiuType":null,"category1":"教育培训","category2":"","mxArea":null,"minJine":null,"maxJine":null,"pageNo":0,"currentPage":0,"strzt":null,"zt":null,"orderBy":null,"jfustate":null,"suDay":null,"month":null,"productname":"","begintime":"2017-02-22","xsxsurl":"order/fbxq/2017/02/22/undefined/精锐教育-每日邀约报告_134656.xlsx","standardoperation":"order/fbxq/2017/02/22/undefined/精锐话术20170221-2_134703.docx","otherreport":"","paymentstandard":"查重后质检","paymenttime":"45个工作日","demanddescription":"","favorableway":0,"newdemand":1,"auction":null,"pricerange":null,"sort":null,"par":null,"jfutype":null,"collectionid":null,"othercol":null,"standis":null,"otheris":null,"needv":null,"distributionstate":null,"releasetime":"2017-02-22 13:48:07","finishtime":null,"demandid":"201702220145268331","pid":"20170222014526810","jfuid":"20161219053138807","category3":"销售线索挖掘","demandtype":2,"packageid":"","ordername":"精锐教育-线下-学科辅导","releasenum":200,"citydesc":"","targecity":"上海","subdescription":null,"orderprice":75.00,"sittingprice":null,"orderpricetol":15000.00,"minorderpricetol":null,"maxorderpricetol":null,"targethumen":"小学生(6~12岁),初中生(12~15岁),高中生(15~18岁)","beginage":null,"endage":0,"endtime":"2017-03-31","pleader":null,"pphone":null,"paytime":null,"demand":"","productaccessories":null,"fdstate":4,"dremark":null,"createtime":"2017-02-22 13:45:26","updatetime":null,"fishnum":21,"percent":0.0,"zhanbi":0.0,"paymentday":null,"paymentmoney":null,"paymentnum":null,"pause":null,"pausedescription":null,"remark":null,"customlabel":null,"twolevindustry":"线下","threelevindustry":"学科辅导","price":0,"cityprice":null,"jbfpricetol":12000.00,"jbfprice":60.00,"selectedlist":null,"yjwctime":null,"applicationnum":200,"type":null},{"sorderName":null,"sorderNo":null,"sbeginDateValue":null,"sendDateValue":null,"xuqiuType":null,"category1":"教育培训","category2":"","mxArea":null,"minJine":null,"maxJine":null,"pageNo":0,"currentPage":0,"strzt":null,"zt":null,"orderBy":null,"jfustate":null,"suDay":null,"month":null,"productname":"","begintime":"2017-02-17","xsxsurl":"order/fbxq/2017/02/17/undefined/线下E-成单报告模板_133109.rar","standardoperation":"order/fbxq/2017/02/17/undefined/线下E-全国邀约话术-MSO_133127.rar","otherreport":"","paymentstandard":"查重后质检","paymenttime":"45个工作日","demanddescription":"挖掘对于英语感兴趣的成年人群。年龄22-50周岁","favorableway":0,"newdemand":0,"auction":null,"pricerange":null,"sort":null,"par":null,"jfutype":null,"collectionid":null,"othercol":null,"standis":null,"otheris":null,"needv":null,"distributionstate":null,"releasetime":"2017-02-17 13:33:07","finishtime":null,"demandid":"201702170129075961","pid":"20170217012907582","jfuid":"60","category3":"销售线索挖掘","demandtype":2,"packageid":"","ordername":"线下E-东莞-1702-4","releasenum":20,"citydesc":"","targecity":"东莞","subdescription":null,"orderprice":41.00,"sittingprice":null,"orderpricetol":820.00,"minorderpricetol":null,"maxorderpricetol":null,"targethumen":"成人(22~55岁)","beginage":null,"endage":0,"endtime":"2017-02-28","pleader":null,"pphone":null,"paytime":null,"demand":"","productaccessories":null,"fdstate":4,"dremark":null,"createtime":"2017-02-17 13:29:07","updatetime":null,"fishnum":15,"percent":0.0,"zhanbi":0.0,"paymentday":null,"paymentmoney":null,"paymentnum":null,"pause":null,"pausedescription":null,"remark":null,"customlabel":null,"twolevindustry":"线下","threelevindustry":"成人英语","price":0,"cityprice":null,"jbfpricetol":900.00,"jbfprice":45.00,"selectedlist":null,"yjwctime":null,"applicationnum":20,"type":null},{"sorderName":null,"sorderNo":null,"sbeginDateValue":null,"sendDateValue":null,"xuqiuType":null,"category1":"教育培训","category2":"","mxArea":null,"minJine":null,"maxJine":null,"pageNo":0,"currentPage":0,"strzt":null,"zt":null,"orderBy":null,"jfustate":null,"suDay":null,"month":null,"productname":"","begintime":"2017-02-17","xsxsurl":"order/fbxq/2017/02/17/undefined/线下E-成单报告模板_133109.rar","standardoperation":"order/fbxq/2017/02/17/undefined/线下E-全国邀约话术-MSO_133127.rar","otherreport":"","paymentstandard":"查重后质检","paymenttime":"45个工作日","demanddescription":"挖掘对于英语感兴趣的成年人群。年龄22-50周岁","favorableway":0,"newdemand":0,"auction":null,"pricerange":null,"sort":null,"par":null,"jfutype":null,"collectionid":null,"othercol":null,"standis":null,"otheris":null,"needv":null,"distributionstate":null,"releasetime":"2017-02-17 13:33:07","finishtime":null,"demandid":"201702170129076072","pid":"20170217012907582","jfuid":"60","category3":"销售线索挖掘","demandtype":2,"packageid":"","ordername":"线下E-佛山-1702-4","releasenum":5,"citydesc":"","targecity":"佛山","subdescription":null,"orderprice":41.00,"sittingprice":null,"orderpricetol":205.00,"minorderpricetol":null,"maxorderpricetol":null,"targethumen":"成人(22~55岁)","beginage":null,"endage":0,"endtime":"2017-02-28","pleader":null,"pphone":null,"paytime":null,"demand":"","productaccessories":null,"fdstate":4,"dremark":null,"createtime":"2017-02-17 13:29:07","updatetime":null,"fishnum":1,"percent":0.0,"zhanbi":0.0,"paymentday":null,"paymentmoney":null,"paymentnum":null,"pause":null,"pausedescription":null,"remark":null,"customlabel":null,"twolevindustry":"线下","threelevindustry":"成人英语","price":0,"cityprice":null,"jbfpricetol":225.00,"jbfprice":45.00,"selectedlist":null,"yjwctime":null,"applicationnum":5,"type":null},{"sorderName":null,"sorderNo":null,"sbeginDateValue":null,"sendDateValue":null,"xuqiuType":null,"category1":"教育培训","category2":"","mxArea":null,"minJine":null,"maxJine":null,"pageNo":0,"currentPage":0,"strzt":null,"zt":null,"orderBy":null,"jfustate":null,"suDay":null,"month":null,"productname":"","begintime":"2017-02-17","xsxsurl":"order/fbxq/2017/02/17/undefined/线下E-成单报告模板_133109.rar","standardoperation":"order/fbxq/2017/02/17/undefined/线下E-全国邀约话术-MSO_133127.rar","otherreport":"","paymentstandard":"查重后质检","paymenttime":"45个工作日","demanddescription":"挖掘对于英语感兴趣的成年人群。年龄22-50周岁","favorableway":0,"newdemand":0,"auction":null,"pricerange":null,"sort":null,"par":null,"jfutype":null,"collectionid":null,"othercol":null,"standis":null,"otheris":null,"needv":null,"distributionstate":null,"releasetime":"2017-02-17 13:33:07","finishtime":null,"demandid":"201702170129076173","pid":"20170217012907582","jfuid":"60","category3":"销售线索挖掘","demandtype":2,"packageid":"","ordername":"线下E-重庆-1702-4","releasenum":10,"citydesc":"","targecity":"重庆","subdescription":null,"orderprice":41.00,"sittingprice":null,"orderpricetol":410.00,"minorderpricetol":null,"maxorderpricetol":null,"targethumen":"成人(22~55岁)","beginage":null,"endage":0,"endtime":"2017-02-28","pleader":null,"pphone":null,"paytime":null,"demand":"","productaccessories":null,"fdstate":4,"dremark":null,"createtime":"2017-02-17 13:29:07","updatetime":null,"fishnum":7,"percent":0.0,"zhanbi":0.0,"paymentday":null,"paymentmoney":null,"paymentnum":null,"pause":null,"pausedescription":null,"remark":null,"customlabel":null,"twolevindustry":"线下","threelevindustry":"成人英语","price":0,"cityprice":null,"jbfpricetol":450.00,"jbfprice":45.00,"selectedlist":null,"yjwctime":null,"applicationnum":10,"type":null},{"sorderName":null,"sorderNo":null,"sbeginDateValue":null,"sendDateValue":null,"xuqiuType":null,"category1":"","category2":"电话","mxArea":null,"minJine":null,"maxJine":null,"pageNo":0,"currentPage":0,"strzt":null,"zt":null,"orderBy":null,"jfustate":null,"suDay":null,"month":null,"productname":"","begintime":"2017-02-17","xsxsurl":"","standardoperation":"","otherreport":"","paymentstandard":"数据条目","paymenttime":"","demanddescription":"MSO数据加工发包测试","favorableway":0,"newdemand":0,"auction":null,"pricerange":null,"sort":null,"par":null,"jfutype":null,"collectionid":null,"othercol":null,"standis":null,"otheris":null,"needv":null,"distributionstate":null,"releasetime":"2017-02-17 13:29:13","finishtime":null,"demandid":"20170217012836484","pid":"20170217012836467","jfuid":"30","category3":"数据加工","demandtype":2,"packageid":"","ordername":"MSO数据加工发包测试","releasenum":1000,"citydesc":"","targecity":"","subdescription":null,"orderprice":1.50,"sittingprice":null,"orderpricetol":1500.00,"minorderpricetol":null,"maxorderpricetol":null,"targethumen":"","beginage":null,"endage":0,"endtime":"2017-02-17","pleader":null,"pphone":null,"paytime":null,"demand":"","productaccessories":null,"fdstate":5,"dremark":null,"createtime":"2017-02-17 13:28:36","updatetime":null,"fishnum":0,"percent":0.0,"zhanbi":0.0,"paymentday":null,"paymentmoney":null,"paymentnum":null,"pause":null,"pausedescription":null,"remark":null,"customlabel":null,"twolevindustry":"","threelevindustry":"","price":0,"cityprice":null,"jbfpricetol":1500.00,"jbfprice":1.50,"selectedlist":null,"yjwctime":null,"applicationnum":0,"type":null},{"sorderName":null,"sorderNo":null,"sbeginDateValue":null,"sendDateValue":null,"xuqiuType":null,"category1":"教育培训","category2":"电话营销","mxArea":null,"minJine":null,"maxJine":null,"pageNo":0,"currentPage":0,"strzt":null,"zt":null,"orderBy":null,"jfustate":null,"suDay":null,"month":null,"productname":"平安到访","begintime":"2016-10-28","xsxsurl":"order/fbxq/2017/02/16/undefined/销售线索模板_105255_224955.xlsx","standardoperation":"order/fbxq/2017/02/16/undefined/标准话术模板_225010.xlsx","otherreport":"","paymentstandard":"回访电话接通数","paymenttime":"35个工作日","demanddescription":"邀约到访","favorableway":0,"newdemand":0,"auction":null,"pricerange":null,"sort":null,"par":null,"jfutype":null,"collectionid":null,"othercol":null,"standis":null,"otheris":null,"needv":null,"distributionstate":null,"releasetime":"2017-02-16 22:50:14","finishtime":null,"demandid":"201610270654042841","pid":"20161027065404268","jfuid":"30","category3":"销售线索挖掘","demandtype":2,"packageid":"","ordername":"平安到访","releasenum":1,"citydesc":"重庆","targecity":"重庆","subdescription":null,"orderprice":1.00,"sittingprice":null,"orderpricetol":1.00,"minorderpricetol":null,"maxorderpricetol":null,"targethumen":"成人","beginage":null,"endage":20,"endtime":"2016-10-31","pleader":null,"pphone":null,"paytime":null,"demand":"平安到访","productaccessories":null,"fdstate":5,"dremark":null,"createtime":"2016-10-27 18:54:04","updatetime":null,"fishnum":0,"percent":0.0,"zhanbi":0.0,"paymentday":null,"paymentmoney":null,"paymentnum":null,"pause":null,"pausedescription":null,"remark":null,"customlabel":null,"twolevindustry":"其他","threelevindustry":"","price":0,"cityprice":null,"jbfpricetol":1.00,"jbfprice":1.00,"selectedlist":null,"yjwctime":null,"applicationnum":0,"type":null},{"sorderName":null,"sorderNo":null,"sbeginDateValue":null,"sendDateValue":null,"xuqiuType":null,"category1":"教育培训","category2":"","mxArea":null,"minJine":null,"maxJine":null,"pageNo":0,"currentPage":0,"strzt":null,"zt":null,"orderBy":null,"jfustate":null,"suDay":null,"month":null,"productname":"","begintime":"2017-02-13","xsxsurl":"order/fbxq/2017/02/10/undefined/数据库导入表格_140714.xlsx","standardoperation":"order/fbxq/2017/02/10/undefined/美联-邀约话术170206_140724.docx","otherreport":"","paymentstandard":"查重后质检","paymenttime":"45个工作日","demanddescription":"挖掘18~45岁在杭州有英语学习意向的人群","favorableway":0,"newdemand":0,"auction":null,"pricerange":null,"sort":null,"par":null,"jfutype":null,"collectionid":null,"othercol":null,"standis":null,"otheris":null,"needv":null,"distributionstate":null,"releasetime":"2017-02-10 14:07:44","finishtime":null,"demandid":"201702100204046691","pid":"20170210020404663","jfuid":"20170209043157688","category3":"销售线索挖掘","demandtype":2,"packageid":"","ordername":"美联深圳-线下-成人英语","releasenum":200,"citydesc":"","targecity":"深圳","subdescription":null,"orderprice":46.00,"sittingprice":null,"orderpricetol":9200.00,"minorderpricetol":null,"maxorderpricetol":null,"targethumen":"大学生(18~22岁),成人(22~55岁)","beginage":null,"endage":0,"endtime":"2017-02-28","pleader":null,"pphone":null,"paytime":null,"demand":"","productaccessories":null,"fdstate":4,"dremark":null,"createtime":"2017-02-10 14:04:04","updatetime":null,"fishnum":112,"percent":0.0,"zhanbi":0.0,"paymentday":null,"paymentmoney":null,"paymentnum":null,"pause":null,"pausedescription":null,"remark":null,"customlabel":null,"twolevindustry":"线下","threelevindustry":"成人英语","price":0,"cityprice":null,"jbfpricetol":6400.00,"jbfprice":32.00,"selectedlist":null,"yjwctime":null,"applicationnum":200,"type":null}],"pageStr":"\t<div class=\"page\">\n\t<span>共83页，827条<input id=\"tolPageValue\" type=\"hidden\" value=\"83\" \" /></span>\n\t<span>到</span><input id=\"toGoPage\" type=\"text\" pattern=\"[0-9]{3}\" /><span>页</span> \n\t<button onclick=\"toTZ();\">Go</button>\n <a href=\"javascript:\" onclick=\"nextPage(1)\" class=\"selected\">1</a>\n <a href=\"javascript:\" onclick=\"nextPage(2)\">2</a>\n <a href=\"javascript:\" onclick=\"nextPage(3)\">3</a>\n <a href=\"javascript:\" onclick=\"nextPage(4)\">4</a>\n <a href=\"javascript:\" onclick=\"nextPage(5)\">5</a>\n ...  <a href=\"javascript:\" onclick=\"nextPage(79)\">79</a>\n <a href=\"javascript:\" onclick=\"nextPage(80)\">80</a>\n <a href=\"javascript:\" onclick=\"nextPage(81)\">81</a>\n <a href=\"javascript:\" onclick=\"nextPage(82)\">82</a>\n <a href=\"javascript:\" onclick=\"nextPage(83)\">83</a>\n\t<a  href=\"javascript:\" onclick=\"nextPage(2)\" class=\"next_page\">下页</a>\n</div>\n<script type=\"text/javascript\">\n","ajaxPageStr":"\t<div class=\"page\">\n\t<span>共83页，827条<input id=\"tolPageValue\" type=\"hidden\" value=\"83\" \" /></span>\n\t<span>到</span><input id=\"toGoPage\" type=\"text\" pattern=\"[0-9]{3}\" /><span>页</span> \n\t<button onclick=\"toTZ();\">Go</button>\n <a href=\"javascript:\" onclick=\"nextPage(1)\" class=\"selected\">1</a>\n <a href=\"javascript:\" onclick=\"nextPage(2)\">2</a>\n <a href=\"javascript:\" onclick=\"nextPage(3)\">3</a>\n <a href=\"javascript:\" onclick=\"nextPage(4)\">4</a>\n <a href=\"javascript:\" onclick=\"nextPage(5)\">5</a>\n ...  <a href=\"javascript:\" onclick=\"nextPage(79)\">79</a>\n <a href=\"javascript:\" onclick=\"nextPage(80)\">80</a>\n <a href=\"javascript:\" onclick=\"nextPage(81)\">81</a>\n <a href=\"javascript:\" onclick=\"nextPage(82)\">82</a>\n <a href=\"javascript:\" onclick=\"nextPage(83)\">83</a>\n\t<a  href=\"javascript:\" onclick=\"nextPage(2)\" class=\"next_page\">下页</a>\n</div>\n<script type=\"text/javascript\">\n","code":"Y","msg":"","newId":null}
			_this.setState({
				searchData:data.results,
				pagingData:data.ajaxPageStr,
			});
			/*createSearchHtml*/
			_this.setState({searchHtml:_this.createSearchHtml()});
			//pagingHtml
			_this.createpagingHtml();
			_this.changePage();
			
		},page);
	}
	calculateStartAndEnd(name){
		var demandtype = name.demandtype;
		var begintime;
		var endtime;
	
		/*处理报错*/
		
		if('1'==demandtype){
		   begintime=name.begintime;//2016-08-25~2016-08-31
		   if(''==begintime||null==begintime){
			   
		   }else{
			 begintime=begintime.substring(0,10);
			 endtime=d.endtime;
			 if(!isNaN(endtime)){
			  //alert("是数字");
				var val = Date.parse(begintime);
				var newDate = new Date(val);
				var time2 = newDate.format("yyyy-MM-dd");
				endtime=addDate(time2,parseInt(endtime));
				endtime = endtime.format("yyyy-MM-dd");
			 }else{
				endtime = new Date(endtime);
				endtime = endtime.format("yyyy-MM-dd");
			 }
		   }
		}

		if('2'==demandtype){
		   begintime=name.begintime;
		   if(''==begintime||null==begintime){
			 begintime="";
		   }else{
			 begintime=begintime.substring(0,10);
		   }
		   endtime=name.endtime;
		   if(''==endtime||null==endtime){
			 endtime="";
		   }else{
			 endtime=endtime.substring(0,10);
		   }
		   if(!endtime){
			   endtime = new Date(0);
		   }else{
			   endtime = new Date(endtime);
		   }
		   
		   endtime = endtime.format("yyyy-MM-dd");
		   
		}
		if(!endtime){
			endtime = 0;
		}
		if(!begintime){
			begintime = 0;
		}
		return {endtime:endtime,begintime:begintime}
	}
	checkIsThanDay(name){
		//如果结束日期在5天之内，则标红显示（同时竞拍按钮也用红色的，并且按钮内的字变为“马上抢拍”）；
		//demandtype  1-套餐    2-个性化需求
		var dataStartAndEnd = this.calculateStartAndEnd(name);
		var begintime =  dataStartAndEnd.begintime;
		var endtime = dataStartAndEnd.endtime;
		
		var zq = begintime+"~"+endtime;
		
		var now=new Date();
		now = now.format("yyyy-MM-dd");
		var intDay = 0;
		if(endtime){
			intDay=subDate(now,endtime);
		}

		if((5>=intDay&&intDay>=0) || (intDay<0)){
			return (
				<p style={{"color":"red"}}>项目周期:{zq}</p>
			)
		}
		return (<p>项目周期:{zq}</p>);
	}
	checkExamine(jfustate,jbfprice){
		//debugger;
		/*测试*/
		//jfustate = 4;
		if(4==jfustate){
			return(<div class="demand">需求单价<span>{jbfprice}</span>元</div>);
		}
		return (<div className="demand">&nbsp;</div>);
			
	}
	robberyPat(){
		var jfustate=isNull(sessionStorage.getItem("jfustate"))?localStorage.getItem("jfustate"):sessionStorage.getItem("jfustate");
		//jfustate = 4;
		function gotoDetail(demandid){
			   if(4==jfustate){
			   		var formid="detailForm_";
					var detailform=document.getElementById(formid+demandid);
				  	var category3=detailform.category3.value;
				  	var category1=detailform.category1.value;
				  	var twolevindustry=detailform.twolevindustry.value;
				  	var threelevindustry=detailform.threelevindustry.value;
					//detailform.action="customer_lj_DemandDetail";
					//detailform.method="post";
					//detailform.submit();
					if("销售线索挖掘"==category3.trim()){
						if("其他"==twolevindustry.trim()&&"教育培训"==category1.trim()){
							window.location.href="../html/customer_Auction.html#"+demandid;
						}else if("线上"==twolevindustry.trim()&&"教育培训"==category1.trim()){
							window.location.href="../html/customer_Auction_new.html#"+demandid;
						}else if("线下"==twolevindustry.trim()&&"教育培训"==category1.trim()){
							window.location.href="../html/customer_Auction_new.html#"+demandid;
						}else{
							window.location.href="../html/customer_Auction.html#"+demandid;
						}
					}else{
						window.location.href="../html/data_Auction.html#"+demandid;
					}
			   }else{
			   		$(".cover").show();
			   }
			}
		
		
		this.rootEl.on('click','.robberyPat',function (ev){
			var target = ev.currentTarget;
			if((target.className.indexOf('orange')!=-1) || (target.className.indexOf('blue')!=-1)){
				var demandid = $(target).attr('data-id')
				gotoDetail(demandid);
			}
		});
	}
	robberyData(jfutype,jfustate,name,index){
		var applicationnum = name.applicationnum;
		var releasenum = name.releasenum;
		var fdstate = name.fdstate;//需求状态
		var jp = 'jp' + index;
		var dataStartAndEnd = this.calculateStartAndEnd(name);
		var endtime = dataStartAndEnd.endtime;
		var now=new Date();
		now = now.format("yyyy-MM-dd");
		var intDay = 0;
		if(endtime){
			intDay=subDate(now,endtime);
		}
		
		/*如果接包方*/
		if("2"==jfutype){
			if(5==fdstate||6==fdstate||7==fdstate){
				return (<button type="button" data-id={name.demandid} className="bg_gray robberyPat" id={jp}>已结束</button>);
			}else{
				//则按钮变灰，按钮内的字变为“已抢完”，并且不可点击   applicationnum   fishnum
				if(applicationnum>=releasenum){
					return (<button type="button" data-id={name.demandid} className="bg_gray robberyPat" id={jp}>已抢完</button>);
				}else if(5>=intDay&&intDay>=0){
						//当结束日期表红时，按钮按照设计图则变为橙色，并且按钮内的字变为“马上抢拍”
				  if(4==jfustate){
					return (<button type="button" data-id={name.demandid} className="bg_orange robberyPat" id={jp}>马上抢拍</button>);
				  }else{
					return (<button type="button" data-id={name.demandid} className="bg_gray robberyPat" id={jp}>马上抢拍</button>);
				  }
				}else if(intDay<0){
					 // 如果需求已经结束，则按钮变灰，按钮内的字变为“已结束”
					return (<button type="button" data-id={name.demandid} className="bg_gray robberyPat" id={jp}>已结束</button>);
				}else{
					 if(4==jfustate){
						return (<button type="button" data-id={name.demandid} className="bg_blue robberyPat" id={jp}>立即竞拍</button>);
					 }else{
						return (<button type="button" data-id={name.demandid} className="bg_gray robberyPat" id={jp}>立即竞拍</button>);
					 }
				}
			}
			
		}
	}
	createSearchHtml(){
		if(this.state.searchData  && (this.state.searchData.constructor == Array) && this.state.searchData[0]){
			var jfutype=isNull(sessionStorage.getItem("jfutype"))?localStorage.getItem("jfutype"):sessionStorage.getItem("jfutype");
			/*jfutype 用户类型 1 发包方 2接包方*/
			var jfustate=isNull(sessionStorage.getItem("jfustate"))?localStorage.getItem("jfustate"):sessionStorage.getItem("jfustate");
			/*jfustate 用户审核的状态  用户状态 0-初始状态 1-填写资料-提交 4-已审核 3-驳回*/
			
			var checkIsThanDay;
			
			return this.state.searchData.map((name,index)=>{
				//console.log(name.demandid);
				//var demandtype=name.demandtype;// 1-套餐    2-个性化需求
				/*检查时期*/
				var checkIsThanDay = this.checkIsThanDay(name);
				/*需求单价*/
				/*jfustate 4-已审核*/
				//调试使用 jfustate = 4;
				var jbfprice = name.jbfprice;
				var demand =  this.checkExamine(jfustate,jbfprice);
				//0-老单   1-新单 name.newdemand // 调试使用  name.newdemand = 1;
				//name.newdemand = 1
				
				//判断是否抢完  调试使用 jfutype = 2;
				jfutype = 2;
				var robberyData = this.robberyData(jfutype,jfustate,name,index,);
				

				var releasenum=name.releasenum;
				var applicationnum=name.applicationnum;						
				var syl=releasenum-applicationnum;
				var prent=(syl/releasenum)*100;
				var prent2=prent.toFixed(2);
				
				return(
					<div className="reslut_box" id={"div"+index}>
						<form name={"detailForm_"+name.demandid} id={"detailForm_"+name.demandid} action="">
							<input type="hidden" value={name.demandid} name="demandid" />
							<input type="hidden" value={name.category3} name="category3" />
							<input type="hidden" value={name.category1} name="category1" />
							<input type="hidden" value={name.twolevindustry} name="twolevindustry" />
							<input type="hidden" value={name.threelevindustry} name="threelevindustry" />
							<input type="hidden" value="/html/supplierDemandHall.html" name="ztDetail" />
						</form>
						
						<div className="title">
							<h3 title={name.ordername}>{name.ordername}</h3>
							<ul>
								<li className="bg_blue" style={name.category3?{}:{"display":"none"}}>
									{name.category3}
								</li>
								<li className="bg_green" style={name.twolevindustry?{}:{"display":"none"}}>
									{name.twolevindustry}
								</li>
								<li className="bg_rose" style={name.category1?{}:{"display":"none"}}>
									{name.category1}
								</li>
								<li className="bd_blue" style={name.targecity?{}:{"display":"none"}}>
									{name.targecity}
								</li>
								<li className="number">需求编号:{name.demandid}</li>
							</ul>
							<p>{checkIsThanDay}</p>
						</div>
						
						<div className="channel" style={{"display":"none"}}>
							获客渠道： 
							<span>电话</span>
						</div>
						
						
						<div className="description">
							<h4>需求描述： </h4><p>{name.demanddescription}</p>
						</div>
						
						<div className="progress_bar">
							<div className="box">
								<div className="progress-box">
									<div className="rate" style={{"width":""+prent2+"%"}}>
									</div>
								</div>
								<p>
									需求量
									<span className="orange">&nbsp;&nbsp;{syl}</span>
									<span className="gray">/{releasenum}</span>
								</p>
							</div>
							<div className="demand">{demand}</div>
							<ul>
							{('1'==name.newdemand)?(<li className="icon-new"><p>新上架需求</p></li>):""}
							</ul>
							{robberyData}
						</div>
				</div>
				);	
			});
		}
		return (<div className="search_reslut no-reslut" id="search_reslut">暂无数据</div>);
		
	}
	
	createpagingHtml(){
		if(this.state.pagingData){
			var newHtml = this.state.pagingData.replace(/onclick="nextPage\([\d]*\)"+/g,"");
			var toTZ = newHtml.replace(/onclick="toTZ\(\);"+/g,"class='gotoPage'");
			$('#page').html(toTZ);
		}else{
			$('#page').html("");
		}
	}
	changePage(){
		//debugger;
		var _this = this;
		var currentPage;
		/*点击切换*/
		var cenPage = [];
		var aPage =  $('#page a');
		/*处理上下页*/
		for(var i=0;i<aPage.length;i++){
			if(!(aPage[i].className == "prev_page" || aPage[i].className == "next_page")){
				cenPage.push(aPage[i]);
			}
		}
		$(cenPage).click(function (){
			currentPage = $(this).html()*1;
			_this.updataSearchData(currentPage);
			 $('html,body').animate({scrollTop: '0px'}, 0);
		});
		
		/*上一页*/
		$('a.prev_page').click(function (){
			currentPage = $('#page a.selected').html()*1;
			currentPage-=1;
			_this.updataSearchData(currentPage);
			 $('html,body').animate({scrollTop: '0px'}, 0);
		});
		
		/*下一页*/
		$('a.next_page').click(function (){
			currentPage = $('#page a.selected').html()*1;
			currentPage+=1;
			_this.updataSearchData(currentPage);
			 $('html,body').animate({scrollTop: '0px'}, 0);
		});
		
		/*跳转*/
		$('button.gotoPage').click(function (){
			currentPage = $('#toGoPage').val();
			if(!currentPage){
				return;
			}
			_this.updataSearchData(currentPage);
			$('html,body').animate({scrollTop: '0px'}, 0);
		});
	}
	searchChange(){
		var _this = this;
		var currentPage = 1;
		this.rootEl.on('click',".deman_hall_box .box ul li",function (ev){
			var currentThis = ev.currentTarget;
			$(currentThis).addClass("selected").siblings().removeClass("selected");
			_this.updataSearchData(currentPage);
		}.bind(this));
		
		
		$(".deman_hall_search .search_box ul li").click(function(){
			$(this).addClass("selected").siblings().removeClass("selected");
			if($(this).find(".sequence").text()=="↑"){
				$(this).find(".sequence").text("↓");
			}else if($(this).find(".sequence").text()=="↓"){
				$(this).find(".sequence").text("↑");
			}
			_this.updataSearchData(currentPage);
		});
		
		$("#btn_submit").click(function (){
			$("#box1 li").eq(0).addClass("selected").siblings().removeClass("selected");
			$("#box2 li").eq(0).addClass("selected").siblings().removeClass("selected");
			$("#box3 li").eq(0).addClass("selected").siblings().removeClass("selected");
			$("#box4 li").eq(0).addClass("selected").siblings().removeClass("selected");
			$("#box5 li").eq(0).addClass("selected").siblings().removeClass("selected");
			$("#box6 li").eq(0).addClass("selected").siblings().removeClass("selected");
			_this.updataSearchData(currentPage);
		});
	}
    render(){
        return(
          	<div className="content_right" >
				<input type="hidden" name="currentPage" id="currentPage" value="1" />
						<div className="deman_hall_box border-gray">
						<div className="box" >
							<p>面向行业:</p>
							<ul id="box1">
								<li className="selected" data="">全部</li>
						
								
								<li data="教育培训">教育培训</li>
								<li data="汽车行业">汽车行业</li>
								<li data="医美行业">医美行业</li>
								<li data="房地产">房地产</li>
								<li data="金融">金融</li>
								<li data="电商">电商</li>
								<li data="其他">其他</li>
							</ul>
						</div>
						<div className="box">
							<p>业务类型:</p>
							<ul  id="box2">
								<li className="selected" data="">全部</li>
								<li data="销售线索挖掘">销售线索挖掘</li>
								<li data="数据加工">数据加工</li>
								<li data="标签匹配">标签匹配</li>
							</ul>
						</div>
						<div className="box open" >
							<p>目标城市:</p>
							<ul className="open" id="box3">
								<li className="selected" data="">全部</li>
								<li data="北京">北京</li>
								<li data="上海">上海</li>
								<li data="广州">广州</li>
								<li data="深圳">深圳</li>
								<li data="杭州">杭州</li>
								<li data="一线城市">一线城市</li>
								<li data="全国">全国</li>
							</ul>
						</div>
						<div className="box" >
							<p>需求状态:</p>
							<ul id="box5">
								<li className="selected" data="">全部</li>
								<li data="1">可竞拍</li>
								<li data="2">不可竞拍</li>
							</ul>
						</div>
						<div className="box"  id="box6price">
							<p>需求单价:</p>
							<ul id="box6">
								<li className="selected" data="">全部</li>
								<li data="1">0-30</li>
								<li data="2">30-60</li>
								<li data="3">60-100</li>
								<li data="4">100以上</li>
							</ul>
						</div>
					</div>
					<div className="deman_hall_search">
						<div className="search_box">
							<ul>
								<li  className="selected" id="allzh" data="">综合</li>
								<li  data="u.residualQuantity" id="residualQuantityid">剩余量<span className="sequence" id="residualQuantityspan">↓</span></li>
								<li  data="u.releasetime" id="releasetimeid">上架日期<span className="sequence" id="releasetimespan">↓</span></li>
								<li  data="u.orderprice" id="orderpriceid">单价<span className="sequence" id="orderpricespan" >↓</span></li>
							</ul>
							<div>
								<input type="text" placeholder="需求名称" name="ordername" id="ordername"/>
								<input type="text" placeholder="需求编号" name="demandid" id="demandid"/>
								<button type="button" id="btn_submit" onclick="seachDemandHall();" >确定</button>
							</div>
						</div>
						<div className="search_reslut" id="search_reslut">
							{this.state.searchHtml}
						</div>
						<div className="page" id="page">
						</div>
					</div>
			</div>
        )
    }
}


export default Listhead;