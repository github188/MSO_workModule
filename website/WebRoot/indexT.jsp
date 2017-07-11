<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta  charset="utf-8">
	<script type="text/javascript" src="http://*/html/js/react.min.js"></script>
	<script type="text/javascript" src="http://*/html/js/react-dom.min.js"></script>
	<script type="text/javascript" src="http://*/html/js/browser.min.js"></script>
</head>
<body>
<div id="a"></div>
<script type="text/babel">
	React.render(<h1>React入门教程</h1>,document.getElementById("a"));
    React.render(<h1>React入门教程1</h1>,document.getElementById("a"));
</script>

<script type="text/javascript">
var flag=true;
$.ajax({
     type:"GET",
     url:urlOrderDetail,
     dataType:"json",
     cache:false,
     success:function(data){
         if(data.code=="Y"){
           console.log(data);
           React.render(<State/>,$("#new_demand div.demend_right")[0],function(){this.setState({data:data.orderDetail})});
         }
     },
     error:function(msg){
         console.log(msg);
     }
 });


var State=React.createClass({
	//在组件挂载之前调用一次。返回值将会作为 this.state 的初始值。
    getInitialState:function(){
      return {
        data:null
      }
    },
    //挂载： componentDidMount 在初始化渲染执行之后立刻调用一次，
    //仅客户端有效（服务器端不会调用）。在生命周期中的这个时间点，组件拥有一个DOM 展现，你可以通过 this.getDOMNode() 来获取相应 DOM 节点。
    componentDidMount:function(){
        $(".upload_info_show").live("click",function(){
            uploadtab();
        });
        $(".progress_speed .upload_submit button[type=submit]").live("click",function(){
          	location.reload();
        });
        $(".progress_speed .close,.progress_speed .button_close").live("click",function(){
            location.reload();
        });
    },
    //在组件的更新已经同步到DOM 中之后立刻被调用。该方法不会在初始化渲染的时候调用。
    //使用该方法可以在组件更新之后操作DOM 元素。
    componentDidUpdate:function(){
      $(".progress").hover(function(){
          $(this).find(".bublle").show();
      },function(){
          $(this).find(".bublle").hide();
      });
      if(sessionStorage.getItem("pid")!==""){
         $(".hideSub").hide();
      }
    },
    render:function(){
        if(this.state.data==null){
            return false;
        }
        var data=this.state.data;
        $(".upload_submit_show").live("click",function(){
          if(flag){
              postsj(data);
                          
          }
        }); 
        
        if(this.state.data.jdstate==4||this.state.data.jdstate==2){
          if(this.state.data.demandpause==1){
            return (
                <div>
                  <div className="right">
                    <div className="title-explain"><span style={{"font-size":"16px","float":"left","margin-left":"20px"}}>上传成单报告</span><a href="javascript:"className="upload_info_show"  style={{"color":"#fff","font-size":"14px","float":"right","margin-right":"10px"}}>查看上传记录>></a></div>
                    <div className="context-explain Supplier_Mining">
                      <p><span>本次上传单量：&nbsp;</span><input type="text" style={{"width":"160px"}} className="ordernum" /></p>
                      <p><span>上传成单报告：&nbsp;</span><a href="javascript:" id="selectfiles" style={{"color":"#0099ff","text-decoration":"underline","font-size":"14px"}}>选择文件</a></p>
                      <div><div className="ossfile" style={{"width":"180px"}}></div><button type="button" className="btn" id="postfiles">开始上传</button></div>
                      <p><span>上传录音文件：&nbsp;</span><a href="javascript:" id="selectfiles2" style={{"color":"#0099ff","text-decoration":"underline","font-size":"14px"}}>选择文件</a></p>
                      <div><div className="ossfile2" style={{"width":"180px"}}></div><button type="button" className="btn" id="postfiles2">开始上传</button></div>
                      <button type="button" className="submit upload_submit_show">确定上传</button><a href="javascript:history.go(-1);location.reload()"><button type="button" className="drafts">返回上一页</button></a>
                    </div>
                  </div>
                </div>
              ) 
          }  
    }
});

function postsj(result){
  var data={
    orderid:result.orderid,
    jfuid:sessionStorage.getItem("jfuid"),
    report:file1,
    recording:file2,
    ordernum:$(".Supplier_Mining input.ordernum").val(),
    demandid:result.demandid
  }
  $.ajax({
       type:"post",
       url:urlUploadSingleReport,
       dataType:"json",
       data:data,
       cache:false,
       success:function(data){
           if(data.code=="Y"){
           	   flag=false;
               console.log(data.msg);
               $(".progress_speed").show();
               $(".progress_speed .upload_info").hide();
               $(".progress_speed .upload_submit").show();
           }else{
             flag=true;
             alert(data.msg);
           }
           console.log(data);
         },
       error:function(msg){
         flag=true;
         console.log(msg);
       }
   });
}
React.render(<State/>,$("#new_demand div.demend_right")[0],function(){$(".loading_cover").hide();});
</script>
</body>
</html>
