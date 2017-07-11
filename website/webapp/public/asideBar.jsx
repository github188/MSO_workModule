class AsideBar extends React.Component{
	constructor(props) {
		super(props);
	}
	componentDidMount(){
		
		function rightBar() {
			$(".go-to-top").hide();
	        $(window).scroll(function () {
	            var scroll_top = $(document).scrollTop();
	            if (scroll_top > 100){
	                $(".go-to-top").fadeIn(100);
	            }else{
	              	$(".go-to-top").fadeOut(100);
	            }
	        });
			
	        $(".go-to-top").click(function(){
	            $("body,html").stop(false,true).animate({"scrollTop":0});
	        });
			//$("#contactQQ")[0].onclick = function() {
			//	ukefu.openChatDialog();
				//$("#ukefu-point").click(); 
			//}
	    }
        rightBar();
	}
	render(){
		return(
			<div className="aside_bar">
				<ul>  
					<li><a href="//wpa.qq.com/msgrd?v=3&uin=2850840276&site=qq&menu=yes" target="_blank" id="contactQQ"></a></li>
					<li id="contactTel"><a href="javascript:"></a></li>
					<li><a href="javascript:" className="go-to-top"></a></li>
				</ul>
			</div>
        )
	}
}

export default AsideBar;
