var ProNotice = React.createClass({
	    getInitialState : function(){
	        return{
	            config :[]
	        }
	    },
	    //组件第一次渲染调用后，使用ajax
	    componentDidMount: function() {
	      var config = this.state.config;
	      $.ajax({
					type:"get",
					url:urlNotice,
					async:true,
					contentType:"application/x-www-form-urlencoded;charset=utf-8",
					dataType: "json",
					success:function(result){
            this.setState({
               config : result.noticeList
            });
						$(".notice ul li a").click(function(){
							sessionStorage.setItem("fromHome","0");
							window.location.href = "login.html";
						});
						$(".notice ul li:nth-child(1)").addClass("active");
						setInterval(function(){
							$(".notice  ul").animate({"scrollTop":($(".notice ul li.active").index()+1)*noticeHeight+"px"},noticesteep,function(){
								if($(".notice ul li.active").index()==noticeLength-1){
									$(".notice ul li").eq(0).addClass("active").siblings().removeClass("active");
									$(".notice  ul").scrollTop("0px");
								}else{
									$(".notice ul li.active").next().addClass("active").siblings().removeClass("active");
								}
							});
						},noticetimeOut);
          }.bind(this),
					error : function(XMLHttpRequest, textStatus, errorThrown) {
							if(XMLHttpRequest.status=="500"){
									window.location.href = "../page500.html";
								}else if(XMLHttpRequest.status=="404"){
									window.location.href = "../page500.html";
								}else{
									console.log(XMLHttpRequest);
							console.log(textStatus);
							console.log(errorThrown);
								}
					}
	      });
	    },
	  render: function() {
	    var config = this.state.config;//初始化数组
	    var items = config.map(function(item,index){
	        return (
						<li key={index}><a href="javascript:;"><span>需求方&emsp;{item.realname}&nbsp;刚刚发布了{item.servicetype}需求&emsp;{item.ordername}，需求总价<span className="money">￥{item.demandpricetol}</span></span></a><span className="right">{item.releasetime.substring(5,10)}</span></li>
	        );
	    },this);
	    return (
	      <ul>
	        {items}
	      </ul>
	    );
	  }
	});

ReactDOM.render(<ProNotice />,$(".noticePro")[0]);
