var demands = [];
var demand1 = new Object();
demand1.name = "销售线索挖掘";
demand1.description = "通过致电目标群体，以标准话术挖掘意向客户";
demand1.class = "nav-01";
demand1.classnone = "hide";
var demand2 = new Object();
demand2.name = "数据加工";
demand2.description = "由甲方提供数据，筛选出意向客户";
demand2.class = "nav-02";
demand2.classnone = "hide";
var demand3 = new Object();
demand3.name = "标签匹配";
demand3.description = "标签匹配挖掘意向客户";
demand3.class = "nav-03 icon-none";
demand3.classnone = "icon-none";

demands[0] = demand1;
demands[1] = demand2;
demands[2] = demand3;

var TabMenu = React.createClass({
    render:function(){
        var demandList = demands.map(
            function(demand,index){
                return(
					<li key={index} className={demand.class}>
						<h3>{demand.name}</h3>
						<span className={demand.classnone}>暂无</span>
						<i className={demand.classnone}></i>
						<p>{demand.description}</p>
					</li>
				);
            }
        );
        return(
            <div>
                <ul>{demandList}</ul>
                <a href="javascript:;" className="next-stop noThrough">下一步</a>
            </div>

        );
    }
});



ReactDOM.render(<TabMenu />,$(".new-demandN")[0],
    function(){
		$(".loading_cover").hide();
        var $div_li = $(".new-demandN li");
        $div_li.click(function(){
            $(this).addClass("selected").siblings().removeClass("selected");
            if($(this).hasClass("icon-none")){
                $(".next-stop").addClass("noThrough");
                return false;
            }else{
                $(".next-stop").removeClass("noThrough");
            }
        });
        $("a.next-stop").click(function(){
            if($(this).hasClass("noThrough")){
                alert("请选择一项");
                return false;
            }else{
                sessionStorage.removeItem("servicetype");
                var oType = $(".new-demandN li.selected span.text").text();
                sessionStorage.setItem("servicetype", oType);
                if($(".new-demandN li.nav-01").hasClass("selected")){
                	location.href = "new_demand.html";
                }else{
                	location.href = "customerNewDemandDate.html";
                }
            }
        })    
    }
);
