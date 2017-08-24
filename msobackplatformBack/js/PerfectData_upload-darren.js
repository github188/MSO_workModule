function getSignature(parm){
	
	if(!parm){
		return;
	}
	
	if(!parm.fileName){
		return;
	}
	
	
	
	
	
	
	var xmlhttp = null;
    if (window.XMLHttpRequest){
        xmlhttp=new XMLHttpRequest();
    }else if (window.ActiveXObject){
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

	if (xmlhttp){
      
        var credentials = parm.fileName;
		/*后台签名上传*/
         //https://back.mshuoke.com/aliOrder/customerDelve.do?stid=undefined&type=fbxq  
        serverUrl = serverUrlpre +'/ali.do?uid='+roleid+'&type='+credentials;
       
        xmlhttp.open( "GET", serverUrl, false );
        xmlhttp.send( null );
        return xmlhttp.responseText
    }else{
        alert("Your browser does not support XMLHTTP.");
    }
}



function setupload(param,signature){
	var isSeccess = false;
	//$(param.formId)[0].action = signature.host;
	$(param.formId +' '+ param.key).val(signature.dir+'${filename}');
	$(param.formId +' '+ param.OSSAccessKeyId).val(signature.accessid);
	$(param.formId +' '+ param.policy).val(signature.policy);
	$(param.formId +' '+ param.Signature).val(signature.signature);
	var formData = new FormData($(param.formId)[0]);
	//formData.append("Signature",signature.signature);
	return $.when(
		$.ajax({  
			url : signature.host,  
			type : 'POST',  
			data : formData,  
			processData : false,  
			contentType : false,  
		})
	);
}
