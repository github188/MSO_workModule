window.json = {
	tab(){
		return '123456';
	},
	darren(){
		
	}
}


class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
	
	this.setName();
  }
  setName() {
	console.log('darren');
    return '(' + this.x + ', ' + this.y + ')';
  }
}
window.Point = new Point('25','36');
/**/
Point.prototype.findName = ()=>{
	return ('999999999999999999');
}


/*类的继承*/


  let Foo = class {
	// constructor(x, y) {
		// this.x = x;
		// this.y = y;
	// } 
	tab(){
		alert(this.x);
	}
	findName(){
		return this.y;
	}
	
  };
  /*es6继承*/
  class Bar extends Foo {
	   handleSomething(){
		console.log(this);
	 }
  }
  var bar = new Bar(2,5);

  
  /*扩展一个类的方法*/
  Object.assign(Point.prototype, {
  returnHome(){
	  
  },
  toValue(){
	  
  },
  name:'darren'
 });
 /*添加方法以后需要再次new Point实例化；才可以使用新增加的方法*/
   //debugger;
   
/*立即执行一个class*/ 
 let person = new class {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}('张三');

person.sayName(); // "张三

/*方法私有的两种表现方式*/


const bar1 = Symbol('bar');
const snaf = Symbol('snaf');

class myClass{
  // 公有方法
  foo(baz) {
    
	console.log(baz);
	this[bar1](baz);
  }
  // 私有方法
  [bar1](baz) {
    return this[snaf] = baz;
  }
};
	var a = new myClass(256);
	a.foo();
　　const _counter= Symbol('counter');
　　const _action= Symbol('action');

　　class Countdown{
	　　constructor(counter,action){
		　　this[_counter]= counter;
		　　this[_action]= action;
	　　}
	　　dec(){
		　　if(this[_counter]< 1)return;
		　　this[_counter]--;
		　　if(this[_counter]=== 0){
		　　	this[_action]();
		　　}
	　　}
　　}



  
  
  
  
  
  
  
  
  
  
  