var total=$("#solid ul").children().length;
		var now=0;
		function clock()
		  {
			  var cname
			  if(now==total -1){
				now=0; 
			 }else{
				now=now+1; 
			 }
			 for(i=0;i<total;i++){
				 	cname="#solid .solid" + i;
				   $("#solid ul li").eq(i).css("display","none");
				   $("#btt span").eq(i).css("background","#6C6C6C");
				   $(cname).css("display","none");
			 }
			 
		  cname="#solid .solid" + now;
		  $("#solid ul li").eq(now).fadeIn(400);
		  $("#btt span").eq(now).css("background","#F4BB41");
		  $(cname).css("display","block");
		  }
	 $(document).ready(function() {
		$("#solid ul li").eq(0).fadeIn(400);
		$("#btt span").eq(0).css("background","#F4BB41");
		$("#solid .solid0").fadeIn(50);
		$("#solid ul li,#btt span").mouseenter(function(){
			window.clearInterval(int);
			
		});
		$("#btt span").mouseenter(function(){
			if($(this).index()!=now){
				now=$(this).index()-1;
				clock();
			}
		});
		var int=self.setInterval("clock()",3000)
		$("#solid ul li,#solid span").mouseleave(function(){
			int=self.setInterval("clock()",3000)
		});
		});