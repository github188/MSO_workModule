<%@ page language="java" import="java.util.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>用户登录</title>
        <script src="js/tj.js"></script>
	<link rel="stylesheet" href="home2/css/style.css"/>
	<script type="text/javascript" src="home2/js/jquery-1.7.2.min.js"></script>
	<script type="text/javascript" src="home2/js/main.js"></script>
	<script type="text/javascript" src="sweetalertjs/sweet-alert.js"></script>
</head>
<body>




<form action="" method="POST" id="form">
    <table class="form">
        <tr>
            <td>
          
                pid：<input type="text" name="pid" value="pid"/>
                jfuid：<input type="text" name="jfuid" value="jfuid"/>
                demandid：<input type="text" name="demandid" value="demandid"/>
                category1：<input type="text" name="category1" value="category1"/>
                category2：<input type="text" name="category2" value="category2"/>
                category3：<input type="text" name="category3" value="category3"/>
                demandtype：<input type="text" name="demandtype" value="demandtype"/>
                productname：<input type="text" name="productname" value="productname" />
                ordername：<input type="text" name="ordername" value="ordername"/>
                begintime：<input type="text" name="begintime" value="0" />
                endtime： <input type="text" name="endtime" value="2012-01-12" />
                xsxsurl： <input type="text" name="xsxsurl" value="xsxsurl" />
                paymentstandard：<input type="text" name="standardoperation" value="paymentstandard" />
                paymenttime：<input type="text" name="paymenttime" value="paymenttime"/>
                
                demanddescription：<input type="text" name="demanddescription" value="demanddescription"/>
                favorableway：<input type="text" name="favorableway" value="favorableway" />
                
                
                paymentstandard：<input type="text" name="paymentstandard" value="paymentstandard"/>
                jfutype：<input type="text" name="jfutype" value="jfutype"/>
                finishnum：<input type="text" name="finishnum" value="0"/>
                distributionstate：<input type="text" name="distributionstate" value="distributionstate"/>
                
                releasetime：<input type="text" name="releasetime" value="releasetime"/>
                finishtime：<input type="text" name="finishtime" value="2012-01-12" />
                releasenum：<input type="text" name="releasenum" value="12"/>
                targethumen：<input type="text" name="targethumen" value="targethumen"/>
                beginage：<input type="text" name="beginage" value="1"/>
                endage：<input type="text" name="endage" value="4"/>
                
                
                packageid：<input type="text" name="packageid" value="packageid" />    
                standardoperation：<input type="text" name="standardoperation" value="standardoperation" /> 
                otherreport：<input type="text" name="otherreport" value="otherreport" />    
                pleader：<input type="text" name="pleader" value="pleader" />   
                pphone：<input type="text" name="pphone" value="pphone" />    
                demand：<input type="text" name="demand" value="demand" />   
                
                fdstate：<input type="text" name="fdstate" value="0" />    
                dremark=：<input type="text" name="dremark" value="dremark" />   
                areaCityList：<input type="text" name="dremark" value="areaCityList" />
	
            </td>
        </tr>
        <tr>
            <td colspan="2" align="center">
                <input id="submit" class="btn" type="button" value="销售线索挖掘保存" />
<!--                 <input id="submit1" class="btn" type="button" value="销售线索挖掘保存text" /> -->
            </td>
        </tr>
    </table>
</form>



<form action="" method="POST" id="form2" style="display: none"
    <table class="form">
        <tr>
            <td>
                endtime：<input type="text" name="endtime" value="需要求结束时间"/>
                othercol：<input type="text" name="othercol" value="2012-01-12"/>
                xsxsurl：<input type="text" name="xsxsurl" value="2012-01-12"/>
                demanddescription：<input type="text" name="demanddescription" value="2012-01-12"/>
                begintime：<input type="text" name="begintime" value="2012-01-12"/>
                paymenttime：<input type="text" name="paymenttime" value="2012-01-12"/>
                beginage：<input type="text" name="beginage" value="2012-01-12"/>
                jfuid：<input type="text" name="jfuid" value="2012-01-12" />
                jfutype：<input type="text" name="jfutype" value="2012-01-12"/>
                fdstate：<input type="text" name="fdstate" value="0" />
                targethumen： <input type="text" name="targethumen" value="2012-01-12" />
                packageid： <input type="text" name="packageid" value="2012-01-12" />
                standardoperation：<input type="text" name="standardoperation" value="2012-01-12" />
                demandid：<input type="text" name="demandid" value="2012-01-12"/>
                demand：<input type="text" name="demand" value="2012-01-12"/>
                productname：<input type="text" name="productname" value="2012-01-12" />
                paymentstandard：<input type="text" name="paymentstandard" value="2012-01-12"/>
                otherreport：<input type="text" name="otherreport" value="2012-01-12"/>
                pleader：<input type="text" name="pleader" value="2012-01-12"/>
                demandtype：<input type="text" name="demandtype" value="2012-01-12"/>
                category1：<input type="text" name="category1" value="2012-01-12"/>
                pid：<input type="text" name="pid" value="2012-01-12" />
                pphone：<input type="text" name="pphone" value="2012-01-12"/>
                category3：<input type="text" name="category3" value="2012-01-12"/>
                category2：<input type="text" name="category2" value="2012-01-12"/>
                favorableway：<input type="text" name="favorableway" value="2012-01-12"/>
                endage：<input type="text" name="endage" value="2012-01-12"/>
                ordername：<input type="text" name="ordername" value="2012-01-12" /> 
            </td>
        </tr>
        <tr>
            <td colspan="2" align="center">
                <input id="submit2" class="btn" type="button" value="数据选保存" />
            </td>
        </tr>
    </table>
</form>
    <script>
    $.fn.serializeObject = function() {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [ o[this.name] ];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    }
    
    
     $("#submit").click(function(){  
//         var json = 
        
          var json={
	          "endtime":"2016-09-30",
			  "othercol":"目标客户名单url",
			  "dremark":"",
			  "xsxsurl":"销售线索url",
    		  "demanddescription": "需求描述",
			  "begintime": "2016-09-13",
			  "paymenttime": "结算时间",
			  "beginage": "1",
			  "jfuid": "1000",
			  "jfutype": "1",
			  "areaCityList": [
			    {
			      "orderpricetol": "500",
			      "orderprice": "1",
			      "releasenum": "100",
			      "targecity": "上海",
			      "subdescription": "价格说明"
			    },			    
			    {
			      "orderpricetol": "500",
			      "orderprice": "1",
			      "releasenum": "100",
			      "targecity": "上海",
			      "subdescription": "价格说明"
			    }
			  ],
			  "fdstate":"0",
			  "targethumen":"目标人群",
			  "packageid":"套餐id",
			  "standardoperation":"套餐/标准话术url",
			  "demand":"产品描述",
			  "productname":"产品名",
			  "paymentstandard":"结算标准",
			  "otherreport":"目标客户名单",
			  "pleader":"负责人",
			  "demandtype":"1",
			  "category1":"选择行业及发布类型",
			  "pid":"",
			  "pphone":"负责人电话",
			  "category3":"销售线索挖掘",
			  "category2":"电话营销 ",
			  "favorableway":0,
			  "endage":50,
			  "ordername":"需求名",
		};
        json=JSON.stringify(json);
//         JSON.stringify($('#form').serializeObject());
//         '{"article":'+article+'}';
        alert(json);
    	jQuery.ajax({
            type : 'POST',
            contentType : 'application/json',
            url : '/1_5/addOrUpdateCustomerDemand',
            processData : false,
            dataType : 'text',
            data : json,
            success : function(res) {
              alert("新增成功！");
            },
            error : function(XMLHttpRequest,textStatus,errorThrown) {
               alert(XMLHttpRequest.status);
               alert(XMLHttpRequest.readyState);
               alert(textStatus);
            }
        });
    });  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    $("#submit2").click(function(){  
        var article = JSON.stringify($('#form2').serializeObject());
        var json='{"article":'+article+'}';
        alert(json);
    	jQuery.ajax( {
            type : 'POST',
            contentType : 'application/json',
            url : '/1_5/addOrUpdateDatafiltering',
            processData : false,
            dataType : 'text',
            data : json,
            success : function(res) {
              alert("新增成功！");
            },
            error : function(XMLHttpRequest,textStatus,errorThrown) {
               alert(XMLHttpRequest.status);
               alert(XMLHttpRequest.readyState);
               alert(textStatus);
            }
        });
    });  
    $.postJSON = function(url, data, callback) {  
        return jQuery.ajax({  
            'type' : 'POST',  
            'url' : url,  
            'contentType' : 'application/json',  
            'data' : JSON.stringify(data),  
            'dataType' : 'text',  
            'success' : callback  
        });  
    }; 
    
    
    
    
    
    
    
    
    
    
    
    
//     $("#submit").click(function(){  
//         var jsondata={
// 	          "endtime":"2016-09-30",
// 			  "othercol":"目标客户名单url",
// 			  "dremark":"",
// 			  "xsxsurl":"销售线索url",
//     		  "demanddescription": "需求描述",
// 			  "begintime": "2016-09-13",
// 			  "paymenttime": "结算时间",
// 			  "beginage": "1",
// 			  "jfuid": "1000",
// 			  "jfutype": "1",
// 			  "areaCityList": [
// 			    {
// 			      "orderpricetol": "500",
// 			      "orderprice": "1",
// 			      "releasenum": "100",
// 			      "targecity": "上海",
// 			      "subdescription": "价格说明"
// 			    },			    
// 			    {
// 			      "orderpricetol": "500",
// 			      "orderprice": "1",
// 			      "releasenum": "100",
// 			      "targecity": "上海",
// 			      "subdescription": "价格说明"
// 			    }
// 			  ],
// 			  "fdstate":"0",
// 			  "targethumen":"目标人群",
// 			  "packageid":"套餐id",
// 			  "standardoperation":"套餐/标准话术url",
// 			  "demand":"产品描述",
// 			  "productname":"产品名",
// 			  "paymentstandard":"结算标准",
// 			  "otherreport":"目标客户名单",
// 			  "pleader":"负责人",
// 			  "demandtype":"1",
// 			  "category1":"选择行业及发布类型",
// 			  "pid":"包id",
// 			  "pphone":"负责人电话",
// 			  "category3":"销售线索挖掘",
// 			  "category2":"电话营销 ",
// 			  "favorableway":0,
// 			  "endage":50,
// 			  "ordername":"需求名",
// 		};
		
//         var jsonobj = JSON.stringify(jsondata);//JSON.parse(jsondata)  
// 		jQuery.ajax({
//             type : 'POST',
//             contentType : 'application/json',
//             url : 'addOrUpdateCustomerDemand',
//             processData : false,
//             dataType : 'text',
//             data : jsonobj,
//             success : function(res) {
// 	            if("Y"==res.code){
// 	            	alert("新增成功！");
// 	            }else{
// 	           		alert(res.msg);
// 	            }
//             },
//             error : function(XMLHttpRequest,textStatus,errorThrown) {
//                alert(XMLHttpRequest.status);
//                alert(XMLHttpRequest.readyState);
//                alert(textStatus);
//             }
//         });
//     });  
    
    
    
    
    
    
//     $("#submit2").click(function(){  
//         var jsondata={
// 	          "endtime":"2016-09-30",
//     		  "demanddescription": "需求描述",
// 			  "begintime": "2016-09-13",
// 			  "paymenttime": "结算时间",
// 			  "jfuid": "1000",
// 			  "jfutype": "1",
// 			  "fdstate":"0",
// 			  "ordername":"ordername",
// 			  "industry":"行业",
// 			  "servicetype":"类型",
// 			  "cleaningchannel":"清洗 1-电话",
// 			  "releasenum":"1000",
// 			  "demandprice":"10.00",
// 			  "paymentstandard":"结算模式",
// 			  "pleader":"负责人",
// 			  "pphone":"负责人电话",
// 			  "demandtype":"1",
// 			  "pid":"",
// 			  "favorableway":0,
// 			  "otherreport":"其他附件url/目标客户名单",  
// 			  "xsxsurl":"销售线索url",
// 			  "standardoperation":"套餐/标准话术url",
// 		};
		
//         var jsonobj = JSON.stringify(jsondata);//JSON.parse(jsondata)  
// 		jQuery.ajax({
//             type : 'POST',
//             contentType : 'application/json',
//             url : 'addOrUpdateDatafiltering',
//             processData : false,
//             dataType : 'text',
//             data : jsonobj,
//             success : function(res) {
// 	            if("Y"==res.code){
// 	            	alert("新增成功！");
// 	            }else{
// 	           		alert(res.msg);
// 	            }
//             },
//             error : function(XMLHttpRequest,textStatus,errorThrown) {
//                alert(XMLHttpRequest.status);
//                alert(XMLHttpRequest.readyState);
//                alert(textStatus);
//             }
//         });
//     });  
    </script>
</body>
</html>