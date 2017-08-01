function getSignature(parm){
	
	if(!parm){
		return;
	}
	
	if(!parm.fileName){
		return;
	}
	var uid = $.sessionStorage("jfuid");
	var xmlhttp = null;
    if (window.XMLHttpRequest){
        xmlhttp=new XMLHttpRequest();
    }else if (window.ActiveXObject){
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

	if (xmlhttp){
      
        var credentials = parm.fileName;
           
        serverUrl = serverUrlpre +'/ali.do?uid='+uid+'&type='+credentials;
       
        xmlhttp.open( "GET", serverUrl, false );
        xmlhttp.send( null );
        return xmlhttp.responseText
    }else{
        alert("Your browser does not support XMLHTTP.");
    }
}
