var demands = [];
var demand1 = new Object();
demand1.name = "销售线索挖掘";
demand1.class = "nav-01";
demand1.classnone = "hide";
var demand2 = new Object();
demand2.name = "数据加工";
demand2.class = "nav-02";
demand2.classnone = "hide";
var demand3 = new Object();
demand3.name = "标签匹配";
demand3.class = "nav-03 icon-none";
demand3.classnone = "icon-none";
//var demand4 = new Object();
//demand4.name = "运营商增值服务";
//demand4.class = "nav-04 icon-none";
//demand4.classnone = "icon-none";
//var demand5 = new Object();
//demand5.name = "到场体验";
//demand5.class = "nav-05 icon-none";
//demand5.classnone = "icon-none";
//var demand6 = new Object();
//demand6.name = "电销代理";
//demand6.class = "nav-06 icon-none";
//demand6.classnone = "icon-none";
demands[0] = demand1;
demands[1] = demand2;
demands[2] = demand3;
//demands[3] = demand4;
//demands[4] = demand5;
//demands[5] = demand6;

var explains = [];
var explain1 = new Object();
explain1.name = "销售线索挖掘";
explain1.icon = "nav-11";
explain1.details = "通过致电目标群体，以标准话术挖掘意向客户";
var explain2 = new Object();
explain2.name = "数据加工";
explain2.icon = "nav-12";
explain2.details = "由甲方提供数据，筛选出意向客户";
var explain3 = new Object();
explain3.name = "标签匹配";
explain3.icon = "nav-13";
explain3.details = "指定坐席人数进行外呼";
//var explain4 = new Object();
//explain4.name = "运营商增值服务";
//explain4.icon = "nav-14";
//explain4.details = "由运营商不定期发布的增值业务任务，如手机套餐，满意度调查";
//var explain5 = new Object();
//explain5.name = "到场体验";
//explain5.icon = "nav-15";
//explain5.details = "以意向客户到达甲方现场为准";
//var explain6 = new Object();
//explain6.name = "电销代理";
//explain6.icon = "nav-16";
//explain6.details = "代理甲方产品进行销售分成";
explains[0] = explain1;
explains[1] = explain2;
explains[2] = explain3;
//explains[3] = explain4;
//explains[4] = explain5;
//explains[5] = explain6;

var TabMenu = React.createClass({
    render:function(){
        var demandList = demands.map(
            function(demand,index){
                return(<li key={index} className={demand.class}><span className="text">{demand.name}</span><span className={demand.classnone}>暂无</span><i className={demand.classnone}></i></li>);
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

var TabBox = React.createClass({
    render:function(){
        var explainList = explains.map(
            function(explain,index){
                return(<li key={index} className={explain.icon}><h4><span className="icon"></span>{explain.name}</h4><p>{explain.details}</p></li>);
            }
        );
        return(<ul>{explainList}</ul>);
    }
});

ReactDOM.render(<TabMenu />,$(".context-choose")[0]);
ReactDOM.render(<TabBox />,$(".context-explain")[0],
    function(){
        var $div_li = $(".context-choose li");
        $div_li.click(function(){
            $(this).addClass("selected").siblings().removeClass("selected");
            var index =  $div_li.index(this);
            $(".context-explain li").eq(index).addClass("selected").siblings().removeClass("selected");
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
                var oType = $(".context-choose li.selected span.text").text();
                sessionStorage.setItem("servicetype", oType);
                if($(".new-demand .left .context-choose li.nav-01").hasClass("selected")){
                	location.href = "new_demand.html";
                }else{
                	location.href = "customerNewDemandDate.html";
                }
            }
        })
        $(".loading_cover").hide();
    }
);
