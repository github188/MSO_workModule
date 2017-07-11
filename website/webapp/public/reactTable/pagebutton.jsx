

class pageButton extends React.Component {

    constructor(props) {
        super(props);
		this.state = {
			pageHtml:''
		};
    }
	componentDidMount(){
		this.setState({
			pageHtml:this.createContent(1)
		});
		
		
		
		
		// var ul = document.getElementById('ul');
       // var li = ul.getElementsByTagName('li');
       // li[2].className = 'background';
       // var num01 = 1;
       // var num02 = 8/*总数*/;
//1 //首页的点击事件
          //  li[li.length-li.length].onclick = function(){
              //  Background(2);
               // num01 = 1;
               // content(num01);
           // }
//2 //尾页的点击事件
           // li[li.length-1].onclick = function(){
             //   Background(li.length-3);
              //  num01 = num02-(li.length-5);
               // content(num01)
           // }
			
//3 //上一页的点击事件
/*
            li[li.length-(li.length-1)].onclick = function(){

                for(var j = 0;j<li.length-4;j++){
                    if(li[j+2].className == 'background' && li[j+2].innerHTML != 1){
                        if(j+2 != li.length-(li.length-2)){
                            Background(j+1);
                        }
                        break;
                    }
                }
                if(j+2 == li.length-(li.length-2)){
                    num01 -- ;
                    content(num01);
                }
            }
			*/
//4 下一页的点击事件
	/*
            li[li.length-2].onclick = function(){
                for(var j = 0;j<li.length;j++){
                    if(li[j].className == 'background' && li[j].innerHTML < num02){  
                        if(j+1 < li.length-2){
                            Background(j+1);
                        }
                        break;
                    }
                }
                if(j+1 == li.length-2){
                    num01++;
                    content(num01);
                }
            }        
//     分页的点击事件
            for(var i = 0;i<li.length-4;i++){
                li[i+2].index = i+2;
                li[i+2].onclick = function(){
                    Background(this.index);
                }
            }
    //把所有的分页背景去掉，给指定的分页添加背景颜色
            function Background(num){
                for(var i = 0;i<li.length;i++){
                    li[i].className = li[i].className.replace('background','');
                    li[num].className = 'background';
                }
            }
    // 给li 写内容
        content(num01);
            function content(number){
                for(var i=0;i<li.length-4;i++){
					console.log(i);
					
                    li[i+2].innerHTML = number;
                    number++;
                }
            } 
		*/
		this.nextClick();
		this.prevClick();
	}
	
	createContent(num01){
		/*创建默认得内容*/
		var arr = [];
		for(var i=0;i<10;i++){
			arr.push(i);
		}
		return  arr.map(function (name,index){
			if(name==0){
				return (<li className="background">{index}</li>)
			}else{
				return (<li>{index}</li>)
			}
			
		});
	}
	/*上一页*/
	prevClick(){
		var li = $('#pageBox li');
		var _this = this;
		var num01 = 0;
		 li[1].onclick = function(){
                for(var j = 0;j<li.length-4;j++){
                    if(li[j+2].className == 'background' && li[j+2].innerHTML != 1){
                        if(j+2 != li.length-(li.length-2)){
                            _this.setBackground(j+1);
                        }
						console.log('1233');
                        break;
                    }
                }
                if(j+2 == li.length-(li.length-2)){
                     num01 -- ;
                    _this.createContent(num01);
                }
            }
	}
	/*下一页*/
	nextClick(){
		var li = $('#pageBox li');
		var _this = this;
		debugger;
		  li[li.length-2].onclick = function(){
                for(var j = 0;j<li.length;j++){
                    if(li[j].className == 'background' && li[j].innerHTML < num02){  //* && 写最后一页的总数*/
                        if(j+1 < li.length-2){
                           _this.setBackground(j+1);
                        }
                        break;
                    }
                }
                if(j+1 == li.length-2){
                    num01++;
                    _this.createContent(num01);
                }
            }        
	}
	setBackground(num){
		var li = $('#pageBox li');
		var _this = this;
		for(var i = 0;i<li.length;i++){
			li[i].className = li[i].className.replace('background','');
			li[num].className = 'background';
		}
	}
    render() {
        return (
            <div id='page' className="page">
				<ul id="pageBox">
					<li>首页</li>
					<li>上一页</li>
					{this.state.pageHtml}
					<li>下一页</li>
					<li>尾页</li>
				</ul>
			</div>
        );
    }
}

export default pageButton;