class msoHead extends React.Component{
	constructor(props) {
		super(props);
	}
	componentDidMount(){
		
        this.msoheadShowBanner();
	}
	componentDidUpdate(){
		
	}
	msoheadShowBanner(){
		 document.onmousemove = function (){
            document.onmousemove = null;
            return false;
        };
		var counTimer;
        var oPrev = $('.msohead-show .prev')[0];
        var oNext = $('.msohead-show .next')[0];
        var oList = $('.msohead-show .list')[0];
        var oBar = $('.msohead-show .bar')[0];
        var oBli = oBar.children;
        var aLi = oList.children;
        var iNow = 0;
        var timer = null;
        oList.innerHTML += oList.innerHTML;
         
        oList.style.width =6000+'px';
        oBli[0].style.background = '#ffffff';
		
        var W = $(oList).width()/2;
        for(var i=0;i<oBli.length;i++){
            (function (index){
                oBli[i].onclick = function (){
                    if(iNow%oBli.length==0 && index==oBli.length-1){
                        iNow--;
                    }
                    if(iNow%oBli.length==-1 && index == 0){
                        iNow++;
                    }
                    if(iNow%oBli.length==oBli.length-1 && index==0){
                        iNow++;
                    }
                    if(iNow>=0 && iNow<=oBli.length){
                        iNow = index;
                    }
                    if(iNow > oBli.length){
                        if(index>iNow%oBli.length){
                            iNow = iNow + (index - iNow%oBli.length);
                        }else{
                            iNow = iNow - (iNow%oBli.length - index);
                        }
                    }
                    if(iNow<0 && iNow >=-oBli.length){
                        iNow =  -(-index%oBli.length + oBli.length)%oBli.length;
                    }
                    if(iNow < -oBli.length){
                        if(index >=(iNow%oBli.length + oBli.length)%oBli.length){
                         
                                iNow = iNow + (index - ((iNow%oBli.length)+oBli.length)%oBli.length);   
                        }else{
                                iNow = iNow - (((iNow%oBli.length)+oBli.length)%oBli.length-index); 
                        }
                    }
                    tab(iNow);
                };
            })(i);
        }
 
        oPrev.onclick = function (){
            iNow--;
            document.title = iNow;
            tab(iNow);
        };
         
        oNext.onclick = function (){
            iNow++;
            tab(iNow);
        };
		
     
        function tab(iNow){
            for(var i=0;i<oBli.length;i++){
                oBli[i].style.background = '';
            }
            if(iNow>0){
                oBli[iNow%(aLi.length/2)].style.background = '#fff';
            }else{
                oBli[(iNow%oBli.length+oBli.length)%oBli.length].style.background = '#fff';
            }
            Move(oList,-iNow*500);
        };
		
        counTimer = setInterval(function (){
			iNow++;
			tab(iNow);
		},3000);
		
		$('.msohead-show').mouseover(function (){
			clearInterval(counTimer);
		});
		$('.msohead-show').mouseout(function (){
			 counTimer = setInterval(function (){
				iNow++;
				tab(iNow);
			},3000);
		});
		
		
		var left = 0;
		function Move(obj,iTarget){
			clearInterval(timer);
			var count = Math.floor(600/30);
			var start = left;
			var dis = iTarget - start;
			var n = 0;
			timer = setInterval(function (){
				n++;
				var a = 1-n/count;
				left = start + dis*(1-a*a*a);
				if(left<0){
					//-500开始；
					//让left变成负数；那么久从500开始负数；
					//console.log(obj);
					//console.log(left );
					obj.style.left = left % W + 'px';
				}else{
					obj.style.left = -W + left%W + 'px';
				}
				//从总的开始负数；
				if(n==count){
					clearInterval(timer);
				}
			},30);
		};
	}
	render(){
		return (<div className="msohead">
			<div className="con-box">
				<div className="title">
					<img src="images/index/home-news-title.png" alt="眸事资讯" />
					<a href="headline.html" target="_blank">查看更多></a>
				</div>
				<div className="msohead-show">
					<span className="prev">left</span>
					<span className="next">right</span>
					<ul className="list">
						<li><a target="_blank" href="//news.mshuoke.com/article/20170224104211726.html"><img src="images/index/1.jpg" /></a></li>
						<li><a target="_blank" href="//news.mshuoke.com/article/20170119033553973.html"><img src="images/index/2.jpg" /></a></li>
						<li><a target="_blank" href="//news.mshuoke.com/article/20170224101730952.html"><img src="images/index/3.jpg" /></a></li>
						<li><a target="_blank" href="//news.mshuoke.com/article/20170302033924708.html"><img src="images/index/4.jpg" /></a></li>
					</ul>
					<ul className="bar">
						<li style={{background:'#ffffff'}}>1</li>
						<li>2</li>
						<li>3</li> 
						<li>3</li> 
					</ul>
				</div>
				<div className="msohead-list">
					<div className="top">
						<div className="left"><img src="images/index/5.jpg" /></div>
						<div className="right">
							<h3><a target="_blank" href="//news.mshuoke.com/article/20170223012820131.html">企业客户资源哪里找,几个...</a></h3>
							<p><a target="_blank" href="//news.mshuoke.com/article/20170223012820131.html">对于企业来说，客户是一个企业的命脉，企业靠客户赚钱维持生存，没有客户企业将面临被“饿死”的境地；对于销售而言，客户信息的质量和数量与个人销售业绩成正比，客户资料收集是销售工作的第一步。如何寻找客户源？以下几个窍门...</a></p>
						</div>
					</div>
					<div className="bottom">
						<ul className="list">
							<li><a target="_blank" href="//news.mshuoke.com/article/20170303100127388.html"><span className="date">2017/03/03</span>如何做地推活动方案，你需要提...</a></li>
							<li><a target="_blank" href="//news.mshuoke.com/article/20170303095223009.html"><span className="date">2017/03/03</span>ROI分析评估指南，简单5步判定...</a></li>
							<li><a target="_blank" href="//news.mshuoke.com/article/20170302033224193.html"><span className="date">2017/03/02</span>寻找潜在客户，做销售的你需要...</a></li>
							<li><a target="_blank" href="//news.mshuoke.com/article/20170302033729943.html"><span className="date">2017/03/02</span>如何用数据挖掘，解决企业营销...</a></li>
							<li><a target="_blank" href="//news.mshuoke.com/article/20170302040921183.html"><span className="date">2017/03/02</span>大数据时代都在谈的用户画像，...</a></li>
							<li><a target="_blank" href="//news.mshuoke.com/article/20170223012246451.html"><span className="date">2017/02/23</span>做好品牌整合营销，你需要了解...</a></li>
							<li><a target="_blank" href="//news.mshuoke.com/article/20170215065318901.html"><span className="date">2017/02/15</span>初入职场的销售新手应该如何找...</a></li>
							<li><a target="_blank" href="//news.mshuoke.com/article/20170119032929237.html"><span className="date">2017/01/19</span>大数据时代，企业市场如何挖掘...</a></li>
						</ul>
					</div>
					
				</div>
			</div>
		</div>);
	}
}
export default msoHead;
